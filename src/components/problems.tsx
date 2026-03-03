function Card({ title, text }: { title: string; text: string }) {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 14,
        padding: 20,
        background: "#fff",
      }}
    >
      <h3 style={{ margin: "0 0 10px", fontSize: 20 }}>
        {title}
      </h3>
      <p style={{ margin: 0, color: "#444", lineHeight: 1.6 }}>
        {text}
      </p>
    </div>
  );
}

export default function Problems() {
  return (
    <section
      id="about"
      style={{ padding: "80px 16px", background: "#f7f7f7" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 34, marginBottom: 14 }}>
          Does any of this sound familiar?
        </h2>

        <p
          style={{
            maxWidth: 720,
            marginTop: 0,
            marginBottom: 32,
            fontSize: 18,
            lineHeight: 1.6,
            color: "#555",
          }}
        >
          Most Wi-Fi problems aren’t about your internet plan — they’re about
          poor setup, bad placement, or networks that were never designed
          properly in the first place.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <Card
            title="Wi-Fi drops during calls or meetings"
            text="Video freezes. Audio cuts out. You move rooms and the signal collapses. It shouldn’t be this fragile."
          />

          <Card
            title="Dead zones in parts of your home"
            text="Bedrooms, terraces, upstairs offices — certain areas just don’t work properly no matter what you try."
          />

          <Card
            title="Too many devices, not enough stability"
            text="Smart TVs, phones, laptops, cameras, consoles — everything competes for bandwidth and performance suffers."
          />
        </div>
      </div>
    </section>
  );
}