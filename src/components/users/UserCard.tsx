import styles from './UserCard.module.css';
import {UserType} from "../../redux/types";
import {useState} from "react";
import {Button} from "../common/Button";
import {NavLink} from "react-router-dom";

type UserCardProps = {
    user: UserType
}

export const UserCard = ({user}: UserCardProps) => {
    const anonymousImg = '/assets/img/anonymousImg.png';
    const [follow, setFollow] = useState<boolean>(false);

    const toggleFollow = () => {
        setFollow(!follow);
    }

    return (
        <div className={styles.userCard}>
            <NavLink to={'/profile/' + user.id}>
                <div className={styles.avatarWrapper}>
                    <img src={user.photos.small || anonymousImg} alt="avatar" className={styles.avatarImg}/>
                </div>
            </NavLink>
            <div className={styles.name}>{user.name}</div>
            <Button title={follow ? 'Follow' : 'Unfollow'} callBack={toggleFollow}/>
        </div>
    )
}