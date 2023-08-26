import {connect} from "react-redux";
import {Users} from "./Users";
import axios from "axios";
import {DispatchType, UserType} from "../../redux/types";
import {usersActionCreators} from "../../redux/ducks/users";
import {StateType} from "../../redux/store";
import {Component} from "react";

type UsersPropsType = {
    users: UserType[]
    setFollow: (value: boolean, userId: string) => void
    setUsers: (users: UserType[], totalUsers: number) => void
    setCurrentPage: (page: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export class UsersContainer extends Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items, res.data.totalCount);
            })
    }

    componentDidUpdate(prevProps: UsersPropsType) {
        if (prevProps.currentPage !== this.props.currentPage) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then((res) => {
                    this.props.setUsers(res.data.items, res.data.totalCount);
                })
        }
    }

    render() {
        return <Users users={this.props.users}
                      pageSize={this.props.pageSize}
                      totalUsersCount={this.props.totalUsersCount}
                      currentPage={this.props.currentPage}
                      onClick={(page: number) => this.props.setCurrentPage(page)}
                      setFollow={this.props.setFollow}
        />
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
    }
}

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        setFollow: (value: boolean, userId: string) => {
            dispatch(usersActionCreators.setFollowed(value, userId));
        },
        setUsers: (users: UserType[], totalUsers: number) => {
            dispatch(usersActionCreators.setUsers(users, totalUsers));
        },
        setCurrentPage: (page: number) => {
            dispatch(usersActionCreators.setCurrentPage(page));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)