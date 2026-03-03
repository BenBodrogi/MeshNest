export default function Hero() {
  return (
    <section style={{ padding: "84px 16px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: 14, letterSpacing: 0.6, textTransform: "uppercase", opacity: 0.75, marginBottom: 10 }}>
          MeshNest • Home & Small Business Wi-Fi
        </p>

        <h1 style={{ fontSize: 52, lineHeight: 1.05, marginBottom: 14, maxWidth: 900 }}>
          Fix your Wi-Fi, for good.
        </h1>

        <p style={{ fontSize: 18, maxWidth: 720, marginBottom: 26, lineHeight: 1.6 }}>
          Dead zones, random dropouts, slow speeds? Book a{" "}
          <strong>Wi-Fi Health Check</strong> and get a clear diagnosis + a practical upgrade plan
          for stable coverage across your whole space.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <a
            href="#contact"
            style={{
              padding: "12px 16px",
              borderRadius: 10,
              background: "#111",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            Book a Wi-Fi Health Check
          </a>

          <a
            href="#services"
            style={{
              padding: "12px 16px",
              borderRadius: 10,
              border: "1px solid #111",
              fontWeight: 700,
            }}
          >
            See what’s included
          </a>

          <span style={{ fontSize: 14, opacity: 0.75 }}>
            Typical reply within <strong>24 hours</strong>
          </span>
        </div>

        <div style={{ marginTop: 22, display: "flex", gap: 10, flexWrap: "wrap" }}>
          {[
            "✅ Better coverage",
            "✅ More stable speeds",
            "✅ Security basics",
            "✅ Clear next steps",
          ].map((t) => (
            <span
              key={t}
              style={{
                fontSize: 14,
                padding: "8px 10px",
                borderRadius: 999,
                border: "1px solid #eee",
                background: "#fafafa",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}