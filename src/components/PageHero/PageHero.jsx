import styles from "./PageHero.module.css";

function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        <span>{description}</span>
      </div>
    </section>
  );
}

export default PageHero;
