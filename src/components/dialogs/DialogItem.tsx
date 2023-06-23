
import style from './DialogItem.module.css';
import {Dialog} from "./Dialogs";

type DialogItemProps = {
    user: Dialog
}

export const DialogItem = ({user}: DialogItemProps) => {

    return (
        <div className={style.wrapper}>
            <div className={style.avatarWrapper}>
                <img src={user.avatarSrc} alt="avatar" className={style.avatarImg}/>
            </div>
            <div className={style.name}>{user.name}</div>
        </div>
    )
}