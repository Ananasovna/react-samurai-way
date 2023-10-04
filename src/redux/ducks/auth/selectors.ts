import {StateType} from "../../store";

const selectIsAuth = (state: StateType): boolean | null => {
    return state.auth.isAuth;
}

const selectAuthId = (state: StateType): null | number => {
    return state.auth.id;
}

const selectEmail = (state: StateType): null | string => {
    return state.auth.email;
}

const selectLogin = (state: StateType): null | string => {
    return state.auth.login;
}


export default {
    selectIsAuth,
    selectAuthId,
    selectEmail,
    selectLogin,
}