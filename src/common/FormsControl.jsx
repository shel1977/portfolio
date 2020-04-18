import React from 'react';
import styles from './FormsControl.module.css';


export const Input = ({input, meta, ...props}) => {
    const isError = meta.error && meta.touched;
    const showError = () => {
        if (meta.error === 'Invalid email address' && meta.touched) {
            return props.validateMail
        } else {
            return props.validateRequired
        }
    };

    return (
        <div className={isError && styles.error}>
            <input {...input} {...props}/>
            {isError && <div><span>{showError()}</span></div>}
        </div>
    )
}

export const Textarea = ({input, meta, ...props}) => {
    const isError = meta.error && meta.touched;
    return (
        <div className={isError && styles.error}>
            <textarea {...input} {...props}/>
            {isError && <div><span>{props.validateRequired}</span></div>}
        </div>
    )
}