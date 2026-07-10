import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'
import WaitlistForm from '../components/WaitlistForm'

export const metadata = {
  title: 'AI Inner Circle for Coaches | Rev Vaughn',
  description:
    'A full AI team that turns your audience into clients, in your voice. 20 Assistants plus 3 bonus hires, run by Maestro. For coaches, from Rev Vaughn.',
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const CLIENTS = [
  'Grant Cardone',
  '10X Health',
  'Cardone Ventures',
  'SquadUp Summit',
  '10X Business Coach',
  'Heather Rae Essentials',
  'CardoMax',
  'Copy Chief',
  'Email Copy Academy',
  'VestRight',
  'Allied Development',
  'Remix Your Business',
  'REVIVX',
  'Get More Math',
  'SpaSurge',
  'Zenpreneurs',
  '10X GrowthCon',
  '10X Health UK',
  'IV Academy',
  '10X Roofing',
  '10X Home Services',
  '10X DECODE',
]

// The reader self-selects here. Coach-specific breaking points.
const PAINS = [
  'You post every day. Peers like it. Buyers scroll past.',
  'Your DMs hold warm people you never followed up with.',
  '“Let me think about it” is where your enrollments go to die.',
  'Client wins happen every week. Your testimonial page says 2023.',
  'You know AI should help. Everything it writes sounds like a robot.',
]

// Week 0, before the clock starts. Command Center, then the voice.
const ONBOARDING = [
  {
    n: '01',
    title: 'Install Your Command Center',
    body: 'Meet Maestro, your AI Chief of Staff, plus memory. Every Assistant you hire plugs into it. You never lose track of a skill again.',
  },
  {
    n: '02',
    title: 'Build Your AI Writing Twin',
    body: 'Maestro interviews you and studies your writing like a linguist. Have samples? It maps your patterns. Never developed a strong voice? You choose one deliberately. Either way, every Assistant sounds like you from day one.',
  },
]

const WORKSHOPS = [
  {
    n: '01',
    dept: 'The Signature Offer Desk',
    title: 'Stop Being a Commodity Coach',
    promise: 'Your method gets a name. Your price gets defended. The right clients feel dumb saying no.',
    skills: [
      ['Sales Council', 'your advisory board'],
      ['Signature Method Builder', 'names how you coach'],
      ['Offer & Pricing Architect', 'rebuilds your program'],
      ['Objection Tester', 'your toughest prospect'],
    ],
  },
  {
    n: '02',
    dept: 'The Warm Conversations Desk',
    title: 'Sell to the Audience You Already Have',
    promise: 'The buyers hiding in your comments, stories, and old DMs become booked calls. No ads. No cold outreach.',
    skills: [
      ['Warm Signal Spotter', 'finds who is warm this week'],
      ['Conversation Starter', 'DMs without the pitch-slap'],
      ['Follow-Up & Reactivation Engine', 'your follow-up rep'],
      ['Discovery Call Closer', 'preps and closes the call'],
    ],
  },
  {
    n: '03',
    dept: 'The Content Engine',
    title: 'Demand Content, Not Visibility Content',
    promise: 'Every post gets a sales job. Everything ships in your voice, and nothing that sounds like AI leaves the building.',
    skills: [
      ['Content Strategist', 'plans posts that convert'],
      ['Voice-True Ghostwriter', 'writes like you, on schedule'],
      ['Content Repurposer', 'one idea into ten assets'],
      ['AI Check', 'measures and kills the robot voice'],
    ],
  },
  {
    n: '04',
    dept: 'The Owned Audience Desk',
    title: 'Get Off Rented Land',
    promise: 'A lead magnet built from your method, an email list the algorithm can’t touch, and launches that run on a calendar instead of adrenaline.',
    skills: [
      ['Lead Magnet Builder', 'the freebie that qualifies buyers'],
      ['Email Nurture Writer', 'walks subscribers to a call'],
      ['Launch & Promo Planner', 'runs your promotions'],
      ['Audience-to-List Converter', 'turns followers into subscribers'],
    ],
  },
  {
    n: '05',
    dept: 'The Proof Flywheel',
    title: 'Results That Sell the Next Client',
    promise: 'Wins get captured the moment they happen. Clients stop drifting. Graduates become referrals and renewals.',
    skills: [
      ['Win Capture & Case Study Engine', 'your proof department'],
      ['Client Health Monitor', 'catches the quiet drift'],
      ['Continuation Offer Builder', 'designs the next yes'],
      ['Referral Engine', 'asks at the perfect moment'],
    ],
  },
]

const ORG_CHART = `YOU
 │
 MAESTRO · your Chief of Staff
 │
 ├── 1 · SIGNATURE OFFER DESK
 │      Sales Council · Signature Method Builder
 │      Offer & Pricing Architect · Objection Tester
 │
 ├── 2 · WARM CONVERSATIONS DESK
 │      Warm Signal Spotter · Conversation Starter
 │      Follow-Up & Reactivation · Discovery Call Closer
 │
 ├── 3 · CONTENT ENGINE
 │      Content Strategist · Voice-True Ghostwriter
 │      Content Repurposer · AI Check
 │
 ├── 4 · OWNED AUDIENCE DESK
 │      Lead Magnet Builder · Email Nurture Writer
 │      Launch & Promo Planner · Audience-to-List Converter
 │
 ├── 5 · PROOF FLYWHEEL
 │      Win Capture & Case Studies · Client Health Monitor
 │      Continuation Offer Builder · Referral Engine
 │
 └── 🎁 BONUS HIRES
        LinkedIn Profile Architect · Prompt Engineer
        Carousel Builder`

const INCLUDED = [
  ['A new department of Assistants every month', 'All 20 across five months, built in your voice. A full department lands each month; Rev demos one a week so you always know how to use it.'],
  ['Three bonus hires along the way', 'A LinkedIn Profile Architect at install, a Prompt Engineer in month one, a Carousel Builder in month three. Pure extra, same team.'],
  ['A live command board of everything in flight', 'One screen shows every task your team touches — queued, in progress, waiting on you, done. You always know where things stand without asking a soul.'],
  ['Maestro reviews the work before you ever see it', 'Your Chief of Staff checks every deliverable against your voice and your standards, sends weak drafts back for a rewrite on his own, and only surfaces what’s ready. You approve or ask for changes.'],
  ['A live workshop every month', 'The month’s big move, walked through step by step. Live or pre-recorded.'],
  ['Friday Q&A with Rev', 'Bring what you’re stuck on. Get unstuck before the weekend.'],
  ['Daily access inside the community', 'A direct line to Rev and the room, every day.'],
  ['Templates, prompts, and Assistants you keep', 'They live in your own folder, on your own machine. Leave anytime and the system stays yours.'],
]

const WINS = [
  { result: '144% more booked calls', detail: 'CPL below goal, 30% conversion across the Cardone Ventures portfolio.' },
  { result: '$6.57M total', detail: 'Converted 40%+ of prospects to buyers for the new SquadUp Summit event.' },
  { result: 'Sold out in 48 hours', detail: 'First launch sold out, driven by email and social for HRE Beauty.' },
  { result: '$1M+ in sales', detail: "Built the control campaign for Grant Cardone's 10X Business Coach." },
]

const TESTIMONIALS = [
  {
    quote:
      "When I think of campaigns that convert, I think of Rev. PERIOD. I've brought Rev in on million-dollar campaign launches and hired him for my 7-figure marketing agency. If he's available, take it.",
    name: 'Garen Mazon',
    title: 'Co-Founder, SpaSurge',
  },
  {
    quote:
      'Reduced CPL below goal. Booked calls rose 144% with 30% conversion rates. Rev set a new standard for how we approach campaign structure, messaging, and analytics across multiple brands.',
    name: 'Joe Bradley',
    title: 'Director, Marketing Partnerships, Cardone Ventures',
  },
]

const FAQ = [
  ['Do I need to be technical?', 'No. You talk to Maestro the way you’d brief an assistant, and the team does the work. If you can send a DM, you can run this.'],
  ['Which AI do I need?', 'Claude. That’s the only subscription required. The Assistants are built to run there.'],
  ['How much time per week?', 'Plan on about an hour to install and use the week’s Assistant. That hour buys back far more.'],
  ['Will this work for my kind of coaching?', 'Yes. It fits coaches who sell through content, conversations, and calls: business coaches, executive coaches, health and life coaches with real programs. If your clients find you online and enroll on a call, this is built for you.'],
  ['Does anything cost extra?', 'No. Everything runs on your Claude subscription. Two optional power-ups exist for members who want automation — a free-tier Apify account and Google Calendar connectors — and both have built-in manual paths that work without them.'],
  ['I took the Build Your AI Writing Twin workshop. Does that count for anything?', 'Yes, twice. Your $97 is credited toward the membership, and Maestro uses the Voice Guide you built there at setup, so your onboarding is already half done.'],
  ['What if I’ve never developed a strong writing voice?', 'There’s a second door built for exactly you. Maestro helps you choose a voice deliberately, and it becomes yours from day one. When your writing catches up, say “rebuild my voice” and the whole team upgrades overnight.'],
  ['Do I keep the Assistants if I cancel?', 'Yes. They live in your own folder on your own machine. What you build is yours to keep.'],
  ['What’s the difference between the monthly plan and the one-time option?', 'Same team, same community. Monthly is $199 and unlocks one department a month. The one-time $796 is five months for the price of four — Maestro and all 20 Assistants unlocked today, no recurring charge, price locked, yours to keep. Workshops and weekly demos are still released on schedule for everyone.'],
  ['How do I keep track of what the team is doing?', 'A live command board. Every task the Assistants touch moves across it — queued, in progress, waiting on your review, done. Open it any morning and the whole picture is there, already up to date.'],
  ['Do I have to check all the AI’s work myself?', 'No. Maestro reviews each deliverable first, against your voice and your standards, and sends anything weak back for a rewrite before you see it. Everything outward-facing also passes AI Check, so nothing that sounds like a robot ships under your name.'],
]

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function CoachesMembershipPage() {
  return (
    <>
      <Header />
      <main>

        {/* 1–2. HERO */}
        <Section bg="paper" width="content" className="pt-20 md:pt-28">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2">
              <div className="eyebrow mb-6">AI Inner Circle for Coaches</div>
              <h1 className="text-display font-semibold tracking-tight text-ink mb-6">
                A full AI team that turns your audience into clients. In your voice.
              </h1>
              <p className="text-lead text-ink-muted mb-4">
                You get the actual skills — 20 Assistants plus 3 bonus hires — trained on your voice, your method, and your people, run by Maestro, your new AI Chief of Staff who reviews their work before it reaches you.
              </p>
              <p className="text-body text-ink-soft mb-8">
                The difference is simple. <span className="text-ink font-medium">The AI knows you now.</span>
              </p>
              <Link   href="/contact"   className="inline-flex items-center justify-center px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-ink text-paper border border-ink hover:bg-accent hover:border-accent" >   Join the Waitlist </Link>
              <p className="text-small text-ink-muted mt-4">
                Founding cohort. Enrollment closes <span className="text-ink font-medium">[DATE]</span>. Founding price is $199 a month — or own the whole team once for $796, five months for the price of four.
              </p>
            </div>
            <div className="hidden md:block pt-4">
              <div className="relative aspect-[4/5] w-full border border-rule">
                <Image
                  src="/Rev-Vaughn-800.jpg"
                  alt="Rev Vaughn"
                  fill
                  sizes="320px"
                  className="object-cover grayscale"
                  priority
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Clients strip */}
        <section className="bg-paper-grey border-y border-rule py-12">
          <div className="max-w-wide mx-auto px-6">
            <p className="text-h3 font-semibold text-ink mb-6 text-center">Clients &amp; Campaigns</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-body text-ink-soft">
              {CLIENTS.map((c) => (
                <span key={c} className="whitespace-nowrap">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 3. QUALIFIER */}
        <Section bg="paper" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Is this you?</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                You’re one coach in a feed of ten thousand coaches.
              </h2>
            </div>
            <ul className="space-y-4 text-body text-ink-soft">
              {PAINS.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="text-accent mt-1">–</span>{p}
                </li>
              ))}
              <li className="pt-2 text-ink font-medium">Sound familiar? Keep reading.</li>
            </ul>
          </div>
        </Section>

        {/* 4. STAKES */}
        <Section bg="grey" width="content">
          <div className="eyebrow mb-4">The real cost</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6 max-w-prose">
            You built a following, not a pipeline.
          </h2>
          <p className="text-lead text-ink-muted max-w-prose">
            The audience grows and the income doesn’t. Warm people raise their hands in your comments and nobody
            follows up. Your calendar caps what you can earn, and the algorithm owns your reach. Every month this
            runs, the wins your clients get evaporate unrecorded — while coaches with half your skill and twice
            your system enroll the clients you warmed up.
          </p>
        </Section>

        {/* 5. WHY THE USUAL FIXES FAIL */}
        <Section bg="paper" width="content">
          <div className="eyebrow mb-4">You’ve tried the usual fixes</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            They all break the same way.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-body text-ink-soft">
            <div>
              <p className="text-ink font-medium mb-1">Generic ChatGPT</p>
              <p>You type the same long prompt every time. Then you rewrite what comes back. Every session starts from zero, and it still sounds like everyone else.</p>
            </div>
            <div>
              <p className="text-ink font-medium mb-1">Posting more</p>
              <p>Twice the content, same silence from buyers. Volume was never the problem. The content has no sales job.</p>
            </div>
            <div>
              <p className="text-ink font-medium mb-1">Courses and certifications</p>
              <p>You finish with notes and a badge. The follow-up still doesn’t happen and the testimonials still don’t get collected.</p>
            </div>
            <div>
              <p className="text-ink font-medium mb-1">Hiring a VA or an agency</p>
              <p>Expensive and slow, and their DMs sound like a stranger wearing your name. Now you manage people instead of coaching.</p>
            </div>
          </div>
        </Section>

        {/* 6. THE BIG IDEA */}
        <Section bg="greyDark" width="content">
          <div className="eyebrow mb-4">The idea</div>
          <h2 className="text-display font-semibold tracking-tight text-ink mb-6 max-w-prose">
            Hire AI Assistants that already know you.
          </h2>
          <p className="text-lead text-ink-muted max-w-prose mb-4">
            Start with the problem. Add the Assistant that solves it. One a week. Each one plugs into the same
            Command Center, reads your voice file before touching a word, and hands its work to the next.
          </p>
          <p className="text-lead text-ink-muted max-w-prose">
            Five months in, they work together. They name your method, warm up your audience, book the calls,
            capture the wins, and ask for the referrals. The system runs without living in your head.
          </p>
        </Section>

        {/* 7. HOW IT WORKS: before/after */}
        <Section bg="paper" width="content">
          <div className="eyebrow mb-4">How it works</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            What changes when the AI knows you.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border border-rule bg-paper-grey p-6">
              <p className="eyebrow mb-3">Before</p>
              <p className="text-body text-ink-soft mb-3">You type some version of this, every time:</p>
              <p className="text-body text-ink-muted italic">
                “I’m a leadership coach. My clients are mid-career women. Keep it warm but direct. No hashtags.
                Don’t sound like a guru. Make it sound like me, not a robot… yada yada.”
              </p>
              <p className="text-body text-ink-soft mt-3">Then you rewrite what comes back. Again and again.</p>
            </div>
            <div className="border-2 border-accent bg-paper p-6">
              <p className="eyebrow mb-3">After</p>
              <p className="text-body text-ink-soft mb-3">You type:</p>
              <p className="text-h3 font-semibold text-ink">“Who should I talk to this week?”</p>
              <p className="text-body text-ink-soft mt-3">
                Maestro hands you five warm names with the reason each one is ready, and the opening message
                drafted in your voice. You read, tweak a word, and send.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-body text-ink-soft">
            <div>
              <p className="text-ink font-medium mb-1">1. Your voice first</p>
              <p>Week 0 builds your AI Writing Twin. Every Assistant inherits it before writing a word.</p>
            </div>
            <div>
              <p className="text-ink font-medium mb-1">2. A department every month</p>
              <p>All 20 Assistants over five months. Rev demos one a week so nothing overwhelms you.</p>
            </div>
            <div>
              <p className="text-ink font-medium mb-1">3. It stacks up</p>
              <p>Each hire hands its work to the next. Your method feeds your offer feeds your content feeds your calls.</p>
            </div>
            <div>
              <p className="text-ink font-medium mb-1">4. One board, full visibility</p>
              <p>Every task moves across your command board. You see the whole operation at a glance.</p>
            </div>
          </div>
        </Section>

        {/* 7b. MAESTRO */}
        <Section bg="grey" width="content">
          <div className="eyebrow mb-4">Meet Maestro, Your New AI Chief of Staff.</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6 max-w-prose">
            Maestro runs the team so you don’t have to.
          </h2>
          <p className="text-body text-ink-soft max-w-prose mb-4">
            Maestro manages the entire team. He routes the work, hires specialists
            when needed, checks quality, tracks every project, and keeps everything
            moving, so you can spend less time managing and more time coaching.
          </p>
          <p className="text-body text-ink-soft max-w-prose">
            Your review job shrinks to two words: approve, or “change this.”
          </p>
        </Section>

        {/* 8. THE 5-MONTH JOURNEY */}
        <Section bg="grey" width="wide">
          <div className="max-w-content mx-auto">
            <div className="eyebrow mb-4">The path</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink mb-3">
              A quick win in week one. A full system by month five.
            </h2>
            <p className="text-lead text-ink-muted mb-12 max-w-prose">
              First you set up your Command Center and your voice. Then five months, each with one workshop and the Assistants that make it real.
            </p>

            {/* Onboarding */}
            <div className="mb-12">
              <p className="text-small text-ink-muted uppercase tracking-wide mb-4">Start here · Week 0 onboarding</p>
              <div className="grid md:grid-cols-2 gap-6">
                {ONBOARDING.map((o) => (
                  <div key={o.n} className="border border-rule bg-paper p-6">
                    <div className="text-small text-accent font-semibold mb-2">{o.n}</div>
                    <h3 className="text-h3 font-semibold text-ink mb-2">{o.title}</h3>
                    <p className="text-body text-ink-soft">{o.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly workshops */}
            <p className="text-small text-ink-muted uppercase tracking-wide mb-4">The 5-month hiring plan</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WORKSHOPS.map((w) => (
                <div key={w.n} className="border border-rule bg-paper p-6 flex flex-col">
                  <div className="text-small text-ink-muted mb-1">Month {w.n} · {w.dept}</div>
                  <h3 className="text-h3 font-semibold text-ink mb-2">{w.title}</h3>
                  <p className="text-body text-ink-soft flex-1">{w.promise}</p>
                  <ul className="mt-4 pt-4 border-t border-rule space-y-1">
                    {w.skills.map(([name, gloss]) => (
                      <li key={name} className="text-small text-ink-muted">
                        <span className="text-ink">{name}</span> · {gloss}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Org chart payoff */}
            <div className="mt-14">
              <p className="text-small text-ink-muted uppercase tracking-wide mb-4">Your org chart by month five</p>
              <div className="overflow-x-auto border border-rule bg-paper p-6">
                <pre className="text-small text-ink-soft leading-relaxed whitespace-pre font-mono">{ORG_CHART}</pre>
              </div>
              <p className="text-body text-ink-muted mt-4 max-w-prose">
                Twenty Assistants, five desks, three bonus hires. All reporting to Maestro — who assigns the work, reviews it, and sends it back for changes before it ever reaches you. You approve the finished work. Cancel anytime and the team stays yours.
              </p>
            </div>
          </div>
        </Section>

        {/* 9. BEFORE / AFTER DREAM OUTCOME */}
        <Section bg="paper" width="content">
          <div className="eyebrow mb-4">Where this goes</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10">
            From the content treadmill to a practice that compounds.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-rule bg-paper-grey p-8">
              <p className="eyebrow mb-4">Today</p>
              <ul className="space-y-3 text-body text-ink-soft">
                <li>Content that collects likes from peers, not clients.</li>
                <li>Warm people in your DMs, cold by the time you reply.</li>
                <li>Testimonials you keep meaning to ask for.</li>
                <li>Every month starts from zero.</li>
              </ul>
            </div>
            <div className="border-2 border-accent bg-paper p-8">
              <p className="eyebrow mb-4">Five months in</p>
              <ul className="space-y-3 text-body text-ink-soft">
                <li>A named method only you can claim.</li>
                <li>Five warm conversations opening every week.</li>
                <li>Wins captured the day they happen, proof always fresh.</li>
                <li>Clients who renew, refer, and never drift out silently.</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* 10. WHAT'S INCLUDED */}
        <Section bg="grey" width="content">
          <div className="eyebrow mb-4">What you get</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10">
            Everything in the membership.
          </h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {INCLUDED.map(([title, body]) => (
              <div key={title} className="flex gap-4">
                <span className="text-accent text-h3 leading-none mt-1">–</span>
                <div>
                  <p className="text-body font-semibold text-ink mb-1">{title}</p>
                  <p className="text-body text-ink-soft">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 11. PROOF */}
        <Section bg="paper" width="content">
          <div className="eyebrow mb-4">Proof</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10">
            These numbers came from these systems.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {WINS.map((w) => (
              <div key={w.result} className="border border-rule bg-paper p-5">
                <div className="text-h3 font-semibold text-ink mb-2">{w.result}</div>
                <p className="text-small text-ink-soft">{w.detail}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-rule bg-paper-grey p-6">
                <p className="text-body text-ink mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-small font-semibold text-ink">{t.name}</p>
                <p className="text-small text-ink-muted">{t.title}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 12. ABOUT REV */}
        <Section bg="greyDark" width="content">
          <div className="grid md:grid-cols-3 gap-10 items-center">
            <div className="hidden md:block">
              <div className="relative aspect-square w-full border border-rule">
                <Image src="/Rev-Vaughn-800.jpg" alt="Rev Vaughn" fill sizes="280px" className="object-cover grayscale" />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="eyebrow mb-4">Who’s behind it</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink mb-5">
                I build these systems for a living. Now I’m handing you mine.
              </h2>
              <p className="text-body text-ink-soft mb-4">
                I’m Rev Vaughn, a GTM strategist and revenue systems architect. I built the control campaign for
                Grant Cardone’s 10X Business Coach, launches that sold out in 48 hours, and pipelines that lifted
                booked calls 144%. I’ve spent two decades selling coaching and high-ticket programs.
              </p>
              <p className="text-body text-ink-soft">
                You get the exact Assistants I use every day, packaged so a busy coach can run them without a tech team.
              </p>
            </div>
          </div>
        </Section>

        {/* 13. PRICING */}
        <Section bg="paper" width="content">
          <div className="text-center mb-10">
            <div className="eyebrow mb-4">Choose your way in</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              Less than one client. Less than one month of a VA.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto items-start">

            {/* One-time — the hero */}
            <div className="border-2 border-accent bg-paper p-8 relative md:-mt-2">
              <div className="inline-block bg-accent text-paper text-eyebrow uppercase tracking-widest px-3 py-1 mb-4">
                Best value · own it outright
              </div>
              <div className="text-display font-semibold text-ink mb-1">$796</div>
              <div className="text-small text-ink-muted mb-6">one time · the whole team is yours today</div>
              <p className="text-body text-ink font-medium mb-6">
                Five months for the price of four. Every Assistant unlocked today, not five months from now.
              </p>
              <ul className="space-y-3 text-body text-ink-soft mb-8">
                <li className="flex gap-3"><span className="text-accent mt-1">–</span>Maestro and all 20 Assistants, unlocked immediately</li>
                <li className="flex gap-3"><span className="text-accent mt-1">–</span>All 3 bonus hires included</li>
                <li className="flex gap-3"><span className="text-accent mt-1">–</span>A full month free — $199 &times; 4 covers all five</li>
                <li className="flex gap-3"><span className="text-accent mt-1">–</span>No recurring charge. Price locked. Yours to keep</li>
                <li className="flex gap-3"><span className="text-accent mt-1">–</span>Live workshops, weekly demos, Friday Q&amp;A, community</li>
              </ul>
              <Link   href="/contact"   className="inline-flex items-center justify-center px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-ink text-paper border border-ink hover:bg-accent hover:border-accent" >   Join the Waitlist </Link>
            </div>

            {/* Monthly — the secondary */}
            <div className="border border-rule bg-paper p-8">
              <div className="eyebrow mb-4">Or pay monthly</div>
              <div className="text-display font-semibold text-ink mb-1">$199</div>
              <div className="text-small text-ink-muted mb-6">per month · five months · founding price</div>
              <p className="text-body text-ink-soft mb-6">
                Unlock one department a month as we go. What you build stays yours.
              </p>
              <ul className="space-y-3 text-body text-ink-soft mb-8">
                <li className="flex gap-3"><span className="text-accent mt-1">–</span>A new department every month</li>
                <li className="flex gap-3"><span className="text-accent mt-1">–</span>All 3 bonus hires included</li>
                <li className="flex gap-3"><span className="text-accent mt-1">–</span>A live workshop every month</li>
                <li className="flex gap-3"><span className="text-accent mt-1">–</span>Friday Q&amp;A with Rev, daily community access</li>
                <li className="flex gap-3"><span className="text-accent mt-1">–</span>Your Command Center and voice, set up with you</li>
              </ul>
              <Link   href="/contact"   className="inline-flex items-center justify-center px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-ink text-paper border border-ink hover:bg-accent hover:border-accent" >   Join the Waitlist </Link>
            </div>
          </div>
          <p className="text-small text-ink-muted mt-6 text-center">
            Took the $97 Build Your AI Writing Twin workshop? It’s credited toward either option.
          </p>
        </Section>

        {/* 14. RISK REVERSAL */}
        <Section bg="grey" width="content">
          <div className="eyebrow mb-4">No games</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6 max-w-prose">
            Cancel anytime. Keep what you built.
          </h2>
          <p className="text-lead text-ink-muted max-w-prose mb-4">
            Your Assistants live in your own folder, on your own machine. Walk away whenever you want. The system stays yours.
          </p>
          <p className="text-body text-ink-soft max-w-prose">
            Straight talk on costs. You need a Claude subscription. That’s it. The two optional power-ups
            (a free-tier Apify account, Google Calendar connectors) automate what the manual paths already do.
            No CRM, no funnels software, no ad spend.
          </p>
        </Section>

        {/* 15. FAQ */}
        <Section bg="paper" width="content">
          <div className="eyebrow mb-4">Questions</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10">Before you join.</h2>
          <div className="space-y-8 max-w-prose">
            {FAQ.map(([q, a]) => (
              <div key={q}>
                <p className="text-body font-semibold text-ink mb-2">{q}</p>
                <p className="text-body text-ink-soft">{a}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 16. FINAL CTA */}
        <Section bg="greyDark" width="content">
          <div className="text-center">
            <h2 className="text-display font-semibold tracking-tight text-ink mb-6 max-w-prose mx-auto">
              The AI knows you now. Put it to work.
            </h2>
            <p className="text-lead text-ink-muted mb-8 max-w-prose mx-auto">
              Join the founding cohort before enrollment closes [DATE]. Lock in $199 a month — or own the whole team once for $796.
            </p>
            <div className="flex justify-center mb-6">
              <Link   href="/contact"   className="inline-flex items-center justify-center px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-ink text-paper border border-ink hover:bg-accent hover:border-accent" >   Join the Waitlist </Link>
            </div>
            <p className="text-small text-ink-muted">
              Not sure your voice survives AI?{' '}
              <Link href="/writing-twin" className="text-accent underline underline-offset-2 hover:no-underline">
                Start with the $97 Writing Twin workshop → it’s credited when you join.
              </Link>
            </p>
          </div>
        </Section>

      </main>
      <Footer />
    </>
  )
}
