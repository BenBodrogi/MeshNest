"use client";

import styles from "./approach.module.css";
import { useReveal } from "../app/hooks/useReveal";

const STEPS = [
  {
    number: "01",
    title: "Assess",
    body: "A look at your setup, your floor plan, and where things actually drop off — not just what the router says.",
  },
  {
    number: "02",
    title: "Recommend",
    body: "Plain-English advice on what's causing it and which change will make the biggest difference.",
  },
  {
    number: "03",
    title: "Improve",
    body: "If you want help implementing it, MeshNest can handle the setup so you don't have to figure it out alone.",
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
            <strong>No obligation after the assessment.</strong>
            <span className={styles.noteMuted}> The recommendations are yours to act on however you like.</span>
          </p>
        </div>
      </div>
    </section>
  );
}