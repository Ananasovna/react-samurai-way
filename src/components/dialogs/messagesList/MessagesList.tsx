import style from './MessagesList.module.css'
import {MessageItem} from "./MessageItem";
import {MessagesType} from "../../../redux/types";
import {Sendler} from "../../common/Sendler";

type MessagesListProps = {
    messages: MessagesType
    currentDialogId: string
    addMessage: (text: string, dialogId: string) => void;
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

    const sendMessage = (value: string) => {
        addMessage(value, currentDialogId);
    }

    return (
        <div className={style.wrapper}>
            {getMessages()}
            {currentDialogId && <Sendler buttonTitle={'Send'} callBack={sendMessage}/>}
        </div>
    )
}