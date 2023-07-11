import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {StateType} from "./redux/types";


export const rerenderApp = (state: StateType,  addMessage: (text: string, dialogId: string) => void, addPost: (text: string) => void) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );

    root.render(
        <React.StrictMode>
            <HashRouter>
                <App state={state} addMessage={addMessage} addPost={addPost}/>
            </HashRouter>
        </React.StrictMode>
    );
}