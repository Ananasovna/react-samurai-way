import style from './DialogsList.module.css';
import {DialogItem} from "./DialogItem";
import {Dialog} from "./Dialogs";

type DialogsListprops = {
    dialogs: Dialog[]
}

export const DialogsList = ({dialogs}: DialogsListprops) => {


    return (
        <div className={style.wrapper}>
            {
                dialogs.map(el => <DialogItem key={el.id} user={el} />)
            }
        </div>
    )
}