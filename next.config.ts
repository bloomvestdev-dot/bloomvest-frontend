import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "awesome-cows-d1cb03b3fc.media.strapiapp.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
