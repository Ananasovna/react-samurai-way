export type UserType = {
    id: string
    name: string
    avatarSrc: string
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
}

export type SidebarType = {
    friends: UserType[]
}

export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
}

export type AddMessageType = (dialogId: string) => void;

export type AddPostType = (text: string) => void;

export type UpdateTextType = (text: string) => void;