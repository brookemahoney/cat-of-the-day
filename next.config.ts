import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: '*cloudfront.net',
      port: '',
      pathname: '/**'
    }]
  }
};

export default nextConfig;
