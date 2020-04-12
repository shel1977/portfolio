import React from 'react';
import styles from './NavMenu.module.css';
import burger from './../../assets/img/menuBurger.svg';
import burgerCross from './../../assets/img/menuBurgerCross.svg';

import * as Scroll from 'react-scroll';


let Link = Scroll.Link;

function NavMenu(props) {
    let menuItems = props.navMenu.map(i => <div><Link to={i.link}
                                                      activeClass={styles.navMenuSelected}
                                                      spy={true} smooth={true}
                                                      duration={500}>{i.name}</Link></div>);
    let showMenu = () => {
       return props.isShowMenu ? styles.navMenuPop : styles.navMenuHidden;
    };
    let burgerChange = () => {
       return props.isShowMenu ? burgerCross : burger;
    };

    //onPointerLeave={props.offMenu}
    return (
        <>
            <div className={styles.navMenu} onMouseLeave={props.offMenu} >
                <div className={showMenu()}>
                    {menuItems}
                </div>
            </div>
            <div className={styles.burgerMenu}>
                <a onClick={props.switchMenu}>
                    <img src={burgerChange()}/>
                </a>
            </div>
        </>
    );
}

export default NavMenu;
