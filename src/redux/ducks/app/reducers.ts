import {SET_ERROR, SET_STATUS} from "./types";
import {AppReducerActionsType, AppStatusType} from "./actionCreators";

type AppInitState = typeof appInitState;

const appInitState = {
    error: null as string | null,
    status: 'idle' as AppStatusType,
}

const appReducer = (state: AppInitState = appInitState, action: AppReducerActionsType) => {
    switch (action.type) {
        case SET_ERROR:
            return {...state, error: action.error};
        case SET_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
}

export default appReducer;

