import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

// 외부 영상 주소를 사용하면 큰 동영상 파일을 프로젝트에 넣지 않아도 됩니다.
// 영상이 열리지 않을 때는 poster에 적은 이미지가 대신 보입니다.
const HERO_VIDEO_URL =
  "https://player.vimeo.com/progressive_redirect/playback/1189901317/rendition/540p/file.mp4%20%28540p%29.mp4?loc=external&signature=eeaa06055b256c0c66701b1fcc1cb02ff4a8c3142e03d36700a5dea7afa70353";

function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        poster="/images/positano-sunset.webp"
        aria-hidden="true"
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>FOUR SEASONS II</h1>
        <p className={styles.revealed}>REVEALED</p>
        <p className={styles.description}>
          Introducing the newest yacht in our growing portfolio,
          <br />debuting a new category of Yacht Residential Suites.
        </p>

        <Link className={styles.discoverLink} to="/yacht">
          DISCOVER MORE
        </Link>
      </div>

      <span className={styles.scrollMark}>⌄</span>
    </section>
  );
}

export default Hero;
