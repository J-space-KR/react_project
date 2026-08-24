import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <img
        className={styles.backgroundImage}
        src="/images/꽃_전체 라인.jpeg"
        alt="꽃 KKOT 제품 라인"
      />
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>
          꽃
          <br />
          KKOT
        </h1>
        <p className={styles.revealed}>피부에 피어나는 아름다움</p>
        <p className={styles.description}>Beauty in Bloom</p>

        <Link className={styles.discoverLink} to="/voyages">
          제품 보기
        </Link>
      </div>

      <span className={styles.scrollMark}>⌄</span>
    </section>
  );
}

export default Hero;
