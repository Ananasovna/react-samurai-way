import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {SidebarType} from "../../redux/types";
import {DialogItem} from "../dialogs/dialogsList/DialogItem";
import {UserCard} from "../users/UserCard";

type NavbarProps = {
    data: SidebarType
}

export const Navbar = ({data}: NavbarProps) => {

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
            <div className={styles.friendsWrapper}>
                <h3>My friends</h3>
                {/*<div className={styles.friends}>*/}
                {/*    {data?.friends.map(f => <UserCard key={f.id} user={f} />)}*/}
                {/*</div>*/}
            </div>
        </div>
    )
}