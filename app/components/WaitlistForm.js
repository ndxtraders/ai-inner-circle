'use client'

import { useState } from 'react'

// Inline AI Brain waitlist form. Posts to /api/waitlist, which adds the
// subscriber to the MailerLite waitlist group (triggering the automation).
// First name is optional; email is required.
export default function WaitlistForm({ buttonLabel = 'Join the Waitlist', className = '' }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        const data = await res.json().catch(() => ({}))
        setError(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setError('Network error. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={`border border-accent bg-accent-soft p-5 max-w-md ${className}`}>
        <p className="text-body font-medium text-ink">You&rsquo;re on the waitlist.</p>
        <p className="text-small text-ink-muted mt-1">
          Check your inbox &mdash; we&rsquo;ll email you the moment enrollment opens, plus how to lock
          in founder&rsquo;s pricing.
        </p>
      </div>
    )
  }

  const inputClass =
    'px-5 py-3 bg-paper border border-rule text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors disabled:opacity-50'

  return (
    <form onSubmit={handleSubmit} className={`max-w-md ${className}`}>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="First name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === 'loading'}
          className={inputClass}
        />
        <input
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          className={inputClass}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-ink text-paper border border-ink hover:bg-accent hover:border-accent disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Joining…' : buttonLabel}
        </button>
      </div>
      {error && (
        <p className="text-small mt-3 font-medium" style={{ color: '#d9534f' }}>
          {error}
        </p>
      )}
    </form>
  )
}
