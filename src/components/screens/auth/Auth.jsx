
import { Layout } from '../../layout/Layout'
import { Button } from '../../ui/button/Button'
import { Field } from '../../ui/field/Field'
import { Loader } from '../../ui/Loader'

import styles from './Auth.module.scss'

import { useAuthPage } from './useAuthPage.js'

// const isLoadingAuth = false

export const Auth = () => {
	const {setType, register, handleSubmit, errors, isLoading, onSubmit} = useAuthPage()

	return (
		<>
			<Layout heading='Sign in' bgImage='/images/auth-bg.png' />

			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{ required: 'Email is required' }}
						type='text'
						placeholder='Enter email'
					/>
					<Field
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{ required: 'Password is required' }}
						type='password'
						placeholder='Enter password'
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sign in</Button>
						<Button clickHandler={() => setType('register')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}