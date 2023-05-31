import React from 'react';
import style from './App.module.css';
import {Header} from "./components/header/Header";
import {Profile} from './components/profile/Profile';
import {Navbar} from './components/navbar/Navbar';

const App = () => {
  return (
    <div className={style.app}>
        <Header/>
        <Navbar/>
        <main className={style.main}>
            <Profile/>
        </main>

    </div>
  );
}

export default App;
