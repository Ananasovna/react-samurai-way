import {ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "./types";

type AddMessageActionType = ReturnType<typeof addMessage>;
type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageText>;
export type DialogsReducerActionsType = AddMessageActionType | UpdateNewMessageTextActionType;

const addMessage = (dialogId: string) => {
    return {type: ADD_MESSAGE, payload: {dialogId}} as const;
}

const updateNewMessageText = (text: string) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, payload: {text}} as const;
}

export default {
    addMessage,
    updateNewMessageText,
}