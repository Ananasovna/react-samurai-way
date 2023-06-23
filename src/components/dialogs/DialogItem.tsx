
import style from './DialogItem.module.css';
import {Dialog} from "./Dialogs";
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    user?: Dialog
}

export const DialogItem = ({user = {id: '1', name: 'Peter', avatarSrc: 'https://otkritkis.com/wp-content/uploads/2022/06/ra8je.jpg'}}: DialogItemProps) => {

    return (
        <NavLink to={`/dialogs/`+ user.id} className={style.wrapper}>
            <div className={style.avatarWrapper}>
                <img src={user.avatarSrc} alt="avatar" className={style.avatarImg}/>
            </div>
            <div className={style.name}>{user.name}</div>
        </NavLink>
    )
}