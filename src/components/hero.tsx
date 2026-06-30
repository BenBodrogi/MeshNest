"use client";

import Image from "next/image";
import styles from "./hero.module.css";
import { useLang } from "../context/LanguageContext";
import { t } from "../lib/translations";

export default function Hero() {
  const { lang } = useLang();
  const h = t.hero;

  return (
    <section className={`sectionLarge sectionDivider ${styles.hero}`} aria-label="MeshNest hero">
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
            {h.titleLine1[lang]}
            <br />
            {h.titleLine2[lang]}
            <br />
            {h.titleLine3[lang]}
          </h1>

          <p className={styles.subtitle}>{h.subtitle[lang]}</p>

          <div className={styles.actions}>
            <a href="#contact" className="btn btnPrimary">
              {h.ctaPrimary[lang]}
            </a>
            <a href="#services" className="btn btnSecondary">
              {h.ctaSecondary[lang]}
            </a>

            <span className={styles.trust}>
              {lang === "en" ? (
                <>We usually reply within <strong>&nbsp;24 hours</strong></>
              ) : (
                h.trustBadge[lang]
              )}
            </span>
          </div>

          <div className={styles.chips} aria-label="Key benefits">
            <span className={styles.chip}>{h.chip1[lang]}</span>
            <span className={styles.chip}>{h.chip2[lang]}</span>
            <span className={styles.chip}>{h.chip3[lang]}</span>
            <span className={styles.chip}>{h.chip4[lang]}</span>
          </div>

          <div className={styles.proof}>
            <span>📍 {h.proofArea[lang]}</span>
            <span>•</span>
            <span>{h.proofWho[lang]}</span>
            <span>•</span>
            <span>{h.proofPlan[lang]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
