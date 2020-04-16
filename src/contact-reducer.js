import axios from "axios";

const SENDING_FORM = 'SENDING-FORM';

let initialState = {};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SENDING_FORM:
            axios.post('https://smtp-server-for-portfolio.herokuapp.com/sendMessage', {
                name: action.sendOutForm.name,
                email: action.sendOutForm.mail,
                message: action.sendOutForm.text
            })
                .then(() => {
                    alert('message sends')
                });
            return state;
        default:
            return state;
    };
};

export const sendFormAC = (sendOutForm) => ({type: SENDING_FORM, sendOutForm});

export default contactReducer;