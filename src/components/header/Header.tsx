import styles from './Header.module.css';
import {AuthType} from "../../redux/ducks/auth/reducers";
import {AuthMenu} from "./AuthMenu";


type HeaderPropsType = AuthType & { logoutUser: () => void }

export const Header = ({isAuth, login, logoutUser}: HeaderPropsType) => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src='https://png.pngtree.com/template/20191024/ourmid/pngtree-mountain-landscape-logo-design-hiking-travel-and-adventure-concept-design-image_323034.jpg' alt="profile img"/>
            </div>
            <AuthMenu isAuth={isAuth} login={login} logoutUser={logoutUser} />
        </div>
    )
}