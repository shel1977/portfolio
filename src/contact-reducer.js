import axios from "axios";
import {reset} from 'redux-form';


const SENDING_SWITCH = 'SENDING-SWITCH';
const SEND_WINDOW_SWITCH = 'SEND-WINDOW-SWITCH';
const SEND_ERROR = 'SEND-ERROR';
const SEND_OK = 'SEND-OK';

let initialState = {
    isSendingSwitch: false,
    isSendWindowSwitch: false,
    isSendError: false,
    isSendOk: false
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SENDING_SWITCH:
            return {...state, isSendingSwitch: action.isSending};
        case SEND_WINDOW_SWITCH:
            return {...state, isSendWindowSwitch: action.isShowWindow};
        case SEND_ERROR:
            return {...state, isSendError: action.isSendError};
        case SEND_OK:
            return {...state, isSendOk: action.isSendOk};
        default:
            return state;
    };

};

// Action creator
const switchSendingAC = (isSending) => ({type: SENDING_SWITCH, isSending});
const switchSendWindowAC = (isShowWindow) => ({type: SEND_WINDOW_SWITCH, isShowWindow});
const sendErrorAC = (isSendError) => ({type: SEND_ERROR, isSendError});
const sendOkAC = (isSendOk) => ({type: SEND_OK, isSendOk});


// Thunk creator

export const closeWindow = () => (dispatch) => {
    dispatch(switchSendWindowAC(false));
    dispatch(sendOkAC(false));
    dispatch(sendErrorAC(false));
};

export const sendFormAC = (sendOutForm) => (dispatch) => {
    dispatch(switchSendWindowAC(true))
    dispatch(switchSendingAC(true))
    axios.post('https://smtp-server-for-portfolio.herokuapp.com/sendMessage',
        sendOutForm).then(res => {
        dispatch(switchSendingAC(false));
        dispatch(reset('contact'));
        if (res.data === 'ok') {
            dispatch(sendOkAC(true))
        } else {
            dispatch(sendErrorAC(true))
        }
    });

};

export default contactReducer;