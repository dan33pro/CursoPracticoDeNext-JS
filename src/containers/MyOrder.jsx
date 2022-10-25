import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import AppContext from '@context/AppContext';
import arrow from '@icons/flechita.svg';
import OrderItem from '@components/OrderItem';

import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    };

    return (
        <aside className={styles.MyOrder}>
            <div className={styles['title-container']}>
                <Image src={arrow} alt="arrow" />
                <p className={styles.title}>
                    My order
                </p>
            </div>
            <div className={styles['MyOrder-content']}>
                {state.cart.map((product, index) => (
                    <OrderItem indexValue={index} product={product} key={`orderItem-${product.id}`} />
                ))}
            </div>
            <div className={styles.order}>
                <p>
                    <span>Total</span>
                </p>
                <p>${sumTotal()}</p>
            </div>
            <div className={styles['primary-button']}>
                <Link href="/checkout">
                    Checkout
                </Link>
            </div>
        </aside>
    );
};

export default MyOrder;