// Builds a 1200x1500 (4:5) org chart for LinkedIn from the site's real
// DEPARTMENTS array. Run: node build.js  -> chart.html
//
// Seat names are read from app/page.js at build time, never retyped, so the
// image cannot drift from the product the way a hand-made graphic would.
const fs = require('fs')
const path = require('path')

const HERE = __dirname
const REPO = path.resolve(HERE, '../..')
const OUT = path.join(HERE, 'out')
fs.mkdirSync(OUT, { recursive: true })

// --- pull DEPARTMENTS out of the live page source -------------------------
const src = fs.readFileSync(path.join(REPO, 'app/page.js'), 'utf8')
const match = src.match(/const DEPARTMENTS = (\[[\s\S]*?\n\])/)
if (!match) throw new Error('DEPARTMENTS array not found in app/page.js')
const DEPARTMENTS = eval(match[1])

// --- brand tokens, lifted from tailwind.config.js -------------------------
const C = {
  ink: '#000000',
  inkMuted: '#555555',
  inkFaint: '#8A8A8A',
  paper: '#FFFFFF',
  grey: '#F5F5F5',
  accent: '#83B14E',
  rule: '#E5E5E5',
  // Connectors only. The site's #E5E5E5 rule all but vanishes once LinkedIn
  // scales this down to phone width, so the org lines get a darker grey.
  line: '#C4C4C4',
}

const font = (w) =>
  `@font-face{font-family:Poppins;font-style:normal;font-weight:${w};font-display:block;` +
  `src:url(data:font/woff2;base64,${fs.readFileSync(path.join(HERE, `fonts/poppins-${w}.woff2`)).toString('base64')}) format("woff2")}`

const cards = DEPARTMENTS.map(
  ([n, dept, seats]) => `
      <div class="dept">
        <div class="dept-head">
          <span class="num">${n}</span>
          <span class="dept-name">${dept}</span>
        </div>
        <ul class="seats">
          ${seats.map((s) => `<li>${s.replace(/&/g, '&amp;')}</li>`).join('\n          ')}
        </ul>
      </div>`
).join('')

const html = `<!doctype html>
<meta charset="utf-8">
<style>
  ${[300, 400, 500, 600, 700].map(font).join('\n  ')}
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:1200px;height:1500px}
  body{
    font-family:Poppins,-apple-system,sans-serif;
    background:${C.grey};
    color:${C.ink};
    display:flex;flex-direction:column;
    padding:50px 40px 44px;
    -webkit-font-smoothing:antialiased;
  }

  /* masthead */
  .eyebrow{font-size:20px;font-weight:500;letter-spacing:.15em;color:${C.inkFaint};text-transform:uppercase}
  h1{font-size:58px;font-weight:600;letter-spacing:-.02em;line-height:1.08;margin-top:14px}
  .sub{font-size:27px;font-weight:300;color:${C.inkMuted};line-height:1.4;margin-top:12px}

  /* hierarchy */
  .top{text-align:center;margin-top:30px}
  .you{font-size:22px;font-weight:500;letter-spacing:.2em;color:${C.inkFaint}}
  .drop{width:2px;background:${C.line};margin:10px auto}
  .maestro{font-size:42px;font-weight:700;color:${C.accent};letter-spacing:-.01em}
  .maestro-sub{font-size:24px;font-weight:300;color:${C.inkMuted};margin-top:2px}

  /* the bus that fans out to the two department columns. the horizontal bar
     spans column centre to column centre, so the drops land on the cards.
     the drops stop short of the cards, otherwise bar + drops + card borders
     close into a rectangle and read as a stray box. */
  .bus{position:relative;height:52px;width:100%}
  .bus .stem{position:absolute;top:0;left:50%;margin-left:-1px;width:2px;height:20px;background:${C.line}}
  .bus .h{position:absolute;top:20px;left:24.6%;right:24.6%;height:2px;background:${C.line}}
  .bus .v{position:absolute;top:20px;width:2px;height:20px;background:${C.line}}

  /* departments */
  .grid{display:grid;grid-template-columns:1fr 1fr;gap:20px 22px;margin-top:12px}
  .dept{
    background:${C.paper};border:1px solid ${C.rule};
    padding:22px 24px 24px;display:flex;flex-direction:column;
  }
  .dept-head{display:flex;align-items:baseline;gap:12px;
    padding-bottom:12px;border-bottom:1px solid ${C.rule};margin-bottom:14px}
  .num{font-size:20px;font-weight:600;color:${C.accent};line-height:1}
  .dept-name{font-size:33px;font-weight:600;letter-spacing:-.01em;line-height:1.1}
  .seats{list-style:none}
  .seats li{
    font-size:28px;font-weight:400;color:${C.inkMuted};
    line-height:1.34;padding-left:20px;position:relative;
    white-space:nowrap;
  }
  .seats li + li{margin-top:7px}
  .seats li::before{
    content:"";position:absolute;left:0;top:.62em;
    width:9px;height:2px;background:${C.accent};
  }

  footer{display:flex;justify-content:space-between;align-items:baseline;
    margin-top:auto;padding-top:22px;font-size:24px;color:${C.inkFaint};font-weight:400}
  footer b{color:${C.ink};font-weight:600}
</style>

<div class="eyebrow">AI Inner Circle</div>
<h1>Your self-staffing AI team.</h1>
<div class="sub">Six departments. Twenty four Assistants. One department a month.</div>

<div class="top">
  <div class="you">YOU</div>
  <div class="drop" style="height:22px"></div>
  <div class="maestro">MAESTRO</div>
  <div class="maestro-sub">your Chief of Staff</div>
</div>

<div class="bus">
  <div class="stem"></div>
  <div class="h"></div>
  <div class="v" style="left:24.6%"></div>
  <div class="v" style="right:24.6%"></div>
</div>

<div class="grid">${cards}</div>

<footer>
  <span><b>24 AI Assistants</b> that know your business</span>
  <span>aiinnercircle.com</span>
</footer>
`

fs.writeFileSync(path.join(OUT, 'chart.html'), html)
console.log('chart.html written:', DEPARTMENTS.length, 'departments,',
  DEPARTMENTS.reduce((a, d) => a + d[2].length, 0), 'seats')
