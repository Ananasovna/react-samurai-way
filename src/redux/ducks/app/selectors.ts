import {StateType} from "../../store";

const selectIsInitialized = (state: StateType): boolean => {
    return state.app.isInitialized;
}

const selectError = (state: StateType): string | null => {
    return state.app.error;
}

export default {
    selectIsInitialized,
    selectError,
}