import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'

export const metadata = {
  alternates: { canonical: '/ai-second-opinion' },
  title: 'AI Second Opinion — Rev Vaughn',
  description:
    'A paid second opinion on whether AI actually helps your business without the sales hype, a written recommendation, and a straight answer either way.',
  openGraph: {
    title: 'AI Second Opinion — Rev Vaughn',
    description:
      'A paid second opinion on whether AI actually helps move your business forward.',
    url: 'https://aiinnercircle.com/ai-second-opinion',
  },
}

const CHECKOUT_URL =
  'https://docs.google.com/document/d/1US9lt00lMMkuCSLJtij56VZSjE9Q2DBD/edit?usp=sharing'

export default function AISecondOpinionPage() {
  return (
    <>
      <Header />
      <main>
        {/* 01 · Hero */}
        <Section bg="paper" width="content" className="pt-20 md:pt-28">
          <div className="max-w-prose">
            <div className="eyebrow mb-6">Program &middot; AI Second Opinion</div>
            <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
              Know You Need To Do Something With AI, Not Sure What?
            </h1>
            <p className="text-lead text-ink-muted mb-10">
              Sixty minutes with someone who has spent over twenty years building revenue systems.
              You get an honest read on whether AI helps
              your business, what to do first, and who should do it. In writing, within 48 hours.
            </p>
            <Button href={CHECKOUT_URL} external variant="primary">
              Book Your AI Second Opinion
            </Button>
            <p className="text-small text-ink-faint mt-3">
              60 minutes, one on one. A written recommendation in your inbox within 48 hours.
            </p>
          </div>
        </Section>

        {/* 02 · Is this for you */}
        <Section bg="grey" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Is this right for you?</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                Not sure where to start with AI?
              </h2>
            </div>
            <ul className="space-y-4 text-body text-ink-soft">
               <li>
                If you know you need to do something with AI in your business but are not sure where to start...
              </li>
              <li>
                Maybe someone quoted you five figures for AI agents and you can&rsquo;t tell whether
                it&rsquo;s real.
              </li>
              <li>
                Every option looks equally plausible, so you&rsquo;ve picked none of them.
              </li>
              <li>Maybe you bought a tool last year. It&rsquo;s still sitting there.</li>
              <li>Everyone with an opinion is also selling the solution.</li>
              <li>
                If you took the AI assessment, you saw the red zones, and you still aren&rsquo;t sure
                what to do first.
              </li>
            </ul>
          </div>
        </Section>

        {/* 03 · The real cost */}
        <Section bg="paper" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">The real cost</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                The expensive mistake isn&rsquo;t waiting. It&rsquo;s buying the wrong thing.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                Waiting costs you time. Buying wrong costs you the money, the months, and
                something harder to replace: your willingness to try again.
              </p>
              <p>
                Run it on your own numbers. A five figure build that doesn&rsquo;t fit your
                business isn&rsquo;t a five figure loss. It&rsquo;s that, plus a year of not
                trusting the next person who tells you the truth.
              </p>
              <p>
                Most founders don&rsquo;t need more information about AI. They need one honest
                answer about their own situation.
              </p>
            </div>
          </div>
        </Section>

        {/* 04 · Why you can't get a straight answer */}
        <Section bg="greyDark" width="content">
          <div className="max-w-prose mb-14">
            <div className="eyebrow mb-4">Why nobody will tell you</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              Every answer you&rsquo;re getting is priced in.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">01</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">The AI agency</h3>
              <p className="text-body text-ink-muted">
                Their discovery call is a sales call. Ask them whether you need this and the
                answer is always yes, followed by a number.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">02</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">The overnight expert</h3>
              <p className="text-body text-ink-muted">
                They learned this eight months ago. They sell the same template to a dentist, a
                law firm, and a coach, and they call it custom.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">03</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">Your current consultant</h3>
              <p className="text-body text-ink-muted">
                They know your business. They&rsquo;ve never shipped one of these. From where
                you sit, their caution and their inexperience look identical.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">04</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">The internet</h3>
              <p className="text-body text-ink-muted">
                Every answer is confident. Every answer contradicts the last one. Most of it was
                true two model releases ago.
              </p>
            </div>
          </div>
        </Section>

        {/* 05 · What this actually is */}
        <Section bg="paper" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">What this is</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                A paid hour with someone who isn&rsquo;t trying to sell you anything.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                This is not a sales call. No deck, no discovery framework, and nothing at the end
                that you have to say no to.
              </p>
              <p>
                You bring whatever you&rsquo;re considering. A quote you received, a tool
                you&rsquo;re evaluating, a plan you sketched on a napkin, or nothing at all. I
                tell you what I&rsquo;d do if it were my business.
              </p>
              <p>
                What you get is a decision. Whether AI helps here, what to do first, and who
                should do it. Not an implementation plan. That&rsquo;s a longer piece of work,
                and most people aren&rsquo;t ready for it yet.
              </p>
            </div>
          </div>
        </Section>

        {/* 06 · What you get */}
        <Section bg="grey" width="content">
          <div className="max-w-prose mb-14">
            <div className="eyebrow mb-4">What you get</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              Four things you keep.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">01</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">The call</h3>
              <p className="text-body text-ink-muted">
                Sixty minutes, one on one. The full agenda is published below, so you know
                exactly what happens before you book.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">02</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">
                The written recommendation
              </h3>
              <p className="text-body text-ink-muted">
                One to two pages, in your inbox within 48 hours. What you&rsquo;re actually
                trying to fix, whether AI helps, the one thing to do first, what it costs and how
                long it takes, who should build it, what to walk away from, and your next step.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">03</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">The recording</h3>
              <p className="text-body text-ink-muted">
                Yours to keep. Forward it to a partner, a co-founder, or the team member
                who&rsquo;ll be running whatever we decide.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">04</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">
                A named next step, with a price
              </h3>
              <p className="text-body text-ink-muted">
                No vague &ldquo;let&rsquo;s stay in touch.&rdquo; You leave knowing what comes
                next and what it costs, including the option where it costs nothing.
              </p>
            </div>
          </div>
        </Section>

        {/* 07 · How the call runs */}
        <Section bg="paper" width="content">
          <div className="max-w-prose mb-14">
            <div className="eyebrow mb-4">How the call runs</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              You can read the whole agenda before you book.
            </h2>
          </div>
          <div className="space-y-8">
            <div className="border-t border-ink pt-6 grid md:grid-cols-4 gap-6">
              <div className="text-small font-medium text-accent">0 to 10 min</div>
              <div className="md:col-span-3">
                <h3 className="text-h3 font-semibold text-ink mb-2">
                  What you&rsquo;re actually trying to fix
                </h3>
                <p className="text-body text-ink-muted">
                  Not which tool you want. What&rsquo;s slow, what&rsquo;s stuck, and what&rsquo;s
                  eating your week.
                </p>
              </div>
            </div>
            <div className="border-t border-ink pt-6 grid md:grid-cols-4 gap-6">
              <div className="text-small font-medium text-accent">10 to 25 min</div>
              <div className="md:col-span-3">
                <h3 className="text-h3 font-semibold text-ink mb-2">
                  What you&rsquo;ve been pitched
                </h3>
                <p className="text-body text-ink-muted">
                  Bring the quote, the proposal, or the tool you&rsquo;re evaluating. We go
                  through it line by line. This is the second opinion part.
                </p>
              </div>
            </div>
            <div className="border-t border-ink pt-6 grid md:grid-cols-4 gap-6">
              <div className="text-small font-medium text-accent">25 to 45 min</div>
              <div className="md:col-span-3">
                <h3 className="text-h3 font-semibold text-ink mb-2">
                  Where AI helps you, and where it won&rsquo;t
                </h3>
                <p className="text-body text-ink-muted">
                  Including the parts of your business where it makes things worse. Those exist,
                  and nobody selling AI will point at them.
                </p>
              </div>
            </div>
            <div className="border-t border-ink pt-6 grid md:grid-cols-4 gap-6">
              <div className="text-small font-medium text-accent">45 to 60 min</div>
              <div className="md:col-span-3">
                <h3 className="text-h3 font-semibold text-ink mb-2">
                  The one thing to do first, and who should do it
                </h3>
                <p className="text-body text-ink-muted">
                  We converge on a single next move and decide whether it&rsquo;s yours, your
                  team&rsquo;s, or mine.
                </p>
              </div>
            </div>
          </div>
          <p className="text-small text-ink-faint mt-10 max-w-prose">
            A short intake form runs when you book. Five minutes. It&rsquo;s why we start at
            minute one instead of minute twenty.
          </p>
        </Section>

        {/* 08 · Why I'll tell you the truth */}
        <Section bg="greyDark" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">The obvious question</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                Yes, I also build these systems.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                So you should ask why my answer would be any different from the agency&rsquo;s.
              </p>
              <p>
                Here&rsquo;s the structural reason. My business runs on founder-led brands who
                come back and who send other people. One build that doesn&rsquo;t fit is worth a
                few thousand dollars and costs me the next five years of that relationship. The
                math on telling you the truth isn&rsquo;t close.
              </p>
              <p>
                There&rsquo;s a practical reason too. I run these systems inside my own
                businesses every day. I know which ones are worth the money and which ones are
                demos wearing a price tag.
              </p>
            </div>
          </div>
        </Section>

        {/* 09 · The three ways this ends */}
        <Section bg="paper" width="content">
          <div className="max-w-prose mb-14">
            <div className="eyebrow mb-4">How this ends</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              Three outcomes. You&rsquo;ll know which one on the call.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">01</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">You build it</h3>
              <p className="text-body text-ink-muted">
                You leave with the sequence and you go do it. Most founders with a small team can
                run the first piece themselves.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">02</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">I build it</h3>
              <p className="text-body text-ink-muted">
                If it makes more sense for me to install it, I&rsquo;ll tell you what that costs.
                If the scope isn&rsquo;t clear yet, the AI Audit is the longer version of this
                conversation and it ships with a working prototype.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">03</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">It isn&rsquo;t an AI problem</h3>
              <p className="text-body text-ink-muted">
                Sometimes the constraint is the offer, the messaging, or the funnel. If
                that&rsquo;s your situation I&rsquo;ll say so, and your fee moves to a{' '}
                <Link href="/quick-win" className="underline hover:text-accent">
                  Quick Win call
                </Link>
                , which is the diagnostic built for it.
              </p>
            </div>
          </div>
        </Section>

        {/* 10 · The guarantee */}
        <Section bg="grey" width="content">
          <div className="max-w-prose">
            <div className="eyebrow mb-4">If the answer is no</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink mb-8">
              Sometimes AI isn&rsquo;t the problem.
            </h2>
            <p className="text-lead text-ink mb-8 border-l-2 border-accent pl-6">
              If my honest recommendation is that AI won&rsquo;t move your business right now,
              I&rsquo;ll tell you on the call and put your fee toward a Quick Win call instead.
            </p>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                It happens more than you&rsquo;d think. Often the constraint sits upstream: the
                offer is soft, the messaging is vague, or the funnel leaks somewhere nobody has
                looked. No agent fixes any of that.
              </p>
              <p>
                So that outcome has a place to go. The{' '}
                <Link href="/quick-win" className="underline hover:text-accent">
                  Quick Win call
                </Link>{' '}
                is the diagnostic for the revenue system itself, and your fee moves straight
                across to it. You still get the written recommendation, and it explains what
                I&rsquo;d do instead.
              </p>
              <p>
                This isn&rsquo;t a satisfaction guarantee. It doesn&rsquo;t depend on whether you
                liked the call. It depends on my read of your business, which is the part you
                came here to buy.
              </p>
            </div>
          </div>
        </Section>

        {/* 11 · Fit */}
        <Section bg="paper" width="content">
          <div className="max-w-prose mb-14">
            <div className="eyebrow mb-4">Fit</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              Who this is for, and who it isn&rsquo;t.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-t border-ink pt-6">
              <h3 className="text-h3 font-semibold text-ink mb-4">A good fit</h3>
              <ul className="space-y-3 text-body text-ink-muted">
                <li>
                  Founder-led B2B services. Consultants, coaches, agencies, done-for-you.
                </li>
                <li>Doing real revenue, solo or with a small team.</li>
                <li>Considering an AI purchase, or being pitched one right now.</li>
                <li>Willing to hear that the answer is no.</li>
              </ul>
            </div>
            <div className="border-t border-ink pt-6">
              <h3 className="text-h3 font-semibold text-ink mb-4">Not a fit</h3>
              <ul className="space-y-3 text-body text-ink-muted">
                <li>Pre-revenue. Come back when there&rsquo;s a business to diagnose.</li>
                <li>Looking for someone to validate a decision you&rsquo;ve already made.</li>
                <li>
                  Your problem is the offer, the messaging, or the funnel. That&rsquo;s the{' '}
                  <Link href="/quick-win" className="underline hover:text-accent">
                    Quick Win call
                  </Link>
                  , not this one.
                </li>
                <li>
                  You want it built today, no diagnosis. That&rsquo;s a different conversation and
                  I&rsquo;m happy to have it.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* 12 · Price */}
        <Section bg="grey" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">The investment</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">$300</h2>
              <p className="text-body text-ink-muted mt-4">
                Sixty minutes, a written recommendation, and a straight answer either way.
              </p>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                I could charge more for this conversation. I don&rsquo;t, because the people who
                most need it are the ones who can&rsquo;t afford to guess wrong.
              </p>
              <p>
                The $300 credits in full toward an AI Audit or a Command Center install if you
                book one within 30 days. If AI turns out not to be your constraint, it credits
                toward a{' '}
                <Link href="/quick-win" className="underline hover:text-accent">
                  Quick Win call
                </Link>{' '}
                instead. Either way the $300 goes toward the thing you actually need.
              </p>
              <p>
                I take a limited number of these each month, because I write every recommendation
                myself.
              </p>
              <Button href={CHECKOUT_URL} external variant="primary">
                Book Your AI Second Opinion
              </Button>
              <p className="text-small text-ink-faint">
                Your order will be processed by Stripe via a secure MailerLite checkout form.
              </p>
            </div>
          </div>
        </Section>

        {/* 13 · Objections */}
        <Section bg="greyDark" width="content">
          <div className="max-w-prose mb-14">
            <div className="eyebrow mb-4">Before you book</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              The questions people ask first.
            </h2>
          </div>
          <div className="space-y-10 max-w-prose">
            <div className="border-t border-ink pt-6">
              <h3 className="text-h3 font-semibold text-ink mb-3">Is this a sales call?</h3>
              <p className="text-body text-ink-muted">
                No. There&rsquo;s no deck and no pitch at the end. You&rsquo;ll leave with a
                recommendation that sometimes says AI isn&rsquo;t your problem, and those calls
                end with your fee moving somewhere more useful.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <h3 className="text-h3 font-semibold text-ink mb-3">
                I already took the assessment. Is this the same thing?
              </h3>
              <p className="text-body text-ink-muted">
                No. The assessment shows you where the friction is. It can&rsquo;t look at the
                quote sitting in your inbox and tell you whether it&rsquo;s worth the money, or
                whether the person who sent it knows what they&rsquo;re doing. That takes a human.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <h3 className="text-h3 font-semibold text-ink mb-3">
                How is this different from the AI Audit?
              </h3>
              <p className="text-body text-ink-muted">
                This answers whether, and what first, in one conversation. The Audit answers
                exactly how, over six to eight hours, and ships with a working prototype built on
                your data. Most people should do this one first.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <h3 className="text-h3 font-semibold text-ink mb-3">
                What if you tell me I don&rsquo;t need AI?
              </h3>
              <p className="text-body text-ink-muted">
                Then I tell you, and your fee moves to a{' '}
                <Link href="/quick-win" className="underline hover:text-accent">
                  Quick Win call
                </Link>
                , which diagnoses the revenue system instead. You keep the written recommendation
                and the recording. That outcome is built into the offer on purpose.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <h3 className="text-h3 font-semibold text-ink mb-3">
                Do you also build these systems?
              </h3>
              <p className="text-body text-ink-muted">
                Yes, which is exactly why I&rsquo;ll tell you when you don&rsquo;t need one. My
                business runs on repeat work and referrals from founder-led brands. One bad build
                costs me more than it earns.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <h3 className="text-h3 font-semibold text-ink mb-3">
                What if I don&rsquo;t have anything to show you yet?
              </h3>
              <p className="text-body text-ink-muted">
                That&rsquo;s fine, and common. Bring the problem instead of the proposal. Plenty
                of these calls start with a founder who knows something is slow and can&rsquo;t
                name it.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <h3 className="text-h3 font-semibold text-ink mb-3">What do I need to prepare?</h3>
              <p className="text-body text-ink-muted">
                The intake form, which takes about five minutes when you book. If you have a
                quote, a proposal, or a tool you&rsquo;re evaluating, upload it. Nothing else.
              </p>
            </div>
          </div>
        </Section>

        {/* 14 · Final CTA */}
        <Section bg="paper" width="content">
          <div className="max-w-prose">
            <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6">
              Get one honest answer before you spend real money.
            </h2>
            <p className="text-lead text-ink-muted mb-10">
              Sixty minutes. A written recommendation in your inbox within 48 hours. And a
              straight answer, including the version where the answer is no.
            </p>
            <Button href={CHECKOUT_URL} external variant="primary">
              Book Your AI Second Opinion
            </Button>
            <p className="text-small text-ink-faint mt-3">
              Your order will be processed by Stripe via a secure MailerLite checkout form.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
