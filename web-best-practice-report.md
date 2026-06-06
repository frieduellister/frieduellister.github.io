# Web Best Practices Audit Report

**Site:** Frie Duellister Website
**Date:** 2026-01-11

---

## SEO Issues (High Priority)

| Issue | Status |
|-------|--------|
| Meta description tag | Missing |
| Open Graph tags (og:title, og:image, etc.) | Missing |
| Twitter Card metadata | Missing |
| Canonical links | Missing |
| Hreflang tags for bilingual content | Missing |
| robots.txt directives | Empty file |

---

## Accessibility Issues

| Issue | Location |
|-------|----------|
| `aria-expanded` missing on nav dropdowns | `_includes/header_*.html` |
| `aria-haspopup` missing on menu buttons | `_includes/header_*.html` |
| Skip navigation link | Missing |
| Logo uses `font-size: 0` to hide text | `_sass/header.scss` |

---

## Performance Issues

| Issue | Recommendation |
|-------|----------------|
| Background image is JPG | Convert to WebP |
| Gallery images lack `loading="lazy"` | Add lazy loading |
| No responsive images (srcset/sizes) | Add for different screen sizes |
| `background-attachment: fixed` | Can hurt mobile performance |

---

## What's Good

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Font preloading with WOFF2 format
- `font-display: swap` for fonts
- JavaScript loaded with `defer`
- WebP images for gallery
- Lazy loading on iframes
- Good responsive breakpoints
- CSP headers implemented
- ARIA labels on menu buttons
- Good alt text on images
- `prefers-reduced-motion` support

---

## Recommended Fixes

### High Priority

1. **Add SEO meta tags to `base.html`**
   - Meta description
   - Open Graph tags
   - Canonical links
   - Hreflang tags for bilingual structure

2. **Fix accessibility in navigation**
   - Add `aria-expanded` to nav dropdown buttons
   - Add `aria-haspopup` to menu items with submenus
   - Add skip navigation link

3. **Optimize background image**
   - Convert `/assets/images/background-i33.jpg` to WebP

4. **Populate robots.txt**
   - Add sitemap reference
   - Define crawl directives

### Medium Priority

5. Add `loading="lazy"` to gallery images
6. Add responsive image `srcset`/`sizes` attributes
7. Improve logo accessibility (use proper visually-hidden technique)
8. Add focus state styling for buttons

### Low Priority

9. Use aspect-ratio containers for map iframes
10. Add `decoding="async"` to images
11. Consider critical CSS inlining for LCP optimization
