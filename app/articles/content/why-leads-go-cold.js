import Link from "next/link"
import Section from "../../components/Section"

// Article body for /articles/why-leads-go-cold. Rendered by the dynamic route at
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
            Why Your Leads Go Cold (and How AI Follow-Up Fixes Speed-to-Lead)
          </h1>
          <p className="text-small text-ink-muted">Jul 19, 2026 &middot; 4 min read</p>
        </Section>

        {/* Article body */}
        <Section bg="paper" width="prose">
          <div className="space-y-6 text-body text-ink leading-relaxed">

            <p className="text-lead text-ink leading-relaxed">Leads go cold in founder-led service firms because the founder is the follow-up system, and the founder is billable all day. Interest decays in hours, not days. The fix isn&rsquo;t discipline; it&rsquo;s removing yourself as the queue: an AI Assistant that replies to every inquiry within minutes, qualifies it against your rules, and books the call.</p>
            <p className="text-small text-ink-muted italic">Last updated: July 2026 &middot; By Rev Vaughn, GTM Strategist &amp; Revenue Systems Architect</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The stat everyone quotes, and the part they skip</h2>
            <p>You&rsquo;ve probably seen the research: <a href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads" className="text-accent underline underline-offset-2 hover:no-underline" target="_blank" rel="noopener noreferrer">a Harvard Business Review study</a> found firms that contacted leads within an hour were nearly seven times likelier to qualify them than firms that waited even an hour more. Every sales-tool vendor quotes it. Fine. It&rsquo;s real, and it&rsquo;s fifteen years old, and buyer patience has not improved since.</p>
            <p>Here&rsquo;s the part the vendors skip: that study was about companies with sales teams. You don&rsquo;t have a sales team. You have you. And that changes the diagnosis completely.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">You are the queue</h2>
            <p>Walk through what happens when a lead comes in at your firm:</p>
            <p>The inquiry lands in your inbox. You&rsquo;re on a client call. After the call you have forty minutes of notes to send, then another call. You see the lead at 4pm, think &ldquo;good one, I&rsquo;ll reply properly tonight,&rdquo; and tonight becomes tomorrow morning becomes Thursday.</p>
            <p>The lead didn&rsquo;t go cold; it sat in a queue with exactly one worker, and the worker was billed out. This is the Cold Fast breaking point, and it has a property most founders miss: <strong>it punishes your best weeks hardest.</strong> The busier you are with delivery, the slower you respond, so the more demand you have, the more of it you lose. Feast creates the famine.</p>
            <p>Discipline doesn&rsquo;t fix a structural problem. &ldquo;I&rsquo;ll check email more often&rdquo; is a resolution, not a system. The fix is taking the founder out of the first response entirely.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">What a real speed-to-lead fix looks like</h2>
            <p>Not an autoresponder. &ldquo;We got your message and will reply within 2 business days&rdquo; is speed-to-lead theater. Buyers read it as the queue notice it is. A working fix does four jobs, in order:</p>
            <ol className="space-y-2 list-decimal pl-6">
              <li><strong>Replies in minutes, in your voice.</strong> A real response that addresses what they asked, not a template about how much you value their inquiry.</li>
              <li><strong>Qualifies against your rules.</strong> Budget signals, fit signals, red flags: the same judgment you&rsquo;d apply, written down once. (If you can&rsquo;t write those rules down yet, that&rsquo;s your real bottleneck. <Link href="/articles/what-is-an-ai-agent" className="text-accent underline underline-offset-2 hover:no-underline">The job-description test &rarr;</Link> covers it.)</li>
              <li><strong>Books the call.</strong> Qualified leads get your calendar link inside the first reply, while the intent is hot.</li>
              <li><strong>Routes the rest politely.</strong> Bad-fit inquiries get a respectful no or a referral, and you never spent attention on them.</li>
            </ol>
            <p>That&rsquo;s a job description, which means it&rsquo;s agent work. (<Link href="/articles/ai-agent-vs-chatbot-vs-automation" className="text-accent underline underline-offset-2 hover:no-underline">What kind of tool does this take? The four-layer comparison &rarr;</Link> answers it: this is the agent layer, not a chatbot and not an autoresponder.)</p>
            <p><strong>The draft-first option, for the nervous:</strong> the agent can stage replies for one-tap approval instead of sending. You keep final say; the reply still goes out in minutes instead of Thursday, because approving takes seconds and writing took the time. Most founders start here and graduate to auto-send for the routine tier once they&rsquo;ve watched it work for a month.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The honest caveats</h2>
            <ul className="space-y-2">
              <li><strong>If leads are rare, speed isn&rsquo;t your problem.</strong> Responding in 90 seconds to two inquiries a month fixes nothing. That&rsquo;s a pipeline problem, a different engine with different fixes.</li>
              <li><strong>Speed can&rsquo;t rescue a weak offer.</strong> Fast follow-up on a mispriced service just gets you to &ldquo;no&rdquo; quicker. Fix the offer first; speed multiplies whatever&rsquo;s there.</li>
              <li><strong>Judgment stays with you.</strong> The agent qualifies by your rules. The sales conversation itself is yours.</li>
            </ul>
            <p>Which of those describes you is a diagnosis question. The <Link href="/articles/ai-priority-map" className="text-accent underline underline-offset-2 hover:no-underline">AI Priority Map &rarr;</Link> scores all 12 breaking points across four engines, Cold Fast included, and ranks yours in about 5 minutes.</p>
            <p><strong><Link href="/assessment" className="text-accent underline underline-offset-2 hover:no-underline">Take the AI Priority Map assessment &rarr;</Link></strong> and find out if Cold Fast is where you&rsquo;re bleeding.</p>

          </div>
        </Section>
    </>
  )
}
