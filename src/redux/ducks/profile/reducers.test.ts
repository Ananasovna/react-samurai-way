import {ProfilePageType} from "../../types";
import profileReducer from "./reducers";
import {profileActionCreators} from "./index";

const startState:ProfilePageType = {
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
    newPostText: 'hello',
}

test('new post is supposed to be added to messages', () => {

    const action = profileActionCreators.addPost();

    const endState = profileReducer(startState, action);

    expect(endState.posts.length).toBe(5);
    expect(endState.posts[4].text).toBe('hello');

});

test('new text is supposed to be added to newPostText', () => {
        const action = profileActionCreators.updateNewPostText('hello');

    const endState = profileReducer(startState, action);

    expect(endState.newPostText).toBe('hello');
    expect(endState.posts).toEqual(startState.posts);

});