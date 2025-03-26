# Hjemmeside for Fekteklubben Frie Duellister

Sider ligger under `/pages`

For å opprette ny side, lag en ny fil under `/pages` som er enten markdown (.md) for enkle sider eller html (.html) for
mer kompliserte sider. Bruk eksisterende sider som et eksempel.

Enkle sider lages med markdown som er en enkel måte å skrive innhold på, se her for en intro til markdown:
https://www.markdownguide.org/basic-syntax/

Under `/_layout` og `/_includes` ligger sidens template og struktur, for å gjøre endringer i meny må man redigere
`/_includes/header.html`

## Images

Images should be cropped, resized, and converted to .webp. Use 4/3 aspect ratio for gallery and other images, and 16/9
for instructors. If you are adding a gallery or full size images, use flickr and point image elements there. Only upload
images to github if they are part of the site content and always use resized images.

https://imageresizer.com

https://bulkimagecrop.com/

## Local development

First you need to install ruby and jekyll, see: https://jekyllrb.com/docs/

Install dependencies:

`bundle install`

Update github pages gem:

`bundle update githb-pages`

Start dev server:

`bundle exec jekyll serve`
