import React, { useState, useContext } from 'react';
import Image from 'next/image';

import MenuDesktop from '@components/MenuDesktop';
import MenuMobilie from '@components/MenuMobile';
import MyOrder from '@containers/MyOrder';
import AppContext from '@context/AppContext';

import logoYS from '@logos/logo_yard_sale.svg';
import iconMenu from '@icons/icon_menu.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';

import styles from '@styles/Header.module.scss';

const Header = () => {
    const { state } = useContext(AppContext);

    const [toggleD, setToggleD] = useState(false);
    const handleToggleD = () => {
        setToggleD(!toggleD);
        setToggleM(false);
        setToggleO(false);
    };

    const [toggleM, setToggleM] = useState(false);
    const handleToggleM = () => {
        setToggleM(!toggleM);
        setToggleD(false);
        setToggleO(false);
    };

    const [toggleO, setToggleO] = useState(false);
    const handleToggleOrder = () => {
        setToggleO(!toggleO);
        setToggleM(false);
        setToggleD(false);
    };

    return (
        <nav className={styles.Nav}>
            <Image src={iconMenu} alt="menu" className={styles.menu} onClick={handleToggleM} />
            <div className={styles['navbar-left']}>
                <Image src={logoYS} alt="logo" className={styles['nav-logo']} />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className={styles['navbar-right']}>
                <ul>
                    <li className={styles['navbar-email']} onClick={handleToggleD}>name@example.com</li>
                    <li className={styles['navbar-shopping-cart']} onClick={handleToggleOrder}>
                        <Image src={iconShoppingCart} alt="shopping_cart" />
                        { state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
                    </li>
                </ul>
            </div>
            {toggleD && <MenuDesktop />}
            {toggleM && <MenuMobilie />}
            {toggleO && <MyOrder />}
        </nav>
    );
}

export default Header;