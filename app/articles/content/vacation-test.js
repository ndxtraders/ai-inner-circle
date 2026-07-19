import Link from "next/link"
import Section from "../../components/Section"

// Article body for /articles/vacation-test. Rendered by the dynamic route at
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
            The Vacation Test: Can Your Business Run Without You?
          </h1>
          <p className="text-small text-ink-muted">Jul 19, 2026 &middot; 5 min read</p>
        </Section>

        {/* Article body */}
        <Section bg="paper" width="prose">
          <div className="space-y-6 text-body text-ink leading-relaxed">

            <p className="text-lead text-ink leading-relaxed">The Vacation Test is a simple diagnostic for founder-led businesses: if you disappeared for two weeks (no laptop, no check-ins), what breaks first? If leads go unanswered, projects stop, and clients notice, the business doesn&rsquo;t run on systems. It runs on you. Your score tells you which function to take off your plate first.</p>
            <p className="text-small text-ink-muted italic">Last updated: July 2026 &middot; By Rev Vaughn, GTM Strategist &amp; Revenue Systems Architect</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The test nobody wants to take</h2>
            <p>Ask a founder if they can step away for two weeks and you&rsquo;ll get one of two answers: a confident &ldquo;sure&rdquo; from someone who&rsquo;s never tried it, or a nervous laugh from someone who has.</p>
            <p>The Vacation Test works like this. Pick the next two weeks on your calendar. Now walk through them as if you&rsquo;re unreachable:</p>
            <ul className="space-y-2">
              <li><strong>Day 1 and 2:</strong> Who answers the leads that come in? Not &ldquo;who could.&rdquo; Who <em>does</em>, today, without being told?</li>
              <li><strong>Day 3 to 5:</strong> A client hits a problem mid-project. Where&rsquo;s the answer written down? If it&rsquo;s in your head, the project waits for your return.</li>
              <li><strong>Week 2:</strong> A proposal needs to go out, a report is due, and an invoice is overdue. Which of those happens without you?</li>
            </ul>
            <p>Most founder-led service businesses fail by day 3. The team isn&rsquo;t weak. The business was never built to run without its founder, so every process defaults to &ldquo;ask the founder.&rdquo;</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The three ways founders fail the test</h2>
            <p>The Vacation Test is the headline symptom of Founder Freedom, one of four engines in the <Link href="/articles/ai-priority-map" className="text-accent underline underline-offset-2 hover:no-underline">AI Priority Map</Link>. The engine breaks down into three specific failure modes:</p>
            <p><strong>1. The Vacation Test itself.</strong> If you leave for two weeks, revenue drops or operations slow down. Work happens only when you push it, so you own a job, not an asset.</p>
            <p><strong>2. The Brain Trap.</strong> Pricing logic, project steps, client quirks, the way you&rsquo;d handle an edge case: none of it is written anywhere. You can&rsquo;t delegate what only exists in your head, so you never really delegate at all.</p>
            <p><strong>3. The Bottleneck.</strong> Every important decision runs through you before anything moves. Delegation may exist on paper, but approval still lives with you, so the business moves at the speed of your attention.</p>
            <p>Score each one honestly: green (handled without me), yellow (limps along), red (stops dead). One red is normal. Three reds means you don&rsquo;t own a business. You&rsquo;re its single point of failure.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">Why the standard advice hasn&rsquo;t fixed this</h2>
            <p>The classic prescription is delegation frameworks and SOPs: document everything, hire, hand off. It&rsquo;s not wrong. It&rsquo;s just where most founders get stuck. Writing SOPs is exactly the kind of important-not-urgent work that loses to client deadlines every single week, and hiring ahead of revenue is a bet many founder-led firms can&rsquo;t make.</p>
            <p>That gap is where AI Assistants earn their keep, and it&rsquo;s why this is an implementation problem, not a learn-more-about-AI problem:</p>
            <ul className="space-y-2">
              <li><strong>The Vacation Test</strong> &rarr; an inbox triage assistant that sorts, drafts replies in your voice, and flags the three things that need you, plus assistants running the routine loop of follow-ups, reports, and chasing. Not zero-you. Routine-without-you.</li>
              <li><strong>The Brain Trap</strong> &rarr; record yourself working (calls, decisions, walkthroughs) and let an assistant turn the transcripts into living SOPs and a team knowledge base. You never sit down to &ldquo;write documentation.&rdquo; It gets extracted from work you were doing anyway.</li>
              <li><strong>The Bottleneck</strong> &rarr; a command center that routes the routine and turns your decisions into briefs the team runs without you. You make the call once. The system carries it from there.</li>
            </ul>
            <p>The honest caveat, because vendors skip it: AI doesn&rsquo;t fix a business that&rsquo;s undocumented <em>and</em> undecided. If your pricing changes with your mood, an assistant will just automate the inconsistency. Systematize the decision, then hand it to the agent.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">Take the real test</h2>
            <p>The two-week version costs you a vacation to find out. The 5-minute version is the assessment: 12 questions across all four engines, and your Founder Freedom score comes back color-coded with the specific breaking point to fix first, plus the AI Assistant that fixes it.</p>
            <p><strong><Link href="/assessment" className="text-accent underline underline-offset-2 hover:no-underline">Take the AI Priority Map assessment &rarr;</Link></strong> covers the Vacation Test in question one.</p>

          </div>
        </Section>
    </>
  )
}
