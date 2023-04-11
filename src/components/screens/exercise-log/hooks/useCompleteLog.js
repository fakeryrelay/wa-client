import { useMutation } from '@tanstack/react-query';
import ExerciseLogService from '../../../../services/exercise/exercise-log.service';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const useCompleteLog = () => {
  const { id } = useParams()

  const nav = useNavigate()

  const { mutate, error: errorCompleted } = useMutation(
    ['complete log'], 
    (body) => ExerciseLogService.complete(id, body), {
      onSuccess: ({data}) => {
        nav(`/workout/${data.workoutLogId}`)
      }
    }
  )

  return { completeLog: mutate, errorCompleted }
}