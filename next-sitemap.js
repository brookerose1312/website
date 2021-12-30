module.exports = {
  siteUrl: "https://chromelia.dev",
  generateRobotsTxt: true,
  exclude: ["/sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://chromelia.dev/sitemap.xml",
    ],
  },
};
