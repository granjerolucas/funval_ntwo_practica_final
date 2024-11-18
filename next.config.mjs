/** @type {import('next').NextConfig} */
import i18Config from "./next-i18next.config.mjs" 
const nextConfig = {
  // i18n: i18Config.i18n,
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
