import {combineReducers, compose, legacy_createStore} from "redux";
import dialogsReducer from "./ducks/dialogs";
import profileReducer from "./ducks/profile";
import sidebarReducer from "./ducks/sidebar";
import usersReducer from "./ducks/users";
import authReducer from "./ducks/app";
import {composeWithDevTools} from "@redux-devtools/extension";

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
})

let store = legacy_createStore(rootReducer, composeWithDevTools());

export type StateType = ReturnType<typeof store.getState>

export default store;