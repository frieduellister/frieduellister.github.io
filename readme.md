# Hjemmeside for Fekteklubben Frie Duellister

Siden er bygget med Jekyll og publiseres med GitHub Pages.

## Sider

Sidene ligger i tre mapper:

- `_pages-no/` - norske sider, f.eks. `_pages-no/info/kontakt.md` → `/info/kontakt/`
- `_pages-en/` - engelske sider, f.eks. `_pages-en/info/contact.md` → `/en/info/contact/`
- `_pages-common/` - sider som bare finnes på ett språk, f.eks. Oslo Penguin Cup

For å opprette en ny side, lag en ny fil i riktig mappe. Bruk markdown (.md) for enkle sider og html (.html) for mer
kompliserte sider. Bruk eksisterende sider som eksempel, og sett `translation_url` til adressen til samme side på det
andre språket.

Markdown er en enkel måte å skrive innhold på, se her for en intro: https://www.markdownguide.org/basic-syntax/

Sidens maler ligger i `_layouts/` og `_includes/`. For å endre menyen må man redigere både
`_includes/header_no.html` og `_includes/header_en.html`.

## Bilder

Bilder skal beskjæres, skaleres ned og konverteres til .webp. Bruk 4:3 for galleri og andre bilder, og 16:9 for
instruktører. Skal du legge inn et galleri eller bilder i full størrelse, bruk Flickr og pek bilde-elementene dit. Last
bare opp bilder til GitHub hvis de er en del av sidens innhold, og bruk alltid nedskalerte bilder.

- https://imageresizer.com
- https://bulkimagecrop.com

## Lokal utvikling

Installer Ruby og Jekyll først, se https://jekyllrb.com/docs/

```bash
bundle install
bundle exec jekyll serve
```

Oppdater github-pages-gemen ved behov:

```bash
bundle update github-pages
```
