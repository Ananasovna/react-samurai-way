import {combineReducers, legacy_createStore} from "redux";
import dialogsReducer from "./ducks/dialogs";
import profileReducer from "./ducks/profile";
import sidebarReducer from "./ducks/sidebar";
import usersReducer from "./ducks/users";

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    users: usersReducer
})

let store = legacy_createStore(rootReducer);

export type StateType = ReturnType<typeof store.getState>

export default store;