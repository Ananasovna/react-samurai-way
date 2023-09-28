import {LoginForm, LoginFormDataType} from "../common/LoginForm";
import {connect} from "react-redux";
import {authThunkCreators} from "../../redux/ducks/auth";
import {Navigate} from "react-router-dom";
import {StateType} from "../../redux/store";

type LoginPropsType = {
    loginUser: (email: string, password: string, rememberMe?: boolean | undefined) => void
    isAuth: boolean | null
}

const Login = ({loginUser, isAuth}: LoginPropsType) => {
    const onSubmit = ({email, password, rememberMe}: LoginFormDataType) => {
        loginUser(email, password, rememberMe);
    }

    if (isAuth) return <Navigate to={'/profile'} />

    return (
        <>
            <LoginForm onSubmit={onSubmit}/>
        </>
    )
}

const mapStateToProps = (state:StateType) => {
   return {
       isAuth: state.auth.isAuth
   }
}

export default connect(mapStateToProps, {...authThunkCreators})(Login)