# Deployment na Netlify

## Automatski deployment

1. **Povežite GitHub repository sa Netlify:**
   - Idite na [Netlify](https://netlify.com)
   - Kliknite "New site from Git"
   - Izaberite GitHub i autorizujte Netlify
   - Izaberite `e-umrlice` repository

2. **Build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `18`

3. **Deploy site** - Netlify će automatski pokrenuti build i deploy

## Manualni deployment

1. **Build aplikaciju lokalno:**
   ```bash
   npm run build
   ```

2. **Upload dist folder na Netlify:**
   - Idite na Netlify dashboard
   - Drag & drop `dist` folder na Netlify

## Važne napomene

- ✅ `_redirects` fajl je konfigurisan za SPA routing
- ✅ `netlify.toml` fajl sadrži build konfiguraciju
- ✅ Sve React Router rute će raditi ispravno
- ✅ 404 stranica je implementirana

## Testiranje

Nakon deployment-a, testirajte:
- Glavnu stranicu: `https://your-site.netlify.app/`
- Arhivu: `https://your-site.netlify.app/archive`
- Pakete: `https://your-site.netlify.app/packages`
- Firme: `https://your-site.netlify.app/companies`
- Login: `https://your-site.netlify.app/login`

Sve stranice treba da rade bez 404 grešaka.