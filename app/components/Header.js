'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import AnnouncementBar from './AnnouncementBar'

// The two program pages sit under a Membership parent that links to the hub
// at /join. Keeping them nested stops the nav from asking a visitor to pick a
// track before anything has explained the difference.
const PROGRAMS = [
  ['/consultants', 'Consultants'],
  ['/coaches', 'Coaches'],
]

// /resources holds more than these two. The parent link still goes there, so
// nothing on that page becomes unreachable by surfacing only two children.
const RESOURCES = [
  ['/articles', 'Articles'],
  ['/case-studies', 'Case Studies'],
]

// Desktop dropdown. Opens on hover, and on focus so it stays keyboard reachable.
function NavDropdown({ href, label, items }) {
  return (
    <div className="relative group">
      <Link
        href={href}
        className="text-ink-muted hover:text-ink transition-colors flex items-center gap-1"
      >
        {label}
        <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
      </Link>
      <div className="absolute left-0 top-full pt-3 hidden group-hover:block group-focus-within:block z-20">
        <div className="border border-rule bg-paper py-2 min-w-[11rem]">
          {items.map(([itemHref, itemLabel]) => (
            <Link
              key={itemHref}
              href={itemHref}
              className="block px-4 py-2 text-ink-muted hover:text-ink hover:bg-paper-grey transition-colors"
            >
              {itemLabel}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// The mobile panel has room to show children inline, so no toggle.
function MobileGroup({ href, label, items, onNavigate }) {
  return (
    <>
      <Link href={href} className="text-ink-muted hover:text-ink transition-colors" onClick={onNavigate}>
        {label}
      </Link>
      {items.map(([itemHref, itemLabel]) => (
        <Link
          key={itemHref}
          href={itemHref}
          className="pl-4 text-ink-muted hover:text-ink transition-colors"
          onClick={onNavigate}
        >
          {itemLabel}
        </Link>
      ))}
    </>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

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
          <NavDropdown href="/join" label="Membership" items={PROGRAMS} />
          <Link href="/workshops" className="text-ink-muted hover:text-ink transition-colors">
            Workshops
          </Link>
          <NavDropdown href="/resources" label="Resources" items={RESOURCES} />
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
          <Link href="/assessment" className="text-ink-muted hover:text-ink transition-colors" onClick={close}>
            AI Assessment
          </Link>
          <MobileGroup href="/join" label="Membership" items={PROGRAMS} onNavigate={close} />
          <Link href="/workshops" className="text-ink-muted hover:text-ink transition-colors" onClick={close}>
            Workshops
          </Link>
          <MobileGroup href="/resources" label="Resources" items={RESOURCES} onNavigate={close} />
          <Link href="/contact" className="text-ink-muted hover:text-ink transition-colors" onClick={close}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}
