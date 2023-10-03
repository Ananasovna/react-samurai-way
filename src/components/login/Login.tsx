
import {connect} from "react-redux";
import {authThunkCreators} from "../../redux/ducks/auth";
import {Navigate} from "react-router-dom";
import {StateType} from "../../redux/store";
import {LoginForm, LoginFormDataType} from "./LoginForm";
import {appActionCreators} from "../../redux/ducks/app";

type LoginPropsType = {
    loginUser: (email: string, password: string, rememberMe?: boolean | undefined) => void
    isAuth: boolean | null
    appError: string | null
    setError: (error: string | null) => void
}

const Login = ({loginUser, isAuth, appError, setError}: LoginPropsType) => {
    const onSubmit = ({email, password, rememberMe}: LoginFormDataType) => {
        loginUser(email, password, rememberMe);
    }

    if (isAuth) return <Navigate to={'/profile'} />

    return (
        <>
            <LoginForm onSubmit={onSubmit} appError={appError} setError={setError}/>
        </>
    )
}

const mapStateToProps = (state:StateType) => {
   return {
       isAuth: state.auth.isAuth,
       appError: state.app.error,
   }
}

export default connect(mapStateToProps, {...authThunkCreators, ...appActionCreators})(Login)