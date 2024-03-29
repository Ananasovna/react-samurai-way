// import {v1} from "uuid";
// import {StateType, StoreType} from "./types";
// import dialogsReducer, {DialogsReducerActionsType} from "./ducks/dialogs";
// import profileReducer, {ProfileReducerActionsType} from "./ducks/profile";
//
// const id1: string = '1';
// const id2: string = '2';
// const id3: string = '3';
// const id4: string = '4';
//
// export const storeManual: StoreType = {
//     _state: {
//         dialogsPage: {
//             dialogs: [
//                 {id: id1, fullName: 'Peter', avatarSrc: 'https://otkritkis.com/wp-content/uploads/2022/06/ra8je.jpg'},
//                 {
//                     id: id2,
//                     fullName: 'Anna',
//                     avatarSrc: 'https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg'
//                 },
//                 {
//                     id: id3,
//                     fullName: 'Roman',
//                     avatarSrc: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'
//                 },
//                 {
//                     id: id4,
//                     fullName: 'Dimych',
//                     avatarSrc: 'https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-krasivaya-panda.jpg'
//                 },
//             ],
//             messages: {
//                 [id1]: [
//                     {id: v1(), text: 'Hello, how are you?', time: '18:46', isOwner: false},
//                     {id: v1(), text: 'Any plans for tonight?', time: '19:00', isOwner: false},
//                     {id: v1(), text: 'Hi, I\'m fine, and you?', time: '19:15', isOwner: true},
//                 ],
//                 [id2]: [
//                     {id: v1(), text: 'What are you doing?', time: '11:30', isOwner: false},
//                     {id: v1(), text: 'Coding!', time: '11:58', isOwner: true},
//                     {id: v1(), text: 'Good for you', time: '12:30', isOwner: false},
//                 ],
//                 [id3]:
//                     [],
//                 [id4]:
//                     [],
//             },
//             newMessageText: '',
//         },
//         profilePage: {
//             posts: [
//                 {id: 1, text: 'my first post', likesCount: 2},
//                 {
//                     id: 2,
//                     text: 'Hey! It\'s me. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
//                     likesCount: 10
//                 },
//                 {
//                     id: 3,
//                     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus eius explicabo iusto labore neque perferendis provident repudiandae tempora veritatis? Adipisci aspernatur autem illo labore quos sunt veniam voluptas. Amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus eius explicabo iusto labore neque perferendis provident repudiandae tempora veritatis? Adipisci aspernatur autem illo labore quos sunt veniam voluptas. Amet.',
//                     likesCount: 5
//                 },
//                 {id: 4, text: 'Hey! It\'s me', likesCount: 0},
//             ],
//             newPostText: '',
//         },
//         sidebar: {
//             friends: [
//                 {id: id1, fullName: 'Peter', avatarSrc: 'https://otkritkis.com/wp-content/uploads/2022/06/ra8je.jpg'},
//                 {
//                     id: id2,
//                     fullName: 'Anna',
//                     avatarSrc: 'https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg'
//                 },
//                 {
//                     id: id3,
//                     fullName: 'Roman',
//                     avatarSrc: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'
//                 },
//                 {
//                     id: id4,
//                     fullName: 'Dimych',
//                     avatarSrc: 'https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-krasivaya-panda.jpg'
//                 },
//             ]
//         }
//     },
//
//     _callSubscriber(state: StateType) {
//         console.log('no observers')
//     },
//
//     setState(state: StateType) {
//         this._state = state;
//     },
//
//     getState() {
//         return this._state;
//     },
//
//     subscribe(observer: (state: StateType) => void) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action: DialogsReducerActionsType | ProfileReducerActionsType) {
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action as DialogsReducerActionsType);
//         this._state.profilePage = profileReducer(this._state.profilePage, action as ProfileReducerActionsType)
//         this._callSubscriber(this._state);
//     },
// }