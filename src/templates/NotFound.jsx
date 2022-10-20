import React from 'react';
import styles from '@styles/NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.container}>
        <div className ="card">
            <h1 className='titleNotFound'>404</h1>
            <h2 className='titleNotFound'>Not Found</h2>
        </div>
        <a className='primary-button' href = "/">Home</a>
    </div>
  );
}

export default NotFound;