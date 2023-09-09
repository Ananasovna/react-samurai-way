import {SET_CURRENT_PAGE, SET_FOLLOWED, SET_USERS, TOGGLE_FOLLOW_IN_PROGRESS, TOGGLE_IS_FETCHING} from "./types";
import {UserType} from "../../types";

export type UsersReducerActionsType =
    | ReturnType<typeof setFollowed>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowInProgress>

const setFollowed = (value: boolean, userId: string) => {
    return {type: SET_FOLLOWED, payload: {value, userId}} as const;
}

const setUsers = (users: UserType[], totalUsers: number) => {
    return {type: SET_USERS, payload: {users, totalUsers}} as const;
}

const setCurrentPage = (page: number) => {
    return {type: SET_CURRENT_PAGE, payload: {page}} as const;
}

const toggleIsFetching = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, payload: {isFetching}} as const;
}

const toggleFollowInProgress = (inProgress: boolean, userId: string) => {
    return {type: TOGGLE_FOLLOW_IN_PROGRESS, payload: {inProgress, userId}} as const;
}

export default {
    setFollowed,
    setUsers,
    setCurrentPage,
    toggleIsFetching,
    toggleFollowInProgress,
}