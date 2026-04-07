"use client";

import Image from "next/image";
import styles from "./services.module.css";
import { useReveal } from "../app/hooks/useReveal";

type ServiceCardProps = {
  title: string;
  price: string;
  bullets: string[];
};

function ServiceCard({ title, price, bullets }: ServiceCardProps) {
  return (
    <article className={styles.card}>
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
        Ask About This
      </a>
    </article>
  );
}

export default function Services() {
  const { ref, isVisible } = useReveal();

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
          style={{
            objectFit: "cover",
            objectPosition: "60% center",
          }}
        />
      </div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container reveal ${isVisible ? "revealVisible" : ""}`}
      >
        <div className={styles.head}>
          <p className={styles.kicker}>Services</p>
          <h2 className={styles.title}>Support that matches the size of the problem.</h2>
          <p className={styles.sub}>
            Start with a focused health check or plan a full upgrade for better coverage, stability, and day-to-day reliability.
          </p>
        </div>

        <div className={styles.grid}>
          <ServiceCard
            title="Wi-Fi Health Check"
            price="From 39,000 HUF"
            bullets={[
              "Pinpoint dead zones and the cause of dropouts",
              "Practical fixes: placement + settings recommendations",
              "Simple security sanity check (guest Wi-Fi, router basics)",
            ]}
          />

          <ServiceCard
            title="Home Wi-Fi Upgrade Plan"
            price="From 120,000 HUF"
            bullets={[
              "Full coverage plan for your space (room-by-room)",
              "Hardware recommendations (router / mesh) + placement map",
              "Clean setup: safer smart-home basics + network separation (if needed)",
            ]}
          />
        </div>
      </div>
    </section>
  );
}