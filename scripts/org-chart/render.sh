#!/usr/bin/env bash
# HTML -> PNG for the LinkedIn org chart. Run it with: npm run org-chart
#
# Renders at 2x and downsamples to 1200x1500. The supersampling is the whole
# trick: the seat names sit at 28px, and rendering them at 1x leaves the small
# type fuzzy once LinkedIn compresses the upload.
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT="$HERE/out"
FINAL="$OUT/ai-inner-circle-org-chart-1200x1500.png"

CHROME=""
for c in \
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  "/Applications/Chromium.app/Contents/MacOS/Chromium" \
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge" \
  "$(command -v google-chrome || true)" \
  "$(command -v chromium || true)"
do
  [ -n "$c" ] && [ -x "$c" ] && CHROME="$c" && break
done

if [ -z "$CHROME" ]; then
  echo "No Chrome/Chromium found. Install Google Chrome, or point CHROME at a binary." >&2
  exit 1
fi

if ! command -v sips >/dev/null 2>&1; then
  echo "sips not found (macOS only). Swap in ImageMagick: magick in.png -resize 1200x1500 out.png" >&2
  exit 1
fi

# 1. Build the HTML, reading DEPARTMENTS out of app/page.js.
node "$HERE/build.js"

# 2. Screenshot it at 2x -> 2400x3000.
"$CHROME" --headless --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=2 --window-size=1200,1500 \
  --screenshot="$OUT/chart@2x.png" "file://$OUT/chart.html" 2>/dev/null

# 3. Downsample to the exact LinkedIn size. Keep the 2x around; it is the
#    better master if the image ever needs to be reused somewhere larger.
cp "$OUT/chart@2x.png" "$FINAL"
sips -z 1500 1200 "$FINAL" >/dev/null

echo
echo "PNG:  $FINAL"
sips -g pixelWidth -g pixelHeight "$FINAL" | tail -2
echo "size: $(du -h "$FINAL" | cut -f1)"
echo "2x master kept at $OUT/chart@2x.png"
