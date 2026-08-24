import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import VoyageCard from "../../components/VoyageCard/VoyageCard";
import { suites, voyages } from "../../data/siteData";
import styles from "./HomePage.module.css";

const discoveryItems = [
  {
    id: 1,
    label: "제품",
    title: "피어나는 스킨케어",
    image: "/images/꽃_페이셜세럼.jpeg",
    path: "/voyages",
    size: "tall",
  },
  {
    id: 2,
    label: "컬렉션",
    title: "블루밍 컬렉션",
    image: "/images/꽃_실크페탈 리치크림.jpeg",
    path: "/suites",
    size: "small",
  },
  {
    id: 3,
    label: "브랜드 이야기",
    title: "꽃, KKOT",
    image: "/images/꽃_전체 라인.jpeg",
    path: "/yacht",
    size: "wide",
  },
  {
    id: 4,
    label: "성분",
    title: "자연에서 온 순수한 성분",
    image: "/images/자연에서.png",
    path: "/yacht",
    size: "experience",
  },
  {
    id: 5,
    size: "onboard",
    blank: true,
  },
];

function HomePage() {
  const featuredVoyages = voyages.slice(0, 3);

  return (
    <div>
      <Hero />

      <section className={styles.discoverySection}>
        <h2>꽃 KKOT</h2>

        <div className={styles.discoveryGrid}>
          {discoveryItems.map((item) =>
            item.blank ? (
              <div
                key={item.id}
                className={`${styles.discoveryCard} ${styles[item.size]} ${styles.blankCard}`}
              />
            ) : (
              <Link
                key={item.id}
                className={`${styles.discoveryCard} ${styles[item.size]}`}
                to={item.path}
              >
                <img src={item.image} alt={item.title} />
                <span className={styles.cardShade} />
                <div>
                  <p>{item.label}</p>
                  <h3>{item.title}</h3>
                </div>
              </Link>
            )
          )}
        </div>
      </section>

      <section className={styles.voyageSection}>
        <h2>신제품<br />NEW ARRIVALS</h2>

        <div className={styles.searchBox}>
          <label>
            카테고리
            <select defaultValue="전체">
              <option>전체</option>
              <option>SKINCARE</option>
              <option>CLEANSING</option>
            </select>
          </label>

          <label>
            타입
            <select defaultValue="전체">
              <option>전체</option>
              <option>NEW</option>
              <option>BEST</option>
            </select>
          </label>

          <Link to="/voyages">전체 제품 보기</Link>
        </div>

        <div className={styles.voyageGrid}>
          {featuredVoyages.map((voyage) => (
            <VoyageCard key={voyage.id} voyage={voyage} />
          ))}
        </div>
      </section>

      <section className={styles.designIntro}>
        <h2>피어나는 과정의 아름다움</h2>
        <p>
          꽃은 피어나는 순간만 아름다운 것이 아니라, 피어나는 과정 자체가
          아름답다고 믿습니다. KKOT는 매일의 피부 변화를 함께합니다.
        </p>
        <Link to="/yacht">브랜드 이야기 보기</Link>
      </section>

      <section className={styles.designImage}>
        <img src="/images/꽃_전체 라인.jpeg" alt="꽃 KKOT 브랜드 이미지" />
      </section>

      <section className={styles.suiteSection}>
        <div className={styles.suiteIntro}>
          <p>COLLECTION</p>
          <h2>컬렉션으로<br />만나는<br />KKOT</h2>
          <span>
            피부 고민과 취향에 맞춰 고른 세 가지 컬렉션을 만나보세요.
          </span>
          <Link to="/suites">컬렉션 보기</Link>
        </div>

        <div className={styles.suiteCards}>
          {suites.map((suite) => (
            <Link key={suite.id} to="/suites">
              <img src={suite.image} alt={suite.name} />
              <div>
                <h3>{suite.name}</h3>
                <span>컬렉션 보기</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.onboardSection}>
        <h2>자연에서 온<br />순수한 성분</h2>
        <img src="/images/자연에서.png" alt="KKOT 성분 이미지" />

        <div className={styles.onboardText}>
          <h3>스킨케어 철학</h3>
          <p>
            피어나는 순간이 아니라 피어나는 과정 자체가 아름답다고 믿습니다.
            자연 유래 성분으로 편안한 하루를 만듭니다.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <h2>궁금한 점이<br />있으신가요?</h2>
        <p>EMAIL: hello@kkot-beauty.com</p>
        <Link to="/inquire">문의하기</Link>
      </section>
    </div>
  );
}

export default HomePage;
