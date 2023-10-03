import {SET_ERROR, SET_STATUS} from "./types";
import {SET_IS_INITIALIZED} from "../auth/types";

export type AppReducerActionsType =
    | ReturnType<typeof setError>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setIsInitialized>


export type AppStatusType = 'idle' | 'isLoading';

const setError = (error: string | null) => ({type: SET_ERROR, error} as const);
const setStatus = (status: AppStatusType) => ({type: SET_STATUS, status} as const);
const setIsInitialized = (isInitialized: boolean) => ({type: SET_IS_INITIALIZED, isInitialized} as const);


export default {
    setError,
    setStatus,
    setIsInitialized,
}