const BASE = 'https://aiinnercircle.com'

// Indexable routes only. Deliberately excluded:
//   /ai-inner-circle, /map, /membership, /expert  — 301s (see next.config.js)
//   /thank-you, /voice-thank-you, /ai-brain/access — post-conversion pages
const ROUTES = [
  ['/', 1.0, 'weekly'],
  ['/consultants', 0.9, 'weekly'],
  ['/coaches', 0.9, 'weekly'],
  ['/assessment', 0.8, 'monthly'],
  ['/consultants/assessment', 0.8, 'monthly'],
  ['/coaches/assessment', 0.8, 'monthly'],
  ['/articles', 0.8, 'weekly'],
  ['/articles/future-of-ai-agents-in-business', 0.8, 'monthly'],
  ['/articles/how-ai-content-destroys-trust', 0.7, 'monthly'],
  ['/articles/why-chatgpt-sounds-robotic', 0.7, 'monthly'],
  ['/articles/why-ai-writing-sucks', 0.7, 'monthly'],
  ['/ai-brain', 0.7, 'monthly'],
  ['/workshops', 0.7, 'monthly'],
  ['/case-studies', 0.7, 'monthly'],
  ['/growth-as-a-service', 0.6, 'monthly'],
  ['/ai-leverage', 0.6, 'monthly'],
  ['/resources', 0.6, 'monthly'],
  ['/ai-audit', 0.5, 'monthly'],
  ['/mentor', 0.5, 'monthly'],
  ['/quick-win', 0.5, 'monthly'],
  ['/voice', 0.5, 'monthly'],
  ['/contact', 0.5, 'yearly'],
  ['/privacy-terms', 0.3, 'yearly'],
]

export default function sitemap() {
  const lastModified = new Date()

  return ROUTES.map(([path, priority, changeFrequency]) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
