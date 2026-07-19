// Single source of truth for article metadata. The articles hub, the
// resources page, each article's own page metadata, JSON-LD, breadcrumbs,
// related-articles block, the sitemap, and llms.txt all read from here
// instead of hand-copying title/date/excerpt and letting them drift.
//
// `hub: true` marks the thesis article featured at the top of /articles and
// /resources. Everything else is a spoke: one argument in the same track,
// listed oldest-idea-first under the hub.
//
// Field notes:
//   title       headline. Used for the H1, JSON-LD headline, breadcrumb,
//               related-article cards, and og:title.
//   metaTitle   full <title> tag, with brand suffix.
//   description meta description. Also used for og:description and the
//               BlogPosting JSON-LD description, so all three stay in sync.
//   subtitle    optional deck. Emitted as JSON-LD alternativeHeadline.
//   image       absolute URL used for og:image and JSON-LD image.
//   dateISO     machine date for datePublished/dateModified and the sitemap.

export const ARTICLES = [
  {
    slug: 'future-of-ai-agents-in-business',
    hub: true,
    title: 'The Future of AI Agents in Business',
    metaTitle: 'The Future of AI Agents in Business | AI Inner Circle',
    subtitle: null,
    date: 'Jan 2, 2026',
    dateISO: '2026-01-02',
    readTime: '9 min read',
    description:
      'One big AI assistant always breaks down. Here’s why composing a team of small specialists under a coordinator — not bolting more skills onto one assistant — is how founders actually get work off their plate.',
    excerpt:
      'One big AI assistant always breaks down. The fix is not a better prompt. It is composition over inheritance: a coordinator running a team of small specialists, the same shift the whole AI industry is converging on.',
    image: 'https://aiinnercircle.com/opengraph-image',
    wordCount: 1800,
  },
  {
    slug: 'why-ai-writing-sucks',
    title: 'Why AI Writing Sucks And What To Do About It',
    metaTitle: 'Why AI Writing Sucks And What To Do About It | Rev Vaughn',
    subtitle: null,
    date: 'May 26, 2025',
    dateISO: '2025-05-26',
    readTime: '4 min read',
    description:
      'AI writing doesn’t fail because it’s artificial. It fails because it lets you settle. Here’s the fix.',
    excerpt:
      'AI writing doesn’t fail because it’s artificial. It fails because it lets you settle. A single AI tool playing every role produces average output. Here’s what it looks like when you stop prompting and start commanding a team.',
    image: 'https://aiinnercircle.com/opengraph-image',
    wordCount: 800,
  },
  {
    slug: 'why-chatgpt-sounds-robotic',
    title: 'Why ChatGPT Writing Will Always Sound Robotic',
    metaTitle: 'Why ChatGPT Writing Will Always Sound Robotic | Rev Vaughn',
    subtitle: 'And Why There’s Not a Damn Thing You Can Do About It',
    date: 'Feb 4, 2026',
    dateISO: '2026-02-04',
    readTime: '4 min read',
    description:
      'ChatGPT isn’t optimized to sound human. It’s optimized to sound finished. And that’s a structural problem no amount of prompting can fix.',
    excerpt:
      'ChatGPT isn’t optimized to sound human. It’s optimized to sound finished. That distinction explains why every fix you’ve tried has worn off within two paragraphs, and why this is a structural problem, not a prompting problem.',
    image: 'https://aiinnercircle.com/Why-Chat-GPT-will-always-sound-robotic.webp',
    wordCount: 700,
  },
  {
    slug: 'how-ai-content-destroys-trust',
    title: 'How AI-Generated Content Is Destroying Trust',
    metaTitle: 'How AI-Generated Content Is Destroying Trust | Rev Vaughn',
    subtitle: 'And The Mathematical Solution No One’s Talking About',
    date: 'Apr 2, 2026',
    dateISO: '2026-04-02',
    readTime: '8 min read',
    description:
      'Three measurable patterns are eroding your credibility below the threshold of conscious detection. The fix isn’t better prompting — it’s a quality gate that counts.',
    excerpt:
      'AI writing has a redundancy problem. Three measurable patterns — antithesis density, copula saturation, fragment clustering — are eroding your credibility below the threshold of conscious detection. The fix isn’t better prompting. It’s a quality gate that counts.',
    image: 'https://aiinnercircle.com/Make-this-sound-more-human.webp',
    wordCount: 1400,
  },
]

export const HUB_ARTICLE = ARTICLES.find((a) => a.hub)
export const SPOKE_ARTICLES = ARTICLES.filter((a) => !a.hub)
