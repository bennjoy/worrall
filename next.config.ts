import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  basePath: isGithubPages ? '/worrall' : '',
  assetPrefix: isGithubPages ? '/worrall' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
