import { Poppins } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  metadataBase: new URL('https://aiinnercircle.com'),
  title: 'AI Inner Circle | Rev Vaughn',
  description: 'Where founder-led brands build revenue systems that actually scale. Your voice. AI doing the work.',
  openGraph: {
    title: 'AI Inner Circle | Rev Vaughn',
    description: 'Where founder-led brands build revenue systems that actually scale. Your voice. AI doing the work.',
    url: 'https://aiinnercircle.com',
    siteName: 'AI Inner Circle',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://aiinnercircle.com/#person',
  name: 'Rev Vaughn',
  givenName: 'Raul',
  additionalName: 'Rev',
  familyName: 'Vaughn',
  alternateName: ['Raul Vaughn', 'Raul "Rev" Vaughn'],
  jobTitle: 'GTM Strategist & Revenue Systems Architect',
  description:
    'GTM strategist and revenue systems architect helping founder-led brands build AI-leveraged revenue growth systems. Founder of AI Inner Circle.',
  url: 'https://aiinnercircle.com',
  image: 'https://aiinnercircle.com/Rev-Vaughn-800.jpg',
  sameAs: [
    'https://revvaughn.com',
    'https://www.linkedin.com/in/revvaughn/',
    'https://x.com/RaulRevVaughn',
  ],
}

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://aiinnercircle.com/#organization',
  name: 'AI Inner Circle',
  description:
    'A private community and coaching program for founder-led brands building GTM and revenue growth systems with AI.',
  url: 'https://aiinnercircle.com',
  founder: { '@id': 'https://aiinnercircle.com/#person' },
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://aiinnercircle.com/#website',
  url: 'https://aiinnercircle.com',
  name: 'AI Inner Circle',
  description: 'Where founder-led brands build revenue systems that actually scale.',
  publisher: { '@id': 'https://aiinnercircle.com/#organization' },
  inLanguage: 'en-US',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
      </head>
      <body>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YMW2HJJM2L" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YMW2HJJM2L');
        `}</Script>
      </body>
    </html>
  )
}
