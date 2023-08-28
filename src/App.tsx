import React from 'react';
import styles from './App.module.css';
import {Header} from "./components/header/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {NavbarContainer} from "./components/navbar/NavbarContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";

const App = () => {
    return (
        <div className={styles.app}>

            <Header/>
            <div className={styles.mainWrapper}>
                <NavbarContainer />
                <main className={styles.main}>
                    <Routes>
                        <Route path='/' element={<Navigate to='/profile'/>}/>
                        <Route path='/profile' element={<ProfileContainer />}/>
                        <Route path='/dialogs/' element={<DialogsContainer />}>
                            <Route path='/dialogs/:id'
                                   element={<DialogsContainer />}/>
                        </Route>
                        <Route path='/users' element={<UsersContainer />}/>
                    </Routes>
                </main>
        </div>


    </div>
  );
}

export default App;
