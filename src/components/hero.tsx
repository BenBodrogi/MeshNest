"use client";

import Image from "next/image";
import Link from "next/link";
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
            <Link href="/contact" className="btn btnPrimary">
              {h.ctaPrimary[lang]}
            </Link>
            <a href="#services" className="btn btnSecondary">
              {h.ctaSecondary[lang]}
            </a>

            <span className={styles.trust}>
              {h.trustBadge[lang]}
              {h.trustBold[lang] ? <strong>{h.trustBold[lang]}</strong> : null}
            </span>
          </div>

          <div className={styles.chips} aria-label="Key benefits">
            <span className={styles.chip}>{h.chip1[lang]}</span>
            <span className={styles.chip}>{h.chip2[lang]}</span>
            <span className={styles.chip}>{h.chip3[lang]}</span>
            <span className={styles.chip}>{h.chip4[lang]}</span>
          </div>

          <div className={styles.proof}>
            <span className={styles.proofItem}>
              <svg
                className={styles.pinIcon}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {h.proofArea[lang]}
            </span>
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
