import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";


export const Navbar = () => {

    const setActiveClass = ({isActive}: {isActive: boolean}): string => {
        return isActive ? styles.active : '';
    }

    return (
        <div className={styles.navbar}>
            <div>
                <NavLink className={setActiveClass} to='/profile'>Profile</NavLink>
            </div>
            <div>
                <NavLink className={setActiveClass} to='/dialogs'>Messages</NavLink>
            </div>
            <div>
                <NavLink className={setActiveClass} to='/users'>Users</NavLink>
            </div>
        </div>
    )
}