import {connect} from "react-redux";
import {Users} from "./Users";
import axios from "axios";
import {DispatchType, UserType} from "../../redux/types";
import {usersActionCreators} from "../../redux/ducks/users";
import {StateType} from "../../redux/store";

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
        setUsers: (users: UserType[]) => {
            dispatch(usersActionCreators.setUsers(users));
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)