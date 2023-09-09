import {UserCard} from "./UserCard";
import styles from './Users.module.css';
import {UserType} from "../../redux/types";

type UsersPropsType = {
    users: UserType[]
    currentPage: number
    onClick: (page: number) => void
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    followingInProgress: string[]
}

export const Users = ({users, currentPage, onClick, followUser, unfollowUser, followingInProgress}: UsersPropsType) => {
    const pages = [];
    for (let i = 1; i <= 20; i++) pages.push(i);

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.pagination} `}>
                {pages.map(p => {
                    return <div
                        className={`${styles.page} ${currentPage === p ? styles.selectedPage : ''}`}
                        key={p}
                        onClick={() => onClick(p)}
                    >{p}</div>
                })}
            </div>
            <div className={styles.users}>
                {users.map(el => <UserCard key={el.id}
                                           user={el}
                                           followUser={followUser}
                                           unfollowUser={unfollowUser} followingInProgress={followingInProgress}/>)}
            </div>
        </div>
    )
}