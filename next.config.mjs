/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Cualquier ruta que comience con /api/
        destination: "http://localhost:9000/:path*", // El servidor backend Play Framework
      },
    ];
  },
};

export default nextConfig;
