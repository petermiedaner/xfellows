import type { NextConfig } from "next";

const basePath = "/xfellows";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
};

export default nextConfig;