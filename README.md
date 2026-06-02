# cyber-security.com.cy

Personal business site and security blog for **Petros Soutzis** — offensive
security & DevSecOps consulting.

Built with **Jekyll** on GitHub Pages using a custom, mobile-first theme
(no external theme dependency).

## Structure

- `_layouts/` — `default`, `home`, `page`, `post`
- `_includes/` — `header.html`, `footer.html`
- `assets/css/style.css` — mobile-first styles (dark hero + light body)
- `assets/js/main.js` — mobile nav toggle
- `_posts/` — blog posts (`YYYY-MM-DD-title.md`)
- `index.md` — landing page · `blog.html` — post listing · `projects.md`

## Add a blog post

Create `_posts/YYYY-MM-DD-my-title.md`:

```markdown
---
title: "My Post Title"
date: 2026-06-02
tags: [appsec, devsecops]
excerpt: "One-sentence summary shown in listings."
---

Your content here.
```

## Run locally

```bash
bundle install
bundle exec jekyll serve
```
