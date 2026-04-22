# Buttonwood Hill Residents Association (BHRA) Website

This repository contains the source code for the official Buttonwood Hill Residents Association website. 

## Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS (Exclusive use, **no inline styles permitted**)
- **Content Management**: Markdown-based content (`.md` files) with YAML frontmatter.
- **Language**: TypeScript

---

## 🛑 Golden Rules & Constraints

If you are working on this codebase, you **MUST** adhere to the following rules:

1. **Tailwind Classes ONLY**: Do not use React inline `style={{}}` props under any circumstances. All styling, aspect ratios, background images, and layout logic must be handled via Tailwind utility classes.
2. **No Local Builds**: **Do NOT run `npm run build` locally.** It takes too long on local machines. Push to GitHub and let Vercel handle the production builds automatically.
3. **iCloud Sync Issues**: This project is located inside an iCloud Desktop sync folder. If git freezes or you see an `index.lock` error:
   - Rename the project folder to `bhra-website.nosync`
   - Run your git commands
   - Rename the folder back to `bhra-website`

---

## Brand & Design Guidelines

The site relies heavily on a clean, professional, and accessible aesthetic. 

### Core Colors
*   **Plum Purple**: `#9b287b` (Used for primary interactions, borders, and overlays)
*   **Sky Blue**: `#2ea3f2` (Used for secondary actions, like "Learn More" external links)

### UI Components
*   **Images**: All post images and cards should be standardized to `aspect-[4/3]` and `object-cover`. Featured article images utilise a `2px solid #9b287b` border.
*   **Shadows**: Use Tailwind's shadow utilities (e.g., `shadow-sm`, `hover:shadow-lg`) for interactive cards rather than heavy custom drop shadows.
*   **Cards**: Ensure entire cards are wrapped in `<Link>` components to make the whole surface area clickable.

---

## Content Structure & Markdown

The site's news and project data is entirely driven by Markdown frontmatter located in `/content/posts/` and `/content/pages/`. 

### Post Frontmatter Format

News posts do **not** utilize HTML body content due to messy legacy Divi markup. Instead, all layout is driven by the frontmatter fields.

```yaml
---
title: "Article Title"
date: "YYYY-MM-DD HH:MM:SS"
category: "Community News"
image: "/images/posts/your-image.jpg"
image_url_fallback: ""
pdf_url: "https://example.com/document.pdf"
external_link: "https://example.com"
has_image: true
excerpt: "A brief summary of the article."
---
```

### Auto-Categorization
The repository contains a custom Python script (`migrate_posts.py`) that processes legacy XML exports and auto-categorizes posts based on title keywords (e.g., "Eglinton West LRT", "Humbertown", etc.). If you ever need to bulk recalculate categories or migrate new data, this script contains the logic.

---

## Deployment

The website is connected to Vercel via GitHub. 
Once you have committed and pushed your changes to the `main` branch, Vercel will automatically build and deploy the live site within a few minutes. 

To post simple news articles without touching the code, committee members can use the `/admin` decap CMS dashboard (See `HOW-TO-POST.md` for instructions).
