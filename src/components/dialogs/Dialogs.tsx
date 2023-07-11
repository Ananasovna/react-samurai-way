import s from './Dialogs.module.css';
import {DialogsList} from "./dialogsList/DialogsList";
import {MessagesList} from "./messagesList/MessagesList";
import {useParams} from "react-router-dom";
import {DialogsPageType} from "../../redux/types";

type DialogsProps = {
    data: DialogsPageType
    addMessage: (text: string, dialogId: string) => void;
}

export const Dialogs = ({data, addMessage}: DialogsProps) => {

    const params = useParams();
    let idValue: string = '';

    if (params.id) {
        idValue = params.id;
    }

    return (
        <div className={s.wrapper}>
            <DialogsList dialogs={data.dialogs}/>
            <MessagesList addMessage={addMessage} currentDialogId={idValue} messages={data.messages}/>
        </div>
    )
}