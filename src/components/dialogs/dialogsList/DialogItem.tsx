import style from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import {UserType} from "../../../redux/types";

type DialogItemProps = {
    user: UserType
}

export const DialogItem = ({user}: DialogItemProps) => {

    return (
        <NavLink to={`/dialogs/`+ user.id} className={style.wrapper}>
            <div className={style.avatarWrapper}>
                <img src={user.photos.small} alt="avatar" className={style.avatarImg}/>
            </div>
            <div className={style.name}>{user.name}</div>
        </NavLink>
    )
}