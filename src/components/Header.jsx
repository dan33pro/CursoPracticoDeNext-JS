import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import MenuDesktop from '@components/MenuDesktop';
import MenuMobilie from '@components/MenuMobile';
import MyOrder from '@containers/MyOrder';
import AppContext from '@context/AppContext';

import logoYS from '@logos/logo_yard_sale.svg';
import iconMenu from '@icons/icon_menu.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';

import styles from '@styles/Header.module.scss';

const Header = () => {
    const { state, toggleMyOrder } = useContext(AppContext);

    const [toggleD, setToggleD] = useState(false);
    const handleToggleD = () => {
        setToggleD(!toggleD);
        setToggleM(false);
        toggleMyOrder(false);
    };

    const [toggleM, setToggleM] = useState(false);
    const handleToggleM = () => {
        setToggleM(!toggleM);
        setToggleD(false);
        toggleMyOrder(false);
    };

    const handleToggleOrder = () => {
        toggleMyOrder(!state.stateViewMyOrder);
        setToggleM(false);
        setToggleD(false);
    };

    return (
        <nav className={styles.Nav}>
            <div className={styles.menu}>
                <Image src={iconMenu} alt="menu" onClick={handleToggleM} onKeyDown={handleToggleM} />
            </div>
            <div className={styles['navbar-left']}>
                <Link href="/">
                    <div className={styles.containerLogo}>
                        <Image src={logoYS} alt="logo" className={styles['nav-logo']} />
                    </div>
                </Link>
                <ul>
                    <li>
                        <Link href="#">All</Link>
                    </li>
                    <li>
                        <Link href="#">Clothes</Link>
                    </li>
                    <li>
                        <Link href="#">Electronics</Link>
                    </li>
                    <li>
                        <Link href="#">Furnitures</Link>
                    </li>
                    <li>
                        <Link href="#">Toys</Link>
                    </li>
                    <li>
                        <Link href="#">Others</Link>
                    </li>
                </ul>
            </div>
            <div className={styles['navbar-right']}>
                <ul>
                    <li className={styles['navbar-email']} role="menuitem" onClick={handleToggleD} onKeyDown={handleToggleD}>name@example.com</li>
                    <li className={styles['navbar-shopping-cart']} role="menuitem" onClick={handleToggleOrder} onKeyDown={handleToggleOrder}>
                        <Image src={iconShoppingCart} alt="shopping_cart" />
                        { state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
                    </li>
                </ul>
            </div>
            {toggleD && <MenuDesktop />}
            {toggleM && <MenuMobilie />}
            {state.stateViewMyOrder && <MyOrder />}
        </nav>
    );
};

export default Header;