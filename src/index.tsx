import './index.css';
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter, HashRouter} from "react-router-dom";
import App from "./App";
import store, {StateType} from "./redux/store";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const rerenderApp = (state: StateType) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderApp(store.getState());

store.subscribe(() => rerenderApp(store.getState()))