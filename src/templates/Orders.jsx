import React from 'react';
import Order from '@components/Order';
import styles from '@styles/Orders.module.scss';

const Orders = () => {
  return (
    <div className ={styles.Orders}>
        <div className ="Orders-container">
            <h1 className ="title">My orders</h1>
            <div className ="Orders-content">
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
            </div>
        </div>
    </div>
  );
}

export default Orders;