import { NextPage } from 'next'

import Startups from '@/src/components/screens/startup/Startups'
import { StartUpData } from '@/src/components/screens/startup/startup.data'

const StartUpsPage: NextPage = () => {
	return <Startups startups={StartUpData} />
}

export default StartUpsPage
