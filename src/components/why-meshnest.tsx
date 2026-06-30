"use client";

import styles from "./why-meshnest.module.css";
import { useReveal } from "../app/hooks/useReveal";
import { useLang } from "../context/LanguageContext";
import { t } from "../lib/translations";

export default function WhyMeshNest() {
  const { ref, isVisible } = useReveal();
  const { lang } = useLang();
  const w = t.whyMeshNest;

  return (
    <section
      className={`section sectionDivider ${styles.section}`}
      id="why-meshnest"
      aria-label="Why choose MeshNest"
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container reveal ${isVisible ? "revealVisible" : ""}`}
      >
        <div className={styles.layout}>
          <div className={styles.intro}>
            <p className={styles.kicker}>{w.kicker[lang]}</p>
            <h2 className={styles.title}>{w.title[lang]}</h2>
            <p className={styles.sub}>{w.sub[lang]}</p>
          </div>

          <div className={styles.grid}>
            {w.points.map((point, index) => (
              <article
                key={point.title.en}
                className={`${styles.card} reveal ${isVisible ? "revealVisible" : ""} ${
                  index === 0 ? "revealDelay1" :
                  index === 1 ? "revealDelay2" :
                  index === 2 ? "revealDelay3" : "revealDelay4"
                }`}
              >
                <h3 className={styles.cardTitle}>{point.title[lang]}</h3>
                <p className={styles.cardBody}>{point.body[lang]}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
