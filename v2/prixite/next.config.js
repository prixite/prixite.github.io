/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/v2/prixite",
  assetPrefix: "/v2/prixite",
  }

module.exports = nextConfig
