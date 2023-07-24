import React from 'react';
import styles from './App.module.css';
import {Header} from "./components/header/Header";
import {Profile} from './components/profile/Profile';
import {Navbar} from './components/navbar/Navbar';
import {Dialogs} from "./components/dialogs/Dialogs";
import {Navigate, Route, Routes} from "react-router-dom";
import {Users} from "./components/users/Users";
import {DispatchType, StateType} from "./redux/types";

type AppProps = {
    state: StateType
    dispatch: DispatchType
}

const App = ({state,  dispatch}: AppProps) => {
    return (
        <div className={styles.app}>

            <Header/>
            <div className={styles.mainWrapper}>
                <Navbar data={state.sidebar}/>
                <main className={styles.main}>
                    <Routes>
                        <Route path='/' element={<Navigate to='/profile'/>}/>
                        <Route path='/profile' element={<Profile data={state.profilePage} dispatch={dispatch}/>}/>
                        <Route path='/dialogs/' element={<Dialogs data={state.dialogsPage}  dispatch={dispatch}/>}>
                            <Route path='/dialogs/:id'
                                   element={<Dialogs data={state.dialogsPage} dispatch={dispatch}/>}/>
                        </Route>
                        <Route path='/users' element={<Users/>}/>
                    </Routes>
                </main>
        </div>


    </div>
  );
}

export default App;
