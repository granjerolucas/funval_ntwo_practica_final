/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        // pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        // pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "openweathermap.org",
        port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
