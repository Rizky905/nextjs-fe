/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    modularizeImports: {
        "@mui/icons-material": {
            transform: "@mui/icons-material/{{member}}",
        },
    },
};

export default nextConfig;
