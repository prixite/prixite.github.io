/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
}

module.exports = {
  env: {
    NEXT_PUBLIC_ERP_BASEPATH: 'https://stg-erp.prixite.com',
  },
  nextConfig,
}
