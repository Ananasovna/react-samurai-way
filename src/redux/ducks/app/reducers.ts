import {SET_ERROR, SET_STATUS} from "./types";
import {AppReducerActionsType, AppStatusType} from "./actionCreators";
import {SET_IS_INITIALIZED} from "../auth/types";

type AppInitState = typeof appInitState;

const appInitState = {
    error: null as string | null,
    status: 'idle' as AppStatusType,
    isInitialized: false,
}

const appReducer = (state: AppInitState = appInitState, action: AppReducerActionsType) => {
    switch (action.type) {
        case SET_ERROR:
            return {...state, error: action.error};
        case SET_STATUS:
            return {...state, status: action.status};
        case SET_IS_INITIALIZED:
            return {...state, isInitialized: action.isInitialized};
        default:
            return state;
    }
}

export default appReducer;

