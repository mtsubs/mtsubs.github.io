# MontageSubs — Homepage Preview

Astro + Tailwind CSS homepage with scroll-driven light beam animation.

## Deploy to GitHub Pages (no local setup needed)

1. **Create a new GitHub repository** (e.g. `montagesubs`)

2. **Upload these files** to the repository root (drag & drop on GitHub, or use `git push`)

3. **Enable GitHub Pages via Actions:**
   - Go to your repo → **Settings** → **Pages**
   - Under *Source*, select **GitHub Actions**

4. **Trigger the workflow:**
   - Push any commit to `main`, or go to **Actions** → **Deploy to GitHub Pages** → **Run workflow**

5. Your site will be live at `https://YOUR_USERNAME.github.io/` (or the repo subdomain)

---

## If deploying to a subdirectory (e.g. `username.github.io/montagesubs`)

Edit `astro.config.mjs` and add:
```js
base: '/montagesubs',
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Auto-redirects based on browser language |
| `/en/` | English homepage |
| `/zh-hans/` | Chinese homepage |

## Light Beam System

The beam effect lives in `src/styles/beam.css` and uses:

- **CSS `@property`** to register animatable custom properties (`--beam-width`, `--beam-blur`, etc.)
- **`animation-timeline: scroll(root)`** in modern browsers — pure CSS, zero JS
- **JS fallback** (~30 lines, inlined) for browsers without scroll-driven animation support
- **8-second hue cycle** for the subtle warm-gold color drift

## File Structure

```
src/
├── pages/
│   ├── index.astro          ← language redirect
│   ├── en/index.astro       ← English homepage
│   └── zh-hans/index.astro  ← Chinese homepage
├── components/
│   ├── layout/Nav.astro
│   ├── layout/Footer.astro
│   └── home/
│       ├── Hero.astro
│       ├── WhoWeAre.astro
│       ├── WhatWeDo.astro
│       └── Portals.astro
├── i18n/
│   ├── en.json
│   └── zh-hans.json
└── styles/
    ├── global.css
    ├── beam.css
    └── nav.css
```
