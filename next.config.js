/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  basePath: '', // No basePath needed for user site at root
  assetPrefix: './', // Ensures assets are served relative to the root,
};

module.exports = nextConfig;
