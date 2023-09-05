import {SET_AUTH, SET_USER_DATA} from "./types";

export type SetIsAuthActionType = ReturnType<typeof setIsAuth>
export type SetUserDataActionType = ReturnType<typeof setUserData>


export type AuthReducerActionsType = SetIsAuthActionType | SetUserDataActionType;

export type UserDataType = {
    email: string | null
    login: string | null
    id: number | null
}

const setIsAuth = (isAuth: boolean) => ({type: SET_AUTH, isAuth} as const);
const setUserData = (data: UserDataType) => ({type: SET_USER_DATA, data} as const);

export default {
    setIsAuth,
    setUserData,
}