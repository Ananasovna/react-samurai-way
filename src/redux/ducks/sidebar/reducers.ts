import {ProfilePageType, SidebarType} from "../../types";
import {ProfileReducerActionsType} from "../profile";

const id1: string = '1';
const id2: string = '2';
const id3: string = '3';
const id4: string = '4';


const initialState = {
    friends: [
        {id: id1, name: 'Peter', avatarSrc: 'https://otkritkis.com/wp-content/uploads/2022/06/ra8je.jpg'},
        {
            id: id2,
            name: 'Anna',
            avatarSrc: 'https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg'
        },
        {
            id: id3,
            name: 'Roman',
            avatarSrc: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'
        },
        {
            id: id4,
            name: 'Dimych',
            avatarSrc: 'https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-krasivaya-panda.jpg'
        },
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: ProfileReducerActionsType) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default sidebarReducer;
