import s from './Dialogs.module.css';
import {DialogsList} from "./dialogsList/DialogsList";
import {MessagesList} from "./messagesList/MessagesList";
import {useParams} from "react-router-dom";
import {DialogsPageType, DispatchType} from "../../redux/types";

type DialogsProps = {
    data: DialogsPageType
    addMessage: (currentDialogId:  string) => void
    updateNewMessageText: (value: string) => void
}

export const Dialogs = ({data, addMessage,  updateNewMessageText}: DialogsProps) => {

    const params = useParams();
    let idValue: string = '';

    if (params.id) {
        idValue = params.id;
    }

    return (
        <div className={s.wrapper}>
            <DialogsList dialogs={data.dialogs}/>
            <MessagesList addMessage={addMessage} updateNewMessageText={updateNewMessageText}
                          currentDialogId={idValue} messages={data.messages} newMessageText={data.newMessageText}/>
        </div>
    )
}