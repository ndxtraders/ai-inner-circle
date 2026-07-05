import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'

export const metadata = {
  title: 'Workshops | Rev Vaughn',
  description:
    'Low-cost, self-paced AI workshops for founder-led brands. Install one working AI system in an afternoon. The fastest way into the AI Inner Circle membership.',
}

const WORKSHOPS = [
  {
    tag: 'Available now',
    title: 'AI Brain Workshop',
    price: '$49',
    meta: 'Self-paced · about 2–3 hours',
    body: 'Build an AI that knows your business, your voice, and how you think. Members start with this same setup.',
    href: '/ai-brain',
    cta: 'Get the workshop',
  },
]

export default function WorkshopsPage() {
  return (
    <>
      <Header />
      <main>

        {/* HERO */}
        <Section bg="paper" width="content" className="pt-20 md:pt-28">
          <div className="max-w-prose">
            <div className="eyebrow mb-6">Workshops</div>
            <h1 className="text-display font-semibold tracking-tight text-ink mb-6">
              Install one AI system in an afternoon.
            </h1>
            <p className="text-lead text-ink-muted">
              Each workshop is a low-cost, self-paced build. You finish with one working AI system, and a clear
              feel for how the membership runs.
            </p>
          </div>
        </Section>

        {/* WORKSHOP GRID */}
        <Section bg="grey" width="content">
          <div className="grid md:grid-cols-2 gap-8">
            {WORKSHOPS.map((w) => (
              <div key={w.title} className="border-2 border-accent bg-paper p-8 flex flex-col">
                <div className="eyebrow mb-4">{w.tag}</div>
                <h2 className="text-h2 font-semibold text-ink mb-2">{w.title}</h2>
                <div className="text-display font-semibold text-ink mb-1">{w.price}</div>
                <div className="text-small text-ink-muted mb-6">{w.meta}</div>
                <p className="text-body text-ink-soft mb-8 flex-1">{w.body}</p>
                <Button href={w.href} variant="primary">{w.cta}</Button>
              </div>
            ))}

            {/* Placeholder for future workshops */}
            <div className="border border-dashed border-rule bg-paper p-8 flex flex-col justify-center">
              <div className="eyebrow mb-4">Dropping soon</div>
              <h2 className="text-h2 font-semibold text-ink mb-2">More workshops</h2>
              <p className="text-body text-ink-soft">
                New standalone workshops drop regularly. Each one installs a single system you can put to work the same day.
              </p>
            </div>
          </div>
        </Section>

        {/* CROSS-SELL TO MEMBERSHIP */}
        <Section bg="paper" width="content">
          <div className="max-w-prose">
            <div className="eyebrow mb-4">The next step</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6">
              A workshop is a quick win. The membership is the whole system.
            </h2>
            <p className="text-lead text-ink-muted mb-8">
              Start with a workshop. When you want the full build, the membership adds a new department of AI Assistants
              each month and adds up to a working system by month six.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button href="/membership" variant="accent">Join the Waitlist</Button>
              <Button href="/membership" variant="ghost">See the membership →</Button>
            </div>
          </div>
        </Section>

      </main>
      <Footer />
    </>
  )
}
