/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  swcMinify: true,
  output: "export", // Ensure static export is enabled
  trailingSlash: true, // Fixes navigation issues for static export
  webpack: config => {
    return config;
  },
  transpilePackages: ["@codegouvfr/react-dsfr", "tss-react"]
};

export default nextConfig;
