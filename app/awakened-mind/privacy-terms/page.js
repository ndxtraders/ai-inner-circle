import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Section from '../../components/Section'

export const metadata = {
  title: 'Awakened Mind — Privacy Policy & Terms of Service',
  description:
    'Privacy Policy and Terms of Service for the Awakened Mind mobile application, operated by Rev Vaughn LLC.',
}

const h2 = 'text-h2 font-semibold tracking-tight text-ink pt-10 pb-4'
const h3 = 'text-h3 font-semibold text-ink pt-8 pb-3'
const h4 = 'text-body font-semibold text-ink pt-5 pb-2'
const p = 'text-body text-ink-soft leading-relaxed'
const ul = 'list-disc pl-6 space-y-2 text-body text-ink-soft leading-relaxed'
const table = 'w-full border-collapse text-body text-ink-soft my-6'
const th = 'border border-rule px-4 py-3 text-left font-semibold text-ink bg-paper-grey'
const td = 'border border-rule px-4 py-3 align-top leading-relaxed'

export default function AwakenedMindPrivacyTermsPage() {
  return (
    <>
      <Header />
      <main>
        <Section bg="paper" width="prose" className="pt-20 md:pt-28">
          <div className="eyebrow mb-6">Awakened Mind</div>
          <h1 className="text-display font-semibold tracking-tight text-ink mb-4">
            Privacy Policy &amp; Terms of Service
          </h1>
          <p className="text-small text-ink-faint mb-12">
            Last Updated: May 26, 2026
          </p>

          {/* PRIVACY POLICY */}
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6">
            Privacy Policy
          </h2>

          <div className="space-y-5">
            <p className={p}>
              Awakened Mind (&ldquo;Awakened Mind,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
              or &ldquo;our&rdquo;), operated by Rev Vaughn LLC, is an audio app that provides
              guided frequency programs, mood tracking, and AI-powered coaching insights. This
              Privacy Policy explains how we collect, use, store, and protect your personal
              information when you use our mobile application.
            </p>
            <p className={p}>
              We do not sell your personal data. We do not show ads. Your data is used
              exclusively to operate the app and improve your experience.
            </p>
          </div>

          <h3 className={h2}>1. Information We Collect</h3>

          <h4 className={h3}>1.1 Account Information</h4>
          <p className={p}>When you create an account, we collect:</p>
          <ul className={ul}>
            <li>Email address</li>
            <li>Password (stored as a secure hash — we never see your plain-text password)</li>
          </ul>

          <h4 className={h3}>1.2 App Usage Data</h4>
          <p className={p}>When you use the app, we collect:</p>
          <ul className={ul}>
            <li>Mood check-in data (mood ratings and associated triggers you enter)</li>
            <li>
              Audio session data (which programs you listened to, session duration, completion
              status)
            </li>
            <li>Usage streaks and session history</li>
            <li>App preferences and settings</li>
          </ul>

          <h4 className={h3}>1.3 AI Coaching Interactions</h4>
          <p className={p}>
            When you complete an audio session or log a mood check-in, the app may send a brief
            summary of that activity to generate a personalized coaching response. This summary
            may include your mood rating and session type. It does not include your name or
            email address.
          </p>

          <h4 className={h3}>1.4 Purchase and Subscription Data</h4>
          <p className={p}>
            Awakened Mind is currently offered free of charge. If we introduce paid subscriptions
            in the future and you subscribe, your payment will be processed by Apple (App Store)
            or Google (Google Play). We do not store your payment-card information. We may
            receive confirmation of your subscription status through RevenueCat, a
            subscription-management platform.
          </p>

          <h4 className={h3}>1.5 Technical Data</h4>
          <p className={p}>We may automatically collect:</p>
          <ul className={ul}>
            <li>Device type and operating system version</li>
            <li>App version</li>
            <li>Crash logs and error reports (used to fix bugs)</li>
          </ul>

          <h3 className={h2}>2. How We Use Your Information</h3>

          <table className={table}>
            <thead>
              <tr>
                <th className={th}>Data</th>
                <th className={th}>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>
                  <strong>Email address</strong>
                </td>
                <td className={td}>Account authentication and password recovery</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong>Mood and session data</strong>
                </td>
                <td className={td}>
                  Display your history, streaks, and insights within the app
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <strong>AI coaching context</strong>
                </td>
                <td className={td}>Generate personalized coaching messages after sessions</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong>Subscription status (if applicable)</strong>
                </td>
                <td className={td}>Unlock premium content and features</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong>Crash logs</strong>
                </td>
                <td className={td}>Identify and fix technical issues</td>
              </tr>
            </tbody>
          </table>

          <p className={p}>
            We do not use your data for advertising, profiling, or selling to third parties.
          </p>

          <h3 className={h2}>3. Third-Party Services</h3>
          <p className={p}>
            We use the following third-party services to operate the app. Each has its own
            privacy policy.
          </p>

          <table className={table}>
            <thead>
              <tr>
                <th className={th}>Service</th>
                <th className={th}>Purpose</th>
                <th className={th}>Privacy Policy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>
                  <strong>Supabase</strong>
                </td>
                <td className={td}>Database, authentication, and backend infrastructure</td>
                <td className={td}>supabase.com/privacy</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong>Anthropic (Claude API)</strong>
                </td>
                <td className={td}>AI coaching message generation</td>
                <td className={td}>anthropic.com/privacy</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong>RevenueCat</strong>
                </td>
                <td className={td}>
                  Subscription and purchase management (if subscriptions are enabled)
                </td>
                <td className={td}>revenuecat.com/privacy</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong>Apple App Store</strong>
                </td>
                <td className={td}>iOS app distribution and payment processing</td>
                <td className={td}>apple.com/legal/privacy</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong>Google Play</strong>
                </td>
                <td className={td}>Android app distribution and payment processing</td>
                <td className={td}>policies.google.com/privacy</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong>Expo / EAS</strong>
                </td>
                <td className={td}>App build and delivery infrastructure</td>
                <td className={td}>expo.dev/privacy</td>
              </tr>
            </tbody>
          </table>

          <h4 className={h3}>Important Note on AI Processing</h4>
          <p className={p}>
            When generating a coaching insight, a brief, anonymized summary of your session
            activity is sent to Anthropic&rsquo;s API. This data is used only to generate your
            response and is subject to Anthropic&rsquo;s data usage policies. We do not send
            your name, email, or any directly identifying information to Anthropic.
          </p>

          <h3 className={h2}>4. Data Retention</h3>
          <ul className={ul}>
            <li>
              <strong>Account data</strong>: Retained while your account is active. Deleted
              within 30 days of an account deletion request.
            </li>
            <li>
              <strong>Mood and session logs</strong>: Retained for the life of your account to
              power your insights history. You may request deletion at any time.
            </li>
            <li>
              <strong>Crash logs</strong>: Retained for up to 90 days for debugging purposes.
            </li>
          </ul>

          <h3 className={h2}>5. Data Security</h3>
          <p className={p}>We take reasonable steps to protect your data:</p>
          <ul className={ul}>
            <li>
              All data transmitted between your device and our servers is encrypted using
              HTTPS/TLS
            </li>
            <li>
              Passwords are hashed using industry-standard methods — never stored in plain text
            </li>
            <li>
              Database access is protected with Row Level Security (RLS) — your data is only
              accessible to your account
            </li>
            <li>
              API keys and secrets are stored as environment variables, never in the app code
            </li>
          </ul>
          <p className={p}>
            No method of transmission or storage is 100% secure. If you become aware of any
            security issue, please contact us at rev@revvaughn.com.
          </p>

          <h3 className={h2}>6. Your Rights</h3>
          <p className={p}>
            Depending on your location, you may have the right to:
          </p>
          <ul className={ul}>
            <li>
              <strong>Access</strong>: Request a copy of the personal data we hold about you
            </li>
            <li>
              <strong>Correction</strong>: Request correction of inaccurate data
            </li>
            <li>
              <strong>Deletion</strong>: Request deletion of your account and associated data
            </li>
            <li>
              <strong>Portability</strong>: Request your data in a portable format
            </li>
          </ul>
          <p className={p}>
            You can delete your account and associated data at any time directly in the app
            (<strong>Settings → Delete Account</strong>). To exercise any other right, contact
            us at: rev@revvaughn.com
          </p>
          <p className={p}>
            We will respond to verifiable requests within 3 business days.
          </p>

          <h3 className={h2}>7. Age Requirement</h3>
          <p className={p}>
            Awakened Mind is intended for adults and is <strong>not directed to anyone under
            the age of 18</strong>. We do not knowingly collect personal information from anyone
            under 18, and — consistent with the U.S. Children&rsquo;s Online Privacy Protection
            Act (COPPA) — we never knowingly collect personal information from children under
            13. If you believe someone under 18 has provided us with personal information,
            please contact us at rev@revvaughn.com and we will delete it promptly.
          </p>

          <h3 className={h2}>8. California Residents (CCPA)</h3>
          <p className={p}>
            If you are a California resident, you have additional rights under the California
            Consumer Privacy Act:
          </p>
          <ul className={ul}>
            <li>The right to know what personal information we collect, use, and disclose</li>
            <li>The right to delete your personal information</li>
            <li>
              The right to opt out of the sale of personal information (we do not sell personal
              information)
            </li>
            <li>The right to non-discrimination for exercising your privacy rights</li>
          </ul>
          <p className={p}>To submit a request, contact us at: rev@revvaughn.com</p>
          <p className={p}>
            We will respond to verifiable requests within 3 business days.
          </p>

          <h3 className={h2}>9. International Users</h3>
          <p className={p}>
            Awakened Mind is operated from the United States. If you access the app from outside
            the United States, your data may be transferred to and processed in the United
            States. By using the app, you consent to this transfer.
          </p>

          <h3 className={h2}>10. Changes to This Policy</h3>
          <p className={p}>
            We may update this Privacy Policy from time to time. When we do, we will update the
            &ldquo;Last Updated&rdquo; date at the top of this page. For material changes, we
            will notify you via in-app notification or email.
          </p>
          <p className={p}>
            Continued use of the app after changes constitutes acceptance of the updated policy.
          </p>

          <h3 className={h2}>11. Contact Us</h3>
          <p className={p}>
            If you have questions about this Privacy Policy or how we handle your data:
          </p>
          <p className={p}>
            <strong>Awakened Mind</strong>
            <br />
            Rev Vaughn LLC, PO Box 1881, Jamestown, CA
            <br />
            Email: rev@revvaughn.com
            <br />
            Website: revvaughn.com/contact
          </p>

          {/* TERMS OF SERVICE */}
          <h2 className="text-h1 font-semibold tracking-tight text-ink mt-20 mb-6 border-t border-rule pt-16">
            Terms of Service
          </h2>

          <div className="space-y-5">
            <p className={p}>
              These Terms of Service (&ldquo;<strong>Terms</strong>&rdquo;) are a binding legal
              agreement between you (&ldquo;<strong>you</strong>&rdquo; or
              &ldquo;<strong>user</strong>&rdquo;) and <strong>Rev Vaughn LLC</strong>
              (&ldquo;<strong>we</strong>,&rdquo; &ldquo;<strong>us</strong>,&rdquo; or
              &ldquo;<strong>our</strong>&rdquo;), the operator of the{' '}
              <strong>Awakened Mind</strong> mobile application and related services
              (collectively, the &ldquo;<strong>App</strong>&rdquo;).
            </p>
            <p className={p}>
              By downloading, accessing, or using the App, you agree to be bound by these Terms
              and by our Privacy Policy (Part 1 above), which is incorporated here by reference.{' '}
              <strong>If you do not agree, do not use the App.</strong>
            </p>
          </div>

          <h3 className={h2}>1. The Service</h3>
          <p className={p}>Awakened Mind is an audio wellness app that provides:</p>
          <ul className={ul}>
            <li>
              Guided audio and frequency-based listening programs (including layered voice and
              frequency tracks intended for focus, relaxation, and sleep);
            </li>
            <li>Mood check-ins, usage streaks, and personal insights;</li>
            <li>
              AI-generated coaching messages designed to offer brief, motivational next-step
              suggestions.
            </li>
          </ul>
          <p className={p}>
            The App is intended for <strong>general wellness, relaxation, and self-improvement
            purposes only</strong>. We may add, change, suspend, or remove features, programs,
            or content at any time without notice.
          </p>

          <h3 className={h2}>2. Health &amp; Wellness Disclaimer — Please Read</h3>
          <p className={p}>
            <strong>
              Awakened Mind is not a medical device and does not provide medical advice,
              diagnosis, or treatment.
            </strong>{' '}
            Our audio programs, frequencies, and AI coaching messages are for general wellness
            and informational purposes only and are <strong>not a substitute for professional
            medical, psychological, or mental-health care.</strong>
          </p>
          <ul className={ul}>
            <li>
              <strong>Always consult a qualified healthcare provider</strong> before beginning
              any new wellness, relaxation, or audio program, particularly if you have a medical
              or psychological condition, are pregnant, or are taking medication.
            </li>
            <li>
              <strong>Do not rely on the App for any emergency.</strong> If you are experiencing
              a medical or mental-health emergency, or are having thoughts of self-harm, call
              your local emergency number (911 in the U.S.) or a crisis line immediately. In the
              U.S., you can call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline).
            </li>
            <li>
              <strong>Seizure / photosensitivity &amp; auditory caution.</strong> Some people
              may be sensitive to certain audio frequencies, binaural beats, or rhythmic sound.{' '}
              <strong>Stop using the App and consult a doctor</strong> if you experience
              dizziness, disorientation, headache, nausea, altered hearing, or any seizure-like
              symptoms. Do not use the App if you have epilepsy or a seizure disorder without
              first consulting your physician.
            </li>
            <li>
              <strong>Do not use while driving or operating machinery.</strong> Many programs
              are designed to relax you or affect your alertness. Never listen while driving,
              operating heavy machinery, or doing anything that requires your full attention.
              Programs intended for sleep should only be used when you are able to safely rest.
            </li>
            <li>
              <strong>Protect your hearing.</strong> Keep volume at a safe, comfortable level.
              Prolonged exposure to loud audio can damage your hearing.
            </li>
          </ul>
          <p className={p}>
            <strong>
              You use the App at your own risk and are solely responsible for how you use it.
            </strong>
          </p>

          <h3 className={h2}>3. Eligibility</h3>
          <p className={p}>
            You must be at least <strong>18 years old</strong> to use the App. By using the App,
            you represent that you are at least 18 years old and have the legal capacity to
            enter into these Terms. The App is intended for adults and is not directed to anyone
            under 18 (see Privacy Policy, §7 above).
          </p>

          <h3 className={h2}>4. Your Account</h3>
          <p className={p}>
            To use certain features you must create an account using a valid email address and
            a password. You agree to:
          </p>
          <ul className={ul}>
            <li>Provide accurate information and keep it current;</li>
            <li>Keep your password confidential and not share your account;</li>
            <li>Be responsible for all activity that occurs under your account; and</li>
            <li>
              Notify us promptly at <strong>rev@revvaughn.com</strong> if you suspect
              unauthorized use.
            </li>
          </ul>
          <p className={p}>
            You may delete your account at any time from{' '}
            <strong>Settings → Delete Account</strong> inside the App, or by contacting us.
            Deleting your account permanently removes your profile, mood logs, session history,
            and insights, as described in the Privacy Policy.
          </p>

          <h3 className={h2}>5. AI Coaching — Important Limitations</h3>
          <p className={p}>
            The App may generate personalized &ldquo;AI Coach&rdquo; messages using a
            third-party AI provider (Anthropic&rsquo;s Claude API).
          </p>
          <ul className={ul}>
            <li>
              AI coaching is a{' '}
              <strong>one-way, automated motivational tool</strong> — it offers brief next-step
              suggestions and encouragement. It is <strong>not</strong> a licensed coach,
              therapist, or counselor, and it is <strong>not</strong> a real-time, back-and-forth
              conversation with a human.
            </li>
            <li>
              AI-generated content{' '}
              <strong>may be inaccurate, incomplete, or not appropriate for your situation.</strong>{' '}
              Do not rely on it as professional, medical, psychological, financial, or legal
              advice.
            </li>
            <li>
              You are responsible for evaluating, and bear all risks associated with, any action
              you take based on an AI coaching message.
            </li>
          </ul>
          <p className={p}>
            See the Privacy Policy above (§1.3 and §3) for how a brief, de-identified summary of
            your activity is sent to the AI provider to generate these messages.
          </p>

          <h3 className={h2}>6. License to Use the App</h3>
          <p className={p}>
            Subject to these Terms, we grant you a{' '}
            <strong>
              limited, personal, non-exclusive, non-transferable, revocable
            </strong>{' '}
            license to download and use one copy of the App on a device you own or control,
            solely for your own personal, non-commercial use.
          </p>
          <p className={p}>
            You agree <strong>not</strong> to:
          </p>
          <ul className={ul}>
            <li>
              Copy, modify, distribute, sell, lease, or sublicense any part of the App or its
              content;
            </li>
            <li>
              Reverse-engineer, decompile, or attempt to extract the source code, audio files,
              or frequencies, except where this restriction is prohibited by law;
            </li>
            <li>
              Circumvent, disable, or interfere with security or access-control features
              (including any feature that gates premium content);
            </li>
            <li>
              Use the App to build a competing product or to train a machine-learning model;
            </li>
            <li>Use automated means (bots, scrapers) to access the App; or</li>
            <li>Use the App in any unlawful way or in violation of these Terms.</li>
          </ul>
          <p className={p}>We reserve all rights not expressly granted to you.</p>

          <h3 className={h2}>7. Intellectual Property</h3>
          <p className={p}>
            The App and all of its content — including audio programs, frequencies, voice
            tracks, text, graphics, logos, the &ldquo;Awakened Mind&rdquo; name, and software —
            are owned by Rev Vaughn LLC or its licensors and are protected by
            intellectual-property laws. Nothing in these Terms transfers any ownership to you.
          </p>

          <h3 className={h2}>8. User Content</h3>
          <p className={p}>
            &ldquo;<strong>User Content</strong>&rdquo; means information you submit through the
            App, such as your display name, mood check-ins, and notes. You retain ownership of
            your User Content. You grant us a worldwide, royalty-free license to host, store,
            process, and display your User Content{' '}
            <strong>solely to operate and provide the App to you</strong> (for example, to show
            your history, streaks, and insights, and to generate AI coaching). We do not sell
            your User Content. You are responsible for your User Content and represent that you
            have the right to submit it.
          </p>

          <h3 className={h2}>9. Acceptable Use</h3>
          <p className={p}>
            You agree not to misuse the App, including by attempting to gain unauthorized access
            to our systems or other users&rsquo; accounts, interfering with or disrupting the
            App or its servers, uploading malicious code, or using the App to harass, abuse, or
            harm others or to violate any law. We may investigate and take appropriate action,
            including suspending or terminating accounts, for any violation.
          </p>

          <h3 className={h2}>10. Subscriptions &amp; Payments (Forward-Looking)</h3>
          <p className={p}>
            <strong>Awakened Mind is currently offered free of charge.</strong> We may introduce
            paid subscriptions or in-app purchases in the future.{' '}
            <strong>If and when we do, the following terms will apply:</strong>
          </p>
          <ul className={ul}>
            <li>
              <strong>Billing through the app stores.</strong> Purchases are processed by{' '}
              <strong>Apple (App Store)</strong> or <strong>Google (Google Play)</strong> and
              are subject to their terms. We do not receive or store your payment-card details.
              Subscription status may be managed for us by <strong>RevenueCat</strong>.
            </li>
            <li>
              <strong>Auto-renewal.</strong> Subscriptions are{' '}
              <strong>auto-renewable</strong>. Your subscription automatically renews for the
              same period at the then-current price unless you cancel{' '}
              <strong>at least 24 hours before the end of the current period.</strong> Your
              account will be charged for renewal within 24 hours before the end of the current
              period.
            </li>
            <li>
              <strong>Managing &amp; canceling.</strong> You can manage or cancel your
              subscription at any time in your <strong>App Store</strong> or{' '}
              <strong>Google Play</strong> account settings. Deleting the App does not cancel a
              subscription.
            </li>
            <li>
              <strong>Free trials / intro offers.</strong> If a free trial or introductory offer
              is provided, any unused portion is forfeited when you purchase a subscription,
              where applicable.
            </li>
            <li>
              <strong>Price changes.</strong> We may change subscription prices. Changes apply
              to future billing periods and, where required by law or store policy, only after
              notice to you.
            </li>
            <li>
              <strong>Refunds.</strong> Except where required by law, payments are non-refundable
              and are handled by Apple or Google under their refund policies. We do not directly
              process refunds for store purchases.
            </li>
          </ul>
          <p className={p}>
            The specific price, billing period, and features of any subscription will be
            disclosed to you in the App at the point of purchase.
          </p>

          <h3 className={h2}>11. Third-Party Services</h3>
          <p className={p}>
            The App relies on third-party services, each governed by its own terms and privacy
            policy, including <strong>Supabase</strong> (backend/auth),{' '}
            <strong>Anthropic</strong> (AI), <strong>RevenueCat</strong> (subscriptions, if
            enabled), <strong>Apple App Store</strong>, <strong>Google Play</strong>, and{' '}
            <strong>Expo/EAS</strong> (build &amp; delivery). We are not responsible for
            third-party services, and your use of them is at your own risk and subject to their
            terms.
          </p>

          <h3 className={h2}>12. Apple App Store — Additional Terms</h3>
          <p className={p}>
            These additional terms apply if you obtained the App from the{' '}
            <strong>Apple App Store</strong>. They are required by Apple and, in the event of a
            conflict with the rest of these Terms, control{' '}
            <strong>only with respect to your use of the App on Apple devices</strong>:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-body text-ink-soft leading-relaxed">
            <li>
              <strong>Acknowledgment.</strong> These Terms are between you and Rev Vaughn LLC
              only, <strong>not</strong> with Apple. Apple is not responsible for the App or
              its content.
            </li>
            <li>
              <strong>Scope of License.</strong> The license granted to you is limited to a
              non-transferable license to use the App on any Apple-branded products that you own
              or control, as permitted by the Apple Media Services Terms and these Terms.
            </li>
            <li>
              <strong>Maintenance &amp; Support.</strong> Rev Vaughn LLC is solely responsible
              for providing any maintenance and support for the App. Apple has{' '}
              <strong>no obligation</strong> to furnish any maintenance or support services.
            </li>
            <li>
              <strong>Warranty.</strong> Rev Vaughn LLC is solely responsible for any product
              warranties, whether express or implied by law, to the extent not effectively
              disclaimed. If the App fails to conform to any applicable warranty, you may notify
              Apple, and Apple may refund the purchase price (if any) for the App. To the
              maximum extent permitted by law, Apple has{' '}
              <strong>no other warranty obligation</strong> with respect to the App.
            </li>
            <li>
              <strong>Product Claims.</strong> Rev Vaughn LLC, not Apple, is responsible for
              addressing any claims by you or a third party relating to the App or your use of
              it, including (a) product-liability claims; (b) any claim that the App fails to
              conform to a legal or regulatory requirement; and (c) claims arising under
              consumer-protection, privacy, or similar legislation.
            </li>
            <li>
              <strong>Intellectual Property.</strong> In the event of any third-party claim that
              the App or your use of it infringes that third party&rsquo;s intellectual-property
              rights, Rev Vaughn LLC, not Apple, will be solely responsible for the
              investigation, defense, settlement, and discharge of any such claim.
            </li>
            <li>
              <strong>Legal Compliance.</strong> You represent and warrant that (a) you are not
              located in a country subject to a U.S. Government embargo or designated as
              &ldquo;terrorist-supporting,&rdquo; and (b) you are not listed on any U.S.
              Government list of prohibited or restricted parties.
            </li>
            <li>
              <strong>Developer Contact.</strong> Questions, complaints, or claims about the App
              should be directed to: Rev Vaughn LLC, PO Box 1881, Jamestown, CA;{' '}
              <strong>rev@revvaughn.com</strong>.
            </li>
            <li>
              <strong>Third-Party Terms.</strong> You must comply with any applicable
              third-party terms when using the App.
            </li>
            <li>
              <strong>Third-Party Beneficiary.</strong> Apple and Apple&rsquo;s subsidiaries are{' '}
              <strong>third-party beneficiaries</strong> of these Terms, and upon your
              acceptance, Apple will have the right (and will be deemed to have accepted the
              right) to enforce these Terms against you as a third-party beneficiary.
            </li>
          </ol>

          <h3 className={h2}>13. Google Play — Additional Terms</h3>
          <p className={p}>
            If you obtained the App from <strong>Google Play</strong>, your use is also subject
            to the <strong>Google Play Terms of Service</strong>. To the extent of any conflict
            between these Terms and the Google Play Terms regarding your acquisition or use of
            the App through Google Play, the Google Play Terms control to the minimum extent
            necessary.
          </p>

          <h3 className={h2}>14. Disclaimer of Warranties</h3>
          <p className={p}>
            To the maximum extent permitted by law, the App is provided{' '}
            <strong>
              &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE,&rdquo; with all faults and without
              warranty of any kind.
            </strong>{' '}
            We disclaim all warranties, express or implied, including merchantability, fitness
            for a particular purpose, title, and non-infringement. We do not warrant that the
            App will be uninterrupted, secure, error-free, or that any content (or any AI
            coaching message) will be accurate or reliable. Some jurisdictions do not allow the
            exclusion of certain warranties, so some of these exclusions may not apply to you.
          </p>

          <h3 className={h2}>15. Limitation of Liability</h3>
          <p className={p}>To the maximum extent permitted by law:</p>
          <ul className={ul}>
            <li>
              We will <strong>not</strong> be liable for any indirect, incidental, special,
              consequential, exemplary, or punitive damages, or for any loss of profits, data,
              goodwill, or other intangible losses, arising out of or related to your use of
              (or inability to use) the App.
            </li>
            <li>
              Our <strong>total liability</strong> for all claims relating to the App will not
              exceed the greater of{' '}
              <strong>
                (a) the amount you paid us for the App in the 12 months before the claim, or
                (b) US $50.
              </strong>
            </li>
          </ul>
          <p className={p}>
            Some jurisdictions do not allow certain limitations of liability, so some of the
            above may not apply to you. Nothing in these Terms limits liability that cannot be
            limited by law.
          </p>

          <h3 className={h2}>16. Indemnification</h3>
          <p className={p}>
            You agree to indemnify and hold harmless Rev Vaughn LLC and its officers, members,
            and agents from any claims, damages, losses, and expenses (including reasonable
            attorneys&rsquo; fees) arising out of your misuse of the App, your User Content, or
            your violation of these Terms or of any law or third-party right.
          </p>

          <h3 className={h2}>17. Governing Law</h3>
          <p className={p}>
            These Terms are governed by the laws of the{' '}
            <strong>State of California, USA</strong>, without regard to its conflict-of-laws
            rules. Subject to Section 18, you agree that any dispute not subject to arbitration
            will be brought exclusively in the state or federal courts located in California,
            and you consent to their jurisdiction.
          </p>

          <h3 className={h2}>
            18. Dispute Resolution; Binding Arbitration; Class-Action Waiver
          </h3>
          <p className={p}>
            <strong>
              PLEASE READ THIS SECTION CAREFULLY — IT AFFECTS YOUR LEGAL RIGHTS, INCLUDING YOUR
              RIGHT TO GO TO COURT AND TO HAVE A JURY TRIAL.
            </strong>
          </p>
          <ul className={ul}>
            <li>
              <strong>Informal resolution first.</strong> Before filing a claim, you agree to
              try to resolve the dispute informally by emailing{' '}
              <strong>rev@revvaughn.com</strong> with a description of the issue. We&rsquo;ll
              try in good faith to resolve it within 30 days.
            </li>
            <li>
              <strong>Binding arbitration.</strong> If we can&rsquo;t resolve it informally, you
              and we agree that any dispute arising out of or relating to these Terms or the App
              will be resolved by <strong>final and binding arbitration</strong> administered by
              a recognized arbitration provider (e.g., AAA or JAMS) under its consumer rules,
              rather than in court, except that either party may bring an individual claim in{' '}
              <strong>small-claims court</strong>.
            </li>
            <li>
              <strong>Class-action waiver.</strong> Disputes will be conducted{' '}
              <strong>only on an individual basis</strong> and not as a class, consolidated, or
              representative action. The arbitrator may not consolidate more than one
              person&rsquo;s claims.
            </li>
            <li>
              <strong>30-day opt-out.</strong> You may opt out of this arbitration agreement by
              emailing <strong>rev@revvaughn.com</strong> within <strong>30 days</strong> of
              first accepting these Terms, stating your name and that you opt out of
              arbitration. If you opt out, Section 17 (court jurisdiction) governs.
            </li>
          </ul>
          <p className={p}>This Section does not apply where prohibited by law.</p>

          <h3 className={h2}>19. Termination</h3>
          <p className={p}>
            We may suspend or terminate your access to the App at any time, with or without
            notice, if you violate these Terms or if we discontinue the App. You may stop using
            the App and delete your account at any time. Sections that by their nature should
            survive termination — including Intellectual Property, Disclaimers, Limitation of
            Liability, Indemnification, Governing Law, and Dispute Resolution — will survive.
          </p>

          <h3 className={h2}>20. Changes to These Terms</h3>
          <p className={p}>
            We may update these Terms from time to time. When we do, we will update the
            &ldquo;Last Updated&rdquo; date at the top of this page and, for material changes,
            provide notice in the App or by email. Your continued use of the App after changes
            take effect constitutes acceptance of the updated Terms.
          </p>

          <h3 className={h2}>21. General</h3>
          <ul className={ul}>
            <li>
              <strong>Entire Agreement.</strong> These Terms and the Privacy Policy are the
              entire agreement between you and us regarding the App and supersede any prior
              agreements.
            </li>
            <li>
              <strong>Severability.</strong> If any provision is found unenforceable, the
              remaining provisions stay in full effect.
            </li>
            <li>
              <strong>No Waiver.</strong> Our failure to enforce any right or provision is not a
              waiver of it.
            </li>
            <li>
              <strong>Assignment.</strong> You may not assign these Terms without our consent;
              we may assign them in connection with a merger, acquisition, or sale of assets.
            </li>
          </ul>

          <h3 className={h2}>22. Contact Us</h3>
          <p className={p}>Questions about these Terms?</p>
          <p className={p}>
            <strong>Awakened Mind</strong>
            <br />
            Rev Vaughn LLC, PO Box 1881, Jamestown, CA
            <br />
            Email: rev@revvaughn.com
            <br />
            Website: revvaughn.com/contact
          </p>
        </Section>
      </main>
      <Footer />
    </>
  )
}
