/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "logos.public.blob.vercel-storage.com",
				port: "",
			},
		],
	},
}

module.exports = nextConfig
