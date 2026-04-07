import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={`sectionLarge sectionDivider ${styles.hero}`} aria-label="MeshNest hero">
      {/* Background image layer */}
      <div className={styles.bg} aria-hidden="true">
        <Image
          src="/hero-bg_v2.jpg"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className={styles.overlay} />
      </div>

      <div className="container">
        <div className={styles.inner}>
          <h1 className={styles.title}>
            Designed.
            <br />
            Secured.
            <br />
            Managed.
          </h1>

          <p className={styles.subtitle}>
            A badly designed network is usually to blame for slow Wi-Fi, dead zones,
            and random dropouts. MeshNest helps you understand what’s wrong and how to fix it.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className="btn btnPrimary">
              Book a Wi-Fi Health Check
            </a>
            <a href="#services" className="btn btnSecondary">
              View Services
            </a>

            <span className={styles.trust}>
              We usually reply within <strong>&nbsp;24 hours</strong>
            </span>
          </div>

          <div className={styles.chips} aria-label="Key benefits">
            <span className={styles.chip}>Better coverage</span>
            <span className={styles.chip}>More stable speeds</span>
            <span className={styles.chip}>Security basics</span>
            <span className={styles.chip}>Clear next steps</span>
          </div>

          <div className={styles.proof}>
            <span>📍 Törökbálint & surrounding area</span>
            <span>•</span>
            <span>Homes + sole proprietors</span>
            <span>•</span>
            <span>Clear plan, no guesswork</span>
          </div>
        </div>
      </div>
    </section>
  );
}