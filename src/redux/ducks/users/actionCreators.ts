import {SET_FOLLOWED, SET_USERS} from "./types";
import {UserType} from "../../types";

export type SetFollowedActionType = ReturnType<typeof setFollowed>
export type SetUsersActionType = ReturnType<typeof setUsers>

export type UsersReducerActionsType = SetFollowedActionType | SetUsersActionType;

const setFollowed = (value: boolean, userId: string) => {
    return {type: SET_FOLLOWED, payload: {value, userId}} as const;
}

const setUsers = (users: UserType[]) => {
    return {type: SET_USERS, payload: {users}} as const;
}

export default {
    setFollowed,
    setUsers,
}