// page.js is a client component and cannot export metadata, so it lives here.
// Without this the route inherited the root title and had no canonical of its own.
export const metadata = {
  title: 'AI Priority Map for Coaches | Rev Vaughn',
  description:
    'A 5-minute diagnostic for coaches. Find the breaking points in your offer, your conversations, and your content engine, and the AI Assistant that fixes each. Free, no email required.',
  alternates: { canonical: '/coaches/assessment' },
  openGraph: {
    title: 'AI Priority Map for Coaches | Rev Vaughn',
    description:
      'A 5-minute diagnostic for coaches. Find the breaking points in your offer, your conversations, and your content engine, and the AI Assistant that fixes each.',
    url: 'https://aiinnercircle.com/coaches/assessment',
    siteName: 'AI Inner Circle',
    type: 'website',
  },
}

export default function CoachesAssessmentLayout({ children }) {
  return children
}
