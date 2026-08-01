import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import Button from './components/Button'

// The homepage. Built from "planning docs/PRD-homepage-messaging-2026-08-01.md"
// and shipped 2026-08-01, replacing the previous version.
//
// The copy this page replaced is archived at
// "planning docs/home-page-v1-archive.md", and the working file it replaced is
// recoverable with:
//   git show 776ef49:app/page.js
export const metadata = {
  alternates: { canonical: '/' },
  title: 'AI Inner Circle | Rev Vaughn',
  description:
    'Self-staffing AI teams that run without you as the bottleneck. Pre-built AI Assistants that know your business, complete the work, and create on-brand output you can actually use.',
}

// Every join CTA on this page opens the Skool community. /consultants is
// reachable from the header nav, but it is deliberately not the destination
// for the homepage buttons.
const JOIN_URL = 'https://www.skool.com/ai-inner-circle-3875/about'

const PAINS = [
  'You do all the work.',
  'Everything lives in your head.',
  'You make every decision.',
  'You post, and it sounds like everyone else.',
  'You know AI can help, but you don’t know where to start.',
]

const FIXES = [
  ['Generic chat AI', 'You retype the same setup. Every session starts from zero.'],
  ['Prompt libraries', 'A better prompt, then a folder of overwhelming prompts to manage.'],
  ['Courses', 'You finish with notes. The work still is not built.'],
  ['Hiring or an agency', 'Slow, expensive, and your context moves into their head.'],
]

const GAPS = [
  ['It only covers the jobs you thought of.', 'The important work is the work you have not noticed yet.'],
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
    line: 'Drafts reach you already checked against your business brain.',
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

const FIRST_SITTING = [
  'Set up your Command Center',
  'Build your AI Business Brain',
  'Onboard your AI Team and run your first task',
]

// Three client wins. The fourth, a pre-AI business-building line, moved out of
// this grid and into its own block below the wins in section 12.
const WINS = [
  ['144% more booked calls', 'CPL below goal, 30% conversion across the Cardone Ventures portfolio.'],
  ['$6.57M total', 'Converted 40%+ of prospects to buyers for the new SquadUp Summit event.'],
  ['Sold out in 48 hours', 'First launch sold out, driven by email and social for HRE Beauty.'],
]

// Not currently rendered on the homepage. The Kevin Rogers quote that used to
// run in section 12 was cut; this one is kept here for when Rev wants it back.
const TESTIMONIALS = [
  {
    quote:
      'Reduced CPL below goal. Booked calls rose 144% with 30% conversion rates. Rev’s work set a new standard for how we approach campaign structure, messaging, and analytics across multiple brands.',
    name: 'Joe Bradley',
    title: 'Director, Marketing Partnerships, Cardone Ventures',
  },
]

const INCLUDES = [
  'A new department of four AI hires every month',
  'Maestro, your chief of staff, checks the work before you see it',
  'Your Command Center, set up with you',
  'One workshop a month',
  'A live Friday coaching call with Rev',
  'Daily access to the community',
]

const LIMITS = [
  ['You still have to show up.', 'This cuts your work. It does not remove you. You still review and approve everything.'],
  ['It runs on Claude.', 'You need a $20 Claude Pro plan on top of the membership plus the desktop app.'],
  ['A couple of months cost a little more.', 'The outreach month requires an external App and a few dollars of data. Paying for LinkedIn Premium gets you better results.'],
  ['The compounding takes time.', 'Month one is useful the same day. The full payoff takes time.'],
  ['You are early.', 'This is a founding cohort for a small group of early adopters. The price will increase soon.'],
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main>

        {/* 1. HERO */}
        <Section bg="paper" className="pt-16 md:pt-24">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2">
              <p className="eyebrow mb-6">For experts, consultants, and founder-led brands</p>
              <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
                Self-staffing AI Teams that run without you as the bottleneck.
              </h1>
              <p className="text-lead text-ink-muted mb-10 max-w-prose">
                Pre-built AI Assistants that know your business, complete the work, and create on-brand
                output you can actually use.
              </p>
              <div className="flex flex-wrap gap-4 items-center mb-6">
                <Button href={JOIN_URL} variant="primary" external>
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
                  'Next day, you do it all over again.',
                ].map((step, i) => (
                  <li key={step} className="flex gap-4 text-body text-ink">
                    <span className="text-small text-accent font-medium pt-1 w-5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className="max-w-prose text-body text-ink">
                <p>
                  The real problem sits upstream. Your offer, your buyer, and your voice live in your
                  head.
                </p>
              </div>
            </div>

            <aside className="border-l-2 border-accent pl-6 space-y-4 text-body text-ink-muted md:mt-2">
              <p className="text-h3 font-semibold text-ink">Where this ends up.</p>
              <p>
                A former client, north of $100M, built two AI Agents on his own. One makes branded
                decks. The other fixes the decks, because they sound like AI slop.
              </p>
              <p className="text-ink font-medium">
                They built an AI repair tool for their other AI builder tool.
              </p>
              <p>Nobody fixed the thinking. They standardized the cleanup.</p>
            </aside>
          </div>
        </Section>


        {/* 4. WHY THE USUAL FIXES FAIL */}
        <Section bg="grey">
          <p className="eyebrow mb-6">You have tried the usual fixes</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-12 max-w-prose">
            The usual fixes don’t work.
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
            <p className="text-body text-ink">All four hand you a flawed solution.</p>
          </div>
        </Section>

        {/* 5. I ALREADY DO THIS */}
        <Section bg="grey">
          <p className="eyebrow mb-6">What the “experts” tell you to do</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            Why projects won’t fix this.
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
            The gap is coverage, enforcement, persistence, and handoff.
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
            Three Steps to Success.
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
              You are in the loop to review and either approve or send back for rework. Human for
              trust, AI for scale.
            </p>
          </div>
        </Section>

        {/* 8. WHAT YOU ACTUALLY GET. The one full-width section. */}
        <Section bg="grey" width="wide">
          <div className="max-w-content mx-auto">
            <p className="eyebrow mb-6">What arrives</p>
            <h2 className="text-h1 font-semibold tracking-tight text-ink mb-8 max-w-prose">
              Onboard a new department a month, for six months.
            </h2>
            <div className="max-w-prose space-y-5 text-body text-ink mb-14">
              <p>
                Four new Assistants at the start of every month. All at once, nothing drip-fed. Twenty
                four by the end.
              </p>
              <p>
                Month one is The Offer Desk. You finish it holding four documents that form your AI
                Business Brain.
              </p>
              <p className="text-ink-muted">
                If a job comes up that nobody covers, Maestro builds the specialist that session.
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

        {/* 9. THE FRIDAY AFTERNOON */}
        <Section bg="paper">
          <p className="eyebrow mb-6">From my own desk</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            The team hires for the job you did not plan for.
          </h2>
          <div className="max-w-prose space-y-5 text-body text-ink leading-relaxed">
            <p>
              It’s 4:06 pm on a Friday afternoon, and I needed a landing page live by the end of the
              business day.
            </p>
            <p className="font-medium">Two Problems:</p>
            <ol className="space-y-2 list-decimal pl-5">
              <li>I had to leave for a concert with my family by 5 pm at the latest (no exceptions)</li>
              <li>I did not have a landing page builder on my team.</li>
            </ol>
            <p>
              So I told Maestro about the job. Without me asking, he built one on the spot, briefed it,
              and reviewed the draft against my voice before it ever reached me.
            </p>
            <p>
              That Landing Page specialist now lives in my Freelancer Rolodex. Next time I need a
              landing page, it is already on call.
            </p>
            <p className="text-h3 font-semibold text-ink">
              I never have to build a hundred agents I will never use.
            </p>
            <p className="text-ink-muted">
              So you are never stuck waiting. If a job comes up that nobody covers, Maestro “hires” the
              specialist that session.
            </p>
          </div>

        </Section>


        {/* 10. YOUR FIRST AFTERNOON */}
        <Section bg="grey">
          <p className="eyebrow mb-6">Your first afternoon</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            You see it work on day one.
          </h2>
          <div className="max-w-prose space-y-8 text-body text-ink">
            <p>Setup and your first real job happen in the same sitting.</p>
            <ol className="space-y-4">
              {FIRST_SITTING.map((step, i) => (
                <li key={step} className="flex gap-5">
                  <span className="text-h3 font-semibold text-accent shrink-0 leading-none pt-1">
                    {i + 1}
                  </span>
                  <span className="text-body font-medium text-ink">{step}</span>
                </li>
              ))}
            </ol>
            <p>
              By the time you close the laptop, there is one finished deliverable in your folder with
              your approval on it. You get “Ready-to-Use” work product.
            </p>
          </div>
        </Section>

        {/* 11. EVERY FRIDAY */}
        <Section bg="paper">
          <p className="eyebrow mb-6">Coaching and Q&amp;A Every Friday</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            You are not doing this alone.
          </h2>
          <div className="max-w-prose space-y-5 text-body text-ink">
            <p>
              Every Friday, I personally run a live coaching call. Bring what you are stuck on and we
              work it out on the call.
            </p>
            <p>
              The community runs the rest of the week, so nothing has to wait until Friday.
            </p>
            <p className="text-ink-muted">
              You also get one live workshop a month on top of that.
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
              A couple of years ago I hit a wall with AI. It was fast. Everything it wrote sounded like
              everyone else on the internet using AI.
            </p>
            <p>
              And I was the bottleneck. Every task started with me explaining the business from scratch.
            </p>
            <p>
              So I taught the AI my business instead. Now, it is the system I run my own work on every
              day.
            </p>
            <p className="text-ink-muted">
              I have built revenue systems for founder-led brands for 25 years. Same shape as this
              product, built for humans first.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {WINS.map(([result, detail]) => (
              <div key={result} className="border-t border-ink pt-5">
                <p className="text-h3 font-semibold text-ink mb-2">{result}</p>
                <p className="text-small text-ink-muted">{detail}</p>
              </div>
            ))}
          </div>



          <div className="mb-12 max-w-prose border-t border-ink pt-5">
            <p className="text-h3 font-semibold text-ink mb-2">
              Built multiple million dollar businesses before AI
            </p>
            <p className="text-body text-ink-muted">
              I’ve founded or helped start more than a dozen businesses in Japan, Korea, Taiwan,
              China, the UK and the US (grew 2 from zero to $20M+ per year), and have introduced
              thousands of products into new markets.
            </p>
          </div>

          {/* The honesty paragraph. Does not get softened and does not get moved. */}
          <div className="max-w-prose border-t border-ink pt-8">
            <p className="text-body text-ink">
              The founding cohort is new. You are getting the systems I use every day to attract,
              engage, and convert clients at a massive discount.
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
          <Button href={JOIN_URL} variant="primary" external>
            Join AI Inner Circle
          </Button>
          <div className="mt-8 space-y-3 max-w-prose">
            <p className="text-body text-ink-muted">
              Not ready to join? The{' '}
              <Link href="/ai-brain" className="text-ink underline hover:text-accent">
                AI Brain Workshop
              </Link>{' '}
              is $49. You build the file that tells AI who you are, how you work, write, and make
              decisions. You keep it whether you ever join the full program or not.
            </p>
            <p className="text-small text-ink-faint">
              Coaching rather than consulting?{' '}
              <Link href="/coaches" className="text-ink-muted underline hover:text-accent">
                There is a coaching track for that.
              </Link>
            </p>
          </div>
        </Section>

        {/* 15. THE CLOSE */}
        <Section bg="paper">
          <p className="eyebrow mb-6">Join the Inner Circle</p>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-8 max-w-prose">
            Your business is going to stay in your head until you build your AI Business Brain.
          </h2>
          <div className="max-w-prose space-y-5 text-body text-ink mb-10">
            <p>
              Your offer, your buyer, and the way you sound are all sitting in one place right now, and
              that place is your head.
            </p>
            <p>
              Twenty minutes of questions to start. The founding price is $199 a month. It rises to
              $249 soon.
            </p>
          </div>
          <Button href={JOIN_URL} variant="primary" external>
            Join AI Inner Circle
          </Button>
        </Section>

      </main>
      <Footer />
    </>
  )
}
