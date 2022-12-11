/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "codingthailand.com" },
      { protocol: "https", hostname: "api.codingthailand.com" },
    ],
  },
};

module.exports = nextConfig;
