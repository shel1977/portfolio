import React from 'react';
import styles from './HeaderMenu.module.css';
import mailTop from './../../assets/img/mailTop.svg';
import skypeTop from './../../assets/img/skypeTop.svg';

function HeaderMenu(props) {

    let styleLanguage = () => {
        return props.language ? styles.activeRus : styles.activeEng;
    }
    return (
        <div className={styles.HeadMenu}>
            <div className={styles.languageChoise}>
                <a onClick={props.changeLanguage} className={styleLanguage()}><span>RUS</span><span> | </span><span>ENG</span></a>
            </div>
            <div className={styles.contactHeader}>
                <a href="mailto:vsheludkov@gmail.com.ru">
                    <img src={mailTop}/>
                </a>
                <a href="skype:st_shel?chat">
                    <img src={skypeTop}/>
                </a>
            </div>
        </div>
    );
}

export default HeaderMenu;
