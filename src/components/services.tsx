function ServiceCard({
  title,
  price,
  bullets,
  badge,
}: {
  title: string;
  price: string;
  bullets: string[];
  badge?: string;
}) {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 14,
        padding: 20,
        background: "#fff",
        position: "relative",
      }}
    >
      {badge ? (
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            fontSize: 12,
            fontWeight: 800,
            padding: "6px 10px",
            borderRadius: 999,
            background: "#111",
            color: "#fff",
          }}
        >
          {badge}
        </div>
      ) : null}

      <h3 style={{ margin: "0 0 8px", fontSize: 20 }}>{title}</h3>
      <div style={{ fontWeight: 800, marginBottom: 12 }}>{price}</div>

      <ul style={{ margin: 0, paddingLeft: 18, color: "#444", lineHeight: 1.6 }}>
        {bullets.map((b) => (
          <li key={b} style={{ marginBottom: 8 }}>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ padding: "80px 16px", background: "#f7f7f7" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 34, marginBottom: 14 }}>Services & packages</h2>

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
          Clear packages for most homes. If you have a complex setup (thick walls, multiple floors, many devices, or a
          small business), we’ll tailor a plan.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <ServiceCard
            title="Wi-Fi Health Check"
            price="From 39,000 HUF"
            bullets={[
              "Pinpoint dead zones and the cause of dropouts",
              "Practical fixes: placement + settings recommendations",
              "Simple security sanity check (guest Wi-Fi, router basics)",
            ]}
          />

          <ServiceCard
            title="Home Wi-Fi Upgrade Plan"
            price="From 120,000 HUF"
            badge="Most popular"
            bullets={[
              "Full coverage plan for your space (room-by-room)",
              "Hardware recommendations (router / mesh) + placement map",
              "Clean setup: safer smart-home basics + network separation (if needed)",
            ]}
          />

          <ServiceCard
            title="Care Plan"
            price="From 12,000 HUF / month"
            bullets={[
              "Ongoing check-ins and stability monitoring",
              "Security updates + quick health checks",
              "Priority support when something breaks",
            ]}
          />
        </div>
      </div>
    </section>
  );
}