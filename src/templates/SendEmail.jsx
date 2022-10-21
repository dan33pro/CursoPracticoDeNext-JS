import React from 'react';
import Image from 'next/image';

import logoYS from '@logos/logo_yard_sale.svg';
import iconEmail from '@icons/email.svg';
import styles from '@styles/SendEmail.module.scss';

const SendEmail = () => {
  return (
    <div className ={styles.SendEmail}>
        <div className ={styles['SendEmail-container']}>
            <Image src={logoYS} alt="logo" className ={styles.logo} />
            <h1 className ={styles.title}>Email has been sent!</h1>
            <p className ={styles.subtitle}>Please check your inbox for instructions on 
                how to reset the password</p>
            <div className ={styles['email-image']}>
                <Image src={iconEmail} alt="email" />
            </div>
            <button className ={`${styles['primary-button']} ${styles['SendEmail-button']}`}>Login</button>
            <p className ={styles.resend}>
                <span>Didn't receive the email?</span>
                <a href="/">Resend</a>
            </p>
        </div>
    </div>
  );
}

export default SendEmail;