import style from './MessagesList.module.css'
import {MessageItem} from "./MessageItem";
import {MessagesType} from "../../../redux/types";
import {Sendler} from "../../common/Sendler";

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

    const addMessage = (value: string) => {
        console.log(value);
    }

    return (
        <div className={style.wrapper}>
            {getMessages()}
            {currentDialogId && <Sendler buttonTitle={'Send'} callBack={addMessage}/>}
        </div>
    )
}