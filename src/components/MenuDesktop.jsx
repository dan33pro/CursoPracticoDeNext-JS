import React from 'react';
import styles from '@styles/MenuDesktop.module.scss';

const MenuDesktop = () => {
  return (
    <div className ={styles.MenuDesktop}>
        <ul>
            <li>
                <a href="/">My orders</a>
            </li>
            <li>
                <a href="/">My account</a>
            </li>
            <li>
                <a href="/">Sign out</a>
            </li>
        </ul>
    </div>
  );
}

export default MenuDesktop;