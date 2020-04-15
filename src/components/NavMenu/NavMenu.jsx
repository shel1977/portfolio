import React from 'react';
import styles from './NavMenu.module.css';
import burger from './../../assets/img/menuBurger.svg';
import burgerCross from './../../assets/img/menuBurgerCross.svg';
import * as Scroll from 'react-scroll';
import {offMenuAC, switchMenuAC} from "../../menu-reducer";

let Link = Scroll.Link;

function NavMenu(props) {

    let switchMenu = () => {
        props.dispatch(switchMenuAC())
    };
    let offMenu = () => {
        props.dispatch(offMenuAC())
    }

    let menuItems = props.navMenu.map(i => <div key={i.id}><Link to={i.link}
                                                      activeClass={styles.navMenuSelected}
                                                      spy={true}
                                                      smooth={true}
                                                      onClick={offMenu}
                                                      duration={500}>{i.name}</Link></div>);
    let showMenu = () => {
       return props.isShowMenu ? styles.navMenuPop : styles.navMenuHidden;
    };
    let burgerChange = () => {
       return props.isShowMenu ? burgerCross : burger;
    };

    return (
        <>
            <div className={styles.navMenu} /*onMouseLeave={props.offMenu}*/ >
                <div className={showMenu()}>
                    {menuItems}
                </div>
            </div>
            <div className={styles.burgerMenu}>
                <a onClick={switchMenu}>
                    <img src={burgerChange()}/>
                </a>
            </div>
        </>
    );
}

export default NavMenu;
