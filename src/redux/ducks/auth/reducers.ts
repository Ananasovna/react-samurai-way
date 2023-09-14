import {AuthReducerActionsType} from "./actionCreators";
import {SET_AUTH, SET_USER_DATA} from "./types";

export type AuthType = typeof usersInitState;

export const usersInitState = {
    email: null as null | string,
    login: null as null | string,
    id: null as null | number,
    isAuth: null as boolean | null,
}

const authReducer = (state: AuthType = usersInitState, action: AuthReducerActionsType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data}
        case SET_AUTH:
            return {...state, isAuth: action.isAuth}
        default:
            return state;
    }
}

export default authReducer;