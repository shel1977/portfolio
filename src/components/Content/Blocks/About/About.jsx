import React from 'react';
import styles from './About.module.css';
import photoShel from './../../../../assets/img/V_Sheludkov.jpg'

function About(props) {

    return (
        <div className={styles.about}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>{props.state.hello}</span>
                    <span>{props.state.name}</span>
                    <h1>{props.state.whoAmI}</h1>
                </div>
                <div className={styles.personPhoto}>
                    <img src={photoShel} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default About;
