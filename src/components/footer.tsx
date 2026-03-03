export default function Footer() {
  return (
    <footer style={{ padding: "28px 16px", borderTop: "1px solid #eee", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontWeight: 700 }}>MeshNest</div>
          <div style={{ color: "#666", fontSize: 14 }}>Home networking • Hungary</div>
        </div>

        <div style={{ color: "#666", fontSize: 14 }}>
          © {new Date().getFullYear()} MeshNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
}