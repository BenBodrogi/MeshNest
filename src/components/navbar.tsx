"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useLang } from "../context/LanguageContext";
import { t } from "../lib/translations";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const NAV_ITEMS = [
    { label: t.navbar.problems[lang],    href: "/#problems" },
    { label: t.navbar.approach[lang],    href: "/#approach" },
    { label: t.navbar.services[lang],    href: "/#services" },
    { label: t.navbar.whyMeshNest[lang], href: "/#why-meshnest" },
    { label: t.navbar.contact[lang],     href: "/contact" },
    { label: t.navbar.pricing[lang],     href: "/pricing" },
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
      if (window.innerWidth > 1040) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const timer = setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "instant", block: "start" });
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    if (menuOpen && mobileNavRef.current) {
      setMenuHeight(mobileNavRef.current.scrollHeight);
    }
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function scrollToHash(href: string) {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;
    const hash = href.slice(hashIndex);
    setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "instant", block: "start" });
    }, 80);
  }

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
      aria-label="Primary navigation"
    >
      <div className={`container ${styles.inner}`}>
        <Link href="/#top" className={styles.brand} aria-label="MeshNest home">
          <Image
            src="/logo.svg"
            alt=""
            width={120}
            height={36}
            className={styles.logo}
            aria-hidden="true"
            priority
          />
          <span className={styles.brandStack}>
            <span className={styles.brandText}>MeshNest</span>
            <span className={styles.brandSub}>by Virdana</span>
          </span>
        </Link>

        <div className={styles.links}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={!item.href.includes("#")}
              onClick={() => scrollToHash(item.href)}
              className={styles.navLink}
            >
              {item.label}
            </Link>
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

          <Link href="/contact" className="btn btnPrimary">
            {t.navbar.cta[lang]}
          </Link>

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

      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        style={menuOpen ? { maxHeight: `${menuHeight + 32}px` } : undefined}
      >
        <div className="container">
          <div className={styles.mobileNav} ref={mobileNavRef}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                scroll={!item.href.includes("#")}
                className={styles.mobileNavLink}
                onClick={() => {
                  closeMenu();
                  scrollToHash(item.href);
                }}
              >
                {item.label}
              </Link>
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

            <Link
              href="/contact"
              className={`btn btnPrimary ${styles.mobileCta}`}
              onClick={closeMenu}
            >
              {t.navbar.cta[lang]}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
