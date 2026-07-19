import { ARTICLES } from '../content/articles'

// Generated /llms.txt. Replaces the hand-maintained public/llms.txt, whose
// Articles section had drifted — it was missing the hub article
// (future-of-ai-agents-in-business). The Articles list is now generated from
// app/content/articles.js so every published article appears automatically.
// The surrounding prose is preserved verbatim from the previous static file.

const BASE = 'https://aiinnercircle.com'

export const dynamic = 'force-static'

export function GET() {
  const articleLines = ARTICLES.map(
    (a) => `- [${a.title}](${BASE}/articles/${a.slug})`
  ).join('\n')

  const body = `# AI Inner Circle

> A membership for founder-led B2B service businesses that want AI Assistants doing the operational work while the founder stays the strategist. Built and run by Rev Vaughn, a GTM strategist and revenue systems architect.

AI Inner Circle teaches founders to build a folder-native team of domain-specific AI Assistants, coordinated by an orchestrator called Maestro, running locally on their own machine. The system is owned, not rented. Business memory compounds in the founder's own files instead of scattering across SaaS subscriptions.

The core argument: one general-purpose chatbot loaded with more and more skills gets worse, not better. A composed team of single-job Assistants under a coordinator holds up. The founder stays in the loop as the approver.

## Core pages

- [Home](${BASE}/): Revenue growth systems for B2B service providers.
- [For B2B Consultants](${BASE}/consultants): The membership. 24 AI Assistants across 6 departments, built over 6 months.
- [For Coaches](${BASE}/coaches): The coach track. 20 Assistants across 5 departments, plus 3 bonus hires.
- [AI Assessment](${BASE}/assessment): A free 12-question diagnostic that finds where AI fits in your business and what to do first. No email required.
- [Case Studies](${BASE}/case-studies): Client results.
- [Articles](${BASE}/articles): Writing on AI, voice, and revenue systems.

## Articles

${articleLines}

## About Rev Vaughn

Rev Vaughn is a GTM strategist and revenue systems architect. He has built campaigns and revenue systems for Grant Cardone, 10X Health, Cardone Ventures, SquadUp Summit, Copy Chief, and others.

Selected results:
- 144% more booked calls, with cost per lead below goal and 30% conversion, across the Cardone Ventures portfolio.
- $6.57M in total sales, converting over 40% of prospects to buyers, for the launch of SquadUp Summit.
- $1M+ in sales from the control campaign built for Grant Cardone's 10X Business Coach.
- A first launch sold out in 48 hours for Heather Rae Essentials, driven by email and social.

More at [revvaughn.com](https://revvaughn.com).

## Terminology

This project says "AI Assistants" for the specialized agents inside the program. The word "agent" appears in public writing because that is the term most people search for, but the product vocabulary is "Assistants."

## Contact

- [Contact](${BASE}/contact)
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
