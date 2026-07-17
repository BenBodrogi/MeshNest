"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./pricing.module.css";
import { useReveal } from "../app/hooks/useReveal";
import { useLang } from "../context/LanguageContext";
import { t } from "../lib/translations";

type FactRow = { label: string; value: string };

type TierCardProps = {
  name: string;
  price: string;
  rows: FactRow[];
  ctaLabel: string;
};

function TierCard({ name, price, rows, ctaLabel }: TierCardProps) {
  return (
    <article className={`card ${styles.card}`}>
      <div className={styles.cardHead}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardPrice}>{price}</p>
      </div>

      <dl className={styles.factList}>
        {rows.map((row) => (
          <div key={row.label} className={styles.factRow}>
            <dt className={styles.factLabel}>{row.label}</dt>
            <dd className={styles.factValue}>{row.value}</dd>
          </div>
        ))}
      </dl>

      <Link href="/#contact" className={`btn btnPrimary ${styles.cardBtn}`}>
        {ctaLabel}
      </Link>
    </article>
  );
}

type SegmentCardProps = {
  name: string;
  scope: string;
  price: string;
};

function SegmentCard({ name, scope, price }: SegmentCardProps) {
  return (
    <article className={`card ${styles.card} ${styles.segmentCard}`}>
      <div className={styles.cardHead}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardPrice}>{price}</p>
      </div>
      <p className={styles.cardScope}>{scope}</p>
    </article>
  );
}

export default function Pricing() {
  const { ref: introRef, isVisible: introVisible } = useReveal();
  const { ref: hourlyRef, isVisible: hourlyVisible } = useReveal();
  const { ref: tiersRef, isVisible: tiersVisible } = useReveal();
  const { ref: segmentsRef, isVisible: segmentsVisible } = useReveal();
  const { ref: closingRef, isVisible: closingVisible } = useReveal();
  const { lang } = useLang();
  const p = t.pricing;

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const timer = setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "instant", block: "start" });
    }, 80);
    return () => clearTimeout(timer);
  }, []);

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
        className={`sectionTight sectionDivider ${styles.section}`}
        aria-label="Hourly rates"
      >
        <div
          ref={hourlyRef as React.RefObject<HTMLDivElement>}
          className={`container reveal ${hourlyVisible ? "revealVisible" : ""}`}
        >
          <div className={styles.head}>
            <p className={styles.kicker}>{p.hourly.kicker[lang]}</p>
            <h2 className={styles.title}>{p.hourly.title[lang]}</h2>
            <p className={styles.sub}>{p.hourly.sub[lang]}</p>
          </div>

          <div className={styles.statRow}>
            <div className={styles.stat}>
              <p className={styles.statLabel}>{p.hourly.adhocLabel[lang]}</p>
              <p className={styles.statValue}>{p.hourly.adhocValue[lang]}</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statLabel}>{p.hourly.overageLabel[lang]}</p>
              <p className={styles.statValue}>{p.hourly.overageValue[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`sectionLarge sectionDivider ${styles.section}`}
        id="tiers"
        aria-label="Maintenance tiers"
      >
        <div
          ref={tiersRef as React.RefObject<HTMLDivElement>}
          className={`container reveal ${tiersVisible ? "revealVisible" : ""}`}
        >
          <div className={styles.head}>
            <p className={styles.kicker}>{p.tiers.kicker[lang]}</p>
            <h2 className={styles.title}>{p.tiers.title[lang]}</h2>
            <p className={styles.sub}>{p.tiers.sub[lang]}</p>
          </div>

          <div className={styles.grid}>
            {p.tiers.cards.map((card) => (
              <TierCard
                key={card.name.en}
                name={card.name[lang]}
                price={card.price[lang]}
                ctaLabel={p.tiers.cardBtn[lang]}
                rows={[
                  { label: p.tiers.hoursLabel[lang], value: card.hours[lang] },
                  { label: p.tiers.rateLabel[lang], value: card.rate[lang] },
                  { label: p.tiers.responseLabel[lang], value: card.response[lang] },
                  { label: p.tiers.onsiteLabel[lang], value: card.onsite[lang] },
                ]}
              />
            ))}
          </div>

          <p className={styles.footnote}>{p.tiers.resetNote[lang]}</p>
        </div>
      </section>

      <section
        className={`sectionLarge sectionDivider ${styles.section}`}
        aria-label="Setup pricing"
      >
        <div
          ref={segmentsRef as React.RefObject<HTMLDivElement>}
          className={`container reveal ${segmentsVisible ? "revealVisible" : ""}`}
        >
          <div className={styles.head}>
            <p className={styles.kicker}>{p.segments.kicker[lang]}</p>
            <h2 className={styles.title}>{p.segments.title[lang]}</h2>
            <p className={styles.sub}>{p.segments.sub[lang]}</p>
          </div>

          <div className={styles.grid}>
            {p.segments.cards.map((card) => (
              <SegmentCard
                key={card.name.en}
                name={card.name[lang]}
                scope={card.scope[lang]}
                price={card.price[lang]}
              />
            ))}
          </div>

          <p className={styles.footnote}>{p.segments.independenceNote[lang]}</p>
        </div>
      </section>

      <section className={`sectionTight ${styles.section}`} aria-label="Hardware policy">
        <div className="container">
          <p className={styles.hardwareNote}>{p.hardwareNote[lang]}</p>
        </div>
      </section>

      <section
        className={`sectionLarge sectionDivider ${styles.section}`}
        aria-label="Get in touch about pricing"
      >
        <div
          ref={closingRef as React.RefObject<HTMLDivElement>}
          className={`container reveal ${closingVisible ? "revealVisible" : ""}`}
        >
          <div className={styles.closing}>
            <h2 className={styles.closingTitle}>{p.closing.title[lang]}</h2>
            <p className={styles.closingBody}>{p.closing.body[lang]}</p>
            <Link href="/#contact" className={`btn btnPrimary ${styles.closingCta}`}>
              {p.closing.cta[lang]}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
