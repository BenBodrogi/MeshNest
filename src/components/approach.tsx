"use client";

import styles from "./approach.module.css";
import { useReveal } from "../app/hooks/useReveal";
import { useLang } from "../context/LanguageContext";
import { t } from "../lib/translations";

export default function Approach() {
  const { ref, isVisible } = useReveal();
  const { lang } = useLang();
  const a = t.approach;

  return (
    <section
      className={`sectionTight sectionDivider ${styles.section}`}
      id="approach"
      aria-label="How MeshNest works"
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container reveal ${isVisible ? "revealVisible" : ""}`}
      >
        <div className={styles.head}>
          <p className={styles.kicker}>{a.kicker[lang]}</p>
          <h2 className={styles.title}>{a.title[lang]}</h2>
          <p className={styles.sub}>{a.sub[lang]}</p>
        </div>

        <div className={styles.steps}>
          {a.steps.map((step, index) => (
            <article
              key={step.number}
              className={`${styles.step} reveal ${isVisible ? "revealVisible" : ""} ${
                index === 0 ? "revealDelay1" : index === 1 ? "revealDelay2" : "revealDelay3"
              }`}
            >
              <div className={styles.number}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title[lang]}</h3>
              <p className={styles.stepBody}>{step.body[lang]}</p>
            </article>
          ))}
        </div>

        <div className={styles.note}>
          <p>
            <strong>{a.noteStrong[lang]}</strong>
            <span className={styles.noteMuted}>{a.noteMuted[lang]}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
