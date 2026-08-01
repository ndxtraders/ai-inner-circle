# AI Inner Circle: Homepage Messaging PRD

**Date:** 2026-08-01 · **Status:** Planning. Nothing shipped, nothing written to the repo.

---

## Status and how to use this

This is a planning document. No file in `ai-inner-circle` or `ai-inner-circle-agents` was created,
edited, or deleted while it was written. Every source document behind it is retained in the session
scratchpad and can be reviewed independently.

**Part 1 is the primary artifact.** Rev's framing: *"We are making the full sales case for AI Inner
Circle. What makes it into the website comes out of that."* It is format-agnostic on purpose. Parts 2
and 3 derive from it, and so should any carousel, video script, webinar, or deck built later.

**The Concept Model governs everything.** It is Rev's, supplied 2026-08-01. Where any section of Part 1
or Part 2 disagrees with it, the model wins. Its three greens are the fixed vocabulary for the whole
document: **AI Knows Your Business · Tasks Completed · Ready To Use.**

**Read order.** The Concept Model, then Part 2 for the page, then Part 1 for the argument, then Part 3
for where everything else went. The Appendix stands alone and is what gets used directly for social and
video.

### Voice gate results, from the real script

Run with `evaluate_content.py` against `guardrails-config.json`. Raw scores and dismissals both shown,
because a dismissal that is not disclosed is not a score.

| Document | Composite | Status | Dismissals |
|---|---|---|---|
| The Concept Model and core sections | **9.21** | PASS | None |
| Part 1, the full sales case | **9.13** | PASS | 1, a verbatim quote from Rev's own email |
| Part 2, shippable copy only | **9.12** | PASS | 3, all verbatim Rev material |
| Part 3 | not gated | internal doc | 0 em-dashes confirmed |

Every dismissal is Rev's own writing, quoted. None is generated copy. The full Part 2 file scores 7.4
because the gate reads spec annotations like "Support, not core set" as copy; isolating the headlines
and body copy is the honest measurement of what would ship.

**The tricolon ruling.** Rev's goal line is a three-beat parallel, which the gate flags automatically.
Rev sanctioned it on 2026-08-01 as core positioning. It passed the gate as written anyway, so no
dismissal was needed, but the ruling stands so a later pass does not "fix" it.

---

## Decisions made in this session

| Decision | Rationale | Driven by |
|---|---|---|
| The homepage leans consultants and uses consultants-track examples | Consultants is the example track. Real seat names, department names, the org chart roster, "24 Assistants" and "six months" are all legal and are the most concrete credibility material available | Rev, correcting the handoff |
| Every membership CTA points at `/consultants` | Simplification. The live hero already does this at `app/page.js:302` | Rev |
| The Membership Hub is a do-later action item | It gets built, but not now, and this PRD does not spec it | Rev |
| The Concept Model is the spine: goal line, three shifts, nine missions | Outcome-led rather than mechanism-led. Replaces the unsupported Three Pillars | Rev |
| Green one is "AI Knows Your Business" | Greens are outcomes. "Context Loaded" named the precondition instead of the win | Rev, refining |
| "Ready To Use" is explicitly human-in-the-loop | Track, Review, Approve are the owner's moves. Naming them as a third of the system is what keeps "complete the work" honest | Rev |
| The goal line's tricolon stays | Core positioning, and it is Rev's | Rev |
| M2: lift the existing spine, add two new sections | The consultants spine converts. It lacks an "I already do this" section and a refusals section, and the root reader needs both | Consensus, all seats |
| M3: demote both paid offers, keep one named exit | Three of thirteen sections sold non-membership things ahead of the membership argument. Neither entry offer can take payment today, so the revenue being protected is uncollectable | Consensus, on verified facts |
| The single paid exit is the $49 AI Brain Workshop | It is literally a smaller version of the same mechanism. The $300 diagnostic serves a different intent and keeps its own page | Copywriter, adopted |
| The curriculum and org chart stay on the homepage | Not a rule violation once the balance rule was withdrawn. With zero member outcomes, a real roster the reader can look at does work nothing else can | Revised after Rev's correction |
| Win 08 is a revenue-system credential, never an AI credential | Rev rebuilt the campaign, funnel, and follow-up. He did not develop their AI | Rev |
| No competitor vendors are named | The no-naming version reads better and the "burns your domain" claim has no source | Rev |
| `$199` rising to `$249` replaces all enrollment dates | A price lever creates urgency without expiring. Consultants said August 1 and coaches said August 15, both stale within days | Rev's own email copy |
| `/call-intel` gets deleted | Verified: no `page.js`, one 1-byte placeholder, zero references in `app/` | Rev, confirming |
| Two spec sections retired as duplicates | Once the Concept Model landed, the old "Mechanism" and "Hiring Plan and Org Chart" sections were saying what The Three Shifts, How It Runs, What It Refuses To Do, and What You Actually Get already say | Alignment pass |

---

## What the prior handoff got wrong

Recorded so a later session does not re-inherit it. Every item verified against source, not reported.

1. **The duplicate-page premise described work that had already shipped.** `/ai-inner-circle` has been a
   permanent 301 to `/` since the Vercel migration (`next.config.js:21-23`, documented again at
   `app/sitemap.js:6`). The 439-line file is unreachable. Motion M1 as written would have undone a
   deliberate SEO fix.
2. **`app/page.js` is 608 lines, not 579.**
3. **The route list was missing seven routes:** `call-intel`, `quick-win`, `resources`, `voice`,
   `workshops`, `thank-you`, `privacy-terms`.
4. **"It must not favor one program over the other" was not Rev's instruction.** The handoff attributed
   it to him. It was written by an AI without full repo access and Rev withdrew it.
5. **The case studies were read as a credential block.** They are systems stories, and the systems are
   structurally the same idea this product sells. See Part 1 section K.
6. **The live hero was read one line short.** Seven agents cited `app/page.js:295-297` and concluded the
   hero sells a consulting service. The subhead at line 299 already reads *"Self-staffing AI teams that
   run without you as the bottleneck. Get the AI systems I use to attract, engage, and convert
   clients."* The positioning was already there. The real problem was an H1 and subhead selling
   different things.

**Standing lesson.** Open the source file for any load-bearing claim. A three-line citation range
produced a wrong verdict that survived seven independent agents.

---

## Open questions for Rev

Each has a recommendation and a default, so nothing is blocked.

1. **Do published article metrics count as citable proof?** The articles carry real measured numbers,
   including AI-detection scores on Rev's own work and a 172-email campaign result. The proof sheet
   declares itself the only permitted source; the hard rules also permit existing site copy. The two
   disagree. **Recommendation: yes, citable.** The detection-score story is the closest thing on the
   site to a demonstration of a quality gate working. **Default if unanswered: excluded**, and no draft
   copy uses them today.
2. **Three pay-in-full prices exist and none agree.** `$995` on the homepage only, `$796` archived in a
   coaches source comment, neither in any schema. **Recommendation: keep all off root until reconciled.
   Default: off root.**
3. **The `$999` 1:1 tier has no page anywhere.** No schema, a generic contact form behind it.
   **Recommendation: off root until it has one. Default: off root.**
4. **`/coaches` is `page.jsx` while every other route is `page.js`.** Rev does not know why. Part 3
   reports whether the extension is load-bearing. Nothing was changed. **Default: leave it.**
5. **The Cardone Ventures CustomGPT.** Rev helped build their first CustomGPTs. His instruction was
   sidebar at most, and he does not name them in his own writing, calling them "a former $100M+ client."
   **Recommendation: use the story, never the name. Default: omitted**, as it is today.

---

## Action items for later

Known, owned by Rev, and deliberately not treated as blockers on this PRD.

- **Build the Membership Hub.** The homepage points at `/consultants` until it exists.
- **Fix the checkout URLs.** `/ai-second-opinion`'s `CHECKOUT_URL` points at `/contact` while microcopy
  promises a Stripe checkout. `/ai-brain`'s is flagged as a placeholder in its own source.
- **Fix the three broken `/ai-leverage` cards.** Line 59 points "Join AI Inner Circle" at the dead
  route, line 31 points at `/ai` which has never existed, and card 4 quotes `$97` against the real
  `$49`. The page sits in the sitemap at priority 0.6.
- **Delete `app/call-intel/`.** Confirmed by Rev. No page, one 1-byte placeholder, zero references.
- **Deduplicate `REVIVX`** in the `CLIENTS` array at `app/case-studies/page.js`, lines 33 and 43.
- **Connect `/case-studies` to the product.** All ten of its CTAs go to `/quick-win` and the page never
  mentions AI Inner Circle.
- **Add `/ai-second-opinion` to the sitemap.** A 574-line paid sales page is currently missing from
  `STATIC_ROUTES` entirely. One-line fix.
- **Delete `app/map/page.js`.** A real 301 sits in front of a client-side redirect that can never run.

---

## Proof gaps: what Rev needs to supply

Ranked by value per hour of effort. The first four can ship this week and would change what the page is
allowed to claim.

1. **One full job description file, published free with no email gate.** The highest-value asset here
   and the cheapest to produce. Part 1 promises the buyer can inspect the architecture before paying,
   and today there is nothing for them to open. It is also the only CTA the sophisticated buyer said
   they would click.
2. **A screen recording under sixty seconds of a hire refusing to work because a brain file is
   missing.** The enforcement claim is the most repeated mechanism claim in the whole document and it
   is currently assertion. One clip turns it into demonstration.
3. **One real produced artifact, redacted.** An offer autopsy or an objection playbook.
4. **A stopwatch-honest timed install.** The site says 2 to 3 hours and nothing backs it, so no
   total-install-time claim appears anywhere in this PRD. If it is really four hours, publishing four
   hours buys credibility for every other number.
5. **A member count for the founding cohort.** Any number. For a membership, silence reads as zero.
6. **A screen recording of Maestro picking a hire from a plain-language symptom.** The sophisticated
   buyer named this as the one thing they cannot rebuild with a Claude Project, and it is invisible today.
7. **Month one's required reading list beside month six's.** The compounding argument in one picture.
8. **One named member with a before and after.** Highest value of all, and the only one that cannot ship
   this week, which is why it is last.

**Partially covered already.** Rev's landing page story demonstrates both the review gate and
just-in-time hiring. It is his own operation, not a member outcome, and it is never presented as one.

**Still unsourced and written around:** the "every week I see founders stuck in one of two places"
premise, the "cold email burns your domain" claim, any AI-search citation evidence, and what the Claude
Partner Network badge certifies.

---


# THE CONCEPT MODEL

## THE CONCEPT MODEL. Rev's, locked.

### The goal line

> **I help you build Self-Staffing AI Teams that know your business, complete the work, and create
> on-brand output you can actually use.**

### Problem to result

| Red | Green |
|---|---|
| Generic Output | **AI Knows Your Business** |
| Slower Work | **Tasks Completed** |
| Endless Fixes | **Ready To Use** |

### The missions under each result

| AI Knows Your Business | Tasks Completed | Ready To Use |
|---|---|---|
| Build Center | Onboard Team | Track Work |
| Brief Maestro | Launch Department | Review Output |
| Load References | Assign Work | Approve Work |

### Why this model is stronger than what it replaces

**It fixes the proof problem in the current Three Pillars.** Today the site promises "no cold email, no
ad spend, just booked calls" and "gets cited by AI search." Neither is supported, and the first one is
contradicted by the architecture's own limits on the LinkedIn hire. Every green above is a state of the
system that a buyer can check. That matters more than usual for a product with zero member outcomes.

**The third column is the human in the loop, and it is named.** Track Work, Review Output, Approve Work
are all the owner's actions. So the model never promises the work happens without you. It promises the
work arrives ready for you. That is the honest version and it is also the one that survives month two.
Rev's published philosophy is the anchor: **Human for Trust. AI for Scale.**

### Ruling recorded: the tricolon stays

"know your business, complete the work, and create on-brand output you can actually use" is a three-beat
parallel. The ai-check gate flags tricolon automatically. **This is a sanctioned dismissal, decided by
Rev on 2026-08-01.** It is the core positioning line, it is his, and it works. A later pass must not
"fix" it. Record the dismissal when running the gate rather than rewriting the line.

---

---

# PART 1: THE FULL SALES CASE

> **Note on section A.** The one-sentence case predates the Concept Model. Rev's goal line supersedes it.
> Section A is retained because the sentence under it is still the sharpest statement of the mechanic.

## A. THE ONE-SENTENCE CASE

**Your AI forgets your business every time you close the window, so you keep re-explaining it. AI Inner
Circle writes your business down once, then gives you a team of AI hires that are not allowed to start
work without reading it.**

---

## B. THE ONE-PARAGRAPH CASE

You already pay for AI. You are probably good at it. And you are still the one opening the window,
typing the same background paragraph, and rewriting what comes back. That is not a prompting problem.
Your business lives in your head, so every session starts from zero. AI Inner Circle installs a folder
on your computer, interviews you once for about twenty minutes, and writes your offer, your buyer, and
your voice into files. After that, every AI hire you bring in has to read those files before it can
touch a job. You get a new department every month. A chief of staff named Maestro routes the work,
checks the drafts against your voice, and sends the weak ones back before you ever see them. What gets
made lands in your folder as a file you own, where you can find it again six months later.

---

## C. THE ENEMY

### The loop

Here is the part everybody recognizes. You open a new window and type some version of the same setup you
typed last Tuesday. Who you are and who buys from you. What you charge, and how you want it to sound
so it does not come out like a robot.

Then you paste in the thing you actually needed help with, read what comes back, and rewrite most of it.

Then you close the window and every word of that setup is gone. Next Tuesday you do it again.

Rev hit this himself. From his own email:

> A couple of years ago, I was running two large launches simultaneously and using AI as a junior
> assistant. That's when I hit a wall with AI. It was fast. It was kind of useful. But everything it
> wrote sounded like everyone else on the Internet using AI.

And then the line that names the real problem:

> Worse, I was the bottleneck. Every task started with me explaining the business, the offer, and the
> writing style from scratch. Over and over again.

### The misdiagnosis

So you decide you are bad at prompting. Everybody selling to you agrees, because "learn better prompts"
is a product. Better prompts, then longer ones. A prompt library, a course, or whatever tool shipped
last week. All of it aimed at the wrong layer.

Rev has been diagnosing campaigns for 25 years and this is the same mistake he sees everywhere else.
From the SquadUp case study, in his own published words:

> Most campaigns like this fail for the same reason. Everyone looks downstream. More leads. More ads.
> New funnels. More content. The real problem is usually upstream, and it hides.

Upstream here is simple. The AI does not have your offer, your buyer, or your voice. You have all three.
They live in your head, which is exactly where everything else in your business lives.

So a prompt is really you remembering to hand over your business. On every task. Forever.

Nobody keeps that up. And the whole approach was built on you keeping it up.

### The compounding cost

The generic output is annoying. What it costs you is worse.

Real work is not one task. It is forty tasks that hand off to each other. The offer feeds the outreach.
The outreach feeds the calls. The calls feed the content.

When every one of those starts from a blank window with no memory of the last one, nothing stacks up.
You produce constantly. You build nothing.

Look at what two years of that actually produced. Hundreds of conversations. A handful of documents you
saved somewhere. Everything else scrolled away.

### Where this ends up

Rev got an internal email from a former client recently, a company north of $100M. Here is what their
AI strategy had turned into:

> Their main solution is two Claude skills. One generates branded decks, and the other "humanizes" the
> output afterward because the decks sound like AI slop.
>
> They built an AI repair tool for their other AI tool.

Read that twice.

The humanizer exists because the prompts are weak. The prompts are weak because nobody fixed the
thinking underneath them. So instead of fixing the thinking, they standardized the cleanup.

The tool rollout came before the diagnosis. That is the whole failure, and it is expensive, and from the
inside it looks like progress.

---

## D. WHY THE USUAL FIXES FAIL

You have tried some of these. They all break in the same place.

**Generic chat AI.** You type the same long prompt every time. Then you rewrite what comes back. Every
session starts from zero.

**Prompt libraries.** A better prompt buys you a better paragraph. The next session still starts from
zero, and now you have a folder of prompts to manage on top of everything else.

**Courses.** You finish with notes and a login. The work still is not built. So it sits on your drive
next to the last three.

**Hiring, a VA, or an agency.** Expensive and slow. Now you manage a person instead of doing the work,
and your business context moves into their head rather than out of yours. When they leave, it leaves.

Look at what those four have in common. Every one of them puts the job of remembering your business back
on you. On your discipline. On every single task.

That is not a character flaw. It is what happens when the system does not require it.

---

## E. "I ALREADY DO THIS"

This is the honest objection, and if you are good at AI it is the first thing you thought.

You have a project folder with your ICP in it. Maybe your offers, some voice samples, a few case
studies. It works. You built it yourself and you are right to be a little proud of it.

Here is what it still does not do, and none of it is a knock on how you built it.

**It only covers the jobs you thought of.** You wrote prompts for eight things. The work costing you the
most is the work you have not noticed yet. Nobody writes a prompt for a problem they cannot see.

**It loads your context when you remember.** Your setup is good and it is also optional. On a busy week,
optional means off. That is not discipline failure. That is what optional means.

**It stops when the window closes.** Ask yourself what file your best AI session last month actually
produced. If the answer is a paragraph you pasted somewhere, that session is gone.

**There is nobody to hand off to.** You are the router. You carry the map of which prompt does what, and
that map lives in your head, which is the same problem you were trying to solve.

None of that is about quality. Your output is fine. The gap is coverage, enforcement, persistence, and
handoff. You cannot prompt your way across any of those, because they are not prompting problems.

---

## F. THE MECHANISM

Four moves, and together they are the whole architecture.

### Move one. Your business gets written down once.

You put a folder on your computer and open it in Claude. You type "Maestro, I'm new."

Maestro asks you questions, one at a time, for about twenty minutes. What you sell. Who buys it. How you
sound when you write.

At the end it writes your answers into short files inside that folder. That is your Business Brain.

### Move two. Reading it is a requirement

This is the part that makes it different from every prompt you have ever written.

Every hire reads your business before it works, and what it reads is scoped to its job. The file it
opens with tells it to, and it will not proceed until it has.

Three separate things enforce that. Maestro refuses to route work when the Brain is missing and runs the
interview instead. The individual hires stop and send you back. And Maestro will not even build the
Brain on a weaker model, it waits for a fresh session.

Skip the setup and the building tells you to go do the setup. It will not guess your business for you.
A hire that guesses gives you confident advice about a company that does not exist.

### Move three. Work leaves as a file.

Every job ends with something written into your folder. Every job carries a one-line test, written
before the work starts, that says what finished looks like.

From inside the system's own files: advice that lives only in chat dies in chat.

So you check your progress by looking for a file with a name, on a date, in a folder.

### Move four. Nothing waits on the calendar.

This is the part most people miss, and Rev tells it best as a story.

> Wednesday afternoon at 4:06 pm and I needed to build a complete landing page and get it live before
> COB. That was less than an hour away.
>
> Problem: I had to leave for a concert with my family by 5 at the latest.
>
> Bigger Problem: I didn't have a landing page builder on my team.

So he checked in with Maestro and passed along the task.

> I never asked for it, but Maestro saw the job, saw the gap, and hired a landing page builder on the
> spot. Maestro passed on the requirements, then got out of the way.
>
> But he didn't stop there. Before that page ever reached me, Maestro reviewed it. Voice. Tone. Design.
> If it needed fixes, I never heard about them. The first draft was just done and ready for my review
> and approval.

When Maestro "hired" someone, what actually happened is that it built a specialist for that one job.

And that specialist stays. Rev calls it the Rolodex. Next time he needs a landing page, it is already on
call.

> I never built a hundred agents I will never use. They do not sit around slowing everything down. They
> get called up when the work needs them. Then they go back in the Rolodex.

That is why he calls it a self-staffing AI team.

It also answers the objection you were about to raise. You are never stuck waiting for next month's
department. If a job comes up that nobody on your team covers, Maestro writes the specialist that
session and the work goes out.

---

## G. WHAT IT ACTUALLY IS

Here is the plain version, with the jargon stripped out.

**You install a folder.** Inside it there is a chief of staff, an empty room where your business gets
written down, an empty team folder, and a work board. That is what arrives.

**Maestro is the chief of staff.** You describe a problem in plain language. You do not name a tool.
Say "my proposals take too long" and Maestro picks who handles it, opens their playbook, and puts the
job on the board with a test for what done means.

**You hire a department a month.** Four new hires, all at once at the start of the month. Nothing gets
drip-fed at you inside the month. Twenty-four of them over six months.

Month one is The Offer Desk. Sales Council, Unique Mechanism Builder, Offer and Pricing Architect,
Objection Tester. Month two is The Sales Floor. LinkedIn Signal Scout, ICP Match and Prioritizer,
Surgical DM Writer, AI Slop Killer. Month three is The Deal Desk, and it runs from reply to proposal.
Then a Media Team, then Operations, then a final month that audits the whole business.

**Maestro checks the work before you see it.** Every draft gets read against your voice file first.
Anything that could have been written for anybody goes back for a rewrite. Your review job shrinks to
approve, or "change this."

**Everything lands in a file.** Plain text, in a folder on your machine, readable in any editor. Nothing
gets deleted. Superseded work moves to an archive and Maestro tells you it moved.

---

## H. THE FIRST AFTERNOON

You feel it work the same day you install it, and here is the first session, start to finish. Put the folder somewhere permanent, then open Claude on your
desktop and point it at the folder. Type four words: "Maestro, I'm new." Answer questions for about
twenty minutes while it builds your Brain.

Then you drag in your first department and say "new hire just walked in," and run one real job through
it end to end.

One real deliverable, done, on day one. And that is the rhythm from there. The team drafts, Maestro
checks it, you approve.

---

## I. WHERE THIS GOES

Month one and month six are not the same product.

Month one hands you four documents that do not exist today. What is actually broken in your offer,
ranked, biggest leak first. The name for the thing only you do. Your rebuilt offer with packaging and
price. And the answer to every objection you get, in your own words.

That rebuilt offer becomes the offer of record. Everything that works on your business after that sells
from it.

Here is the interesting part. The last hire you bring in is not smarter than the first one. It just has
more to read.

By month six it can open your win rate, your follow-up list, and what your offer actually says today. No
outside consultant gets that, because no outside consultant has been in the building for six months
writing things down.

And if you stopped after month one and cancelled, you would still own those four documents. They are
files. They are on your computer.

---

## J. WHAT IT REFUSES TO DO

Here is the thing about buying an AI product right now. You have probably already been burned by one. So
a page full of promises is worth very little to you.

Let me show you the parts of this thing that refuse.

**It refuses to work without knowing your business.** If the files describing you are missing, Maestro
stops and runs the interview. The hires stop too. Generic advice is how owners get hurt, and that
sentence sits in the system's own instruction file where the hires read it.

**It refuses to run the interview badly.** On a weaker model it will not start. It says so and waits for
a fresh session.

**It refuses to send anything.** Nothing in the building sends, posts, publishes, books, or pays. There
is a column on your board called Your Move, and that is where every real-world step waits for you. Ask
whether something went out and it checks for a receipt. No receipt means not sent, and it tells you
that.

**It refuses to invent.** From the coordinator's own instruction file: one invented result costs more
trust than a hundred honest not-yets. Estimates get labeled as estimates.

**It refuses to pad.** The hire that finds prospects will tell you an empty week is an empty week rather
than hand you names it made up. A padded list burns your time next week.

**And it tells you what it cannot do, right in the welcome letter.** The LinkedIn hire
cannot browse LinkedIn, and it says so, because no AI reliably can. The content hire cannot listen to
audio, so you bring a transcript. You get the workaround instead of a lie.

None of that is modesty. A tool that claimed it could browse LinkedIn would hand you invented names, and
you would quit in week three.

---

## K. WHO BUILT IT, AND WHAT I CANNOT PROVE

### Why this exists

Rev built this for himself before he packaged it. In his words:

> So I stopped fighting it. I taught the AI my business instead. Who I serve. How I think. How I make
> calls. The way I write. I put it all in one place the AI reads on its own.
>
> Now it answers like a partner who's been with me for years.

And:

> I run my work on this setup every day. Client work, sales copy, organic content, sales call prep, and
> business strategy. This isn't theory I read about somewhere. It's the system I use.

The landing page story in section F is that system running on a Wednesday afternoon with a concert to
get to.

### The work behind it

Rev has built revenue systems for founder-led brands for 25 years. What matters here is the shape of
that work, because it is the same shape as this product.

**REVIVX** was paying to generate leads and then losing them. Rev built a lifecycle system with one
rule: no lead left behind. Twelve paths, each one built to catch a specific way a lead goes cold.
Instant SMS from a named consultant. A parallel email series. Show-up campaigns before each call.
Rebooks for no-shows. A win-back path. Booked calls rose 144% with a 30% call conversion rate, CAC came
down 37%, and it held 280+ booked calls a month.

That is a department with declared lanes and handoffs. Built for humans, five years before anyone could
build one out of AI hires.

**10X Health** had plenty of quiz traffic and a leaking path from quiz to consultation. Rev rebuilt the
CRM signal logic around one question: when does a quiz answer become a buying signal? More leads crossed
into qualified. CAC came down while volume held.

**10X Business Coach** needed a repeatable acquisition engine, so Rev built a webinar-to-call funnel with
no-show sequences, rebooks, and nurture for people who were not ready. Over $1M in new revenue in under
nine months, and the campaign became the control.

**SquadUp Summit** was a live event nobody had heard of, with one neglected list of 5,259 cold
prospects and no pre-launch plan. Rev built a 172-email campaign, 58,053 words. It produced a 43.2% open
rate, 1,920 sales from 5,259 prospects, and $6.57M in under 120 days.

**Email Copy Academy.** Chris Orzechowski and Kevin Rogers brought Rev in to rebuild the campaign, the
funnel, and the follow-up for their relaunch. It beat its sales goal by 10%.

> "Knocked it out of the park. Exceeded our sales goal. I fully endorse Rev."
> **Chris Orzechowski**, Creator, Email Copy Academy

> "Although I could have hired almost anyone, I was proud to call Rev my personal copywriter inside Copy
> Chief."
> **Kevin Rogers**, Founder, Copy Chief

Rev is also in Anthropic's Claude Partner Network.

### Now the straight part

Every number above came from work Rev did for clients. None of them are results from someone using this
membership.

The founding cohort is new. Nobody has finished the full program yet. There is no member case study to
show you, and dressing up a client number to look like a member number is exactly the move that would
make everything else here worth ignoring.

What you can do instead is look at the thing before you pay for it. It is files. Plain markdown. The
required reading list at the top of each hire, the test it has to pass before it calls anything done,
and the jobs it refuses to take are all readable.

That is a weaker promise than a member testimonial. It is also one you can check yourself, which a
testimonial never is.

---

## L. WHAT IT WILL NOT DO, AND WHAT IT REALLY COSTS

Read this part before you decide, because it is where most people either commit or walk.

**You still have to show up.** This reduces your work. It does not remove you. You still record the
audio, run the weekly ten-minute harvest, press send, and make the calls. If what you want is
done-for-you, that is Rev's consulting lane and this is not it.

**It runs on Claude, and that is a real dependency.** You need a Claude plan on top of the membership,
starting at $20 a month. It runs in the Claude desktop app on Mac or Windows, because the workspace it
uses does not exist in a browser. Heavy daily use hits the limits of the $20 plan.

**A couple of departments have small extra costs.** The outreach month wants a paid LinkedIn plan and a
few dollars of pay-as-you-go data. No CRM. No cold email tool. No ad spend.

**The compounding takes time.** Month one is same-day useful. The part where the whole building reads
itself does not pay off until you are several months in.

**You are early.** This is a founding cohort, and Rev would rather say that than pretend there is a
crowd in here.

---

## M. THE OFFER AND THE ASK

**$199 a month, founding price. It rises to $249 soon.**

What comes with it:

- A new department of four AI hires every month
- Maestro, your chief of staff, checking the work before you see it
- Your Command Center, set up with you
- One to two live workshops a month
- Friday Q&A with Rev
- Daily access to the community

Cancel anytime. Everything you built stays in your folder, on your machine, in files you can open in any
text editor.

**[ Join AI Inner Circle ]** → `/consultants`

Not ready to join? Start smaller. The AI Brain Workshop is $49 and it is the same idea at one tenth the
size. You build the file that tells AI who you are, and you keep it whether you ever join or not.

---

---

# PART 2: THE HOMEPAGE SPEC

**Fifteen sections.** Two from the original spec were retired as duplicates once the Concept Model
landed: the old "Mechanism" section, now carried by The Three Shifts, How It Runs, and What It Refuses
To Do; and the old "Hiring Plan and Org Chart" section, now carried by What You Actually Get.

1. **HERO**
2. **IS THIS YOU**
3. **THE LOOP**
4. **WHY THE USUAL FIXES FAIL**
5. **"I ALREADY DO THIS"**
6. **THE THREE SHIFTS**
7. **HOW IT RUNS**
8. **WHAT YOU ACTUALLY GET**
9. **THE WEDNESDAY AFTERNOON**
10. **WHAT IT REFUSES TO DO**
11. **YOUR FIRST AFTERNOON**
12. **WHO BUILT IT, AND WHAT I CANNOT PROVE**
13. **WHAT IT WILL NOT DO, AND WHAT IT COSTS**
14. **THE OFFER**
15. **THE CLOSE**

---

## SECTION 1: HERO

> **Eyebrow:** For experts, consultants, and founder-led brands
>
> **H1:** A self-staffing AI team that runs without you as the bottleneck.
>
> **Subhead:** Pre-built AI Assistants that know your business, complete the work, and create on-brand
> output you can actually use.
>
> **Primary CTA:** [ Join AI Inner Circle ] → `/consultants`
>
> **Secondary, text weight:** Not sure where to start? Take the 5-Minute AI Assessment → `/assessment`
>
> **Under the CTA row, small:** $199 a month at the founding price. It rises to $249 soon.
>
> **Badge caption, new, under the Claude Partner Network image:** Rev is a member of Anthropic's Claude
> Partner Network.

**What changed and why.** The old draft ran four sentences of mechanism under the H1: writes it down,
has to read it, four arrive monthly, Maestro routes and checks. It explained the machine before the
reader had a reason to care. The subhead above says what the buyer gets and stops.

**On "pre-built" beside "self-staffing."** These read as opposites at a glance and they are not. Twenty
four Assistants arrive pre-built over six months. Maestro builds a new specialist on the spot when a job
comes up that nobody covers. The hero can carry both without explaining either, because section 4 and
the Rolodex story do that work. Do not add a clause to the hero reconciling them.

**IMAGE.** Frame B1, The Org Chart. Reusable core set. YOU at the top, one hairline down to MAESTRO, one
down to a row of six department boxes. Nothing else. Black hairlines on paper, Maestro's box in green.
It says "real structure" in one glance, which is what a page with no member results needs.

**MOBILE.** The right column is `hidden md:flex` today, so the logo and the Partner Network badge vanish
on phones. Move the badge under the CTA row so it survives, since it is the only credential on the site
Rev did not author himself.

**BUILD.** Copy swap plus one small layout change to the badge. The three-column grid stays.

---

---

## SECTION 2: IS THIS YOU

**JOB.** Get the reader to recognise their own week in under ten seconds, so they keep scrolling.

**BELIEF MOVED.** Arrives assuming the page might not be about them. Leaves at B1, everything in my
business waits on me.

**HEADLINE.**
- **Primary:** You're the bottleneck. Everything waits on you.
- **Alt 1:** Everything in this business still waits on you.
- **Alt 2:** You are the only working part.

**BODY COPY.**

> **Eyebrow:** Is this you?
>
> - You reply late. The deal goes cold.
> - Your best process lives in your head.
> - You post, and it sounds like everyone else.
> - Leads come in. Most never hear back.
> - You know AI should help. You don't know where to start.
>
> Sound familiar? Keep reading.

**CTA.** None. No control in this section.

**IMAGE.** **Ink Panel A2, The Only Working Part.** Support, not core set. One founder at a desk with six
ropes running from their wrists to six unlit rooms. Same hand-inked cream and black style as
`/ai-super-agent-vs-ai-team.jpg`. It carries the bottleneck without a word of embedded text, which makes
it usable as a carousel cover later.

**MOBILE NOTE.** P1 stacks to eyebrow, H2, then the list. That reads correctly stacked. Keep the ink
panel below the list on phones so the pain lines hit first.

**BUILD NOTE.** Rearrangement. P1 plus a `PAINS` array. The block exists verbatim at
`app/consultants/page.js:330-349` with its data at `:51-57`. Copy it across. About twenty minutes.

**SOURCE.** Part 1 has no qualifier by design, since Part 1 is format-agnostic. This section is the
homepage's own entry ramp and it uses the five shipped consultants pain lines verbatim, per the
blueprint's single-qualifier ruling.

---

---

## SECTION 3: THE LOOP

**JOB.** Name the mechanic the reader lives inside, then take the blame off their prompting skill. This
is the swing section. A page that jumps from pain to mechanism only sells to people who already agreed.

**BELIEF MOVED.** B2 (I already bought AI, and it made me a rewriting job) to B3 (this is not my
prompting skill, it is structural). B3 is the swing belief in the whole spine.

**HEADLINE.**
- **Primary:** Your AI forgets your business every time you close the window.
- **Alt 1:** Every session starts from zero. That is the whole problem.
- **Alt 2:** You have re-explained your business to a machine four hundred times.

**BODY COPY.**

> **Eyebrow:** The loop
>
> Here is the part everybody recognizes. You open a new window and type some version of the setup you
> typed last Tuesday. Who you are and who buys from you. What you charge, and how you want it to sound
> so it does not come out like a robot.
>
> Then you paste in the thing you actually needed help with, read what comes back, and rewrite most of
> it.
>
> Then you close the window and every word of that setup is gone. Next Tuesday you do it again.
>
> So you decide you are bad at prompting. Everybody selling to you agrees, because "learn better
> prompts" is a product. Better prompts, then longer ones. A prompt library, a course, or whatever tool
> shipped last week.
>
> I have been diagnosing campaigns for 25 years, and this is the same mistake I see everywhere else.
> Everyone looks downstream. More leads. More ads. New funnels. The real problem is usually upstream,
> and it hides.
>
> Upstream here is simple. The AI does not have your offer, your buyer, or your voice. You have all
> three, and they live in your head, which is exactly where everything else in your business lives.
>
> So a prompt is really you remembering to hand over your business. On every task. Forever.
>
> Nobody keeps that up.

**ASIDE, bordered panel beside the body.**

> **Where this ends up.**
>
> I got an internal email from a former client recently, a company north of $100M. Their main AI
> solution is two Claude skills. One generates branded decks, and the other humanizes the output
> afterward because the decks sound like AI slop.
>
> They built an AI repair tool for their other AI tool.
>
> The humanizer exists because the prompts are weak. The prompts are weak because nobody fixed the
> thinking underneath them. So instead of fixing the thinking, they standardized the cleanup.

**CTA.** None.

**IMAGE.** **Frame B3, The Setup Paragraph On Repeat.** REUSABLE CORE SET. The same grey paragraph block
stamped five times down the frame, each with a small green X beside it, and a tally counter in the
corner. Embedded text: "EVERY. SINGLE. TIME." This is the hook slide for every carousel and it reads at
thumbnail size. Second image, inside the aside: reuse the existing `/Make-this-sound-more-human.webp`,
which already sits unused on an article page.

**MOBILE NOTE.** The aside must stack **below** the main body on phones, not above it. If it stacks
first, the reader meets a story about somebody else's company before recognising their own loop. This is
the one stacking order on the page that changes the argument.

**BUILD NOTE.** Reframe of the existing section 6, "Why choose AI Inner Circle" (`app/page.js:424-444`).
Same P1 shell, new strings, plus a bordered aside which is P4. The unsourced "every week I see founders
stuck in one of two places" premise retires here and is replaced with the reader's own experience.

**SOURCE.** Part 1 section C, all four beats, compressed. The former-client story keeps the client
unnamed exactly as Rev wrote it.

---

---

## SECTION 4: WHY THE USUAL FIXES FAIL

**JOB.** Kill the four nearest alternatives before offering anything, and show that all four fail for one
reason.

**BELIEF MOVED.** B3 to B4, so everything I already tried was always going to break, for one reason.

**HEADLINE.**
- **Primary:** They all break in the same place.
- **Alt 1:** You have tried the usual fixes.
- **Alt 2:** Every one of them hands the job back to you.

**BODY COPY.**

> **Eyebrow:** You have tried the usual fixes
>
> **Generic chat AI.** You type the same long prompt every time. Then you rewrite what comes back. Every
> session starts from zero.
>
> **Prompt libraries.** A better prompt buys you a better paragraph. The next session still starts from
> zero, and now you have a folder of prompts to manage on top of everything else.
>
> **Courses.** You finish with notes and a login. The work still is not built. So it sits on your drive
> next to the last three.
>
> **Hiring, a VA, or an agency.** Expensive and slow. Now you manage a person instead of doing the work,
> and your business context moves into their head rather than out of yours. When they leave, it leaves.
>
> Look at what those four have in common. Every one of them puts the job of remembering your business
> back on you. On your discipline. On every single task.
>
> That is not a character flaw. It is what happens when the system does not require it.

**CTA.** None.

**IMAGE.** None, and that is deliberate. The 2x2 grid is the visual event, and it lands as a hard rhythm
snap against the slow prose of Section 3. Adding art here softens the snap.

**MOBILE NOTE.** The 2x2 collapses to four stacked blocks. Order matters: generic chat AI first, since it
is the one the reader is doing today.

**BUILD NOTE.** Rearrangement. The grid exists at `app/consultants/page.js:363-388`, hardcoded, no array.
Copy and rewrite the strings. **The named vendors come out and do not come back.** The
domain-burning claim comes out with them, since nothing sources it.

**SOURCE.** Part 1 section D, lifted almost unchanged. This is the section that travels best from Part 1
to the page.

---

---

## SECTION 5: "I ALREADY DO THIS"

**JOB.** Answer the objection that kills this sale with the buyer who can most afford it. There is
currently zero copy addressing it anywhere on the site.

**BELIEF MOVED.** B4 to B5, including the good setup I built myself.

**HEADLINE.**
- **Primary:** You already built something like this yourself.
- **Alt 1:** "I already do this."
- **Alt 2:** Your project folder is good. Here is what it still misses.

**BODY COPY.**

> **Eyebrow:** The honest objection
>
> If you are good at AI, this is the first thing you thought.
>
> You have a project folder with your buyer in it. Maybe your offers, some voice samples, a few case
> studies. It works. You built it yourself and you are right to be a little proud of it.
>
> Here is what it still does not do, and none of it is a knock on how you built it.
>
> **It only covers the jobs you thought of.** You wrote prompts for eight things. The work costing you
> the most is the work you have not noticed yet. Nobody writes a prompt for a problem they cannot see.
>
> **It loads your context when you remember.** Your setup is good and it is also optional. On a busy
> week, optional means off.
>
> **It stops when the window closes.** Ask yourself what file your best AI session last month actually
> produced. If the answer is a paragraph you pasted somewhere, that session is gone.
>
> **There is nobody to hand off to.** You are the router. You carry the map of which prompt does what,
> and that map lives in your head, which is the same problem you were trying to solve.
>
> None of that is about quality. Your output is fine. The gap is coverage, enforcement, persistence, and
> handoff.

**CTA.** None.

**IMAGE.** No new art. Use the two-panel contrast pattern instead, which is cheaper and more concrete
than an illustration here.

> **Left panel, hairline border, labelled "What you built":** a short list of file names in mono type,
> ending in an ellipsis. Caption underneath: "Loaded when you remember."
>
> **Right panel, green border, labelled "What this is":** the same list with a green `REQUIRED READING`
> stamp across the top. Caption underneath: "Loaded before anything starts."

**MOBILE NOTE.** Four bold-lead blocks stack cleanly. The two panels stack left first, which is the
correct reading order.

**BUILD NOTE.** New section on this page, but not a new pattern. P8 for the prose, then P5 for the two
panels, which already exists at `app/consultants/page.js:414-440`. Counts as a rearrangement.

**SOURCE.** Part 1 section E, near verbatim.

---

---

## SECTION 6: THE THREE SHIFTS

> **Eyebrow:** What changes
>
> **H2:** Three things change once your AI knows your business.
>
> **[ RED ] Generic Output → [ GREEN ] AI Knows Your Business**
>
> You explain your business at the top of every session. Who you serve, what you charge, how you like to
> sound. Then you rewrite what comes back, because it still reads like it was written for anybody.
>
> Your Business Brain gets built once. After that, every Assistant reads it before it starts a job. The
> draft arrives sounding like you because the system knew who you were before it wrote a word.
>
> **[ RED ] Slower Work → [ GREEN ] Tasks Completed**
>
> Most AI gives you a starting point and hands the rest back. So you finish it, format it, and file it
> somewhere you will not find again.
>
> Here the job ends with something written down. Every task carries a test, set before the work starts,
> that says what finished looks like. You check progress by opening a folder.
>
> **[ RED ] Endless Fixes → [ GREEN ] Ready To Use**
>
> Here is where most AI falls down. It gets you to 60% and the last 40% eats your afternoon.
>
> Maestro reads every draft against your voice before it reaches you. Anything that could have been
> written for anyone goes back for a rewrite. What lands on your desk is ready for your review, and your
> job shrinks to approve or change this.

**IMAGE.** Frame B2 rebuilt as the shift table. Three rows, red state on the left in muted grey, green
state on the right in the accent. This is the single most carousel-native asset in the whole case. It
survives a square crop, it reads at thumbnail size, and it carries the entire argument with six words a
side.

**MOBILE.** Rows stack. Each pair stays together as a unit so the contrast never splits across a scroll.

**BUILD.** Rearrangement. The existing Three Pillars block is a three-column grid with the same shape.
Swap the data and add the red-state column.

**SOURCE.** Rev's problem-to-result model.

---

---

## SECTION 7: HOW IT RUNS

> **Eyebrow:** How it runs
>
> **H2:** Nine moves. That is the whole system.
>
> **AI Knows Your Business**
> - **Build Center.** Put the folder on your machine and open it in Claude.
> - **Brief Maestro.** Twenty minutes of questions about what you sell and who buys it.
> - **Load References.** Drop in your real material so the team works from what you already have.
>
> **Tasks Completed**
> - **Onboard Team.** Your first department walks in.
> - **Launch Department.** Four Assistants, each with one job and a lane.
> - **Assign Work.** Describe the problem in plain language. You never have to name a tool.
>
> **Ready To Use**
> - **Track Work.** A live board shows what is queued, running, and waiting on you.
> - **Review Output.** Drafts arrive already checked against your voice.
> - **Approve Work.** You send it, or you send it back with a note.
>
> That last column is you, and it is a third of the system on purpose. Nothing in this building sends,
> posts, publishes, books, or pays. The team drafts and you decide. Human for trust, AI for scale.

**Why the last paragraph is not optional.** The metaphor of departments and hires suggests work happening
without the owner, and the architecture deliberately does the opposite. Naming the owner's three moves as
a full third of the system is what stops month two from feeling like a bait and switch.

**IMAGE.** Frame B6, The Board. Four columns, cards as plain rules, the Your Move column outlined in
green with two cards sitting in it. Reusable core set.

**MOBILE.** Three columns stack to three labelled groups. Keep the closing paragraph directly under the
third group, never floated to the side.

**BUILD.** New build, but it reuses the existing three-column pattern. Cheap.

**SOURCE.** Rev's missions model.

---

---

## SECTION 8: WHAT YOU ACTUALLY GET

> **Eyebrow:** What arrives
>
> **H2:** A department a month, for six months.
>
> Four new Assistants arrive at the start of every month. All of them at once, so nothing gets drip-fed
> at you inside the month. Twenty four of them by the end.
>
> Month one is The Offer Desk. A Sales Council, a Unique Mechanism Builder, an Offer and Pricing
> Architect, and an Objection Tester. By the end of it you have four documents that do not exist today,
> including what is actually broken in your offer, ranked with the biggest leak first.
>
> Month two is The Sales Floor and it runs outreach. Month three is The Deal Desk, from first reply to
> proposal. Then a Media Team, then Operations, then a final month that audits the whole business using
> everything the other five wrote down.
>
> And you are never stuck waiting for a specialist who has not arrived yet. When a job comes up that
> nobody on your team covers, Maestro builds one that session and the work still goes out. The next
> section is what that looked like on a Wednesday afternoon with forty minutes to spare.

**Why this hands off rather than telling the story here.** The Rolodex story is what resolves the hero's
"pre-built" against "self-staffing," and it earns its own section because it also demonstrates the review
gate. Telling it twice spends it. This section sets it up and the next one pays it off.

**IMAGE.** The org chart again at full width, this time with the six department names live. Width is the
only large gesture the design system has, and this is the section that earns it.

**BUILD.** Copy swap. The `MONTHS` and `ORG_CHART` constants already hold this data.

**SOURCE.** Part 1 sections F and G, plus Rev's landing page email.

---

---

## SECTION 9: THE WEDNESDAY AFTERNOON

**JOB.** Prove the mechanism with a story instead of a claim, and kill the "six months is too long"
objection in the same beat.

**BELIEF MOVED.** B6 gets proved rather than asserted. It also disarms the objection the org chart is
about to create.

**HEADLINE.**
- **Primary:** The team hires for the job you did not plan for.
- **Alt 1:** I never built a hundred agents I will never use.
- **Alt 2:** Nothing waits on next month's department.

**BODY COPY.**

> **Eyebrow:** From my own desk
>
> Wednesday afternoon at 4:06 pm. I needed a complete landing page live before end of business, which
> was less than an hour away.
>
> Problem: I had to leave for a concert with my family by 5 at the latest.
>
> Bigger Problem: I did not have a landing page builder on my team.
>
> So I checked in with Maestro and passed along the task.
>
> I never asked for it. Maestro saw the job, saw the gap, and hired a landing page builder on the spot.
> He passed on the requirements, then got out of the way.
>
> But he did not stop there. Before that page ever reached me, Maestro reviewed it. Voice. Tone. Design.
> If it needed fixes, I never heard about them. The first draft was done and ready for my approval.
>
> When I say Maestro hired a landing page builder, what really happened is that he built a specialist
> for that one job. And that specialist stays. I call it the Rolodex. Next time I need a landing page,
> it is already on call.
>
> I never built a hundred agents I will never use. They do not sit around slowing everything down. They
> get called up when the work needs them, then they go back in the Rolodex.
>
> That is why I call this a self-staffing AI team.
>
> It also answers the thing you were about to ask. You are never stuck waiting for next month's
> department. If a job comes up that nobody on your team covers, Maestro writes the specialist that
> session and the work goes out.

**Small italic line under the story:** I reviewed that page myself, because approval is my job and not
Maestro's. It was 90% good to go. I made a few changes and told him to ship it.

**CTA.** None.

**IMAGE.** Two frames.

- **Frame B7, The Rolodex. PROPOSED ADDITION TO THE REUSABLE CORE SET.** A card index in hairline
  outline. Most cards are blank. Three carry job titles. One card is half pulled out and marked green.
  Embedded text: "CALLED UP WHEN THE WORK NEEDS THEM." Rev's video and carousel material leans on this
  story harder than any other, and it currently has no frame at all. This is the one addition I am
  proposing to the Designer's set of seven.
- **Ink Panel A1.** Already exists as `/ai-super-agent-vs-ai-team.jpg`. Overloaded assistant dropping
  plates beside the calm row of specialists. It currently appears on exactly one article page and
  nowhere in the sales case. Move it here. Do not redraw it.

**MOBILE NOTE.** Rev's own paragraphing is one to three lines and that is the format that makes this
story work on a phone. Do not merge the Problem and Bigger Problem lines into one paragraph. The
escalation is the mechanic.

**BUILD NOTE.** New section on this page, existing pattern. P8 prose plus two images. About thirty
minutes of build.

**SOURCE.** Part 1 section F, move four, plus the 90-second video script in section N.

---

---

## SECTION 10: WHAT IT REFUSES TO DO

**JOB.** Make the architecture believable to someone who has already been burned, by showing the parts
that say no.

**BELIEF MOVED.** B6 to B7, it is real, and I can inspect it before I pay.

**HEADLINE.**
- **Primary:** What it refuses to do.
- **Alt 1:** Let me show you the parts that say no.
- **Alt 2:** A page full of promises is worth very little to you.

**BODY COPY.**

> **Eyebrow:** The refusals
>
> Here is the thing about buying an AI product right now. You have probably already been burned by one.
> So a page full of promises is worth very little to you. Let me show you the parts of this thing that
> refuse.
>
> **It refuses to work without knowing your business.** If the files describing you are missing, Maestro
> stops and runs the interview. The hires stop too. On a weaker model it will not even start the
> interview. It says so and waits for a fresh session.
>
> **It refuses to send anything.** Nothing in the building sends, posts, publishes, books, or pays.
> There is a column on your board called Your Move, and that is where every real-world step waits for
> you. Ask whether something went out and it checks for a receipt. No receipt means not sent, and it
> tells you that.
>
> **It refuses to invent.** From the coordinator's own instruction file: one invented result costs more
> trust than a hundred honest not-yets. Estimates get labeled as estimates.
>
> **It refuses to pad.** The hire that finds prospects will tell you an empty week is an empty week
> rather than hand you names it made up. A padded list burns your time next week.
>
> **It tells you what it cannot do, right in the welcome letter.** The LinkedIn hire cannot browse
> LinkedIn, and it says so, because no AI reliably can. The content hire cannot listen to audio, so you
> bring a transcript. You get the workaround instead of a lie.
>
> None of that is modesty. A tool that claimed it could browse LinkedIn would hand you invented names,
> and you would quit in week three.

**CTA.** None.

**IMAGE.** **Frame B6, The Board.** REUSABLE CORE SET. Four columns, cards as plain rules, the Your Move
column outlined in green with two cards in it. Embedded text: "NOTHING SENDS WITHOUT YOU."

Plus one **Receipt**, System C. A cropped screenshot of `week-01-sales-council/SKILL.md` showing the
`## Before any job` block with "Read the Business Brain first" visible, one thin green rule marking that
line, one caption underneath. That single screenshot converts the most-repeated claim on the page from
assertion into evidence, and it costs nothing to shoot.

**MOBILE NOTE.** Five bold-lead blocks is a lot of stacked height. On phones, cut the fifth block's
second example (the content hire and the transcript) and keep it desktop-only. The LinkedIn example
carries the point alone.

**BUILD NOTE.** New section on this page. P8 header plus a bordered list. `Button` has an unused ghost
variant if Rev later wants a "read a real job description" link here. **PROOF GAP:** the "look at it
before you pay" promise in Section 11 has nothing behind it until one full job description file is
published free with no email gate. That is the cheapest, highest-value asset on Rev's list.

**SOURCE.** Part 1 section J.

---

---

## SECTION 11: YOUR FIRST AFTERNOON

**JOB.** Collapse time to value from six months to today.

**BELIEF MOVED.** B7 to B8, I get something real on day one.

**HEADLINE.**
- **Primary:** You feel it work on day one.
- **Alt 1:** One real deliverable, done, on day one.
- **Alt 2:** The first afternoon.

**BODY COPY.**

> **Eyebrow:** Your first afternoon
>
> Setup and your first real job happen in the same sitting.
>
> By the time you close the laptop there is one finished deliverable in your folder with your approval on
> it. A file with a name and a date, which is what Ready To Use means around here.
>
> That is the rhythm from there. The team drafts, Maestro checks it, you approve.

**CTA.** None.

**IMAGE.** **Ink Panel A4, First Afternoon.** Support, not core set. One clock reading early afternoon,
one finished page on the desk, the specialists arriving through a door behind. Embedded text: "DAY ONE."

**MOBILE NOTE.** The shortest section on the page. Keep it short. Four short paragraphs and one image is
the whole thing.

**BUILD NOTE.** Copy swap. P8, already written at `app/consultants/page.js:403-413`. Ten minutes.

**SOURCE.** Part 1 section H. **No total install time is claimed here.** The site's unsourced 2 to 3 hour
figure does not appear. The twenty-minute interview does, because it is sourced.

---

---

## SECTION 12: WHO BUILT IT, AND WHAT I CANNOT PROVE

**JOB.** Establish the operator, then say out loud that none of his numbers are member results, before
the reader works it out on their own.

**BELIEF MOVED.** B10 (the person behind it has built real revenue systems) and B11 (he is straight with
me about what he cannot prove). B11 is load-bearing and counterintuitive. Saying it first is what makes
everything else on the page believable.

**HEADLINE.**
- **Primary:** I built this for myself before I packaged it.
- **Alt 1:** Who built it, and what I cannot prove.
- **Alt 2:** I'm not teaching theory. I'm building with these tools right now.

**BODY COPY.**

> **Eyebrow:** About
>
> A couple of years ago I was running two large launches at the same time and using AI as a junior
> assistant. That is when I hit a wall with AI. It was fast. It was kind of useful. But everything it
> wrote sounded like everyone else on the internet using AI.
>
> Worse, I was the bottleneck. Every task started with me explaining the business, the offer, and the
> writing style from scratch. Over and over again.
>
> So I stopped fighting it and taught the AI my business instead. Who I serve and how I make calls. The
> way I write. I put it all in one place the AI reads on its own.
>
> Now it answers like a partner who has been with me for years. It is the system I run my own work on
> every day, and the Wednesday afternoon story up the page is that system running with a concert to get
> to.
>
> I have built revenue systems for founder-led brands for 25 years. What matters here is the shape of
> that work, because it is the same shape as this product. REVIVX was paying to generate leads and then
> losing them, so I built a lifecycle system with one rule: no lead left behind. Twelve paths, each one
> built to catch a specific way a lead goes cold. That is a department with declared lanes and handoffs,
> built for humans, five years before anyone could build one out of AI hires.
>
> **[ FOUR SELECTED WINS, verbatim from the shipped four-item array at `app/consultants/page.js:189-193` ]**
>
> - 144% more booked calls. CPL below goal, 30% conversion across the Cardone Ventures portfolio.
> - $6.57M total. Converted 40%+ of prospects to buyers for the new SquadUp Summit event.
> - Sold out in 48 hours. First launch sold out, driven by email and social for HRE Beauty.
> - $1M+ in sales. Built the control campaign for Grant Cardone's 10X Business Coach.
>
> **[ CLIENTS, compact single line, not the full-width strip ]**
>
> Clients and campaigns include Grant Cardone, 10X Health, Cardone Ventures, SquadUp Summit, Copy Chief,
> Email Copy Academy, CardoMax, and REVIVX.
>
> **[ TWO TESTIMONIALS ]**
>
> "Although I could have hired almost anyone, I was proud to call Rev my personal copywriter inside Copy
> Chief."
> **Kevin Rogers**, Founder, Copy Chief
>
> "Reduced CPL below goal. Booked calls rose 144% with 30% conversion rates. Rev's work set a new
> standard for how we approach campaign structure, messaging, and analytics across multiple brands."
> **Joe Bradley**, Director, Marketing Partnerships, Cardone Ventures
>
> **[ THE HONESTY PARAGRAPH. This does not get softened and it does not get moved. ]**
>
> Now the straight part. Every number above came from work I did for clients. None of them are results
> from someone using this membership.
>
> The founding cohort is new. Nobody has finished the full program yet. There is no member case study to
> show you, and dressing up a client number to look like a member number is exactly the move that would
> make everything else here worth ignoring.
>
> What you can do instead is look at the thing before you pay for it. It is files. Plain markdown. The
> required reading list at the top of each hire, the test it has to pass before it calls anything done,
> and the jobs it refuses to take are all readable.
>
> That is a weaker promise than a member testimonial. It is also one you can check yourself, which a
> testimonial never is.

**CTA.** None.

**IMAGE.** The existing Rev portrait, `/Rev-Vaughn-800.jpg`, already used at `app/page.js:569` in
`aspect-[4/5]` with `object-cover` so the crop survives. No new art needed. The four wins and two quotes
are the visual density here.

**MOBILE NOTE.** The clients line must be prose, not the 22-name `whitespace-nowrap` flex-wrap block. On
a phone that block becomes a tall column of centered grey names. Eight names in a sentence does the same
association work in a fifth of the height. All 22 stay on `/case-studies`, `/consultants`, and
`/coaches`.

**BUILD NOTE.** Rearrangement, and it is four blocks merging into one. Clients strip from
`app/page.js:330-339`, wins from `:446-463`, testimonials from `:534-552`, about from `:565-591`. All
inside one file, so nothing breaks. **Two required fixes while that JSX moves:** the wins renderer joins
`result` and `detail` with `&mdash;` at `app/page.js:458`, and the About paragraph uses one at `:586`.
Rebuild both joins. Do not re-paste.

**SOURCE.** Part 1 section K, both halves.

---

---

## SECTION 13: WHAT IT WILL NOT DO, AND WHAT IT COSTS

**JOB.** Disqualify honestly, immediately before the price, so the price reads as a fair trade.

**BELIEF MOVED.** B11 to B12, I know what it will not do and what it really costs.

**HEADLINE.**
- **Primary:** Read this part before you decide.
- **Alt 1:** What it will not do, and what it really costs.
- **Alt 2:** The system works when you work it.

**BODY COPY.**

> **Eyebrow:** Straight talk
>
> This is where most people either commit or walk.
>
> **You still have to show up.** This reduces your work. It does not remove you. You still record the
> audio, run the weekly ten-minute harvest, press send, and make the calls. If what you want is
> done-for-you, that is my consulting lane and this is not it.
>
> **It runs on Claude, and that is a real dependency.** You need a Claude plan on top of the membership,
> starting at $20 a month. It runs in the Claude desktop app on Mac or Windows, because the workspace it
> uses does not exist in a browser. Heavy daily use hits the limits of the $20 plan.
>
> **A couple of departments have small extra costs.** The outreach month wants a paid LinkedIn plan and
> a few dollars of pay-as-you-go data. No CRM. No cold email tool. No ad spend.
>
> **The compounding takes time.** Month one is same-day useful. The part where the whole building reads
> itself does not pay off until you are several months in.
>
> **You are early.** This is a founding cohort, and I would rather say that than pretend there is a
> crowd in here.

**OPTIONAL BLOCK, needs Rev's ruling. See the flag below.**

> **The It Works Guarantee.** No money-back, and here is why. These are the systems I run every day.
> They work when you work them. So here is the deal. Install each department. Run the assignments. Show
> up to the monthly workshop. If your department is not up and running and doing real work for you, I
> keep working with you, in the community and the Friday Q&A, until it is.

**FLAG FOR REV.** The blueprint contradicts itself on this. Section 6 says the guarantee is now available
for root since root leans consultants. Section 12 says no. Section 12's reasoning was the program-balance
rule, which Rev withdrew, so I have included the guarantee and marked it optional rather than dropping
it. Two conditions if it ships: use the real wording from `app/consultants/page.js:691-707` including
"no money-back," which never gets softened, and understand that **it has never been shown to be honored,
so it is a stated position and not evidence.** It must not sit inside the proof section.

**CTA.** None.

**IMAGE.** One **Receipt**, System C. Cropped screenshot of `week-05-linkedin-signal-scout/SKILL.md`
showing the "you can't browse LinkedIn, nobody's AI can, reliably" block. A competitor who oversells
cannot publish this image, which is exactly why it belongs here.

**MOBILE NOTE.** Five stacked blocks, all short. This section reads fine stacked and needs no change.

**BUILD NOTE.** Rearrangement. P5 two-panel exists at `app/consultants/page.js:708-726`, and the "straight
talk on costs" panel there is close to this copy already. **Drop the vendor name that appears in the
shipped version.**

**SOURCE.** Part 1 section L.

---

---

## SECTION 14: THE OFFER

**JOB.** Make the ask, name the price, and give the "no" one honest place to land.

**BELIEF MOVED.** B12 to B14, waiting costs more than moving.

**HEADLINE.**
- **Primary:** $199 a month, founding price. It rises to $249 soon.
- **Alt 1:** Join AI Inner Circle.
- **Alt 2:** Lock in the founding price.

**BODY COPY.**

> **Eyebrow:** Join the Inner Circle
>
> **$199 a month, founding price. It rises to $249 soon.**
>
> What comes with it:
>
> - A new department of four AI hires every month
> - Maestro, your chief of staff, checking the work before you see it
> - Your Command Center, set up with you
> - One to two live workshops a month
> - Friday Q&A with Rev
> - Daily access to the community
>
> Cancel anytime. Everything you built stays in your folder, on your machine, in files you can open in
> any text editor.
>
> **[ Join AI Inner Circle ]** → `/consultants`
>
> **Text weight, directly under the button:** Not ready to join? The AI Brain Workshop is $49 and it is
> the same idea at one tenth the size. You build the file that tells AI who you are, and you keep it
> whether you ever join or not. → `/ai-brain`
>
> **Text weight, one line, smaller:** Coaching or courses rather than consulting? There is a track for
> that. → `/coaches`

**CTA.** Primary button "Join AI Inner Circle" → `/consultants`. This is the **second** join ask on the
page. Two text-weight secondary links underneath, in the order shown.

**IMAGE.** None. One price, one button, nothing competing.

**MOBILE NOTE.** One heavy filled button per screen, maximum. The two text links sit below it with real
padding, since the shipped inline links at `app/page.js:305-307` have none and fall under the 44 pixel
touch target guidance.

**BUILD NOTE.** Reframe of the shipped pricing block at `app/page.js:554-563`, and it gets simpler rather
than bigger. `PricingCards()` currently renders two cards. **The $999 1:1 tier comes off root** until it
has a page, since it currently points a $999 ask at a 43-line contact form. **The `$995 once` line comes
off** until the three conflicting pay-in-full prices are reconciled. What is left is one price, one
button, and two text links, which is less JSX than exists today.

**RIDER, already on Rev's list.** `/ai-brain`'s checkout URL is flagged as a placeholder in its own
source comment. A demoted offer that cannot take payment converts its smaller traffic into nothing. Fix
the checkout alongside this, or the exit line is decoration.

**SOURCE.** Part 1 section M.

---

---

## SECTION 15: THE CLOSE

**JOB.** One last ask, short, with no new information.

**BELIEF MOVED.** B14 held, not moved. A close that introduces an argument reopens the decision.

**HEADLINE.**
- **Primary:** Your business is going to stay in your head until you write it down.
- **Alt 1:** Every week it stays in your head, everything keeps waiting on you.
- **Alt 2:** Nothing in there writes itself down.

**BODY COPY.**

> **Eyebrow:** Join the Inner Circle
>
> Your offer, your buyer, and the way you sound are all sitting in one place right now, and that place
> is your head. Nothing gets written down by itself.
>
> Twenty minutes of questions starts it. The founding price is $199 a month and it rises to $249 soon.
>
> **[ Join AI Inner Circle ]** → `/consultants`

**CTA.** Primary button "Join AI Inner Circle" → `/consultants`. Third and final join ask. No secondary
links in this section.

**IMAGE.** **Frame B1, The Org Chart**, small, centered above the button. REUSABLE CORE SET. It is also
the end card for every video, so the page and the video end on the same picture.

**MOBILE NOTE.** Centered, almost nothing on screen, one button. `PricingCards()` currently renders twice
on this page, which gives a phone four full-height pricing cards. That stops here.

**BUILD NOTE.** Copy swap. The shell exists at `app/page.js:593-602`. Replace the second `PricingCards()`
call with one button.

**SOURCE.** Part 1 section M, the ask.

---

---

# BEFORE AND AFTER

Nothing is deleted. Every job the page sheds lands on a named route that already exists.

| # | Current section (`app/page.js`) | Disposition | Where it goes |
|---|---|---|---|
| 1 | HERO (291-327) | **Reframed.** H1 promoted from the subhead, badge gets copy and mobile visibility, one CTA | Stays at position 1 |
| 2 | CLIENTS STRIP (330-339) | **Moves and compacts.** 22 nowrap names become one prose sentence of eight | Into Section 11. Full 22-name strip already lives on `/case-studies`, `/consultants`, `/coaches` |
| 3 | AI ASSESSMENT BLOCK (341-366) | **Moves off the page.** Survives as the hero text link and the sitewide announcement bar | `/assessment` |
| 4 | AI SECOND OPINION (368-395) | **Moves off the page.** No link survives on root | `/ai-second-opinion`, 574 lines and already sells it. Plus an entry point on the assessment results page |
| 5 | AI BRAIN WORKSHOP (397-422) | **Moves off the page.** One named text line survives as the single paid exit | `/ai-brain` and `/workshops` |
| 6 | WHY CHOOSE AIIC (424-444) | **Reframed and expanded into Sections 3 and 4.** The unsourced "two places" premise retires | Becomes the loop and the misdiagnosis, written from the reader's own week |
| 7 | SELECTED WINS, six (446-463) | **Moves and cuts to four.** Uses the four-item array both program pages already run | Into Section 11. All six stay on `/case-studies` |
| 8 | THREE PILLARS (465-482) | **Moves off the page.** All three are unsupported, and Pillar 01 is contradicted by the architecture's own LinkedIn limits | `/consultants`, where the department charters make the same claims and are true |
| 9 | CURRICULUM + ORG CHART (484-532) | **Stays and gets promoted.** Earns the page's only full-width section. Org chart rebuilt from `<pre>` to a reflowing grid | Section 10 |
| 10 | TESTIMONIALS, six (534-552) | **Merges and cuts to two.** Kevin Rogers and Joe Bradley short | Into Section 11. All six stay on `/case-studies` |
| 11 | PRICING / FIRST CTA (554-563) | **Moves down and simplifies.** $999 tier and the $995 once line both come off root | Section 13. $999 nearest home is `/mentor`, once it has a page |
| 12 | ABOUT (565-591) | **Merges.** Becomes the origin story at the top of the credibility section | Into Section 11 |
| 13 | CLOSING CTA (593-602) | **Stays last, reframed.** Second `PricingCards()` call replaced with one button | Section 14 |

**Net.** Five destinations become three. Nine in-body controls become six. Thirteen sections selling five
products become fourteen sections selling one.

---

# THE CTA STRATEGY

**The primary ask.** "Join AI Inner Circle" → `/consultants`. One label, one destination, every time.
Root currently uses four distinct labels across two membership destinations, and that is why nothing on
the page reads as the main ask.

**It appears three times.**

| # | Section | Weight | Why there |
|---|---|---|---|
| 1 | Hero | Filled primary button | The reader who already knows Rev does not have to scroll |
| 2 | Section 13, The Offer | Filled primary button | The first ask that follows the full argument. Ninety lines of case precede it |
| 3 | Section 14, The Close | Filled primary button | Last chance, no new information |

**Secondary exits. Three, all at text weight, none of them a button.**

1. **The 5-Minute AI Assessment** → `/assessment`. Hero only. It is the "I am not ready to read this
   whole page" exit and it already runs sitewide in the announcement bar.
2. **The AI Brain Workshop, $49** → `/ai-brain`. **The single paid exit on the page**, per the M3 ruling.
   It sits directly below the second join ask, at text weight, and opens "Not ready to join?" It is named
   with its price and its deliverable, because a vague demotion wastes the asset. It is the honest
   on-ramp because it is literally the same mechanism at one tenth the size.
3. **The coaches track** → `/coaches`. One line, smallest text on the page, in Section 13. Root leans
   consultants and does not pretend coaches does not exist. This is not a door and it is not a fork.

**What is NOT on the page.** No AI Second Opinion CTA. No $999 tier. No pay-in-full price. No enrollment
date anywhere, because the price lever replaces it: $199 now, rising to $249. No two-door router, no
"pick your program" section, no hub.

**Button hierarchy, which is a build item and not a copy item.** All eight of the current filled buttons
render at one identical size with no `size` prop (`app/components/Button.js:22-23`). On a phone they
arrive one at a time and there is no way to tell the main ask from a side offer. Add a `size` prop and a
genuinely lighter secondary treatment before this ships, or the reduction from nine controls to six buys
less than it should.

**Write the demotion as a test, not a doctrine.** If Rev fixes the checkouts and the $300 diagnostic
starts converting, the counter-argument comes back with real numbers and this gets re-tested.

---

# THE REUSABLE IMAGE CORE SET

Eight frames. These are the ones Rev cuts into carousels, slides, and video cards, so they are specified
to travel rather than to fill a section.

**Rules every core frame obeys.** Survives a square crop, a 4:5 crop, and a 16:9 crop. Carries no more
than seven words of embedded text. Stays legible at video-thumbnail size. Works in black and white at 320
pixels wide. Anything with a paragraph in it is out.

| # | Name | System | What is in the frame | Words on it | Page section | Reuse |
|---|---|---|---|---|---|---|
| **B1** | The Org Chart | Blueprint | YOU, one line down to MAESTRO, one line down to a row of six department boxes. Hairlines on paper, Maestro's box green. Square crop keeps YOU, MAESTRO, and three departments | "YOU · MAESTRO · YOUR DEPARTMENTS" | 1, 10, 14 | Carousel cover and video end card |
| **B2** | One Box vs Many Boxes | Blueprint | Left, one large box with eleven labels crammed in, three overflowing. Right, six clean boxes under one coordinator. Same total ink both sides | "FIFTY SKILLS" / "SIX SPECIALISTS" | 7 | Best standalone LinkedIn image on the list |
| **B3** | The Setup Paragraph, On Repeat | Blueprint | The same grey paragraph stamped five times down the frame, each with a small green X, plus a tally counter | "EVERY. SINGLE. TIME." | 3 | The hook slide |
| **B4** | The Gate | Blueprint | A door glyph labelled `brain/` with three file names beside it, department row behind. One green arrow through, one bouncing off with a small "no" | "READS YOU FIRST" | 6 | Mechanism slide |
| **B5** | The Folder Tree | Blueprint | The literal `Command-Center/` listing in mono with hairline indent guides, `brain/` marked green | "ON YOUR MACHINE" | 6 | The "it's real" slide |
| **B6** | The Board | Blueprint | Four columns, cards as plain rules, Your Move column outlined green with two cards in it | "NOTHING SENDS WITHOUT YOU" | 8 | Mechanism slide |
| **B7** | The Rolodex | Blueprint | **PROPOSED ADDITION.** A card index in hairline outline. Most cards blank, three carry job titles, one half pulled out and marked green | "CALLED UP WHEN THE WORK NEEDS THEM" | 7 | The Wednesday story carries Rev's best video, and it has no frame today |
| **A1** | Super Agent vs AI Team | Ink Panel | **Already exists** as `/ai-super-agent-vs-ai-team.jpg`. Overloaded assistant dropping plates beside the calm row of specialists | none | 7 | Video thumbnail. Do not redraw it |

**Support frames. Not core set, page use only.**

- **A2, The Only Working Part.** Ink panel. Founder at a desk, six ropes to six unlit rooms. Section 2.
- **A3.** Already exists as `/Make-this-sound-more-human.webp`. Reuse inside the Section 3 aside.
- **A4, First Afternoon.** Ink panel. One clock, one finished page, specialists arriving. "DAY ONE."
  Section 9.

**Receipts, System C. Real screenshots, free to shoot, ranked by argument carried.**

1. `week-01-sales-council/SKILL.md`, the `## Before any job` block with "Read the Business Brain first"
   visible. Section 8. Highest value image on the whole list.
2. `week-05-linkedin-signal-scout/SKILL.md`, the "nobody's AI can, reliably" block. Section 12.
3. `roster.md` open in an editor with the `[EMPTY]` markers and arrival months. Section 10.
4. A Finder window of `Command-Center/`. Optional second image in Section 6 if B5 needs corroboration.

**Screenshot house rules.** Real content only. Monospace. Light background to match paper. One thin green
rectangle marking the line that matters. One caption line underneath. No browser chrome, no drop shadows,
no fake dashboards.

**One live defect to fix in the same pass.** `/ai-priority-map-preview-v2.png` is used on five pages and
the screenshot itself reads "revvaughn.com/map," the old domain. Reshoot it.

---

# ABOVE THE FOLD

Exactly what a 375 pixel phone shows in the first screen, word for word, using the recommended Hero
Option 1. Nothing below this point is visible without a scroll.

```
For experts, consultants, and founder-led brands

A self-staffing AI team
that runs without you
as the bottleneck.

Your AI forgets your business every time you
close the window. So you re-explain it. On
every task, forever.

[ Join AI Inner Circle ]

Not sure where to start? Take the 5-Minute
AI Assessment →

▭ Claude Partner Network
Rev is a member of Anthropic's Claude Partner Network.
```

**What that screen is doing.** The eyebrow qualifies in seven words. The H1 wraps to three lines at
`text-display` and carries the product positioning that the live page hides one line lower. The lead
names the loop, so the reader who has that problem knows this page is about them before they scroll. One
filled button. One text link. And the Claude Partner Network badge, which is the only credential on this
site Rev did not author himself, is visible on a phone for the first time and has a sentence attached to
it for the first time.

**What is NOT above the fold, on purpose.** No price. No org chart on mobile. No client names. No second
button. The price arrives in the small line under the CTA row on desktop and just below the fold on a
phone, which is where it belongs on a $199 monthly ask that has not been argued yet.

**The one layout change this requires.** The hero's right column is `hidden md:flex` today
(`app/page.js:310`), so the badge does not exist on mobile. Move the badge and its new caption out of
that column and place them under the CTA row. Roughly six lines of JSX and it is the cheapest credibility
gain available on the page.

---

# WHAT THIS SPEC DOES NOT DECIDE

Flagged so nobody rediscovers them.

1. **The It Works Guarantee on root.** Blueprint sections 6 and 12 disagree. Included as optional in
   Section 12. Rev rules.
2. **Published article metrics as citable proof.** Blueprint open question 1. Default is excluded, and no
   copy above uses them.
3. **The Membership Hub.** One-line future action item. No section, no copy, no URL decision.
4. **Three pay-in-full prices that do not agree**, and the $999 1:1 tier with no page. Both off root
   until reconciled.
5. **`/ai-brain` checkout is a placeholder** in its own source comment. The $49 exit needs it working.
6. **`/ai-leverage` has three broken cards**, including a "Join AI Inner Circle" button pointed at a dead
   route. Noted, not scoped here.

---

# PROOF GAPS THIS PAGE IS WRITTEN AROUND

Nothing above was invented to fill any of these. The first three would each change what the page is
allowed to claim, and all three can ship this week.

1. **One full job description file, published free with no email gate.** Section 8 and Section 11 both
   promise the buyer can inspect the architecture before paying, and there is currently nothing for them
   to open.
2. **A screen recording under sixty seconds of a hire refusing to work because a brain file is missing.**
   Enforcement is the most-repeated claim on the page and it is currently assertion. The Section 8
   screenshot helps. A clip would settle it.
3. **A screen recording of Maestro picking a hire from a plain-language symptom.** The sophisticated
   buyer says this is the one thing they cannot rebuild themselves, and it is invisible today.
4. **A member count for the founding cohort.** Section 12 names the earliness as a feature, which is the
   best available move and weaker than a number.
5. **A stopwatch-honest timed install.** No total-install-time claim appears anywhere on this page,
   because none is sourced. The twenty-minute interview is sourced and is used.
6. **One real produced artifact, redacted.** An offer autopsy or an objection playbook would strengthen
   Section 10 considerably.
7. **One named member with a before and after.** The only one that cannot ship this week, which is why it
   is last.

---

# PART 3: THE DESTINATION MAP


Internal planning document. Nothing here is written to the repo. Every destination is a route that
exists today. Line numbers verified against source on 2026-08-01.

Scope note from Rev: keep it short. This is a decision record, not a treatise.

**What stays on root and is not in this map:** the curriculum (`MONTHS`, `app/page.js:485-532`) and the
org chart (`ORG_CHART`, `app/page.js:214-240`, rendered 522-531). Blueprint section 10 reversed the
earlier decision to move them. They are the most concrete material the page has and the homepage leans
consultants, so they are legal.

---

## 1. THE RELOCATION LEDGER

Nine items leave the homepage. Seven land on an existing route. Two are price removals with no
destination, pending Rev's reconciliation.

Verified section boundaries in `app/page.js` (608 lines): clients strip 330-339, assessment 342-366,
second opinion 369-395, AI brain 398-422, why-choose 425-444, wins 447-463, pillars 466-482,
curriculum 485-532, testimonials 535-552, pricing 555-563, about 566-591, closing 594-602.
`PricingCards()` is defined at 242-282 and rendered twice, at 562 and 601.

| # | What leaves | Source lines | Where it goes | Why there | What changes | What still links to it from root |
|---|---|---|---|---|---|---|
| 1 | AI Second Opinion, full section, $300 | 369-395 | `/ai-second-opinion` (574 lines) plus the results block of `/consultants/assessment` | The 574-line page already sells it in full. The results block is where a red-zone reader is actually ready to buy a diagnostic | Delete 27 lines from root. Add a third card to the results CTA. See section 3 | Nothing. It drops off root entirely |
| 2 | AI Brain Workshop, full section, $49 | 398-422 | `/ai-brain` (487 lines), carded on `/workshops` (98) and listed on `/resources` | Already the sales page. It already carries a membership bridge back at 465-481, so the loop closes | Delete 25 lines from root | One named text line in the close: "Not ready to join? The AI Brain Workshop is $49." Text weight, below the second join ask |
| 3 | Free assessment, full section | 342-366 | `/consultants/assessment` (952 lines) | It is the live quiz and root leans consultants, so linking past the `/assessment` chooser is now fine | Delete 25 lines including the `/ai-priority-map-preview-v2.png` screenshot | Three surviving touchpoints: the sitewide `AnnouncementBar`, the hero secondary link (`app/page.js:305-307`), and one mention near the close |
| 4 | Selected Wins, six items | 447-463 | `/case-studies` (576 lines) | All six already live there with full narratives | Four survive inside the credibility section, not six. Front Porch and "26 countries" drop, matching the judgment already made on both program pages | The four that stay. Plus one link to `/case-studies` |
| 5 | Testimonials, six | 535-552 | `/case-studies` (576 lines) | All six already live there | Two survive inside the credibility section: Kevin Rogers and Joe Bradley (short variant) | The two that stay |
| 6 | Clients strip, 22 names, full-width at position 2 | 330-339 | Compact line inside the credibility section. Full strip already runs on `/case-studies`, `/consultants`, `/coaches` | Association proof does not deserve position 2 and a full band | Loses its own section. **Build note:** this is the only block on root not wrapped in `<Section>`. It is a raw `<section>` with `bg-paper-grey border-y border-rule py-12`. Folding it in changes its background band and vertical rhythm, and it will look different | The compact line |
| 7 | Three Pillars | 466-482 | `/consultants` (768 lines), where the department charters make the same claims and are true | All three are unsupported. Pillar 01's "no cold email, no ad spend" is contradicted by the architecture's own LinkedIn Scout limits | Deleted from root. Not re-copied anywhere. The claims survive only where a charter backs them | Nothing |
| 8 | The $999 1:1 tier | 267-277, rendered at 562 and 601 | Off root. Nearest existing home is `/mentor` (166 lines) | It has no page, no schema, and a generic 43-line contact form behind it | Comes off root. **Blocked on Rev:** `/mentor` publishes no price and routes to a Google Doc, so it cannot receive the tier until Rev sets a price and a real CTA. If he will not, pull the card and leave one light line to `/contact` | Nothing, or one text link |
| 9 | The "$995 once" price | 251, rendered twice | No destination. Removal, not relocation | It appears on no program page and in neither Product schema. A different pay-in-full figure, $796, sits archived in a comment at `app/coaches/page.jsx:209-210` | The sub-line becomes "per month, rises to $249" | Nothing |

**Two ledger-wide rules.**

- Every membership CTA points at `/consultants`. The live hero already does this at `app/page.js:302`.
  No hub, no fork, no "pick your program" section.
- Nothing is deleted from the site. Every item above either survives in compressed form on root or is
  already published in fuller form on the destination route.

---

## 2. ACTION ITEMS FOR LATER

Known, owned by Rev, none blocking the messaging work.

1. Build the Membership Hub. Root points at `/consultants` until it exists.
2. Fix the `/ai-second-opinion` and `/ai-brain` checkout URLs.
3. Fix the three broken `/ai-leverage` cards. Its `/ai` card may be a cross-domain mistake, since
   `revvaughn.com/ai` is the live AI Priority Map and `aiinnercircle.com/ai` has never existed.
4. Deduplicate REVIVX in the `CLIENTS` array in `app/case-studies/page.js`, lines 33 and 43.
5. Connect `/case-studies` to the product. **Verified: ten CTAs, not nine**, all pointing at
   `/quick-win` (lines 85, 144, 222, 270, 320, 367, 416, 462, 518, 567), and the string "Inner Circle"
   appears nowhere in the file.

---

## 3. THE TWO PAID OFFERS. M3 as executed.

| | AI Brain Workshop | AI Second Opinion |
|---|---|---|
| Price | $49 | $300 |
| Lives at | `/ai-brain` (487 lines), carded on `/workshops`, listed on `/resources` | `/ai-second-opinion` (574 lines) |
| Role | **The single named exit on the homepage** | Not on the homepage at all |
| Where the visitor meets it | One text line in the close, below the second join ask, opening with "Not ready to join?" | In the results block of `/consultants/assessment`, on the red-zone branch |
| Why there | It is literally a smaller version of the same mechanism. The buyer builds the file that tells AI who they are and keeps it whether they ever join or not | A reader who just watched their own map turn red is ready for a paid diagnostic. A cold homepage reader is not |
| What the homepage says | "Not ready to join? Start smaller. The AI Brain Workshop is $49 and it is the same idea at one tenth the size." Text weight, never button weight | Nothing |

**Where exactly the $300 goes.** `app/consultants/assessment/page.js:879-926`. The results CTA already
branches on `hasRed` (line 883) and already renders a two-card grid: "Join AI Inner Circle" to
`/consultants` and "Full AI Implementation Roadmap" to `/ai-audit` ($1000). The Second Opinion slots in
as the cheaper diagnostic rung between them.

**Build note the implementation session must not miss.** That grid is `grid md:grid-cols-2 gap-6
max-w-2xl` (line 901). Adding a third card is a layout change, not a copy change. Either widen to
three columns or make the Second Opinion a text line under the two cards. Decide before writing copy.

**Re-evaluation trigger, so this does not get rediscovered in September.** Demote now. Re-open the
placement question within two weeks of a working checkout shipping on either offer. Today neither can
take money: `/ai-second-opinion`'s `CHECKOUT_URL` points at `/contact` (lines 20-21) while microcopy
under two of its three buttons promises a Stripe checkout that does not exist (lines 466, 566), and
`/ai-brain`'s checkout URL is flagged as a placeholder in its own source comment (lines 7-8). The
revenue M3-COUNTER was protecting is currently uncollectable, which is why the demotion is free.

---

## 4. THE ROUTE HEALTH LEDGER

Recommendation only. Rev approves any deletion.

| Route | Condition | Evidence | Recommendation |
|---|---|---|---|
| `/call-intel` | **Dead.** No `page.js`. The directory holds one 1-byte `placeholder.svg`. Zero references anywhere in `app/` | `ls app/call-intel` | Delete the directory. It was a GitHub-web-UI empty-folder placeholder that never got a page |
| `/ai-inner-circle` | **Dead but maintained.** 439 lines behind a permanent 301 since 2026-07-11. Content-edited on 2026-07-27, sixteen days after it became unreachable | `next.config.js:21-23`, `app/sitemap.js:6` | **Leave it in place.** Blueprint closed this: the hub is a do-later item and may reuse the file. Add a header comment plus a line in the repo `CLAUDE.md` now, since that file is where this repo documents invisible traps |
| `/map` | **Redundant.** A real 301 sits in front of a 28-line client-side redirect component that can never execute | `next.config.js:20`, `app/map/page.js:9-14` | Delete `app/map/page.js`. Keep the 301, which is what actually serves the URL |
| `/ai` | **Never existed.** Linked from `/ai-leverage:31`, covered by no redirect, so it 404s | `app/` has no `ai/` directory | Likely a cross-domain mistake. `revvaughn.com/ai` is the live AI Priority Map. Repoint to `/assessment` or to the revvaughn URL. Rev decides which |
| `/ai-leverage` | **Stale and orphaned.** Three of four cards wrong. Zero inbound internal links outside `sitemap.js`, yet listed there at priority 0.6 | `app/ai-leverage/page.js:31, 59, 74`; `sitemap.js:27` | Fix the three cards, or drop it from the sitemap until fixed. Crawlers are being actively pointed at a page that is three-quarters broken |
| `/mentor` | **Orphan.** Zero inbound internal links outside `sitemap.js`. No price, routes to a Google Doc | grep verified | Give it the $999 tier and a real CTA, or leave it and accept it is a document-delivery page |
| `/growth-as-a-service` | **Orphan.** Zero inbound internal links outside `sitemap.js`. Different buyer entirely, 7 to 9 figures | grep verified | Leave it. It serves a consulting audience, not this one. Note it exists so nobody re-invents it |
| `/quick-win` | **Stale and load-bearing.** No price, no booking, routes to a Google Doc. It is the guarantee backstop for the $300 offer and is linked five times from `/ai-second-opinion`, plus ten times from `/case-studies` and once from every article | `app/ai-second-opinion/page.js:349, 377, 420, 453, 515` | Highest-traffic destination on the site with no price behind it. Fix it or stop pointing fifteen CTAs at it |
| `/ai-second-opinion` | **Not in the sitemap.** A 574-line paid sales page missing from `STATIC_ROUTES` entirely | `app/sitemap.js:16-34` | Add it. This is a one-line fix and it is currently invisible to crawlers |
| `/workshops` | **Overlapping.** 98 lines holding one card for the offer `/ai-brain` sells in 487 | | Leave it. It is in the header nav and costs nothing. Revisit when a second workshop exists |
| `/assessment` | **Bypassed.** The two-track chooser exists to route buyers, and the homepage links past it to `/consultants/assessment` | `app/page.js:305-307`, `AnnouncementBar.js:32` | Leave the bypass. Root leans consultants, so it is no longer a breach. `/assessment` still earns its keep as the entry point from `/resources` and eight article CTAs |
| `/ai-audit` | **Stale metadata.** `openGraph.url` still points at `revvaughn.com/ai-audit` | `app/ai-audit/page.js:16` | One-line fix |
| `/contact` | **Overloaded.** It is the destination for the $999 tier, the $300 "checkout", and the dead hub's Community card | `app/contact/page.js`, 43 lines | Resolves itself once items 8 and 1 above land |

---

## 5. THE `/coaches` OPEN QUESTION. Findings only, no proposal.

**Question:** `app/coaches/page.jsx` is the only `.jsx` file in the repo. Every other route is
`page.js`. Is the extension load-bearing?

**Answer: no. Nothing in the file or the toolchain depends on it.** Evidence:

| Check | Finding |
|---|---|
| File contents | Structurally identical to `app/consultants/page.js`. Same six imports (`next/image`, `next/link`, and the four local components), same `export const metadata`, same bare `const` data arrays, same single default-exported server component |
| JSX-specific syntax | None that `.js` does not already carry. It uses fragments (`<>` at line 267) and `.map()` render loops. `app/consultants/page.js` and `app/page.js` both do the same things inside `.js` |
| `'use client'`, hooks, TypeScript | None. Zero `useState`, zero `useEffect`, no directive. It is a plain server component |
| Next.js resolution | Default `pageExtensions` is `['tsx', 'ts', 'jsx', 'js']`. Both extensions resolve identically and `next.config.js` does not override it |
| Tailwind | `content` glob is `'./app/**/*.{js,ts,jsx,tsx}'` (`tailwind.config.js:4`). Both covered |
| Anything referencing the extension | Nothing. The only `.jsx` string anywhere outside the file is a filename inside `planning docs/AI-Inner-Circle-Master-Brief.md:118`, unrelated |

**Where it came from, which is probably the real answer to "why."** It was not authored in this repo.
The file arrived as `app/expert/page.jsx` in commit `7d6312b`, 2026-07-10, titled "Add files via
upload," the GitHub web UI wording. The directory itself was created one commit earlier by `b57eb6d`,
"Create placeholder.svg," which is the standard web-UI trick for making an empty folder. That empty
1-byte `app/coaches/placeholder.svg` is still there, and its twin is the only thing inside
`app/call-intel/`. Commit `a65202c` on the same day renamed `app/expert/` to `app/coaches/` with a
pure path move, `0` changed lines, so the extension came along untouched. A later commit is literally
titled "Update page.jsx."

**Read:** the page was written somewhere outside the repo, in a tool that emits `.jsx` and ships a
`placeholder.svg`, then uploaded through the browser. Every other page was created locally as `.js`.

**Consequence if Rev ever does rename it:** cosmetic. One `git mv`, no import to update, no config to
touch, no redirect needed since the route is the directory name and not the filename. It is stated
here only so the decision is informed. **Not proposed.**

---

## 6. LINK GRAPH AND SEO NOTES

Things a later implementation session must not forget.

1. **Root carries the most authority on the site.** Priority 1.0 in `sitemap.js:16`, the only 1.0. It
   is the target of the wordmark link in `Header.js:15`, so every page links to it. It also absorbed
   `/ai-inner-circle`'s equity when the 301 shipped. Content that moves off root lands somewhere with
   fewer inbound links.
2. **Do not touch the `/ai-inner-circle` 301.** It was not written to hide a duplicate page. It was
   written because two URLs shared the identical `<title>` string and competed for one query. The
   orphan file still declares that title and declares no canonical of its own, so removing the
   redirect returns the collision unmitigated on day one.
3. **Root's H1 currently contains no brand term.** Promoting the subhead's idea into the H1 makes root
   stronger for the brand query, not weaker. This change is SEO-positive.
4. **`sitemap.js` `lastModified` dates are hand-maintained on purpose.** The header comment at lines
   9-14 explains why a build-time `new Date()` was removed. Bump the date for every route touched, by
   hand. Nothing does it automatically.
5. **`app/llms.txt/route.js:28` still carries the old positioning:** "Home: Revenue growth systems for
   B2B service providers." That is the exact line this project is replacing. Update it in the same
   pass or the AI-readable version of the site contradicts the human one.
6. **Root has no structured data of any kind.** Its own children ship both `PRODUCT_SCHEMA` and
   `FAQ_SCHEMA` (`app/consultants/page.js`, `app/coaches/page.jsx:215, 250`). If an FAQ lands on root,
   it ships with the schema or it does not ship. FAQ copy without markup gives Google a page with FAQ
   content and no structured data while its children have both.
7. **`AnnouncementBar` is a shared component.** It renders inside `Header` on every page. Changing its
   link at `AnnouncementBar.js:32` touches the whole site. Treat it as a deliberate decision, never a
   drive-by edit.
8. **The `&mdash;` traps.** `app/page.js:458` joins `result` and `detail` with an em-dash entity, and
   lines 347, 350, and 586 use one in headings and body copy. Any reused block has to have the join
   rebuilt, not re-pasted. The em-dash ban applies to renderer-inserted characters too.
9. **A pre-push hook can block the push.** `.githooks/pre-push` runs a seat-name check against the
   agents repo and refuses a push where the site contradicts the product. If the curriculum or org
   chart copy changes, expect it to fire. Bypass is `git push --no-verify`, and bypassing is usually
   the wrong answer.
10. **Never run `npm run build` while the dev server is up.** Repo `CLAUDE.md` documents that it
    clobbers `.next/` and the running server starts throwing module errors.

---

## 7. THE EXECUTION ORDER

Six steps. Each one ends at a state where the site is complete and shippable, so Rev can stop after
any of them.

| Step | What happens | Safe stopping point |
|---|---|---|
| **1. Hygiene** | Fix the three `/ai-leverage` cards, dedupe REVIVX in `app/case-studies/page.js`, add `/ai-second-opinion` to the sitemap, fix the `/ai-audit` openGraph domain. Six one-line edits, no copy involved | Nothing on the site reads differently. Four defects are gone. This step is independent of every other one and can ship today |
| **2. The hero** | Promote the subhead's idea into the H1 using Rev's own words. The CTA at `app/page.js:302` already points at `/consultants` and does not change | Highest-leverage single edit available. The page below it is unchanged and still coherent |
| **3. Reorder** | Move the membership argument above the three offer sections. Render `PricingCards()` once instead of twice. No new copy | The visitor now meets the membership case before three competing asks. Zero words written. Fully shippable |
| **4. Relocate** | Execute ledger rows 1, 2, 3, 6, 7, 8, 9. Delete the three offer sections and the Three Pillars, compress the clients strip, drop the $995 line and the $999 card. Add the two text links back in the close | Root now does one job. Every deleted block still lives in fuller form on its destination route. **Do not start step 5 until every destination link resolves.** This is where "nothing gets deleted" quietly becomes untrue if the pass is half done |
| **5. Rewrite** | Write the new sections from Part 1: the loop, the misdiagnosis, why the usual fixes fail, "I already do this," the mechanism, the refusals, the limits, the proof-honesty paragraph. The curriculum and org chart stay where they are | The full argument is live. This is the step that costs days rather than hours, and it is the reason the project exists |
| **6. Downstream** | Bump `sitemap.js` `lastModified` for every route touched, update `app/llms.txt/route.js:28`, add the header comment to the orphaned `app/ai-inner-circle/page.js` plus the note in the repo `CLAUDE.md` | Machine-readable site matches the human-readable one |

**Ordering logic.** Steps 1 through 3 are free of copywriting and deliver most of the structural gain,
so they front-load value. Step 4 has to precede step 5, because writing new sections into a page that
still carries three competing offers means writing around them and rewriting later. Step 6 trails
because it records what the earlier steps did.

**The one true dependency:** step 4 row 1 depends on the `/consultants/assessment` results-block card
decision in section 3. If that is unresolved, the $300 offer comes off root anyway and lands on its
own page, which is already sufficient. Nothing in this map blocks on it.


---

# APPENDIX: THE REUSABLE MESSAGE LIBRARY

Finished and ready to use as they are. Built on the Concept Model, so the vocabulary matches the page:
**AI Knows Your Business · Tasks Completed · Ready To Use.**

### The goal line

> I help you build Self-Staffing AI Teams that know your business, complete the work, and create
> on-brand output you can actually use.

### The red-to-green table. The single strongest standalone social asset.

| Today | With a self-staffing AI team |
|---|---|
| Generic Output | **AI Knows Your Business** |
| Slower Work | **Tasks Completed** |
| Endless Fixes | **Ready To Use** |

Works as one image, one carousel slide, one slide in a deck, and one beat in a video. Survives a square
crop, reads at thumbnail size, and carries the whole argument in six words a side.

### 10 hooks, each under 12 words

1. Your AI forgets your business every time you close the window.
2. Generic output is not a prompting problem. It is a memory problem.
3. They built an AI repair tool for their other AI tool.
4. I never built a hundred agents I will never use.
5. You do not need a bigger toolbox.
6. Most AI gets you to 60%. The last 40% eats your afternoon.
7. Your prompt library only covers the jobs you thought of.
8. It hired a landing page builder while I was leaving for a concert.
9. Every session starts from zero. That is the whole problem.
10. A team that staffs itself when the work needs it.

### The enemy statement, three lengths

**One line.** Your business lives in your head, so your AI starts from zero every time and you pay the
re-explaining tax forever.

**One paragraph.** You open a window and type the same background paragraph you typed last Tuesday. You
paste in the real task. You rewrite what comes back. Then you close the window and every word of that
setup is gone. So you decide you are bad at prompting, and everyone selling to you agrees, because
"learn better prompts" is a product. It is aimed at the wrong layer. The AI does not have your offer,
your buyer, or your voice, and a prompt is just you handing those over again on every task, forever.
Nobody keeps that up.

**One minute of speech.** Think about the last thing AI gave you that you shipped without rewriting. Now
think about what you had to type first. Who you are. Who buys from you. How you like to sound. You have
typed some version of that paragraph hundreds of times. And here is the thing nobody says out loud. You
will type it again tomorrow, because the window closes and the machine keeps none of it. So you go
looking for a fix. A better prompt. A prompt library. A course. Whatever shipped last week. All of it
aimed downstream. The real break is upstream and it hides. Your offer, your buyer, and your voice live
in your head, which is exactly where everything else in your business lives. That is what people mean
when they say the founder is the bottleneck. You work plenty fast. The holdup is that nothing can start
until you explain it, and a prompt does not fix that.

### The mechanism, three lengths

**One line.** Your business gets written down once, and every AI hire has to read it before it can start
work.

**Three lines.** Twenty minutes of questions puts your offer, your buyer, and your voice into files on
your own machine. Every Assistant reads what it needs from those files before it touches a job, and the
system refuses to run without them. What each one produces lands back in your folder as a file you own.

**Six-slide carousel, built on the three shifts.**

1. **Cover.** "Your AI starts from zero every time." Frame B3, the setup paragraph stamped five times.
2. **Shift one.** Generic Output → AI Knows Your Business. The Brain gets built once, and every
   Assistant reads it before it starts.
3. **Shift two.** Slower Work → Tasks Completed. Every job ends with a file and a test for what finished
   means.
4. **Shift three.** Endless Fixes → Ready To Use. Drafts arrive already checked against your voice.
5. **The nine moves.** The missions grid. Build, brief, load. Onboard, launch, assign. Track, review,
   approve.
6. **The ask.** A self-staffing AI team that runs without you as the bottleneck. $199/mo founding price,
   rising to $249.

### 5 proof beats, sized for social

Every one is client work. None is a member outcome, and the label stays on.

1. Client work: $6.57M in under 120 days from a neglected list of 5,259 people. 172 emails, 58,053 words.
2. Client work: booked calls up 144%, CAC down 37%, on a lifecycle system with one rule. No lead left
   behind.
3. Client work: over $1M in new revenue in under 9 months, and the campaign became the control.
4. Client work: a first product run sold out in under 48 hours, driven by email.
5. Rev's own desk: Maestro built a landing page specialist on the spot at 4:06pm and had a reviewed draft
   ready before 5.

### The offer statement, two lengths

**Short.** A self-staffing AI team that knows your business, completes the work, and creates on-brand
output you can actually use. Four new Assistants a month for six months. $199 a month at the founding
price, rising to $249.

**Long.** AI Inner Circle installs a Command Center on your computer. Maestro, your AI chief of staff,
interviews you once and writes your offer, your buyer, and your voice into files. From then on every
Assistant reads what it needs before starting a job, and the system will not run without it. You hire a
new department of four every month for six months. Maestro routes the work, checks every draft against
your voice, and sends the weak ones back before you see them. Nothing sends, posts, or publishes without
you. Everything produced lands in your folder as plain files you keep whether you stay or not. $199 a
month at the founding price, rising to $249. Cancel anytime.

### 90-second video script

> Wednesday afternoon, 4:06pm. I needed a landing page live before end of business, and I had to leave
> for a concert with my family by five.
>
> I did not have a landing page builder on my team.
>
> So I told Maestro, my AI chief of staff, about the job. I never asked him to solve the staffing
> problem. He saw the gap and built a specialist for it on the spot.
>
> Then he did something I did not ask for either. Before that page ever reached me, he reviewed it
> against my voice and my design rules. What landed on my desk was already 90% right. I made a few
> changes and told him to ship it.
>
> Here is the part most people miss. I did not build a hundred agents I will never use. That specialist
> got built when the work needed it, and now it sits in my Rolodex for next time.
>
> Most founders are still doing this the old way. One overloaded assistant with a pile of tools bolted
> onto it. More rework than results.
>
> You do not need a bigger toolbox. You need a team that staffs itself.
>
> That is what I built, and it is what I run my own business on every day.
>
> AI Inner Circle is open at the founding price. It rises to $249 soon.
>
> Link is below.
