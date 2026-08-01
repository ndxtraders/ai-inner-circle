import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'

// PROTOTYPE. Not the live homepage. Built from
// "planning docs/PRD-homepage-messaging-2026-08-01.md".
// Excluded from the sitemap (STATIC_ROUTES is a manual list) and disallowed in
// robots.js. noindex below is the second layer, because Vercel preview URLs
// do get crawled.
export const metadata = {
  title: 'AI Inner Circle | Home v2 prototype',
  description:
    'Prototype of the AI Inner Circle homepage. Not the live page.',
  robots: { index: false, follow: false },
}

const PAINS = [
  'You reply late. The deal goes cold.',
  'Your best process lives in your head.',
  'You post, and it sounds like everyone else.',
  'Leads come in. Most never hear back.',
  'You know AI should help. You don’t know where to start.',
]

const FIXES = [
  ['Generic chat AI', 'You retype the same setup. Every session starts from zero.'],
  ['Prompt libraries', 'A better prompt, then a folder of prompts to manage.'],
  ['Courses', 'You finish with notes. The work still is not built.'],
  ['Hiring or an agency', 'Slow, expensive, and your context moves into their head.'],
]

const GAPS = [
  ['It only covers the jobs you thought of.', 'The expensive work is the work you have not noticed yet.'],
  ['It loads your context when you remember.', 'Your setup is optional. On a busy week, optional means off.'],
  ['It stops when the window closes.', 'What file did your best session last month actually produce?'],
  ['There is nobody to hand off to.', 'You are the router, and that map lives in your head.'],
]

// The assessment's "Breaking Point" red, from app/consultants/assessment/page.js:191.
// Not in the Tailwind palette, so it is applied inline rather than adding a shared token.
const RED = '#d9534f'

// Rev's concept model. Problem in red, result in green and bold. No boxes.
const SHIFTS = [
  {
    red: 'Generic Output',
    green: 'AI Knows Your Business',
    line: 'Your Business Brain gets built once. Every Assistant reads it before it starts.',
  },
  {
    red: 'Slower Work',
    green: 'Tasks Completed',
    line: 'Every job ends with a file, and a test for what finished means.',
  },
  {
    red: 'Endless Fixes',
    green: 'Ready To Use',
    line: 'Drafts reach you already checked against your voice.',
  },
]

const MISSIONS = [
  {
    green: 'AI Knows Your Business',
    moves: [['Build Center', 'the folder, on your machine'], ['Brief Maestro', 'twenty minutes of questions'], ['Load References', 'your real material, not samples']],
  },
  {
    green: 'Tasks Completed',
    moves: [['Onboard Team', 'your first department walks in'], ['Launch Department', 'four Assistants, one job each'], ['Assign Work', 'describe the problem, name no tools']],
  },
  {
    green: 'Ready To Use',
    moves: [['Track Work', 'a live board, always current'], ['Review Output', 'already checked against your voice'], ['Approve Work', 'send it, or send it back']],
  },
]

// Verbatim from app/page.js. Consultants track, which is the example track.
const DEPARTMENTS = [
  ['1', 'Offer Desk', ['Sales Council', 'Unique Mechanism Builder', 'Offer & Pricing Architect', 'Objection Tester']],
  ['2', 'Sales Floor', ['LinkedIn Signal Scout', 'ICP Match & Prioritizer', 'Surgical DM Writer', 'AI Slop Killer']],
  ['3', 'Deal Desk', ['Reply Classifier', 'Follow-up & Reactivation', 'Discovery Call-Prep', 'Proposal & Quote Generator']],
  ['4', 'Media Team', ['Recording to Content', 'SEO / GEO Optimizer', 'LinkedIn Ghostwriter', 'Content Repurposer']],
  ['5', 'Operations', ['Transcription to SOP', 'Inbox Triage', 'Win Capture & Case Study Engine', 'Team Knowledge Base']],
  ['6', 'Client Success', ['Client Health Monitor', 'Client Results Report', 'Invoice & Payment Chaser', 'GTM Teardown & Rebuild']],
]

const REFUSALS = [
  ['It refuses to work without your business.', 'No Brain, no work. It stops and runs the interview instead.'],
  ['It refuses to send anything.', 'Nothing sends, posts, publishes, or pays. Every one of those is your move.'],
  ['It refuses to invent.', 'One invented result costs more trust than a hundred honest not-yets.'],
  ['It refuses to pad.', 'An empty week gets reported as an empty week.'],
  ['It tells you what it cannot do.', 'The LinkedIn hire cannot browse LinkedIn, and it says so in the welcome letter.'],
]

// The shipped four-item version, matching app/consultants/page.js.
const WINS = [
  ['144% more booked calls', 'CPL below goal, 30% conversion across the Cardone Ventures portfolio.'],
  ['$6.57M total', 'Converted 40%+ of prospects to buyers for the new SquadUp Summit event.'],
  ['Sold out in 48 hours', 'First launch sold out, driven by email and social for HRE Beauty.'],
  ['$1M+ in sales', 'Built the control campaign for Grant Cardone’s 10X Business Coach.'],
]

const TESTIMONIALS = [
  {
    quote:
      'Although I could have hired almost anyone, I was proud to call Rev my personal copywriter inside Copy Chief.',
    name: 'Kevin Rogers',
    title: 'Founder, Copy Chief',
  },
  {
    quote:
      'Reduced CPL below goal. Booked calls rose 144% with 30% conversion rates. Rev’s work set a new standard for how we approach campaign structure, messaging, and analytics across multiple brands.',
    name: 'Joe Bradley',
    title: 'Director, Marketing Partnerships, Cardone Ventures',
  },
]

const INCLUDES = [
  'A new department of four AI hires every month',
  'Maestro, your chief of staff, checking the work before you see it',
  'Your Command Center, set up with you',
  'One to two live workshops a month',
  'A live Friday coaching call with Rev',
  'Daily access to the community',
]

const LIMITS = [
  ['You still have to show up.', 'This cuts your work. It does not remove you. You still press send.'],
  ['It runs on Claude.', 'You need a Claude plan on top of the membership, from $20 a month, plus the desktop app.'],
  ['A couple of months cost a little more.', 'The outreach month wants a paid LinkedIn plan and a few dollars of data.'],
  ['The compounding takes time.', 'Month one is useful the same day. The full payoff takes a few months.'],
  ['You are early.', 'This is a founding cohort. I would rather say so than pretend there is a crowd.'],
]

function VideoSlot({ label }) {
  return (
    <div className="border border-dashed border-rule bg-paper-grey px-6 py-8 text-center my-8">
      <p className="text-small tracking-widest text-ink-faint mb-1">VIDEO</p>
      <p className="text-body text-ink-muted">{label}</p>
    </div>
  )
}

export default function HomeV2() {
  return (
    <>
      <Header />

      {/* Prototype banner. Remove when this becomes the live page. */}
      <div className="bg-ink text-paper text-small text-center py-2 px-6">
        Prototype · Home v2 · not the live homepage
      </div>

      <main>

        {/* 1. HERO */}
        <Section bg="paper" className="pt-16 md:pt-24">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2">
              <p className="eyebrow mb-6">For experts, consultants, and founder-led brands</p>
              <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
                A self-staffing AI team that runs without you as the bottleneck.
              </h1>
              <p className="text-lead text-ink-muted mb-10 max-w-prose">
                Pre-built AI Assistants that know your business, complete the work, and create on-brand
                output you can actually use.
              </p>
              <div className="flex flex-wrap gap-4 items-center mb-6">
                <Button href="/consultants" variant="primary">
                  Join AI Inner Circle
                </Button>
                <Link
                  href="/assessment"
                  className="text-body text-ink-muted hover:text-ink transition-colors"
                >
                  Not sure where to start? Take the 5-Minute AI Assessment &rarr;
                </Link>
              </div>
              <p className="text-small text-ink-faint">
                $199 a month at the founding price. It rises to $249 soon.
              </p>
            </div>

            <div className="flex flex-row md:flex-col items-center gap-6 md:gap-4 md:pt-4">
              <Image
                src="/AI-Inner-Circle-Logo-940.jpg"
                alt="AI Inner Circle"
                width={180}
                height={180}
                className="opacity-90 w-28 md:w-full h-auto"
              />
              <div className="text-center">
                <Image
                  src="/claude-partner-network.png"
                  alt="Claude Partner Network"
                  width={279}
                  height={30}
                  className="h-auto max-w-full mb-2"
                />
                <p className="text-small text-ink-faint leading-snug">
                  Rev is a member of Anthropic’s Claude Partner Network.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 2. IS THIS YOU */}
        <Section bg="grey">
          <p className="eyebrow mb-6">Is this you?</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            You’re the bottleneck. Everything waits on you.
          </h2>
          <ul className="space-y-4 max-w-prose mb-8">
            {PAINS.map((p) => (
              <li key={p} className="text-body text-ink flex gap-4">
                <span className="text-accent mt-2 shrink-0 w-2 h-px bg-accent" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="text-body text-ink-muted">Sound familiar? Keep reading.</p>
        </Section>

        {/* 3. THE LOOP */}
        <Section bg="paper">
          <p className="eyebrow mb-6">The loop</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            Your AI forgets your business every time you close the window.
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <ol className="space-y-3 mb-8">
                {[
                  'You type the same setup. Who you are. Who buys from you.',
                  'You paste in the real task.',
                  'You rewrite most of what comes back.',
                  'You close the window. All of it is gone.',
                  'Next Tuesday you do it again.',
                ].map((step, i) => (
                  <li key={step} className="flex gap-4 text-body text-ink">
                    <span className="text-small text-accent font-medium pt-1 w-5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className="max-w-prose space-y-4 text-body text-ink">
                <p>So you decide you are bad at prompting.</p>
                <p>
                  The real problem sits upstream. Your offer, your buyer, and your voice live in your
                  head. A prompt is you handing all three over again, every single time.
                </p>
                <p className="font-medium">Nobody keeps that up.</p>
              </div>
              <VideoSlot label="20 seconds. The loop repeating, then breaking." />
            </div>

            <aside className="border-l-2 border-accent pl-6 space-y-4 text-body text-ink-muted md:mt-2">
              <p className="text-h3 font-semibold text-ink">Where this ends up.</p>
              <p>
                A former client, north of $100M, now runs two Claude skills. One makes branded decks.
                The other fixes the decks, because they sound like AI slop.
              </p>
              <p className="text-ink font-medium">
                They built an AI repair tool for their other AI tool.
              </p>
              <p>Nobody fixed the thinking. They standardized the cleanup.</p>
            </aside>
          </div>
        </Section>


        {/* 4. WHY THE USUAL FIXES FAIL */}
        <Section bg="grey">
          <p className="eyebrow mb-6">You have tried the usual fixes</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-12 max-w-prose">
            They all break in the same place.
          </h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 mb-10">
            {FIXES.map(([title, body]) => (
              <div key={title}>
                <p className="text-ink font-medium mb-2">{title}</p>
                <p className="text-body text-ink-muted">{body}</p>
              </div>
            ))}
          </div>
          <div className="max-w-prose border-t border-rule pt-8">
            <p className="text-body text-ink">
              All four hand the job of remembering your business back to you. On every task, forever.
              That is not a discipline problem. It is what happens when nothing requires it.
            </p>
          </div>
        </Section>

        {/* 5. I ALREADY DO THIS */}
        <Section bg="grey">
          <p className="eyebrow mb-6">The honest objection</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            You already built something like this yourself.
          </h2>
          <div className="max-w-prose space-y-5 text-body text-ink mb-10">
            <p>If you are good at AI, this is the first thing you thought.</p>
            <p className="text-ink-muted">
              Your project folder works. You built it yourself. Here is what it still does not do.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 mb-10">
            {GAPS.map(([title, body]) => (
              <div key={title} className="border-t border-ink pt-5">
                <p className="text-ink font-medium mb-2">{title}</p>
                <p className="text-body text-ink-muted">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-body text-ink max-w-prose">
            None of that is about quality. Your output is fine. The gap is coverage, enforcement,
            persistence, and handoff.
          </p>
        </Section>

        {/* 6. THE THREE SHIFTS. Rev's red/green model. The table IS the section. */}
        <Section bg="paper">
          <p className="eyebrow mb-6">What changes</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-12 max-w-prose">
            Three things change once your AI knows your business.
          </h2>
          <div className="border-t border-ink">
            {SHIFTS.map((s) => (
              <div key={s.green} className="border-b border-ink py-7">
                <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                  <span className="text-h3" style={{ color: RED }}>{s.red}</span>
                  <span className="text-h3 text-ink-faint" aria-hidden="true">&rarr;</span>
                  <span className="text-h3 font-bold text-accent">{s.green}</span>
                </p>
                <p className="text-body text-ink-muted max-w-prose">{s.line}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 7. HOW IT RUNS. The nine missions. */}
        <Section bg="paper">
          <p className="eyebrow mb-6">How it runs</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-12 max-w-prose">
            Nine moves. That is the whole system.
          </h2>
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {MISSIONS.map((col) => (
              <div key={col.green}>
                <p className="text-h3 font-semibold text-accent mb-6 pb-3 border-b border-ink">
                  {col.green}
                </p>
                <ul className="space-y-5">
                  {col.moves.map(([name, detail]) => (
                    <li key={name}>
                      <p className="text-body font-medium text-ink">{name}</p>
                      <p className="text-body text-ink-muted">{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="max-w-prose border-t border-rule pt-8">
            <p className="text-body text-ink">
              That last column is you, and it is a third of the system on purpose. Nothing here sends,
              posts, publishes, or pays. The team drafts and you decide. Human for trust, AI for scale.
            </p>
            <VideoSlot label="45 seconds. The board, with work moving into Your Move." />
          </div>
        </Section>

        {/* 8. WHAT YOU ACTUALLY GET. The one full-width section. */}
        <Section bg="grey" width="wide">
          <div className="max-w-content mx-auto">
            <p className="eyebrow mb-6">What arrives</p>
            <h2 className="text-h1 font-semibold tracking-tight text-ink mb-8 max-w-prose">
              A department a month, for six months.
            </h2>
            <div className="max-w-prose space-y-5 text-body text-ink mb-14">
              <p>
                Four new Assistants at the start of every month. All at once, nothing drip-fed. Twenty
                four by the end.
              </p>
              <p>
                Month one is The Offer Desk. You finish it holding four documents that do not exist
                today, starting with what is actually broken in your offer.
              </p>
              <p className="text-ink-muted">
                And nothing waits on the calendar. If a job comes up that nobody covers, Maestro builds
                the specialist that session.
              </p>
            </div>
          </div>

          {/* Org chart. Rebuilt from the ASCII <pre> into a reflowing grid. */}
          <div className="border-t border-ink pt-10">
            <div className="text-center mb-10">
              <p className="text-small tracking-widest text-ink-faint mb-2">YOU</p>
              <div className="h-6 w-px bg-rule mx-auto" aria-hidden="true" />
              <p className="text-h3 font-semibold text-accent">MAESTRO</p>
              <p className="text-small text-ink-muted">your Chief of Staff</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEPARTMENTS.map(([n, dept, seats]) => (
                <div key={n} className="border border-rule bg-paper p-5">
                  <p className="text-small text-accent font-medium mb-1">{n}</p>
                  <p className="text-h3 font-semibold text-ink mb-3">{dept}</p>
                  <ul className="space-y-1">
                    {seats.map((s) => (
                      <li key={s} className="text-small text-ink-muted">{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 9. THE WEDNESDAY AFTERNOON */}
        <Section bg="paper">
          <p className="eyebrow mb-6">From my own desk</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            The team hires for the job you did not plan for.
          </h2>
          <div className="max-w-prose space-y-5 text-body text-ink leading-relaxed">
            <p>
              4:06 pm. I needed a landing page live by end of business, and I had to leave for a concert
              at 5.
            </p>
            <p>I did not have a landing page builder on my team.</p>
            <p>
              So I told Maestro about the job. He built one on the spot, briefed it, and reviewed the
              draft against my voice before it ever reached me.
            </p>
            <p>
              That specialist stays. I call it the Rolodex. Next time I need a landing page, it is
              already on call.
            </p>
            <p className="text-h3 font-semibold text-ink">
              I never built a hundred agents I will never use.
            </p>
            <p className="text-ink-muted">
              So you are never stuck waiting for next month. If a job comes up that nobody covers,
              Maestro writes the specialist that session.
            </p>
          </div>
          <div className="max-w-prose">
            <VideoSlot label="90 seconds. The Wednesday afternoon, start to finish." />
            <p className="text-small text-ink-muted italic">
              I reviewed that page myself, because approval is my job. It was 90% good to go.
            </p>
          </div>
        </Section>


        {/* 10. WHAT IT REFUSES TO DO */}
        <Section bg="grey">
          <p className="eyebrow mb-6">The refusals</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            What it refuses to do.
          </h2>
          <p className="text-body text-ink max-w-prose mb-12">
            You have probably been burned by an AI product already. So here are the parts that say no.
          </p>
          <div className="space-y-8 mb-10">
            {REFUSALS.map(([title, body]) => (
              <div key={title} className="border-t border-ink pt-5 max-w-prose">
                <p className="text-ink font-medium mb-2">{title}</p>
                <p className="text-body text-ink-muted">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-body text-ink max-w-prose">
            None of that is modesty. A tool that claimed it could browse LinkedIn would hand you
            invented names, and you would quit in week three.
          </p>
          <div className="max-w-prose">
            <VideoSlot label="30 seconds. A hire stopping because the Brain is missing." />
          </div>
        </Section>

        {/* 11. YOUR FIRST AFTERNOON */}
        <Section bg="paper">
          <p className="eyebrow mb-6">Your first afternoon</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            You feel it work on day one.
          </h2>
          <div className="max-w-prose space-y-5 text-body text-ink">
            <p>Setup and your first real job happen in the same sitting.</p>
            <p>
              By the time you close the laptop there is one finished deliverable in your folder with your
              approval on it. A file with a name and a date, which is what Ready To Use means around
              here.
            </p>
            <p className="text-ink-muted">
              That is the rhythm from there. The team drafts, Maestro checks it, you approve.
            </p>
          </div>
        </Section>

        {/* 12. EVERY FRIDAY */}
        <Section bg="grey">
          <p className="eyebrow mb-6">Every Friday</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            You are not doing this alone.
          </h2>
          <div className="max-w-prose space-y-5 text-body text-ink">
            <p>
              Every Friday there is a live coaching call with me. Bring what you are stuck on and we
              work it out on the call.
            </p>
            <p>
              The community runs the rest of the week, so nothing has to sit in your head until Friday.
            </p>
            <p className="text-ink-muted">
              One to two live workshops a month on top of that.
            </p>
          </div>
        </Section>

        {/* 13. WHO BUILT IT, AND WHAT I CANNOT PROVE */}
        <Section bg="grey">
          <p className="eyebrow mb-6">About</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            I built this for myself before I packaged it.
          </h2>
          <div className="max-w-prose space-y-5 text-body text-ink mb-12">
            <p>
              A couple of years ago I hit a wall with AI. It was fast. Everything it wrote sounded like
              everyone else on the internet using AI.
            </p>
            <p>
              And I was the bottleneck. Every task started with me explaining the business from scratch.
            </p>
            <p>
              So I taught the AI my business instead, and put it somewhere it reads on its own. It is the
              system I run my own work on every day.
            </p>
            <p className="text-ink-muted">
              I have built revenue systems for founder-led brands for 25 years. Same shape as this
              product, built for humans first.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {WINS.map(([result, detail]) => (
              <div key={result} className="border-t border-ink pt-5">
                <p className="text-h3 font-semibold text-ink mb-2">{result}</p>
                <p className="text-small text-ink-muted">{detail}</p>
              </div>
            ))}
          </div>

          <p className="text-small text-ink-faint mb-12">
            Clients and campaigns include Grant Cardone, 10X Health, Cardone Ventures, SquadUp Summit,
            Copy Chief, Email Copy Academy, CardoMax, and REVIVX.
          </p>

          <div className="mb-12 max-w-prose">
            <blockquote className="border-l-2 border-accent pl-6">
              <p className="text-body text-ink mb-4 leading-relaxed">
                &ldquo;{TESTIMONIALS[0].quote}&rdquo;
              </p>
              <footer className="text-small">
                <div className="font-semibold text-ink">{TESTIMONIALS[0].name}</div>
                <div className="text-ink-muted">{TESTIMONIALS[0].title}</div>
              </footer>
            </blockquote>
          </div>

          {/* The honesty paragraph. Does not get softened and does not get moved. */}
          <div className="max-w-prose space-y-5 text-body text-ink border-t border-ink pt-8">
            <p className="font-medium">
              Now the straight part. Every number above came from work I did for clients. None are
              results from someone using this membership.
            </p>
            <p>
              The founding cohort is new. Nobody has finished the program yet, and I am not going to
              dress up a client number to look like a member number.
            </p>
            <p>
              What you can do instead is read the thing before you pay for it. It is plain files. The
              reading list at the top of each hire, the test it has to pass, and the jobs it refuses to
              take.
            </p>
            <p className="text-ink-muted">
              That is a weaker promise than a member result. It is also one you can check yourself.
            </p>
          </div>
        </Section>

        {/* 14. WHAT IT WILL NOT DO, AND WHAT IT COSTS */}
        <Section bg="paper">
          <p className="eyebrow mb-6">Straight talk</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            Read this part before you decide.
          </h2>
          <p className="text-body text-ink-muted max-w-prose mb-10">
            This is where most people either commit or walk.
          </p>
          <div className="space-y-8 max-w-prose">
            {LIMITS.map(([title, body]) => (
              <div key={title} className="border-t border-rule pt-5">
                <p className="text-ink font-medium mb-2">{title}</p>
                <p className="text-body text-ink-muted">{body}</p>
              </div>
            ))}
          </div>
          {/* NOTE FOR REV: the It Works Guarantee is specced as OPTIONAL here.
              It lives on /consultants only, it is explicitly not money-back, and
              it has never been shown to be honored, so it is a stated position
              rather than evidence. Left out of the prototype pending your call. */}
        </Section>

        {/* 15. THE OFFER */}
        <Section bg="grey">
          <p className="eyebrow mb-6">Join the Inner Circle</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10">
            $199 a month, founding price. It rises to $249 soon.
          </h2>
          <ul className="space-y-3 mb-10 max-w-prose">
            {INCLUDES.map((i) => (
              <li key={i} className="text-body text-ink flex gap-4">
                <span className="text-accent mt-2 shrink-0 w-2 h-px bg-accent" aria-hidden="true" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <p className="text-body text-ink-muted max-w-prose mb-10">
            Cancel anytime. Everything you built stays in your folder, on your machine, in files you can
            open in any text editor.
          </p>
          <Button href="/consultants" variant="primary">
            Join AI Inner Circle
          </Button>
          <div className="mt-8 space-y-3 max-w-prose">
            <p className="text-body text-ink-muted">
              Not ready to join? The{' '}
              <Link href="/ai-brain" className="text-ink underline hover:text-accent">
                AI Brain Workshop
              </Link>{' '}
              is $49 and it is the same idea at one tenth the size. You build the file that tells AI who
              you are, and you keep it whether you ever join or not.
            </p>
            <p className="text-small text-ink-faint">
              Coaching or courses rather than consulting?{' '}
              <Link href="/coaches" className="text-ink-muted underline hover:text-accent">
                There is a track for that.
              </Link>
            </p>
          </div>
        </Section>

        {/* 16. THE CLOSE */}
        <Section bg="paper">
          <p className="eyebrow mb-6">Join the Inner Circle</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-8 max-w-prose">
            Your business is going to stay in your head until you write it down.
          </h2>
          <div className="max-w-prose space-y-5 text-body text-ink mb-10">
            <p>
              Your offer, your buyer, and the way you sound are all sitting in one place right now, and
              that place is your head. Nothing gets written down by itself.
            </p>
            <p>
              Twenty minutes of questions starts it. The founding price is $199 a month and it rises to
              $249 soon.
            </p>
          </div>
          <Button href="/consultants" variant="primary">
            Join AI Inner Circle
          </Button>
        </Section>

      </main>
      <Footer />
    </>
  )
}
