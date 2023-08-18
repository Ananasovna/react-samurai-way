import {UserCard} from "./UserCard";
import {Component, useEffect} from "react";
import {UsersPageType} from "../../redux/ducks/users/reducers";
import styles from './Users.module.css';
import {ReactComponent} from "*.svg";
import axios from "axios";
import {usersActionCreators} from "../../redux/ducks/users";

type UsersPropsType = {
    users: UsersPageType
    setFollow: (value: boolean, userId: string) => void
    setUsers: () => void
}

// export const Users = ({users, setFollow, setUsers}: UsersPropsType) => {
//
//     useEffect(() => {
//        setUsers();
//     }, [])
//
//     return(
//         <div className={styles.wrapper}>
//             {users.users.map(el => <UserCard user={el} />)}
//         </div>
//     )
// }

export class Users extends Component<UsersPropsType> {

    componentDidMount() {
        this.props.setUsers()
    }

    render() {
        return <div className={styles.wrapper}>
            {this.props.users.users.map(el => <UserCard user={el}/>)}
        </div>
    }
}
// = ({users, setFollow, setUsers}: UsersPropsType) => {
//
//     useEffect(() => {
//         setUsers();
//     }, [])
//
//     return(
//
//     )
// }