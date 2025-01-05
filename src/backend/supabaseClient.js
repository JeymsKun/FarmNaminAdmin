import { createClient } from '@supabase/supabase-js';

// Supabase credentials
const supabaseUrl = 'https://vysmsuskuwjvomdgjtlu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5c21zdXNrdXdqdm9tZGdqdGx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0MDU1MjYsImV4cCI6MjA0ODk4MTUyNn0.HTlMZa-LJCTG2oIz9QXULb18BUxlHyHGnlmuNNCmxm8';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);