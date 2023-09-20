import {Dispatch} from "redux";
import {ProfileReducerActionsType} from "./actionCreators";
import {ProfileAPI} from "../../../api/socilaMediaApi";
import {profileActionCreators} from "./index";
import {appActionCreators} from "../app";

const {setProfile, setStatus} = {...profileActionCreators};

const getProfile = (userId: string) => async (dispatch: Dispatch<ProfileReducerActionsType>) => {
    dispatch(appActionCreators.setStatus('isLoading'));
    try {
        const res = await ProfileAPI.getProfile(userId);
        dispatch(setProfile(res.data))
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(appActionCreators.setStatus('isLoading'));
    }
}

const getStatus = (userId: string) => async (dispatch: Dispatch<ProfileReducerActionsType>) => {
    try {
        const res = await ProfileAPI.getStatus(userId);
        dispatch(setStatus(res.data))
    } catch (err) {
        console.log(err)
    }
}

const updateStatus = (status: string) => async (dispatch: Dispatch<ProfileReducerActionsType>) => {
    try {
        const res = await ProfileAPI.updateStatus(status);
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }

    } catch (err) {
        console.log(err)
    }
}

export default {
    getProfile,
    getStatus,
    updateStatus,
}