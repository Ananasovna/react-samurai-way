import {ADD_POST, UPDATE_NEW_POST_TEXT} from "./types";

export type AddPostActionType = {
    type: typeof ADD_POST
}
// export type UpdateNewPostTextActionType = {
//     type: typeof UPDATE_NEW_POST_TEXT
//     payload: {
//         text: string
//     }
// }

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostText>

export type ProfileReducerActionsType = AddPostActionType | UpdateNewPostTextActionType;

const addPost = (): AddPostActionType => {
    return {type: ADD_POST};
}

const updateNewPostText = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, payload: {text}} as const;
}

export default {
    addPost,
    updateNewPostText,
}