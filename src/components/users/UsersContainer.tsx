import {connect} from "react-redux";
import {Users} from "./Users";
import axios from "axios";
import {UserType} from "../../redux/types";
import {usersActionCreators} from "../../redux/ducks/users";
import {StateType} from "../../redux/store";
import {Component} from "react";
import {Preloader} from "../common/Preloader";

type UsersPropsType = {
    users: UserType[]
    setFollowed: (value: boolean, userId: string) => void
    setUsers: (users: UserType[], totalUsers: number) => void
    setCurrentPage: (page: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export class UsersContainer extends Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items, res.data.totalCount);
                this.props.toggleIsFetching(false);
            })
    }

    componentDidUpdate(prevProps: UsersPropsType) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.props.toggleIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then((res) => {
                    this.props.setUsers(res.data.items, res.data.totalCount);
                    this.props.toggleIsFetching(false);
                })
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader />
                    : <Users users={this.props.users}
                             pageSize={this.props.pageSize}
                             totalUsersCount={this.props.totalUsersCount}
                             currentPage={this.props.currentPage}
                             onClick={(page: number) => this.props.setCurrentPage(page)}
                             setFollowed={this.props.setFollowed}
                    />}
            </>
        )

    }
}

const mapStateToProps = (state: StateType) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
    }
}

export default connect(mapStateToProps, {...usersActionCreators})(UsersContainer)