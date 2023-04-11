import { useProfile } from '../../screens/profile/useProfile'
import styles from './Statistic.module.scss'

export const Statistic = () => {

  const {data} = useProfile()
  
  return (
    <div className={styles.wrapper}>
      {data?.statistics?.map(stat => (
        <div className={styles.count} key={stat.label}>
          <div className={styles.heading}>{stat.label}</div>
          <div className={styles.number}>{stat.value}</div>
        </div>
      ))}
    </div>
  )
} 