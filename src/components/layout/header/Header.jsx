import styles from './Header.module.scss'

import { useAuth } from '../../../hooks/useAuth'
import { BiUserCircle, BiLeftArrowAlt } from 'react-icons/bi'
import { Hamburger } from '../hamburger/Hamburger'
import { useLocation, useNavigate } from 'react-router-dom'

export const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	if (!isAuth) return null

	return (
		<header aria-label='Go back' className={styles.header}>
			{pathname !== '/' 
			? (
				<button onClick={() => navigate(backLink)}>
					<BiLeftArrowAlt />
				</button>
			) 
			: (
				<button aria-label='Go to profile' onClick={() => navigate('/profile')}>
					<BiUserCircle />
				</button>
			)}
			

			<Hamburger />
		</header>
	)
}
