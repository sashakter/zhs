import createNextIntlPlugin from 'next-intl/plugin'
const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      canvas: false,
    }
    return config
  },

  // Можно вовсе убрать redirects(). Если хочешь оставить только корневой — раскомментируй:
  async redirects() {
    return [{ source: '/', destination: '/uk', permanent: false }]
  },
}

export default withNextIntl(nextConfig)
