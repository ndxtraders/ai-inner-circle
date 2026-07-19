import Link from "next/link"
import Section from "../../components/Section"

// Article body for /articles/ai-priority-map. Rendered by the dynamic route at
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
            The AI Priority Map: What to Automate First in Your Business
          </h1>
          <p className="text-small text-ink-muted">Jul 19, 2026 &middot; 6 min read</p>
        </Section>

        {/* Article body */}
        <Section bg="paper" width="prose">
          <div className="space-y-6 text-body text-ink leading-relaxed">

            <p className="text-lead text-ink leading-relaxed">The AI Priority Map is a diagnostic framework for founder-led service businesses. Instead of asking &ldquo;which AI tool should I buy?&rdquo;, it scores 12 breaking points across four business engines (Authority Engine, Pipeline Engine, Conversion Engine, Founder Freedom) and tells you which bottleneck is costing you the most right now, plus which AI Assistant fixes it first.</p>
            <p className="text-small text-ink-muted italic">Last updated: July 2026 &middot; By Rev Vaughn, GTM Strategist &amp; Revenue Systems Architect</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The problem isn&rsquo;t AI. It&rsquo;s the order you&rsquo;re doing it in.</h2>
            <p>Every founder I talk to has the same browser situation: eleven AI tools bookmarked, three subscriptions they forgot they&rsquo;re paying for, and a business that runs exactly the way it did last year.</p>
            <p>That&rsquo;s not a discipline problem. It&rsquo;s a sequencing problem. &ldquo;Learn AI&rdquo; puts the tool first and your business second, so you end up automating whatever the tool demos well instead of whatever is bleeding.</p>
            <p>Problem first. AI second. That&rsquo;s the entire philosophy, and the Priority Map is how you run it.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The four engines (and the 12 breaking points)</h2>
            <p>Every founder-led service business runs on the same four engines. Each one has three predictable failure modes. I call them breaking points. Score yourself honestly and the priority order falls out on its own.</p>

            <p className="font-semibold text-ink">1. Authority Engine: do buyers notice you and trust you?</p>
            <ul className="space-y-2">
              <li><strong>The Lookalike.</strong> When a buyer compares you to competitors, you sound basically the same. Nothing makes you the obvious choice, so you compete on price.</li>
              <li><strong>Content Grind.</strong> Creating content eats time you don&rsquo;t have, so you stop publishing. Out of sight, you fall out of the buying conversation.</li>
              <li><strong>Invisible Online.</strong> People search for what you offer (Google, social, AI) and you barely show up. Buyers find your competitors instead.</li>
            </ul>

            <p className="font-semibold text-ink">2. Pipeline Engine: does your calendar fill without luck?</p>
            <ul className="space-y-2">
              <li><strong>Empty Calendar.</strong> No reliable way to find new qualified buyers every week. Pipeline runs on referrals and hope.</li>
              <li><strong>Ignored Outreach.</strong> Your DMs and emails read like everyone else&rsquo;s, so they start no conversations.</li>
              <li><strong>Feast or Famine.</strong> Lead flow swings between slammed and dead, with no system you can switch on.</li>
            </ul>

            <p className="font-semibold text-ink">3. Conversion Engine: does interest become revenue, fast?</p>
            <ul className="space-y-2">
              <li><strong>Price Objection.</strong> Prospects go quiet after the quote, or tell you you&rsquo;re too expensive. You discount to save deals you should win.</li>
              <li><strong>Cold Fast.</strong> Follow-up is slow or inconsistent, so interested buyers slip away through neglect.</li>
              <li><strong>Slow Quotes.</strong> Proposals take days, and buyers go with whoever moved first. The #1 deal killer in B2B.</li>
            </ul>

            <p className="font-semibold text-ink">4. Founder Freedom: can the business run a step without you?</p>
            <ul className="space-y-2">
              <li><strong>The Vacation Test.</strong> If you leave for two weeks, revenue drops or operations slow down. You own a job, not an asset.</li>
              <li><strong>The Brain Trap.</strong> Core processes live only in your head, so nothing can be delegated and everything routes back to you.</li>
              <li><strong>The Bottleneck.</strong> Every important decision runs through you before anything moves. The business moves at the speed of your attention.</li>
            </ul>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">How to read your map</h2>
            <p>Three rules make the priority order obvious.</p>
            <p><strong>Red beats yellow.</strong> A breaking point at 100% friction (the one that made you wince reading the list) outranks five mild annoyances. You&rsquo;re not building a tidy automation portfolio. You&rsquo;re stopping the bleeding.</p>
            <p><strong>Revenue-adjacent beats convenient.</strong> Cold Fast and Slow Quotes convert directly into booked calls and signed proposals. Fix those before the internal stuff. A faster pipeline pays for every automation that comes after it.</p>
            <p><strong>One at a time.</strong> The fastest way to fail at AI is deploying four agents in a month and maintaining none of them. One breaking point, one AI Assistant, running reliably. Then the next. The compounding comes from the sequence, not the speed.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">What &ldquo;an AI Assistant fixes it&rdquo; means</h2>
            <p>Not a chatbot bolted to your website. An AI Assistant, the way I mean it here, is an agent set up to run one specific job inside your business: triaging your inbox to draft-ready replies, following up with every lead inside five minutes, turning a scoping call into a sendable proposal, chasing the invoice so you don&rsquo;t have to. (Full plain-English definition in <Link href="/articles/what-is-an-ai-agent" className="text-accent underline underline-offset-2 hover:no-underline">What Is an AI Agent?</Link>, including where the hype ends.)</p>
            <p>And to be straight with you, because vendors won&rsquo;t be: <strong>some breaking points shouldn&rsquo;t get an AI Assistant at all.</strong> If your offer is mispriced, an agent will just help you send the wrong proposal faster. The map tells you where AI helps, and where the fix is a decision only you can make.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">Stop collecting tools. Start running the map.</h2>
            <p>You can score yourself with a legal pad and the list above. Do that today. Or take the assessment version: 12 questions, about 5 minutes, and it hands you back a color-coded map of your specific breaking points with the AI Assistant matched to each one.</p>
            <p><strong><Link href="/assessment" className="text-accent underline underline-offset-2 hover:no-underline">Take the AI Priority Map assessment &rarr;</Link></strong> is free, takes 5 minutes, and skips the &ldquo;book a demo&rdquo; ambush.</p>

          </div>
        </Section>
    </>
  )
}
