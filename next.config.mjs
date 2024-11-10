// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true, // Enables faster minification
    experimental: {
      appDir: true, // Required if you are using the app directory structure
    },
    reactStrictMode: true,
  };
  
  export default nextConfig;
  