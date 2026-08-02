# Org chart image for LinkedIn

Generates a 1200 x 1500 PNG of the AI team org chart. 4:5 is the tallest
ratio LinkedIn allows in-feed, so it takes the most room on a phone.

```bash
npm run org-chart
```

Output lands in `scripts/org-chart/out/` and is gitignored. Regenerate it
rather than committing it.

## Why this is a script and not a graphic

Seat names are never typed by hand. `build.js` reads the `DEPARTMENTS` array
out of `app/page.js` and evaluates it, so the image cannot drift from the
site. Rename a seat, re-run, and the chart follows.

That matters because `.githooks/pre-push` validates seat names against the
product repo by reading source. It cannot read a PNG. A hand-made graphic can
contradict the product and nothing catches it.

## How the conversion works

Three steps, all in `render.sh`:

1. `build.js` writes `out/chart.html`, a fixed 1200x1500 page with the Poppins
   subsets inlined as base64 so it renders identically anywhere.
2. Headless Chrome screenshots it at `--force-device-scale-factor=2`, giving
   2400 x 3000.
3. `sips` downsamples that to exactly 1200 x 1500.

Rendering at 2x and downsampling is the reason the small type survives. Seat
names sit at 28px; screenshotting at 1x leaves them fuzzy after LinkedIn's
compression. The 2x master is kept in `out/` as the better source if the image
is ever reused somewhere larger.

Upload the PNG, not a JPG. LinkedIn's JPG compression chews up thin rules and
small text.

## Editing

- Headline, subhead and footer are plain strings near the bottom of `build.js`.
- Colours and type sizes are at the top, lifted from `tailwind.config.js`.
- `fonts/` holds the Poppins subsets the site itself builds with, so the
  chart's type matches the site's type.

`sips` is macOS-only. On Linux, swap step 3 for
`magick in.png -resize 1200x1500 out.png`.

## Known tradeoff

Fitting all 24 seats forces seat names down to 28px, which lands around 10px
once LinkedIn scales the image to phone width. Legible if someone stops on it,
small if they are scrolling. The department names carry it at any size. If the
phone view needs to hit harder, drop the seats and set department names at
~56px, or split it into a six-slide carousel.
