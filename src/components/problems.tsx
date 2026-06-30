"use client";

import styles from "./problems.module.css";
import { useReveal } from "../app/hooks/useReveal";
import { useLang } from "../context/LanguageContext";
import { t } from "../lib/translations";

export default function Problems() {
  const { ref, isVisible } = useReveal();
  const { lang } = useLang();
  const p = t.problems;

  return (
    <section
      className={`section sectionDivider ${styles.section}`}
      id="problems"
      aria-label="Common Wi-Fi problems"
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container reveal ${isVisible ? "revealVisible" : ""}`}
      >
        <div className={styles.head}>
          <p className={styles.kicker}>{p.kicker[lang]}</p>
          <h2 className={styles.title}>{p.title[lang]}</h2>
          <p className={styles.sub}>{p.sub[lang]}</p>
        </div>

        <div className={styles.grid}>
          {p.cards.map((card) => (
            <article key={card.title.en} className={styles.card}>
              <h3 className={styles.cardTitle}>{card.title[lang]}</h3>
              <p className={styles.cardBody}>{card.body[lang]}</p>
            </article>
          ))}
        </div>

        <div className={styles.effects}>
          <p className={styles.effectsTitle}>{p.effectsTitle[lang]}</p>
          <div className={styles.effectsGrid}>
            {p.effects.map((effect) => (
              <div key={effect.en} className={styles.effectItem}>
                <span className={styles.effectDot} />
                <span>{effect[lang]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottomNote}>
          <p>
            <strong>{p.bottomStrong[lang]}</strong>
            <span className={styles.bottomMuted}>{p.bottomMuted[lang]}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
