import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 👇 ESTA ES LA CLAVE para exportar a HTML estático
  output: 'export',

  // 👇 Esto es necesario si usás <Image /> en páginas estáticas
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // 👇 Opcional pero recomendado para evitar errores en el build export
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

