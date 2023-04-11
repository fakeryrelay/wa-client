import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import ExerciseLogService from '../../../services/exercise/exercise-log.service'

import { HeaderExerciseLog } from './HeaderExerciseLog'
import { Alert } from './../../ui/alert/Alert'
import { Loader } from './../../ui/Loader'

import styles from './ExerciseLog.module.scss'
import { useExerciseLog } from './hooks/useExerciseLog'
import { ExerciseErrors } from './ExerciseErrors'
import { TableHeader } from './table/TableHeader'
import { TableRow } from './table/TableRow'


const rowTitles = ['Previous', 'Weight & repeat', 'Completed']

export const ExerciseLog = () => {
	const { 
		exerciseLog, 
		isLoading, 
		isSuccess, 
		onChangeState, 
		getTime, 
		toggleTime, 
		error,
		getState
	} = useExerciseLog()



	return (
		<>
			<HeaderExerciseLog isSuccess={isSuccess} exerciseLog={exerciseLog} />

			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<ExerciseErrors errors={[error]}/>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<TableHeader rowTitles={rowTitles} />

						{exerciseLog?.times.map((item, index) => (
							<TableRow 
								onChangeState={onChangeState}
								toggleTime={toggleTime}
								getState={getState}
								item={item} 
								key={item.id} 
							/>
						))}
					</div>
				)}

				{isSuccess && exerciseLog?.times?.length === 0 && (
					<Alert type='warning' text='Times not found' />
				)}
			</div>
		</>
	)
}
