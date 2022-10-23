import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logoYS from '@logos/logo_yard_sale.svg';
import styles from '@styles/login.module.scss';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  };

  return (
    <div className={styles.login}>
      <div className={styles['login-container']}>
        <div>
          <Image src={logoYS} alt="logo" className={styles.logo} />
          <form action="/" className={styles.form} ref={form}>
            <label htmlFor="email" className={styles.label}>Email address</label>
            <input type="text" name="email" placeholder="name@example.com" className={`${styles.input} ${styles['input-email']}`} />
            <label htmlFor="plassword" className={styles.label}>Password</label>
            <input type="password" name="password" placeholder="*********" className={`${styles.input} ${styles['input-password']}`} />
            <button onClick={handleSubmit} className={`${styles['primary-button']} ${styles['login-button']}`}>
              Log in
            </ button>
            <Link href="#">Forgot my password</Link>
          </form>
        </div>
        <button className={`${styles['secondary-button']} ${styles['signup-button']}`}>Sign up</button>
      </div>
    </div>
  );
};

export default Login;