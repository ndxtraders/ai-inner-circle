// /map now redirects to /consultants/assessment (the B2B assessment moved).
// Keep this route working for existing links/ads, but don't index the
// redirect page — the canonical assessment lives at /consultants/assessment.
export const metadata = {
  title: 'AI Priority Map — Rev Vaughn',
  description:
    'A 5-minute diagnostic for founder-led brands. Identify where AI gives you leverage and where you have a systems problem first.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://aiinnercircle.com/consultants/assessment' },
}

export default function MapLayout({ children }) {
  return children
}
