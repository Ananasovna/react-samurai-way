type AddMessageActionType = ReturnType<typeof addMessage>;
type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageText>;
export type DialogsReducerActionsType = AddMessageActionType | UpdateNewMessageTextActionType;

export const addMessage = (dialogId: string) => {
    return {type: 'ADD-MESSAGE', payload: {dialogId}} as const;
}

export const updateNewMessageText = (text: string) => {
    return {type: 'UPDATE-NEW-MESSAGE-TEXT', payload: {text}} as const;
}