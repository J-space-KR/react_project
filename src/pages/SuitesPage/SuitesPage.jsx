import PageHero from "../../components/PageHero/PageHero";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { suites } from "../../data/siteData";
import styles from "./SuitesPage.module.css";

function SuitesPage() {
  return (
    <div>
      <PageHero
        eyebrow="OUR SUITES"
        title="Wake up to the sea"
        description="모든 객실에서 바다를 바라보고, 나만의 테라스에서 하루를 시작합니다."
        image="/images/suite-terrace.jpg"
      />

      <section className={styles.section}>
        <SectionTitle
          eyebrow="A HOME ON THE WATER"
          title="Space made personal"
          description="서로 다른 크기와 분위기를 가진 세 가지 스위트를 살펴보세요."
        />

        <div className={styles.list}>
          {suites.map((suite, index) => (
            <article key={suite.id} className={styles.suite}>
              <img src={suite.image} alt={suite.name} />

              <div>
                <p>SUITE 0{index + 1}</p>
                <h2>{suite.name}</h2>
                <span>{suite.description}</span>
                <button type="button">VIEW DETAILS</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SuitesPage;
