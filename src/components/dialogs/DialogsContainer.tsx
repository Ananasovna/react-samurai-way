import {DispatchType} from "../../redux/types";
import {connect} from "react-redux";
import {dialogsActionCreators} from "../../redux/ducks/dialogs";
import {Dialogs} from "./Dialogs";
import {StateType} from "../../redux/store";

const mapStateToProps = (state: StateType) => {
    return {
        data: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addMessage: (currentDialogId:  string) => {
            dispatch(dialogsActionCreators.addMessage(currentDialogId));
        },
        updateNewMessageText: (value: string) => {
            dispatch(dialogsActionCreators.updateNewMessageText(value))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)