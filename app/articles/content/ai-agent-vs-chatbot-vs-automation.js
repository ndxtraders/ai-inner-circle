import Link from "next/link"
import Section from "../../components/Section"

// Article body for /articles/ai-agent-vs-chatbot-vs-automation. Rendered by the
// dynamic route at app/articles/[slug]/page.js, which supplies <Header>, JSON-LD
// (including the FAQPage schema built from the faq field in
// app/content/articles.js), the FAQ section, the related-articles block, the
// CTA, and <Footer>. Metadata for this article lives in
// app/content/articles.js. Do not hand-copy it here.
export default function ArticleBody() {
  return (
    <>
        {/* Article header */}
        <Section bg="paper" width="prose">
          <div className="eyebrow mb-6">Articles</div>
          <h1 className="text-display font-semibold leading-tight mb-6">
            AI Agent vs. Chatbot vs. Automation vs. ChatGPT: Which One Do You Need?
          </h1>
          <p className="text-small text-ink-muted">Jul 19, 2026 &middot; 5 min read</p>
        </Section>

        {/* Article body */}
        <Section bg="paper" width="prose">
          <div className="space-y-6 text-body text-ink leading-relaxed">

            <p className="text-lead text-ink leading-relaxed">Four tools get called &ldquo;AI&rdquo; and they do different jobs. ChatGPT answers questions when you ask. A chatbot talks to your visitors from a script. An automation moves data when a trigger fires, with no judgment. An AI agent owns a whole job: trigger, judgment, steps, and follow-through. Most founder-led firms need ChatGPT plus one agent, not all four.</p>
            <p className="text-small text-ink-muted italic">Last updated: July 2026 &middot; By Rev Vaughn, GTM Strategist &amp; Revenue Systems Architect</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">Why vendors blur these on purpose</h2>
            <p>Every tool on the market wants to be called an &ldquo;AI agent&rdquo; this year, the same way everything was &ldquo;powered by AI&rdquo; last year. The rebrand is profitable. A $30 chatbot sells better at $300 with &ldquo;agent&rdquo; in the name.</p>
            <p>The result: founders buy the wrong layer. They get a chatbot when they needed an automation, or stand up a complicated agent for a job a $20 chat subscription handles fine. Then they conclude AI doesn&rsquo;t work for their business.</p>
            <p>The categories are simple once you see them side by side.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The comparison, straight</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full min-w-[680px] text-body text-left border-collapse">
                <thead>
                  <tr className="border-b border-rule">
                    <th scope="col" className="py-3 pr-6 align-top"><span className="sr-only">Tool</span></th>
                    <th scope="col" className="py-3 pr-6 font-semibold text-ink align-top">What it does</th>
                    <th scope="col" className="py-3 pr-6 font-semibold text-ink align-top">When it&rsquo;s enough</th>
                    <th scope="col" className="py-3 pr-6 font-semibold text-ink align-top">When it breaks</th>
                    <th scope="col" className="py-3 font-semibold text-ink align-top">Rough cost</th>
                  </tr>
                </thead>
                <tbody className="text-ink-muted">
                  <tr className="border-b border-rule align-top">
                    <th scope="row" className="py-3 pr-6 font-semibold text-ink text-left align-top">ChatGPT (or Claude)</th>
                    <td className="py-3 pr-6">Answers, drafts, and thinks with you, one prompt at a time. You drive every step.</td>
                    <td className="py-3 pr-6">Occasional work: a tricky email, a one-off proposal, brainstorming.</td>
                    <td className="py-3 pr-6">The moment a task repeats weekly. You become the trigger, and you&rsquo;re busy.</td>
                    <td className="py-3">Free to ~$20/mo</td>
                  </tr>
                  <tr className="border-b border-rule align-top">
                    <th scope="row" className="py-3 pr-6 font-semibold text-ink text-left align-top">Chatbot</th>
                    <td className="py-3 pr-6">Chats with visitors from a script or knowledge base. Answers FAQs, captures contact info.</td>
                    <td className="py-3 pr-6">High-traffic sites with repetitive pre-sale questions.</td>
                    <td className="py-3 pr-6">Off-script questions, judgment calls, anything a founder-led firm&rsquo;s buyers ask before a five-figure deal.</td>
                    <td className="py-3">Free to a few hundred/mo</td>
                  </tr>
                  <tr className="border-b border-rule align-top">
                    <th scope="row" className="py-3 pr-6 font-semibold text-ink text-left align-top">Automation (Zapier-style)</th>
                    <td className="py-3 pr-6">Moves data between tools when a trigger fires. Form filled, row added, email tagged. No judgment.</td>
                    <td className="py-3 pr-6">Predictable plumbing: new lead into CRM, invoice into the books.</td>
                    <td className="py-3 pr-6">Anything requiring reading, weighing, or writing in your voice. It executes rules; it can&rsquo;t decide.</td>
                    <td className="py-3">~$20 to $100/mo</td>
                  </tr>
                  <tr className="align-top">
                    <th scope="row" className="py-3 pr-6 font-semibold text-ink text-left align-top">AI agent</th>
                    <td className="py-3 pr-6">Owns a whole job. Trigger fires, it reads, decides against your rules, drafts in your voice, acts, and follows through.</td>
                    <td className="py-3 pr-6">Recurring judgment work: lead follow-up, inbox triage, proposals, reporting.</td>
                    <td className="py-3 pr-6">Undefined jobs. If you can&rsquo;t write the job description, the agent fails. Also true judgment calls: pricing, strategy, relationships.</td>
                    <td className="py-3">~$50 to low hundreds/mo self-built; more custom-built</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Full cost breakdown with real numbers lives in its own article: <Link href="/articles/ai-agent-cost" className="text-accent underline underline-offset-2 hover:no-underline">How Much Does an AI Agent Cost?</Link> The short version: the agent layer costs less than most founders assume and more than the ads imply.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The one-sentence test for each layer</h2>
            <ul className="space-y-2">
              <li>Need an answer or a draft right now? <strong>Chat.</strong></li>
              <li>Same visitor questions all day on your site? <strong>Chatbot.</strong></li>
              <li>Same data moved between the same tools every week? <strong>Automation.</strong></li>
              <li>Same <em>judgment</em> applied every week (read, qualify, write, send, follow up)? <strong>Agent.</strong></li>
            </ul>
            <p>The word doing the work in that last line is judgment. Automations move things. Agents decide things, inside rules you wrote. That single difference is why agents are the layer that finally takes work off a founder&rsquo;s plate instead of adding a tool to babysit. (The full plain-English definition lives in <Link href="/articles/what-is-an-ai-agent" className="text-accent underline underline-offset-2 hover:no-underline">What Is an AI Agent?</Link>.)</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">What this looks like in a real service firm</h2>
            <p>A 5-person consultancy I&rsquo;d consider typical runs all four layers without ceremony:</p>
            <ul className="space-y-2">
              <li><strong>Chat</strong> for the daily one-offs: rewording a hard email, pressure-testing a scope.</li>
              <li><strong>No chatbot at all.</strong> Their buyers don&rsquo;t want a widget; they want a reply from a human, fast.</li>
              <li><strong>Automations</strong> doing the plumbing: inquiry form to CRM, signed proposal to invoice draft.</li>
              <li><strong>One agent</strong> on the highest-bleed job: reading every inbound lead, qualifying against their criteria, and getting a reply out inside five minutes with a booking link.</li>
            </ul>
            <p>Notice the chatbot row. Skipping a layer is a valid answer. The stack is a menu, not a checklist.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">Start with the bleed, not the tool</h2>
            <p>The wrong question is &ldquo;which of these should I buy?&rdquo; The right question is &ldquo;which job is bleeding?&rdquo; A slow-quote problem points to a different layer than a content problem or an inbox problem. That diagnosis is what the <Link href="/articles/ai-priority-map" className="text-accent underline underline-offset-2 hover:no-underline">AI Priority Map</Link> does: 12 breaking points across four engines, scored in about 5 minutes, with the fix matched to each.</p>
            <p><strong><Link href="/assessment" className="text-accent underline underline-offset-2 hover:no-underline">Take the AI Priority Map assessment &rarr;</Link></strong> and find out which layer your business needs first.</p>

          </div>
        </Section>
    </>
  )
}
