"use client";

import { useReveal } from "../app/hooks/useReveal";
import styles from "./care-plan.module.css";
import { useLang } from "../context/LanguageContext";
import { t } from "../lib/translations";

export default function CarePlan() {
  const { ref, isVisible } = useReveal();
  const { lang } = useLang();
  const c = t.carePlan;

  return (
    <section className={`section sectionDivider ${styles.section}`} id="care-plan" aria-label="MeshNest care plan">
      <div className="container">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`${styles.panel} reveal ${isVisible ? "revealVisible" : ""}`}
        >
          <p className={styles.kicker}>{c.kicker[lang]}</p>
          <h2 className={styles.title}>{c.title[lang]}</h2>

          <p className={styles.body}>{c.body[lang]}</p>

          <p className={styles.price}>{c.price[lang]}</p>

          <a href="#contact" className={`btn btnPrimary ${styles.cta}`}>
            {c.cta[lang]}
          </a>
        </div>
      </div>
    </section>
  );
}
