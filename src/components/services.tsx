function ServiceCard({
  title,
  price,
  bullets,
}: {
  title: string;
  price: string;
  bullets: string[];
}) {
  return (
    <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
      <h3 style={{ margin: "0 0 6px", fontSize: 18 }}>{title}</h3>
      <div style={{ fontWeight: 700, marginBottom: 10 }}>{price}</div>
      <ul style={{ margin: 0, paddingLeft: 18, color: "#333" }}>
        {bullets.map((b) => (
          <li key={b} style={{ marginBottom: 6 }}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ padding: "40px 16px", background: "#fafafa" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28, marginBottom: 12 }}>Services</h2>
        <p style={{ maxWidth: 760, marginTop: 0, marginBottom: 18 }}>
          Transparent packages. Custom quotes available for complex homes and small businesses.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
          <ServiceCard
            title="Network Optimization"
            price="From 39,000 HUF"
            bullets={[
              "Audit + cleanup",
              "Coverage and performance improvements",
              "Device and router configuration sanity check",
            ]}
          />
          <ServiceCard
            title="Smart Network Upgrade"
            price="From 120,000 HUF"
            bullets={[
              "Topology redesign",
              "Hardware selection + placement plan",
              "Secure configuration + segmentation basics",
            ]}
          />
          <ServiceCard
            title="MeshNest Digital Home"
            price="From 12,000 HUF / month"
            bullets={[
              "Monitoring + ongoing maintenance",
              "Security updates and health checks",
              "Priority support",
            ]}
          />
        </div>
      </div>
    </section>
  );
}