import { NavLink} from "react-router-dom"
import clsx from "clsx"
import css from './Navigation.module.css'

const makeLinkClass =({isActive})=>{
  return clsx(css.link, isActive && css.isActive);
}

const Navigation = () => {
  return (
     <nav className={css.nav}>
    <NavLink to="/" className={makeLinkClass}>Home</NavLink>
    <NavLink to="/movies" className={makeLinkClass}>Movies</NavLink>
  </nav>
  )
}

export default Navigation