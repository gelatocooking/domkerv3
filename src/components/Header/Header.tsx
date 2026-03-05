"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import styles from "./Header.module.css";

const navItems = [
  {
    label: "Usługi dla firm",
    href: "/sprzatanie-dla-firm",
    dropdownItems: [
      {
        icon: "megaphone",
        title: "Sprzątanie po budowie",
        description: "Sprzątanie po budowie i remoncie dla firm",
        href: "/sprzatanie-dla-firm/sprzatanie-po-budowie",
      },
    
    ],
  },
  { label: "Referencje", href: "#", dropdownItems: [] },
  { label: "Realizacje", href: "#", dropdownItems: [] },
  { label: "Cennik", href: "#", dropdownItems: [] },
  { label: "FAQ", href: "#", dropdownItems: [] },
  { label: "Kontakt", href: "#", dropdownItems: [] },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logoBox}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>
              <Image
                src="/domker-logo.png"
                alt="Domker logo"
                fill
                className={styles.logoImage}
                priority
              />
            </span>
          </div>
        </div>
        <div
          className={`${styles.navArea} ${menuOpen ? styles.navAreaOpen : ""}`}
          id="mobile-nav"
        >
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.label} className={styles.navItem}>
                  <a className={styles.navLink} href={item.href}>
                    <span className={styles.navText}>{item.label}</span>
                    {item.dropdownItems.length ? (
                      <span className={styles.navIcon}>
                        <Icon name="chevronDown" size="sm" />
                      </span>
                    ) : null}
                  </a>
                  {item.dropdownItems.length ? (
                    <div className={styles.dropdown}>
                      <ul className={styles.dropdownList}>
                        {item.dropdownItems.map((entry) => (
                          <li key={entry.title}>
                            <a href={entry.href} className={styles.dropdownItem}>
                              <span className={styles.dropdownIconWrap}>
                                <Icon name={entry.icon} size="md" />
                              </span>
                              <span className={styles.dropdownContent}>
                                <span className={styles.dropdownTitle}>
                                  {entry.title}
                                </span>
                                <span className={styles.dropdownDesc}>
                                  {entry.description}
                                </span>
                              </span>
                              <span className={styles.dropdownArrow}>
                                <Icon name="arrowRight" size="sm" />
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <Button label="Bezpłatna konsultacja" iconName="arrowRight" />
        </div>
        <button
          className={styles.menuIcon}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name="menu" size="md" />
        </button>
      </div>
    </header>
  );
}
