import React from 'react';
import Link from 'next/link';
import styles from '@styles/MenuDesktop.module.scss';

const MenuDesktop = () => {
  return (
    <div className ={styles.MenuDesktop}>
        <ul>
            <li>
                <Link href="#">My orders</Link>
            </li>
            <li>
                <Link href="#">My account</Link>
            </li>
            <li>
                <Link href="#">Sign out</Link>
            </li>
        </ul>
    </div>
  );
};

export default MenuDesktop;