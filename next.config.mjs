/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH !== undefined ? process.env.BASE_PATH : "/fishing-info";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  basePath: basePath === "" ? undefined : basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
