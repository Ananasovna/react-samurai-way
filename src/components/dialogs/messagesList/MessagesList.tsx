import style from './MessagesList.module.css'
import {MessageItem} from "./MessageItem";
import {DispatchType, MessagesType} from "../../../redux/types";
import {Sendler} from "../../common/Sendler";
import {dialogsActionCreators} from "../../../redux/ducks/dialogs";

type MessagesListProps = {
    messages: MessagesType
    newMessageText: string
    currentDialogId: string
    addMessage: (value: string) => void
    updateNewMessageText: (value: string) => void
}

export const MessagesList = ({currentDialogId, messages, newMessageText, addMessage, updateNewMessageText}: MessagesListProps) => {

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
            {currentDialogId && <Sendler value={newMessageText} buttonTitle={'Send'} callBack={(value) => addMessage(value)} onChangeHandler={(value) => updateNewMessageText(value)}/>}
        </div>
    )
}