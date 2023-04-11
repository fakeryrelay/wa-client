import ExerciseLogService from "../../../../services/exercise/exercise-log.service";
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useUpdateLogTime } from './useUpdateLogTime';
import { useCompleteLog } from './useCompleteLog';

export const useExerciseLog = () => {
	const { id } = useParams()
	const [times, setTimes] = useState([])
	
	
	
  const { data: exerciseLog, isSuccess, isLoading } = useQuery(
		['get exercise log', id],
		() => ExerciseLogService.getById(id),
		{
			select: ({ data }) => data,
			onSuccess(data) {
				if (data?.times?.length) setTimes(data.times)
			}
		}
	)

	const { updateTime, error } = useUpdateLogTime(times)
		
	const onChangeState = (timeId, key, value) => {
		const newTimes = times.map(time => {
			if (time.id === timeId) {
				return { ...time, [key]: value }
			}

			return time
		})

		setTimes(newTimes)
	}

	const getTime = timeId => times.find(time => time.id === timeId)

	const getState = (timeId, key) => {
		const time = getTime(timeId)

		return time ? time[key] : 0
	}


	const toggleTime = (timeId, isCompleted) => {
		const time = getTime(timeId)
		
		updateTime({
			timeId, body: {
				isCompleted,
				repeat: +time.repeat,
				weight: +time.weight
			}
		})
	}


  return {
    exerciseLog,
    isSuccess,
    isLoading,
		onChangeState,
		getTime,
		toggleTime,
		error,
		getState
  }
}