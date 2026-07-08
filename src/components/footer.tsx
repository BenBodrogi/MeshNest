"use client";

import Image from "next/image";
import styles from "./footer.module.css";
import { useLang } from "../context/LanguageContext";
import { t } from "../lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const f = t.footer;

  return (
    <footer className={styles.footer} aria-label="MeshNest footer">
      <div className="container">

        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <a href="#top" className={styles.brand} aria-label="MeshNest home">
              <Image
                src="/logo.svg"
                alt=""
                width={120}
                height={36}
                className={styles.logo}
                aria-hidden="true"
              />
              <span className={styles.brandText}>MeshNest</span>
            </a>

            <p className={styles.tagline}>{f.tagline[lang]}</p>
          </div>

          <div className={styles.info}>
            <p className={styles.label}>{f.serviceArea[lang]}</p>
            <p className={styles.value}>{f.areaValue[lang]}</p>

            <p className={`${styles.label} ${styles.labelSpacing}`}>
              {f.responseTime[lang]}
            </p>
            <p className={styles.value}>{f.responseVal[lang]}</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} MeshNest —{" "}
            {lang === "hu" ? "üzemelteti: " : "powered by "}
            <a href="https://virdana.dev" target="_blank" rel="noopener noreferrer" className={styles.virdanaLink}>
              The Virdana Group
            </a>
            . {f.copy[lang]}
          </p>
        </div>

      </div>
    </footer>
  );
}
