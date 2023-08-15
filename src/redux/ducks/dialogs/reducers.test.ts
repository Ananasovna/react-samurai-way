import {v1} from "uuid";
import {DialogsPageType} from "../../types";
import dialogsReducer, {dialogsInitState} from "./reducers";
import {dialogsActionCreators} from "./index";

const id1: string = '1';
const id2: string = '2';
const id3: string = '3';
const id4: string = '4';


let startState: DialogsPageType;

beforeEach(() => {
    startState = dialogsInitState;
})

test('new message is supposed to be added to messages', () => {
    const action = dialogsActionCreators.addMessage(id1);

    const endState = dialogsReducer(startState, action);

    expect(endState.messages[id1].length).toBe(4);
    expect(endState.messages[id1][3].time).toBe('10:00');

});

test('new text is supposed to be added to newMessageText', () => {
    const action = dialogsActionCreators.updateNewMessageText('hello');

    const endState = dialogsReducer(startState, action);

    expect(endState.newMessageText).toBe('hello');
    expect(endState.dialogs).toEqual(startState.dialogs);

});