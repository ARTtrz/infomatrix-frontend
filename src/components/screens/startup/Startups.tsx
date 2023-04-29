import { FC } from 'react'

import StartUpCard from '../../ui/StartUpCard/StartUpCard'

import Filter from './Filter/Filter'
import StartUpHeader from './StartUpHeader/StartUpHeader'
import styles from './Startups.module.scss'
import { IStartups } from './startups.interface'

const Startups: FC<IStartups> = ({ startups }) => {
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
