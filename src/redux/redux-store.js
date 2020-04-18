import {applyMiddleware, combineReducers, createStore} from "redux";
import menuReducer from "../menu-reducer";
import { reducer as formReducer } from 'redux-form'
import contactReducer from "../contact-reducer";
import thunkMiddleware from "redux-thunk";



const reducers = combineReducers({
    menuReducer: menuReducer,
    form: formReducer,
    contactReducer: contactReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;