import { ImageResponse } from 'next/og'

// Generated at build time so every route inherits a social card. There was no
// 1200x630 asset in public/, and static export could not have produced one.
// This card is inherited by every route, so it carries the homepage headline.
// Update it whenever the homepage H1 changes, or shared links advertise
// positioning the site no longer uses.
export const alt = 'AI Inner Circle — Self-staffing AI Teams that run without you as the bottleneck'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0f0f0f',
          padding: '72px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#83B14E',
            fontWeight: 600,
          }}
        >
          AI Inner Circle
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 62,
            lineHeight: 1.15,
            color: '#ffffff',
            fontWeight: 600,
            letterSpacing: '-0.02em',
          }}
        >
          Self-staffing AI Teams that run without you as the bottleneck.
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', width: '56px', height: '4px', background: '#83B14E' }} />
          <div style={{ display: 'flex', fontSize: 28, color: '#9a9a9a' }}>
            Rev Vaughn · Your voice. AI doing the work.
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
