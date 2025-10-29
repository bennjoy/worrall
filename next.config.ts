import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  basePath: (isProd && isGitHubPages) ? '/worrall' : '',
  assetPrefix: (isProd && isGitHubPages) ? '/worrall' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
