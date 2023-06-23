import {Messages} from "./Dialogs";
import style from './MessagesList.module.css'
import {MessageItem} from "./MessageItem";

type MessagesListProps = {
    messages: Messages
    currentDialogId: string
}

export const MessagesList = ({currentDialogId, messages}: MessagesListProps) => {


    return (
        <div className={style.wrapper}>
            {messages[currentDialogId].map(el => <MessageItem message={el} />)}
        </div>
    )
}