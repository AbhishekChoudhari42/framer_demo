/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol:'https',
                hostname:'images.unsplash.com',
            },
            {
                protocol:'https',
                hostname:'unsplash.com',
            },
            {
                protocol:'https',
                hostname:'c.tenor.com',
            },
    ] 
    }
};

export default nextConfig;
