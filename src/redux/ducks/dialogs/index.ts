import dialogsReducer from "./reducers";
import {default as dialogsActionCreators} from "./actionCreators";
import {default as dialogsSelectors} from "./selectors";
import {DialogsReducerActionsType} from "./actionCreators";

export {dialogsActionCreators, dialogsSelectors};
export type {DialogsReducerActionsType};

export default dialogsReducer;