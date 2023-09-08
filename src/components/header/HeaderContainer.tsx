import {Component} from "react";
import {Header} from "./Header";
import axios from "axios";
import {StateType} from "../../redux/store";
import {connect} from "react-redux";
import {authActionCreators} from "../../redux/ducks/app";
import {UserDataType} from "../../redux/ducks/app/actionCreators";
import {AuthType} from "../../redux/ducks/app/reducers";
import {authAPI} from "../../api/socilaMediaApi";

type HeaderContainerPropsType = AuthType & {
    setIsAuth: (isAuth: boolean) => void
    setUserData: (data: UserDataType) => void
}

class HeaderContainer extends Component<HeaderContainerPropsType> {

    componentDidMount() {
        authAPI.me()
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.setUserData(res.data.data);
                    this.props.setIsAuth(true);

                }
            })
    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            id={this.props.id}
            email={this.props.email}
            login={this.props.login}
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

export default connect(mapStateToProps, {...authActionCreators})(HeaderContainer);