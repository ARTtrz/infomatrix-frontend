/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	optimizeFonts: false,
	reactStrictMode: true,
	env: {
		APP_URL: process.env.APP_URL
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.mds.yandex.net'
			},
			{
				protocol: 'https',
				hostname: 'pbs.twimg.com'
			}
		]
	}
}

module.exports = nextConfig
