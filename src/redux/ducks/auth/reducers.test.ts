// import usersReducer, {usersInitState, UsersPageType} from "./reducers";
// import {usersActionCreators} from "./index";
//
// let startState: UsersPageType;
//
// beforeEach(() => {
//     startState = usersInitState
// })
//
// test('followed property of the user should be changed', () => {
//
//     const action = usersActionCreators.setFollowed(true, '2');
//
//     const endState = usersReducer(startState, action);
//
//     expect(endState.users[1].followed).toBe(true);
//     expect(endState.users[0].followed).toBe(false);
//
// });
