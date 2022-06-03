/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "phantom.pe",
      "w7.pngwing.com",
      "logodownload.org",
      "dtj8xnxpygn9a.cloudfront.net",
      "e7.pngegg.com",
    ],
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NEXT_PUBLIC_URL_API_BACKEND, // production api
  },
};

module.exports = nextConfig;
