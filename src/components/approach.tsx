function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
      <div style={{ fontSize: 12, color: "#666", marginBottom: 6 }}>Step {n}</div>
      <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>{title}</h3>
      <p style={{ margin: 0, color: "#333" }}>{text}</p>
    </div>
  );
}

export default function Approach() {
  return (
    <section id="plan" style={{ padding: "40px 16px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28, marginBottom: 12 }}>Our approach</h2>
        <p style={{ maxWidth: 760, marginTop: 0, marginBottom: 18 }}>
          We don’t just “boost Wi-Fi.” We design a layered network that’s stable, secure, and maintainable.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
          <Step n="1" title="Planning & audit" text="We map your space, devices, and requirements to design the right topology." />
          <Step n="2" title="Layered network build" text="Structured wiring, Wi-Fi placement, routing, and reliability improvements." />
          <Step n="3" title="Separation & ongoing care" text="Guest/IoT segmentation, monitoring, updates, and support options." />
        </div>
      </div>
    </section>
  );
}