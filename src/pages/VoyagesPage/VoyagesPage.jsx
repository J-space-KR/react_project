import { useState } from "react";
import PageHero from "../../components/PageHero/PageHero";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import VoyageCard from "../../components/VoyageCard/VoyageCard";
import { voyages } from "../../data/siteData";
import styles from "./VoyagesPage.module.css";

const regions = ["All", "SKINCARE", "CLEANSING"];

function VoyagesPage() {
  const [selectedRegion, setSelectedRegion] = useState("All");

  // All을 누르면 전체 배열을, 다른 버튼을 누르면 같은 지역만 보여 줍니다.
  const filteredVoyages = voyages.filter((voyage) => {
    if (selectedRegion === "All") return true;
    return voyage.region === selectedRegion;
  });

  return (
    <div>
      <PageHero
        eyebrow="PRODUCTS"
        title="피어나는 스킨케어"
        description="피부 고민에 맞는 제품을 선택하고, 나에게 맞는 케어를 찾아보세요."
        image="/images/꽃_전체 라인.jpeg"
      />

      <section className={styles.section}>
        <SectionTitle eyebrow="ALL PRODUCTS" title="전체 제품" />

        <div className={styles.filters}>
          {regions.map((region) => (
            <button
              key={region}
              className={selectedRegion === region ? styles.active : ""}
              type="button"
              onClick={() => setSelectedRegion(region)}
            >
              {region === "All" ? "전체" : region}
            </button>
          ))}
        </div>

        <p className={styles.resultText}>{filteredVoyages.length}개의 제품</p>

        <div className={styles.grid}>
          {filteredVoyages.map((voyage) => (
            <VoyageCard key={voyage.id} voyage={voyage} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default VoyagesPage;
