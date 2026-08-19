import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <img src="/images/four-seasons-logo.svg" alt="Four Seasons Yachts" />
        <p className={styles.notice}>React 수업을 위한 비상업적 클론 프로젝트입니다.</p>
      </div>

      <div className={styles.links}>
        <div>
          <p>Explore</p>
          <Link to="/yacht">OUR YACHTS</Link>
          <Link to="/suites">OUR SUITES</Link>
        </div>
        <div>
          <p>Travel</p>
          <Link to="/voyages">VOYAGES</Link>
          <Link to="/inquire">CONTACT US</Link>
        </div>
        <div>
          <p>Legal</p>
          <span>PRIVACY NOTICE</span>
          <span>COOKIE POLICY</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
