import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    qualities: [72, 75],
    unoptimized: true,
  },
  basePath: isProd ? "/activelearning-web" : "",
  assetPrefix: isProd ? "/activelearning-web/" : "",
};

export default nextConfig;