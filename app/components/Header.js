'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import AnnouncementBar from './AnnouncementBar'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-rule bg-paper">
      <AnnouncementBar />
      <div className="max-w-wide mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight hover:text-accent transition-colors">
          AI Inner Circle
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-small">
          <Link href="/assessment" className="text-ink-muted hover:text-ink transition-colors">
            AI Assessment
          </Link>
          <Link href="/consultants" className="text-ink-muted hover:text-ink transition-colors">
            For B2B Consultants
          </Link>
          <Link href="/coaches" className="text-ink-muted hover:text-ink transition-colors">
            For B2B Coaches
          </Link>
          <Link href="/workshops" className="text-ink-muted hover:text-ink transition-colors">
            Workshops
          </Link>
          <Link href="/resources" className="text-ink-muted hover:text-ink transition-colors">
            Resources
          </Link>
          <Link href="/contact" className="text-ink-muted hover:text-ink transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1 text-ink hover:text-accent transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <nav className="md:hidden border-t border-rule bg-paper px-6 py-4 flex flex-col gap-4 text-small">
          <Link href="/assessment" className="text-ink-muted hover:text-ink transition-colors" onClick={() => setOpen(false)}>
            AI Assessment
          </Link>
          <Link href="/consultants" className="text-ink-muted hover:text-ink transition-colors" onClick={() => setOpen(false)}>
            For B2B Consultants
          </Link>
          <Link href="/coaches" className="text-ink-muted hover:text-ink transition-colors" onClick={() => setOpen(false)}>
            For B2B Coaches
          </Link>
          <Link href="/workshops" className="text-ink-muted hover:text-ink transition-colors" onClick={() => setOpen(false)}>
            Workshops
          </Link>
          <Link href="/resources" className="text-ink-muted hover:text-ink transition-colors" onClick={() => setOpen(false)}>
            Resources
          </Link>
          <Link href="/contact" className="text-ink-muted hover:text-ink transition-colors" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}
