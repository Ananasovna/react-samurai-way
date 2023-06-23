import {Message} from "./Dialogs";

type MessageProps = {
    message: Message
}

export const MessageItem = ({message}: MessageProps) => {

    return (
        <div>
            <div>{message.text}</div>
            <div>{message.time}</div>
        </div>
    )
}