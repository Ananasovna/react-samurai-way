import {v1} from "uuid";
import {DialogsPageType} from "../../types";
import dialogsReducer, {dialogsInitState} from "./reducers";
import {dialogsActionCreators} from "./index";

const id1: string = '1';

let startState: DialogsPageType;

beforeEach(() => {
    startState = dialogsInitState;
})

test('new message is supposed to be added to messages', () => {
    const action = dialogsActionCreators.addMessage(id1, 'hello');

    const endState = dialogsReducer(startState, action);

    expect(endState.messages[id1].length).toBe(4);
    expect(endState.messages[id1][3].time).toBe('10:00');

});

