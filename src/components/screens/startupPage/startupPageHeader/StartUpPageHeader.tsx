import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Logo from '../../../../../public/logostart.png'
import { IStartupPage } from '../StartupPage.interface'

import styles from './StartUpPageHeader.module.scss'

const StartUpPageHeader: FC<IStartupPage> = ({ startup }) => {
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
			<div className={styles.main_info}>
				<Image
					src={startup.logo}
					width={200}
					height={200}
					alt='logo'
				/>
				<h1 className={styles.title}>{startup.name}</h1>
				<p className={styles.country}>{startup.region}</p>
				<p className={styles.field}>{startup.industry}</p>
			</div>
		</div>
	)
}

export default StartUpPageHeader
