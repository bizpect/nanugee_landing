import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/app-ads.txt',      // 경로
        destination: '/app-ads.txt', // 리디렉션 없이 동일 경로로 서빙
        permanent: false,            // 리디렉션이 영구적이지 않음
      },
    ];
  },
};

export default nextConfig;
