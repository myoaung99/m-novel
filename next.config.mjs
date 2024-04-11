/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "book-pic.webnovel.com",
      },
    ],
  },
};

export default nextConfig;
