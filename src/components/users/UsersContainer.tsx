import {connect} from "react-redux";
import {Users} from "./Users";
import axios from "axios";
import {UserType} from "../../redux/types";
import {usersActionCreators} from "../../redux/ducks/users";
import {StateType} from "../../redux/store";
import {Component} from "react";
import {Preloader} from "../common/Preloader";
import {usersAPI} from "../../api/socilaMediaApi";

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
        usersAPI.get(this.props.currentPage, this.props.pageSize)
            .then((res) => {
                this.props.setUsers(res.data.items, res.data.totalCount);
                this.props.toggleIsFetching(false);
            })
    }

    componentDidUpdate(prevProps: UsersPropsType) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.props.toggleIsFetching(true);
            usersAPI.get(this.props.currentPage, this.props.pageSize)
                .then((res) => {
                    this.props.setUsers(res.data.items, res.data.totalCount);
                    this.props.toggleIsFetching(false);
                })
        }
    }

    followUser(userId: string) {
        usersAPI.follow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.setFollowed(true, userId);
                }
            })
    }

    unfollowUser(userId: string) {
        usersAPI.unfollow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.setFollowed(false, userId);
                }
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader />
                    : <Users users={this.props.users}
                             currentPage={this.props.currentPage}
                             onClick={(page: number) => this.props.setCurrentPage(page)}
                             followUser={this.followUser.bind(this)}
                             unfollowUser={this.unfollowUser.bind(this)}
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