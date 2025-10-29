import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  basePath: isProd ? '/worrall' : '',
  assetPrefix: isProd ? '/worrall' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
