/** @type {import('next').NextConfig} */
const path = require("path");

// Disable telemetry and analytics
process.env.NEXT_TELEMETRY_DISABLED = "1";
process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_DISABLED = "1";

const nextConfig = {
  reactStrictMode: true,
  // output: "export", // Commented out to allow next start
  outputFileTracingRoot: path.join(__dirname, "../"),
  images: {
    unoptimized: true,
  },
  experimental: {
    webVitalsAttribution: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
