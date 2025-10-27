import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  basePath: '/worrall',
  assetPrefix: '/worrall',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
