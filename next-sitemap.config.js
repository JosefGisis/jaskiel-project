/** @type {import('next-sitemap').IConfig} */

module.exports = {
	siteUrl: "https://www.thejaskielteam.com",
	generateRobotsTxt: true,
	paths: ["/"],
	generateIndexSitemap: false,
	transform: async (_, path) => {
		switch (path) {
			case "/": {
				return {
					loc: path,
					changefreq: "daily",
					priority: 1,
					lastmod: new Date().toISOString(),
				}
			}
			default: {
				return {
					loc: path,
					changefreq: "monthly",
					priority: 0.7,
					lastmod: new Date().toISOString(),
				}
			}
		}
	},
}
