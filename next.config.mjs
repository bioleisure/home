/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. 设置输出为静态导出
  output: 'export',

  // 2. 设置基础路径，因为你的网站会部署在 /home/ 子目录下
  basePath: '/home',
  assetPrefix: '/home',

  // 3. 静态导出不支持 Next.js 的图片优化，需要禁用
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
