import {ADD_POST, SET_PROFILE, SET_STATUS} from "./types";
import {ProfileType} from "../../../api/socilaMediaApi";
import {AppReducerActionsType} from "../app";

export type AddPostActionType = ReturnType<typeof addPost>
export type SetProfileActionType = ReturnType<typeof setProfile>
export type SetStatusActionType = ReturnType<typeof setStatus>


export type ProfileReducerActionsType =
    | AppReducerActionsType
    | AddPostActionType
    | SetProfileActionType
    | SetStatusActionType;

const addPost = (text: string) => {
    return {type: ADD_POST, payload: {text}} as const;
}

const setProfile = (profile: ProfileType) => {
    return {type: SET_PROFILE, payload: {profile}} as const;
}

const setStatus = (status: string) => {
    return {type: SET_STATUS, payload: {status}} as const;
}

export default {
    addPost,
    setProfile,
    setStatus,
}