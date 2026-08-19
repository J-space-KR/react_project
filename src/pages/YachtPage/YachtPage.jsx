import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero/PageHero";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { experiences } from "../../data/siteData";
import styles from "./YachtPage.module.css";

function YachtPage() {
  return (
    <div>
      <PageHero
        eyebrow="OUR YACHT"
        title="A yacht like no other"
        description="작은 배의 자유로움과 Four Seasons의 서비스를 함께 담은 공간입니다."
        image="/images/yacht-hero.webp"
      />

      <section className={styles.intro}>
        <SectionTitle
          eyebrow="FOUR SEASONS I"
          title="Designed for discovery"
          description="객실, 레스토랑, 수영장과 마리나가 하나의 편안한 여행 공간으로 이어집니다."
        />

        <div className={styles.stats}>
          <div><strong>95</strong><span>SUITES</span></div>
          <div><strong>1:1</strong><span>STAFF TO GUEST</span></div>
          <div><strong>20m</strong><span>POOL</span></div>
        </div>
      </section>

      <section className={styles.splitSection}>
        <img src="/images/dining.png" alt="요트 내부 다이닝 공간" />
        <div>
          <p>SPACE TO CONNECT</p>
          <h2>Made for life at sea</h2>
          <span>
            아침 식사, 오후의 수영, 저녁의 대화까지 하루의 장면들이 자연스럽게
            이어지도록 설계했습니다.
          </span>
        </div>
      </section>

      <section className={styles.experienceSection}>
        <SectionTitle eyebrow="ONBOARD" title="Choose your own pace" />

        <div className={styles.cards}>
          {experiences.map((experience) => (
            <article key={experience.id}>
              <img src={experience.image} alt={experience.title} />
              <div>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.linkSection}>
        <h2>Find your room at sea</h2>
        <Link to="/suites">EXPLORE OUR SUITES →</Link>
      </section>
    </div>
  );
}

export default YachtPage;
