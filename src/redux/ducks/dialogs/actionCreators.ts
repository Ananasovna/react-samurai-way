import {ADD_MESSAGE} from "./types";

type AddMessageActionType = ReturnType<typeof addMessage>;

export type DialogsReducerActionsType = AddMessageActionType;

const addMessage = (dialogId: string, text: string) => {
    return {type: ADD_MESSAGE, payload: {dialogId, text}} as const;
}

export default {
    addMessage,
}