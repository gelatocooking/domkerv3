import Image from "next/image";
import Icon from "../Icon/Icon";
import styles from "./Footer.module.css";

const companyLinks = [
  { label: "Zapytaj o wycenę" },
  { label: "Zobacz realizacje" },
  { label: "Opinie klientów" },
  { label: "Usługi dla firm" },
];

const servicesLinks = [
  "Sprzątanie po budowie",
  "Maszynowe czyszczenie posadzek",
  "Mycie okien i witryn",
];

const shortcutLinks = [
  "Strona główna",
  "Realizacje",
  "Referencje / opinie",
  "Cennik / widełki",
  "Kontakt",
];

const socialLinks = [
  { name: "facebook", href: "#" },
  { name: "instagram", href: "#" },
  { name: "tiktok", href: "#" },
] as const;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.midFooter}>
          <div className={styles.brandCol}>
            <div className={styles.brandRow}>
              <span className={styles.logoMark}>
                <Image
                  src="/domker-logo.png"
                  alt="Domker"
                  fill
                  className={styles.logoImage}
                />
              </span>
              <span className={styles.brandName}>Domker</span>
            </div>
            <div className={styles.companyBlock}>
              <p className={styles.companyText}>
                Domker to poukładane procesy sprzątania - działamy na standardach
                kompetencji i raportujemy postępy prac, żeby chronić interes
                klienta.
              </p>
            </div>
            <div className={styles.companyBlock}>
              <p className={styles.companyName}>Fryderyk Ossoliński „Domker”</p>
              <p className={styles.companyText}>Akacjowa 7/2, 59-100 Polkowice</p>
              <p className={styles.companyText}>NIP: 5020127255, REGON: 528019172</p>
            </div>
            <p className={styles.companyName}>Bezpośredni kontakt</p>
            <div className={styles.contact}>
              <a className={styles.contactItem} href="mailto:uslugi@domker.pl">
                <span className={styles.contactIcon}>
                  <Icon name="mail" size="sm" />
                </span>
                <span className={styles.contactText}>uslugi@domker.pl</span>
              </a>
              <a className={styles.contactItem} href="tel:+48502992002">
                <span className={styles.contactIcon}>
                  <Icon name="phone" size="sm" />
                </span>
                <span className={styles.contactText}>+48 502 992 002</span>
              </a>
            </div>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.footerHeader}>Domker</h4>
            <ul className={styles.linkList}>
              {companyLinks.map((link) => (
                <li key={link.label} className={styles.linkItem}>
                  <a className={styles.link} href="#">
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.footerHeader}>Usługi dla firm</h4>
            <ul className={styles.linkList}>
              {servicesLinks.map((label) => (
                <li key={label} className={styles.linkItem}>
                  <a className={styles.link} href="#">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.footerHeader}>Na skróty</h4>
            <ul className={styles.linkList}>
              {shortcutLinks.map((label) => (
                <li key={label} className={styles.linkItem}>
                  <a className={styles.link} href="#">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottomFooter}>
          <span className={styles.bottomText}>Domker © 2026</span>
          <div className={styles.socials}>
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} className={styles.socialLink}>
                <Icon name={link.name} size="md" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
