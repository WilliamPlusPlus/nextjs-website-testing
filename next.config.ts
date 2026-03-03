import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    basePath: process.env.PAGES_BASE_PATH,
  }),
};

export default nextConfig;
