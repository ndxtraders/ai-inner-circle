import Link from "next/link"
import Section from "../../components/Section"

// Article body for /articles/why-slow-quotes-lose-deals. Rendered by the dynamic
// route at app/articles/[slug]/page.js, which supplies <Header>, JSON-LD
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
            Why Slow Quotes Lose Deals (and How to Send Proposals in Hours, Not Weeks)
          </h1>
          <p className="text-small text-ink-muted">Jul 19, 2026 &middot; 4 min read</p>
        </Section>

        {/* Article body */}
        <Section bg="paper" width="prose">
          <div className="space-y-6 text-body text-ink leading-relaxed">

            <p className="text-lead text-ink leading-relaxed">Slow quotes lose deals because buyer conviction peaks on the call and decays every day after it. In founder-led firms, proposals take days because only the founder can scope and price, and the founder is billable. The fix: systematize your pricing rules once, then let an AI Assistant turn the call transcript into a same-day proposal you approve.</p>
            <p className="text-small text-ink-muted italic">Last updated: July 2026 &middot; By Rev Vaughn, GTM Strategist &amp; Revenue Systems Architect</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The deal was won on the call. Then you un-won it.</h2>
            <p>You had the discovery call. It went well. The buyer said the words every founder loves: &ldquo;This sounds like exactly what we need. Send me a proposal.&rdquo;</p>
            <p>Then delivery week happened. The proposal needed a custom scope, the scope needed thinking, the thinking needed a quiet evening you didn&rsquo;t have. It went out six days later, polished and thorough. The reply came back: &ldquo;Thanks, we&rsquo;ve decided to go another direction.&rdquo;</p>
            <p>Nothing was wrong with the proposal. The timing was the proposal. Buyer conviction peaks in the last ten minutes of a good call and decays from the moment they hang up. Every quiet day tells the buyer a story: this is how responsive they&rsquo;ll be after I pay them. Meanwhile somebody else sent theirs on Tuesday.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">Why founder-led firms quote slowly</h2>
            <p>The slow part isn&rsquo;t the writing. It&rsquo;s the deciding. Every proposal reopens the same questions: What should this cost? What&rsquo;s included? Where do the boundaries sit? What did we charge the last similar client?</p>
            <p>That&rsquo;s decision debt. The pricing logic lives in your head, unwritten, so every quote is priced from scratch, and pricing from scratch requires the one resource with no slack: your focused attention. The proposal isn&rsquo;t waiting on words. It&rsquo;s waiting on decisions you&rsquo;ve already made five times before and never wrote down.</p>
            <p>Sound familiar? It&rsquo;s the Brain Trap wearing a sales hat, and it&rsquo;s why &ldquo;just write proposals faster&rdquo; advice fails. Speed isn&rsquo;t a typing problem.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The same-day proposal system</h2>
            <p>Three parts, in build order:</p>
            <ol className="space-y-2 list-decimal pl-6">
              <li><strong>Write the pricing rules once.</strong> Sit down for an afternoon and extract the logic you already use: your packages or day rates, what triggers a premium, what&rsquo;s always included, what&rsquo;s never included, the discounts you&rsquo;ll actually honor and the ones you regret. This document is the asset; everything else rides on it.</li>
              <li><strong>Run discovery calls knowing they&rsquo;re the input.</strong> Record the call. The scope conversation you&rsquo;re already having contains the proposal: goals, constraints, timeline, budget signals. Good discovery makes the proposal write itself, almost literally.</li>
              <li><strong>Let an AI Assistant assemble the draft.</strong> Transcript in, your pricing rules applied, your proposal format out, the same day. You review it, adjust the judgment calls, and send while the buyer still feels the call. Approval stays with you; assembly stops costing you an evening. (If this sounds like the job-description test in action, it is: <Link href="/articles/what-is-an-ai-agent" className="text-accent underline underline-offset-2 hover:no-underline">What Is an AI Agent? &rarr;</Link>)</li>
            </ol>
            <p>Founders who make this shift send proposals in hours. Not because they type faster, but because the deciding was done in advance.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The scope-creep bonus nobody expects</h2>
            <p>Written pricing rules fix a second bleed you weren&rsquo;t aiming at: scope creep. Projects grow past the quote when boundaries were never written down, and boundaries never got written down because every proposal was improvised under deadline.</p>
            <p>A proposal assembled from rules states its edges plainly: what&rsquo;s included, what&rsquo;s extra, what a change costs. When the client asks for &ldquo;one more thing&rdquo; in week three, the answer already exists in a document they signed. You don&rsquo;t have to be the bad guy; the proposal is. The same afternoon of pricing work buys you both faster quotes and defended margins.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The honest caveats</h2>
            <ul className="space-y-2">
              <li><strong>A fast bad proposal is still bad.</strong> If your close rate is low with slow, careful quotes, speed alone won&rsquo;t rescue it. Price-objection problems are offer problems.</li>
              <li><strong>Custom work still needs your judgment.</strong> The assistant assembles; the edge cases stay yours. Same-day means same-day reviewed, not unread.</li>
              <li><strong>The system is only as good as the rules.</strong> If your pricing changes with your mood, write the rules first or the assistant automates the inconsistency.</li>
            </ul>
            <p>Whether Slow Quotes is your worst breaking point, or just the most recent sting, is a diagnosis question. The <Link href="/articles/ai-priority-map" className="text-accent underline underline-offset-2 hover:no-underline">AI Priority Map &rarr;</Link> ranks it against the other 11 in about 5 minutes.</p>
            <p><strong><Link href="/assessment" className="text-accent underline underline-offset-2 hover:no-underline">Take the AI Priority Map assessment &rarr;</Link></strong> and see where quote speed ranks in your business.</p>

          </div>
        </Section>
    </>
  )
}
