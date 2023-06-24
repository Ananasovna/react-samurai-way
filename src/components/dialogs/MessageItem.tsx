import {Message} from "./Dialogs";
import style from './Message.module.css';

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