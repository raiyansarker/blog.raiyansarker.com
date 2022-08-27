const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['media.raiyansarker.com'],
  },
  experimental: { images: { allowFutureImage: true } },
};

module.exports = nextConfig;
