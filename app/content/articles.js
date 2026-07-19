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
  {
    slug: 'ai-priority-map',
    title: 'The AI Priority Map: What to Automate First in Your Business',
    metaTitle:
      'The AI Priority Map: What to Automate First in Your Business | AI Inner Circle',
    subtitle: null,
    date: 'Jul 19, 2026',
    dateISO: '2026-07-19',
    readTime: '6 min read',
    // New flagship hub for the SEO cluster. Not marked hub:true because the
    // /articles index assumes a single content hub (future-of-ai-agents); the
    // sitemap weights this at 0.8 via sitemapPriority instead.
    sitemapPriority: 0.8,
    description:
      'Most founders pick AI tools first and problems second. Backwards. The AI Priority Map scores 12 breaking points across 4 business engines to show which bottleneck to fix first, and which AI Assistant fixes it.',
    excerpt:
      'Eleven AI tools bookmarked and a business that runs exactly like last year? That is a sequencing problem. The Priority Map scores 12 breaking points across four engines and tells you which bottleneck to fix first, and which AI Assistant fixes it.',
    image: 'https://aiinnercircle.com/opengraph-image',
    wordCount: 1100,
    faq: [
      {
        q: 'What should I automate first in my business?',
        a: 'Automate your worst revenue-adjacent breaking point first, usually lead follow-up or quote speed. Score all 12 breaking points across the four engines, then fix the single red one closest to revenue. One working AI Assistant beats four half-configured tools.',
      },
      {
        q: 'What is the AI Priority Map?',
        a: 'A 12-question diagnostic for founder-led service businesses. It scores four engines (Authority Engine, Pipeline Engine, Conversion Engine, Founder Freedom) and matches your highest-friction breaking point to the AI Assistant that fixes it.',
      },
      {
        q: 'Do I need to know AI to use it?',
        a: 'No. The map diagnoses business problems, not technology. You describe how your business runs today, and the output tells you what to fix in what order. The AI implementation comes after. Problem first, AI second.',
      },
      {
        q: 'Why not just buy the best AI tools?',
        a: 'Tools without a diagnosis automate whatever the demo shows, not what is bleeding. Founders who lead with tools accumulate subscriptions. Founders who lead with the breaking point remove a bottleneck, and the difference compounds every month.',
      },
      {
        q: 'How is this different from an AI audit?',
        a: 'The map is the free, self-serve first step. It tells you where the problem is. An audit goes deeper on how to fix your specific case. Run the map first. It may be all you need.',
      },
    ],
  },
  {
    slug: 'vacation-test',
    title: 'The Vacation Test: Can Your Business Run Without You?',
    metaTitle:
      'The Vacation Test: Can Your Business Run Without You? | AI Inner Circle',
    subtitle: null,
    date: 'Jul 19, 2026',
    dateISO: '2026-07-19',
    readTime: '5 min read',
    description:
      'Two weeks, no laptop, no check-ins. What breaks first? The Vacation Test scores how dependent your business is on you, and shows which AI Assistants take over the routine so you stop being the ceiling.',
    excerpt:
      'If you disappeared for two weeks, what breaks first? The Vacation Test scores how dependent your business is on you, and shows which AI Assistants take over the routine so you stop being the ceiling.',
    image: 'https://aiinnercircle.com/opengraph-image',
    wordCount: 1000,
    faq: [
      {
        q: 'What is the Vacation Test for business owners?',
        a: 'A diagnostic question: if you were unreachable for two weeks, what would break first? It measures how dependent your business is on you personally. Failing it means operations, knowledge, or decisions stop moving without you. Those are the three marks of a founder bottleneck.',
      },
      {
        q: 'How do I know if I am the bottleneck in my business?',
        a: 'Three signs: work only moves when you push it, replies and decisions queue behind your attention, and key processes exist only in your head. If your team’s most common question is “what should I do here?”, you are the bottleneck.',
      },
      {
        q: 'Can AI really run my business while I am away?',
        a: 'Not all of it, and be suspicious of anyone who says otherwise. AI Assistants reliably run the routine layer (lead follow-up, inbox triage, reports, invoice chasing) with judgment calls routed to a human. That is usually enough to pass the two-week test.',
      },
      {
        q: 'Should I hire someone or use AI to stop being the bottleneck?',
        a: 'Sequence it: systematize the decision, give the routine version to an AI Assistant, and hire humans for judgment and relationships. Most founder-led firms do it backwards. They hire before the process is defined, then wonder why the new hire asks them everything.',
      },
    ],
  },
  {
    slug: 'what-is-an-ai-agent',
    title: 'What Is an AI Agent? A Plain-English Definition for Founders',
    metaTitle:
      'What Is an AI Agent? A Plain-English Definition for Founders | AI Inner Circle',
    subtitle: null,
    date: 'Jul 19, 2026',
    dateISO: '2026-07-19',
    readTime: '5 min read',
    description:
      'Every definition of "AI agent" online was written for enterprises or engineers. Here is the plain-English version for a founder-led service business: what an agent is, what it isn’t, and whether you need one or just ChatGPT.',
    excerpt:
      'An AI agent completes a whole job, not just answers a question. The plain-English version for a founder-led service business: what an agent is, what it is not, and whether you need one or just ChatGPT.',
    image: 'https://aiinnercircle.com/opengraph-image',
    wordCount: 1000,
    faq: [
      {
        q: 'What is an AI agent in simple terms?',
        a: 'Software that completes a whole job with AI instead of answering one question. You define the goal and rules; it handles the trigger, the steps, and the follow-through, like an assistant with a job description rather than a chatbot with answers.',
      },
      {
        q: 'What is the difference between an AI agent and ChatGPT?',
        a: 'ChatGPT responds when you prompt it. You run the process. An agent runs the process itself: it is triggered by events (a lead arrives, an invoice goes overdue), takes multi-step action, and finishes the job without you driving each step.',
      },
      {
        q: 'Do small businesses really need AI agents?',
        a: 'Not always. If a workflow is occasional, chat tools are enough. Agents pay off on recurring, rule-based work with a clear trigger (lead follow-up, inbox triage, reporting, invoice chasing) where the founder is currently the bottleneck.',
      },
      {
        q: 'What should my first AI agent do?',
        a: 'Fix your worst revenue-adjacent bottleneck. For most founder-led firms that is lead follow-up speed or quote turnaround. Diagnose before you build: score your breaking points, pick the single worst one, give one agent that one job.',
      },
      {
        q: 'What can’t AI agents do?',
        a: 'Close deals, repair relationships, or make strategy and pricing decisions. Agents execute decisions you have systematized. If the “rule” for a task lives in your gut, systematize it first or keep it human.',
      },
    ],
  },
  {
    slug: 'ai-agent-vs-chatbot-vs-automation',
    title:
      'AI Agent vs. Chatbot vs. Automation vs. ChatGPT: Which One Do You Need?',
    metaTitle:
      'AI Agent vs. Chatbot vs. Automation vs. ChatGPT: What a Founder Needs | AI Inner Circle',
    subtitle: null,
    date: 'Jul 19, 2026',
    dateISO: '2026-07-19',
    readTime: '5 min read',
    description:
      'Four different tools get called "AI" and vendors blur them on purpose. A plain comparison for service-business founders: what each one does, what it costs, when it is enough, and when it breaks.',
    excerpt:
      'ChatGPT, chatbot, automation, AI agent: four tools called "AI" that do different jobs. A plain comparison for founders, with what each costs, when it is enough, and when it breaks.',
    image: 'https://aiinnercircle.com/opengraph-image',
    wordCount: 1000,
    faq: [
      {
        q: 'What is the difference between an AI agent and a chatbot?',
        a: 'A chatbot converses from a script or knowledge base, mostly answering visitor questions. An AI agent completes a job end to end: it is triggered by an event, makes rule-based decisions, drafts in your voice, and follows through. Chatbots talk. Agents work.',
      },
      {
        q: 'Is Zapier an AI agent?',
        a: 'Classic Zapier-style automation is not an agent: it moves data on triggers without judgment. It becomes agent-like when AI steps are added that read, decide, and write. The dividing line is whether the system makes decisions or just executes rules.',
      },
      {
        q: 'Do I need a chatbot for my consulting business?',
        a: 'Usually no. Chatbots earn their keep on high-traffic sites with repetitive pre-sale questions. Buyers of five-figure services want a fast, personal reply from you, which is a job for an AI agent working your inbox, not a widget on your homepage.',
      },
      {
        q: 'Can ChatGPT do what an AI agent does?',
        a: 'ChatGPT produces the same quality of thinking, but you supply the trigger, the context, and the follow-through every time. An agent packages that loop so it runs without you. If a workflow repeats three times a week, you have outgrown chat for that job.',
      },
    ],
  },
]

export const HUB_ARTICLE = ARTICLES.find((a) => a.hub)
export const SPOKE_ARTICLES = ARTICLES.filter((a) => !a.hub)
