import { useState } from "react";
import PageHero from "../../components/PageHero/PageHero";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import VoyageCard from "../../components/VoyageCard/VoyageCard";
import { voyages } from "../../data/siteData";
import styles from "./VoyagesPage.module.css";

const regions = ["All", "Mediterranean", "Caribbean"];

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
        eyebrow="VOYAGE FINDER"
        title="Follow the sun"
        description="가고 싶은 지역을 선택하고, 나에게 맞는 항해를 찾아보세요."
        image="/images/positano-sunset.webp"
      />

      <section className={styles.section}>
        <SectionTitle eyebrow="WHERE TO NEXT?" title="Explore our voyages" />

        <div className={styles.filters}>
          {regions.map((region) => (
            <button
              key={region}
              className={selectedRegion === region ? styles.active : ""}
              type="button"
              onClick={() => setSelectedRegion(region)}
            >
              {region}
            </button>
          ))}
        </div>

        <p className={styles.resultText}>{filteredVoyages.length} VOYAGES</p>

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
