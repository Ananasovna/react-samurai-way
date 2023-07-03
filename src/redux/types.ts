export type Dialog = {
    id: string
    name: string
    avatarSrc: string
}
export type Message = {
    id: string
    text: string
    time: string
    isOwner: boolean
}
export type Messages = {
    [id: string]: Message[]
}
export type DialogsPage = {
    dialogs: Dialog[]
    messages: Messages
}

export type TPost = {
    id: number
    text: string
    likesCount: number
}
export type ProfilePage = {
    posts: TPost[]
}

export type State = {
    dialogsPage: DialogsPage
    profilePage: ProfilePage
}