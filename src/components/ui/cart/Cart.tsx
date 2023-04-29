import Image from 'next/image'
import { FC } from 'react'

import styles from './Cart.module.scss'
import { ICart } from './cart.interface'

interface ICartItem {
	cart: ICart
}

const Cart: FC<ICartItem> = ({ cart }) => {
	return (
		<div
			className=' bg-white grid w-full my-3 p-6 gap-3 rounded-lg'
			style={{
				height: '200px',
				gridTemplateColumns: '0.3fr 1fr 0.4fr'
			}}
		>
			<div className='border-solid border-2 border-sky-500'>
				<Image
					alt='img'
					src={cart.logo}
					width={100}
					height={100}
					className={styles.thumb}
				/>
			</div>
			<div>
				<h1 className='text-xl font-semibold'>{cart.title}</h1>
				<p className={styles.description}>{cart.description}</p>
			</div>
			<div>helllo</div>
		</div>
	)
}

export default Cart
