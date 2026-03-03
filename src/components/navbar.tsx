export default function Navbar() {
  return (
    <header id="top" style={{ position: "sticky", top: 0, background: "#fff", borderBottom: "1px solid #eee", zIndex: 50 }}>
      <nav style={{ maxWidth: 1100, margin: "0 auto", padding: "14px 16px", display: "flex", gap: 14, alignItems: "center", justifyContent: "space-between" }}>
        <a href="#top" style={{ fontWeight: 700 }}>MeshNest</a>

        <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          <a href="#services">Services</a>
          <a href="#plan">Plan</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#contact" style={{ padding: "8px 12px", border: "1px solid #111", borderRadius: 8, fontWeight: 600 }}>
            Book Audit
          </a>
        </div>
      </nav>
    </header>
  );
}