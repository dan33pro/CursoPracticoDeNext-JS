/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com', 'www.google.com', 'api.lorem.space', 'www.pngkey.com'],
  },
}

module.exports = nextConfig
