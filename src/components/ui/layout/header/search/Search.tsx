import { FC } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Search: FC = () => {
	return (
		<div
			className='flex items-center gap-0 h-10 '
			style={{ width: '400px' }}
		>
			<input
				placeholder='Поиск...'
				className='pr-2 pl-3 outline-none h-full rounded-l-lg w-full'
			></input>
			<button
				className='bg-red p-3  text-white  rounded-r-lg'
				style={{ fontWeight: 'bold' }}
			>
				<AiOutlineSearch />
			</button>
		</div>
	)
}

export default Search
