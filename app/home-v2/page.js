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
  ['Generic chat AI', 'You type the same long prompt every time. Then you rewrite what comes back. Every session starts from zero.'],
  ['Prompt libraries', 'A better prompt buys you a better paragraph. The next session still starts from zero, and now you have a folder of prompts to manage on top of everything else.'],
  ['Courses', 'You finish with notes and a login. The work still is not built. So it sits on your drive next to the last three.'],
  ['Hiring, a VA, or an agency', 'Expensive and slow. Now you manage a person instead of doing the work, and your business context moves into their head rather than out of yours. When they leave, it leaves.'],
]

const GAPS = [
  ['It only covers the jobs you thought of.', 'You wrote prompts for eight things. The work costing you the most is the work you have not noticed yet. Nobody writes a prompt for a problem they cannot see.'],
  ['It loads your context when you remember.', 'Your setup is good and it is also optional. On a busy week, optional means off.'],
  ['It stops when the window closes.', 'Ask yourself what file your best AI session last month actually produced. If the answer is a paragraph you pasted somewhere, that session is gone.'],
  ['There is nobody to hand off to.', 'You are the router. You carry the map of which prompt does what, and that map lives in your head, which is the same problem you were trying to solve.'],
]

// Rev's concept model. Red state, green state, and the body that earns the turn.
const SHIFTS = [
  {
    red: 'Generic Output',
    green: 'AI Knows Your Business',
    before:
      'You explain your business at the top of every session. Who you serve, what you charge, how you like to sound. Then you rewrite what comes back, because it still reads like it was written for anybody.',
    after:
      'Your Business Brain gets built once. After that, every Assistant reads it before it starts a job. The draft arrives sounding like you because the system knew who you were before it wrote a word.',
  },
  {
    red: 'Slower Work',
    green: 'Tasks Completed',
    before:
      'Most AI gives you a starting point and hands the rest back. So you finish it, format it, and file it somewhere you will not find again.',
    after:
      'Here the job ends with something written down. Every task carries a test, set before the work starts, that says what finished looks like. You check progress by opening a folder.',
  },
  {
    red: 'Endless Fixes',
    green: 'Ready To Use',
    before:
      'Here is where most AI falls down. It gets you to 60% and the last 40% eats your afternoon.',
    after:
      'Maestro reads every draft against your voice before it reaches you. Anything that could have been written for anyone goes back for a rewrite. What lands on your desk is ready for your review, and your job shrinks to approve or change this.',
  },
]

const MISSIONS = [
  {
    green: 'AI Knows Your Business',
    moves: [
      ['Build Center', 'Put the folder on your machine and open it in Claude.'],
      ['Brief Maestro', 'Twenty minutes of questions about what you sell and who buys it.'],
      ['Load References', 'Drop in your real material so the team works from what you already have.'],
    ],
  },
  {
    green: 'Tasks Completed',
    moves: [
      ['Onboard Team', 'Your first department walks in.'],
      ['Launch Department', 'Four Assistants, each with one job and a lane.'],
      ['Assign Work', 'Describe the problem in plain language. You never have to name a tool.'],
    ],
  },
  {
    green: 'Ready To Use',
    moves: [
      ['Track Work', 'A live board shows what is queued, running, and waiting on you.'],
      ['Review Output', 'Drafts arrive already checked against your voice.'],
      ['Approve Work', 'You send it, or you send it back with a note.'],
    ],
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
  ['It refuses to work without knowing your business.', 'If the files describing you are missing, Maestro stops and runs the interview. The hires stop too. On a weaker model it will not even start the interview. It says so and waits for a fresh session.'],
  ['It refuses to send anything.', 'Nothing in the building sends, posts, publishes, books, or pays. There is a column on your board called Your Move, and that is where every real-world step waits for you. Ask whether something went out and it checks for a receipt. No receipt means not sent, and it tells you that.'],
  ['It refuses to invent.', 'From the coordinator’s own instruction file: one invented result costs more trust than a hundred honest not-yets. Estimates get labeled as estimates.'],
  ['It refuses to pad.', 'The hire that finds prospects will tell you an empty week is an empty week rather than hand you names it made up. A padded list burns your time next week.'],
  ['It tells you what it cannot do, right in the welcome letter.', 'The LinkedIn hire cannot browse LinkedIn, and it says so, because no AI reliably can. The content hire cannot listen to audio, so you bring a transcript. You get the workaround instead of a lie.'],
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
  'Friday Q&A with Rev',
  'Daily access to the community',
]

const LIMITS = [
  ['You still have to show up.', 'This reduces your work. It does not remove you. You still record the audio, run the weekly ten-minute harvest, press send, and make the calls. If what you want is done-for-you, that is my consulting lane and this is not it.'],
  ['It runs on Claude, and that is a real dependency.', 'You need a Claude plan on top of the membership, starting at $20 a month. It runs in the Claude desktop app on Mac or Windows, because the workspace it uses does not exist in a browser. Heavy daily use hits the limits of the $20 plan.'],
  ['A couple of departments have small extra costs.', 'The outreach month wants a paid LinkedIn plan and a few dollars of pay-as-you-go data. No CRM. No cold email tool. No ad spend.'],
  ['The compounding takes time.', 'Month one is same-day useful. The part where the whole building reads itself does not pay off until you are several months in.'],
  ['You are early.', 'This is a founding cohort, and I would rather say that than pretend there is a crowd in here.'],
]

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
            <div className="md:col-span-2 space-y-5 text-body text-ink leading-relaxed max-w-prose">
              <p>
                Here is the part everybody recognizes. You open a new window and type some version of the
                setup you typed last Tuesday. Who you are and who buys from you. What you charge, and how
                you want it to sound so it does not come out like a robot.
              </p>
              <p>
                Then you paste in the thing you actually needed help with, read what comes back, and
                rewrite most of it.
              </p>
              <p>
                Then you close the window and every word of that setup is gone. Next Tuesday you do it
                again.
              </p>
              <p>
                So you decide you are bad at prompting. Everybody selling to you agrees, because “learn
                better prompts” is a product. Better prompts, then longer ones. A prompt library, a
                course, or whatever tool shipped last week.
              </p>
              <p>
                I have been diagnosing campaigns for 25 years, and this is the same mistake I see
                everywhere else. Everyone looks downstream. More leads. More ads. New funnels. The real
                problem is usually upstream, and it hides.
              </p>
              <p>
                Upstream here is simple. The AI does not have your offer, your buyer, or your voice. You
                have all three, and they live in your head, which is exactly where everything else in
                your business lives.
              </p>
              <p>
                So a prompt is really you remembering to hand over your business. On every task. Forever.
              </p>
              <p className="font-medium text-ink">Nobody keeps that up.</p>
            </div>

            <aside className="border-l-2 border-accent pl-6 space-y-4 text-body text-ink-muted md:mt-2">
              <p className="text-h3 font-semibold text-ink">Where this ends up.</p>
              <p>
                I got an internal email from a former client recently, a company north of $100M. Their
                main AI solution is two Claude skills. One generates branded decks, and the other
                humanizes the output afterward because the decks sound like AI slop.
              </p>
              <p className="text-ink font-medium">
                They built an AI repair tool for their other AI tool.
              </p>
              <p>
                The humanizer exists because the prompts are weak. The prompts are weak because nobody
                fixed the thinking underneath them. So instead of fixing the thinking, they standardized
                the cleanup.
              </p>
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
          <div className="max-w-prose space-y-4 text-body text-ink border-t border-rule pt-8">
            <p>
              Look at what those four have in common. Every one of them puts the job of remembering your
              business back on you. On your discipline. On every single task.
            </p>
            <p className="text-ink-muted">
              That is not a character flaw. It is what happens when the system does not require it.
            </p>
          </div>
        </Section>

        {/* 5. I ALREADY DO THIS */}
        <Section bg="paper">
          <p className="eyebrow mb-6">The honest objection</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            You already built something like this yourself.
          </h2>
          <div className="max-w-prose space-y-5 text-body text-ink mb-10">
            <p>If you are good at AI, this is the first thing you thought.</p>
            <p>
              You have a project folder with your buyer in it. Maybe your offers, some voice samples, a
              few case studies. It works. You built it yourself and you are right to be a little proud
              of it.
            </p>
            <p className="text-ink-muted">
              Here is what it still does not do, and none of it is a knock on how you built it.
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

        {/* 6. THE THREE SHIFTS — replaces the old Three Pillars */}
        <Section bg="greyDark">
          <p className="eyebrow mb-6">What changes</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-12 max-w-prose">
            Three things change once your AI knows your business.
          </h2>
          <div className="space-y-10">
            {SHIFTS.map((s) => (
              <div key={s.green} className="border-t border-ink pt-8">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="text-small text-ink-faint line-through">{s.red}</span>
                  <span className="text-ink-faint" aria-hidden="true">&rarr;</span>
                  <span className="text-h3 font-semibold text-accent">{s.green}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <p className="text-body text-ink-muted">{s.before}</p>
                  <p className="text-body text-ink">{s.after}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 7. HOW IT RUNS — the nine missions */}
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
              That last column is you, and it is a third of the system on purpose. Nothing in this
              building sends, posts, publishes, books, or pays. The team drafts and you decide. Human for
              trust, AI for scale.
            </p>
          </div>
        </Section>

        {/* 8. WHAT YOU ACTUALLY GET — the one full-width section */}
        <Section bg="grey" width="wide">
          <div className="max-w-content mx-auto">
            <p className="eyebrow mb-6">What arrives</p>
            <h2 className="text-h1 font-semibold tracking-tight text-ink mb-8 max-w-prose">
              A department a month, for six months.
            </h2>
            <div className="max-w-prose space-y-5 text-body text-ink mb-14">
              <p>
                Four new Assistants arrive at the start of every month. All of them at once, so nothing
                gets drip-fed at you inside the month. Twenty four of them by the end.
              </p>
              <p>
                Month one is The Offer Desk. By the end of it you have four documents that do not exist
                today, including what is actually broken in your offer, ranked with the biggest leak
                first.
              </p>
              <p className="text-ink-muted">
                And you are never stuck waiting for a specialist who has not arrived yet. When a job
                comes up that nobody on your team covers, Maestro builds one that session and the work
                still goes out. The next section is what that looked like on a Wednesday afternoon with
                forty minutes to spare.
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
              Wednesday afternoon at 4:06 pm. I needed a complete landing page live before end of
              business, which was less than an hour away.
            </p>
            <p><span className="font-medium">Problem:</span> I had to leave for a concert with my family by 5 at the latest.</p>
            <p><span className="font-medium">Bigger Problem:</span> I did not have a landing page builder on my team.</p>
            <p>So I checked in with Maestro and passed along the task.</p>
            <p>
              I never asked for it. Maestro saw the job, saw the gap, and hired a landing page builder on
              the spot. He passed on the requirements, then got out of the way.
            </p>
            <p>
              But he did not stop there. Before that page ever reached me, Maestro reviewed it. Voice.
              Tone. Design. If it needed fixes, I never heard about them. The first draft was done and
              ready for my approval.
            </p>
            <p>
              When I say Maestro hired a landing page builder, what really happened is that he built a
              specialist for that one job. And that specialist stays. I call it the Rolodex. Next time I
              need a landing page, it is already on call.
            </p>
            <p className="font-medium text-ink">
              I never built a hundred agents I will never use.
            </p>
            <p>
              They do not sit around slowing everything down. They get called up when the work needs
              them, then they go back in the Rolodex. That is why I call this a self-staffing AI team.
            </p>
            <p>
              It also answers the thing you were about to ask. You are never stuck waiting for next
              month’s department. If a job comes up that nobody on your team covers, Maestro writes the
              specialist that session and the work goes out.
            </p>
            <p className="text-small text-ink-muted italic border-t border-rule pt-5">
              I reviewed that page myself, because approval is my job and not Maestro’s. It was 90% good
              to go. I made a few changes and told him to ship it.
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
            Here is the thing about buying an AI product right now. You have probably already been burned
            by one. So a page full of promises is worth very little to you. Let me show you the parts of
            this thing that refuse.
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
            None of that is modesty. A tool that claimed it could browse LinkedIn would hand you invented
            names, and you would quit in week three.
          </p>
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

        {/* 12. WHO BUILT IT, AND WHAT I CANNOT PROVE */}
        <Section bg="grey">
          <p className="eyebrow mb-6">About</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            I built this for myself before I packaged it.
          </h2>
          <div className="max-w-prose space-y-5 text-body text-ink mb-12">
            <p>
              A couple of years ago I was running two large launches at the same time and using AI as a
              junior assistant. That is when I hit a wall with AI. It was fast. It was kind of useful.
              But everything it wrote sounded like everyone else on the internet using AI.
            </p>
            <p>
              Worse, I was the bottleneck. Every task started with me explaining the business, the offer,
              and the writing style from scratch. Over and over again.
            </p>
            <p>
              So I stopped fighting it and taught the AI my business instead. Who I serve and how I make
              calls. The way I write. I put it all in one place the AI reads on its own.
            </p>
            <p>
              Now it answers like a partner who has been with me for years. It is the system I run my own
              work on every day, and the Wednesday afternoon story up the page is that system running
              with a concert to get to.
            </p>
            <p>
              I have built revenue systems for founder-led brands for 25 years. What matters here is the
              shape of that work, because it is the same shape as this product. REVIVX was paying to
              generate leads and then losing them, so I built a lifecycle system with one rule: no lead
              left behind. Twelve paths, each one built to catch a specific way a lead goes cold. That is
              a department with declared lanes and handoffs, built for humans, five years before anyone
              could build one out of AI hires.
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

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="border-l-2 border-accent pl-6">
                <p className="text-body text-ink mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <footer className="text-small">
                  <div className="font-semibold text-ink">{t.name}</div>
                  <div className="text-ink-muted">{t.title}</div>
                </footer>
              </blockquote>
            ))}
          </div>

          {/* The honesty paragraph. Does not get softened and does not get moved. */}
          <div className="max-w-prose space-y-5 text-body text-ink border-t border-ink pt-8">
            <p className="font-medium">
              Now the straight part. Every number above came from work I did for clients. None of them
              are results from someone using this membership.
            </p>
            <p>
              The founding cohort is new. Nobody has finished the full program yet. There is no member
              case study to show you, and dressing up a client number to look like a member number is
              exactly the move that would make everything else here worth ignoring.
            </p>
            <p>
              What you can do instead is look at the thing before you pay for it. It is files. Plain
              markdown. The required reading list at the top of each hire, the test it has to pass before
              it calls anything done, and the jobs it refuses to take are all readable.
            </p>
            <p className="text-ink-muted">
              That is a weaker promise than a member testimonial. It is also one you can check yourself,
              which a testimonial never is.
            </p>
          </div>
        </Section>

        {/* 13. WHAT IT WILL NOT DO, AND WHAT IT COSTS */}
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

        {/* 14. THE OFFER */}
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

        {/* 15. THE CLOSE */}
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
