export default function Hero() {
  return (
    <section style={{ padding: "64px 16px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ fontSize: 44, lineHeight: 1.1, marginBottom: 12 }}>
          Designed. Secured. Managed.
        </h1>
        <p style={{ fontSize: 18, maxWidth: 650, marginBottom: 22 }}>
          Professional home and small-business network architecture built for reliability,
          performance, and security.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="#contact" style={{ padding: "10px 14px", borderRadius: 8, background: "#111", color: "#fff", fontWeight: 600 }}>
            Get Started
          </a>
          <a href="#services" style={{ padding: "10px 14px", borderRadius: 8, border: "1px solid #111", fontWeight: 600 }}>
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}