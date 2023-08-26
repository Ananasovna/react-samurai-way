import {SET_CURRENT_PAGE, SET_FOLLOWED, SET_USERS} from "./types";
import {UserType} from "../../types";

export type SetFollowedActionType = ReturnType<typeof setFollowed>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>

export type UsersReducerActionsType = SetFollowedActionType | SetUsersActionType | SetCurrentPageActionType;

const setFollowed = (value: boolean, userId: string) => {
    return {type: SET_FOLLOWED, payload: {value, userId}} as const;
}

const setUsers = (users: UserType[], totalUsers: number) => {
    return {type: SET_USERS, payload: {users, totalUsers}} as const;
}

const setCurrentPage = (page: number) => {
    return {type: SET_CURRENT_PAGE, payload: {page}} as const;
}

export default {
    setFollowed,
    setUsers,
    setCurrentPage,
}