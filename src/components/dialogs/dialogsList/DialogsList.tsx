import style from './DialogsList.module.css';
import {DialogItem} from "./DialogItem";
import {Dialog} from "../../../redux/types";



type DialogsListProps = {
    dialogs: Dialog[]
}

export const DialogsList = ({dialogs}: DialogsListProps) => {

    const getDialogs = () => {
        return dialogs.map(el => <DialogItem key={el.id} user={el} />);
    }

    return (
        <div className={style.wrapper}>
            {getDialogs()}
        </div>
    )
}