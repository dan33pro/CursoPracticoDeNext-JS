import React from 'react';
import logoYS from '@logos/logo_yard_sale.svg';
import styles from '@styles/NewPassword.module.scss';

const NewPassword = () => {
  return (
    <div className ={styles.NewPassword}>
        <div className ="NewPassword-container">
            <img src={logoYS} alt="logo" className ="logo" />
            <h1 className ="title">Create a new password</h1>
            <p className ="subtitle">Enter a new password for your account</p>
            <form action="/" className ="form">
                <label for="password" className ="label">Password</label>
                <input type="password" id="password" placeholder="*********" className ="input input-password" />
                <label for="new-password" className ="label">Re-eneter password</label>
                <input type="password" id="new-password" placeholder="*********" className ="input input-password" />
                <input type="submit" value="Confirm" className ="primary-button NewPassword-button" />
            </form>
        </div>
    </div>
  );
}

export default NewPassword;