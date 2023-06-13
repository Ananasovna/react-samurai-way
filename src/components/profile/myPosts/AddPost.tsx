import s from './AddPost.module.css';
import {Button} from "../../common/Button";

export const AddPost = () => {
    return (
        <div className={s.wrapper}>
            <textarea className={s.textarea} name="" id=""></textarea>
            <Button callBack={()=>{}} title={'Save'} />
        </div>
    )
}