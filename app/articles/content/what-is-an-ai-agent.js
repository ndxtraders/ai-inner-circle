import Link from "next/link"
import Section from "../../components/Section"

// Article body for /articles/what-is-an-ai-agent. Rendered by the dynamic route
// at app/articles/[slug]/page.js, which supplies <Header>, JSON-LD (including
// the FAQPage schema built from the faq field in app/content/articles.js), the
// FAQ section, the related-articles block, the CTA, and <Footer>. Metadata for
// this article lives in app/content/articles.js. Do not hand-copy it here.
export default function ArticleBody() {
  return (
    <>
        {/* Article header */}
        <Section bg="paper" width="prose">
          <div className="eyebrow mb-6">Articles</div>
          <h1 className="text-display font-semibold leading-tight mb-6">
            What Is an AI Agent? A Plain-English Definition for Founders
          </h1>
          <p className="text-small text-ink-muted">Jul 19, 2026 &middot; 5 min read</p>
        </Section>

        {/* Article body */}
        <Section bg="paper" width="prose">
          <div className="space-y-6 text-body text-ink leading-relaxed">

            <p className="text-lead text-ink leading-relaxed">An AI agent is software that uses AI to complete a whole job, not just answer a question. You give it a goal (&ldquo;follow up with every lead,&rdquo; &ldquo;triage my inbox&rdquo;) and it takes the steps itself: reading, deciding, drafting, updating your tools. For a small service business, think of it as an assistant with a job description, not a chatbot with answers.</p>
            <p className="text-small text-ink-muted italic">Last updated: July 2026 &middot; By Rev Vaughn, GTM Strategist &amp; Revenue Systems Architect</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">Why every definition you&rsquo;ve read felt useless</h2>
            <p>Search &ldquo;what is an AI agent&rdquo; and you get two flavors of answer: enterprise vendors explaining customer-support deflection for companies with 40-person service desks, or engineers explaining agent architectures with diagrams. Neither tells a 4-person consultancy what to do Monday morning.</p>
            <p>So here&rsquo;s the founder version, built on the one distinction that matters:</p>
            <p className="font-semibold text-ink">ChatGPT answers when you ask. An agent acts when the trigger fires.</p>
            <p>When you use ChatGPT, you are the process: you notice the lead, open the tab, paste the context, ask for the draft, copy it back, hit send, remember to follow up Thursday. The AI did the writing. You did the job.</p>
            <p>An agent owns the job. A lead comes in at 9:40pm. The agent reads the inquiry, checks it against your ideal-client criteria, drafts the reply in your voice, sends it (or stages it for your approval), logs it, and schedules the Thursday follow-up. You were at dinner.</p>
            <p>The difference isn&rsquo;t intelligence. It&rsquo;s ownership of a loop.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The job-description test</h2>
            <p>The fastest way to know if something is an agent, or if you even need one: try writing its job description. A real agent role reads like one you&rsquo;d hand a human hire.</p>
            <ul className="space-y-2">
              <li><strong>Inbox Triage Assistant:</strong> &ldquo;Read everything that arrives. Sort by what it is. Draft replies for the routine 80%. Flag the 3 things that need Rev.&rdquo;</li>
              <li><strong>Lead Follow-Up Assistant:</strong> &ldquo;Respond to every inquiry within 5 minutes. Qualify against our criteria. Book qualified calls. Politely route the rest.&rdquo;</li>
              <li><strong>Proposal Assistant:</strong> &ldquo;Turn a scoping call transcript into our proposal format, priced from our rules, same day.&rdquo;</li>
            </ul>
            <p>If you can&rsquo;t write the job description (the trigger, the steps, the done-state), you don&rsquo;t have an agent use case yet. You have a task you haven&rsquo;t systematized. That&rsquo;s not an insult; it&rsquo;s a diagnosis. It&rsquo;s also the most common reason founders&rsquo; first agents fail. More on that in <Link href="/articles/ai-priority-map" className="text-accent underline underline-offset-2 hover:no-underline">the Priority Map</Link>.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">What agents do well in a small firm in 2026, honestly</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-body text-left border-collapse">
                <thead>
                  <tr className="border-b border-rule">
                    <th scope="col" className="py-3 pr-6 font-semibold text-ink align-top">Job</th>
                    <th scope="col" className="py-3 pr-6 font-semibold text-ink align-top">Agent-ready today?</th>
                    <th scope="col" className="py-3 font-semibold text-ink align-top">The honest caveat</th>
                  </tr>
                </thead>
                <tbody className="text-ink-muted">
                  <tr className="border-b border-rule align-top">
                    <td className="py-3 pr-6 text-ink">Lead follow-up &amp; qualification</td>
                    <td className="py-3 pr-6"><strong className="text-ink">Yes</strong>, the classic first win</td>
                    <td className="py-3">Needs your qualification criteria written down</td>
                  </tr>
                  <tr className="border-b border-rule align-top">
                    <td className="py-3 pr-6 text-ink">Inbox triage &amp; drafted replies</td>
                    <td className="py-3 pr-6"><strong className="text-ink">Yes</strong></td>
                    <td className="py-3">Draft-first beats auto-send for client email</td>
                  </tr>
                  <tr className="border-b border-rule align-top">
                    <td className="py-3 pr-6 text-ink">Meeting/call &rarr; proposal or SOP</td>
                    <td className="py-3 pr-6"><strong className="text-ink">Yes</strong></td>
                    <td className="py-3">Quality tracks how you run your calls</td>
                  </tr>
                  <tr className="border-b border-rule align-top">
                    <td className="py-3 pr-6 text-ink">Content drafts in your voice</td>
                    <td className="py-3 pr-6"><strong className="text-ink">Yes, with a human pass</strong></td>
                    <td className="py-3">Unedited output reads like everyone else&rsquo;s AI</td>
                  </tr>
                  <tr className="border-b border-rule align-top">
                    <td className="py-3 pr-6 text-ink">Reports &amp; invoice chasing</td>
                    <td className="py-3 pr-6"><strong className="text-ink">Yes</strong></td>
                    <td className="py-3">The boring wins nobody brags about, and the highest ROI-per-effort</td>
                  </tr>
                  <tr className="border-b border-rule align-top">
                    <td className="py-3 pr-6 text-ink">Sales calls, negotiation</td>
                    <td className="py-3 pr-6"><strong className="text-ink">No</strong></td>
                    <td className="py-3">Judgment and relationships stay human</td>
                  </tr>
                  <tr className="align-top">
                    <td className="py-3 pr-6 text-ink">Strategy, pricing decisions</td>
                    <td className="py-3 pr-6"><strong className="text-ink">No</strong></td>
                    <td className="py-3">An agent executes your decision; it can&rsquo;t make it</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Two rows in that table make vendors uncomfortable, which is exactly why they belong there. If someone sells you an agent for the bottom two rows, keep your hand on your wallet.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">&ldquo;So do I need an agent, or is ChatGPT enough?&rdquo;</h2>
            <p>A useful rule: <strong>ChatGPT is enough until the same workflow shows up three times a week.</strong> A one-off proposal, a tricky email, a brainstorm: chat is perfect, don&rsquo;t over-build. But the moment a task is (1) recurring, (2) has a trigger you can name, and (3) follows rules you could write down, chat becomes the bottleneck. You&rsquo;re still the trigger, and you&rsquo;re busy.</p>
            <p>That&rsquo;s the graduation moment from tool to agent. Which workflow graduates first is a prioritization question, not a technology one. It&rsquo;s the exact thing the <Link href="/articles/ai-priority-map" className="text-accent underline underline-offset-2 hover:no-underline">AI Priority Map</Link> scores: 12 breaking points across four engines, ranked by what&rsquo;s bleeding.</p>
            <p><strong><Link href="/assessment" className="text-accent underline underline-offset-2 hover:no-underline">Take the AI Priority Map assessment &rarr;</Link></strong> takes 5 minutes and names your first agent&rsquo;s job description for you.</p>

          </div>
        </Section>
    </>
  )
}
