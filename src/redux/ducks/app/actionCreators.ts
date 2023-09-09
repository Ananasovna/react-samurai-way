import {SET_ERROR, SET_STATUS} from "./types";

export type AppReducerActionsType =
    | ReturnType<typeof setError>
    | ReturnType<typeof setStatus>

export type AppStatusType = 'idle' | 'isLoading';

const setError = (error: string) => ({type: SET_ERROR, error} as const);
const setStatus = (status: AppStatusType) => ({type: SET_STATUS, status} as const);


export default {
    setError,
    setStatus,
}