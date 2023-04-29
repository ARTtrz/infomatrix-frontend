import Image from 'next/image'
import { FC } from 'react'

import Logo from '../../../../../public/logostart.png'
import Link from 'next/link'
import SearchField from './SearchField/SearchField'
import styles from './StartUpHeader.module.scss'

const StartUpHeader: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.nav}>
					<Link href="/">Экосистема</Link>
					<Link href="/">Главная</Link>
				</div>
				<Link href="/">
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
			<div className={styles.search}>
				<h1>Найти проект</h1>
				<p>
					Для этого введите запрос, воспользуйтесь фильтрацией
					или ознакомьтесь с полной подборкой
				</p>
				<SearchField />
			</div>
		</div>
	)
}

export default StartUpHeader
