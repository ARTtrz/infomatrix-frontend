import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

import { IStartup } from '../../screens/startup/startups.interface'

import styles from './StartUpCard.module.scss'

const StartUpCard: FC<{ card: IStartup }> = ({ card }) => {
	return (
		<div className={styles.wrapper}>
			<Image src={card.avatar} width={100} height={100} alt='ava' />
			<div className={styles.description}>
				<h1>{card.name}</h1>
				<div className={styles.category}>{card.category}</div>
				<div className={styles.text}>{card.description}</div>
				<div className={styles.money}>{card.money}</div>
				<Link href='/' className={styles.link}>
					Перейти
				</Link>
			</div>
			<div className={styles.info}>
				<div>{card.city}</div>
				<MdOutlineFavoriteBorder />
			</div>
		</div>
	)
}

export default StartUpCard
