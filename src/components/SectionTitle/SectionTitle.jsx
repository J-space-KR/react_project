import styles from "./SectionTitle.module.css";

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className={styles.titleBox}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {description && <span>{description}</span>}
    </div>
  );
}

export default SectionTitle;
