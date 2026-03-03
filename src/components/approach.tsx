function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 14,
        padding: 20,
        background: "#fff",
      }}
    >
      <div style={{ fontSize: 12, color: "#666", marginBottom: 8, letterSpacing: 0.4, textTransform: "uppercase" }}>
        Step {n}
      </div>
      <h3 style={{ margin: "0 0 10px", fontSize: 20 }}>{title}</h3>
      <p style={{ margin: 0, color: "#444", lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

export default function Approach() {
  return (
    <section id="plan" style={{ padding: "80px 16px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 34, marginBottom: 14 }}>How it works</h2>
        <p
          style={{
            maxWidth: 760,
            marginTop: 0,
            marginBottom: 32,
            fontSize: 18,
            lineHeight: 1.6,
            color: "#555",
          }}
        >
          No guesswork, no random extenders. We start with a clear Wi-Fi Health Check, then give you a practical plan
          to get stable coverage where you actually use it.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <Step
            n="1"
            title="Wi-Fi Health Check"
            text="We understand your space, your devices, and where the Wi-Fi fails. Then we pinpoint what’s causing the dropouts and dead zones."
          />
          <Step
            n="2"
            title="Fix the layout"
            text="We recommend better router / mesh placement and settings, and if needed, the right upgrades—so every room gets reliable coverage."
          />
          <Step
            n="3"
            title="Lock it in"
            text="We help you keep it stable: guest Wi-Fi, safer smart-home setup, and simple guidance so the network stays solid long-term."
          />
        </div>
      </div>
    </section>
  );
}