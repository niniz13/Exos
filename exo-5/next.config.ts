import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.openfoodfacts.org',
        port: '',
        pathname: '/images/products/**',
      },
    ],
  },
  reactStrictMode: true,
  env: {
    PORT: process.env.PORT,
  },
};

export default nextConfig;
