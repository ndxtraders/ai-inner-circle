import { NextResponse } from 'next/server'

// Adds a subscriber to the MailerLite waitlist group for their audience.
// Joining the group is what triggers that audience's waitlist automation.
//
// The group is resolved server-side from `audience`. The client never sends a
// group ID: a client-supplied ID would let anyone POST here and inject emails
// into any group in the account.
const GROUP_ENV_BY_AUDIENCE = {
  consultants: 'MAILERLITE_WAITLIST_GROUP_ID_CONSULTANTS',
  coaches: 'MAILERLITE_WAITLIST_GROUP_ID_COACHES',
}

export async function POST(request) {
  try {
    const { email, name, audience } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    const groupEnvKey = GROUP_ENV_BY_AUDIENCE[audience]
    if (!groupEnvKey) {
      console.error('Unknown waitlist audience:', audience)
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY
    const groupId = process.env[groupEnvKey]

    if (!MAILERLITE_API_KEY || !groupId) {
      console.error(`Missing MAILERLITE_API_KEY or ${groupEnvKey}`)
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const payload = {
      email,
      groups: [groupId],
      // Tagged so the two lists stay separable even if they are ever merged.
      fields: { audience },
    }

    if (name && name.trim()) {
      payload.fields.name = name.trim()
    }

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify(payload),
    })

    // MailerLite returns 200 for an existing subscriber and 201 for a new one.
    if (response.ok) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    if (response.status === 422) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 422 })
    }

    if (response.status === 429) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a moment.' },
        { status: 429 }
      )
    }

    const data = await response.json().catch(() => ({}))
    console.error('MailerLite waitlist error:', response.status, data)
    return NextResponse.json({ error: 'Failed to join the waitlist' }, { status: response.status })
  } catch (error) {
    console.error('Waitlist route error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
