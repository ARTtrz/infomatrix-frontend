export const API_URL = `${process.env.API_URL}`

export const getStartupUrl = (string: string) => {
	return `/get_startups${string}`
}
