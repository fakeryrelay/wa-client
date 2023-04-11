import { Controller } from 'react-hook-form'
import { Layout } from '../../layout/Layout'
import { Alert } from '../../ui/alert/Alert.jsx'
import { Button } from '../../ui/button/Button.jsx'
import { Field } from '../../ui/field/Field.jsx'
import { Loader } from '../../ui/Loader.jsx'
import { getIconPath } from './icon-path.util.js'
import cn from 'clsx'
import styles from './NewExercise.module.scss'
import { useNewExercisePage } from './useNewExercisePage.js'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

export const NewExercise = () => {
	const { 
    isSuccess,
		error,
		errors,
		isLoading,
		register,
		handleSubmit,
		control,
		onSubmit
  } = useNewExercisePage()

	return (
		<>
      <Layout
        bgImage='/images/new-exercise-bg.jpg'
        heading='Create new exercise'
        backLink='/new-workout'
      />

      <div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Exercise created' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{ required: 'Name is required' }}
						type='text'
						placeholder='Enter name'
					/>
					<Field
						error={errors?.times?.message}
						name='times'
						register={register}
						options={{
              valueAsNumber: true,
              validate: value => value > 0 || 'Times must be number',
              required: 'Times is required'
            }}
						placeholder='Enter times'
					/>

          <Controller 
            name='iconPath'
            control={control}
            render={({field: {value, onChange}}) => (
              <div className={styles.images}>
                {data.map(name => (
                  <img 
                    key={`ex img ${name}`}
                    src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(name)}`}
                    alt={name}
                    className={cn({
                      [styles.active]: value === getIconPath(name)
                    })}
                    onClick={() => onChange(getIconPath(name))}
                    draggable={false}
                    height='45'
                  />
                ))}
              </div>
            )}
          />
					
          <Button>Create</Button>
				</form>
			</div>
    </>
	)
}
