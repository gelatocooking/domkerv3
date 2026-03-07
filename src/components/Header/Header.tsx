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
        children: [
          {
            label: "Dla kierownika budowy",
            href: "/sprzatanie-dla-firm/sprzatanie-po-budowie/dla-kierownika-budowy",
          },
        ],
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logoBox}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>
              <a href="/">
                <Image
                  src="/domker-logo.png"
                  alt="Domker logo"
                  fill
                  className={styles.logoImage}
                  priority
                />
              </a>
            </span>
          </div>
        </div>
        <div
          className={`${styles.navArea} ${menuOpen ? styles.navAreaOpen : ""}`}
          id="mobile-nav"
        >
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navItems.map((item) => {
                const isOpen = openDropdown === item.label;

                return (
                  <li
                    key={item.label}
                    className={`${styles.navItem} ${isOpen ? styles.navItemOpen : ""}`}
                  >
                    {item.dropdownItems.length ? (
                      <button
                        type="button"
                        className={styles.navToggleRow}
                        aria-expanded={isOpen}
                        onClick={() =>
                          setOpenDropdown((current) =>
                            current === item.label ? null : item.label
                          )
                        }
                      >
                        <span className={styles.navText}>{item.label}</span>
                        <span className={styles.navIcon}>
                          <Icon name="chevronDown" size="sm" />
                        </span>
                      </button>
                    ) : (
                      <a className={styles.navLink} href={item.href}>
                        <span className={styles.navText}>{item.label}</span>
                      </a>
                    )}
                    {item.dropdownItems.length ? (
                      <div className={styles.dropdown}>
                        <ul className={styles.dropdownList}>
                          {item.dropdownItems.map((entry) => (
                            <li key={entry.title}>
                              <div className={styles.dropdownItem}>
                                <span className={styles.dropdownIconWrap}>
                                  <Icon name={entry.icon} size="md" />
                                </span>
                                <span className={styles.dropdownContent}>
                                  <a href={entry.href} className={styles.dropdownMainLink}>
                                    <span className={styles.dropdownTitle}>
                                      {entry.title}
                                    </span>
                                    <span className={styles.dropdownDesc}>
                                      {entry.description}
                                    </span>
                                  </a>
                                  {entry.children?.length ? (
                                    <span className={styles.dropdownChildren}>
                                      {entry.children.map((child) => (
                                        <span
                                          key={child.href}
                                          className={styles.dropdownChildRow}
                                        >
                                          <a
                                            href={child.href}
                                            className={styles.dropdownChildLink}
                                          >
                                            {child.label}
                                          </a>
                                        </span>
                                      ))}
                                    </span>
                                  ) : null}
                                </span>
                                <span className={styles.dropdownArrow}>
                                  <a href={entry.href} className={styles.dropdownArrowLink}>
                                    <Icon name="arrowRight" size="md" />
                                  </a>
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </li>
                );
              })}
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
