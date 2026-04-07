"use client";

import { useEffect, useState } from "react";
import styles from "./navbar.module.css";

const NAV_ITEMS = [
  { label: "Problems", href: "#problems" },
  { label: "Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Why MeshNest", href: "#why-meshnest" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
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
          <span className={styles.brandMark} aria-hidden="true" />
          <span className={styles.brandText}>MeshNest</span>
        </a>

        <div className={styles.links}>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </div>

        <div className={styles.actions}>
          <a href="#contact" className="btn btnPrimary">
            Book a Health Check
          </a>

          <button
            type="button"
            className={styles.menuButton}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
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

            <a
              href="#contact"
              className={`btn btnPrimary ${styles.mobileCta}`}
              onClick={closeMenu}
            >
              Book a Health Check
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}