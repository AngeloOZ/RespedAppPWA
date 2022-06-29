/* @type {import('next').NextConfig} */
const withPWA = require('next-pwa')


module.exports = withPWA({
  pwa: {
    dest: 'public'
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  }
})

// const nextConfig = {
//   reactStrictMode: true,
//   eslint: {
//     ignoreDuringBuilds: true,
//   }
// }

// module.exports = nextConfig
