import './index.css';
import {store} from "./redux/store";
import ReactDOM from "react-dom/client";
import {StateType} from "./redux/types";
import React from "react";
import {HashRouter} from "react-router-dom";
import App from "./App";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const rerenderApp = (state: StateType) => {
    root.render(
        <React.StrictMode>
            <HashRouter>
                <App
                    state={state}
                    addMessage={store.addMessage.bind(store)}
                    updateNewMessageText={store.updateNewMessageText.bind(store)}
                    addPost={store.addPost.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}
                />
            </HashRouter>
        </React.StrictMode>
    );
}

rerenderApp(store.getState());

store.subscribe(rerenderApp);