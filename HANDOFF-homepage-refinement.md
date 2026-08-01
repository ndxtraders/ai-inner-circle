# HANDOFF — AI Inner Circle homepage refinement

**Written:** 2026-08-01 · **For:** the next session continuing to refine the homepage
**State:** the new homepage is **live in production**. Commit `cf3f86f`, pushed to `main`.

Read this before touching `app/page.js`. Most of it is decisions already made and
traps already hit. Re-deriving any of it costs Rev money.

---

## 1. What just shipped

`app/page.js` **is** the new homepage. It used to be a prototype at `/home-v2`;
that route no longer exists. Fifteen sections, 633 lines, roughly 1,600 rendered
words.

The page it replaced is archived two ways:

- **Copy:** `planning docs/home-page-v1-archive.md`
- **Working file:** `git show 776ef49:app/page.js`

The full messaging rationale — the sales case, every section's job, the swing
beliefs — is in `planning docs/PRD-homepage-messaging-2026-08-01.md`. That is the
document to read before rewriting any section. It outranks anything you infer
from the code.

### Section map (`app/page.js`)

| # | Line | Section |
|---|---|---|
| 1 | 149 | Hero |
| 2 | 201 | Is this you |
| 3 | 218 | The loop |
| 4 | 265 | Why the usual fixes fail |
| 5 | 284 | I already do this |
| 6 | 309 | The three shifts — Rev's red/green model |
| 7 | 329 | How it runs — the nine missions |
| 8 | 363 | What you actually get — the one full-width section |
| 9 | 409 | The Friday afternoon |
| 10 | 445 | Your first afternoon |
| 11 | 470 | Every Friday |
| 12 | 490 | Who built it, and what I cannot prove |
| 13 | 546 | What it will not do, and what it costs |
| 14 | 569 | The offer |
| 15 | 608 | The close |

Copy lives in `const` arrays at the top of the file (`PAINS`, `FIXES`, `GAPS`,
`SHIFTS`, `MISSIONS`, `DEPARTMENTS`, `FIRST_SITTING`, `WINS`, `TESTIMONIALS`,
`INCLUDES`, `LIMITS`). **Editing those arrays is editing copy, not structure** —
Rev has been clear he wants text changes only unless he asks for layout work.

---

## 2. Locked decisions — do not re-open

Rev settled these. Raising them again wastes his time.

- **The homepage leans consultants.** Consultants is the example track. Real seat
  names, six department names, "24 Assistants", "six months" are all legal here.
  A handoff written by an earlier AI claimed the page "must not favor one program
  over the other" and attributed it to Rev. **He disowned it.** Do not reinstate a
  50/50 balance, a two-door fork, or a split qualifier.
- **All three join buttons go to Skool** (`JOIN_URL` at the top of the file), not
  `/consultants`. Rev confirmed this knowing `/consultants` becomes nav-only.
- **No video placeholders.** Rev cut them; he is a long way from producing video.
- **The Friday story is Friday**, though it happened on a Wednesday. His story,
  his dramatic license. Do not "correct" it.
- **A Membership Hub page is a do-later item.** Not scoped. Don't build it.
- **Coaching in the footer points at `/contact`.** Rev: *"It's a placeholder. We
  are flying the plane and building the runway at the same time."*
- **`/coaches` and `/consultants` never reference each other** in program-specific
  material. This is the locked `MIRRORING.md` rule and still binds.

---

## 3. Voice rules — these are mandatory

Rev's copy runs through a gate. Skipping it is not an option.

**Never say Rev developed anyone's AI.** He rebuilt campaigns, funnels, and
follow-up for Chris Orzechowski and Kevin Rogers. He *tested* AI. He did not
build their AI. He also helped develop Cardone Ventures' first CustomGPT — **do
not name that client on the site**; it was never made public.

**Em-dashes are banned** in Rev's copy. Not "used sparingly." Banned.

**The gate:**

```bash
python3 ~/Desktop/rev-skills/skills/ai-check/scripts/evaluate_content.py <file>
```

Config at `~/Desktop/rev-skills/skills/ai-check/assets/guardrails-config.json`.
Composite **≥ 7.50 passes**. Structural constructs hard-cap the score at 7.4, so
one antithesis sinks the whole run.

What gets flagged: antithesis (including across sentence boundaries), tricolon,
quadruple parallels, and zinger section-closers. What is explicitly allowed and
unlimited: conversational signposting.

**Fix the prose rather than dismissing findings.** `--confirmed 'cat=N'` exists
for genuine false positives only. The current page scored 9.21 with zero
dismissals — that is the bar.

Voice skills live at `~/Desktop/rev-skills/skills/`: `rev-authority-voice`,
`rev-writing-twin`, `article-writer`.

### Rev's five edit patterns

From a rewrite he did himself. Apply these when drafting:

1. **True roller-coaster tension** — frying pan into fire, Problem → Bigger Problem
2. **Out-specify** — concrete beats abstract every time
3. **Keep subjects** — don't drop the actor from the sentence
4. **Re-introduce characters** — don't assume the reader tracked a name
5. **Connect with but/and** — not with a dash

He also said, of an earlier draft: *"You are selling from the back of your heels
too much and over explaining too much."* And: *"We need to create the map. Not
describe everything in detail. A business owner should be able to quickly scan
and understand the web page."* Write at a 6th grade reading level.

---

## 4. Open threads and placeholders

Rev knows about all of these. They are **his** action items, not blockers, and not
yours to fix unless he asks.

| Thread | State |
|---|---|
| **$999 1:1 coaching tier** | No page. Footer links `/contact` as a placeholder. |
| **Friday coaching call** | No time, duration, platform, or replay policy anywhere. Rev has not supplied it. |
| **Three conflicting pay-in-full prices** | Site says `$995` in one place, other numbers elsewhere. Unreconciled. |
| **Checkout defects** | Known. Rev's own later item. |
| **`/ai-leverage`** | Needs fixing later. Rev's item. |
| **`/coaches`** | Uses `page.jsx` while every other route uses `.js`. |
| **`app/case-studies/page.js`** | `REVIVX` is duplicated at lines 33 and 43. Ten `/quick-win` CTAs. Never mentions AI Inner Circle. |
| **`app/ai-inner-circle/page.js`** | Still exists but `/ai-inner-circle` is a permanent 301 to `/` in `next.config.js:21-23`, so the file is effectively dead code. |
| **Concept Model on `/consultants` and `/coaches`** | The red/green shifts model has not been propagated. Rev scoped that out of the PRD pass. |
| **Article metrics as citable proof** | Open question in the PRD. |

**Zero member outcomes exist.** Every number on the site is from Rev's client work,
not from AI Inner Circle members. The sales case rests on inspectability, operator
credibility honestly labeled, stated limits, and Rev running the system himself.
**Never blur that line.**

---

## 5. Traps that cost this session real time

- **Never run `npm run build` while the dev server is up.** It clobbers `.next/`
  and the running server starts throwing module errors. This is in `CLAUDE.md`
  and it still got hit. The reverse also breaks: running `next build` and then
  `next dev` on the same `.next` produces a `JSON.parse` error on `/`.
- **`npm run dev` respawns its child on kill.** A plain `kill` leaves it running.
  Concurrent dev servers racing on one `.next` directory produce
  `__webpack_modules__[moduleId] is not a function`, which looks like a code bug
  and is not. Safe restart:

  ```bash
  cd "$HOME/Desktop/ai-inner-circle" && pkill -f "next-server|next dev"; sleep 2; rm -rf .next && npm run dev
  ```

- **The browser console tool replays a stale buffer.** It kept reporting import
  errors for a file state that no longer existed on disk. Trust `preview_logs` on
  the current `serverId` and a fresh `fetch`, not the console panel.
- **Open the source file before making any load-bearing claim.** Seven agents once
  read `app/page.js:295-297`, missed the subhead at `:299`, and concluded the hero
  sold consulting when the positioning was already live. Rev's verdict:
  *"the team has done a sub-standard job on reviewing the info."*
- **`~/Documents` is blocked** by macOS TCC. Reads fail even with the sandbox off.
  Ask Rev to move files to Desktop.
- **`.claude/launch.json` is deliberately untracked.** Leave it that way.

---

## 6. Verifying a change

```bash
cd "$HOME/Desktop/ai-inner-circle" && npm run dev
```

Then check `/` renders, `preview_logs` is clean, and the routes that share the
Header and Footer still work. A full `next build` is worth it before any push
that changes the homepage — stop the dev server first.

**Crawler surface.** `/` is in `STATIC_ROUTES` in `app/sitemap.js` (a manual list —
new routes are not auto-indexed) and is `index, follow` with `canonical: '/'`.
`app/robots.js` no longer disallows `/home-v2` because the route is gone.

**The social card is site-wide.** `app/opengraph-image.js` renders the homepage H1
and every route inherits it. If the H1 changes, change that file too or shared
links advertise stale positioning.

**A pre-push hook will run.** `.githooks/pre-push` calls
`~/Desktop/ai-inner-circle-agents/scripts/check-seat-names.sh`, which fails the
push if the site's seat names or department months contradict the product repo.
It passes clean as of this commit. If it blocks you, read the failures before
reaching for `--no-verify` — but note it produced 14 false positives earlier
today from a regex that read JSX section comments as departments. That is fixed
(agents repo commit `c832738`), and that fix is **committed but not pushed**.

---

## 7. Working with Rev

- Direct and concise. No preamble, no cheerleading.
- Ask before non-trivial work; one question at a time.
- Never push to `main` without explicit permission. He gives it per-push.
- Don't write to the repo when he says planning mode.
- Flag assumptions instead of guessing silently.
- He will tell you when something is a placeholder. Believe him and move on.
