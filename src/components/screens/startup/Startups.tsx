import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import StartUpCard from '../../ui/StartUpCard/StartUpCard'

import Filter from './Filter/Filter'
import StartUpHeader from './StartUpHeader/StartUpHeader'
import styles from './Startups.module.scss'
import { IStartups } from './startups.interface'
import { startUpService } from '@/src/services/startup.service'

const Startups: FC<IStartups> = ({ startups }) => {
	const { isLoading, data } = useQuery(
		['get data'],
		() => startUpService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	return (
		<div className={styles.wrapper}>
			<StartUpHeader />

			<div className={styles.main}>
				<Filter />
				{startups ? (
					startups.map((s) => <StartUpCard card={s} />)
				) : (
					<div>no data</div>
				)}
			</div>
		</div>
	)
}

export default Startups
