import './index.css';
import {storeManual} from "./redux/storeManual";
import ReactDOM from "react-dom/client";
import {StateType} from "./redux/types";
import React from "react";
import {HashRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/store";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const rerenderApp = (state: StateType) => {
    root.render(
        <React.StrictMode>
            <HashRouter>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                />
            </HashRouter>
        </React.StrictMode>
    );
}

rerenderApp(store.getState());

store.subscribe(() => rerenderApp(store.getState()))