import {DispatchType} from "../../redux/types";
import {connect} from "react-redux";
import {dialogsActionCreators} from "../../redux/ducks/dialogs";
import {Dialogs} from "./Dialogs";
import {StateType} from "../../redux/store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ComponentType} from "react";

const mapStateToProps = (state: StateType) => {
    return {
        data: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addMessage: (currentDialogId:  string, text: string) => {
            dispatch(dialogsActionCreators.addMessage(currentDialogId, text));
        },

    }
}

export const DialogsContainer = compose<ComponentType> (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);