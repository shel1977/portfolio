import React from 'react';
import styles from './Sending.module.css';
import sendAnimation from '../../../../assets/img/Rolling-0.4s-200px.svg'

function SendingWindow(props) {
    return (
            <div className={styles.sendWindowWrapper} onClick={props.closeWindow}>
                <div className={styles.sendingReport}>
                    {props.sending ? <div>
                        <div><img src={sendAnimation} alt={'sending'}/></div>
                        <div><span>{props.contactMe.sending}</span></div>
                    </div> : null}
                    {props.sendOk ? <div>
                        <span>{props.contactMe.sendOk}</span>
                    </div>: null}
                    {props.sendErr ? <div>
                        <span>{props.contactMe.sendErr}</span>
                    </div>: null}
                </div>
        </div>
    )
}

export default SendingWindow