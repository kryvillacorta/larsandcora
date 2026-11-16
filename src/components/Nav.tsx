"use client";

import { useState, useEffect } from "react";
import styles from "./Nav.module.css";

const links = [
  { href: "#details", label: "Details" },
  { href: "#dress-code", label: "Dress Code" },
  { href: "#rsvp", label: "RSVP" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        {/* Logo: public/images/lc-logo.png, tinted navy via CSS mask */}
        <a href="#" className={styles.logo} aria-label="Larwyn & Cora — back to top" />

        {/* Desktop */}
        <ul className={styles.desktopLinks}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className={styles.toggle}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`${styles.link} ${styles.mobileLink}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
