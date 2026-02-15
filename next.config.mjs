/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
    // Explicitly disable i18n routing to prevent redirects
    i18n: null,
};

export default nextConfig;
