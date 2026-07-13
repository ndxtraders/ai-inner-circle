// Single source of truth for article metadata. The articles hub, the
// resources page, and each article's own JSON-LD all read from here instead
// of hand-copying title/date/excerpt three times and letting them drift.
//
// `hub: true` marks the thesis article featured at the top of /articles and
// /resources. Everything else is a spoke: one argument in the same track,
// listed oldest-idea-first under the hub.

export const ARTICLES = [
  {
    slug: 'future-of-ai-agents-in-business',
    hub: true,
    title: 'The Future of AI Agents in Business',
    date: 'Jan 2, 2026',
    dateISO: '2026-01-02',
    readTime: '9 min read',
    excerpt:
      'One big AI assistant always breaks down. The fix is not a better prompt. It is composition over inheritance: a coordinator running a team of small specialists, the same shift the whole AI industry is converging on.',
    wordCount: 1800,
  },
  {
    slug: 'why-ai-writing-sucks',
    title: 'Why AI Writing Sucks And What To Do About It',
    subtitle: null,
    date: 'May 26, 2025',
    dateISO: '2025-05-26',
    readTime: '4 min read',
    excerpt:
      'AI writing doesn’t fail because it’s artificial. It fails because it lets you settle. A single AI tool playing every role produces average output. Here’s what it looks like when you stop prompting and start commanding a team.',
    wordCount: 800,
  },
  {
    slug: 'why-chatgpt-sounds-robotic',
    title: 'Why ChatGPT Writing Will Always Sound Robotic',
    subtitle: 'And Why There’s Not a Damn Thing You Can Do About It',
    date: 'Feb 4, 2026',
    dateISO: '2026-02-04',
    readTime: '4 min read',
    excerpt:
      'ChatGPT isn’t optimized to sound human. It’s optimized to sound finished. That distinction explains why every fix you’ve tried has worn off within two paragraphs, and why this is a structural problem, not a prompting problem.',
    wordCount: 700,
  },
  {
    slug: 'how-ai-content-destroys-trust',
    title: 'How AI-Generated Content Is Destroying Trust',
    subtitle: 'And The Mathematical Solution No One’s Talking About',
    date: 'Apr 2, 2026',
    dateISO: '2026-04-02',
    readTime: '8 min read',
    excerpt:
      'AI writing has a redundancy problem. Three measurable patterns — antithesis density, copula saturation, fragment clustering — are eroding your credibility below the threshold of conscious detection. The fix isn’t better prompting. It’s a quality gate that counts.',
    wordCount: 1400,
  },
]

export const HUB_ARTICLE = ARTICLES.find((a) => a.hub)
export const SPOKE_ARTICLES = ARTICLES.filter((a) => !a.hub)
