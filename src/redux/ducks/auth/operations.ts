import {AuthReducerActionsType} from "./actionCreators";
import {Dispatch} from "redux";
import {authAPI} from "../../../api/socilaMediaApi";
import {authActionCreators} from "./index";

const authMe = () => async (dispatch: Dispatch<AuthReducerActionsType>) => {
    try {
        const res = await authAPI.me();
        dispatch(authActionCreators.setUserData(res.data.data));
        dispatch(authActionCreators.setIsAuth(true))
    } catch (err) {
        console.log(err);
    } finally {

    }
}

export default {
    authMe,
}