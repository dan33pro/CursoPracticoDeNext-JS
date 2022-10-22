import React from 'react';
import styles from '@styles/MyAccount.module.scss';

const MyAccount = () => {
  return (
    <div className ={styles.MyAccount}>
        <div className ={styles['MyAccount-container']}>
            <h1 className ={styles.title}>My account</h1>
            <form action="/" className ={styles.form}>
                <div>
                    <label for="name" className ={styles.label}>Name</label>
                    <p className ={styles.value}>Nombre Apellido</p>                    
                    <label for="email" className ={styles.label}>Email address</label>
                    <p className ={styles.value}>name@example.com</p>                    
                    <label for="plassword" className ={styles.label}>Password</label>
                    <p className ={styles.value}>*********</p>                    
                </div>
                <input type="submit" value="Edit" className ={`${styles['secondary-button']} ${styles['account-button']}`} />
            </form>
        </div>
    </div>
  );
}

export default MyAccount;