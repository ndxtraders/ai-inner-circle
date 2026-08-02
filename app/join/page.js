import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'

// Membership hub. A chooser only. It exists so a visitor can self-select into
// /consultants or /coaches instead of guessing from the nav.
//
// The chooser block is repurposed from app/assessment/page.js, which already
// routes the same two tracks into their assessments. Same tags, same titles,
// same blurbs. Only the destinations and the CTA labels change.
//
// This page links to both programs, which does not break the MIRRORING.md rule.
// That rule binds program-specific material on /consultants and /coaches. A
// neutral hub is the same job /assessment already does.
export const metadata = {
  alternates: { canonical: '/join' },
  title: 'AI Inner Circle Membership | Rev Vaughn',
  description:
    'Two tracks, each tuned to how you win clients. Consultants and agencies win through outreach, referrals, and proposals. Coaches sell through content, conversations, and calls. Pick the one that fits.',
  openGraph: {
    title: 'AI Inner Circle Membership | Rev Vaughn',
    description:
      'Two tracks, each tuned to how you win clients. Consultants and agencies win through outreach, referrals, and proposals. Coaches sell through content, conversations, and calls. Pick the one that fits.',
    url: 'https://aiinnercircle.com/join',
  },
}

// Tags, titles, and blurbs are Rev's, verbatim from the assessment hub.
const TRACKS = [
  {
    tag: 'Track 1',
    title: 'For Consultants & Agencies',
    blurb:
      'You win clients through outreach, referrals, and proposals. B2B service providers, done-for-you, and agencies.',
    href: '/consultants',
    cta: 'See the Consultant Track',
  },
  {
    tag: 'Track 2',
    title: 'For Coaches',
    blurb:
      'You sell through content, conversations, and calls. Business, executive, health, and life coaches with real programs.',
    href: '/coaches',
    cta: 'See the Coach Track',
  },
]

export default function MembershipHubPage() {
  return (
    <>
      <Header />
      <main>
        <Section bg="paper" width="content">
          <div className="max-w-prose">
            <p className="eyebrow mb-6">AI Inner Circle Membership</p>
            <h1 className="text-display font-semibold tracking-tight text-ink mb-6">
              Two tracks. Pick the one that fits how you win clients.
            </h1>
            <p className="text-lead text-ink-muted">
              Both tracks run on the same Command Center and the same chief of staff, Maestro.
              The departments change to match how your business actually gets clients.
            </p>
          </div>
        </Section>

        {/* Chooser: repurposed from the assessment hub, routed to the programs */}
        <Section bg="grey" width="content">
          <div className="eyebrow mb-4">Pick your track</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-3">
            Which best describes you?
          </h2>
          <p className="text-body text-ink-muted mb-10 max-w-prose">
            Two versions, each tuned to how you actually win clients. Pick the one that fits.
            Nothing is locked, and you can read both.
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
      </main>
      <Footer />
    </>
  )
}
