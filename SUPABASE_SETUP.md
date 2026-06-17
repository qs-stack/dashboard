# Setup Supabase — Data Terpusat & Login Aman

Dengan Supabase, semua data (tender, personel, RKAP) tersimpan di **satu database di cloud**, bukan di browser. Artinya:
- Data sama di semua perangkat & semua pengguna.
- Tahan redeploy (tidak akan hilang).
- Login memakai **akun asli** (email + password) yang diverifikasi server — lebih aman untuk data semi-rahasia.

> Jika environment variable Supabase **tidak diisi**, aplikasi otomatis kembali ke mode **localStorage** (data per-perangkat, login username sederhana). Jadi Anda bisa menyiapkan Supabase tanpa merusak versi yang sekarang.

---

## 1. Buat project Supabase
1. Masuk ke https://supabase.com → **New project**.
2. Beri nama (mis. `qs-epcc`), pilih region terdekat (Singapore), set database password.
3. Tunggu project selesai dibuat (±2 menit).

## 2. Ambil kunci API
Buka **Project Settings → API**, catat:
- **Project URL** → untuk `VITE_SUPABASE_URL`
- **anon public key** → untuk `VITE_SUPABASE_ANON_KEY`

## 3. Buat tabel & aturan keamanan
Buka **SQL Editor → New query**, tempel SQL berikut, lalu **Run**:

```sql
-- Tabel data utama: satu baris berisi seluruh state dashboard
create table if not exists public.dashboard (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Tabel peran pengguna
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nama text,
  role text not null default 'viewer' check (role in ('editor','viewer'))
);

alter table public.dashboard enable row level security;
alter table public.profiles enable row level security;

-- Fungsi bantu: apakah user saat ini editor?
create or replace function public.is_editor() returns boolean
language sql security definer stable as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'editor');
$$;

-- profiles: tiap user hanya boleh membaca profilnya sendiri
drop policy if exists "read own profile" on public.profiles;
create policy "read own profile" on public.profiles
  for select to authenticated using (auth.uid() = id);

-- dashboard: semua user yang login boleh MEMBACA
drop policy if exists "auth read dashboard" on public.dashboard;
create policy "auth read dashboard" on public.dashboard
  for select to authenticated using (true);

-- dashboard: hanya EDITOR yang boleh menulis
drop policy if exists "editor insert dashboard" on public.dashboard;
create policy "editor insert dashboard" on public.dashboard
  for insert to authenticated with check (public.is_editor());

drop policy if exists "editor update dashboard" on public.dashboard;
create policy "editor update dashboard" on public.dashboard
  for update to authenticated using (public.is_editor()) with check (public.is_editor());

-- Baris awal kosong
insert into public.dashboard (id, data) values ('main', '{}'::jsonb)
  on conflict (id) do nothing;

-- Aktifkan sinkronisasi real-time untuk tabel dashboard
alter publication supabase_realtime add table public.dashboard;
```

## 4. Buat akun pengguna
1. Buka **Authentication → Users → Add user**.
2. Isi **email** + **password**, centang **Auto Confirm User** (agar bisa langsung login tanpa verifikasi email).
3. Ulangi untuk tiap orang yang butuh akses.
4. Klik user yang baru dibuat, **salin User UID** (UUID).

Lalu di **SQL Editor**, daftarkan peran tiap user (ganti UUID & nama):

```sql
-- role 'editor' = bisa mengubah data; 'viewer' = hanya melihat
insert into public.profiles (id, nama, role) values
  ('UUID-USER-1', 'Budi Santoso', 'editor'),
  ('UUID-USER-2', 'Agus Wijaya',  'viewer');
```

> Tip: kalau ingin email tidak perlu konfirmasi sama sekali, buka **Authentication → Providers → Email** dan matikan **Confirm email**.

## 5. Pasang environment variable
**Untuk Vercel:** project → **Settings → Environment Variables**, tambahkan:
- `VITE_SUPABASE_URL` = Project URL dari langkah 2
- `VITE_SUPABASE_ANON_KEY` = anon public key dari langkah 2

Pilih environment **Production** (dan Preview bila perlu), lalu **redeploy**.

**Untuk dev lokal:** salin `.env.example` menjadi `.env`, isi kedua nilai, jalankan `npm run dev`.

## 6. Selesai
Buka situs, login dengan email + password yang dibuat. Editor bisa menambah/ubah data; perubahan langsung tersimpan ke Supabase dan muncul di perangkat lain secara real-time.

---

## Catatan penting
- **anon key memang publik** (tertanam di bundle). Keamanan datang dari **RLS + login**: tanpa sesi login yang valid, tabel `dashboard` tidak bisa dibaca/ditulis. Inilah kenapa kita pakai Supabase Auth, bukan login sisi-klien.
- Hanya user dengan `role = 'editor'` di tabel `profiles` yang bisa menyimpan perubahan — baik di sisi tampilan maupun ditegakkan oleh RLS di database.
- Struktur penyimpanan: seluruh state disimpan sebagai satu objek JSON di baris `id = 'main'`. Penyimpanan otomatis di-debounce 0,5 detik. Penulisan terakhir menang (last-write-wins); untuk tim kecil ini memadai.
- Untuk mengganti peran seseorang: `update public.profiles set role = 'editor' where id = 'UUID';`
- Cadangan data kapan saja: **Table Editor → dashboard → baris `main` → kolom `data`** (salin JSON-nya).
