import {StateType} from "../../store";
import {DialogsPageType} from "../../types";

const selectDialogsPage = (state: StateType): DialogsPageType => {
    return state.dialogsPage;
}

export default {
    selectDialogsPage,
}