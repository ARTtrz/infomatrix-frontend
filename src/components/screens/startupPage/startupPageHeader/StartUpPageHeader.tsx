import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Logo from '../../../../../public/logostart.png'

import styles from './StartUpPageHeader.module.scss'

const StartUpPageHeader: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.nav}>
					<Link href='/'>Экосистема</Link>
					<Link href='/'>Главная</Link>
				</div>
				<Link href='/'>
					<Image
						src={Logo}
						className={styles.logo}
						alt='img'
						width={120}
						height={120}
					/>
				</Link>
				<div className={styles.user}>Артем</div>
			</div>
			<div className={styles.search}></div>
		</div>
	)
}

export default StartUpPageHeader
