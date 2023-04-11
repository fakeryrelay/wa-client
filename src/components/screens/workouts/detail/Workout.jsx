import { useQuery, useMutation } from '@tanstack/react-query'
import { Fragment } from 'react'
import { useParams } from 'react-router-dom'

import styles from './Workout.module.scss'

import cn from 'clsx'

import WorkoutLogService from '../../../../services/workout/workout-log.service'
import { Loader } from '../../../ui/Loader'
import { ExerciseItem } from './ExerciseItem'
import { HeaderWorkout } from './HeaderWorkout'
import { Button } from '../../../ui/button/Button'
import { useNavigate } from 'react-router-dom';

export const Workout = () => {
	const { id } = useParams()
	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery(['get-workout', id], () => WorkoutLogService.getById(id), {
		select: ({ data }) => data
	})

	const nav = useNavigate()

	const { mutate } = useMutation(['complete workout'], () => WorkoutLogService.complete(id), {
		onSuccess() {
			nav('/workouts')
		}
	})

	return (
		<>
			<HeaderWorkout workoutLog={workoutLog} isSuccess={isSuccess} />

			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{isLoading ? (
						<Loader />
					) : (
						<div className={cn(styles.wrapper)}>
							{workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
								<Fragment key={exerciseLog.id}>
									<ExerciseItem exerciseLog={exerciseLog} />

									{index % 2 !== 0 &&
										index !== workoutLog.exerciseLogs.length - 1 && (
											<div className={styles.line}></div>
										)}
								</Fragment>
							))}
						</div>
					)}
				</div>

				<Button clickHandler={() => mutate()}>Finish workout</Button>
			</div>
		</>
	)
}
