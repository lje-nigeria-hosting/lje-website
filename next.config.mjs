/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zkqioqvlrhabpzqgotnc.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
