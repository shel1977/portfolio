import React from 'react';
import styles from './Header.module.css';
import HeaderMenuContainer from "../HeaderMenu/HeaderMenuContainer";
import NavMenuContainer from "../NavMenu/NavMenuContainer";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <HeaderMenuContainer />
                <NavMenuContainer/>
            </div>
        </div>
    );
}

export default Header;
