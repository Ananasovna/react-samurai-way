import {DialogsPageType} from "../../types";
import {DialogsReducerActionsType} from "./actionCreators";
import {v1} from "uuid";

export const dialogsReducer = (state: DialogsPageType, action: DialogsReducerActionsType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
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
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state, newMessageText: action.payload.text};
        default:
            return state;
    }
}

export default dialogsReducer;