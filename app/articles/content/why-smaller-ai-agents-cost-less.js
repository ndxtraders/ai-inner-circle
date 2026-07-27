import Link from "next/link"
import Image from "next/image"
import Section from "../../components/Section"

// Article body for /articles/why-smaller-ai-agents-cost-less. Rendered by the
// dynamic route at app/articles/[slug]/page.js, which supplies <Header>,
// JSON-LD, the FAQ section, the related-articles block, the CTA, and <Footer>.
// Metadata for this article lives in app/content/articles.js. Note that the
// date/read-time line below is hardcoded here and is NOT derived from that
// file, so a date change has to be made in both places.
export default function ArticleBody() {
  return (
    <>
        {/* Article header */}
        <Section bg="paper" width="prose">
          <div className="eyebrow mb-6">Articles</div>
          <h1 className="text-display font-semibold leading-tight mb-6">
            Is Your Fat Old Agent As Good As A Skinny New One?
          </h1>
          <p className="text-small text-ink-muted">Jul 27, 2026 &middot; 6 min read</p>
        </Section>

        {/* Article body */}
        <Section bg="paper" width="prose">
          <div className="space-y-6 text-body text-ink leading-relaxed">

            <p className="text-lead">Anthropic just deleted 80% of Claude Code&rsquo;s instruction manual.</p>
            <p>Out of curiosity, I counted the lines of code in my AI Inner Circle Command Center instructions.</p>
            <p><strong>475</strong></p>
            <p>So is this good, or bad?</p>
            <p>I don&rsquo;t know. But here is what I do know&hellip;</p>
            <p>You pay a bill on every AI session you run. It never shows up as its own line item. It&rsquo;s a hidden tax, and it is <Link href="/articles/ai-agent-cost" className="text-accent underline underline-offset-2 hover:no-underline">a bigger share of what these tools cost you</Link> than most people realize.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">Here&rsquo;s what changed</h2>
            <p>Think about hiring someone new.</p>
            <p>For years, we handed them a thick employee handbook with every rule spelled out. The book had to be thick, because they were new and would guess wrong without it.</p>
            <p>Last Friday, Anthropic said its newest models no longer need the thick book. So they cut more than 80% of the rules out of Claude Code.</p>
            <p>Then they ran performance tests, and the scores stayed the same as with the big instruction book.</p>

            <div className="my-6">
              <Image
                src="/Claude-Magician-trick.jpg"
                alt="Cartoon of Claude performing a magic trick, pulling the same result out of a far smaller instruction manual"
                width={1200}
                height={630}
                className="w-full h-auto"
              />
            </div>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">Two things made that work</h2>
            <p>The first is judgment.</p>
            <p>The old handbook gave a long list of instructions like &ldquo;never write comments in code.&rdquo; That rule was wrong some of the time, but it was safer than letting the model guess. The new rule says &ldquo;match the style of the code around you.&rdquo;</p>
            <p>Shorter, and it fits far more situations.</p>
            <p>The second is arguments.</p>
            <p>If one file says add documentation where it helps, and another file says never add comments, the model has to stop and work out which one you meant. That costs extra on every single task.</p>
            <p>Most people never see this one. You wrote both rules months apart, both sounded reasonable at the time, and neither of them looks like a problem sitting on the page by itself.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">But here&rsquo;s the part that got my attention</h2>
            <p>You don&rsquo;t have to say everything up front. The model can go look things up when it needs them.</p>
            <p>So you keep one short file, and you put the rest in side files it opens only when the job calls for it. That saves a whole lot on your AI bill.</p>
            <p>Which is when I went and looked at my own work.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">I built mine this way by accident</h2>
            <p>I don&rsquo;t have a crystal ball, and I haven&rsquo;t bugged Anthropic&rsquo;s headquarters, but it turns out I built my own instructions this way.</p>
            <p>Let me show you what I mean.</p>
            <p>My AI Writing Twin workshop runs 90 minutes long. That isn&rsquo;t much time to cover everything you need.</p>
            <p>So when I built <Link href="/articles/why-good-ai-writing-feels-wrong" className="text-accent underline underline-offset-2 hover:no-underline">the writing skill for it</Link>, I could not hand the AI everything I know about voice. There is just too much of it.</p>
            <p>I wrote a short version instead, and it came to 427 lines.</p>
            <p>Then I put the deep material in separate files. 1,798 lines of pattern analysis and market notes. The AI only opens those when the job calls for them.</p>
            <p>I did that to fit a clock. But the token savings were a side benefit.</p>
            <p>Anthropic arrived at the same shape from the other direction.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">Maestro doesn&rsquo;t know what the specialists know</h2>
            <p>That Command Center I counted the lines on? It&rsquo;s the AI team I run my business with.</p>
            <p>Maestro, my AI Chief of Staff, was already designed the way Claude now operates.</p>
            <p>Maestro routes the work to the right specialist, but only when it needs work done. Maestro doesn&rsquo;t know everything the specialist knows.</p>
            <p>And doesn&rsquo;t need to.</p>
            <p>It only needs to know the type of work the specialist does and give them the assignment.</p>
            <p>The result? Work gets done just-in-time at an expert level, and the AI token cost is a fraction of what it would cost using a big ol&rsquo; super AI agent like most people do.</p>
            <p>This is the same argument I made in <Link href="/articles/future-of-ai-agents-in-business" className="text-accent underline underline-offset-2 hover:no-underline">the thesis piece on composing a team instead of inheriting one giant assistant</Link>. What&rsquo;s new is that the company building the models just published the receipts.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">Your next moves</h2>
            <ul className="space-y-3">
              <li><strong>Count your own.</strong> Open whatever instruction file your AI reads every session and get the line count. Don&rsquo;t change anything yet. The number is the point, because the cost stays invisible until something measures it.</li>
              <li><strong>Read it looking for arguments.</strong> Two rules that pull in different directions cost you on every task, whether or not the task has anything to do with either rule. This is the cheapest fix on the list and almost nobody does it.</li>
              <li><strong>Ask when each rule is actually needed.</strong> Anything used once a month belongs in a side file the AI opens on request. Anything used every session stays put.</li>
              <li><strong>Leave the safety rules alone.</strong> Every &ldquo;never delete this&rdquo; and &ldquo;never send without my approval&rdquo; stays in the main file, whatever it costs. A safety rule that isn&rsquo;t loaded at the moment it matters is not a safety rule, and this is where I&rsquo;d expect most people to cut too deep.</li>
            </ul>
            <p>One caution before you start deleting. What Anthropic measured was the token cost. Nobody has tested whether the work itself comes out better, so a leaner file buys you a cheaper bill and easier upkeep. Don&rsquo;t reopen something that already works just to save a few dollars.</p>

            <p>The goal was never less instruction. It was less duplicated instruction, which is a different job and a much smaller one.</p>
            <p>Inside the AI Inner Circle, you build the same thing for your own business: a coordinator who knows who to call, and specialists who carry the depth. <Link href="/consultants" className="text-accent underline underline-offset-2 hover:no-underline">See how the membership works &rarr;</Link></p>

          </div>
        </Section>
    </>
  )
}
