import style from './MessagesList.module.css'
import {MessageItem} from "./MessageItem";
import {MessagesType} from "../../../redux/types";
import {SendTextForm} from "../../common/SendTextForm";

type MessagesListProps = {
    messages: MessagesType
    currentDialogId: string
    addMessage: (value: string, text: string) => void
}

export const MessagesList = ({currentDialogId, messages, addMessage}: MessagesListProps) => {

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
            {currentDialogId && <SendTextForm buttonTitle={'Send'} callBack={(text) => addMessage(currentDialogId, text)} />}
        </div>
    )
}