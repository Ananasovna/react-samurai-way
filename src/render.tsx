import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {AddMessageType, AddPostType, StateType, UpdateTextType} from "./redux/types";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const rerenderApp = (state: StateType, addMessage: AddMessageType, updateNewMessageText: UpdateTextType, addPost: AddPostType, updateNewPostText: UpdateTextType) => {


    root.render(
        <React.StrictMode>
            <HashRouter>
                <App
                    state={state}
                    addMessage={addMessage}
                    updateNewMessageText={updateNewMessageText}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                />
            </HashRouter>
        </React.StrictMode>
    );
}