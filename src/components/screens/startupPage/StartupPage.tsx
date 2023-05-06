import cn from 'clsx'
import { FC, useState } from 'react'

import StartUpHeader from '../startup/StartUpHeader/StartUpHeader'

import { IStartupPage } from './StartupPage.interface'
import styles from './StartupPage.module.scss'
import StartUpPageHeader from './startupPageHeader/StartUpPageHeader'
import Meta from '@/src/utils/meta/Meta'

const StartupPageItem: FC<IStartupPage> = ({ startup }) => {
	const [toggleState, setToggleState] = useState(1)
	const toggleTab = (index: number) => {
		setToggleState(index)
	}
	return (
		<Meta title={startup.name}>
			<div className={styles.wrapper}>
				<StartUpPageHeader startup={startup} />
				<div className={styles.tabs}>
					<div className={styles.blocks}>
						<div
							className={cn(styles.tabs_item, {
								[styles.active]: toggleState == 1
							})}
							onClick={() => toggleTab(1)}
						>
							Описание
						</div>
						<div
							className={cn(styles.tabs_item, {
								[styles.active]: toggleState == 2
							})}
							onClick={() => toggleTab(2)}
						>
							Кейсы
						</div>
					</div>
					<div className={styles.content_tabs}>
						<div
							className={cn(styles.content, {
								[styles.active_content]:
									toggleState == 1
							})}
						>
							<div className={styles.description}>
								<h1>Описание</h1>
								<p>{startup.description}</p>
							</div>
							<div className={styles.invest}>
								<h1>Запрос</h1>
								<p>{startup.lowestInvestment}</p>
							</div>
							<div className={styles.team}>
								<h1>Команда</h1>
								<div>{startup.team_size}</div>
							</div>
							<div className={styles.contacts}>
								<span className={styles.phone}>
									Персональный сайт:
								</span>
								<span className={styles.number}>
									{startup.website}
								</span>
							</div>
						</div>
						<div
							className={cn(styles.content, {
								[styles.active_content]:
									toggleState == 2
							})}
						>
							Hello maan
						</div>
					</div>
					<div className={cn(styles.content)}></div>
				</div>
			</div>
		</Meta>
	)
}

export default StartupPageItem
