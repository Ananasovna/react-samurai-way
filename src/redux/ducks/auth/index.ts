import {default as authActionCreators, AuthReducerActionsType} from "./actionCreators";
import {default as authThunkCreators} from "./operations";
import authReducer from "./reducers";

export {authActionCreators, authThunkCreators};
export type {AuthReducerActionsType};

export default authReducer;