import Link from "next/link"
import Section from "../../components/Section"

// Article body for /articles/why-good-ai-writing-feels-wrong. Rendered by the
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
            Why Good AI Writing Feels So Wrong
          </h1>
          <p className="text-small text-ink-muted">Jul 25, 2026 &middot; 8 min read</p>
        </Section>

        {/* Article body */}
        <Section bg="paper" width="prose">
          <div className="space-y-6 text-body text-ink leading-relaxed">

            <p className="text-lead">We&rsquo;ve all done it. You give the AI a good prompt, you get back something clean, and you sit there knowing it&rsquo;s no good without being able to say why.</p>
            <p>The grammar is fine. It&rsquo;s on topic. It says roughly what you asked for. Every sentence would survive an editor, and the whole thing still reads like a robot wrote it.</p>
            <p>So you do what everybody does. You hunt for the bad words. You delete &ldquo;delve.&rdquo; You strip the em-dashes. You tell it to sound more conversational, more human, more like you. It comes back different and somehow still wrong.</p>
            <p>Here&rsquo;s what I found after gating my own published articles through a detection system I built: the words were never the problem.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The receipts</h2>
            <p>I ran <Link href="/articles/future-of-ai-agents-in-business" className="text-accent underline underline-offset-2 hover:no-underline">the thesis article on my own site</Link> through my checker. Roughly 1,800 words, published, live, one of the better things I&rsquo;d put out that quarter.</p>
            <p>The scores came back like this:</p>
            <ul className="space-y-2">
              <li>Word-level pattern detection: <strong>9.68 out of 10</strong></li>
              <li>Formatting compliance: <strong>10.0 out of 10</strong></li>
              <li>Structure: <strong>2.5 out of 10</strong></li>
            </ul>
            <p>Read that again. Near-perfect vocabulary. Near-perfect formatting. A structural score that would fail a freshman comp class.</p>
            <p>The article read as machine-written, and every word in it was a good word.</p>
            <p>That&rsquo;s when I stopped editing prose for vocabulary.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">The composite face</h2>
            <p>In the 1990s, researchers ran an experiment with photographs. They took faces, averaged them together digitally, and asked people to rate the results.</p>
            <p>The averaged faces scored as more attractive than almost any of the individual faces that went into them. Smoother skin, more balanced features, fewer irregularities. They were also harder to remember, which is the part that matters here.</p>
            <p>Ask someone to pick a composite face out of a lineup an hour later and they struggle. Every particular thing that would let you recognize a specific person got averaged out. What&rsquo;s left is pleasant and generic. A face that belongs to nobody.</p>
            <p>That&rsquo;s your AI draft.</p>
            <p>A language model is running an averaging process. Enormous amounts of text in, most-likely-next-word out. What comes back is the average shape of a sentence about your topic. Smooth. Balanced. Correct.</p>
            <p>And forgettable in the same way a composite face is forgettable, for the same reason. The particular things got averaged out.</p>
            <p>I call this the <strong>Composite Face problem</strong>, and naming it changed how I edit.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">Four costumes, one problem</h2>
            <p>Once I started looking at shape instead of words, the tells stopped looking like a long list of unrelated quirks. They collapsed into one behavior showing up at different scales, and every one of them turned out to be a <strong>symmetry device</strong>.</p>
            <p><strong>Two beats.</strong> The setup-and-reversal. &ldquo;The problem isn&rsquo;t your prompts. The problem is your process.&rdquo; Perfectly balanced, and once you notice it you&rsquo;ll find it three times a page.</p>
            <p><strong>Three beats.</strong> &ldquo;Small. Focused. One job.&rdquo; Rhetoric textbooks teach this. They&rsquo;re right that it works. They forget to mention it works once, and becomes a tic at volume.</p>
            <p><strong>Four or more.</strong> &ldquo;That feeds the calendar. Which feeds the content. Which feeds the pipeline. Which feeds the deals.&rdquo; By the fourth repetition the reader has stopped reading the words and started hearing the rhythm.</p>
            <p><strong>Whole-section beats.</strong> This is the one nobody catches, because you have to zoom out to see it. Every section ending on a short punchy line. Any single one of those is a good sentence. Eight in a row is a metronome.</p>
            <p>Four costumes, one failure underneath all of them. Balance, applied relentlessly, at every scale the reader can perceive.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">Why it does this, and why asking nicely won&rsquo;t stop it</h2>
            <p>So why can&rsquo;t you just tell it to knock it off?</p>
            <p>Because you&rsquo;re not fighting a preference. You&rsquo;re fighting how the output gets generated.</p>
            <p>The model learned from a corpus where balanced constructions correlate with good writing, because in edited prose they often do. Speeches. Essays. Ad copy. Anything that went through an editor. Balanced sentences are the fingerprint of writing somebody worked on.</p>
            <p>So it learned the correlation and now it can&rsquo;t stop. Think of the debate kid who discovered antithesis in tenth grade and spent the next four years unable to write a sentence without one.</p>
            <p>I found out exactly how stubborn this is by accident.</p>
            <p>I banned the two-part reversal in its comma form. &ldquo;It&rsquo;s not X, it&rsquo;s Y.&rdquo; Wrote the rule, added it to my checker, moved on.</p>
            <p>The next batch of drafts came back with this:</p>
            <blockquote className="border-l-2 border-rule pl-6 italic text-ink-muted">
              &ldquo;It&rsquo;s not X. It&rsquo;s Y.&rdquo;
            </blockquote>
            <p>Same construction. Split across a period. Completely invisible to a rule written against commas.</p>
            <p>When I went back and re-checked the published article with a fixed rule, twelve instances of that device turned up. <strong>Ten of the twelve were the split-sentence form.</strong> My original rule had caught two.</p>
            <p>That&rsquo;s the lesson, and it goes way past writing. A rule written against a surface form teaches the system to find a different surface form for the same move.</p>
            <p>Write rules against the move.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">What happened when I fixed the shape</h2>
            <p>I rewrote that article and kept the argument intact, along with the story about hiring a general contractor to build my house, the data, and every link. The only thing I touched was the shapes.</p>
            <p>Antithesis went from twelve to zero. The three-beat lists went to zero. Section-ending punchlines went from six down to one, kept where it actually earned the landing.</p>
            <p>The composite score went from 7.4, hard-capped by structural violations, to <strong>9.18</strong>. The voice score went from 5.2 to 8.0.</p>
            <p>Word-level pattern detection went from 9.68 to 9.70.</p>
            <p>That last number is the whole argument. The vocabulary score moved two hundredths of a point. Everything that changed, changed at the level of shape.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">Now the embarrassing part</h2>
            <p>I wrote the outline for this article with AI, then ran it through my own checker before drafting.</p>
            <p>It failed.</p>
            <p>Seven instances of the exact construction this article warns you about. In the outline. For the article about not doing that.</p>
            <p>I went through them one at a time. Five were quoted examples, the banned construct shown on purpose so you could see what it looks like. You can&rsquo;t write this piece without quoting the thing.</p>
            <p>Two were mine. Real violations, written by a system I built to catch them, in a document explaining how to catch them.</p>
            <p>I want to be honest about what that means, because there&rsquo;s a comfortable version of this story and it isn&rsquo;t true.</p>
            <p>The comfortable version: I built a tool, the tool works, follow my method. The real version: the tool has a blind spot I only found by tripping it, it can&rsquo;t yet tell a quoted example from a live violation, and I caught my own two mistakes because a machine flagged them and I checked by hand.</p>
            <p>The checker doesn&rsquo;t replace judgment. It just makes sure judgment gets applied.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">How this article was made</h2>
            <p>AI wrote this. I directed it, I made every call on framing and structure, I supplied the data and the story, and I edited the result. The draft came out of a machine.</p>
            <p>And so did eleven violations in that draft, which I fixed by hand after the checker flagged them. Three two-part reversals, six section-closing punchlines past what the piece could carry, one three-beat list, and one performed-candor opener I&rsquo;d written without noticing. The article warning you about the pattern had the pattern in it. That keeps happening, and it&rsquo;s worth saying plainly instead of quietly cleaning it up and claiming a clean first pass.</p>
            <p>Here&rsquo;s everything that had to get fixed before any of that, because the process is more useful to you than the essay.</p>
            <p><strong>The checker was scoring the wrong layer.</strong> My first version banned all conversational signposting. &ldquo;Here&rsquo;s the deal.&rdquo; &ldquo;Think about it.&rdquo; &ldquo;Read that again.&rdquo; A postmortem on an earlier failed draft had flagged two performed-sounding openers, and I over-generalized from two instances to a whole category.</p>
            <p>That got it exactly backwards. The gate started flagging the human-sounding writing and passing the machine-sounding writing. For weeks I was hand-adding conversational texture to beat a checker that was measuring the wrong thing, while split-sentence reversals sailed through untouched.</p>
            <p><strong>The fix was to draw a distinction instead of banning a category.</strong> There&rsquo;s a difference between performing a virtue and pointing at what comes next. &ldquo;Honesty clause, because I have to be straight with you here&rdquo; is performance. &ldquo;Here&rsquo;s the deal&rdquo; is just how a person talks. One got banned. The other got permission, unlimited.</p>
            <p><strong>Real speech is lumpy, and that&rsquo;s the signal.</strong> This is the part I&rsquo;d have told you was wrong a month ago. Some of what feels like sloppy writing is the evidence a human did it. Uneven paragraph lengths. An aside that wanders off. A question you answer with something substantial instead of a snappy one-word payoff. Smoothing those out is what makes prose read as generated.</p>
            <p><strong>I fixed the rules before the article.</strong> This mattered more than I expected. Fixing the article first would have meant checking my rewrite against rules I already knew were broken. Worse, my drafting tool reads the same rulebook as my checker, so correcting the rulebook stopped the problem at the source instead of catching it downstream forever.</p>
            <p>A gate that catches a defect your generator keeps producing is a treadmill.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">When this isn&rsquo;t your problem</h2>
            <p>I&rsquo;d rather you skip this than waste a week on it.</p>
            <p><strong>If nobody reads it, ignore all of this.</strong> Internal notes, meeting summaries, first-pass research. Symmetry costs you nothing when the audience is you.</p>
            <p><strong>If the thinking is thin, prose shape won&rsquo;t save it.</strong> No amount of structural editing turns a piece with nothing to say into a piece worth reading. Fix the thinking.</p>
            <p><strong>If you publish twice a month and edit closely, you&rsquo;ll catch this by feel.</strong> You don&rsquo;t need a system. You need to know what to look for, which you now do.</p>
            <p>The systematic version earns its keep at volume, or where the writing carries your name and your credibility, or where you want <Link href="/articles/how-ai-content-destroys-trust" className="text-accent underline underline-offset-2 hover:no-underline">AI search engines citing you</Link>. Regularity is exactly the kind of thing those systems can measure.</p>

            <h2 className="text-h2 font-semibold text-ink mt-10 pt-10 border-t border-rule">Your next moves</h2>
            <ul className="space-y-3">
              <li><strong>Score your own last article for shape.</strong> Take something you published. Count the two-part reversals, the three-item lists, and the sections ending on a short punchy line. Don&rsquo;t fix anything yet. Just get the count.</li>
              <li><strong>Read your section endings back to back.</strong> Skip everything else. If they all land the same way, you&rsquo;ve found your metronome, and it&rsquo;s the single highest-leverage thing to fix.</li>
              <li><strong>Stop deleting words and start breaking shapes.</strong> Next AI draft you get, resist the vocabulary hunt. Make one beat longer than the others. Let a section end on its last real sentence instead of a punchline.</li>
              <li><strong>Write your rules against the behavior you want stopped.</strong> Whatever pattern you&rsquo;re trying to stamp out of your own writing or your team&rsquo;s, describe the behavior. Describe the surface form and you&rsquo;ll teach everyone to find a new surface form.</li>
            </ul>

            <p>The goal was never writing that passes for human. It&rsquo;s writing that sounds like one specific person, which means protecting the particular things an averaging process strips out.</p>
            <p>Edit AI output for shape. The words were never where the problem lived.</p>
            <p>Most of the time, content that comes out generic is a symptom of something further upstream. The voice, the point of view, the actual opinions live in the founder&rsquo;s head and nowhere else, so nothing that gets handed off carries them. If that sounds like your business, the <Link href="/assessment" className="text-accent underline underline-offset-2 hover:no-underline">AI Priority Map assessment</Link> will tell you where that bottleneck actually sits.</p>

          </div>
        </Section>
    </>
  )
}
