import style from './MessagesList.module.css'
import {MessageItem} from "./MessageItem";
import {DispatchType, MessagesType} from "../../../redux/types";
import {Sendler} from "../../common/Sendler";
import {dialogsActionCreators} from "../../../redux/ducks/dialogs";

type MessagesListProps = {
    messages: MessagesType
    newMessageText: string
    currentDialogId: string
    dispatch: DispatchType
}

export const MessagesList = ({currentDialogId, messages, newMessageText, dispatch}: MessagesListProps) => {

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
        dispatch(dialogsActionCreators.addMessage(currentDialogId));
    }

    return (
        <div className={style.wrapper}>
            {getMessages()}
            {currentDialogId && <Sendler value={newMessageText} buttonTitle={'Send'} callBack={sendMessage} onChangeHandler={(value) => dispatch(dialogsActionCreators.updateNewMessageText(value))}/>}
        </div>
    )
}