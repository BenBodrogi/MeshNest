import styles from "./care-plan.module.css";

export default function CarePlan() {
  return (
    <section className={`section sectionDivider ${styles.section}`} id="care-plan" aria-label="MeshNest care plan">
      <div className="container">
        <div className={styles.panel}>
          <p className={styles.kicker}>Ongoing support</p>
          <h2 className={styles.title}>Your network, maintained.</h2>

          <p className={styles.body}>
            After setup, MeshNest helps keep your network stable with regular check-ins,
            quick health reviews, and practical support when something starts acting up.
          </p>

          <p className={styles.price}>From 12,000 HUF / month</p>

          <a href="#contact" className={`btn ${styles.cta}`}>
            Request Care
          </a>
        </div>
      </div>
    </section>
  );
}