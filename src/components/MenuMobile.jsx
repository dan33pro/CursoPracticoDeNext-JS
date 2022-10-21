import React from 'react';
import styles from '@styles/MenuMobile.module.scss';

const MenuMobile = () => {
  return (
    <div className={styles.MenuMobile}>
        <ul>
            <li>
                <a href="/">CATEGORIES</a>
            </li>
            <li>
                <a href="/">All</a>
            </li>
            <li>
                <a href="/">Clothes</a>
            </li>
            <li>
                <a href="/">Eloctronics</a>
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
        <div>
            <ul>
                <li>
                    <a href="/">My orders</a>
                </li>
                <li>
                    <a href="/">My account</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/" className={styles.email}>name@example.com</a>
                </li>
                <li>
                    <a href="/" className={styles['sign-out']}>Sign out</a>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default MenuMobile;