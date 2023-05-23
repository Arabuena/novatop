import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import styles from './footer.module.css';
import logo from '../assets/navicons/logo.png';

const Footer = () => {
  return (
    
    <footer className={styles.footer}>
      <div className={styles.column}>
      <img src={logo} alt="Logo" className={styles.logo} />
       <h5> Aqui tem tudo! </h5>
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.icon} />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className={styles.icon} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles.column}>
        <p>Coluna 2</p>
      </div>
      <div className={styles.column}>
        <p>Coluna 3</p>
      </div>
      <div className={styles.column}>
        <p>Coluna 4</p>
      </div>
      <div className={styles.column}>
        <p>Coluna 5</p>
      </div>
    </footer>
  );
};

export default Footer;
