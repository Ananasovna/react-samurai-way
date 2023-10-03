import {authThunkCreators} from "../auth";
import {AppThunk} from "../../store";
import {appActionCreators} from "./index";

const initializeApp = (): AppThunk => async (dispatch) => {
    try {
        await dispatch(authThunkCreators.authMe());
        dispatch(appActionCreators.setIsInitialized(true));
    } catch {

    }
}

export default {
    initializeApp,
}