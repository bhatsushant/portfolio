/** @type {import('next').NextConfig} */
const moduleExports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  webpack: config => {
    /* ... */
  },
  sentry: {
    /* ... */
  },
  env: {
    /* ... */
  },
  transpilePackages: ["@codegouvfr/react-dsfr", "tss-react"]
};
export default {
  /* ... */
};
