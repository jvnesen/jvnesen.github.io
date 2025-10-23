/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: { unoptimized: true },
  basePath: isProd ? '/jvnesen.github.io' : '', // Use repo name as basePath in production
  assetPrefix: isProd ? '/jvnesen.github.io/' : '', // Use repo name as assetPrefix in production
};

module.exports = nextConfig;
