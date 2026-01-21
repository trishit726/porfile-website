import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack (use Webpack for stable builds)
  experimental: {
    // @ts-ignore - turbo is a valid config option in Next.js 15+
    turbo: false,
  },
};

export default nextConfig;
