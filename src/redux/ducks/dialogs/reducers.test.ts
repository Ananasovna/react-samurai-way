import {v1} from "uuid";
import {DialogsPageType} from "../../types";
import dialogsReducer from "./reducers";
import {dialogsActionCreators} from "./index";

const id1: string = '1';
const id2: string = '2';
const id3: string = '3';
const id4: string = '4';


const startState: DialogsPageType = {
    dialogs: [
        {id: id1, name: 'Peter', avatarSrc: 'https://otkritkis.com/wp-content/uploads/2022/06/ra8je.jpg'},
        {
            id: id2,
            name: 'Anna',
            avatarSrc: 'https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg'
        },
        {
            id: id3,
            name: 'Roman',
            avatarSrc: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'
        },
        {
            id: id4,
            name: 'Dimych',
            avatarSrc: 'https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-krasivaya-panda.jpg'
        },
    ],
    messages: {
        [id1]: [
            {id: v1(), text: 'Hello, how are you?', time: '18:46', isOwner: false},
            {id: v1(), text: 'Any plans for tonight?', time: '19:00', isOwner: false},
            {id: v1(), text: 'Hi, I\'m fine, and you?', time: '19:15', isOwner: true},
        ],
        [id2]: [
            {id: v1(), text: 'What are you doing?', time: '11:30', isOwner: false},
            {id: v1(), text: 'Coding!', time: '11:58', isOwner: true},
            {id: v1(), text: 'Good for you', time: '12:30', isOwner: false},
        ],
        [id3]:
            [],
        [id4]:
            [],
    },
    newMessageText: '',
}

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