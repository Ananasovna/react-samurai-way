import {UserCard} from "./UserCard";
import styles from './Users.module.css';
import {UserType} from "../../redux/types";

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onClick: (page: number) => void
    setFollowed: (value: boolean, userId: string) => void
}

export const Users = (props: UsersPropsType) => {
    const pages = [];
    for (let i = 1; i <= 20; i++) pages.push(i);

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.pagination} `}>
                {pages.map(p => {
                    return <div
                        className={`${styles.page} ${props.currentPage === p ? styles.selectedPage : ''}`}
                        key={p}
                        onClick={() => props.onClick(p)}
                    >{p}</div>
                })}
            </div>
            <div className={styles.users}>
                {props.users.map(el => <UserCard key={el.id} user={el}/>)}
            </div>
        </div>
    )
}