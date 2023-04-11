import styles from './Hamburger.module.scss'
import cn from 'clsx';
import { Link } from 'react-router-dom';

import { menu } from './menu.data.js'
import { useAuth } from '../../../hooks/useAuth';
import Cookies from 'js-cookie';
import { TOKEN } from '../../../app.constants';

export const Menu = ({ isShow, setIsShow }) => {
  const {setIsAuth} = useAuth()
  
  const logoutHandler = () => {
    Cookies.remove(TOKEN)
    setIsAuth(false)
    setIsShow(false)
  }

  return (
    <nav className={cn(styles.menu, {
      [styles.show]: isShow
    })}>
      <ul>
        {menu.map((item, index) => (
          <li key={`_menu_${index}`}>
            {/* {item.title} */}
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  )
}