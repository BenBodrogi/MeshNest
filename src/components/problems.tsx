import styles from "./problems.module.css";

const PROBLEMS = [
  {
    title: "Dead zones",
    body: "Rooms where Wi-Fi just doesn’t reach — or drops the moment you move.",
    icon: "📶",
  },
  {
    title: "Random dropouts",
    body: "Calls freeze, streams buffer, games disconnect. It feels “fine”… until it isn’t.",
    icon: "⚠️",
  },
  {
    title: "Unstable speeds",
    body: "Speed tests look great once, then fall apart when multiple devices are online.",
    icon: "📉",
  },
  {
    title: "Messy network setups",
    body: "Extenders stacked on extenders, old routers, mixed gear — no clear architecture.",
    icon: "🧩",
  },
];

const EFFECTS = [
  "Video calls that cut out",
  "Buffering at peak hours",
  "Smart home devices going offline",
  "Wi-Fi that’s “good” only next to the router",
];

export default function Problems() {
  return (
    <section className={`section ${styles.section}`} id="problems" aria-label="Common Wi-Fi problems">
      <div className="container">
        <div className={styles.head}>
          <p className={styles.kicker}>Common problems</p>
          <h2 className={styles.title}>Most Wi-Fi issues aren’t “internet problems.”</h2>
          <p className={styles.sub}>
            They’re usually layout, placement, interference, or outdated gear. The good news: once you find
            the bottleneck, the fix is straightforward.
          </p>
        </div>

        <div className={styles.grid} role="list">
          {PROBLEMS.map((p) => (
            <article key={p.title} className={`card ${styles.card}`} role="listitem">
              <div className={styles.cardTop}>
                <span className={styles.icon} aria-hidden="true">{p.icon}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
              </div>
              <p className={styles.cardBody}>{p.body}</p>
            </article>
          ))}
        </div>

        <div className={`surface ${styles.effects}`}>
          <div className={styles.effectsInner}>
            <p className={styles.effectsTitle}>What it usually looks like day-to-day</p>
            <ul className={styles.effectsList}>
              {EFFECTS.map((e) => (
                <li key={e} className={styles.effectsItem}>
                  <span className={styles.bullet} aria-hidden="true">•</span>
                  {e}
                </li>
              ))}
            </ul>

            <div className={styles.bridge}>
              <div className={styles.bridgeText}>
                <strong>Not sure what’s causing yours?</strong>
                <span className={styles.bridgeMuted}> A Wi-Fi Health Check gives you a clear plan.</span>
              </div>

              <a href="#contact" className={`btn btnPrimary ${styles.bridgeBtn}`}>
                Book a Wi-Fi Health Check
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}