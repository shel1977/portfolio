import {connect} from "react-redux";
import {closeWindow, sendFormAC} from "../../../../contact-reducer";
import Contacts from "./Contacts";

let mapDispatchToProps = (dispatch) => {
    return {
        sendForm: (sendOutForm) => {
            dispatch(sendFormAC(sendOutForm))
        },
        closeWindow: (closeWindowSend) => {
            dispatch(closeWindow(closeWindowSend))
        }
    }
};

let mapStateToProps = (state) => {
    return {
        isSendingSwitch: state.contactReducer.isSendingSwitch,
        isSendWindowSwitch: state.contactReducer.isSendWindowSwitch,
        isSendError: state.contactReducer.isSendError,
        isSendOk: state.contactReducer.isSendOk,
        contactMe: state.menuReducer.currentLanguage.contactMe,
    }
}

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts);

export default ContactContainer;
