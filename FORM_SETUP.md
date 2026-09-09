# Form storage and email setup

The website stores form submissions in Supabase. Contact and news submissions
also trigger a private email notification through Resend. Newsletter signups are
stored without sending an internal notification.

## 1. Apply the Supabase migrations

Apply the files in `supabase/migrations` to the Supabase project used by the
website. The latest migration creates a private `news-submissions` storage
bucket and makes contact/news writes server-only.

Using the Supabase CLI:

```bash
supabase link --project-ref YOUR_PROJECT_REF
supabase db push
```

Alternatively, paste the migrations into the Supabase dashboard SQL editor in
filename order and run them there.

Submissions can then be reviewed in:

- `Table Editor > contact_messages`
- `Table Editor > news_submissions`
- `Table Editor > newsletter_subscribers`
- `Storage > news-submissions` for private attachments

## 2. Configure Resend

Create a free Resend account, add `internationalsecurityhub.com`, and add the DNS
records Resend provides to Namecheap. Wait until Resend marks the domain as
verified, then create an API key.

## 3. Add Vercel environment variables

In Vercel, open the project and go to `Settings > Environment Variables`. Add
these to Production, Preview, and Development as appropriate:

| Variable                    | Value                                                                                |
| --------------------------- | ------------------------------------------------------------------------------------ |
| `SUPABASE_URL`              | The project's Supabase URL                                                           |
| `SUPABASE_SERVICE_ROLE_KEY` | The project's secret service-role key                                                |
| `RESEND_API_KEY`            | The API key created in Resend                                                        |
| `FORM_NOTIFICATION_TO`      | The inbox that should receive form alerts; multiple addresses can be comma-separated |
| `FORM_NOTIFICATION_FROM`    | For example, `International Security Hub <forms@internationalsecurityhub.com>`       |

Never prefix the service-role or Resend variables with `VITE_`; that would
expose them to browser code. After adding or changing variables, redeploy the
latest Vercel deployment.

If Resend is not configured, valid submissions are still stored in Supabase and
the server logs a warning that the notification was skipped.

## 4. Test after deployment

1. Submit the contact form and check `contact_messages` plus the notification
   inbox.
2. Submit news with a small PDF and check `news_submissions`, the private
   storage bucket, and the notification inbox.
3. Subscribe a test address and check `newsletter_subscribers`.
4. Confirm duplicate newsletter signups still show a success state.
