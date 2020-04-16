import React from 'react';
import styles from './Contacts.module.css';
import {Field, reduxForm} from "redux-form";

const ContactForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={styles.contactForm}>
            <div>
                <Field component={'input'} name={'name'} className={styles.inputContactForm} placeholder={'name'}/>
            </div>
            <div>
                <Field component={'input'} name={'mail'} className={styles.inputContactForm} placeholder={'e-mail'}/>
            </div>
            <div>
                <Field component={'textarea'} name={'text'} className={styles.textareaContactForm} placeholder={'you message'}/>
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
            </div>
        </div>
    );
}

export default Contacts;
