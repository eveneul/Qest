import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wcmdmrflmzcvpdqjnipk.supabase.co'; // 대시보드에서 복사한 API URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjbWRtcmZsbXpjdnBkcWpuaXBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5MDE0ODgsImV4cCI6MjA1MzQ3NzQ4OH0.2Z1DLkzmOSaoC-CjE69y4Ehu5CRMraKhkbO11i13Q_s'; // 대시보드에서 복사한 anon 키

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
