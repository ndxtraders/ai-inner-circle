import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'
import WaitlistForm from '../components/WaitlistForm'

export const metadata = {
  title: 'Join AI Inner Circle — Membership | Rev Vaughn',
  description:
    'Install AI Assistants that attract, engage, and convert buyers — in your voice, not AI slop. One new Assistant every week. Founder-led B2B membership from Rev Vaughn.',
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const CLIENTS = [
  'Grant Cardone', '10X Health', 'Cardone Ventures', 'SquadUp Summit',
  'CardoMax', 'Copy Chief', 'Email Copy Academy', 'VestRight', 'REVIVX',
  'Heather Rae Essentials', 'SpaSurge',
]

// The reader self-selects here — pulled from the AI Priority Map breaking points.
const PAINS = [
  'You’re the bottleneck. Every decision routes through you.',
  'Leads go cold because you couldn’t reply fast enough.',
  'Your best thinking is trapped in your head — nothing’s written down.',
  'You post, but it sounds like everyone else. Or like a robot.',
  'You know AI should help. You just don’t know where to start.',
]

// Onboarding happens in Week 0, before the clock starts. Orchestrator first.
const ONBOARDING = [
  {
    n: '01',
    title: 'Install Your Command Center',
    body: 'Your AI team leader plus memory. Everything you build plugs into it, so you never lose track of a skill again.',
  },
  {
    n: '02',
    title: 'Activate Your AI Brain',
    body: 'Comes pre-loaded. You personalize it with your voice, offer, market, and ideal buyer — so every Assistant sounds like you.',
  },
]

const WORKSHOPS = [
  {
    n: '01',
    title: 'Your First 10 Conversations',
    promise: 'Real buyer conversations on your calendar in week one — no cold email, no ad spend.',
    anchor: 'LinkedIn Signal Scraper',
  },
  {
    n: '02',
    title: 'The Offer They Can’t Ignore',
    promise: 'Rebuild your offer so the right buyers feel dumb saying no — and price stops being the objection.',
    anchor: 'Offer & Pricing Architect',
  },
  {
    n: '03',
    title: '30 Minutes to a Month of Content',
    promise: 'Record 30 minutes a week and show up everywhere in your voice — and get cited by AI search.',
    anchor: 'Recording → Content Engine',
  },
  {
    n: '04',
    title: 'Turn Replies Into Revenue',
    promise: 'Every reply becomes a booked call, every call gets a proposal — before the buyer cools off.',
    anchor: 'Proposal & Quote Generator',
  },
  {
    n: '05',
    title: 'Get Out of the Bottleneck',
    promise: 'Pull the business out of your head into AI Assistants that run the routine, so you stop being the ceiling.',
    anchor: 'Transcription → SOP',
  },
  {
    n: '06',
    title: 'Run Like a Full Team',
    promise: 'Spot churn before it hits, get paid on time, and deliver like you’ve got a full ops team behind you.',
    anchor: 'Client Health Monitor',
  },
]

const INCLUDED = [
  ['One new AI Assistant every week', '24+ over six months. Each fixes a specific problem — dropped Tuesday, used that same day.'],
  ['1–2 live workshops every month', 'The month’s big move, walked through step by step. Live or pre-recorded.'],
  ['Friday Q&A with Rev', 'Bring what you’re stuck on. Get unstuck before the weekend.'],
  ['Daily access inside the community', 'Direct line to Rev and the room, every day.'],
  ['Your Command Center, set up with you', 'The orchestrator and memory that make the whole system compound instead of scatter.'],
  ['Templates and prompts you keep', 'They live in your own folder. Leave anytime and the system is still yours.'],
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
  ['Do I need to be technical?', 'No. You answer a few dropdown questions and the Assistant does the work. If you can send an email, you can run this.'],
  ['Which AI do I need?', 'Claude. That’s the only subscription required. The Assistants are built to run there.'],
  ['How much time per week?', 'Plan on an hour to install and use the week’s Assistant. That’s the whole point — less time, not more.'],
  ['Will this work for my B2B service?', 'Yes. It’s built for the general founder-led B2B service business — coaches, consultants, agencies, done-for-you services.'],
  ['Anything cost extra beyond the $49?', 'Only two small, optional things for the outreach month: a paid LinkedIn plan, and a few dollars of pay-as-you-go Apify. No expensive CRM, no cold-email tools.'],
  ['Do I keep the Assistants if I cancel?', 'Yes. They live in your own folder on your own machine. What you build is yours to keep.'],
]

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function MembershipPage() {
  return (
    <>
      <Header />
      <main>

        {/* 1–2. HERO */}
        <Section bg="paper" width="content" className="pt-20 md:pt-28">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2">
              <div className="eyebrow mb-6">AI Inner Circle Membership</div>
              <h1 className="text-display font-semibold tracking-tight text-ink mb-6">
                AI Assistants that attract, engage, and convert buyers for you.
              </h1>
              <p className="text-lead text-ink-muted mb-4">
                Not a course on AI. The actual skills — one new Assistant every week — that run your growth in your voice, not AI slop.
              </p>
              <p className="text-body text-ink-soft mb-8">
                The difference is simple: <span className="text-ink font-medium">the AI knows you now.</span>
              </p>
              <WaitlistForm buttonLabel="Join the Waitlist" />
              <p className="text-small text-ink-muted mt-4">
                Founding cohort · enrollment closes <span className="text-ink font-medium">August 1</span> · $49/mo founding price.{' '}
                <Link href="/map" className="text-accent underline underline-offset-2 hover:no-underline">
                  Not sure yet? Take the 5-minute assessment →
                </Link>
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
        <section className="bg-paper-grey border-y border-rule py-10">
          <div className="max-w-wide mx-auto px-6">
            <p className="text-small text-ink-muted mb-5 text-center uppercase tracking-wide">Trusted by the teams behind</p>
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
                You’re busy, you’re the bottleneck, and everything depends on you.
              </h2>
            </div>
            <ul className="space-y-4 text-body text-ink-soft">
              {PAINS.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="text-accent mt-1">–</span>{p}
                </li>
              ))}
              <li className="pt-2 text-ink font-medium">If you nodded, keep reading.</li>
            </ul>
          </div>
        </Section>

        {/* 4. STAKES */}
        <Section bg="grey" width="content">
          <div className="eyebrow mb-4">The real cost</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6 max-w-prose">
            Right now you don’t own a business. You own a stressful job that can’t run without you.
          </h2>
          <p className="text-lead text-ink-muted max-w-prose">
            Deals slip because you replied late. Your brand is invisible because there’s no time to show up.
            Your best process lives in your head, so nothing scales past you. That’s not a marketing problem — it’s a
            systems problem. And it compounds every week you leave it alone.
          </p>
        </Section>

        {/* 5. WHY THE USUAL FIXES FAIL */}
        <Section bg="paper" width="content">
          <div className="eyebrow mb-4">You’ve probably tried</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            The usual fixes all fail the same way.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-body text-ink-soft">
            <div>
              <p className="text-ink font-medium mb-1">Generic ChatGPT</p>
              <p>You type the same “I’m a B2B coach, keep it short, sound like me” prompt every time — then rewrite what comes back. Every. Single. Time.</p>
            </div>
            <div>
              <p className="text-ink font-medium mb-1">Courses</p>
              <p>You get information and a certificate. What you needed was the thing built and running.</p>
            </div>
            <div>
              <p className="text-ink font-medium mb-1">Hiring or agencies</p>
              <p>Expensive, slow, and now you’re managing people instead of doing the work.</p>
            </div>
            <div>
              <p className="text-ink font-medium mb-1">Enterprise stacks (Apollo, HubSpot)</p>
              <p>Big monthly bills, and cold email that quietly burns your domain reputation.</p>
            </div>
          </div>
        </Section>

        {/* 6. THE BIG IDEA */}
        <Section bg="greyDark" width="content">
          <div className="eyebrow mb-4">The idea</div>
          <h2 className="text-display font-semibold tracking-tight text-ink mb-6 max-w-prose">
            You don’t learn AI. You hire AI Assistants that know you.
          </h2>
          <p className="text-lead text-ink-muted max-w-prose mb-4">
            Problem first, AI second. Every week you add one Assistant that fixes one real problem — and each one
            plugs into the same Command Center.
          </p>
          <p className="text-lead text-ink-muted max-w-prose">
            Six months in, they’re not a pile of tools. They’re a system that attracts, converts, delivers, and
            retains — without living in your head.
          </p>
        </Section>

        {/* 7. HOW IT WORKS — before/after */}
        <Section bg="paper" width="content">
          <div className="eyebrow mb-4">How it actually works</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            What happens when your AI knows you.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border border-rule bg-paper-grey p-6">
              <p className="eyebrow mb-3">Before</p>
              <p className="text-body text-ink-soft mb-3">You type some version of this, every time:</p>
              <p className="text-body text-ink-muted italic">
                “I’m a B2B coach. My clients are founders. Keep it short. No bullet points. Casual, not formal.
                Make it sound like me, not a robot… yada yada.”
              </p>
              <p className="text-body text-ink-soft mt-3">Then you rewrite what comes back. Over and over.</p>
            </div>
            <div className="border-2 border-accent bg-paper p-6">
              <p className="eyebrow mb-3">After</p>
              <p className="text-body text-ink-soft mb-3">You type:</p>
              <p className="text-h3 font-semibold text-ink">/site-content</p>
              <p className="text-body text-ink-soft mt-3">
                Answer a few dropdown questions. It comes back in your voice, built for your market and offer.
                Read it, make a couple of tweaks, post.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-body text-ink-soft">
            <div>
              <p className="text-ink font-medium mb-1">1. Command Center first</p>
              <p>Your Assistants learn your voice, offer, and market once — up front.</p>
            </div>
            <div>
              <p className="text-ink font-medium mb-1">2. One Assistant every Tuesday</p>
              <p>A new skill drops each week. Use it that same day.</p>
            </div>
            <div>
              <p className="text-ink font-medium mb-1">3. It compounds</p>
              <p>Each one plugs into the Center, so nothing gets forgotten.</p>
            </div>
          </div>
        </Section>

        {/* 8. THE 6-MONTH JOURNEY */}
        <Section bg="grey" width="wide">
          <div className="max-w-content mx-auto">
            <div className="eyebrow mb-4">The path</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink mb-3">
              A quick win in week one. A full system by month six.
            </h2>
            <p className="text-lead text-ink-muted mb-12 max-w-prose">
              First, we set up your Command Center. Then six months, each with one workshop and the Assistants that make it real.
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
            <p className="text-small text-ink-muted uppercase tracking-wide mb-4">The 6-month curriculum</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WORKSHOPS.map((w) => (
                <div key={w.n} className="border border-rule bg-paper p-6 flex flex-col">
                  <div className="text-small text-ink-muted mb-2">Month {w.n}</div>
                  <h3 className="text-h3 font-semibold text-ink mb-2">{w.title}</h3>
                  <p className="text-body text-ink-soft flex-1">{w.promise}</p>
                  <p className="text-small text-ink-muted mt-4 pt-4 border-t border-rule">
                    Anchor Assistant: <span className="text-ink">{w.anchor}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 9. BEFORE / AFTER DREAM OUTCOME */}
        <Section bg="paper" width="content">
          <div className="eyebrow mb-4">Where this goes</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10">
            From the brain trap to an asset that runs.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-rule bg-paper-grey p-8">
              <p className="eyebrow mb-4">Today</p>
              <ul className="space-y-3 text-body text-ink-soft">
                <li>Generic, average AI output you have to fix.</li>
                <li>Leads slip through the cracks.</li>
                <li>You’re the ceiling on everything.</li>
                <li>The business can’t run without you in the room.</li>
              </ul>
            </div>
            <div className="border-2 border-accent bg-paper p-8">
              <p className="eyebrow mb-4">Six months in</p>
              <ul className="space-y-3 text-body text-ink-soft">
                <li>Posts that read like your business mentor wrote them.</li>
                <li>Every lead gets a fast, personal reply.</li>
                <li>The routine runs on Assistants, not on you.</li>
                <li>A transferable asset — not a job you can’t leave.</li>
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
            The systems behind these numbers are what you’re getting.
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
                I’m Rev Vaughn — a GTM strategist and revenue systems architect. I’ve built control campaigns for
                Grant Cardone, launches that sold out in 48 hours, and pipelines that raised booked calls 144%.
              </p>
              <p className="text-body text-ink-soft">
                This isn’t a guru selling AI theory. It’s the exact Assistants I use every day, packaged so a busy
                founder can install them without a tech team.
              </p>
            </div>
          </div>
        </Section>

        {/* 13. PRICING */}
        <Section bg="paper" width="content">
          <div className="text-center mb-10">
            <div className="eyebrow mb-4">Founding price</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              Less than one lost deal. Less than one agency invoice.
            </h2>
          </div>
          <div className="max-w-md mx-auto border-2 border-accent bg-paper p-8">
            <div className="eyebrow mb-4">AI Inner Circle</div>
            <div className="text-display font-semibold text-ink mb-1">$49</div>
            <div className="text-small text-ink-muted mb-8">per month · founding price</div>
            <ul className="space-y-3 text-body text-ink-soft mb-8">
              <li className="flex gap-3"><span className="text-accent mt-1">–</span>A new AI Assistant every week</li>
              <li className="flex gap-3"><span className="text-accent mt-1">–</span>1–2 live workshops per month</li>
              <li className="flex gap-3"><span className="text-accent mt-1">–</span>Friday Q&amp;A with Rev</li>
              <li className="flex gap-3"><span className="text-accent mt-1">–</span>Daily access inside the community</li>
              <li className="flex gap-3"><span className="text-accent mt-1">–</span>Your Command Center, set up with you</li>
            </ul>
            <WaitlistForm buttonLabel="Join the Waitlist" />
            <p className="text-small text-ink-muted mt-4">
              Enrollment closes August 1. 1:1 coaching upgrade available soon.
            </p>
          </div>
        </Section>

        {/* 14. RISK REVERSAL */}
        <Section bg="grey" width="content">
          <div className="eyebrow mb-4">No games</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6 max-w-prose">
            Cancel anytime, and you keep what you built.
          </h2>
          <p className="text-lead text-ink-muted max-w-prose mb-4">
            Your Assistants live in your own folder on your own machine. Walk away whenever you want — the system is
            still yours.
          </p>
          <p className="text-body text-ink-soft max-w-prose">
            Straight about costs: you’ll need a Claude subscription. For the outreach month, a paid LinkedIn plan and
            a few dollars of pay-as-you-go Apify. That’s it — no expensive CRM, no cold-email tools.
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
              The AI knows you now. Let’s put it to work.
            </h2>
            <p className="text-lead text-ink-muted mb-8 max-w-prose mx-auto">
              Join the founding cohort before enrollment closes August 1 and lock in $49/mo.
            </p>
            <div className="flex justify-center mb-6">
              <WaitlistForm buttonLabel="Join the Waitlist" />
            </div>
            <p className="text-small text-ink-muted">
              Still deciding?{' '}
              <Link href="/map" className="text-accent underline underline-offset-2 hover:no-underline">
                Take the 5-minute assessment →
              </Link>
            </p>
          </div>
        </Section>

      </main>
      <Footer />
    </>
  )
}
