module.exports = {
  siteUrl: "https://brookero.se",
  generateRobotsTxt: true,
  exclude: ["/sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://brookero.se/sitemap.xml",
    ],
  },
};
