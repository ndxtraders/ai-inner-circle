import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-rule bg-paper-grey">
      <div className="max-w-wide mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-small text-ink-muted">
        <div>© {year} Rev Vaughn. All rights reserved.</div>
        {/* The homepage stopped linking /ai-second-opinion and the 1:1 coaching
            tier when it shipped on 2026-08-01. It was the only inbound link to
            either, so they live here now. Do not drop these without giving them
            another home first. */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link href="/ai-second-opinion" className="hover:text-ink transition-colors">
            AI Second Opinion
          </Link>
          <Link href="/contact" className="hover:text-ink transition-colors">
            1:1 Coaching
          </Link>
          <Link href="/resources" className="hover:text-ink transition-colors">
            Resources
          </Link>
          <Link href="/contact" className="hover:text-ink transition-colors">
            Contact
          </Link>
          <Link href="/privacy-terms" className="hover:text-ink transition-colors">
            Privacy &amp; Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
