import {connect} from "react-redux";
import {Users} from "./Users";
import {UserType} from "../../redux/types";
import {usersActionCreators, usersSelectors, usersThunkCreators} from "../../redux/ducks/users";
import {StateType} from "../../redux/store";
import {Component, ComponentType} from "react";
import {Preloader} from "../common/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type UsersPropsType = {
    users: UserType[]
    setCurrentPage: (page: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    followingInProgress: string[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export class UsersContainer extends Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    componentDidUpdate(prevProps: UsersPropsType) {
        if (this.props.currentPage !== prevProps.currentPage) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize)
        }
    }

    followUser(userId: string) {
        this.props.followUser(userId);
    }

    unfollowUser(userId: string) {
        this.props.unfollowUser(userId);
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
                             followingInProgress={this.props.followingInProgress}
                    />}
            </>
        )

    }
}

const mapStateToProps = (state: StateType) => {
    return {
        users: usersSelectors.selectUsers(state),
        pageSize: usersSelectors.selectPageSize(state),
        totalUsersCount: usersSelectors.selectTotalUsersCount(state),
        currentPage: usersSelectors.selectCurrentPage(state),
        isFetching: usersSelectors.selectIsFetching(state),
        followingInProgress: usersSelectors.selectFollowingInProgress(state),
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {...usersActionCreators, ...usersThunkCreators}),
    withAuthRedirect
)(UsersContainer)
