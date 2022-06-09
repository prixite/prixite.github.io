/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/prixite",
  assetPrefix: "/prixite",
}

module.exports = nextConfig
