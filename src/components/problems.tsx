"use client";

import styles from "./problems.module.css";
import { useReveal } from "../app/hooks/useReveal";

const PROBLEMS = [
  {
    title: "Dead zones",
    body: "Rooms where Wi-Fi drops off completely or becomes unreliable the moment you move.",
  },
  {
    title: "Random dropouts",
    body: "Calls freeze, streams buffer, and devices disconnect at the worst possible time.",
  },
  {
    title: "Unstable speeds",
    body: "Everything looks fine on paper until several devices are online at once.",
  },
  {
    title: "Messy network setups",
    body: "Old routers, extenders, and mismatched gear often create more problems than they solve.",
  },
];

const EFFECTS = [
  "Video calls that cut out",
  "Buffering at peak hours",
  "Smart home devices going offline",
  "Wi-Fi that only works properly near the router",
];

export default function Problems() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      className={`section sectionDivider ${styles.section}`}
      id="problems"
      aria-label="Common Wi-Fi problems"
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container reveal ${isVisible ? "revealVisible" : ""}`}
      >
        <div className={styles.head}>
          <p className={styles.kicker}>Common problems</p>
          <h2 className={styles.title}>Most Wi-Fi issues aren’t internet problems.</h2>
          <p className={styles.sub}>
            They usually come down to layout, placement, interference, or outdated equipment.
            Once the real bottleneck is clear, the fix becomes much simpler.
          </p>
        </div>

        <div className={styles.grid}>
          {PROBLEMS.map((item) => (
            <article key={item.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardBody}>{item.body}</p>
            </article>
          ))}
        </div>

        <div className={styles.effects}>
          <p className={styles.effectsTitle}>What this often looks like day to day</p>
          <div className={styles.effectsGrid}>
            {EFFECTS.map((effect) => (
              <div key={effect} className={styles.effectItem}>
                <span className={styles.effectDot} />
                <span>{effect}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottomNote}>
          <p>
            <strong>Not sure what’s causing yours?</strong>
            <span className={styles.bottomMuted}> A Wi-Fi Health Check helps identify the issue and gives you a clear next step.</span>
          </p>
        </div>
      </div>
    </section>
  );
}