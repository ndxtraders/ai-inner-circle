# Home Page v1 — Archive

Copy archive of the live AI Inner Circle homepage, captured for repurposing into
carousels, videos, presentations, and email.

- **Source:** `app/page.js` (608 lines)
- **Captured:** 2026-08-01, at commit `ed4e351` on branch `homepage-v2-prototype`
- **Status:** **retired.** This was live at `/` until 2026-08-01, when the v2 page
  replaced it. It is no longer on the site.
- **Successor:** the current `app/page.js`, specced in
  `PRD-homepage-messaging-2026-08-01.md`

**To get the original file back:**

```bash
git show 776ef49:app/page.js
```

That is the last commit where this version was live. Redirect it to a file to
restore it outright. This markdown holds the copy; that SHA holds the working
React.

**What did not survive the swap.** Most of this page is duplicated on
`/consultants`, `/coaches`, and `/case-studies` — the clients strip, all six
testimonials, and the six-month hiring plan all still ship there. Two things
were not anywhere else, and both moved to the site footer rather than onto the
new homepage:

- **AI Second Opinion ($300)** — this page was its only inbound link on the
  whole site, and it was missing from the sitemap too. Both are fixed.
- **The $999 1:1 coaching tier** — presented nowhere else. The footer now links
  its apply path. It still has no page of its own.

Sections are numbered as they appear in the source. Data-array content is
reproduced in full, since that is where most of the reusable copy lives.

---

## Page metadata

- **Title:** AI Inner Circle | Rev Vaughn
- **Description:** Revenue Growth Systems for B2B Service Providers. Get access to the AI systems Rev Vaughn uses every day to attract, engage, and convert buyers.
- **Canonical:** `/`

---

## 1. Hero

**Eyebrow:** Go-To-Market · Revenue Systems · AI Leverage

**H1:** Revenue Growth Systems for B2B Service Providers

**Subhead:** Self-staffing AI teams that run without you as the bottleneck. Get the AI systems I use to attract, engage, and convert clients.

**Primary CTA:** Join AI Inner Circle → `/consultants`
**Secondary link:** Not sure where to start? Take the 5-Minute AI Assessment → `/consultants/assessment`

**Images:** AI Inner Circle logo, Claude Partner Network badge

---

## 2. Clients strip

**Heading:** Clients & Campaigns

Grant Cardone · 10X Health · Cardone Ventures · SquadUp Summit · 10X Business Coach ·
Heather Rae Essentials · CardoMax · Copy Chief · Email Copy Academy · VestRight ·
Allied Development · Remix Your Business · REVIVX · Get More Math · SpaSurge ·
Zenpreneurs · 10X GrowthCon · 10X Health UK · IV Academy · 10X Roofing ·
10X Home Services · 10X DECODE

*(22 names)*

---

## 3. AI Assessment block

**Eyebrow:** 5-Minute Assessment

**H2:** Find out exactly where AI fits in your business — and what to do first.

**Body:** If you know you need to use AI in your business but are not sure where to start. Answer 12 questions across 4 business pillars. At the end, you get a color-coded breakdown of exactly where your business is leaking time and money — and the AI Assistant that fixes each one.

**CTA:** Take the AI Assessment → `/consultants/assessment`

**Image:** AI Priority Map preview

---

## 4. AI Second Opinion (paid diagnostic)

**Eyebrow:** Before you spend money · AI Second Opinion

**H2:** Know you need to do something with AI, not sure what?

**Body:** You get an honest read on whether AI actually helps your business move forward, the one thing to do first, and who should build it. In writing, within 48 hours.

**CTA:** See the AI Second Opinion → `/ai-second-opinion`
**Price line:** $300 · 60 minutes · credited toward whatever you do next

**Sidebar:** Bring the quote you were sent, the tools you're evaluating, or just the problem you want to solve. If AI isn't your constraint, I'll say so, and your fee moves to a Quick Win call instead.

---

## 5. AI Brain Workshop (entry offer)

**Eyebrow:** Start here · Self-paced workshop

**H2:** Build an AI that knows you, your business, and how you think.

**Body:** The AI Brain Workshop is the foundation everything else builds on. In about 2 to 3 hours, set up a version of Claude that stops handing you generic answers and starts working like a partner who has known you for years. No tech skills. Yours to keep forever.

**CTA:** Explore the AI Brain Workshop → `/ai-brain`

**Sidebar:** A step-by-step guide with a screenshot of every click, the guided plugin that builds your AI Brain with you, and a live Q&A. Founders' cohort pricing is open now.

---

## 6. Why choose AI Inner Circle membership

**Eyebrow:** Why become an AI Inner Circle Member

**H2:** "Just use AI" is not a growth strategy.

**Body:**

> Every week, I see founders stuck in one of two places. Either they're doing everything themselves and can't keep up. Or they're using AI and creating "AI Slop" their audience ignores.
>
> AI Inner Circle fixes both. You keep the voice your audience trusts. AI handles the execution that was slowing you down.

---

## 7. Selected wins

**Eyebrow:** Selected Wins
**H2:** Results from the field.

| Result | Detail |
|---|---|
| $1M+ in sales | Created the control campaign for Grant Cardone's 10X Business Coach. |
| $6.57M total | Converted 40%+ of prospects to buyers for the new SquadUp Summit event. |
| $20M+ annually | Helped grow martech company Front Porch from startup to scale. |
| 26 countries | Led an online ad network with clients across 26 countries. |
| 144% more booked calls | CPL reduced below goal. Booked calls rose 144% with 30% conversion rates across Cardone Ventures portfolio. |
| Sold out in 48 hours | First launch sold out in 48 hours, driven by email and social media for HRE Beauty. |

---

## 8. Three pillars

**Eyebrow:** The three pillars
**H2:** Grow without being the bottleneck.

**01 · Fill Your Pipeline**
AI Assistants find real buyers and start real conversations. No cold email. No ad spend. Just booked calls on your calendar.

**02 · Become the Authority**
Record 30 minutes a week. Your voice shows up everywhere, in your words, and gets cited by AI search.

**03 · Run Without You**
Move the routine into Assistants. The business keeps working when you step away. You stop being the ceiling.

---

## 9. Curriculum

**Eyebrow:** Inside the membership

**H2:** One Assistant a week. A full system by month six.

**Lead:** First you set up your Command Center, led by Maestro. Then a new department of Assistants arrives each month, and Rev demos one a week so you use each with confidence.

### Cadence

- **Monthly** — 1 or 2 Workshops every month. Live or pre-recorded.
- **Weekly** — Friday Q&A with Rev
- **Daily** — Direct access to Rev inside the community.

### The 6-month hiring plan

**01 · The Offer Desk — The Offer They Can't Ignore**
Rebuild the offer first. The right buyers feel dumb saying no. Price stops being the objection.
- Sales Council · your advisory board
- Unique Mechanism Builder · names what only you do
- Offer & Pricing Architect · rebuilds your packages
- Objection Tester · your toughest prospect

**02 · The Sales Floor — Your First 10 Conversations**
Real buyer conversations on your calendar. No cold email. No ad spend.
- LinkedIn Signal Scout · your scout
- ICP Match & Prioritizer · your list builder
- Surgical DM Writer · your opener
- AI Slop Killer · your editor

**03 · The Deal Desk — Turn Replies Into Revenue**
Every reply becomes a booked call. Every call gets a proposal, before the buyer cools off.
- Reply Classifier · your front desk
- Follow-up & Reactivation · your follow-up rep
- Discovery Call-Prep · your research analyst
- Proposal & Quote Generator · your proposal writer

**04 · The Media Team — 30 Minutes to a Month of Content**
Record 30 minutes a week. Show up everywhere in your voice. Get cited by AI search.
- Recording to Content Engine · your production studio
- SEO / GEO Citation Optimizer · gets you found and cited
- LinkedIn Ghostwriter · your ghostwriter
- Content Repurposer · your distribution desk

**05 · The Operations Team — Get Out of the Bottleneck**
Move the routine out of your head. AI Assistants run it. You stop being the ceiling.
- Transcription to SOP · your process writer
- Inbox Triage · your gatekeeper
- Win Capture & Case Study Engine · turns wins into proof
- Team Knowledge Base · your company librarian

**06 · Client Success — Run Like a Full Team**
Spot churn before it hits. Get paid on time. Deliver like you have a full ops team.
- Client Health Monitor · your account manager
- Client Results Report · your reporting analyst
- Invoice & Payment Chaser · your collections desk
- GTM Teardown & Rebuild · your strategy consultant

### Org chart by month six

```
YOU
 │
 MAESTRO · your Chief of Staff
 │
 ├── 1 · OFFER DESK
 │      Sales Council · Unique Mechanism Builder
 │      Offer & Pricing Architect · Objection Tester
 │
 ├── 2 · SALES FLOOR
 │      LinkedIn Signal Scout · ICP Match & Prioritizer
 │      Surgical DM Writer · AI Slop Killer
 │
 ├── 3 · DEAL DESK
 │      Reply Classifier · Follow-up & Reactivation
 │      Discovery Call-Prep · Proposal & Quote Generator
 │
 ├── 4 · MEDIA TEAM
 │      Recording to Content · SEO/GEO Optimizer
 │      LinkedIn Ghostwriter · Content Repurposer
 │
 ├── 5 · OPERATIONS
 │      Transcription to SOP · Inbox Triage
 │      Win Capture & Case Study Engine · Team Knowledge Base
 │
 └── 6 · CLIENT SUCCESS
        Client Health Monitor · Client Results Report
        Invoice & Payment Chaser · GTM Teardown & Rebuild
```

**Payoff line:** Twenty-four Assistants. Six departments. All reporting to Maestro. Cancel anytime and the team stays yours.

---

## 10. Testimonials

**Eyebrow:** What the Experts Say
**H2:** Selected endorsements.

**Garen Mazon** — Co-Founder, SpaSurge · #1 Spa Marketing Agency
> When I think of campaigns that convert, I think of Rev. PERIOD. I've brought Rev in on million-dollar campaign launches, hired him for my 7-figure marketing agency, and seen firsthand what happens when real, A-level copy hits the page. Getting time on Rev's calendar is rare. If he's available, take it. Most people won't get the chance. If you do, don't walk… run.

**Kevin Rogers** — Founder, Copy Chief · #1 Copywriting Community
> Rev Vaughn is that ultra-rare copywriter who practically cannot fail. That's because he has not only mastered the craft, but he also deeply understands people and what drives their desires. Although I could have hired almost anyone, I was proud to call Rev my personal copywriter inside Copy Chief.

**Chris Orzechowski** — Creator, Email Copy Academy · #1 Email Marketing Program
> Knocked it out of the park. Exceeded our sales goal. I fully endorse Rev. Kevin Rogers and I hired him to redo our Email Copy Academy funnel, and Rev knocked it out of the park. We even exceeded our sales goal. I was blown away by how well it did.

**Lisa De Rosa** — Director, Corporate Partnerships · Cardone Ventures
> Our first launch sold out in only 48 hours, driven by email and social media. I had the opportunity to work with Rev on several of our consumer brands, including HRE Beauty and CardoMax. His ability to blend strategy, creative execution, and data made a measurable difference in how those brands grew.

**Joe Bradley** — Director, Marketing Partnerships · Cardone Ventures
> Reduced CPL below goal. Booked calls rose 144% with 30% conversion rates. Rev's work set a new standard for how we approach campaign structure, messaging, and analytics across multiple brands. I confidently recommend Rev for any role requiring strategic marketing leadership, copy expertise, and proven results.

**Jimmy Parent** — Persuasion Scientist
> Listen to his training, and you'll make more money TODAY! I learned more about guiding people through the sales process than I learned from thousands of dollars in paid sales courses. It doesn't matter what industry you're in — listen to his training, and you'll make more money TODAY.

---

## 11. Pricing (first CTA)

**Eyebrow:** Join the Inner Circle
**H2:** Stop guessing. Start building.

### Card 1 — Community

**AI Inner Circle · $199**
per month · rises to $249 · or $995 once

- 24 AI Assistants over six months (a department a month)
- 1-2 live workshops per month
- Friday Q&A with Rev
- Answers to your questions inside the community

**CTA:** Join AI Inner Circle → `/consultants`

### Card 2 — Community + Coaching

**AI Inner Circle + 1:1 · $999**
per month

- Everything in Community
- Weekly 1:1 coaching call with Rev
- Customized to your business, market and offer
- Email support in between sessions

**CTA:** Apply for Coaching → `/contact`

*(The same pricing block renders again in section 13.)*

---

## 12. About

**Eyebrow:** About

**H2:** I'm not teaching theory. I'm building with these tools right now.

**Body:** I've founded or helped build over a dozen businesses across six countries — Japan, Korea, Taiwan, China, the UK, and the US. Every system inside AI Inner Circle is one I'm actively running in my own businesses. You're not getting a course. You're getting what's working today.

**Image:** Rev Vaughn portrait, grayscale

---

## 13. Closing CTA

**Eyebrow:** Join the Inner Circle

**H2:** Every week you wait is another week of overwhelm and falling behind.

Followed by the same two pricing cards as section 11.

---

## Notes for repurposing

Open items carried into the v2 work, recorded here so they are not rediscovered
from scratch:

- **Three conflicting pay-in-full prices** exist across the site. This page says
  `$995 once`. Reconcile before reusing any price line.
- **The $999 coaching tier has no landing page.** Its CTA goes to `/contact`.
- **"over a dozen businesses across six countries"** (section 12) and
  **"7 businesses"** in the v2 wins block are different framings of the same
  fact. Pick one per asset.
- **The assessment lives at two routes**, `/assessment` and
  `/consultants/assessment`. This page links the latter.
- **No member outcomes appear anywhere on this page.** Every number is from
  Rev's client work, not from AI Inner Circle members. Keep that distinction
  intact in any derived asset.
