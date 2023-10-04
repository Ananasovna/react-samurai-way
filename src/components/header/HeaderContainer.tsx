import {Component, ComponentType} from "react";
import {Header} from "./Header";
import {StateType} from "../../redux/store";
import {connect} from "react-redux";
import {authActionCreators, authSelectors, authThunkCreators} from "../../redux/ducks/auth";
import {AuthType} from "../../redux/ducks/auth/reducers";
import {compose} from "redux";

type HeaderContainerPropsType = AuthType & {
    setIsAuth: (isAuth: boolean) => void
    authMe: () => void
    logoutUser: () => void
}

class HeaderContainer extends Component<HeaderContainerPropsType> {

    render() {
        return <Header
            isAuth={this.props.isAuth}
            id={this.props.id}
            email={this.props.email}
            login={this.props.login}
            logoutUser={this.props.logoutUser}
        />
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        isAuth: authSelectors.selectIsAuth(state),
        email: authSelectors.selectEmail(state),
        id: authSelectors.selectAuthId(state),
        login: authSelectors.selectLogin(state),
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {...authActionCreators, ...authThunkCreators})
)(HeaderContainer);