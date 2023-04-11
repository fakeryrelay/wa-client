import styles from './Hamburger.module.scss'

import { BiMenuAltRight, BiX } from 'react-icons/bi'

import { Menu } from './Menu'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

export const Hamburger = () => {
	const { ref, isShow, setIsShow } = useOnClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button aria-label='Open menu' onClick={() => setIsShow(prevState => !prevState)}>
				{isShow ? <BiX /> : <BiMenuAltRight />}
			</button>
			<Menu isShow={isShow} setIsShow={setIsShow}/>
		</div>
	)
}
