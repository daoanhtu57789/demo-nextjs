//css
import styles from "./logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <h3 className={styles.h3}>REDISCOVER</h3>
      <h2 className={styles.h2}>Fishkeeping</h2>
      <p className={styles.p}>
        An <strong>exclusive collection of bettas</strong> available for
        everyone.
      </p>
    </div>
  );
}
