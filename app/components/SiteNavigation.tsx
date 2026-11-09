"use client";

import { useEffect, useState } from "react";
import styles from "./SiteNavigation.module.css";

const links = [
  { href: "/", label: "Home", id: "home" },
  { href: "/our-world", label: "Our world", id: "world" },
  { href: "/our-world#little-escapes", label: "Little escapes", id: "little-escapes" },
  { href: "/our-world#everyday-us", label: "Everyday us", id: "everyday-us" },
  { href: "/our-world#next-chapter", label: "Next chapter", id: "next-chapter" },
  { href: "/our-world#letters", label: "Love letters", id: "letters" },
];

export default function SiteNavigation({ page, activeChapter = "" }: { page: "home" | "world"; activeChapter?: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("site-menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  const active = activeChapter || page;
  return (
    <header className={styles.header}>
      <nav className={styles.navigation} aria-label="Main navigation">
        <a className={styles.brand} href="/" aria-label="For Enzey, home"><span aria-hidden="true">♡</span> for Enzey</a>
        <button id="site-menu-toggle" className={styles.toggle} aria-expanded={open} aria-controls="site-navigation-links" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "×" : "☰"}</span></button>
        <div className={styles.links} id="site-navigation-links" data-open={open}>
          {links.map(link => <a key={link.id} href={link.href} aria-current={active === link.id ? (link.id === page ? "page" : "location") : undefined} onClick={() => setOpen(false)}>{link.label}<span className={styles.arrow} aria-hidden="true">↗</span></a>)}
        </div>
      </nav>
    </header>
  );
}
