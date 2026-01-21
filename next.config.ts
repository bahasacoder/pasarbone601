import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    localPatterns: [
      {
        pathname: '/public/**',
        search: '',
      },
    ],
      remotePatterns: [new URL('https://raw.githubusercontent.com/free-whiteboard-online/**')],
  },
  
};

export default nextConfig;
