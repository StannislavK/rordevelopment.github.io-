# ROR Development — Jekyll Site

## Quick Start

### 1. Install Jekyll
```bash
gem install bundler
bundle install
```

### 2. Run locally
```bash
bundle exec jekyll serve
# Open http://localhost:4000
```

### 3. Build for production
```bash
bundle exec jekyll build
# Output in _site/ folder
```

---

## Structure

```
├── _config.yml          # Site settings
├── _data/
│   ├── translations.yml # All text in 4 languages
│   └── portfolio.yml    # Portfolio projects
├── _layouts/
│   └── default.html     # Main layout
├── _posts/              # Blog posts
├── assets/
│   ├── css/main.css     # All styles
│   └── js/main.js       # JS (nav + form)
├── en/index.html        # English homepage
├── ua/index.html        # Ukrainian homepage
├── de/index.html        # German homepage
└── ru/index.html        # Russian homepage
```

---

## Setup Formspree (Contact Form)

1. Go to https://formspree.io and create a free account
2. Create a new form, set email to: contact@ror-development.com
3. Copy the form ID (looks like: `xpwzknbr`)
4. Replace `YOUR_FORM_ID` in all 4 index.html files:
   ```
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

---

## Deploy to GitHub Pages

1. Create repo on GitHub: `your-username/ror-development`
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin git@github.com:your-username/ror-development.git
   git push -u origin main
   ```
3. In GitHub repo → Settings → Pages → Source: `main` branch
4. Site will be live at: `https://your-username.github.io/ror-development/`

### With custom domain (metallas.com or ror-development.com)
1. In GitHub Pages settings → Custom domain → enter your domain
2. In your domain DNS, add:
   ```
   CNAME  www  your-username.github.io
   A      @    185.199.108.153
   A      @    185.199.109.153
   A      @    185.199.110.153
   A      @    185.199.111.153
   ```

---

## Adding Blog Posts

Create a file in `_posts/` named: `YYYY-MM-DD-post-title.html`

```yaml
---
layout: default
lang: en
title: "Your Post Title"
date: 2025-06-15
description: Meta description for SEO
---
```

---

## Editing Content

- **Services, navigation, contact text** → `_data/translations.yml`
- **Portfolio projects** → `_data/portfolio.yml`
- **Site URL, email, telegram** → `_config.yml`
- **Colors, fonts, layout** → `assets/css/main.css`
