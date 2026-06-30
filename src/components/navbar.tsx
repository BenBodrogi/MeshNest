"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import { useLang } from "../context/LanguageContext";
import { t } from "../lib/translations";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const NAV_ITEMS = [
    { label: t.navbar.problems[lang],    href: "#problems" },
    { label: t.navbar.approach[lang],    href: "#approach" },
    { label: t.navbar.services[lang],    href: "#services" },
    { label: t.navbar.whyMeshNest[lang], href: "#why-meshnest" },
    { label: t.navbar.contact[lang],     href: "#contact" },
  ];

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 900) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
      aria-label="Primary navigation"
    >
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} aria-label="MeshNest home">
          <Image
            src="/logo.svg"
            alt=""
            width={120}
            height={36}
            className={styles.logo}
            aria-hidden="true"
          />
          <span className={styles.brandStack}>
            <span className={styles.brandText}>MeshNest</span>
            <span className={styles.brandSub}>by Virdana</span>
          </span>
        </a>

        <div className={styles.links}>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </div>

        <div className={styles.actions}>
          <div className={styles.langToggle} aria-label="Language selector">
            <button
              type="button"
              className={`${styles.langBtn} ${lang === "hu" ? styles.langBtnActive : ""}`}
              onClick={() => setLang("hu")}
              aria-pressed={lang === "hu"}
            >
              HU
            </button>
            <span className={styles.langDivider} aria-hidden="true">|</span>
            <button
              type="button"
              className={`${styles.langBtn} ${lang === "en" ? styles.langBtnActive : ""}`}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          <a href="#contact" className="btn btnPrimary">
            {t.navbar.cta[lang]}
          </a>

          <button
            type="button"
            className={styles.menuButton}
            aria-label={menuOpen ? t.navbar.closeMenu[lang] : t.navbar.openMenu[lang]}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className="container">
          <div className={styles.mobileNav}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}

            <div className={styles.mobileLangToggle} aria-label="Language selector">
              <button
                type="button"
                className={`${styles.langBtn} ${lang === "hu" ? styles.langBtnActive : ""}`}
                onClick={() => setLang("hu")}
                aria-pressed={lang === "hu"}
              >
                HU
              </button>
              <span className={styles.langDivider} aria-hidden="true">|</span>
              <button
                type="button"
                className={`${styles.langBtn} ${lang === "en" ? styles.langBtnActive : ""}`}
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
            </div>

            <a
              href="#contact"
              className={`btn btnPrimary ${styles.mobileCta}`}
              onClick={closeMenu}
            >
              {t.navbar.cta[lang]}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
