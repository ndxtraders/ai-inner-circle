# Lessons

Patterns that caused real mistakes on this project. Read at session start.

---

## Root-layout metadata is inherited by every route

**What happened (2026-07-12):** `alternates: { canonical: '/' }` was added to
`app/layout.js`. App Router metadata is inherited by child segments unless the
child overrides it, and none did. All 22 indexable routes shipped
`<link rel="canonical" href="https://aiinnercircle.com">`, telling Google that
`/consultants`, `/coaches`, and every article were duplicates of the homepage.
Left alone it would have deindexed the site.

**Why it survived review:** the PR was called verified because the canonical tag
*rendered*. Nobody checked whether it *differed per route*. On any single page
the HTML looks correct.

**Rules:**
- Never set `alternates.canonical` in `app/layout.js`. Declare it per route.
- A route with no canonical self-canonicalizes, which is safe. An inherited wrong
  one is not. Prefer the failure mode that does nothing.
- Client-component pages cannot export `metadata`. They need their own
  `layout.js` or they silently inherit the root's title, canonical, and OG tags.
  `/coaches/assessment` had no title of its own for exactly this reason.
- **Verifying metadata means diffing the tag across several routes**, not
  confirming it renders on one. Same for `title`, `openGraph.url`, and anything
  else that lives in `metadata`.

---

## Check the remote before analyzing the repo

**What happened:** analysis was done against a stale local clone whose `HEAD` was
behind `origin/main`. Conclusions were drawn about code that had already changed.

**Rule:** `git fetch && git status` before reading anything. If local is behind,
pull first. This applies to the sibling `revvaughn-com` repo too.

---

## `output: 'export'` cannot host API routes

**What happened:** the MailerLite waitlist was broken for months. `WaitlistForm`
POSTed to `/api/waitlist`, which could not exist under a static export. The form
component was also imported but never rendered, so the bug had two independent
causes and fixing either one alone would have looked like it failed.

**Rule:** when a form silently drops leads, check both ends — that the endpoint
exists *and* that the component is actually on the page. Confirm a real
submission lands in the destination before calling it fixed.

---

## Never resolve a group ID from the client

**What happened:** the original waitlist design let the browser send a MailerLite
`groupId`. Anyone could have injected emails into any group on the account.

**Rule:** the server resolves the group from a semantic `audience` value it
validates against an allow-list. The client never names a destination.

---

## Planning docs are stale; the code is the source of truth

**What happened (2026-07-19):** SEO articles about the AI Priority Map were
drafted from `planning docs/AI-Inner-Circle-Master-Brief.md`, which describes
a 15-question / 5-pillar assessment. The live assessment
(`app/consultants/assessment/page.js`, QUESTIONS array) is 12 questions across
4 engines (Authority, Pipeline, Conversion, Founder Freedom) with different
breaking-point names. Rev caught it in review.

**Rules:**
- Any claim about the product (question counts, pillar/engine names, pricing,
  skill names, month numbers) is verified against **origin/main on GitHub**
  (after `git fetch`) or the live site before it goes in a draft. Planning
  docs give intent and voice, never facts.
- **The GitHub repo is authoritative; the local clone is presumed stale**
  (Rev, 2026-07-19). Fetch and diff against origin before reading anything
  as fact. This extends the earlier "check the remote" lesson from analysis
  to all content work.
- The membership curriculum in the brief also drifts (Rev's WIP renames skills,
  reorders months). Quote skill names from the repo's current state, or keep
  them generic in public copy.
