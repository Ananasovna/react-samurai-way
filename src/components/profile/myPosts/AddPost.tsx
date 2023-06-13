import s from './AddPost.module.css';

export const AddPost = () => {
    return (
        <div className={s.wrapper}>
            <textarea className={s.textarea} name="" id=""></textarea>
            <button>Save</button>
        </div>
    )
}