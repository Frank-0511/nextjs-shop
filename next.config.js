/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["phantom.pe"],
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NEXT_PUBLIC_URL_API_BACKEND, // production api
  },
};

module.exports = nextConfig;
