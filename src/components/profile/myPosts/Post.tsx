import s from './Post.module.css';
import {TPost} from "../../../redux/types";

type PostProps = {
    data: TPost

}

export const Post = ({data}: PostProps) => {
    return (
        <div className={s.wrapper}>
            <div>
                <div className={s.avatarWrapper}>
                    <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt="avatar"/>
                </div>
                <div className={s.likesCounter}>{`Likes: ${data.likesCount}`}</div>
            </div>
            <div className={s.text}>
                {data.text}
            </div>

        </div>
    )
}