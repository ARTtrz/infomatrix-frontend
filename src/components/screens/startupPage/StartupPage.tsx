import { FC } from 'react'

import StartUpHeader from '../startup/StartUpHeader/StartUpHeader'

import { IStartupPage } from './StartupPage.interface'
import styles from './StartupPage.module.scss'
import StartUpPageHeader from './startupPageHeader/StartUpPageHeader'
import Meta from '@/src/utils/meta/Meta'

const StartupPageItem: FC<IStartupPage> = ({ startup }) => {
	return (
		<Meta title={startup.name}>
			<div className={styles.wrapper}>
				<StartUpPageHeader />
			</div>
		</Meta>
	)
}

export default StartupPageItem
