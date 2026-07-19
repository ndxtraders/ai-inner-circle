import Link from "next/link"
import Section from "../../components/Section"

// Article body for /articles/what-not-to-automate-with-ai. Rendered by the
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
            5 Things You Should NOT Automate With AI (Yet)
          </h1>
          <p className="text-small text-ink-muted">Jul 19, 2026 &middot; 5 min read</p>
        </Section>

        {/* Article body */}
        <Section bg="paper" width="prose">
          <div className="space-y-6 text-body text-ink leading-relaxed">

            <p className="text-lead text-ink leading-relaxed">Five things a founder-led service firm should not automate: sales conversations with qualified buyers, pricing and strategy decisions, emotionally loaded client communication, any process you haven&rsquo;t systematized yet, and publishing AI content without a human pass. Each has a cheaper fix than automation, and each becomes automatable only after a specific condition is met.</p>
            <p className="text-small text-ink-muted italic">Last updated: July 2026 &middot; By Rev Vaughn, GTM Strategist &amp; Revenue Systems Architect</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">Why I&rsquo;m writing the anti-sales page</h2>
            <p>I build AI systems for founder-led businesses. It would be convenient for me to tell you everything automates. It doesn&rsquo;t, and the founders who try to automate everything end up back at square one with more subscriptions and less trust in the whole idea.</p>
            <p>Problem first, AI second also means: sometimes the answer is not AI. Five of those, with what to do instead.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">1. Sales conversations with qualified buyers</h2>
            <p>The pitch you&rsquo;ll hear: &ldquo;AI closers&rdquo; that handle objections and book the deal. What breaks: buyers of five-figure services are buying you, your judgment, your read of their situation. They can tell when the judgment is synthetic, and the moment they can tell is the moment trust leaves the deal.</p>
            <p><strong>Automate around it instead.</strong> Everything before the conversation (follow-up speed, qualification, scheduling) and after it (the proposal, per the same-day system) is fair game. The conversation itself is the founder&rsquo;s job until it&rsquo;s a trained human closer&rsquo;s job.</p>
            <p><strong>&ldquo;Yet&rdquo; arrives:</strong> for the sales call itself, close to never. That&rsquo;s fine. One great call a day beats ten synthetic ones.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">2. Pricing and strategy decisions</h2>
            <p>The temptation: ask the AI what to charge, which niche to pick, whether to raise rates. What breaks: an agent executes decisions; it cannot own them. AI advice on strategy averages the internet&rsquo;s opinion, and the internet hasn&rsquo;t seen your pipeline, your costs, or your appetite for risk. Automating a decision you haven&rsquo;t made just produces confident-sounding drift.</p>
            <p><strong>Decide, then delegate.</strong> Make the pricing call once, write it into rules, and hand the rules to an assistant to apply on every quote. Decision yours, execution automated.</p>
            <p><strong>&ldquo;Yet&rdquo; arrives:</strong> never for owning the decision; immediately for applying it.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">3. Bad news, conflict, and anything emotional</h2>
            <p>The temptation: the awkward emails are exactly the ones you want off your plate. What breaks: a client hearing about a delay, a dispute, or a miss can absorb the news or absorb the fact that you didn&rsquo;t write it personally, but not both. Delegated empathy reads as absence, and clients remember absence at the exact moments that decide renewals.</p>
            <p><strong>Automate the routine 80% instead</strong>, which buys back the time to write the hard 20% yourself, unhurried. The full trust ladder for client email, including what&rsquo;s safely automatable, is covered in <Link href="/articles/can-ai-answer-client-emails" className="text-accent underline underline-offset-2 hover:no-underline">Can AI Answer My Client Emails? &rarr;</Link>.</p>
            <p><strong>&ldquo;Yet&rdquo; arrives:</strong> never for the message itself. Drafting support in private, maybe; sending, no.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">4. Any process you haven&rsquo;t systematized</h2>
            <p>The most expensive mistake on this list, because it looks like progress. A workflow that lives in your head, changes weekly, and runs on vibes cannot be automated; it can only be imitated badly. The agent needs a trigger, rules, and a done-state, and if you can&rsquo;t write them down, what you have is not an automation candidate. It&rsquo;s an undocumented process, and automating chaos produces faster chaos.</p>
            <p><strong>Systematize first.</strong> Run the process manually while recording yourself, extract the rules, then automate the now-boring version. The systematizing step is also where founders discover the process was broken, which is much cheaper to learn before the automation than after.</p>
            <p><strong>&ldquo;Yet&rdquo; arrives:</strong> the day you can write the job description. (The test lives in <Link href="/articles/what-is-an-ai-agent" className="text-accent underline underline-offset-2 hover:no-underline">What Is an AI Agent? &rarr;</Link>.)</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">5. Publishing AI content without a human pass</h2>
            <p>The temptation: a month of content in an afternoon, straight to the feed. What breaks: your authority is the product, and readers, clients, and increasingly the AI search engines themselves discount content that reads machine-made. Raw AI output sounds like everyone else&rsquo;s raw AI output, and sounding like everyone is the one thing an authority business cannot afford.</p>
            <p><strong>Automate the assembly, keep the pass.</strong> Recording-to-draft pipelines save real hours; the voice pass and the judgment stay human. Ship less, sound like yourself.</p>
            <p><strong>&ldquo;Yet&rdquo; arrives:</strong> never for the final read. The pass gets faster as the system learns your voice; it doesn&rsquo;t disappear.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The pattern behind all five</h2>
            <p>Look at the list again. Every &ldquo;don&rsquo;t&rdquo; is a place where judgment, relationship, or an unmade decision sits inside the task. Every &ldquo;do instead&rdquo; moves the automation to the routine work around it. That boundary, not the tool list, is the entire craft of doing this well.</p>
            <p>Finding where that boundary sits in your business is what the <Link href="/articles/ai-priority-map" className="text-accent underline underline-offset-2 hover:no-underline">AI Priority Map &rarr;</Link> does: 12 breaking points across four engines, about 5 minutes, and the output tells you what to automate first and, just as usefully, what not to touch.</p>
            <p><strong><Link href="/assessment" className="text-accent underline underline-offset-2 hover:no-underline">Take the AI Priority Map assessment &rarr;</Link></strong> and get the map before you buy another tool.</p>

          </div>
        </Section>
    </>
  )
}
