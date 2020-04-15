import React from 'react';
import styles from './Header.module.css';
import NavMenu from "../NavMenu/NavMenu";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

function Header(props) {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <HeaderMenu languageStatus={props.languageStatus}
                            dispatch={props.dispatch}/>
                <NavMenu navMenu={props.contentLanguage.navMenu}
                         dispatch={props.dispatch}
                         contentLanguage={props.contentLanguage}
                         isShowMenu={props.isShowMenu}
                         offMenu={props.offMenu}
                />
            </div>
        </div>
    );
}

export default Header;
