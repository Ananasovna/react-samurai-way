import {Component, ComponentType, ElementType} from 'react';
import styles from './App.module.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {NavbarContainer} from "./components/navbar/NavbarContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {StateType} from "./redux/store";
import {compose} from "redux";
import {withRouter} from "./hoc/withRouter";
import {connect} from "react-redux";
import {appThunkCreators} from "./redux/ducks/app";
import {Preloader} from "./components/common/Preloader";
import {withAuthRedirect} from "./hoc/withAuthRedirect";

type AppPropsType = {
    initializeApp: () => void
    isInitialized: boolean
}

class App extends Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }


    render() {
        if (!this.props.isInitialized) return <Preloader />;

        return (
            <div className={styles.app}>
                <HeaderContainer/>
                <div className={styles.mainWrapper}>
                    <NavbarContainer/>
                    <main className={styles.main}>
                        <Routes>
                            <Route path='/' element={<Navigate to='/profile'/>}/>
                            <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                            <Route path='/dialogs/' element={<DialogsContainer/>}>
                                <Route path='/dialogs/:id'
                                       element={<DialogsContainer/>}/>
                            </Route>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </main>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        isInitialized: state.app.isInitialized
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {...appThunkCreators}),
    withRouter,
    // withAuthRedirect
)(App);
