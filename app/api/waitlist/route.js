import { NextResponse } from 'next/server'

// Adds a subscriber to the AI Brain waitlist group in MailerLite.
// Joining that group is what triggers the "AI Brain waitlist" automation.
// Kept separate from /api/subscribe so the assessment flow is unaffected.
export async function POST(request) {
  try {
    const { email, name } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY
    const MAILERLITE_WAITLIST_GROUP_ID = process.env.MAILERLITE_WAITLIST_GROUP_ID

    if (!MAILERLITE_API_KEY || !MAILERLITE_WAITLIST_GROUP_ID) {
      console.error('Missing MailerLite waitlist environment variables')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const payload = {
      email,
      groups: [MAILERLITE_WAITLIST_GROUP_ID],
    }

    // First name is optional — only send it if provided.
    if (name && name.trim()) {
      payload.fields = { name: name.trim() }
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

    const data = await response.json()

    // MailerLite returns 200 or 201 for new and existing subscribers
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

    console.error('MailerLite waitlist error:', response.status, data)
    return NextResponse.json({ error: 'Failed to join the waitlist' }, { status: response.status })
  } catch (error) {
    console.error('Waitlist route error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
