/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com', 'www.google.com', 'api.lorem.space', 'www.pngkey.com', 'images.unsplash.com'],
    unoptimized: true,
  },
};

const withPWA = require('next-pwa') ({
  dest: 'public',
  include: ['production'],
  register: true,
});

module.exports = withPWA(nextConfig);