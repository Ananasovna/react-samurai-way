import {Dispatch} from "redux";
import {ProfileReducerActionsType} from "./actionCreators";
import {ProfileAPI} from "../../../api/socilaMediaApi";
import {profileActionCreators} from "./index";
import {appActionCreators} from "../app";

const {setProfile} = {...profileActionCreators};

const getProfile = (userId: string) => async (dispatch: Dispatch<ProfileReducerActionsType>) => {
    dispatch(appActionCreators.setStatus('isLoading'));
    try {
        const res = await ProfileAPI.get(userId);
        dispatch(setProfile(res.data))
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(appActionCreators.setStatus('isLoading'));
    }
}

export default {
    getProfile,
}