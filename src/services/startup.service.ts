import axios from 'axios'

import { getStartupUrl } from '../config/api.config'
import { IStartUp } from '../shared/types/startup.types'

import { axiosClassic } from '@/pages/api/interceptor'

export const startUpService = {
	async getAll() {
		return axiosClassic.get<IStartUp[]>(getStartupUrl(''))
	}
}
