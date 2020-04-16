import React from 'react';
import styles from './NavMenu.module.css';
import burger from './../../assets/img/menuBurger.svg';
import burgerCross from './../../assets/img/menuBurgerCross.svg';
import * as Scroll from 'react-scroll';

let Link = Scroll.Link;

function NavMenu(props) {

    let menuItems = props.navMenu.map(i => <div key={i.id}><Link to={i.link}
                                                      activeClass={styles.navMenuSelected}
                                                      spy={true}
                                                      smooth={true}
                                                      onClick={props.offMenu}
                                                      duration={500}>{i.name}</Link></div>);
    let showMenu = () => {
       return props.isShowMenu ? styles.navMenuPop : styles.navMenuHidden;
    };
    let burgerChange = () => {
       return props.isShowMenu ? burgerCross : burger;
    };

    return (
        <>
            <div className={styles.navMenu}>
                <div className={showMenu()}>
                    {menuItems}
                </div>
            </div>
            <div className={styles.burgerMenu}>
                <a onClick={props.switchMenu}>
                    <img src={burgerChange()} alt={'burger menu'}/>
                </a>
            </div>
        </>
    );
}

export default NavMenu;
