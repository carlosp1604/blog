/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: [
      'Modules',
      'pages',
      'persistence',
      'types',
    ],
  }
}

module.exports = nextConfig
