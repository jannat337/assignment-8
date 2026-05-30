/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: ['better-sqlite3'],
    server: {
        port: process.env.PORT || 3000,
    }
};

export default nextConfig;