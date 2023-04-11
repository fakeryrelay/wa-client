import { Alert } from '../../ui/alert/Alert';
import { Fragment } from 'react';

export const ExerciseErrors = ({errors}) => {
  return (
    <div style={{width: '90%', margin: '0 auto'}}>
      {errors.map((error, index) => (
        <Fragment key={error+index}>
          {error && <Alert type='error' text={error}/>}
        </Fragment>
      ))}
    </div>
  )
}