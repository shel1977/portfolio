import React from 'react';
import styles from './Contacts.module.css';
import {Field, reduxForm} from "redux-form";
import SendingWindow from "./SendingWindow";
import {email, required} from "../../../../utils/validators";
import {Input, Textarea} from "../../../../common/FormsControl";

const ContactForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.contactForm}>
            <div>
                <Field component={Input} name={'name'}
                       className={styles.inputContactForm}
                       validate={[required]}
                       placeholder={props.contactMe.placeholderName}
                       validateRequired={props.contactMe.validateRequired}
                       validateMail={props.contactMe.validateMail}/>
            </div>
            <div>
                <Field component={Input} name={'email'}
                       className={styles.inputContactForm}
                       validate={[required, email]}
                       placeholder={props.contactMe.placeholderMail}
                       validateRequired={props.contactMe.validateRequired}
                       validateMail={props.contactMe.validateMail}/>
            </div>
            <div>
                <Field component={Textarea} name={'message'}
                       className={styles.textareaContactForm}
                       validate={[required]}
                       placeholder={props.contactMe.placeholderMessage}
                       validateRequired={props.contactMe.validateRequired}
                       validateMail={props.contactMe.validateMail}/>
            </div>
            <div>
                <button className={styles.buttonContactForm}>{props.contactMe.button}</button>
            </div>
        </form>
    )
};

const ContactReduxForm = reduxForm({form: 'contact'})(ContactForm);

function Contacts(props) {
    let sendOutForm = (onSubmit) => {
        props.sendForm(onSubmit)
    };
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <h2>{props.contactMe.title}</h2>
                <ContactReduxForm onSubmit={sendOutForm} contactMe={props.contactMe}/>

                {props.isSendWindowSwitch ? <SendingWindow contactMe={props.contactMe}
                                                           sending={props.isSendingSwitch}
                                                           sendOk={props.isSendOk}
                                                           sendErr={props.isSendError}
                                                           closeWindow={props.closeWindow}
                /> : null}
            </div>
        </div>
    );
}

export default Contacts;
