import {ProfilePageType} from "../../types";

import {ADD_POST, SET_PROFILE, SET_STATUS} from "./types";
import {ProfileReducerActionsType} from "./actionCreators";

export const profileInitState = {
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
    profile: {},
    status: null,
}

const profileReducer = (state: ProfilePageType = profileInitState, action: ProfileReducerActionsType) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: state.posts.length + 1, text: action.payload.text, likesCount: 0}
                ]
            };
        case SET_PROFILE: {
            return {...state, profile: action.payload.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.payload.status};
        }
        default:
            return state;
    }
}

export default profileReducer;