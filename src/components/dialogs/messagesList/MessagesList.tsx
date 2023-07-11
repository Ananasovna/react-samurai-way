import style from './MessagesList.module.css'
import {MessageItem} from "./MessageItem";
import {MessagesType} from "../../../redux/types";

type MessagesListProps = {
    messages: MessagesType
    currentDialogId: string
}

export const MessagesList = ({currentDialogId, messages}: MessagesListProps) => {

    const getMessages = () => {
        if (currentDialogId) {
            return messages[currentDialogId].map(el => {
                if (messages[currentDialogId].length !== 0) {
                    return <MessageItem key={el.id} message={el}/>;
                }
            });
        }
        return <div className={style.placeholder}>Choose dialog</div>
    }

    return (
        <div className={style.wrapper}>
            {getMessages()}
        </div>
    )
}