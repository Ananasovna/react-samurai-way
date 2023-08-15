import {ProfilePageType, SidebarType} from "../../types";
import {ProfileReducerActionsType} from "../profile";

const id1: string = '1';
const id2: string = '2';
const id3: string = '3';
const id4: string = '4';


export const sidebarInitState: SidebarType = {
    friends: [
        {   id: id1,
            followed: false,
            name: 'Peter',
            photos: {
            small: 'https://otkritkis.com/wp-content/uploads/2022/06/ra8je.jpg'
            }
        },
        {
            id: id2,
            followed: false,
            name: 'Anna',
            photos: {
                small: 'https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg'
            }
        },
        {
            id: id3,
            followed: false,
            name: 'Roman',
            photos: {
                small: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'
            }
        },
        {
            id: id4,
            followed: false,
            name: 'Dimych',
            photos: {
                small: 'https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-krasivaya-panda.jpg'
            }
        },
    ]
}

export const sidebarReducer = (state: SidebarType = sidebarInitState, action: ProfileReducerActionsType) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default sidebarReducer;
