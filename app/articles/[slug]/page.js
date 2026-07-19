import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Section from '../../components/Section'
import Button from '../../components/Button'
import { ARTICLES } from '../../content/articles'

// Body JSX lives per-slug in ./content/<slug>.js. Everything else on this
// page — metadata, JSON-LD, breadcrumbs, related articles, the CTA — is
// generated from app/content/articles.js, the single source of truth.
import futureBody from '../content/future-of-ai-agents-in-business'
import whyWritingBody from '../content/why-ai-writing-sucks'
import whyRoboticBody from '../content/why-chatgpt-sounds-robotic'
import destroysTrustBody from '../content/how-ai-content-destroys-trust'
import priorityMapBody from '../content/ai-priority-map'
import vacationTestBody from '../content/vacation-test'
import whatIsAgentBody from '../content/what-is-an-ai-agent'
import agentVsChatbotBody from '../content/ai-agent-vs-chatbot-vs-automation'
import agentCostBody from '../content/ai-agent-cost'
import aiVsVaBody from '../content/ai-assistant-vs-virtual-assistant'
import leadsGoColdBody from '../content/why-leads-go-cold'

const BODIES = {
  'future-of-ai-agents-in-business': futureBody,
  'why-ai-writing-sucks': whyWritingBody,
  'why-chatgpt-sounds-robotic': whyRoboticBody,
  'how-ai-content-destroys-trust': destroysTrustBody,
  'ai-priority-map': priorityMapBody,
  'vacation-test': vacationTestBody,
  'what-is-an-ai-agent': whatIsAgentBody,
  'ai-agent-vs-chatbot-vs-automation': agentVsChatbotBody,
  'ai-agent-cost': agentCostBody,
  'ai-assistant-vs-virtual-assistant': aiVsVaBody,
  'why-leads-go-cold': leadsGoColdBody,
}

const BASE = 'https://aiinnercircle.com'

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }) {
  const article = ARTICLES.find((a) => a.slug === params.slug)
  if (!article) return {}
  const url = `${BASE}/articles/${article.slug}`
  return {
    title: article.metaTitle,
    description: article.description,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: 'article',
      publishedTime: article.dateISO,
      images: [article.image],
    },
  }
}

function articleSchema(article, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.description,
    image: article.image,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    author: { '@id': `${BASE}/#person` },
    publisher: { '@id': `${BASE}/#organization` },
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    wordCount: article.wordCount,
    ...(article.subtitle ? { alternativeHeadline: article.subtitle } : {}),
  }
}

function faqSchema(article, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: article.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

function breadcrumbSchema(article, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: `${BASE}/articles` },
      { '@type': 'ListItem', position: 3, name: article.title, item: url },
    ],
  }
}

export default function ArticlePage({ params }) {
  const article = ARTICLES.find((a) => a.slug === params.slug)
  if (!article) notFound()

  const Body = BODIES[article.slug]
  if (!Body) notFound()

  const url = `${BASE}/articles/${article.slug}`
  const related = ARTICLES.filter((a) => a.slug !== article.slug)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(article, url)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(article, url)) }}
      />
      {article.faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(article, url)) }}
        />
      )}
      <Header />
      <main>
        <Body />

        {/* FAQ (rendered from articles.js so the visible copy and the
            FAQPage JSON-LD above can never drift apart) */}
        {article.faq && (
          <Section bg="paper" width="prose">
            <div className="border-t border-rule pt-10">
              <div className="eyebrow mb-8">FAQ</div>
              <div className="space-y-8">
                {article.faq.map((item) => (
                  <div key={item.q}>
                    <h2 className="text-h3 font-semibold text-ink leading-snug mb-2">
                      {item.q}
                    </h2>
                    <p className="text-body text-ink-muted leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        )}

        {/* Related articles */}
        <Section bg="paper" width="prose">
          <div className="border-t border-rule pt-10">
            <div className="eyebrow mb-8">Related articles</div>
            <div className="space-y-8">
              {related.map((a) => (
                <div key={a.slug} className="border-l-2 border-accent pl-6">
                  <div className="text-small text-ink-muted mb-2">
                    {a.date} &middot; {a.readTime}
                  </div>
                  <h3 className="text-h3 font-semibold text-ink leading-snug mb-2">
                    <Link
                      href={`/articles/${a.slug}`}
                      className="hover:text-accent transition-colors"
                    >
                      {a.title}
                    </Link>
                  </h3>
                  <p className="text-body text-ink-muted leading-relaxed">{a.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section bg="grey" width="content">
          <p className="eyebrow mb-6">Work with me</p>
          <h2 className="text-h1 font-semibold leading-tight mb-6">Find your hidden bottleneck.</h2>
          <p className="text-body text-ink-muted max-w-prose mb-10">
            A 60-minute Quick Win Consult to pinpoint what is blocking growth and remove it fast.
          </p>
          <Button href="/quick-win" variant="primary">
            Book a Quick Win Consult &rarr;
          </Button>
        </Section>
      </main>
      <Footer />
    </>
  )
}
