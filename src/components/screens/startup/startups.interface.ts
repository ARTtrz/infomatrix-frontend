export interface IStartup {
	id: number
	name: string
	category: string
	description: string
	money: number
	city: string
	avatar: string
}

export interface IStartups {
	startups: IStartup[]
}
