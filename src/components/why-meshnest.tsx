"use client";

import styles from "./why-meshnest.module.css";
import { useReveal } from "../app/hooks/useReveal";

const POINTS = [
  {
    title: "Clear recommendations",
    body: "You get straightforward advice on what matters, what does not, and what to do next.",
  },
  {
    title: "No unnecessary upgrades",
    body: "If your current setup can be improved without replacing everything, that comes first.",
  },
  {
    title: "Designed for real homes",
    body: "Recommendations are based on layout, usage, and everyday reliability, not generic specs.",
  },
  {
    title: "Local and personal",
    body: "MeshNest is built around practical support, clear communication, and a more personal service experience.",
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
              MeshNest is built around solving real Wi-Fi problems in a way that
              feels understandable, honest, and tailored to the space you
              actually use every day.
            </p>
          </div>

          <div className={styles.grid}>
            {POINTS.map((point, index) => (
              <article
                key={point.title}
                className={`${styles.card} reveal ${isVisible ? "revealVisible" : ""} ${
                  index === 0 ? "revealDelay1" :
                  index === 1 ? "revealDelay2" :
                  index === 2 ? "revealDelay1" : "revealDelay2"
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