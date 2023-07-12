import style from './MessagesList.module.css'
import {MessageItem} from "./MessageItem";
import {MessagesType} from "../../../redux/types";
import {Sendler} from "../../common/Sendler";

type MessagesListProps = {
    messages: MessagesType
    newMessageText: string
    currentDialogId: string
    addMessage: (dialogId: string) => void
    updateNewMessageText: (text: string) => void
}

export const MessagesList = ({currentDialogId, messages, addMessage, newMessageText, updateNewMessageText}: MessagesListProps) => {

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
        addMessage(currentDialogId);
    }

    return (
        <div className={style.wrapper}>
            {getMessages()}
            {currentDialogId && <Sendler value={newMessageText} buttonTitle={'Send'} callBack={sendMessage} onChangeHandler={updateNewMessageText}/>}
        </div>
    )
}