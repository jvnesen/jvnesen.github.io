/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: { unoptimized: true },
  basePath: isProd ? '/jvnesen.github.io' : '',
  assetPrefix: isProd ? '/jvnesen.github.io/' : '',
  basePath: '', // No basePath needed for user site at root
  assetPrefix: './', // Ensures assets are served relative to the root,
};

module.exports = nextConfig;
