import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set NEXT_BASE_PATH=/main in production while the frontend lives at
  // happy2host.africa/main. Remove the env var (or leave it unset) once
  // the frontend moves to the domain root.
  basePath: process.env.NEXT_BASE_PATH || undefined,
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8888",
        pathname: "/h2h_africa/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "happy2host.africa",
        pathname: "/cmsadmin/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
