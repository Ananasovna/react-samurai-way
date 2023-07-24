import {ProfilePageType} from "../../types";

import {ADD_POST, UPDATE_NEW_POST_TEXT} from "./types";
import {ProfileReducerActionsType} from "./actionCreators";

export const profileReducer = (state: ProfilePageType, action: ProfileReducerActionsType) => {

    switch (action.type) {
        case ADD_POST:
            const stateCopy = {
                ...state,
                posts: [
                    ...state.posts,
                    {id: state.posts.length + 1, text: state.newPostText, likesCount: 0}
                ],
                newPostText: '',
            };
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.payload.text}
        default:
            return state;
    }
}

export default profileReducer;