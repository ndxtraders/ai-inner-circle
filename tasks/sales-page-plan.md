# Membership Sales Page — Plan & Build Log

Companion to `~/Desktop/AI-Inner-Circle-Master-Brief.md` (full strategy). This file covers the sales page only.

## Global decisions (locked)
- **Route:** `/membership` → `app/membership/page.js` (new page). `/ai-inner-circle` left intact.
- **Primary CTA:** "Join the Waitlist" via existing `WaitlistForm` (posts to `/api/waitlist` → MailerLite). Becomes a purchase flow once billing is set up.
- **Terminology:** the hired AI = **"AI Assistants"** (never "agents"/"bots").
- **Urgency:** founding cohort, enrollment closes **August 1** (placeholder date).
- **Price:** **$49/mo** founding (placeholder). 1:1 tier held for later ("coaching upgrade soon").
- **Hero image:** `Rev-Vaughn-800.jpg` (B&W, dark shirt).

## Page structure (16 blocks, 5 acts)
1. Announcement (global `AnnouncementBar` → assessment) · 2. Hero (promise + "the AI knows you now" + WaitlistForm + founding/Aug-1) · 3. "Is this you?" qualifier (assessment pains)
4. Stakes · 5. Why the usual fixes fail (ChatGPT/courses/agencies/enterprise stacks)
6. Big idea: hire AI Assistants that know you · 7. How it works (before/after `/site-content` + Tuesday rhythm, Command Center first) · 8. 6-month journey (Week 0 onboarding + 6 workshops)
9. Before/after dream outcome · 10. What's included (value stack) · 11. Proof (real WINS + testimonials + logos) · 12. About Rev · 13. Pricing ($49 founding)
14. Risk reversal (cancel anytime, honest tool costs) · 15. FAQ · 16. Final CTA

## Curriculum reflected on the page
- **Onboarding (Week 0):** 1) Install Your Command Center (Orchestrator — first), 2) Activate Your AI Brain (pre-populated).
- **Months 1–6:** Your First 10 Conversations · The Offer They Can't Ignore · 30 Minutes to a Month of Content · Turn Replies Into Revenue · Get Out of the Bottleneck · Run Like a Full Team.

## Files changed
- **NEW** `app/membership/page.js` — the sales page.
- **EDIT** `app/ai-inner-circle/page.js` — hero h1 + subhead + "Why it exists" prose refreshed to the AI-Assistants positioning; its "Join AI Inner Circle" button repointed `/contact` → `/membership`. (Rest of page untouched.)
- **EDIT** `app/page.js` — the two "Join AI Inner Circle" buttons repointed `/contact` → `/membership` (hero + Community card). The $800 "Apply for Coaching" button left on `/contact` by design.

## Verified
- `npm run build` passes; `/membership` prerenders static. All 27 routes compile.

## Open items / needs Rev
- **Copy is v1 draft** — structure-complete, needs Rev's editing pass.
- **Price mismatch:** `/ai-inner-circle` PricingCards still shows **$47**; homepage and `/membership` show **$49**. Reconcile.
- **MailerLite group:** `WaitlistForm` currently feeds the AI Brain waitlist group. Membership likely wants its own group/automation before launch.
- **Coaching CTA:** confirm whether the $800 "Apply for Coaching" button should also move to `/membership` or stay `/contact`.
- **Aug 1 date** is a placeholder; update when real.
