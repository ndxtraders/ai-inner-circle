import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'
import { ARTICLES } from '../content/articles'

export const metadata = {
  alternates: { canonical: '/articles' },
  // The visible hero headline is the thesis title, but the <title> tag stays
  // generic so it does not compete with the article's own page for that query.
  title: 'Articles | AI Inner Circle',
  description:
    'Why one AI assistant always breaks down, and what a real AI team looks like for founder-led service firms. Organized into tracks, from first principles to conversion and founder freedom.',
  openGraph: {
    title: 'Articles | AI Inner Circle',
    description:
      'Why one AI assistant always breaks down, and what a real AI team looks like for founder-led service firms. Organized into tracks, from first principles to conversion and founder freedom.',
    url: 'https://aiinnercircle.com/articles',
  },
}

// Tracks in display order. Each article carries a `track` field in
// app/content/articles.js; the index groups by it. Empty tracks (Pipeline
// Engine has no articles yet) are hidden automatically. Within-track order
// follows the ARTICLES array order.
const TRACKS = [
  {
    name: 'Start Here',
    description:
      'New to this? Start with what these tools are, what they cost, and what not to hand them.',
  },
  {
    name: 'Authority Engine',
    description:
      'Why one AI assistant writes like everyone else, and what a composed team does instead.',
  },
  {
    name: 'Pipeline Engine',
    description: 'Filling the top of the funnel with qualified demand.',
  },
  {
    name: 'Conversion Engine',
    description:
      'The two places deals quietly die: slow first replies and slow proposals.',
  },
  {
    name: 'Founder Freedom',
    description:
      'Get the routine off your plate so the business stops waiting on you.',
  },
]

const FEATURED = ARTICLES.find((a) => a.slug === 'ai-priority-map')

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Section bg="paper" width="prose">
          <div className="eyebrow mb-6">Articles</div>
          <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
            The Future of AI Agents in Business
          </h1>
          <p className="text-lead text-ink-muted leading-relaxed mb-8">
            One idea drives everything here: one big, super AI agent always breaks down. Stop bolting skills onto one assistant. Build an AI team instead. The fix is not a better prompt. It is composition over inheritance: a coordinator running a team of small specialists, the same shift the whole AI industry is converging on.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Button href="/articles/future-of-ai-agents-in-business" variant="primary">
              Read the Article &rarr;
            </Button>
            <Link
              href="/assessment"
              className="text-body text-ink-muted underline underline-offset-2 hover:text-accent transition-colors"
            >
              or take the AI Priority Map &rarr;
            </Link>
          </div>
        </Section>

        {/* Featured: start with the map */}
        {FEATURED && (
          <Section bg="grey" width="content">
            <div className="border border-accent bg-paper p-8 md:p-10">
              <p className="eyebrow mb-4">Start with the map</p>
              <div className="text-small text-ink-muted mb-3">
                {FEATURED.date} &middot; {FEATURED.readTime}
              </div>
              <h2 className="text-h2 font-semibold text-ink leading-snug mb-4">
                {FEATURED.title}
              </h2>
              <p className="text-body text-ink-muted leading-relaxed mb-6">
                {FEATURED.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Button href={`/articles/${FEATURED.slug}`} variant="primary">
                  Read Article &rarr;
                </Button>
                <Link
                  href="/assessment"
                  className="text-body text-ink-muted underline underline-offset-2 hover:text-accent transition-colors"
                >
                  Take the assessment &rarr;
                </Link>
              </div>
            </div>
          </Section>
        )}

        {/* Tracks */}
        {TRACKS.map((track) => {
          const items = ARTICLES.filter((a) => a.track === track.name)
          if (items.length === 0) return null
          return (
            <Section key={track.name} bg="grey" width="content">
              <div className="eyebrow mb-3">{track.name}</div>
              <p className="text-body text-ink-muted leading-relaxed max-w-prose mb-8">
                {track.description}
              </p>
              <div className="space-y-12">
                {items.map((article) => (
                  <div key={article.slug} className="border-l-2 border-accent pl-6 md:pl-8">
                    <div className="text-small text-ink-muted mb-3">
                      {article.date} &middot; {article.readTime}
                    </div>
                    <h2 className="text-h2 font-semibold text-ink leading-snug mb-2">
                      {article.title}
                    </h2>
                    {article.subtitle && (
                      <p className="text-body text-ink-muted italic mb-4">{article.subtitle}</p>
                    )}
                    <p className="text-body text-ink-muted leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                    <Button href={`/articles/${article.slug}`} variant="primary">
                      Read Article &rarr;
                    </Button>
                  </div>
                ))}
              </div>
            </Section>
          )
        })}
      </main>
      <Footer />
    </>
  )
}
