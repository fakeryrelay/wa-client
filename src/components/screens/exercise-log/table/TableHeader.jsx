import styles from '../ExerciseLog.module.scss'

export const TableHeader = ({rowTitles}) => {
  return (
    <div className={styles.row}>
      {rowTitles.map(title => (
        <div key={title}>
          <span>{title}</span>
        </div>
      ))}
    </div>
  )
}