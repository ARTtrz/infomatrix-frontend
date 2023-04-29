import { GetStaticProps, NextPage } from 'next'
import { FC } from 'react'

import StartupPageItem from '@/src/components/screens/startupPage/StartupPage'
import { IStartupPage } from '@/src/components/screens/startupPage/StartupPage.interface'

const StartupPage: NextPage<IStartupPage> = ({ startup }) => {
	return <StartupPageItem startup={startup} />
}

export default StartupPage
