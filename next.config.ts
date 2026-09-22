import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - explicitly allow the local IP address for mobile testing
  allowedDevOrigins: ['192.168.1.12'],
  // output: "export", // Disabled temporarily to allow local backend API routes to work
  basePath: process.env.NODE_ENV === 'production' ? "/custom" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
