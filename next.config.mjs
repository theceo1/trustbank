/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',
  images: {
    domains: ['localhost'],
    loader: 'default',
    path: '/_next/image',
  },
};

export default nextConfig;