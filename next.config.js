/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	optimizeFonts: false,
	reactStrictMode: true,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		API_URL: process.env.API_URL
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:4200/api/:path*'
			}
		]
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
