import React from 'react';
import styles from './Hunting.module.css';
import * as Scroll from 'react-scroll';
let Link = Scroll.Link;

function Hunting(props) {
    return (
        <div className={styles.hunting}>
            <div className={styles.container}>
                <h2>{props.hunting.title}</h2>
                <div className={styles.BodyTextHunting}>{props.hunting.description}
            </div>
            <div>
                <Link to='contact'
                      className={styles.buttonHunting}
                      spy={true} smooth={true}
                      duration={500}>
                    {props.hunting.button}
                </Link>
{/*                <button className={styles.buttonHunting}>
                    {props.hunting.button}
                </button>*/}
            </div>

        </div>

</div>
)
    ;
}

export default Hunting;
