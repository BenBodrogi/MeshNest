"use client";

import Link from "next/link";
import { useReveal } from "../app/hooks/useReveal";
import styles from "./care-plan.module.css";
import { useLang } from "../context/LanguageContext";
import { t } from "../lib/translations";

export default function CarePlan() {
  const { ref, isVisible } = useReveal();
  const { lang } = useLang();
  const c = t.carePlan;
  const tiers = t.pricing.tiers.cards;

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

          <div className={styles.tierRow}>
            {tiers.map((tier) => (
              <div key={tier.name.en} className={styles.tierItem}>
                <span className={styles.tierName}>{tier.name[lang]}</span>
                <span className={styles.tierPrice}>{tier.price[lang]}</span>
              </div>
            ))}
          </div>

          <Link href="/pricing#tiers" scroll={false} className={styles.viewAllLink}>
            {c.viewAllLabel[lang]}
          </Link>

          <Link href="/contact" className={`btn btnPrimary ${styles.cta}`}>
            {c.cta[lang]}
          </Link>
        </div>
      </div>
    </section>
  );
}
