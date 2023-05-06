import Link from 'next/link'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './Login.module.scss'
import LoginFields from './LoginFields'
import { ILogin } from './login.interface'
import Meta from '@/src/utils/meta/Meta'

const LoginPage: FC = () => {
	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset
	} = useForm<ILogin>({
		mode: 'onChange'
	})
	const onSubmit: SubmitHandler<ILogin> = (data) => {
		console.log('login')
	}

	return (
		<Meta title='Авторизация'>
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.form_wrapper}>
						<div className={styles.text}>
							<span>Еще нет аккаунта?</span>
							<Link href='/' className={styles.register}>
								Зарегистрируетесь
							</Link>
							<h1>Авторизация</h1>
						</div>
						<LoginFields
							formState={formState}
							register={registerInput}
							isPasswordRequired
						/>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default LoginPage
