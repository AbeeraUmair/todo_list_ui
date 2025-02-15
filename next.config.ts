import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // ✅ Redirect API calls
        destination: "https://todolistapi-production-508e.up.railway.app/:path*", // ✅ Proxy backend
      },
    ];
  },
};

export default nextConfig;
