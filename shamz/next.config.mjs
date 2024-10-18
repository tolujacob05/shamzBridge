/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "**",
      },
    ],
    domains: [
      "console.cloudinary.com",
      "res.cloudinary.com",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
