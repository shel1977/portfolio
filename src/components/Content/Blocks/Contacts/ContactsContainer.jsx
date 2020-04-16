import {connect} from "react-redux";
import {sendFormAC} from "../../../../contact-reducer";
import Contacts from "./Contacts";

let mapDispatchToProps = (dispatch) => {
    return {
        sendForm: (sendOutForm) => {
            dispatch(sendFormAC(sendOutForm))
        },
    }
};

let mapStateToProps = (state) => {
    return {
        contactMe: state.menuReducer.currentLanguage.contactMe,
    }}

const ContactContainer = connect(mapStateToProps, mapDispatchToProps) (Contacts);

export default ContactContainer;
