import styles from './UserCard.module.css';
import {UserType} from "../../redux/types";
import {Button} from "../common/Button";
import {NavLink} from "react-router-dom";

type UserCardProps = {
    user: UserType
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    followingInProgress: string[]
}

export const UserCard = ({user, followUser, unfollowUser, followingInProgress}: UserCardProps) => {
    const anonymousImg = '/assets/img/anonymousImg.png';

    const toggleFollow = () => {
        user.followed ? unfollowUser(user.id) : followUser(user.id);
    }

    return (
        <div className={styles.userCard}>
            <NavLink to={'/profile/' + user.id}>
                <div className={styles.avatarWrapper}>
                    <img src={user.photos.small || anonymousImg} alt="avatar" className={styles.avatarImg}/>
                </div>
            </NavLink>
            <div className={styles.name}>{user.name}</div>
            <Button title={user.followed ? 'Unfollow' : 'Follow'}
                    callBack={toggleFollow}
                    disabled={followingInProgress.some(el => el === user.id)}/>
        </div>
    )
}