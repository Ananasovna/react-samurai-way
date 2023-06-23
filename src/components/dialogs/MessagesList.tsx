import {id1, Messages} from "./Dialogs";
import style from './MessagesList.module.css'
import {MessageItem} from "./MessageItem";
import {useParams} from "react-router-dom";

type MessagesListProps = {
    messages: Messages
    currentDialogId: string
}

export const MessagesList = ({currentDialogId, messages}: MessagesListProps) => {

    console.log(currentDialogId === id1)

    const getMessages = () => {
        if (currentDialogId) {
            return messages[currentDialogId].map(el => <MessageItem key={el.id} message={el} />);
        } else {
            return messages[id1].map(el => <MessageItem key={el.id} message={el} />);
        }

    }

    return (
        <div className={style.wrapper}>
            {getMessages()}
        </div>
    )
}