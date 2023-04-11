import { useQuery, useMutation } from '@tanstack/react-query'
import WorkoutService from '../../../../services/workout/workout.service'
import WorkoutLogService from '../../../../services/workout/workout-log.service'
import { useNavigate } from 'react-router-dom'

export const useWorkouts = () => {
  const { data, isSuccess } = useQuery(
    ['get workouts'],
    () => WorkoutService.getAll(),
    {
      select: ({ data }) => data
    }
  )
    
  const nav = useNavigate()

  const {
    mutate,
    isLoading,
    isSuccess: isSuccessMutate,
    error
  } = useMutation(
    ['Create new workout log'],
    (workoutId) => WorkoutLogService.create(workoutId),
    {
      onSuccess({data}) {
        nav(`/workout/${data.id}`)
      }
    }
  )

  return {
    data,
    isSuccess,
    mutate,
    isLoading,
    isSuccessMutate,
    error
  }
}