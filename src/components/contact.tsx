"use client";

import { useRef, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setMessage("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data?.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setMessage("Request received. I’ll get back to you soon.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  function resetForm() {
    setStatus("idle");
    setMessage("");
    formRef.current?.reset();
    // Optional: scroll form into view again
    // formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const cardStyle: React.CSSProperties = {
    border: "1px solid #eee",
    borderRadius: 12,
    padding: 16,
  };

  return (
    <section id="contact" style={{ padding: "40px 16px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28, marginBottom: 8 }}>Book an audit</h2>
        <p style={{ marginTop: 0, marginBottom: 18, maxWidth: 760, color: "#333" }}>
          Tell me a bit about your space and what you’re trying to fix. I’ll reply with next steps and a rough estimate.
        </p>

        {/* SUCCESS STATE: replace form with a confirmation card */}
        {status === "success" ? (
          <div style={cardStyle}>
            <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 6 }}>
              ✅ Request sent
            </div>

            <div style={{ color: "#0a7a2f", fontWeight: 600, marginBottom: 10 }}>
              {message || "Thanks! I’ll get back to you soon."}
            </div>

            <div style={{ color: "#555", marginBottom: 14 }}>
              Typical response time: <strong>within 24 hours</strong>.
              <br />
              If it’s urgent, mention it in the next message and I’ll prioritize it.
            </div>

            <button
              type="button"
              onClick={resetForm}
              style={{
                padding: "10px 14px",
                borderRadius: 10,
                background: "#111",
                color: "#fff",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
              }}
            >
              Send another request
            </button>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={onSubmit}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 12,
              border: "1px solid #eee",
              borderRadius: 12,
              padding: 16,
            }}
          >
            {/* Honeypot: keep hidden. Bots fill it. */}
            <label style={{ display: "none" }}>
              Website
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>

            <label style={{ display: "grid", gap: 6 }}>
              Name
              <input
                required
                name="name"
                style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd" }}
              />
            </label>

            <label style={{ display: "grid", gap: 6 }}>
              Email
              <input
                required
                type="email"
                name="email"
                style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd" }}
              />
            </label>

            <label style={{ display: "grid", gap: 6 }}>
              Property type
              <select
                name="propertyType"
                style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd" }}
              >
                <option>Apartment</option>
                <option>House</option>
                <option>Small business</option>
              </select>
            </label>

            <label style={{ display: "grid", gap: 6 }}>
              Area (m²)
              <input
                name="area"
                placeholder="e.g., 80"
                style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd" }}
              />
            </label>

            <label style={{ display: "grid", gap: 6, gridColumn: "1 / -1" }}>
              What issues are you facing?
              <textarea
                name="issues"
                rows={4}
                style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd" }}
              />
            </label>

            <label style={{ display: "grid", gap: 6, gridColumn: "1 / -1" }}>
              Timeline
              <select
                name="timeline"
                style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd" }}
              >
                <option>ASAP</option>
                <option>1–2 weeks</option>
                <option>Within a month</option>
                <option>Just researching</option>
              </select>
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                gridColumn: "1 / -1",
                padding: "10px 14px",
                borderRadius: 10,
                background: "#111",
                color: "#fff",
                fontWeight: 700,
                border: "none",
                cursor: status === "sending" ? "not-allowed" : "pointer",
                opacity: status === "sending" ? 0.7 : 1,
              }}
            >
              {status === "sending" ? "Sending..." : "Send request"}
            </button>

            {/* ERROR STATE: keep inline message */}
            {status === "error" && message ? (
              <div style={{ gridColumn: "1 / -1", fontWeight: 600, color: "#b00020" }}>
                {message}
              </div>
            ) : null}
          </form>
        )}
      </div>
    </section>
  );
}