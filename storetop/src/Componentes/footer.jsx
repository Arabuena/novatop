import logo from '../assets/navicons/logo.png';
import bgImage from '../assets/footerGallery/Bg.png';
import bandeirasImage from '../assets/footerGallery/bandeiras.png';
import styles from './footer.module.css'; // Importe o arquivo CSS

const Footer = () => {
  return (
    <div className={styles.footer} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={`${styles.row} row`}>
        <div className={`${styles.column} column-logo`}>
          <img className={styles.logo} src={logo} alt="Logo" />
          <p>Sua melhor opção!</p>
          <div className={styles['social-icons']}>
            <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div className="column-1">
          <h1>Suporte</h1>
          <h2>Sobre</h2>
          <h2>Termos de Serviço</h2>
          <h2>Política de Privacidade</h2>
        </div>
        <div className="column-2">
          <h1>Loja</h1>
          <h2>Produtos Masculinos</h2>
          <h2>Produtos Femininos</h2>
          <h2>Produtos Infantis</h2>
        </div>
        <div className="column-3">
          <h1>Empresa</h1>
          <h2>História</h2>
          <h2>Termos e Condições</h2>
          <h2>Outros</h2>
        </div>
        <div className="column-4">
  <h1>Contate-nos</h1>
  <i className="fab fa-whatsapp"></i> <span>55 (62) 945000800</span><br />
  <i className="fas fa-phone"></i> <span>55 (62) 945000800</span><br />
  <i className="far fa-envelope"></i> <span>contato@eletronicoscenter.com.br</span>
  <img className="bandeiras" src={bandeirasImage} alt="Bandeiras de cartões" />
</div>
</div>

    </div>
  );
};

export default Footer;
