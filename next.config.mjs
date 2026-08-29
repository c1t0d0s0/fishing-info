/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH !== undefined ? process.env.BASE_PATH : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  basePath: basePath === "" ? undefined : basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_GTM_ID: process.env.GTM_ID || process.env.NEXT_PUBLIC_GTM_ID || "",
    NEXT_PUBLIC_GA_ID: process.env.GA_ID || process.env.NEXT_PUBLIC_GA_ID || process.env.GA_MEASUREMENT_ID || "",
  },
};

export default nextConfig;
