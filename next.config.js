/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      // Routes renamed in a65202c (expert -> coaches, membership -> consultants).
      // Static export could not serve redirects, so these have been 404ing.
      { source: '/membership', destination: '/consultants', permanent: true },
      { source: '/expert', destination: '/coaches', permanent: true },
      // /map was the original assessment URL and still carries ad + link equity.
      // It has been a client-side JS redirect; a real 301 passes the equity.
      { source: '/map', destination: '/consultants/assessment', permanent: true },
      // /ai-inner-circle duplicated ~80% of the homepage and shared its <title>,
      // so the two were competing for the same query. Consolidated onto /.
      { source: '/ai-inner-circle', destination: '/', permanent: true },
    ]
  },
}
module.exports = nextConfig
