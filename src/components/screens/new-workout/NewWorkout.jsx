import { Link } from 'react-router-dom'
import { Layout } from '../../layout/Layout'
import { Alert } from '../../ui/alert/Alert.jsx'
import { Button } from '../../ui/button/Button.jsx'
import { Field } from '../../ui/field/Field.jsx'
import { Loader } from '../../ui/Loader.jsx'
import { SelectExercises } from './SelectExercises'
import { useNewWorkout } from './useNewWorkout'

export const NewWorkout = () => {
  const {
    isSuccess,
    error,
    errors,
    isLoading,
    register,
    handleSubmit,
    onSubmit,
    control
  } = useNewWorkout()

	return (
		<>
      <Layout
        bgImage='/images/new-workout-bg.jpg'
        heading='Create new workout'
      />

      <div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Workout created successfully' />}
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

          <Link to='/new-exercise' className='dark-link'>
            Add new exercise
          </Link>

          <SelectExercises 
            control={control}
          />

          <Button>Create</Button>
				</form>
			</div>
    </>
	)
}
