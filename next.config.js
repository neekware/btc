/** @type {import('next').NextConfig} */
// Disable telemetry and analytics
process.env.NEXT_TELEMETRY_DISABLED = "1";
process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_DISABLED = "1";

const nextConfig = {
  reactStrictMode: true,
  // output: "export", // Commented out to allow next start
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webVitalsAttribution: [],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
