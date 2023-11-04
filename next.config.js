/** @type {import('next').NextConfig} */
const locales = ["es"];
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales,
    defaultLocale: "es",
  },
};

module.exports = nextConfig;
