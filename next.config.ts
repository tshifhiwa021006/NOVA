import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  output: "export",
  basePath: "/NOVA",
  trailingSlash: true,
};

export default nextConfig;
