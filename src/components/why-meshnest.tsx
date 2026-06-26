"use client";

import styles from "./why-meshnest.module.css";
import { useReveal } from "../app/hooks/useReveal";

const POINTS = [
  {
    title: "Clear recommendations",
    body: "You'll know what the problem is, whether it's worth fixing, and what to do first.",
  },
  {
    title: "No unnecessary upgrades",
    body: "If your current setup can be improved without replacing everything, that comes first.",
  },
  {
    title: "Designed for real homes",
    body: "Advice based on your layout and how you actually use the space — not a generic checklist.",
  },
  {
    title: "Local and personal",
    body: "One point of contact. Real explanations. No call centre.",
  },
];

export default function WhyMeshNest() {
  const { ref, isVisible } = useReveal();

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
            <p className={styles.kicker}>Why MeshNest</p>
            <h2 className={styles.title}>
              Practical help, clear advice, and no unnecessary complexity.
            </h2>
            <p className={styles.sub}>
              Wi-Fi advice that fits where you actually live — not a generic
              spec sheet or an upsell.
            </p>
          </div>

          <div className={styles.grid}>
            {POINTS.map((point, index) => (
              <article
                key={point.title}
                className={`${styles.card} reveal ${isVisible ? "revealVisible" : ""} ${
                  index === 0 ? "revealDelay1" :
                  index === 1 ? "revealDelay2" :
                  index === 2 ? "revealDelay3" : "revealDelay4"
                }`}
              >
                <h3 className={styles.cardTitle}>{point.title}</h3>
                <p className={styles.cardBody}>{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}