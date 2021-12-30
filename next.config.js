const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  siteUrl: process.env.SITE_URL || "https://chromelia.dev",
  generateRobotsTxt: true, // (optional)
});
