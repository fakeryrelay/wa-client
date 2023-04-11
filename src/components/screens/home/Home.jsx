import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import { Layout } from '../../layout/Layout'
import { Button } from '../../ui/button/Button'
import { Statistic } from '../../ui/statistic/Statistic'

import styles from './Home.module.scss'

function Home() {
	const navigate = useNavigate()

	return (
		<Layout bgImage='/images/home-bg.jpg'>
			<Button clickHandler={() => navigate('/new-workout')}>
				New
			</Button>
			<h1 className={styles.heading}>Exercise For The Shoulders</h1>
			<Statistic />
		</Layout>
	)
}

export default Home
