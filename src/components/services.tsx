"use client";

import Image from "next/image";
import styles from "./services.module.css";
import { useReveal } from "../app/hooks/useReveal";
import { useLang } from "../context/LanguageContext";
import { t } from "../lib/translations";
import type { Lang } from "../lib/translations";

type ServiceCardProps = {
  title: string;
  price: string;
  bullets: string[];
  btnLabel: string;
  featured?: boolean;
  featuredLabel?: string;
};

function ServiceCard({ title, price, bullets, btnLabel, featured, featuredLabel }: ServiceCardProps) {
  return (
    <article className={`${styles.card} ${featured ? styles.featured : ""}`}>
      {featured && featuredLabel ? (
        <span className={styles.badge}>{featuredLabel}</span>
      ) : null}
      <div className={styles.cardHead}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.price}>{price}</p>
      </div>

      <ul className={styles.list}>
        {bullets.map((bullet) => (
          <li key={bullet} className={styles.listItem}>
            <span className={styles.dot} aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <a href="#contact" className={`btn btnPrimary ${styles.cardBtn}`}>
        {btnLabel}
      </a>
    </article>
  );
}

export default function Services() {
  const { ref, isVisible } = useReveal();
  const { lang } = useLang();
  const s = t.services;

  return (
    <section
      className={`sectionLarge sectionDivider ${styles.section}`}
      id="services"
      aria-label="MeshNest services"
    >
      <div className={styles.bg} aria-hidden="true">
        <Image
          src="/services-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "60% center" }}
        />
      </div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container reveal ${isVisible ? "revealVisible" : ""}`}
      >
        <div className={styles.head}>
          <p className={styles.kicker}>{s.kicker[lang]}</p>
          <h2 className={styles.title}>{s.title[lang]}</h2>
          <p className={styles.sub}>{s.sub[lang]}</p>
        </div>

        <div className={styles.grid}>
          {s.cards.map((card, index) => (
            <ServiceCard
              key={card.title.en}
              title={card.title[lang]}
              price={card.price[lang]}
              bullets={card.bullets.map((b) => b[lang as Lang])}
              btnLabel={s.cardBtn[lang]}
              featured={index === 1}
              featuredLabel={s.featuredBadge[lang]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
