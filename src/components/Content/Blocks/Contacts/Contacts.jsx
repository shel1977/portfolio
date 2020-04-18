import React from 'react';
import styles from './Contacts.module.css';
import {Field, reduxForm} from "redux-form";
import SendingWindow from "./SendingWindow";

const ContactForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.contactForm}>
            <div>
                <Field component={'input'} name={'name'}
                       className={styles.inputContactForm} placeholder={props.contactMe.placeholderName}/>
            </div>
            <div>
                <Field component={'input'} name={'email'}
                       className={styles.inputContactForm} placeholder={props.contactMe.placeholderMail}/>
            </div>
            <div>
                <Field component={'textarea'} name={'message'}
                       className={styles.textareaContactForm}
                       placeholder={props.contactMe.placeholderMessage}/>
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
