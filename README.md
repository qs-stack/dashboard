# Dashboard Quantity Survey — Divisi EPCC

Web app monitoring tender (RKAP, List Tender, Personel, Kalender) berbasis React + Vite.
Data tersimpan di `localStorage` (per-browser/per-perangkat). Tidak butuh backend untuk jalan.

---

## A. Coba jalan di komputer (opsional, untuk cek dulu)

Butuh Node.js (versi 18+). Lalu di folder ini:

```bash
npm install
npm run dev
```

Buka URL yang muncul (biasanya http://localhost:5173).

---

## B. Deploy supaya LIVE (cara paling mudah: GitHub + Vercel)

### 1. Upload ke GitHub
- Buat repo baru di https://github.com (misal: `qs-epcc-dashboard`).
- Upload SEMUA isi folder ini ke repo tersebut.
  - Cara cepat tanpa Git: di halaman repo, klik **Add file > Upload files**, drag semua file/folder (package.json, index.html, vite.config.js, folder `src`, dst — JANGAN upload folder `node_modules` atau `dist`).
  - Atau via Git:
    ```bash
    git init
    git add .
    git commit -m "init dashboard"
    git branch -M main
    git remote add origin https://github.com/USERNAME/qs-epcc-dashboard.git
    git push -u origin main
    ```

### 2. Hubungkan ke Vercel
- Daftar/masuk di https://vercel.com (login pakai GitHub).
- Klik **Add New > Project > Import** repo `qs-epcc-dashboard`.
- Vercel otomatis mendeteksi Vite. Biarkan setelan default:
  - Framework Preset: **Vite**
  - Build Command: `npm run build`
  - Output Directory: `dist`
- Klik **Deploy**. Tunggu ~1 menit → dapat URL live (mis. `qs-epcc-dashboard.vercel.app`).

### 3. Update dashboard nanti
Cukup ubah file di GitHub (edit `src/App.jsx` lewat web GitHub, atau `git push` dari komputer).
Vercel akan **otomatis build ulang** dan situs live ter-update sendiri. Tidak perlu setel server.

> Alternatif hosting selain Vercel: **Netlify** (cara mirip) atau **GitHub Pages**
> (untuk GitHub Pages perlu set `base` di `vite.config.js` ke `'/NAMA-REPO/'`).

---

## C. Catatan penyimpanan data

- Saat ini data (tender, personel, RKAP) disimpan di **localStorage** browser.
  Artinya: data tersimpan di perangkat itu saja, dan TIDAK terbagi ke orang lain.
- Kalau nanti butuh **satu data dipakai banyak orang** (tim), barulah pindah ke
  database seperti **Supabase**. Yang perlu diganti hanya 2 fungsi `loadStore` &
  `saveStore` di `src/App.jsx` menjadi panggilan ke Supabase. Hosting tetap di Vercel.

---

## Struktur file
```
qs-epcc-dashboard/
├─ index.html
├─ package.json
├─ vite.config.js
├─ .gitignore
├─ README.md
└─ src/
   ├─ main.jsx      (titik masuk React)
   ├─ index.css     (reset dasar)
   └─ App.jsx       (seluruh dashboard — edit di sini untuk update)
```
