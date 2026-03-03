"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
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
      setMessage("Thanks! I’ll get back to you soon.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" style={{ padding: "40px 16px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28, marginBottom: 12 }}>Book an audit</h2>

        <form
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
            <input required name="name" style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd" }} />
          </label>

          <label style={{ display: "grid", gap: 6 }}>
            Email
            <input required type="email" name="email" style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd" }} />
          </label>

          <label style={{ display: "grid", gap: 6 }}>
            Property type
            <select name="propertyType" style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd" }}>
              <option>Apartment</option>
              <option>House</option>
              <option>Small business</option>
            </select>
          </label>

          <label style={{ display: "grid", gap: 6 }}>
            Area (m²)
            <input name="area" placeholder="e.g., 80" style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd" }} />
          </label>

          <label style={{ display: "grid", gap: 6, gridColumn: "1 / -1" }}>
            What issues are you facing?
            <textarea name="issues" rows={4} style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd" }} />
          </label>

          <label style={{ display: "grid", gap: 6, gridColumn: "1 / -1" }}>
            Timeline
            <select name="timeline" style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd" }}>
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

          {message ? (
            <div style={{ gridColumn: "1 / -1", fontWeight: 600, color: status === "error" ? "#b00020" : "#0a7a2f" }}>
              {message}
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}