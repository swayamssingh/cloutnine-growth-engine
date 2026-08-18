import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gvpqjdlbiibqvlrzgwdi.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2cHFqZGxiaWlicXZscnpnd2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYzNjE3MTEsImV4cCI6MjEwMTkzNzcxMX0.mqHCSv5rL93QwN9K6vIBUmbIse5utoSZ_1HVpxGwebk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Blog = {
  id: number
  slug: string
  title: string
  eyebrow: string
  category: string
  read_time: string
  meta_title: string
  meta_description: string
  content: string
  published_at: string
  is_published: boolean
}