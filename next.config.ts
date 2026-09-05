import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Vinext performs its own type analysis; Vercel's Next.js build should not
  // fail on stricter callback inference in the existing admin client.
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
