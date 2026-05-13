# Anda Styling

Marketing site for Anda Styling — a personal styling practice based in Calgary & Airdrie.

Static site. No build step. Deployable to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

## Stack

- HTML, CSS, vanilla JS
- Google Fonts: Bricolage Grotesque, Instrument Serif, JetBrains Mono
- IntersectionObserver for scroll fade-ins

## Local preview

Open `index.html` directly in a browser, or serve the directory:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Vercel auto-detects this as a static site. No `vercel.json` required. Push to `main` and Vercel deploys the root.

## Structure

```
index.html    # markup for all sections
styles.css    # design tokens + layout
script.js     # fade-in observer + form interactions
```

## TODO

- Add real photography for hero (3:4), closet (1:1), portrait (3:4)
- Wire form submit to inbox (Formspree / Resend / Vercel form action)
- Favicon + open-graph image
