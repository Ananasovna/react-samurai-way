import {AnyAction, applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import dialogsReducer from "./ducks/dialogs";
import profileReducer from "./ducks/profile";
import sidebarReducer from "./ducks/sidebar";
import usersReducer from "./ducks/users";
import authReducer from "./ducks/auth";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk, {ThunkAction} from "redux-thunk";

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
})

let store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type StateType = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StateType, unknown, AnyAction>;

export default store;