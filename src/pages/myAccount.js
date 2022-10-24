import React from 'react';
import styles from '@styles/MyAccount.module.scss';

const MyAccount = () => {
  return (
    <div className={styles.MyAccount}>
      <div className={styles['MyAccount-container']}>
        <h1 className={styles.title}>My account</h1>
        <form action="/" className={styles.form}>
          <div>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <p id="name" className={styles.value}>
              Nombre Apellido
            </p>
            <label htmlFor="email" className={styles.label}>
              Email address
            </label>
            <p id="email" className={styles.value}>
              name@example.com
            </p>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <p id="password" className={styles.value}>
              *********
            </p>
          </div>
          <input type="submit" value="Edit" className={`${styles['secondary-button']} ${styles['account-button']}`} />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
