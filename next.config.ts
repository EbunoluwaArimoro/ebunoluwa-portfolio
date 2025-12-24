import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Optimize Images
  images: {
    formats: ['image/avif', 'image/webp'], // Converts images to smaller, modern formats
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // 2. Production Optimizations
  compiler: {
    // Automatically removes console.logs in production to save bytes
    removeConsole: process.env.NODE_ENV === "production",
  },

  // 3. Experimental features for performance
  experimental: {
    // Helps with the "Legacy JavaScript" issue by optimizing the build for modern browsers
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;