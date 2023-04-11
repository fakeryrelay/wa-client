import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import ExerciseService from '../../../services/exercise/exercise.service'

export const useNewExercisePage = () => {
	const { isSuccess, error, isLoading, mutate } = useMutation(
		['create exercise'],
		body => ExerciseService.create(body),
		{
			onSuccess: () => {
				reset()
			}
		}
	)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		mutate(data)
	}

	return useMemo(
		() => ({
			isSuccess,
			error,
			errors,
			isLoading,
			register,
			handleSubmit,
			control,
			onSubmit
		}),
		[isSuccess, error, errors, isLoading]
	)
}
