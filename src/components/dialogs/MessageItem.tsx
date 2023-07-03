import style from './Message.module.css';
import {Message} from "../../redux/types";

type MessageProps = {
    message: Message
}

export const MessageItem = ({message}: MessageProps) => {

    const messageClass = `${style.wrapper} ${message.isOwner ? style.owner : ''}`;

    return (
        <div className={messageClass}>
            <div className={style.text}>{message.text}</div>
            <div className={style.time}>{message.time}</div>
        </div>
    )
}