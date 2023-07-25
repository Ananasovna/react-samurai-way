import {DialogsPageType} from "../../types";
import {DialogsReducerActionsType} from "./actionCreators";
import {v1} from "uuid";
import {ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "./types";

const id1: string = '1';
const id2: string = '2';
const id3: string = '3';
const id4: string = '4';

const initialState = {
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

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsReducerActionsType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const stateCopy = {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.dialogId]: [
                        ...state.messages[action.payload.dialogId],
                        {id: v1(), text: state.newMessageText, time: '10:00', isOwner: true}
                    ]
                }
            };
            stateCopy.newMessageText = '';
            return stateCopy;
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.payload.text};
        default:
            return state;
    }
}

export default dialogsReducer;