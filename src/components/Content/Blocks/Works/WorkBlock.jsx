import React from 'react';
import styles from './WorkBlock.module.css';

function WorkBlock(props) {
    return (
        <div className={styles.workBlock}>
            <div className={styles.headWorkBlock}>
                <img src={props.image} className={styles.imgWorkBlock} alt={props.name}/>
                <div className={styles.buttonWorkBlock}>
                    <div>show</div>
                </div>
            </div>
            <div className={styles.footerWorkBlock}>
                <div className={styles.workTitle}>{props.name}</div>
                <div className={styles.description}>{props.descriptor}</div>
            </div>
        </div>
    );
}

export default WorkBlock;
