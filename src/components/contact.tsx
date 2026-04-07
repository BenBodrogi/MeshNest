"use client";

import { useRef, useState } from "react";
import { useReveal } from "../app/hooks/useReveal";
import styles from "./contact.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { ref, isVisible } = useReveal();

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
  }

  return (
    <section
      id="contact"
      aria-label="Contact MeshNest"
      className={`section sectionDivider ${styles.section}`}
    >
      <div
        ref={ref}
        className={`container reveal ${isVisible ? "revealVisible" : ""}`}
      >
        <div className={styles.layout}>
          <div className={styles.intro}>
            <p className={styles.kicker}>Get in touch</p>
            <h2 className={styles.title}>Book a Wi-Fi audit</h2>
            <p className={styles.sub}>
              Tell MeshNest a bit about your space and what you’re trying to fix.
              You’ll get practical next steps and a rough estimate.
            </p>

            <ul className={styles.points}>
              <li>Usually reply within 24 hours</li>
              <li>No obligation consultation</li>
              <li>Serving Törökbálint & nearby areas</li>
            </ul>
          </div>

          {status === "success" ? (
            <div className={`surface ${styles.successCard}`}>
              <div className={styles.successTitle}>✅ Request sent</div>

              <div className={styles.successMessage}>
                {message || "Thanks! I’ll get back to you soon."}
              </div>

              <div className={styles.successMeta}>
                Typical response time: <strong>within 24 hours</strong>.
                <br />
                If it’s urgent, mention it in your next message and I’ll prioritize it.
              </div>

              <button
                type="button"
                onClick={resetForm}
                className={`btn btnPrimary ${styles.resetBtn}`}
              >
                Send another request
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className={`surface ${styles.form}`}
            >
              <label className={styles.honeypot}>
                Website
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>

              <label className={styles.field}>
                <span>Name</span>
                <input required name="name" />
              </label>

              <label className={styles.field}>
                <span>Email</span>
                <input required type="email" name="email" />
              </label>

              <label className={styles.field}>
                <span>Property type</span>
                <select name="propertyType">
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Small business</option>
                </select>
              </label>

              <label className={styles.field}>
                <span>Area (m²)</span>
                <input name="area" placeholder="e.g., 80" />
              </label>

              <label className={`${styles.field} ${styles.fullWidth}`}>
                <span>What issues are you facing?</span>
                <textarea name="issues" rows={4} />
              </label>

              <label className={`${styles.field} ${styles.fullWidth}`}>
                <span>Timeline</span>
                <select name="timeline">
                  <option>ASAP</option>
                  <option>1–2 weeks</option>
                  <option>Within a month</option>
                  <option>Just researching</option>
                </select>
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`btn btnPrimary ${styles.submitBtn}`}
              >
                {status === "sending" ? "Sending..." : "Send request"}
              </button>

              {status === "error" && message ? (
                <div className={styles.errorMessage}>{message}</div>
              ) : null}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}