"use client";

import { useRef, useState } from "react";
import { useReveal } from "../app/hooks/useReveal";
import styles from "./contact.module.css";
import { useLang } from "../context/LanguageContext";
import { t } from "../lib/translations";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { ref, isVisible } = useReveal();
  const { lang } = useLang();
  const c = t.contact;

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
        setMessage(data?.error || c.errGeneric[lang]);
        return;
      }

      setStatus("success");
      setMessage(c.successApiMsg[lang]);
      form.reset();
    } catch {
      setStatus("error");
      setMessage(c.errNetwork[lang]);
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
            <p className={styles.kicker}>{c.kicker[lang]}</p>
            <h2 className={styles.title}>{c.title[lang]}</h2>
            <p className={styles.sub}>{c.sub[lang]}</p>

            <ul className={styles.points}>
              <li>{c.point1[lang]}</li>
              <li>{c.point2[lang]}</li>
              <li>{c.point3[lang]}</li>
            </ul>
          </div>

          {status === "success" ? (
            <div className={`surface ${styles.successCard}`}>
              <div className={styles.successTitle}>{c.successTitle[lang]}</div>

              <div className={styles.successMessage}>
                {message || c.successMsg[lang]}
              </div>

              <div className={styles.successMeta}>
                {c.successMeta[lang]}
              </div>

              <button
                type="button"
                onClick={resetForm}
                className={`btn btnPrimary ${styles.resetBtn}`}
              >
                {c.sendAnother[lang]}
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
                <span>{c.fieldName[lang]}</span>
                <input required name="name" />
              </label>

              <label className={styles.field}>
                <span>{c.fieldEmail[lang]}</span>
                <input required type="email" name="email" />
              </label>

              <label className={styles.field}>
                <span>{c.fieldProperty[lang]}</span>
                <select name="propertyType">
                  <option>{c.optApartment[lang]}</option>
                  <option>{c.optHouse[lang]}</option>
                  <option>{c.optBusiness[lang]}</option>
                </select>
              </label>

              <label className={styles.field}>
                <span>{c.fieldArea[lang]}</span>
                <input name="area" placeholder={c.areaPlaceholder[lang]} />
              </label>

              <label className={`${styles.field} ${styles.fullWidth}`}>
                <span>{c.fieldIssues[lang]}</span>
                <textarea name="issues" rows={4} />
              </label>

              <label className={`${styles.field} ${styles.fullWidth}`}>
                <span>{c.fieldTimeline[lang]}</span>
                <select name="timeline">
                  <option>{c.optAsap[lang]}</option>
                  <option>{c.opt1to2weeks[lang]}</option>
                  <option>{c.optMonth[lang]}</option>
                  <option>{c.optResearching[lang]}</option>
                </select>
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`btn btnPrimary ${styles.submitBtn}`}
              >
                {status === "sending" ? c.sending[lang] : c.submit[lang]}
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
