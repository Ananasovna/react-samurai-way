import {ADD_POST, SET_PROFILE, UPDATE_NEW_POST_TEXT} from "./types";

export type AddPostActionType = ReturnType<typeof addPost>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostText>
export type SetProfileActionType = ReturnType<typeof setProfile>


export type ProfileReducerActionsType = AddPostActionType
    | UpdateNewPostTextActionType
    | SetProfileActionType;

const addPost = () => {
    return {type: ADD_POST} as const;
}

const updateNewPostText = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, payload: {text}} as const;
}

const setProfile = (profile: string) => {
    return {type: SET_PROFILE, payload: {profile}} as const;
}

export default {
    addPost,
    updateNewPostText,
    setProfile,
}