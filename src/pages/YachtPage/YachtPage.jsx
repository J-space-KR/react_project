import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero/PageHero";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { experiences } from "../../data/siteData";
import styles from "./YachtPage.module.css";

function YachtPage() {
  return (
    <div>
      <PageHero
        eyebrow="BRAND STORY"
        title="꽃, KKOT"
        description="한국에서 시작해 전 세계로 피어나는 글로벌 뷰티 브랜드입니다."
        image="/images/꽃_전체 라인.jpeg"
      />

      <section className={styles.intro}>
        <SectionTitle
          eyebrow="OUR PHILOSOPHY"
          title="피어나는 과정의 아름다움"
          description="꽃은 피어나는 순간만 아름다운 것이 아니라, 피어나는 과정 자체가 아름답습니다."
        />

        <div className={styles.stats}>
          <div><strong>12</strong><span>핵심 성분</span></div>
          <div><strong>0</strong><span>인공 향료</span></div>
          <div><strong>100%</strong><span>비건 포뮬러</span></div>
        </div>
      </section>

      <section className={styles.splitSection}>
        <img src="/images/꽃_전체 라인.jpeg" alt="KKOT 성분 이미지" />
        <div>
          <p>OUR INGREDIENTS</p>
          <h2>자연에서 온 순수한 성분</h2>
          <span>
            아침의 세럼, 낮의 진정, 저녁의 보습까지 하루의 피부 결이 자연스럽게
            이어지도록 만들었습니다.
          </span>
        </div>
      </section>

      <section className={styles.experienceSection}>
        <SectionTitle eyebrow="MORE ABOUT KKOT" title="꽃을 알아가는 시간" />

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
        <h2>나에게 맞는 컬렉션 찾기</h2>
        <Link to="/suites">컬렉션 보기 →</Link>
      </section>
    </div>
  );
}

export default YachtPage;
