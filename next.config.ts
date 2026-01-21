// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media*.giphy.com",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "ichef.bbci.co.uk",
        pathname: "/ace/ws/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.thecitizen.co.tz",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
