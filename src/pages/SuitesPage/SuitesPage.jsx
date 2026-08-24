import PageHero from "../../components/PageHero/PageHero";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { suites } from "../../data/siteData";
import styles from "./SuitesPage.module.css";

function SuitesPage() {
  return (
    <div>
      <PageHero
        eyebrow="COLLECTION"
        title="컬렉션으로 만나는 KKOT"
        description="피부 고민과 취향에 맞춰 고른 세 가지 컬렉션을 만나보세요."
        image="/images/꽃_전체 라인.jpeg"
      />

      <section className={styles.section}>
        <SectionTitle
          eyebrow="OUR COLLECTIONS"
          title="나에게 맞는 컬렉션"
          description="서로 다른 피부 고민에 맞춘 세 가지 컬렉션입니다."
        />

        <div className={styles.list}>
          {suites.map((suite, index) => (
            <article key={suite.id} className={styles.suite}>
              <img src={suite.image} alt={suite.name} />

              <div>
                <p>COLLECTION 0{index + 1}</p>
                <h2>{suite.name}</h2>
                <span>{suite.description}</span>
                <button type="button">자세히 보기</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SuitesPage;
