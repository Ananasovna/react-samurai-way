
import style from './DialogItem.module.css';
import {Dialog} from "./Dialogs";
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    user: Dialog
}

export const DialogItem = ({user}: DialogItemProps) => {

    return (
        <NavLink to={`/dialogs/`+ user.id} className={style.wrapper}>
            <div className={style.avatarWrapper}>
                <img src={user.avatarSrc} alt="avatar" className={style.avatarImg}/>
            </div>
            <div className={style.name}>{user.name}</div>
        </NavLink>
    )
}