import React from 'react';
import styles from '@styles/NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.container}>
        <div className ={styles.card}>
            <h1 className={styles.titleNotFound}>404</h1>
            <h2 className={styles.titleNotFound}>Not Found</h2>
        </div>
        <a className={styles['primary-button']} href = "/">Home</a>
    </div>
  );
}

export default NotFound;