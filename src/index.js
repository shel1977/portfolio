import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import state, {offMenu, subscribe, switchMenu} from "./store";
import {changeLanguage} from "./store";

let rerenderEntireTree = () => {
    ReactDOM.render(<BrowserRouter>
            <App state={state}
                 changeLanguage={changeLanguage}
                 switchMenu={switchMenu}
                 offMenu={offMenu}/>
        </BrowserRouter>,
        document.getElementById('root'));
};

rerenderEntireTree(state);
subscribe (rerenderEntireTree)

serviceWorker.unregister();
