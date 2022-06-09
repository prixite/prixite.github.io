/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },
  basePath: "/prixite.github.io",
  assetPrefix: "/prixite.github.io",
}

module.exports = nextConfig
