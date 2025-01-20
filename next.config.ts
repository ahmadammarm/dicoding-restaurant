import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "restaurant-api.dicoding.dev",
                port: "",
                pathname: "/images/**"
            }
        ]
    }
};

export default nextConfig;
