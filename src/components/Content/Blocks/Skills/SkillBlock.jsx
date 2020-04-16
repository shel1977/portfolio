import React from 'react';
import styles from './SkillBlock.module.css';




function SkillBlock(props) {
    return (
        <div className={styles.skillBlock}>
            <div className={styles.iconSkillBlock}>
                <img src={props.icon} alt={props.name}/>
            </div>
            <div>
                <div className={styles.skillTitle}>{props.name}</div>
                <div className={styles.description}>{props.descriptor}</div>
            </div>

        </div>
    );
}

export default SkillBlock;
