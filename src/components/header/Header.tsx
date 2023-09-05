import styles from './Header.module.css';
import {AuthType} from "../../redux/ducks/app/reducers";


type HeaderPropsType = AuthType

export const Header = ({isAuth, id, login, email}: HeaderPropsType) => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src='https://png.pngtree.com/template/20191024/ourmid/pngtree-mountain-landscape-logo-design-hiking-travel-and-adventure-concept-design-image_323034.jpg' alt="profile img"/>
            </div>
            <div>
                {isAuth ? <div>{login}</div> : <div>Log in</div>}
            </div>
        </div>
    )
}