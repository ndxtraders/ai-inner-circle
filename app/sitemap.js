import { ARTICLES } from './content/articles'

const BASE = 'https://aiinnercircle.com'

// Indexable routes only. Deliberately excluded:
//   /ai-inner-circle, /map, /membership, /expert  — 301s (see next.config.js)
//   /thank-you, /voice-thank-you, /ai-brain/access — post-conversion pages
//
// Each row: [path, priority, changeFrequency, lastModified].
// lastModified is the date of the page's last meaningful content change
// (from git history), not the build time — a build-time `new Date()` told
// crawlers every page changed on every deploy, which trains them to ignore
// the signal. Article routes are generated from app/content/articles.js
// below, using each article's real publish date.
const STATIC_ROUTES = [
  ['/', 1.0, 'weekly', '2026-07-12'],
  ['/consultants', 0.9, 'weekly', '2026-07-15'],
  ['/coaches', 0.9, 'weekly', '2026-07-15'],
  ['/assessment', 0.8, 'monthly', '2026-07-12'],
  ['/consultants/assessment', 0.8, 'monthly', '2026-07-12'],
  ['/coaches/assessment', 0.8, 'monthly', '2026-07-12'],
  ['/articles', 0.8, 'weekly', '2026-07-12'],
  ['/ai-brain', 0.7, 'monthly', '2026-07-12'],
  ['/workshops', 0.7, 'monthly', '2026-07-12'],
  ['/case-studies', 0.7, 'monthly', '2026-07-12'],
  ['/growth-as-a-service', 0.6, 'monthly', '2026-07-12'],
  ['/ai-leverage', 0.6, 'monthly', '2026-07-12'],
  ['/resources', 0.6, 'monthly', '2026-07-12'],
  ['/ai-audit', 0.5, 'monthly', '2026-07-12'],
  ['/mentor', 0.5, 'monthly', '2026-07-12'],
  ['/quick-win', 0.5, 'monthly', '2026-07-12'],
  ['/voice', 0.5, 'monthly', '2026-07-12'],
  ['/contact', 0.5, 'yearly', '2026-07-12'],
  ['/privacy-terms', 0.3, 'yearly', '2026-07-12'],
]

export default function sitemap() {
  const staticEntries = STATIC_ROUTES.map(([path, priority, changeFrequency, lastModified]) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }))

  const articleEntries = ARTICLES.map((article) => ({
    url: `${BASE}/articles/${article.slug}`,
    lastModified: new Date(article.dateISO),
    changeFrequency: 'monthly',
    priority: article.hub ? 0.8 : 0.7,
  }))

  // Keep article URLs grouped right after the /articles hub page.
  const articlesIndex = staticEntries.findIndex((e) => e.url === `${BASE}/articles`)
  return [
    ...staticEntries.slice(0, articlesIndex + 1),
    ...articleEntries,
    ...staticEntries.slice(articlesIndex + 1),
  ]
}
