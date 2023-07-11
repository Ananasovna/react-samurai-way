import './index.css';
import {addMessage, addPost, state} from "./redux/state";
import {rerenderApp} from "./render";


rerenderApp(state, addMessage, addPost);

