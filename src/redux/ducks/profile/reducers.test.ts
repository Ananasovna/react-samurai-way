import {ProfilePageType} from "../../types";
import profileReducer, {profileInitState} from "./reducers";
import {profileActionCreators} from "./index";

let startState: ProfilePageType;

beforeEach(() => {
    startState = profileInitState;
})

test('new post is supposed to be added to messages', () => {

    const action = profileActionCreators.addPost('hello');

    const endState = profileReducer(startState, action);

    expect(endState.posts.length).toBe(5);
    expect(endState.posts[4].text).toBe('hello');

});


test('status is supposed to be updated', () => {
    const action = profileActionCreators.setStatus('hello');

    const endState = profileReducer(startState, action);

    expect(endState.status).toBe('hello');
});