import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp, FaPhoneAlt, FaRegEnvelope  } from 'react-icons/fa';
import styles from './footer.module.css';
import logo from '../assets/navicons/logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h5>Aqui tem tudo!</h5>
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
          <a href="https://wa.me/5562994500281" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles.column}>
        <p className={styles.supportHeading}><h2>Suporte</h2></p>
        <p><a href=''>Sobre</a></p>
        <p><a href=''>Termos de serviço</a></p>
        <p><a href=''>Políticas de privacidade</a></p>
        <p><a href=''>Promoção</a></p>
      </div>
      <div className={styles.column}>
        <p className={styles.lojaHeading}><h2>Loja</h2></p>
        <p><a href=''></a>Produtos Masculino</p>
        <p><a href=''></a>Produtos Feminino</p>
        <p><a href=''></a>Produtos Infantil</p>
        <p><a href=''></a>Descontos</p>
      </div>
      <div className={styles.column}>
        <p className={styles.empresaHeading}><h2>Empresa</h2></p>
        <p>História</p>
        <p>Termos e condições</p>
        <p>Outros</p>
      </div>
      <div className={styles.column}>
        <div className={styles.socialIcons}><h2>Contate-nos:</h2></div>
      
        <a href="https://wa.me/5562994500281" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className={styles.icon} />(62)9235223-1753
        </a>
     
        <p><a href="tel.5562994500281" target="_blank" rel="noopener noreferrer">
          <FaPhoneAlt className={styles.icon} />(62)024521-1753
        </a></p>

        <p><a href="mailto.contato@eletrocenter.com" target="_blank" rel="noopener noreferrer">
          <FaRegEnvelope className={styles.icon} />contato@eletrocenter.com
        </a></p>
       

      </div>
    </footer>
  );
};

export default Footer;
