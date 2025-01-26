/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React Strict Mode
  swcMinify: true, // Uses SWC for minification (faster builds)
  images: {
    domains: ['example.com'], // Add domains for external images if needed
  },
  async redirects() {
    return [
      {
        source: '/old-tool', // Redirect old paths to new ones
        destination: '/new-tool',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
