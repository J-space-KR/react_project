import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import VoyageCard from "../../components/VoyageCard/VoyageCard";
import { suites, voyages } from "../../data/siteData";
import styles from "./HomePage.module.css";

const discoveryItems = [
  {
    id: 1,
    label: "REGIONS",
    title: "Unparalleled Access",
    image: "/images/exumas.webp",
    path: "/voyages",
    size: "tall",
  },
  {
    id: 2,
    label: "OUR SUITES",
    title: "Welcome Home",
    image: "/images/suite-living.jpg",
    path: "/suites",
    size: "small",
  },
  {
    id: 3,
    label: "OUR YACHTS",
    title: "Four Seasons I & II",
    image: "/images/yacht-hero.webp",
    path: "/yacht",
    size: "wide",
  },
  {
    id: 4,
    label: "EXPERIENCES",
    title: "Inspired For You",
    image: "/images/dining.png",
    path: "/yacht",
    size: "experience",
  },
  {
    id: 5,
    label: "LIFE ONBOARD",
    title: "Voyages of Pure Connection",
    image: "/images/wellness.webp",
    path: "/yacht",
    size: "onboard",
  },
];

function HomePage() {
  const featuredVoyages = voyages.slice(0, 3);

  return (
    <div>
      <Hero />

      <section className={styles.discoverySection}>
        <h2>
          MODERN <em>YACHTING</em> WITH
          <br />FOUR SEASONS
        </h2>

        <div className={styles.discoveryGrid}>
          {discoveryItems.map((item) => (
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
          ))}
        </div>
      </section>

      <section className={styles.voyageSection}>
        <h2>EXPLORE UPCOMING<br />VOYAGES</h2>

        <div className={styles.searchBox}>
          <label>
            DESTINATION
            <select defaultValue="Destination">
              <option>Destination</option>
              <option>Mediterranean</option>
              <option>Caribbean</option>
            </select>
          </label>

          <label>
            DATES
            <select defaultValue="Dates">
              <option>Dates</option>
              <option>May 2027</option>
              <option>January 2028</option>
            </select>
          </label>

          <Link to="/voyages">VIEW ALL VOYAGES</Link>
        </div>

        <div className={styles.voyageGrid}>
          {featuredVoyages.map((voyage) => (
            <VoyageCard key={voyage.id} voyage={voyage} />
          ))}
        </div>
      </section>

      <section className={styles.designIntro}>
        <h2>EXCEPTIONAL DESIGN</h2>
        <p>
          Open spaces, thoughtful details and seamless indoor-outdoor living
          create a quiet and comfortable experience at sea.
        </p>
        <Link to="/yacht">EXPLORE FOUR SEASONS I</Link>
      </section>

      <section className={styles.designImage}>
        <img src="/images/yacht-hero.webp" alt="바다를 항해하는 Four Seasons 요트" />
      </section>

      <section className={styles.suiteSection}>
        <div className={styles.suiteIntro}>
          <p>FOUR SEASONS I</p>
          <h2>RETREAT TO<br />EXCEPTIONAL<br />SUITES</h2>
          <span>
            Floor-to-ceiling windows, ocean-facing terraces and comfortable
            residential-style spaces.
          </span>
          <Link to="/suites">EXPLORE SUITES</Link>
        </div>

        <div className={styles.suiteCards}>
          {suites.map((suite) => (
            <Link key={suite.id} to="/suites">
              <img src={suite.image} alt={suite.name} />
              <div>
                <h3>{suite.name}</h3>
                <span>VIEW SUITE</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.onboardSection}>
        <h2>UNPARALLELED,<br />AT SEA AND ONBOARD</h2>
        <img src="/images/dining.png" alt="요트의 다이닝 공간" />

        <div className={styles.onboardText}>
          <h3>Dining</h3>
          <p>
            Local ingredients, seasonal inspiration and attentive service come
            together at every table onboard.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <h2>GET IN TOUCH WITH A<br />PERSONAL YACHT<br />CONSULTANT</h2>
        <p>TEL: 1-877-521-5708</p>
        <Link to="/inquire">CONNECT NOW</Link>
      </section>
    </div>
  );
}

export default HomePage;
