/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        // port: "",
        // pathname: "/account123/**",
      },
    ],
    domains: ["https://randomuser.me/api/portraits"],
  },
};

module.exports = nextConfig;
