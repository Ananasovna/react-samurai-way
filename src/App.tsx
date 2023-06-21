import React from 'react';
import style from './App.module.css';
import {Header} from "./components/header/Header";
import {Profile} from './components/profile/Profile';
import {Navbar} from './components/navbar/Navbar';
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route, Routes, Navigate} from "react-router-dom";
import {Users} from "./components/users/Users";

const App = () => {
    return (
        <div className={style.app}>

            <Header/>
            <div className={style.mainWrapper}>
                <Navbar/>
                <main className={style.main}>
                    <Routes>
                        <Route path='/' element={<Navigate to='/profile'/>} />
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/dialogs' element={<Dialogs/>}/>
                        <Route path='/users' element={<Users />}/>
                    </Routes>
                </main>
        </div>


    </div>
  );
}

export default App;
