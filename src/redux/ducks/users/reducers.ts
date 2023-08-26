import {UsersReducerActionsType} from "./actionCreators";
import {SET_CURRENT_PAGE, SET_FOLLOWED, SET_USERS} from "./types";
import {UserType} from "../../types";

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export const usersInitState: UsersPageType = {
    users: [
        {id: '1', followed: false, name: 'Peter', photos: { small: 'https://otkritkis.com/wp-content/uploads/2022/06/ra8je.jpg'}},
        {
            id: '2',
            followed: false,
            name: 'Anna',
            photos: {small: 'https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg'
            }
        },
        {
            id: '3',
            followed: false,
            name: 'Roman',
            photos: { small: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'}
        },
        {
            id: '4',
            followed: false,
            name: 'Dimych',
            photos: { small: 'https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-krasivaya-panda.jpg'}
        },
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}

const usersReducer = (state: UsersPageType = usersInitState, action: UsersReducerActionsType) => {
    switch (action.type) {
        case SET_FOLLOWED:
            return {...state, users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: action.payload.value} : el)};
        case SET_USERS:
            return {...state, users: [...action.payload.users], totalUsersCount: action.payload.totalUsers};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload.page};
        default:
            return state;
    }
}

export default usersReducer;