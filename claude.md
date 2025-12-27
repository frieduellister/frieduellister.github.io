# Frie Duellister Website

A bilingual Jekyll-based static site for Fekteklubben Frie Duellister (Norwegian fencing club).

## Technology Stack

- **Static Site Generator**: Jekyll (GitHub Pages)
- **Templating**: Liquid
- **Styling**: Sass (in `_sass/`)
- **Markdown**: Kramdown

## Project Structure

### Content Pages

Pages are organized by language using Jekyll collections:

- **Norwegian pages**: `_pages_no/` → URLs: `/{path}/`
- **English pages**: `_pages_en/` → URLs: `/en/{path}/`

Configuration in `_config.yml`:
```yaml
collections:
  pages_no:
    output: true
    permalink: /:path/
  pages_en:
    output: true
    permalink: /en/:path/
```

### Page Examples

- Norwegian: `_pages_no/bli-medlem.md` → `https://site.com/bli-medlem/`
- English: `_pages_en/join-us.md` → `https://site.com/en/join-us/`
- Info pages: `_pages_no/info/kontakt.md` → `https://site.com/info/kontakt/`

### Layouts

Located in `_layouts/`:

- `base.html` - Main layout template
- `article.html` - Article/content pages for text content
- `page.html` - Flexible template for html pages

### Includes (Components)

Located in `_includes/`:

- `header_no.html` - Norwegian navigation header
- `header_en.html` - English navigation header
- `footer_no.html` - Norwegian footer
- `footer_en.html` - English footer

### Navigation Structure

Both headers follow the same structure:
- Membership link (Bli medlem / Join us)
- City sections (Oslo, Tromsø, Bergen) with:
  - Training schedules
  - Instructors
- Information section:
  - Contact
  - About the club
  - Partners

### Assets

- **Styles**: `_sass/` (Sass files)
- **Images**: `assets/images/` (use .webp format, 4:3 for gallery, 16:9 for instructors)
- **Other assets**: `assets/`

## Local Development

```bash
# Install dependencies
bundle install

# Update GitHub Pages gem
bundle update github-pages

# Start development server
bundle exec jekyll serve
```

## Adding New Pages

1. Create a new `.md` file in `_pages_no/` or `_pages_en/`
2. Add front matter:
   ```yaml
   ---
   layout: article
   title: "Page Title"
   heading: "Page Heading"
   ---
   ```
3. Write content in Markdown
4. Update the appropriate header file (`header_no.html` or `header_en.html`) if navigation link is needed

## Key Files

- `_config.yml` - Jekyll configuration
- `Gemfile` - Ruby dependencies
- `CNAME` - Custom domain configuration
- `robots.txt` - Search engine directives
