function Card({ title, text }: { title: string; text: string }) {
  return (
    <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
      <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>{title}</h3>
      <p style={{ margin: 0, color: "#333" }}>{text}</p>
    </div>
  );
}

export default function Problems() {
  return (
    <section id="about" style={{ padding: "40px 16px", background: "#fafafa" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28, marginBottom: 12 }}>Common problems we fix</h2>
        <p style={{ maxWidth: 700, marginTop: 0, marginBottom: 18 }}>
          If your network feels random, unstable, or hard to manage — it’s usually an architecture issue.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
          <Card title="Unreliable work connections" text="Dropouts, poor coverage, and inconsistent speeds when you need stability most." />
          <Card title="Security blind spots" text="Unknown devices, weak segmentation, and default configurations that invite risk." />
          <Card title="Overloaded networks" text="Too many devices + bad placement = congestion, buffering, and frustration." />
        </div>
      </div>
    </section>
  );
}