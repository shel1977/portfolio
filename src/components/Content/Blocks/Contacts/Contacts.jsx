import React from 'react';
import styles from './Contacts.module.css';
import axios from "axios";


const ContactForm = (props) => {
    let nameFormElement = React.createRef();
    let mailFormElement = React.createRef();
    let textFormElement = React.createRef();

    let sending = () => {
        axios.post('https://smtp-server-for-portfolio.herokuapp.com/sendMessage', {
            name: nameFormElement.current.value,
            email: mailFormElement.current.value,
            message: textFormElement.current.value
        })
            .then(() => {
                alert('message sends')
            })
    };

    return (
        <form className={styles.contactForm}>
            <input ref={nameFormElement} className={styles.inputContactForm} placeholder={'name'}/>
            <input ref={mailFormElement} className={styles.inputContactForm} placeholder={'e-mail'}/>
            <textarea ref={textFormElement} className={styles.textareaContactForm} placeholder={'you message'}/>
            <button onClick={sending} className={styles.buttonContactForm}>{props.contactMe.button}</button>
        </form>
    )
}

function Contacts(props) {
    return (

        <div className={styles.contacts}>
            <div className={styles.container}>
                <h2>{props.contactMe.title}</h2>
                <ContactForm contactMe={props.contactMe}/>
            </div>
        </div>

    );
}

export default Contacts;
