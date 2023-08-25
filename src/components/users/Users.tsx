import {UserCard} from "./UserCard";
import {Component} from "react";
import styles from './Users.module.css';
import {UserType} from "../../redux/types";
import axios from "axios";

type UsersPropsType = {
    users: UserType[]
    setFollow: (value: boolean, userId: string) => void
    setUsers: (users: UserType[]) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export class Users extends Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items);
            })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        const pages = [];
        for (let i = 1; i <= pagesCount; i++) pages.push(i);

        return <div className={styles.wrapper}>
            <div className={`${styles.pagination} `}>
                {pages.map(p => {
                    return <div className={`${styles.page} ${this.props.currentPage === p ? styles.selectedPage : ''}`}>{p}</div>
                }) }
            </div>
            {this.props.users.map(el => <UserCard user={el}/>)}
        </div>
    }
}