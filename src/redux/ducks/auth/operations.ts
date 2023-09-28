import {AuthReducerActionsType} from "./actionCreators";
import {Dispatch} from "redux";
import {authAPI} from "../../../api/socilaMediaApi";
import {authActionCreators} from "./index";
import {ThunkAction} from "redux-thunk";
import {AppThunk, StateType} from "../../store";

const authMe = () => async (dispatch: Dispatch<AuthReducerActionsType>) => {
    try {
        const res = await authAPI.me();
        if (res.data.resultCode === 0) {
            dispatch(authActionCreators.setUserData(res.data.data));
            dispatch(authActionCreators.setIsAuth(true))
        } else {
            dispatch(authActionCreators.setIsAuth(false))
        }
    } catch (err) {
        console.log(err);
    } finally {

    }
}

const loginUser = (email: string, password: string, rememberMe = false): AppThunk => async (dispatch) => {
    try {
        const res = await authAPI.login(email, password, rememberMe);
        if (res.data.resultCode === 0) {
            await dispatch(authMe());
        } else {
        }
    } catch (err) {
        console.log(err);
    }
}

const logoutUser = () => async (dispatch: Dispatch<AuthReducerActionsType>) => {
    try {
        const res = await authAPI.logout();
        if (res.data.resultCode === 0) {
            dispatch(authActionCreators.setUserData({email: null, login: null, id: null}));
            dispatch(authActionCreators.setIsAuth(false));
        }
    } catch (err) {
        console.log(err);
    }
}

export default {
    authMe,
    loginUser,
    logoutUser,
}