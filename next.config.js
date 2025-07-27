/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {}
  },
  images: {
    domains: ['images.unsplash.com']
  }
}

module.exports = nextConfig