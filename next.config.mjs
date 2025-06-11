/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  reactStrictMode: false,
  
  images: {
     unoptimized: true,
    domains: ['images.unsplash.com', 'th.bing.com', 'www.bing.com'],
  },
};

export default nextConfig;
