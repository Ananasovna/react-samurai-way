import {combineReducers, legacy_createStore} from "redux";
import dialogsReducer from "./ducks/dialogs";
import profileReducer from "./ducks/profile";
import sidebarReducer from "./ducks/sidebar";

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
})

let store = legacy_createStore(rootReducer);

export default store;