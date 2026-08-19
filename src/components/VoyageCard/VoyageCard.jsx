import styles from "./VoyageCard.module.css";

function VoyageCard({ voyage }) {
  return (
    <article className={styles.card}>
      <img src={voyage.image} alt={voyage.title} />

      <div className={styles.content}>
        <p>{voyage.region}</p>
        <h3>{voyage.title}</h3>
        <span>{voyage.route}</span>
        <div className={styles.meta}>
          <span>{voyage.nights}</span>
          <span>{voyage.date}</span>
        </div>
      </div>
    </article>
  );
}

export default VoyageCard;
