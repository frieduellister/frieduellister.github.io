# Frie Duellister Website

A bilingual Jekyll site (GitHub Pages) for Fekteklubben Frie Duellister, a Norwegian HEMA club. Content is Markdown/HTML
with Liquid templates and Sass styles.

## Project Structure

Pages are Jekyll collections, configured in `_config.yml`:

- `_pages-no/` → Norwegian, served at `/{path}/` (e.g. `_pages-no/info/kontakt.md` → `/info/kontakt/`)
- `_pages-en/` → English, served at `/en/{path}/` (e.g. `_pages-en/info/contact.md` → `/en/info/contact/`)
- `_pages-common/` → single-language pages served at `/{path}/` (e.g. Oslo Penguin Cup)

Other directories:

- `_layouts/` - `base.html` wraps everything; use `article.html` for text pages, `page.html` for custom HTML pages
- `_includes/` - headers and footers, one per language (`header_no.html`, `header_en.html`, ...)
- `_sass/` - styles, built via `assets/css/main.scss` → `_sass/site.scss`
- `assets/images/` - images (see below)

## Adding a Page

1. Create a `.md` (simple content) or `.html` (custom layout) file in the right collection
2. Add front matter:
   ```yaml
   ---
   layout: article
   title: "Page Title"
   heading: "Page Heading"
   translation_url: /en/page-title/   # URL of the page in the other language, used by the language switcher
   ---
   ```
3. If the page should be in the menu, add it to both `_includes/header_no.html` and `_includes/header_en.html`

## Images

Crop, resize and convert to `.webp`. Use 4:3 for gallery and general images, 16:9 for instructors.

## Local Development

```bash
bundle install
bundle exec jekyll serve
```
