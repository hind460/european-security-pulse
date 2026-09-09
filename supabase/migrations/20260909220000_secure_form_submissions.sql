-- Contact and news submissions now go through trusted server functions.
REVOKE INSERT ON public.contact_messages FROM anon, authenticated;
REVOKE INSERT ON public.news_submissions FROM anon, authenticated;

DROP POLICY IF EXISTS "Anyone can send a contact message" ON public.contact_messages;
DROP POLICY IF EXISTS "Anyone can submit news" ON public.news_submissions;
DROP POLICY IF EXISTS "Anyone can upload a submission file" ON storage.objects;

-- Submission files are private and can only be accessed with the service role.
INSERT INTO storage.buckets (
  id,
  name,
  public,
  file_size_limit,
  allowed_mime_types
)
VALUES (
  'news-submissions',
  'news-submissions',
  false,
  10485760,
  ARRAY[
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain',
    'text/markdown',
    'application/octet-stream'
  ]
)
ON CONFLICT (id) DO UPDATE SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;
