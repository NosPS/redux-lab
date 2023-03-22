/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/user-api/:path*',
        destination: "http://jsonplaceholder.typicode.com/:path*",
      },
      {
        source: '/props-api/:path*',
        destination: "http://test.typicode.com/:path*",
      },
    ]
  },
}

module.exports = nextConfig
