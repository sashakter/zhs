import createNextIntlPlugin from 'next-intl/plugin'
const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' },
    ],
  },
  webpack: (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = { ...(config.resolve.alias || {}), canvas: false }
    return config
  },
  async redirects() {
    return [{ source: '/', destination: '/uk', permanent: false }]
  },
}

export default withNextIntl(nextConfig)
