import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'
import { HUB_ARTICLE, SPOKE_ARTICLES } from '../content/articles'

export const metadata = {
  alternates: { canonical: '/articles' },
  title: 'Articles — AI Teams for Consultants & Founders | AI Inner Circle',
  description:
    'Why one AI assistant always breaks down, and what a real AI team looks like for B2B consultants and founder-led brands. Start with the thesis, then the track on AI writing.',
}

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Section bg="paper" width="prose">
          <div className="eyebrow mb-6">Articles</div>
          <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
            Start with the thesis.
          </h1>
          <p className="text-lead text-ink-muted leading-relaxed">
            One idea drives everything here: stop bolting skills onto one AI assistant and start composing a team. Read the thesis first, then the track on why AI writing fails without one.
          </p>
        </Section>

        {/* Featured / hub article */}
        <Section bg="grey" width="content">
          <div className="border border-accent bg-paper p-8 md:p-10">
            <p className="eyebrow mb-4">Start Here</p>
            <div className="text-small text-ink-muted mb-3">
              {HUB_ARTICLE.date} &middot; {HUB_ARTICLE.readTime}
            </div>
            <h2 className="text-h2 font-semibold text-ink leading-snug mb-4">
              {HUB_ARTICLE.title}
            </h2>
            <p className="text-body text-ink-muted leading-relaxed mb-6">
              {HUB_ARTICLE.excerpt}
            </p>
            <Button href={`/articles/${HUB_ARTICLE.slug}`} variant="primary">
              Read Article &rarr;
            </Button>
          </div>
        </Section>

        {/* Spoke track */}
        <Section bg="grey" width="content">
          <div className="eyebrow mb-8">The AI Writing Track</div>
          <div className="space-y-12">
            {SPOKE_ARTICLES.map((article) => (
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
      </main>
      <Footer />
    </>
  )
}
