import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'

export const metadata = {
  title: 'AI Inner Circle | Rev Vaughn',
  description:
    'Where founder-led brands build revenue systems that actually scale. Your voice. AI doing the work.',
}

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

const WINS = [
  {
    result: '$1M+ in sales',
    detail: "Created the control campaign for Grant Cardone's 10X Business Coach.",
  },
  {
    result: '$6.57M total',
    detail: 'Converted 40%+ of prospects to buyers for the new SquadUp Summit event.',
  },
  {
    result: '$20M+ annually',
    detail: 'Helped grow martech company Front Porch from startup to scale.',
  },
  {
    result: '26 countries',
    detail: 'Led an online ad network with clients across 26 countries.',
  },
  {
    result: '144% more booked calls',
    detail: 'CPL reduced below goal. Booked calls rose 144% with 30% conversion rates across Cardone Ventures portfolio.',
  },
  {
    result: 'Sold out in 48 hours',
    detail: 'First launch sold out in 48 hours, driven by email and social media for HRE Beauty.',
  },
]

const TESTIMONIALS = [
  {
    quote:
      "When I think of campaigns that convert, I think of Rev. PERIOD. I've brought Rev in on million-dollar campaign launches, hired him for my 7-figure marketing agency, and seen firsthand what happens when real, A-level copy hits the page. Getting time on Rev's calendar is rare. If he's available, take it. Most people won't get the chance. If you do, don't walk… run.",
    name: 'Garen Mazon',
    title: 'Co-Founder, SpaSurge',
    org: '#1 Spa Marketing Agency',
  },
  {
    quote:
      "Rev Vaughn is that ultra-rare copywriter who practically cannot fail. That's because he has not only mastered the craft, but he also deeply understands people and what drives their desires. Although I could have hired almost anyone, I was proud to call Rev my personal copywriter inside Copy Chief.",
    name: 'Kevin Rogers',
    title: 'Founder, Copy Chief',
    org: '#1 Copywriting Community',
  },
  {
    quote:
      'Knocked it out of the park. Exceeded our sales goal. I fully endorse Rev. Kevin Rogers and I hired him to redo our Email Copy Academy funnel, and Rev knocked it out of the park. We even exceeded our sales goal. I was blown away by how well it did.',
    name: 'Chris Orzechowski',
    title: 'Creator, Email Copy Academy',
    org: '#1 Email Marketing Program',
  },
  {
    quote:
      'Our first launch sold out in only 48 hours, driven by email and social media. I had the opportunity to work with Rev on several of our consumer brands, including HRE Beauty and CardoMax. His ability to blend strategy, creative execution, and data made a measurable difference in how those brands grew.',
    name: 'Lisa De Rosa',
    title: 'Director, Corporate Partnerships',
    org: 'Cardone Ventures',
  },
  {
    quote:
      "Reduced CPL below goal. Booked calls rose 144% with 30% conversion rates. Rev's work set a new standard for how we approach campaign structure, messaging, and analytics across multiple brands. I confidently recommend Rev for any role requiring strategic marketing leadership, copy expertise, and proven results.",
    name: 'Joe Bradley',
    title: 'Director, Marketing Partnerships',
    org: 'Cardone Ventures',
  },
  {
    quote:
      "Listen to his training, and you'll make more money TODAY! I learned more about guiding people through the sales process than I learned from thousands of dollars in paid sales courses. It doesn't matter what industry you're in — listen to his training, and you'll make more money TODAY.",
    name: 'Jimmy Parent',
    title: 'Persuasion Scientist',
    org: '',
  },
]

const PILLARS = [
  {
    n: '01',
    title: 'Fill Your Pipeline',
    body:
      'AI Assistants find real buyers and start real conversations. No cold email. No ad spend. Just booked calls on your calendar.',
  },
  {
    n: '02',
    title: 'Become the Authority',
    body:
      'Record 30 minutes a week. Your voice shows up everywhere, in your words, and gets cited by AI search.',
  },
  {
    n: '03',
    title: 'Run Without You',
    body:
      'Move the routine into Assistants. The business keeps working when you step away. You stop being the ceiling.',
  },
]

const CADENCE = [
  { stat: 'Monthly', label: '1 or 2 Workshops every month. Live or pre-recorded.' },
  { stat: 'Weekly', label: 'Friday Q&A with Rev' },
  { stat: 'Daily', label: 'Direct access to Rev inside the community.' },
]

const MONTHS = [
  {
    n: '01',
    theme: 'Your First 10 Conversations',
    body: 'Real buyer conversations on your calendar in week one, without cold email or ad spend.',
    skills: ['LinkedIn Signal Scraper', 'ICP Match & Prioritizer', 'Surgical DM Writer', 'AI Slop Killer'],
  },
  {
    n: '02',
    theme: 'The Offer They Can’t Ignore',
    body: 'Rebuild your offer so the right buyers feel dumb saying no. Price stops being the objection.',
    skills: ['Sales Council', 'Unique Mechanism Builder', 'Offer & Pricing Architect', 'Objection Tester'],
  },
  {
    n: '03',
    theme: '30 Minutes to a Month of Content',
    body: 'Record 30 minutes a week. Show up everywhere in your voice, and get cited by AI search.',
    skills: ['Recording to Content Engine', 'SEO / GEO Citation Optimizer', 'LinkedIn Ghostwriter', 'Content Repurposer'],
  },
  {
    n: '04',
    theme: 'Turn Replies Into Revenue',
    body: 'Every reply becomes a booked call. Every call gets a proposal, before the buyer cools off.',
    skills: ['Reply Classifier', 'Follow-up & Reactivation', 'Discovery Call-Prep', 'Proposal & Quote Generator'],
  },
  {
    n: '05',
    theme: 'Get Out of the Bottleneck',
    body: 'Move the routine out of your head into AI Assistants that run it, so you stop being the ceiling.',
    skills: ['Transcription to SOP', 'Inbox Triage', 'Decision & Delegation Memo', 'Team Knowledge Base'],
  },
  {
    n: '06',
    theme: 'Run Like a Full Team',
    body: 'Spot churn before it hits, get paid on time, and deliver like you have a full ops team.',
    skills: ['Client Health Monitor', 'Client Reporting Dashboard', 'Invoice & Payment Chaser', 'GTM Teardown & Rebuild'],
  },
]

function PricingCards() {
  return (
    <div className="grid md:grid-cols-2 gap-8">

      {/* Option 1 — Community */}
      <div className="border border-rule bg-paper p-8 flex flex-col">
        <div className="eyebrow mb-4">Community</div>
        <h3 className="text-h2 font-semibold text-ink mb-2">AI Inner Circle</h3>
        <div className="text-display font-semibold text-ink mb-1">$199</div>
        <div className="text-small text-ink-muted mb-8">per month · rises to $249 · or $995 once</div>
        <ul className="space-y-3 text-body text-ink-soft mb-10 flex-1">
          <li className="flex gap-3"><span className="text-accent mt-1">–</span>24 AI Assistants over six months (a department a month)</li>
          <li className="flex gap-3"><span className="text-accent mt-1">–</span>1-2 live workshops per month</li>
          <li className="flex gap-3"><span className="text-accent mt-1">–</span>Friday Q&amp;A with Rev</li>
          <li className="flex gap-3"><span className="text-accent mt-1">–</span>Answers to your questions inside the community</li>
        </ul>
        <Button href="/contact" variant="primary">
          Join AI Inner Circle
        </Button>
      </div>

      {/* Option 2 — Coaching */}
      <div className="border-2 border-accent bg-paper p-8 flex flex-col">
        <div className="eyebrow mb-4">Community + Coaching</div>
        <h3 className="text-h2 font-semibold text-ink mb-2">AI Inner Circle + 1:1</h3>
        <div className="text-display font-semibold text-ink mb-1">$999</div>
        <div className="text-small text-ink-muted mb-8">per month</div>
        <ul className="space-y-3 text-body text-ink-soft mb-10 flex-1">
          <li className="flex gap-3"><span className="text-accent mt-1">–</span>Everything in Community</li>
          <li className="flex gap-3"><span className="text-accent mt-1">–</span>Weekly 1:1 coaching call with Rev</li>
          <li className="flex gap-3"><span className="text-accent mt-1">–</span>Customized to your business, market and offer</li>
          <li className="flex gap-3"><span className="text-accent mt-1">–</span>Email support in between sessions</li>
        </ul>
        <Button href="/contact" variant="primary">
          Apply for Coaching
        </Button>
      </div>

    </div>
  )
}

export default function AIInnerCirclePage() {
  return (
    <>
      <Header />
      <main>

        {/* 1. HERO */}
        <Section bg="paper" width="content" className="pt-20 md:pt-28">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2">
              <div className="eyebrow mb-6">AI Inner Circle</div>
              <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
                Your human voice sells it. AI Assistants scale it.
              </h1>
              <p className="text-lead text-ink-muted mb-10">
                A membership for founder-led B2B brands. Every week you install a new AI Assistant that attracts, engages, and converts buyers. In your voice. Real work, not AI slop.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/membership" variant="primary">
                  Join AI Inner Circle
                </Button>
              </div>
            </div>
            <div className="hidden md:flex items-start justify-center pt-8">
              <Image
                src="/AI-Inner-Circle-Logo-940.jpg"
                alt="AI Inner Circle"
                width={220}
                height={220}
                className="opacity-90"
              />
            </div>
          </div>
        </Section>

        {/* 2. CLIENTS STRIP */}
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

        {/* 3. WHY IT EXISTS */}
        <Section bg="paper" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Why it exists</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                &ldquo;Just use AI&rdquo; is not a growth strategy.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                Every week, I see founders stuck in one of two places.
                Either they&rsquo;re doing everything themselves and can&rsquo;t keep up. Or they&rsquo;re
                using AI and creating &ldquo;AI Slop&rdquo; their audience ignores.
              </p>
              <p>
                AI Inner Circle fixes both. You hire AI Assistants that know your voice, offer, and market.
                A new department of Assistants arrives each month. Each one solves a real problem. Over six months they add up
                to a system that runs your growth without living in your head.
              </p>
            </div>
          </div>
        </Section>

        {/* 4. THREE PILLARS */}
        <Section bg="grey" width="content">
          <div className="max-w-prose mb-14">
            <div className="eyebrow mb-4">The three pillars</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              Grow without being the bottleneck.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {PILLARS.map((p) => (
              <div key={p.n} className="border-t border-ink pt-6">
                <div className="text-small font-medium text-accent mb-3">{p.n}</div>
                <h3 className="text-h3 font-semibold text-ink mb-3">{p.title}</h3>
                <p className="text-body text-ink-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 5. CURRICULUM */}
        <Section bg="paper" width="content">
          <div className="max-w-prose mb-12">
            <div className="eyebrow mb-4">Inside the membership</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              A department a month. A full system by month six.
            </h2>
            <p className="text-lead text-ink-muted mt-4">
              A new department arrives each month. Rev demos one Assistant a week, so you use each with confidence.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 mb-20">
            {CADENCE.map((c) => (
              <div key={c.label} className="border-t-2 border-accent pt-4">
                <div className="text-h2 font-semibold text-ink mb-2">{c.stat}</div>
                <div className="text-body text-ink-muted">{c.label}</div>
              </div>
            ))}
          </div>
          <div className="eyebrow mb-8">The 6-month curriculum</div>
          <div className="grid md:grid-cols-3 gap-10">
            {MONTHS.map((m) => (
              <div key={m.n} className="border-t border-ink pt-6">
                <div className="text-small font-medium text-accent mb-3">{m.n}</div>
                <h3 className="text-h3 font-semibold text-ink mb-3">{m.theme}</h3>
                <p className="text-body text-ink-muted mb-4">{m.body}</p>
                <ul className="space-y-1">
                  {m.skills.map((s) => (
                    <li key={s} className="text-small text-ink-faint">
                      <span className="text-accent mr-2">&ndash;</span>{s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* 6. PRICING — FIRST CTA */}
        <Section bg="grey" width="content">
          <div className="max-w-prose mb-14">
            <div className="eyebrow mb-4">Join the Inner Circle</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              Stop guessing. Start building.
            </h2>
          </div>
          <PricingCards />
        </Section>

        {/* 7. ABOUT */}
        <Section bg="paper" width="content">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <div className="aspect-[4/5] relative w-full max-w-xs">
                <Image
                  src="/Rev-Vaughn-800.jpg"
                  alt="Rev Vaughn"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover grayscale"
                />
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="eyebrow mb-6">About</p>
              <h2 className="text-h1 font-semibold mb-6 leading-tight">
                I&rsquo;m not teaching theory. I&rsquo;m building with these tools right now.
              </h2>
              <div className="space-y-5 text-body text-ink-muted">
                <p>
                  I&rsquo;ve founded or helped build over a dozen businesses across six countries &mdash; Japan, Korea, Taiwan, China, the UK, and the US. Every system inside AI Inner Circle is one I&rsquo;m actively running in my own businesses. You&rsquo;re not getting a course. You&rsquo;re getting what&rsquo;s working today.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 8. SELECTED WINS */}
        <Section bg="paper" width="content">
          <div className="max-w-prose mb-12">
            <p className="eyebrow mb-4">Selected Wins</p>
            <h2 className="text-h1 font-semibold text-ink leading-tight">
              Results from the field.
            </h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {WINS.map((w) => (
              <li key={w.result} className="border-l-2 border-accent pl-6">
                <p className="text-body text-ink-soft leading-relaxed">
                  <span className="text-ink font-semibold">{w.result}</span> &mdash; {w.detail}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* 9. TESTIMONIALS */}
        <Section bg="grey" width="wide">
          <div className="max-w-prose mb-14">
            <p className="eyebrow mb-6">What the Experts Say</p>
            <h2 className="text-h1 font-semibold">Selected endorsements.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="border-l-2 border-accent pl-6">
                <p className="text-body text-ink mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <footer className="text-small">
                  <div className="font-semibold text-ink">{t.name}</div>
                  <div className="text-ink-muted">{t.title}</div>
                  {t.org && <div className="text-ink-faint">{t.org}</div>}
                </footer>
              </blockquote>
            ))}
          </div>
        </Section>

        {/* 10. CLOSING CTA */}
        <Section bg="paper" width="content">
          <div className="max-w-prose mb-14">
            <div className="eyebrow mb-4">Join the Inner Circle</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              Every week you wait is another week of overwhelm and falling behind.
            </h2>
          </div>
          <PricingCards />
        </Section>

      </main>
      <Footer />
    </>
  )
}
