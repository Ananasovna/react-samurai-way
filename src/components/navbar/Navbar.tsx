import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
export const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/users'>Users</NavLink>
            </div>
        </div>
    )
}