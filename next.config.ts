import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "", // Optional: Specify a port if needed, otherwise leave empty
        pathname: "/**", // Matches paths starting with /account123/
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // Matches paths starting with /images/
      },
    ],
  },
};

export default nextConfig;
