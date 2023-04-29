import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import styles from './Filter.module.scss'
import { categoryData } from './category.data'
import { cityData } from './city.data'
import { IFilter } from './filter.interface'

const DynamicSelect = dynamic(() => import('../../../ui/select/Select'), {
	ssr: false
})

const Filter: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },

		control
	} = useForm<IFilter>({
		mode: 'onChange'
	})

	const router = useRouter()

	const onSubmit: SubmitHandler<IFilter> = (data) => {
		console.log(data)
		router.push({
			pathname: '/startups',
			query: {
				category: data.category,
				city: data.city

				// isOnline: data.isOnline,
				// isOffline: data.isOffline
			}
		})
	}

	useEffect(() => {
		const filter: IFilter = {
			category: String(router.query.category),
			city: String(router.query.city)
		}
		console.log(filter)
	}, [router.query])
	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					control={control}
					name='category'
					render={({ field, fieldState: { error } }) => (
						<DynamicSelect
							defaultValue={String(router.query.city)}
							field={field}
							options={categoryData || []}
							isLoading={false}
							placeholder='Category'
							error={error}
							empty_space='Выберите category'
						/>
					)}
				/>
				<Controller
					control={control}
					name='city'
					render={({ field, fieldState: { error } }) => (
						<DynamicSelect
							defaultValue={String(router.query.city)}
							field={field}
							options={cityData || []}
							isLoading={false}
							placeholder='Город'
							error={error}
							empty_space='Выберите город'
						/>
					)}
				/>
				<button>Отсортировать</button>
			</form>
		</div>
	)
}

export default Filter
