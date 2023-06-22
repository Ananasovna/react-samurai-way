import s from './Dialogs.module.css';
import {DialogsList} from "./DialogsList";
import {v1} from "uuid";

export type Dialog = {
    id: string
    name: string
    avatarSrc: string
}

// type Message = {
//     id: string
//     text: string
//     user:
// }

export const Dialogs = () => {

    const id1 = v1();
    const id2 = v1();
    const id3 = v1();
    const id4 = v1();

    const dialogs: Dialog[] = [
        {id: id1, name: 'Peter', avatarSrc: ''},
        {id: id2, name: 'Anna', avatarSrc: ''},
        {id: id3, name: 'Roman', avatarSrc: ''},
        {id: id4, name: 'Dimych', avatarSrc: ''},
    ]

    const messages = {
        [id1]: [
            {id: v1(), text: 'Hello how are you?', time: '10:30', isOwner: false},
            {id: v1(), text: 'Hello how are you?', time: '10:30', isOwner: false},
            {id: v1(), text: 'Hello how are you?', time: '10:30', isOwner: false},
        ],
        [id2]: [
            {id: v1(), text: 'Hello how are you?', time: '10:30', isOwner: true}
        ]
    }


    return (
        <div className={s.wrapper}>
            <DialogsList dialogs={dialogs}/>
        </div>
    )
}