import './index.css';
import {addMessage, addPost, state, updateNewMessageText, updateNewPostText} from "./redux/state";
import {rerenderApp} from "./render";


rerenderApp(state, addMessage, updateNewMessageText, addPost, updateNewPostText);

