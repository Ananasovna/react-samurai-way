import {Component, ComponentType} from "react";
import {Header} from "./Header";
import axios from "axios";
import {StateType} from "../../redux/store";
import {connect} from "react-redux";
import {authActionCreators, authThunkCreators} from "../../redux/ducks/auth";
import {UserDataType} from "../../redux/ducks/auth/actionCreators";
import {AuthType} from "../../redux/ducks/auth/reducers";
import {authAPI} from "../../api/socilaMediaApi";
import {compose} from "redux";

type HeaderContainerPropsType = AuthType & {
    setIsAuth: (isAuth: boolean) => void
    authMe: () => void
    logoutUser: () => void
}

class HeaderContainer extends Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.authMe()
    }

    componentDidUpdate() {
        this.props.authMe()
    }

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
        isAuth: state.auth.isAuth,
        email: state.auth.email,
        id: state.auth.id,
        login: state.auth.login,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {...authActionCreators, ...authThunkCreators})
)(HeaderContainer);