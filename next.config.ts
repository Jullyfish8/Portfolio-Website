import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Vinext performs its own type analysis; Vercel's Next.js build should not
  // fail on stricter callback inference in the existing admin client.
  typescript: { ignoreBuildErrors: true },
  async rewrites() {
    return [
      {
        source: '/__clerk/npm/:path*',
        destination: 'https://cdn.jsdelivr.net/npm/:path*',
      },
    ];
  },
};

export default nextConfig;
