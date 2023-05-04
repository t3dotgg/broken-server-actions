/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    experimentalReact: true,
    serverActions: true,
  },
};

module.exports = nextConfig;
