import s from './Post.module.css';

type PostProps = {
    text: string
}

export const Post = ({text}: PostProps) => {
    return (
        <div className={s.wrapper}>
            <div className={s.avatarWrapper}>
                <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt="avatar"/>
            </div>
            <div className={s.text}>
                {text}
            </div>

        </div>
    )
}