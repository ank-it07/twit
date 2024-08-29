/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["pbs.twimg.com"], // Corrected the domain array
    },
};

export default nextConfig;
