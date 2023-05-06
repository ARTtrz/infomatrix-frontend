import { NextPage } from 'next'

import Startups from '@/src/components/screens/startup/Startups'
import {
	StartUpData,
	singleStartup
} from '@/src/components/screens/startup/startup.data'
import StartupPageItem from '@/src/components/screens/startupPage/StartupPage'

const StartUpPage: NextPage = () => {
	return <StartupPageItem startup={singleStartup} />
}

export default StartUpPage
