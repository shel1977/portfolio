import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import store from "./store";

let rerenderEntireTree = () => {
    ReactDOM.render(<BrowserRouter>
            <App languageStatus = {store.getLanguageStatus()}
                 contentLanguage = {store.languageShow()}
                 isShowMenu = {store.getIsShowMenu()}
                 dispatch={store.dispatch.bind(store)}
                 />
        </BrowserRouter>,
        document.getElementById('root'));
};

rerenderEntireTree(store.getState());
store.subscribe (rerenderEntireTree);

serviceWorker.unregister();
