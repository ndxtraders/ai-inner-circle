import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'
import { HUB_ARTICLE } from '../content/articles'

export const metadata = {
  alternates: { canonical: '/resources' },
  title: 'Resources — Free Tools for B2B Consultants & Coaches | AI Inner Circle',
  description:
    'Free assessments, frameworks, and AI skills for B2B consultants and founder-led brands who want an AI team, not another AI tool.',
}

const RESOURCES = [
  {
    name: 'AI Brain Workshop',
    tagline: 'Build an AI that knows your business, your voice, and how you think.',
    desc: 'A self-paced workshop that sets up a business brain folder your AI reads before every task, so nothing it produces sounds generic.',
    cta: 'Start the AI Brain Workshop',
    href: '/ai-brain',
  },
  {
    name: 'DISC Voice',
    tagline: 'AI writing that sounds like a human. Not a robot.',
    desc: 'A plug-and-play Claude skill that installs five distinct behavioral voices into your AI workflow. Ships with a mini-brief template and a 15-minute install workshop.',
    cta: 'Get the Voice Skill',
    href: '/voice',
  },
]

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Section bg="paper" width="prose" className="pt-20 md:pt-28">
          <div className="eyebrow mb-6">Founder's Resources</div>
          <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
            Tools Built for the AI Team, Not the AI Tool.
          </h1>
          <p className="text-lead text-ink-muted leading-relaxed">
            Free assessments, frameworks, and AI skills I use with consultants, coaches, and founder-led brands.
          </p>
        </Section>

        {/* Free Assessment */}
        <Section bg="paper" width="content">
          <div className="border border-accent bg-paper-grey p-8 md:p-10">
            <p className="eyebrow mb-4">Free, 5 Minutes, No Email Required</p>
            <h2 className="text-h2 font-semibold text-ink leading-snug mb-4">
              The AI Priority Map
            </h2>
            <p className="text-body text-ink-muted leading-relaxed mb-6">
              Find the biggest breaking points costing your business time, clients, and revenue, and the exact AI Assistant that fixes each one. Instant results.
            </p>
            <Button href="/assessment" variant="primary">
              Take the Free Assessment &rarr;
            </Button>
          </div>
        </Section>

        {/* Articles */}
        <Section bg="grey" width="prose">
          <div className="eyebrow mb-6">Articles</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6">
            Start with the thesis.
          </h2>
          <p className="text-lead text-ink-muted leading-relaxed mb-10">
            Why one AI assistant always breaks down, and what a real AI team looks like.
          </p>

          <div className="border border-accent bg-paper p-8 mb-10">
            <p className="eyebrow mb-4">Featured Article</p>
            <h3 className="text-h2 font-semibold text-ink leading-snug mb-3">
              {HUB_ARTICLE.title}
            </h3>
            <p className="text-body text-ink-muted leading-relaxed mb-6">
              {HUB_ARTICLE.excerpt}
            </p>
            <Button href={`/articles/${HUB_ARTICLE.slug}`} variant="primary">
              Read Article &rarr;
            </Button>
          </div>

          <Button href="/articles" variant="secondary">Browse All Articles &rarr;</Button>
        </Section>

        {/* Case Studies */}
        <Section bg="paper" width="prose">
          <div className="eyebrow mb-6">Case Studies</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6">
            See the work in action.
          </h2>
          <p className="text-lead text-ink-muted leading-relaxed mb-10">
            Real campaigns, real numbers. Case studies from founder-led brands across direct response, lifecycle, and launch.
          </p>
          <Button href="/case-studies" variant="primary">View Case Studies &rarr;</Button>
        </Section>

        {/* Resource list */}
        <Section bg="grey" width="content">
          <div className="eyebrow mb-4">The AI Library</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-12">
            Featured Skills.
          </h2>
          <div className="space-y-10">
            {RESOURCES.map((item, i) => (
              <div
                key={i}
                className="border-l-2 border-accent pl-6 md:pl-8"
              >
                <h3 className="text-h2 font-semibold text-ink leading-snug mb-3">
                  {item.name}
                </h3>
                <p className="text-lead text-ink-muted mb-4 leading-relaxed">
                  {item.tagline}
                </p>
                <p className="text-body text-ink-soft leading-relaxed mb-6">
                  {item.desc}
                </p>
                <Button href={item.href} variant="primary">
                  {item.cta}
                </Button>
              </div>
            ))}
          </div>
          <p className="text-body text-ink-faint mt-14 italic">
            New resources added regularly. Check back or take the free assessment to get matched to your first move.
          </p>
        </Section>
      </main>
      <Footer />
    </>
  )
}
