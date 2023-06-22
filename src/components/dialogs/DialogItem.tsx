
import style from './DialogItem.module.css';
import {Dialog} from "./Dialogs";

type DialogItem = {
    user: Dialog
}

export const DialogItem = ({user}: DialogItem) => {

    return (
        <div className={style.wrapper}>
            <div className={style.avatarWrapper}>
                <img src={user.avatarSrc} alt="avatar" className={style.avatar}/>
            </div>
            <div>{user.name}</div>
        </div>
    )
}