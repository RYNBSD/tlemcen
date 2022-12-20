/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false,
    // nextScriptWorkers: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
