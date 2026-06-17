import { createClient } from "@supabase/supabase-js";

// Konfigurasi diambil dari environment variable (lihat .env.example & SUPABASE_SETUP.md).
// Jika belum diisi, aplikasi otomatis memakai localStorage (mode lokal per-perangkat).
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = url && key ? createClient(url, key) : null;
export const hasSupabase = !!supabase;
