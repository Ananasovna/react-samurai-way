import {ProfilePageType} from "../../types";

import {ADD_POST, UPDATE_NEW_POST_TEXT} from "./types";
import {ProfileReducerActionsType} from "./actionCreators";

const initialState = {
    posts: [
        {id: 1, text: 'my first post', likesCount: 2},
        {
            id: 2,
            text: 'Hey! It\'s me. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            likesCount: 10
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus eius explicabo iusto labore neque perferendis provident repudiandae tempora veritatis? Adipisci aspernatur autem illo labore quos sunt veniam voluptas. Amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus eius explicabo iusto labore neque perferendis provident repudiandae tempora veritatis? Adipisci aspernatur autem illo labore quos sunt veniam voluptas. Amet.',
            likesCount: 5
        },
        {id: 4, text: 'Hey! It\'s me', likesCount: 0},
    ],
    newPostText: '',
}

const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionsType) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: state.posts.length + 1, text: state.newPostText, likesCount: 0}
                ],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.payload.text}
        default:
            return state;
    }
}

export default profileReducer;