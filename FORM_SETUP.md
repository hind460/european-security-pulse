# Form storage and email setup

The website stores form submissions in the project's Lovable Cloud database.
Contact and news submissions also trigger a private email notification through
Resend. Newsletter signups are stored without sending an internal notification.

## 1. Apply the Lovable Cloud migration

The three database tables already exist. The latest migration only creates the
private bucket for news attachments:

1. In Lovable, open `More > Cloud > SQL editor`.
2. Open `supabase/migrations/20260909220000_secure_form_submissions.sql` from
   the PR's **Files changed** tab.
3. Copy its contents into the SQL editor and run it once.

The existing row-level security policies allow form submissions but do not
allow visitors to read stored data. No separate Supabase account is needed.

Submissions can then be reviewed in:

- `More > Cloud > Database > contact_messages`
- `More > Cloud > Database > news_submissions`
- `More > Cloud > Database > newsletter_subscribers`
- `More > Cloud > Storage > news-submissions` for private attachments

## 2. Configure Resend

Create a free Resend account, add `internationalsecurityhub.com`, and add the DNS
records Resend provides to Namecheap. Wait until Resend marks the domain as
verified, then create an API key.

## 3. Add Vercel environment variables

In Vercel, open the project and go to `Settings > Environment Variables`. Add
these to Production, Preview, and Development as appropriate:

| Variable                 | Value                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------ |
| `RESEND_API_KEY`         | The API key created in Resend                                                        |
| `FORM_NOTIFICATION_TO`   | The inbox that should receive form alerts; multiple addresses can be comma-separated |
| `FORM_NOTIFICATION_FROM` | For example, `International Security Hub <forms@internationalsecurityhub.com>`       |

Never prefix the Resend variables with `VITE_`; that would expose the API key
to browser code. After adding or changing variables, redeploy the latest Vercel
deployment.

The Lovable Cloud URL and publishable key are already configured in the project.
If Resend is not configured, valid submissions are still stored and the server
logs a warning that the notification was skipped.

## 4. Test after deployment

1. Submit the contact form and check `contact_messages` plus the notification
   inbox.
2. Submit news with a small PDF and check `news_submissions`, the private
   storage bucket, and the notification inbox.
3. Subscribe a test address and check `newsletter_subscribers`.
4. Confirm duplicate newsletter signups still show a success state.
