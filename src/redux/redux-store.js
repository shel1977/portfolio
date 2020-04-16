import {combineReducers, createStore} from "redux";
import menuReducer from "../menu-reducer";
import { reducer as formReducer } from 'redux-form'
import contactReducer from "../contact-reducer";


let reducers = combineReducers({
    menuReducer: menuReducer,
    form: formReducer,
    contactReducer: contactReducer
});

let store = createStore(reducers);

window.store = store;

export default store;