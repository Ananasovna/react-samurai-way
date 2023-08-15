import styles from './UserCard.module.css';
import {UserType} from "../../redux/types";

type UserCardProps = {
    user: UserType
}

export const UserCard = ({user}: UserCardProps) => {
    const anonymousImg = '/assets/img/anonymousImg.png';

    return (
        <div className={styles.userCard}>
            <div className={styles.avatarWrapper}>
                <img src={user.photos.small || anonymousImg} alt="avatar" className={styles.avatarImg}/>
            </div>
            <div className={styles.name}>{user.name}</div>
        </div>
    )
}