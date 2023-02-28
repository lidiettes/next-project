// next.config.js
const nextConfig = {
  experimental: {
    appDir: true,
    optimizeFonts: {
      fonts: [
        {
          family: 'Space Grotesk',
      
          subsets: ['latin-ext'],
        },
      ],
    },
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
