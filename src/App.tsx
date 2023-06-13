import React from 'react';
import style from './App.module.css';
import {Header} from "./components/header/Header";
import {Profile} from './components/profile/Profile';
import {Navbar} from './components/navbar/Navbar';
import {Dialogs} from "./components/dialogs/Dialogs";

const App = () => {
  return (
    <div className={style.app}>
        <Header/>
        <div className={style.mainWrapper}>
            <Navbar/>
            <main className={style.main}>
                {/*<Profile/>*/}
                <Dialogs />
            </main>
        </div>


    </div>
  );
}

export default App;
