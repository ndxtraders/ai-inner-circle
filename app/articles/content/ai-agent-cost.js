import Link from "next/link"
import Section from "../../components/Section"

// Article body for /articles/ai-agent-cost. Rendered by the dynamic route at
// app/articles/[slug]/page.js, which supplies <Header>, JSON-LD (including the
// FAQPage schema built from the faq field in app/content/articles.js), the FAQ
// section, the related-articles block, the CTA, and <Footer>. Metadata for this
// article lives in app/content/articles.js. Do not hand-copy it here.
export default function ArticleBody() {
  return (
    <>
        {/* Article header */}
        <Section bg="paper" width="prose">
          <div className="eyebrow mb-6">Articles</div>
          <h1 className="text-display font-semibold leading-tight mb-6">
            How Much Does an AI Agent Cost? Real Numbers for a Service Business
          </h1>
          <p className="text-small text-ink-muted">Jul 19, 2026 &middot; 5 min read</p>
        </Section>

        {/* Article body */}
        <Section bg="paper" width="prose">
          <div className="space-y-6 text-body text-ink leading-relaxed">

            <p className="text-lead text-ink leading-relaxed">For a founder-led service business in 2026, a useful AI agent costs $20 to $100 per month self-built on top of a chat subscription, $100 to $500 per month for off-the-shelf agent platforms, or $3,000 to $15,000 up front for custom builds with managed setup. Add 30 to 50% over sticker price for real running costs. A fourth, hybrid path (expert-built assistants you install yourself) lands custom-tier quality at subscription cost.</p>
            <p className="text-small text-ink-muted italic">Last updated: July 2026 &middot; By Rev Vaughn, GTM Strategist &amp; Revenue Systems Architect</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">Why every answer you&rsquo;ve found is useless</h2>
            <p>Ask this question and you get quotes from $21 a month to $300,000, sometimes in <a href="https://www.braincuber.com/blog/ai-agents-pricing-guide-what-does-it-actually-cost" className="text-accent underline underline-offset-2 hover:no-underline" target="_blank" rel="noopener noreferrer">the same pricing guide</a>. Both numbers are real. Neither answers your question, because they describe different buyers. The $21 figure is a seat on someone&rsquo;s copilot. The $300K figure is an enterprise workflow build. You are neither.</p>
            <p>So here are the numbers for the business you actually run: founder-led, service-based, somewhere between solo and ten people.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The three tiers, priced</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full min-w-[680px] text-body text-left border-collapse">
                <thead>
                  <tr className="border-b border-rule">
                    <th scope="col" className="py-3 pr-6 font-semibold text-ink align-top">Tier</th>
                    <th scope="col" className="py-3 pr-6 font-semibold text-ink align-top">What it is</th>
                    <th scope="col" className="py-3 pr-6 font-semibold text-ink align-top">Realistic 2026 cost</th>
                    <th scope="col" className="py-3 font-semibold text-ink align-top">Right for</th>
                  </tr>
                </thead>
                <tbody className="text-ink-muted">
                  <tr className="border-b border-rule align-top">
                    <th scope="row" className="py-3 pr-6 font-semibold text-ink text-left align-top">Self-built</th>
                    <td className="py-3 pr-6">An agent you assemble on a chat platform (Claude, ChatGPT) with skills, memory, and your own rules</td>
                    <td className="py-3 pr-6">$20 to $100/mo total</td>
                    <td className="py-3">Founders willing to spend setup hours instead of setup dollars</td>
                  </tr>
                  <tr className="border-b border-rule align-top">
                    <th scope="row" className="py-3 pr-6 font-semibold text-ink text-left align-top">Off-the-shelf platform</th>
                    <td className="py-3 pr-6">A subscription agent product for one job (email triage, lead follow-up, scheduling)</td>
                    <td className="py-3 pr-6">$100 to $500/mo per meaningful job, per <a href="https://www.advantechits.com/insights/how-much-do-ai-agents-cost-for-a-small-business" className="text-accent underline underline-offset-2 hover:no-underline" target="_blank" rel="noopener noreferrer">multiple 2026 guides</a></td>
                    <td className="py-3">Founders who want one bleeding job handled this month</td>
                  </tr>
                  <tr className="align-top">
                    <th scope="row" className="py-3 pr-6 font-semibold text-ink text-left align-top">Custom build</th>
                    <td className="py-3 pr-6">An agency or developer builds and manages agents for your workflows</td>
                    <td className="py-3 pr-6">$3,000 to $15,000+ setup, per <a href="https://www.advantechits.com/insights/how-much-do-ai-agents-cost-for-a-small-business" className="text-accent underline underline-offset-2 hover:no-underline" target="_blank" rel="noopener noreferrer">industry pricing data</a>, plus monthly management</td>
                    <td className="py-3">Firms past $1M revenue with volume that justifies it</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>My honest read on those tiers: most founder-led firms should start in the first one, and almost none should start in the third. The first tier is not the cheap seats. It&rsquo;s where you learn what the job description for your agent even is, which is the thing the custom shops charge five figures to discover for you.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The hybrid the pricing guides don&rsquo;t list</h2>
            <p>Look at what the three tiers are really trading: money against your hours. Custom builds cost dollars because an expert does the thinking. Self-built costs hours because the expert is you, learning as you go. The market prices those as your only two choices.</p>
            <p>There&rsquo;s a fourth structure: <strong>curated assistants, built by an expert, installed by you.</strong> The job descriptions, prompts, and rules arrive already crafted and tested, which is the expensive thinking from the custom tier. You run them on your own $20-a-month chat subscription, which is the cheap infrastructure from the self-built tier. What gets cut isn&rsquo;t the expertise; it&rsquo;s the per-client build fee.</p>
            <p>Full disclosure: this hybrid is the model behind our AI Inner Circle membership ($199 a month, a new expert-built assistant installed each week, each one aimed at a specific breaking point). I&rsquo;d describe the structure even if it weren&rsquo;t ours, because the cost-to-quality ratio beats both tiers it borrows from. <Link href="/consultants" className="text-accent underline underline-offset-2 hover:no-underline">See how the membership works &rarr;</Link></p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The hidden costs nobody quotes</h2>
            <p>Sticker price is not total price. <a href="https://www.nocodefinder.com/blog-posts/ai-agent-pricing" className="text-accent underline underline-offset-2 hover:no-underline" target="_blank" rel="noopener noreferrer">Industry analyses</a> consistently find hidden costs add 30 to 50% on top of any subscription or build fee, and some recommend budgeting <a href="https://thecrunch.io/ai-agents-price/" className="text-accent underline underline-offset-2 hover:no-underline" target="_blank" rel="noopener noreferrer">1.5x the headline price</a> for true cost of ownership. Four line items to expect:</p>
            <ol className="space-y-2 list-decimal pl-6">
              <li><strong>Usage costs.</strong> API and token consumption scale with volume. A quiet month is cheap. A busy month is not.</li>
              <li><strong>Integration upkeep.</strong> Your CRM updates, an API changes, a connector breaks. Somebody reconnects the plumbing, and that somebody bills hours or is you.</li>
              <li><strong>Drift.</strong> Agents tuned once and never revisited get slowly worse as your offer, pricing, and market shift. Budget a monthly review pass.</li>
              <li><strong>Your setup time.</strong> The self-built tier trades dollars for hours. Count them honestly: a working first agent is a weekend, not an afternoon.</li>
            </ol>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The comparison founders are really making</h2>
            <p>Nobody buys an agent in a vacuum. The real alternative is hiring, and the math is lopsided. A dedicated offshore VA runs <a href="https://www.myoutdesk.com/blog/virtual-assistant-cost/" className="text-accent underline underline-offset-2 hover:no-underline" target="_blank" rel="noopener noreferrer">$1,988 to $3,000 per month</a>; US-based support runs <a href="https://www.wishup.co/blog/how-much-does-a-virtual-assistant-cost/" className="text-accent underline underline-offset-2 hover:no-underline" target="_blank" rel="noopener noreferrer">$3,000 to $7,000</a>. An agent handling the same routine layer runs one to two orders of magnitude cheaper.</p>
            <p>That gap is real, and it&rsquo;s also not the whole story. The agent only wins on work you can write rules for. Judgment, relationships, and taste stay human, which is why the right sequence is usually agent first for the routine, human hire second for the judgment. <Link href="/articles/ai-assistant-vs-virtual-assistant" className="text-accent underline underline-offset-2 hover:no-underline">The full AI-vs-VA breakdown is here &rarr;</Link></p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">When an AI agent is a waste of money</h2>
            <p>Straight talk, because the vendors won&rsquo;t say it:</p>
            <ul className="space-y-2">
              <li><strong>The job repeats less than weekly.</strong> A $20 chat subscription handles occasional work. See <Link href="/articles/ai-agent-vs-chatbot-vs-automation" className="text-accent underline underline-offset-2 hover:no-underline">the four-layer comparison &rarr;</Link> for which tool fits which job.</li>
              <li><strong>You can&rsquo;t write the job description.</strong> No trigger, no rules, no done-state means no agent, at any price. Systematize first.</li>
              <li><strong>The problem is a decision, not a task.</strong> Mispriced offer, wrong niche, unclear positioning: an agent automates the symptom and leaves the disease.</li>
            </ul>
            <p>That last failure mode is the expensive one, and it&rsquo;s a diagnosis problem. The <Link href="/articles/ai-priority-map" className="text-accent underline underline-offset-2 hover:no-underline">AI Priority Map &rarr;</Link> scores 12 breaking points across four engines and tells you whether your worst one is even an automation problem before you spend a dollar on tooling.</p>
            <p><strong><Link href="/assessment" className="text-accent underline underline-offset-2 hover:no-underline">Take the AI Priority Map assessment &rarr;</Link></strong> first. It&rsquo;s free, and it may save you a subscription.</p>

          </div>
        </Section>
    </>
  )
}
