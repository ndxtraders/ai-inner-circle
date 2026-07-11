'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// The B2B assessment moved to /consultants/assessment. This route now
// redirects there so existing /map links and ad campaigns keep working.
export default function MapRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/consultants/assessment')
  }, [router])

  return (
    <main className="bg-paper">
      <div className="max-w-content mx-auto px-6 py-section text-center">
        <p className="text-body text-ink-muted">
          Taking you to the assessment&hellip;{' '}
          <Link href="/consultants/assessment" className="text-accent underline underline-offset-2">
            Continue
          </Link>
        </p>
      </div>
    </main>
  )
}
