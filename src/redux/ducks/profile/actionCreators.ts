import {ADD_POST, SET_PROFILE, SET_STATUS, UPDATE_NEW_POST_TEXT} from "./types";
import {ProfileType} from "../../../api/socilaMediaApi";
import {AppReducerActionsType} from "../app";

export type AddPostActionType = ReturnType<typeof addPost>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostText>
export type SetProfileActionType = ReturnType<typeof setProfile>
export type SetStatusActionType = ReturnType<typeof setStatus>


export type ProfileReducerActionsType =
    | AppReducerActionsType
    | AddPostActionType
    | UpdateNewPostTextActionType
    | SetProfileActionType
    | SetStatusActionType;

const addPost = () => {
    return {type: ADD_POST} as const;
}

const updateNewPostText = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, payload: {text}} as const;
}

const setProfile = (profile: ProfileType) => {
    return {type: SET_PROFILE, payload: {profile}} as const;
}

const setStatus = (status: string) => {
    return {type: SET_STATUS, payload: {status}} as const;
}

export default {
    addPost,
    updateNewPostText,
    setProfile,
    setStatus,
}