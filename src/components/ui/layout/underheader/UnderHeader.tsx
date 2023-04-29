import Link from 'next/link'
import { FC } from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'

const UnderHeader: FC = () => {
	return (
		<div className='w-full bg-secondary text-white h-14 font-normal px-10 flex items-center justify-between gap-10'>
			<div className='gap-10 flex items-center justify-between'>
				<Link href='/'>Инвесторы</Link>
				<Link href='/'>Стартапы</Link>
			</div>
			<div className='flex items-end justify-between gap-2'>
				<BiRightArrowAlt className='text-xl' />
				<Link href='/'>Подключить команду</Link>
			</div>
		</div>
	)
}

export default UnderHeader
