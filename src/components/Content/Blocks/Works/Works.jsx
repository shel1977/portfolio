import React from 'react';
import styles from './Works.module.css';
import WorkBlock from "./WorkBlock";

function Works(props) {
    let workBlocks =  props.works.worksBlocks.map(w => <WorkBlock
    name = {w.name} descriptor = {w.description} image={w.image}/>)
    return (
        <div className={styles.works}>
            <div className={styles.container}>
                <h2>{props.works.title}</h2>
                <div className={styles.worksBlock}>
                    {workBlocks}
                </div>
            </div>
        </div>
    );
}

export default Works;
