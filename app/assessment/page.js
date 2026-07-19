import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'

export const metadata = {
  alternates: { canonical: '/assessment' },
  title: 'Free AI Assessment | Rev Vaughn',
  description:
    'Find the biggest breaking points costing your business time, clients, and revenue — and the exact AI Assistant that fixes each. Free, instant results, no email required.',
  openGraph: {
    title: 'Free AI Assessment | Rev Vaughn',
    description:
      'Find the biggest breaking points costing your business time, clients, and revenue — and the exact AI Assistant that fixes each. Free, instant results, no email required.',
    url: 'https://aiinnercircle.com/assessment',
  },
}

// Two tracks, routed by how you actually win clients (motion), labeled by title.
const TRACKS = [
  {
    tag: 'Track 1',
    title: 'For Consultants & Agencies',
    blurb:
      'You win clients through outreach, referrals, and proposals. B2B service providers, done-for-you, and agencies.',
    href: '/consultants/assessment',
    cta: 'Take the B2B Assessment',
  },
  {
    tag: 'Track 2',
    title: 'For Coaches',
    blurb:
      'You sell through content, conversations, and calls. Business, executive, health, and life coaches with real programs.',
    href: '/coaches/assessment',
    cta: 'Take the Coach Assessment',
  },
]

const REASSURE = ['Free', 'Instant results', 'No email required', 'About 5 minutes']

export default function AssessmentHubPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero — sell the assessment */}
        <Section bg="paper" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-6">Free 5-Minute Assessment</p>
              <h1 className="text-display font-semibold tracking-tight text-ink mb-6">
                Find the exact AI Assistant your business is missing.
              </h1>
              <p className="text-lead text-ink-muted mb-8">
                Answer 12 quick questions and get your personalized AI Priority Map — the
                breaking points costing you time, clients, and revenue, and the specific AI
                Assistant that fixes each one.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {REASSURE.map((r) => (
                  <span key={r} className="text-small font-medium text-ink flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {r}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/ai-priority-map-preview-v2.png"
                alt="AI Priority Map preview"
                width={480}
                height={360}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </Section>

        {/* Chooser — route to the right assessment */}
        <Section bg="grey" width="content">
          <div className="eyebrow mb-4">Pick your track</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-3">
            Which best describes you?
          </h2>
          <p className="text-body text-ink-muted mb-10 max-w-prose">
            Two versions, each tuned to how you actually win clients. Pick the one that fits —
            you can switch at the end if you land on the wrong one.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {TRACKS.map((t) => (
              <div key={t.title} className="bg-paper border border-rule p-8 flex flex-col">
                <p className="eyebrow mb-3">{t.tag}</p>
                <h3 className="text-h3 font-semibold text-ink mb-3">{t.title}</h3>
                <p className="text-body text-ink-soft mb-8 flex-1">{t.blurb}</p>
                <Button href={t.href} variant="primary" className="self-start">
                  {t.cta} →
                </Button>
              </div>
            ))}
          </div>
        </Section>

        {/* No-wall reassurance — the differentiator */}
        <Section bg="paper" width="content">
          <div className="max-w-prose">
            <div className="eyebrow mb-4">No email wall</div>
            <h2 className="text-h2 font-semibold tracking-tight text-ink mb-4">
              You see everything the moment you finish.
            </h2>
            <p className="text-body text-ink-soft mb-4">
              No opt-in, no &ldquo;enter your email to see results.&rdquo; The second you answer
              the last question, your full AI Priority Map appears on screen — your four biggest
              breaking points, ranked, each matched to the exact AI Assistant that fixes it.
            </p>
            <p className="text-body text-ink-soft">
              Want a copy? Download it as a PDF in one click. Still no email required.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
