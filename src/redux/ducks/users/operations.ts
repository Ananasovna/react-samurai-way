import {Dispatch} from "redux";
import {usersAPI} from "../../../api/socilaMediaApi";
import {usersActionCreators, UsersReducerActionsType} from "./index";

const {toggleIsFetching, toggleFollowInProgress, setUsers, setFollowed, setCurrentPage} = {...usersActionCreators};

const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<UsersReducerActionsType>) => {
    dispatch(toggleIsFetching(true));
    try {
        const res = await usersAPI.get(currentPage, pageSize);
        dispatch(setUsers(res.data.items, res.data.totalCount));
    } catch (err) {
        console.log(err)
        // dispatch(appActionCreators.setError(err))
    } finally {
        dispatch(toggleIsFetching(false));
    }
}

const followUser = (userId: string) => async (dispatch: Dispatch<UsersReducerActionsType>) => {
    dispatch(toggleFollowInProgress(true, userId));
    try {
        const res = await usersAPI.follow(userId);
        if (res.data.resultCode === 0) {
            dispatch(setFollowed(true, userId));
        }
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(toggleFollowInProgress(false, userId));
    }
}

const unfollowUser = (userId: string) => async (dispatch: Dispatch<UsersReducerActionsType>) => {
    dispatch(toggleFollowInProgress(true, userId));
    try {
        const res = await usersAPI.unfollow(userId);
        if (res.data.resultCode === 0) {
            dispatch(setFollowed(false, userId));
        }
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(toggleFollowInProgress(false, userId));
    }
}

export default {
    getUsers,
    followUser,
    unfollowUser,
}