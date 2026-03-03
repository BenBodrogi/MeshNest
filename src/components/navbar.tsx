export default function Navbar() {
  return (
    <header
      id="top"
      style={{
        position: "sticky",
        top: 0,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #eee",
        zIndex: 50,
      }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 16px",
          display: "flex",
          gap: 14,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#top"
          style={{
            fontWeight: 800,
            letterSpacing: 0.2,
            display: "flex",
            alignItems: "baseline",
            gap: 10,
          }}
        >
          MeshNest
          <span style={{ fontSize: 12, fontWeight: 600, opacity: 0.6 }}>
            Smarter Wi-Fi
          </span>
        </a>

        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="#services" style={{ fontWeight: 600 }}>
            Services
          </a>
          <a href="#plan" style={{ fontWeight: 600 }}>
            How it works
          </a>
          <a href="#about" style={{ fontWeight: 600 }}>
            Problems
          </a>
          <a href="#contact" style={{ fontWeight: 600 }}>
            Contact
          </a>

          <a
            href="#contact"
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              background: "#111",
              color: "#fff",
              fontWeight: 800,
              border: "1px solid #111",
              whiteSpace: "nowrap",
            }}
          >
            Book a Wi-Fi Health Check
          </a>
        </div>
      </nav>
    </header>
  );
}