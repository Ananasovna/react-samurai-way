import {Button} from "../common/Button";
import styles from './AuthMenu.module.css'
import {Navigate, NavLink} from "react-router-dom";

type AuthMenuPropsType = {
    isAuth: boolean | null
    login: string | null
    logoutUser: () => void
}

export const AuthMenu = ({isAuth, login, logoutUser}: AuthMenuPropsType) => {
    if (!isAuth) return <div className={styles.wrapper}>Dear guest</div>

    return (
        <div className={styles.wrapper}>
            <NavLink to={'/profile'}>
                <Button title={login as string} callBack={() => {}}/>
            </NavLink>
            <Button title={'Log out'} callBack={logoutUser}/>
        </div>
    )
}