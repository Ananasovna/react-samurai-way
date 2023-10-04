import {DispatchType} from "../../redux/types";
import {connect} from "react-redux";
import {dialogsActionCreators, dialogsSelectors} from "../../redux/ducks/dialogs";
import {Dialogs} from "./Dialogs";
import {StateType} from "../../redux/store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ComponentType} from "react";
import {authSelectors} from "../../redux/ducks/auth";

const mapStateToProps = (state: StateType) => {
    return {
        data: dialogsSelectors.selectDialogsPage(state),
        isAuth: authSelectors.selectIsAuth(state),
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