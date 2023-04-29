import axios, { AxiosHeaders } from 'axios'

import { API_URL } from '@/src/config/api.config'

//url для бекенда

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})
