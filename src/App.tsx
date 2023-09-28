import React from 'react';
import styles from './App.module.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {NavbarContainer} from "./components/navbar/NavbarContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";

const App = () => {
    return (
        <div className={styles.app}>
            <HeaderContainer />
            <div className={styles.mainWrapper}>
                <NavbarContainer />
                <main className={styles.main}>
                    <Routes>
                        <Route path='/' element={<Navigate to='/profile'/>}/>
                        <Route path='/profile/:userId?' element={<ProfileContainer />}/>
                        <Route path='/dialogs/' element={<DialogsContainer />}>
                            <Route path='/dialogs/:id'
                                   element={<DialogsContainer />}/>
                        </Route>
                        <Route path='/users' element={<UsersContainer />}/>
                        <Route path='/login' element={<Login />}/>
                    </Routes>
                </main>
        </div>


    </div>
  );
}

export default App;
