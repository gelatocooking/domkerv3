import Image from "next/image";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import styles from "./Header.module.css";

const navItems = [
  {
    label: "Usługi dla firm",
    href: "#",
    dropdownItems: [
      {
        icon: "megaphone",
        title: "Automatyzacja w sprzedaży i marketingu",
        description: "Zwiększenie efektywności działań",
      },
      {
        icon: "messageSquare",
        title: "Automatyzacja w obsłudze klienta",
        description: "Przyspieszanie obsługi i zwiększeniu satysfakcji klienta",
      },
      {
        icon: "fileText",
        title: "Automatyzacja w administracji",
        description: "Lepsze zarządzanie firmowymi dokumentami i raportami",
      },
      {
        icon: "users",
        title: "Automatyzacja w rekrutacji i HR",
        description: "Usprawnianie obiegu dokumentów i optymalizacja procesów",
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
        <div className={styles.navArea}>
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
                            <a href="#" className={styles.dropdownItem}>
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
        <span className={styles.menuIcon}>
          <Icon name="menu" size="md" />
        </span>
      </div>
    </header>
  );
}
