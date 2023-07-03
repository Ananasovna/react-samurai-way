import s from './Dialogs.module.css';
import {DialogsList} from "./DialogsList";
import {MessagesList} from "./MessagesList";
import {useParams} from "react-router-dom";
import {DialogsPage} from "../../redux/types";

type DialogsProps = {
    data: DialogsPage
}

export const Dialogs = ({data}: DialogsProps) => {

    const params = useParams();
    let idValue: string = '';

    if (params.id) {
        idValue = params.id;
    }

    return (
        <div className={s.wrapper}>
            <DialogsList dialogs={data.dialogs}/>
            <MessagesList currentDialogId={idValue} messages={data.messages}/>
        </div>
    )
}