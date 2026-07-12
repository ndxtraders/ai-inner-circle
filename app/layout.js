import { Poppins } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

const DESCRIPTION =
  'Where founder-led brands build revenue systems that actually scale. Your voice. AI doing the work.'

export const metadata = {
  metadataBase: new URL('https://aiinnercircle.com'),
  title: 'AI Inner Circle | Rev Vaughn',
  description: DESCRIPTION,
  // Apex is canonical. www 301s to it at the platform level.
  alternates: { canonical: '/' },
  openGraph: {
    title: 'AI Inner Circle | Rev Vaughn',
    description: DESCRIPTION,
    url: 'https://aiinnercircle.com',
    siteName: 'AI Inner Circle',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Inner Circle | Rev Vaughn',
    description: DESCRIPTION,
    creator: '@RaulRevVaughn',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
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
  logo: {
    '@type': 'ImageObject',
    url: 'https://aiinnercircle.com/AI-Inner-Circle-Logo-940.jpg',
  },
  image: 'https://aiinnercircle.com/AI-Inner-Circle-Logo-940.jpg',
  founder: { '@id': 'https://aiinnercircle.com/#person' },
  sameAs: [
    'https://revvaughn.com',
    'https://www.linkedin.com/in/revvaughn/',
    'https://x.com/RaulRevVaughn',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    url: 'https://aiinnercircle.com/contact',
    availableLanguage: 'English',
  },
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
