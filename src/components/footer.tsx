import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="MeshNest footer">
      <div className="container">

        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <a href="#top" className={styles.brand} aria-label="MeshNest home">
              <span className={styles.brandMark} aria-hidden="true" />
              <span className={styles.brandText}>MeshNest</span>
            </a>

            <p className={styles.tagline}>
              Practical network design and setup for homes and small businesses.
            </p>
          </div>

          <div className={styles.info}>
            <p className={styles.label}>Service area</p>
            <p className={styles.value}>Törökbálint & surrounding area</p>

            <p className={`${styles.label} ${styles.labelSpacing}`}>
              Response time
            </p>
            <p className={styles.value}>Usually within 24 hours</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} MeshNest. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}