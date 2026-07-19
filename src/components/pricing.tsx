"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./pricing.module.css";
import { useReveal } from "../app/hooks/useReveal";
import { useLang } from "../context/LanguageContext";
import { t } from "../lib/translations";
import type { Lang } from "../lib/translations";

const MAINTENANCE_TIERS = [
  { rate: 11000, recommendedHours: 2, minHours: 2, maxHours: 20 }, // Basic
  { rate: 12000, recommendedHours: 4, minHours: 2, maxHours: 20 }, // Standard
  { rate: 14000, recommendedHours: 8, minHours: 2, maxHours: 20 }, // Premium
];

function formatPrice(amount: number, lang: Lang): string {
  const formatted = new Intl.NumberFormat(lang === "hu" ? "hu-HU" : "en-US").format(amount);
  return lang === "hu" ? `${formatted} Ft` : `${formatted} HUF`;
}

function MaintenanceIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 8a6 6 0 0 1 11-3" />
      <path d="M17 3v4h-4" />
      <path d="M18 16a6 6 0 0 1-11 3" />
      <path d="M7 21v-4h4" />
    </svg>
  );
}

function InstallationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3v5M15 3v5" />
      <rect x="6" y="8" width="12" height="7" rx="2" />
      <path d="M12 15v3a3 3 0 0 1-3 3H7" />
    </svg>
  );
}

type MaintenanceCardProps = {
  name: string;
  rateDisplay: string;
  response: string;
  includes: string[];
  rate: number;
  minHours: number;
  maxHours: number;
  recommendedHours: number;
  lang: Lang;
  labels: {
    hoursLabel: string;
    recommendedPrefix: string;
    hourUnit: string;
    monthlyEstimateLabel: string;
    responseLabel: string;
    includesLabel: string;
    cardBtn: string;
  };
};

function MaintenanceCard({
  name,
  rateDisplay,
  response,
  includes,
  rate,
  minHours,
  maxHours,
  recommendedHours,
  lang,
  labels,
}: MaintenanceCardProps) {
  const [hours, setHours] = useState(recommendedHours);
  const sliderId = `hours-${name.toLowerCase()}`;

  return (
    <article className={`card ${styles.card}`}>
      <div className={styles.cardHead}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardPrice}>{rateDisplay}</p>
      </div>

      <div className={styles.sliderBlock}>
        <div className={styles.sliderHead}>
          <label htmlFor={sliderId} className={styles.sliderLabel}>
            {labels.hoursLabel}
          </label>
          <span className={styles.sliderHours}>
            {hours} {labels.hourUnit}
          </span>
        </div>

        <input
          id={sliderId}
          type="range"
          min={minHours}
          max={maxHours}
          step={1}
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          className={styles.slider}
        />

        <p className={styles.sliderRecommended}>
          {labels.recommendedPrefix} {recommendedHours} {labels.hourUnit}
        </p>

        <p className={styles.sliderEstimate}>
          {labels.monthlyEstimateLabel}: <strong>{formatPrice(hours * rate, lang)}</strong>
        </p>
      </div>

      <dl className={styles.factList}>
        <div className={styles.factRow}>
          <dt className={styles.factLabel}>{labels.responseLabel}</dt>
          <dd className={styles.factValue}>{response}</dd>
        </div>
      </dl>

      <div className={styles.includesBlock}>
        <p className={styles.includesLabel}>{labels.includesLabel}</p>
        <ul className={styles.includesList}>
          {includes.map((item) => (
            <li key={item} className={styles.includesItem}>
              <span className={styles.dot} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link href="/contact" className={`btn btnPrimary ${styles.cardBtn}`}>
        {labels.cardBtn}
      </Link>
    </article>
  );
}

export default function Pricing() {
  const { ref: introRef, isVisible: introVisible } = useReveal();
  const { ref: maintenanceRef, isVisible: maintenanceVisible } = useReveal();
  const { ref: installationRef, isVisible: installationVisible } = useReveal();
  const { ref: closingRef, isVisible: closingVisible } = useReveal();
  const { lang } = useLang();
  const p = t.pricing;

  return (
    <>
      <section
        className={`sectionLarge sectionDivider ${styles.hero}`}
        aria-label="MeshNest pricing"
      >
        <div
          ref={introRef as React.RefObject<HTMLDivElement>}
          className={`container reveal ${introVisible ? "revealVisible" : ""}`}
        >
          <p className={styles.kicker}>{p.hero.kicker[lang]}</p>
          <h1 className={styles.heroTitle}>{p.hero.title[lang]}</h1>
          <p className={styles.heroSub}>{p.hero.sub[lang]}</p>
        </div>
      </section>

      <section
        className={`sectionLarge sectionDivider ${styles.section} ${styles.sectionAlt}`}
        id="tiers"
        aria-label="Maintenance"
      >
        <div
          ref={maintenanceRef as React.RefObject<HTMLDivElement>}
          className={`container reveal ${maintenanceVisible ? "revealVisible" : ""}`}
        >
          <div className={styles.head}>
            <div className={styles.sectionIcon}>
              <MaintenanceIcon />
            </div>
            <p className={styles.kicker}>{p.maintenance.kicker[lang]}</p>
            <h2 className={styles.title}>{p.maintenance.title[lang]}</h2>
            <p className={styles.sub}>{p.maintenance.sub[lang]}</p>
          </div>

          <div className={styles.grid}>
            {p.maintenance.cards.map((card, index) => (
              <MaintenanceCard
                key={card.name.en}
                name={card.name[lang]}
                rateDisplay={card.rateDisplay[lang]}
                response={card.response[lang]}
                includes={card.includes.map((item) => item[lang])}
                rate={MAINTENANCE_TIERS[index].rate}
                minHours={MAINTENANCE_TIERS[index].minHours}
                maxHours={MAINTENANCE_TIERS[index].maxHours}
                recommendedHours={MAINTENANCE_TIERS[index].recommendedHours}
                lang={lang}
                labels={{
                  hoursLabel: p.maintenance.hoursLabel[lang],
                  recommendedPrefix: p.maintenance.recommendedPrefix[lang],
                  hourUnit: p.maintenance.hourUnit[lang],
                  monthlyEstimateLabel: p.maintenance.monthlyEstimateLabel[lang],
                  responseLabel: p.maintenance.responseLabel[lang],
                  includesLabel: p.maintenance.includesLabel[lang],
                  cardBtn: p.maintenance.cardBtn[lang],
                }}
              />
            ))}
          </div>

          <p className={styles.footnote}>{p.maintenance.minimumOverageNote[lang]}</p>
        </div>
      </section>

      <section
        className={`sectionLarge sectionDivider ${styles.section}`}
        aria-label="Installation and setup"
      >
        <div
          ref={installationRef as React.RefObject<HTMLDivElement>}
          className={`container reveal ${installationVisible ? "revealVisible" : ""}`}
        >
          <div className={styles.head}>
            <div className={styles.sectionIcon}>
              <InstallationIcon />
            </div>
            <p className={styles.kicker}>{p.installation.kicker[lang]}</p>
            <h2 className={styles.title}>{p.installation.title[lang]}</h2>
            <p className={styles.sub}>{p.installation.sub[lang]}</p>
          </div>

          <div className={styles.statRow}>
            <div className={styles.stat}>
              <p className={styles.statLabel}>{p.installation.rateLabel[lang]}</p>
              <p className={styles.statValue}>{p.installation.rateDisplay[lang]}</p>
            </div>
          </div>

          <p className={styles.footnote}>{p.installation.note[lang]}</p>

          <div className={styles.installCta}>
            <Link href="/contact" className="btn btnPrimary">
              {p.installation.cta[lang]}
            </Link>
          </div>
        </div>
      </section>

      <section
        className={`sectionLarge sectionDivider ${styles.section} ${styles.sectionAlt}`}
        aria-label="Get in touch about pricing"
      >
        <div
          ref={closingRef as React.RefObject<HTMLDivElement>}
          className={`container reveal ${closingVisible ? "revealVisible" : ""}`}
        >
          <div className={styles.closing}>
            <h2 className={styles.closingTitle}>{p.closing.title[lang]}</h2>
            <p className={styles.closingBody}>{p.closing.body[lang]}</p>
            <Link href="/contact" className={`btn btnPrimary ${styles.closingCta}`}>
              {p.closing.cta[lang]}
            </Link>
            <p className={styles.hardwareNote}>{p.hardwareNote[lang]}</p>
          </div>
        </div>
      </section>
    </>
  );
}
