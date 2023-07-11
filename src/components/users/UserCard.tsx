import styles from './UserCard.module.css';
import {UserType} from "../../redux/types";

type UserCardProps = {
    user: UserType
}

export const UserCard = ({user}: UserCardProps) => {

    return (
        <div className={styles.userCard}>
            <div className={styles.avatarWrapper}>
                <img src={user.avatarSrc} alt="avatar" className={styles.avatarImg}/>
            </div>
            <div className={styles.name}>{user.name}</div>
        </div>
    )
}