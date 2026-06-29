import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Section from '../../components/Section'
import Button from '../../components/Button'

// Unlisted post-purchase delivery page. Set this URL as the MailerLite
// post-checkout redirect: /ai-brain/access
export const metadata = {
  title: 'Your AI Brain Workshop',
  description: 'Your AI Brain Workshop downloads and setup.',
  robots: { index: false, follow: false },
}

// Each download is gated by its own `ready` flag. Flip a file to ready: true once
// it's in /public/downloads/. Until then its CTA shows "Coming soon" instead of a
// dead link, so nothing 404s if someone lands here early.
const DOWNLOADS = {
  instructions: { href: '/downloads/AI-Brain-Workshop-Guide.pdf', ready: false },
  plugin: { href: '/downloads/ai-brain.plugin', ready: true },
  globalInstructions: { href: '/downloads/global-instructions-template.txt', ready: false },
}

// Placeholder — add the live Q&A join link / details when set.
const QA_LINK = '#'
const QA_READY = false

function ComingSoon({ children }) {
  return (
    <span
      aria-disabled="true"
      className="inline-flex items-center justify-center px-6 py-3 text-small font-medium tracking-wide rounded-none border border-rule bg-paper-grey text-ink-faint cursor-not-allowed select-none"
    >
      {children} &middot; Coming soon
    </span>
  )
}

function DownloadCTA({ file, label, variant = 'accent' }) {
  if (!file.ready) return <ComingSoon>{label}</ComingSoon>
  return (
    <Button href={file.href} external download variant={variant}>
      {label}
    </Button>
  )
}

export default function AIBrainAccessPage() {
  return (
    <>
      <Header />
      <main>

        {/* 1. CONFIRMATION / HERO */}
        <Section bg="paper" width="prose" className="pt-20 md:pt-28">
          <div className="eyebrow mb-6">Purchase confirmed</div>
          <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
            You&rsquo;re in. Let&rsquo;s build your AI Brain.
          </h1>
          <div className="space-y-6 text-lead text-ink-soft leading-relaxed mb-10">
            <p>
              Everything you need is on this page: the step-by-step instructions, the plugin, and
              your live Q&amp;A. Work through it in order and you&rsquo;ll have a working AI Brain in
              about 2 to 3 hours, split however you like.
            </p>
          </div>
          <div className="border-l-2 border-accent pl-6">
            <div className="eyebrow mb-3">Do this first</div>
            <p className="text-body text-ink-soft leading-relaxed">
              Bookmark this page. It&rsquo;s your home base for the workshop, and the link is also in
              your receipt email. There&rsquo;s no login, so save it somewhere you&rsquo;ll find it
              again.
            </p>
          </div>
        </Section>

        {/* 2. HOW TO USE THIS PAGE */}
        <Section bg="grey" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">How this works</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                Three steps, in order.
              </h2>
            </div>
            <div className="space-y-6 text-body text-ink-soft">
              <p>
                <span className="text-accent font-semibold">1.</span>&nbsp; Open the
                instructions and read them first. They&rsquo;re short and illustrated, with a
                screenshot of every click.
              </p>
              <p>
                <span className="text-accent font-semibold">2.</span>&nbsp; Download the plugin
                when the guide tells you to. Don&rsquo;t install it on your own ahead of time.
              </p>
              <p>
                <span className="text-accent font-semibold">3.</span>&nbsp; Build alongside the
                guide, one step at a time. Anything you get stuck on, bring it to the live Q&amp;A.
              </p>
            </div>
          </div>
        </Section>

        {/* 3. WELCOME VIDEO */}
        <Section bg="paper" width="content">
          <div className="max-w-prose mb-10">
            <div className="eyebrow mb-4">Watch first &middot; 2 minutes</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              Start with the welcome video.
            </h2>
            <p className="text-body text-ink-soft leading-relaxed mt-4">
              A quick orientation so you can see the finished setup before you build your own.
            </p>
          </div>
          {/* TODO: replace with the intro video embed (YouTube/Vimeo iframe). */}
          <div className="aspect-video w-full border border-rule bg-paper-grey flex items-center justify-center">
            <span className="text-small text-ink-faint">Welcome video</span>
          </div>
        </Section>

        {/* 4. COMPONENT 1 — THE INSTRUCTIONS */}
        <Section bg="grey" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Component 1 &middot; Your instructions</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6">
                The Workshop Guide.
              </h2>
              <p className="text-body text-ink-soft leading-relaxed mb-8">
                A written, step-by-step guide with a screenshot of every click. It takes you from
                nothing to a working AI Brain: what to set up, what to download, and exactly where to
                click along the way. Read it on one screen and build on the other. You keep it, and
                it&rsquo;s yours to come back to whenever you add something later.
              </p>
              <DownloadCTA file={DOWNLOADS.instructions} label="Download the Workshop Guide (PDF)" />
              <p className="text-small text-ink-faint mt-3">
                Start here. A PDF you can keep and search.
              </p>
            </div>
            <div className="border border-rule bg-paper p-8">
              <div className="eyebrow mb-4">Also included</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">Global Instructions template</h3>
              <p className="text-body text-ink-soft leading-relaxed mb-6">
                A copy-and-paste starting point for the one-time setup that makes Claude know who you
                are in every chat. The guide tells you exactly where it goes.
              </p>
              <DownloadCTA file={DOWNLOADS.globalInstructions} label="Download the template" variant="secondary" />
            </div>
          </div>
        </Section>

        {/* 5. COMPONENT 2 — THE PLUGIN + THE CAVEAT */}
        <Section bg="paper" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Component 2 &middot; Your tool</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6">
                The AI Brain plugin.
              </h2>
              <p className="text-body text-ink-soft leading-relaxed mb-8">
                This is the engine. It installs six guided tools inside Claude, the slash commands
                that interview you and write your knowledge files for you. You don&rsquo;t face a
                blank page. You answer a few short prompts and the plugin builds your AI Brain with
                you and for you.
              </p>
              <DownloadCTA file={DOWNLOADS.plugin} label="Download the plugin (ai-brain.plugin)" />
              <p className="text-small text-ink-faint mt-3">
                Don&rsquo;t double-click this file. You load it from inside Claude, and the guide
                walks you through it (Setup Guide 2).
              </p>
            </div>

            {/* THE "CUSTOMIZE" CAVEAT — written for advanced users who skip the manual */}
            <div className="border border-accent bg-paper p-8">
              <div className="eyebrow mb-4">Read this, even if you skip the manual</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">
                Do not click &ldquo;Customize&rdquo; on the plugin.
              </h3>
              <div className="space-y-4 text-body text-ink-soft leading-relaxed">
                <p>
                  After you upload the plugin in Claude, you&rsquo;ll see a{' '}
                  <span className="font-semibold text-ink">Customize</span> button on it. It looks
                  like setup. It isn&rsquo;t.
                </p>
                <p>
                  Clicking it starts an unrelated flow (something like &ldquo;Customize the ai-brain
                  plugin for me based on my company&rdquo;) that has nothing to do with this
                  workshop. The plugin needs zero setup. It builds itself when you{' '}
                  <span className="font-semibold text-ink">run its skills</span>, which the guide
                  shows you.
                </p>
                <p className="text-ink-muted">
                  Clicked it by accident? No harm done. Close it, open a new task, and keep going.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 6. LIVE Q&A */}
        <Section bg="grey" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">The human part</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                Bring your questions to the live Q&amp;A.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft leading-relaxed">
              <p>
                Stuck on a step, or want a second opinion on your AI Brain once it&rsquo;s built?
                Bring it to the live call. That&rsquo;s what the human side of this is for.
              </p>
              <p className="text-ink-muted">
                Can&rsquo;t make it live? It&rsquo;s recorded, and you&rsquo;ll get the replay.
              </p>
              {QA_READY ? (
                <Button href={QA_LINK} external variant="secondary">
                  Get the Q&amp;A details
                </Button>
              ) : (
                <ComingSoon>Q&amp;A details</ComingSoon>
              )}
            </div>
          </div>
        </Section>

        {/* 7. WHAT'S NEXT */}
        <Section bg="paper" width="prose">
          <div className="eyebrow mb-4">What&rsquo;s next</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6">
            This is the foundation.
          </h2>
          <p className="text-lead text-ink-muted leading-relaxed mb-10">
            This month you build the brain. Next, it starts to act, connecting to your calendar,
            email, and docs so it can do more of the work for you. More on that soon.
          </p>
          <div className="border-l-2 border-accent pl-6">
            <p className="text-body text-ink-soft leading-relaxed">
              Stuck on anything? Reply to your receipt email, or bring it to the live Q&amp;A.
              You&rsquo;re not doing this alone.
            </p>
          </div>
        </Section>

      </main>
      <Footer />
    </>
  )
}
