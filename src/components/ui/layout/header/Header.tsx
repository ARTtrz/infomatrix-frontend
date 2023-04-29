import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { BiUserCircle } from 'react-icons/bi'

import Logo from '../../../../../public/logostart.png'

import styles from './Header.module.scss'
import Search from './search/Search'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Link href='/' className={styles.logo}>
				<Image src={Logo} width={100} height={100} alt='logo' />
			</Link>

			<div className={styles.service}>
				<Link href='/' className={styles.about}>
					О сервисе
				</Link>
				<Link href='/' className={styles.log}>
					Войти
				</Link>
			</div>
		</header>
	)
}

export default Header
