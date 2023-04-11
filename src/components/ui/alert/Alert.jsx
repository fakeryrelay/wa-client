import cn from 'clsx'
import styles from './Alert.module.scss'

export const Alert = ({ type = 'success', text }) => {
  return (
    <div
      className={cn(styles.alert, styles[type])}
    >
      {text}
    </div>
  )
}