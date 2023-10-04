import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import dialogsReducer from "./ducks/dialogs";
import profileReducer from "./ducks/profile";
import usersReducer from "./ducks/users";
import authReducer from "./ducks/auth";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk, {ThunkAction} from "redux-thunk";
import appReducer from "./ducks/app";

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer,
})

let store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type StateType = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StateType, unknown, AnyAction>;

export default store;