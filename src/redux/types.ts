import {DialogsReducerActionsType} from "./ducks/dialogs";
import {ProfileReducerActionsType} from "./ducks/profile";
import {UsersReducerActionsType} from "./ducks/users";
import {ProfileType} from "../api/socilaMediaApi";


export type UserType = {
    id: string
    followed: boolean
    name: string
    photos: {
        small?: string,
        large?: string,
    }
    status?: string
}

export type MessageType = {
    id: string
    text: string
    time: string
    isOwner: boolean
}

export type MessagesType = {
    [id: string]: MessageType[]
}

export type DialogsPageType = {
    dialogs: UserType[]
    messages: MessagesType
    newMessageText: string
}

export type PostType = {
    id: number
    text: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    profile: ProfileType | { }
}

export type SidebarType = {
    friends: UserType[]
}

export type DispatchType = (action: DialogsReducerActionsType | ProfileReducerActionsType | UsersReducerActionsType) => void;

