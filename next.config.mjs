/** @type {import('next').NextConfig} */
const nextConfig = {
  // 첫 페이지를 index가 아닌 특정 라우트(/main)로 설정
  async redirects() {
    return [
      {
        source: "/",
        destination: "/main",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
