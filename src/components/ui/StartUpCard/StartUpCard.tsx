import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

import styles from './StartUpCard.module.scss'
import { IStartUp } from '@/src/shared/types/startup.types'

const StartUpCard: FC<{ card: IStartUp }> = ({ card }) => {
	return (
		<div className={styles.wrapper}>
			<Image src={card.logo} width={100} height={100} alt='ava' />
			<div className={styles.description}>
				<h1>{card.name}</h1>
				<div className={styles.category}>{card.industry}</div>
				<div className={styles.text}>{card.description}</div>
				<div className={styles.money}>{card.lowestInvestment}</div>
				<Link href='/' className={styles.link}>
					Перейти
				</Link>
			</div>
			<div className={styles.info}>
				<div>{card.region}</div>
				<MdOutlineFavoriteBorder />
			</div>
		</div>
	)
}

export default StartUpCard
