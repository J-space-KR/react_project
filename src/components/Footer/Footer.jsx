import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <img src="/images/logo.png" alt="꽃 KKOT" />
        <p className={styles.notice}>Beauty in Bloom</p>
      </div>

      <div className={styles.links}>
        <div>
          <p>Shop</p>
          <Link to="/yacht">브랜드 이야기</Link>
          <Link to="/suites">컬렉션</Link>
        </div>
        <div>
          <p>Support</p>
          <Link to="/voyages">전체 제품</Link>
          <Link to="/inquire">문의하기</Link>
        </div>
        <div>
          <p>Legal</p>
          <span>개인정보처리방침</span>
          <span>이용약관</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
