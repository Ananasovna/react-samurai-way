import s from './Dialogs.module.css';
import {DialogsList} from "./dialogsList/DialogsList";
import {MessagesList} from "./messagesList/MessagesList";
import {Navigate, useParams} from "react-router-dom";
import {DialogsPageType} from "../../redux/types";

type DialogsProps = {
    data: DialogsPageType
    isAuth: boolean | null
    addMessage: (currentDialogId:  string, text: string) => void
    updateNewMessageText: (value: string) => void
}

export const Dialogs = ({data, addMessage, isAuth}: DialogsProps) => {
    const params = useParams();
    let idValue: string = '';

    if (params.id) {
        idValue = params.id;
    }
    if (isAuth === false) {
        return (
            <Navigate to={'/login'} />
        )
    };

    return (
        <div className={s.wrapper}>
            <DialogsList dialogs={data.dialogs}/>
            <MessagesList addMessage={addMessage} currentDialogId={idValue} messages={data.messages}/>
        </div>
    )
}