const BASE = 'https://aiinnercircle.com'

// Blocking an answer engine's bot removes the site from that engine's answers.
// Every AI crawler below is allowed deliberately: getting cited by AI search is
// the point. Two distinctions worth remembering before anyone "tightens" this:
//
//   - Blocking Google-Extended does NOT remove you from AI Overviews.
//   - Blocking GPTBot does NOT stop ChatGPT citing you; it fetches live pages
//     as ChatGPT-User, which is a separate agent.
//
// CCBot is training-only (Common Crawl) and cites nobody, so it is the one
// crawler with a real argument for exclusion. Left allowed for now — Common
// Crawl feeds a lot of downstream corpora and the reach is worth more than the
// training data is worth withholding.
const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'meta-externalagent',
  'CCBot',
]

// Post-conversion and orphaned pages. Not in the sitemap either; disallowing
// them keeps crawl budget on the pages that can actually rank or get cited.
const DISALLOW = ['/thank-you', '/voice-thank-you', '/ai-brain/access', '/ai', '/api/']

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: DISALLOW },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/', disallow: DISALLOW })),
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  }
}
