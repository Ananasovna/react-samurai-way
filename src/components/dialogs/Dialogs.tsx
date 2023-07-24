import s from './Dialogs.module.css';
import {DialogsList} from "./dialogsList/DialogsList";
import {MessagesList} from "./messagesList/MessagesList";
import {useParams} from "react-router-dom";
import {DialogsPageType, DispatchType} from "../../redux/types";

type DialogsProps = {
    data: DialogsPageType
    dispatch: DispatchType
}

export const Dialogs = ({data, dispatch}: DialogsProps) => {

    const params = useParams();
    let idValue: string = '';

    if (params.id) {
        idValue = params.id;
    }

    return (
        <div className={s.wrapper}>
            <DialogsList dialogs={data.dialogs}/>
            <MessagesList dispatch={dispatch}
                          currentDialogId={idValue} messages={data.messages} newMessageText={data.newMessageText}/>
        </div>
    )
}