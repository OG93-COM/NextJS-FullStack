/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
            pathname: "**"
          },
          {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
            pathname: "**"
          },
        ],
        deviceSizes:[300,420,768,1024,1200],
        imageSizes: [8,16,32,48,64,96],
        formats:["image/webp","image/avif"],
        minimumCacheTTL:60,
      },
};

export default nextConfig;
