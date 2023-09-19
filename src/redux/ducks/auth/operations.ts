import {AuthReducerActionsType} from "./actionCreators";
import {Dispatch} from "redux";
import {authAPI} from "../../../api/socilaMediaApi";
import {authActionCreators} from "./index";

const authMe = () => async (dispatch: Dispatch<AuthReducerActionsType>) => {
    try {
        const res = await authAPI.me();
        if (res.data.resultCode === 0) {
            dispatch(authActionCreators.setUserData(res.data.data));
            dispatch(authActionCreators.setIsAuth(true))
        } else {
            console.log(res.data.messages[0])
            dispatch(authActionCreators.setIsAuth(false))
        }
    } catch (err) {
        console.log(err);
    } finally {

    }
}

export default {
    authMe,
}