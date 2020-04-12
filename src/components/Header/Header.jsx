import React from 'react';
import styles from './Header.module.css';
import NavMenu from "../NavMenu/NavMenu";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

function Header(props) {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <HeaderMenu language={props.language}
                            changeLanguage={props.changeLanguage}/>
                <NavMenu navMenu={props.state.navMenu}
                         isShowMenu={props.isShowMenu}
                         switchMenu={props.switchMenu}
                         offMenu={props.offMenu}
                />
            </div>
        </div>
    );
}

export default Header;
