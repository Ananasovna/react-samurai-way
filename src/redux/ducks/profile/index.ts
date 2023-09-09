import {default as profileActionCreators, ProfileReducerActionsType} from "./actionCreators";
import {default as profileThunkCreators} from "./operations";
import profileReducer from "./reducers";

export {profileActionCreators, profileThunkCreators};
export type {ProfileReducerActionsType};

export default profileReducer;