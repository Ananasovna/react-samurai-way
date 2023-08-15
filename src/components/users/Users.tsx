import {UserCard} from "./UserCard";
import {useEffect} from "react";
import {UsersPageType} from "../../redux/ducks/users/reducers";
import styles from './Users.module.css';

type UsersPropsType = {
    users: UsersPageType
    setFollow: (value: boolean, userId: string) => void
    setUsers: () => void
}

export const Users = ({users, setFollow, setUsers}: UsersPropsType) => {

    useEffect(() => {
       setUsers();
    }, [])

    return(
        <div className={styles.wrapper}>
            {users.users.map(el => <UserCard user={el} />)}
        </div>
    )
}