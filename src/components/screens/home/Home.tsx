import Image from 'next/image'
import { FC } from 'react'

import Image2 from '../../../../public/Mask group.png'
import Avatars from '../../../../public/avatars.png'
import Image1 from '../../../../public/image 3.png'
import Header from '../../ui/layout/header/Header'

import styles from './Home.module.scss'
import Meta from '@/src/utils/meta/Meta'

const Home: FC = () => {
	return (
		<Meta title='Главная страница'>
			<div className={styles.wrapper}>
				<div className={styles.onboard}>
					<Header />
					<div className={styles.main_text}>
						<div className={styles.wrapper}>
							<h1>Место встречи стартапов и инвесторов</h1>
							<p>
								Экосистема, соединяющая проекты и
								инвестиции
							</p>
							<button>Присоединиться к сообществу</button>
						</div>
					</div>
				</div>
				<div className={styles.mid}>
					<div className={styles.text}>
						<p className={styles.title}>
							Не тратьте время на составление списков.
							Теперь поиск быстрый и доступный
						</p>
						<p className={styles.undertext_wrapper}>
							<p className={styles.undertext}>
								Вам больше не нужно исследовать LinkedIn
								и собирать информацию по крупицам.
							</p>
							<p className={styles.here}>
								Все лица уже здесь.
							</p>
						</p>
					</div>
					<Image
						className={styles.img}
						src={Avatars}
						width={1200}
						height={1200}
						alt='image'
					/>
				</div>
				<div className={styles.options}>
					<div className={styles.wrapper}>
						<div className={styles.first}>
							<div className={styles.num}>01</div>
							<div className={styles.content}>
								<div className={styles.text}>
									<div className={styles.part}>
										вы — часть <br /> экосистемы
									</div>
								</div>
								<div className={styles.description}>
									И инвесторам, и стартапам чтобы
									войти на платформу, нужно
									зарегистрироваться, рассказать о
									себе и представить себя сообществу.
								</div>
							</div>
						</div>
						<div className={styles.second}>
							<div className={styles.num}>02</div>
							<div className={styles.content}>
								<div className={styles.text}>
									<div className={styles.part}>
										находите <br /> друг друга
									</div>
								</div>
								<div className={styles.description}>
									С нашей гибкой системой фильтрации
									получится найти проект и
									потенциального инвестора под любой
									запрос.
								</div>
							</div>
						</div>
						<div className={styles.third}>
							<div className={styles.num}>03</div>
							<div className={styles.content}>
								<div className={styles.text}>
									<div className={styles.part}>
										весь нетворк в одном месте
									</div>
								</div>
								<div className={styles.description}>
									Сохраняйте заинтересовавших персон
									в «Избранное». Здесь у вас есть
									доступ к контактным данным и
									социальным сетям: не придётся
									обращаться к поисковику.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.info}>
					<div className={styles.info_wrapper}>
						<h1 className={styles.title}>
							Удобный поиск <br />
							<span className='text-red'>
								с самыми нужными функциями
							</span>
						</h1>
						<div className={styles.info_images}>
							<div className={styles.img_1}>
								<Image
									src={Image2}
									width={450}
									height={450}
									alt='img1'
								/>
							</div>
							<div className={styles.img_2}>
								<Image
									src={Image1}
									width={450}
									height={450}
									alt='img1'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.search}>
					<div className={styles.search_wrapper}>
						<div className={styles.wrapper}>
							<h1>
								Фокусируйте внимание <br /> на
								необходимом
							</h1>
							<p>формируйте контакт прямо сейчас</p>
							<button>Начать поиск</button>
						</div>
					</div>
				</div>
				<div className={styles.footer}>
					<div className={styles.left}>
						<p>StartUp.Spot - 2023</p>
						<p>Разработано Teamname специально для Дизайн</p>
					</div>
					<p className={styles.right}>startup.spot@gmail.com</p>
				</div>
			</div>
		</Meta>
	)
}

export default Home
