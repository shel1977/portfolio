import React from 'react';
import styles from './Skills.module.css';
import SkillBlock from "./SkillBlock";


function Skills(props) {
    let skillBlock = props.skills.skillsBlocks.map(s => <SkillBlock
    name={s.name} icon={s.icon} descriptor={s.description} key={s.id}/>)
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <h2>{props.skills.title}</h2>
                <div className={styles.skillsBlock}>
                    {skillBlock}
                </div>
            </div>

        </div>
    );
}

export default Skills;
