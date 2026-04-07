"use client";

import styles from "./approach.module.css";
import { useReveal } from "../app/hooks/useReveal";

const STEPS = [
  {
    number: "01",
    title: "Assess",
    body: "We look at your current setup, your space, and where the weak spots actually show up in daily use.",
  },
  {
    number: "02",
    title: "Recommend",
    body: "You get clear, practical advice on what is causing the issue and which changes will make the biggest difference.",
  },
  {
    number: "03",
    title: "Improve",
    body: "If needed, MeshNest helps refine the setup so coverage, stability, and day-to-day use all improve.",
  },
];

export default function Approach() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      className={`sectionTight sectionDivider ${styles.section}`}
      id="approach"
      aria-label="How MeshNest works"
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container reveal ${isVisible ? "revealVisible" : ""}`}
      >
        <div className={styles.head}>
          <p className={styles.kicker}>How it works</p>
          <h2 className={styles.title}>A clear process from diagnosis to a better network.</h2>
          <p className={styles.sub}>
            No guesswork, no jargon, and no unnecessary upgrades. Just a practical path to more reliable Wi-Fi.
          </p>
        </div>

        <div className={styles.steps}>
          {STEPS.map((step, index) => (
            <article
              key={step.number}
              className={`${styles.step} reveal ${isVisible ? "revealVisible" : ""} ${
                index === 0 ? "revealDelay1" : index === 1 ? "revealDelay2" : "revealDelay3"
              }`}
            >
              <div className={styles.number}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </article>
          ))}
        </div>

        <div className={styles.note}>
          <p>
            <strong>You stay in control throughout.</strong>
            <span className={styles.noteMuted}> Clear next steps, honest recommendations, no pressure.</span>
          </p>
        </div>
      </div>
    </section>
  );
}