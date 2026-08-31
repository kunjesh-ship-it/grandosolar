/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { formats: ['image/avif', 'image/webp'] },
  trailingSlash: false,
  allowedDevHosts: ['*'],
};
export default nextConfig;
