import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   typescript: {
    ignoreBuildErrors: true, 
  },
  experimental:{
    optimizeCss: true,
  },
};

export default nextConfig;
