DROP POLICY IF EXISTS "Anyone can submit news" ON public.news_submissions;
CREATE POLICY "Anyone can submit news" ON public.news_submissions
FOR INSERT TO anon, authenticated
WITH CHECK (
  type IN ('article','research','white_paper','white paper','other')
  AND char_length(title) BETWEEN 1 AND 300
  AND char_length(author) BETWEEN 1 AND 200
  AND char_length(email) <= 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (linkedin IS NULL OR char_length(linkedin) <= 500)
  AND (other_type IS NULL OR char_length(other_type) <= 200)
  AND (file_path IS NULL OR char_length(file_path) <= 500)
  AND (file_name IS NULL OR char_length(file_name) <= 255)
);

DROP POLICY IF EXISTS "Anyone can subscribe" ON public.newsletter_subscribers;
CREATE POLICY "Anyone can subscribe" ON public.newsletter_subscribers
FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(email) <= 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
);

DROP POLICY IF EXISTS "Anyone can upload a submission file" ON storage.objects;
CREATE POLICY "Anyone can upload a submission file" ON storage.objects
FOR INSERT TO anon, authenticated
WITH CHECK (
  bucket_id = 'news-submissions'
  AND name ~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/[^/]{1,200}$'
);