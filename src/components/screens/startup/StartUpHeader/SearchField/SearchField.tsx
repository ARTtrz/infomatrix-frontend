import { FC } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import styles from './SearchField.module.scss'

const SearchField: FC = () => {
	return (
		<div className={styles.wrapper}>
			<form>
				<AiOutlineSearch />

				<input placeholder='Поиск' />
			</form>
		</div>
	)
}

export default SearchField
