import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <section className={styles.page}>
      <p>404</p>
      <h1>We could not find this page.</h1>
      <Link to="/">BACK TO HOME</Link>
    </section>
  );
}

export default NotFoundPage;
