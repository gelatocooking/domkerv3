import Image from "next/image";
import Icon from "../Icon/Icon";
import SectionKicker from "../SectionKicker/SectionKicker";
import styles from "./HighlightsSection.module.css";

const bubbles = [
  { text: "Nie wiem, jak...", className: "bubbleLeft" },
  { text: "Blokuje nas...", className: "bubbleTop" },
  { text: "Nie da się...", className: "bubbleRight" },
  { text: "Mamy dość...", className: "bubbleBottom" },
] as const;

const team = [
  { name: "Daniel Angielczyk", role: "Automation Developer" },
  { name: "Wiktoria Radniecka", role: "Project Manager" },
  { name: "Damian Trzciński", role: "Business Automation Analyst" },
] as const;

const highlights = [
  {
    title: "Najpierw biznes, potem technologia",
    text:
      "Nie rzucamy się od razu na technologię. Nasz proces zawsze startuje od wnikliwej analizy Twoich potrzeb, celów i istniejących procesów, prowadzonej przez doświadczonych analityków biznesowych. Dopiero dogłębne zrozumienie Twojego świata pozwala nam zaprojektować rozwiązanie, które naprawdę zadziała i przyniesie niesamowite rezultaty.",
    visual: "insights",
  },
] as const;

export default function HighlightsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headingGroup}>
          <SectionKicker label="NASZE WYRÓŻNIKI" />
          <h2 className={styles.title}>
            <span className={styles.titleLine}>
              Co stoi za skutecznymi wdrożeniami
            </span>
            <span className={styles.titleLine}>Let's Automate?</span>
          </h2>
          <p className={styles.subtitle}>
            Rezultaty, które dowozimy, to efekt połączenia zrozumienia Twojego
            biznesu, kompetencji zespołu i celowego użycia technologii.
          </p>
        </div>

        <div className={styles.cards}>
          {highlights.map((item) => (
            <div key={item.title} className={styles.cardWrap}>
              <article className={styles.card}>
                <div className={styles.textBlock}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.text}</p>
                </div>

                {item.visual === "insights" ? (
                  <div className={styles.visual}>
                    <div className={styles.trendLine} aria-hidden="true" />
                    <div className={styles.consultation}>
                      <span className={styles.leafIcon}>
                        <Icon name="chevronsRight" size="sm" />
                      </span>
                      <span className={styles.consultationText}>KONSULTACJA</span>
                    </div>
                    <div className={styles.callout}>
                      Wiemy, jak działać i nie mamy blokad w rozwoju
                    </div>
                    {bubbles.map((bubble) => (
                      <div
                        key={bubble.text}
                        className={`${styles.bubble} ${styles[bubble.className]}`}
                      >
                        {bubble.text}
                      </div>
                    ))}
                  </div>
                ) : null}
{/* 
                {item.visual === "team" ? (
                  <div className={styles.visualTeam}>
                    {team.map((member, index) => (
                      <div
                        key={member.name}
                        className={`${styles.profileCard} ${styles[`profile${index + 1}`]}`}
                      >
                        <span className={styles.profileAvatar} aria-hidden="true">
                          {member.name.charAt(0)}
                        </span>
                        <div className={styles.profileInfo}>
                          <span className={styles.profileName}>{member.name}</span>
                          <span className={styles.profileRole}>{member.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}

                {item.visual === "dashboard" ? (
                  <div className={styles.visualDashboard}>
                    <div className={styles.dashboardFrame}>
                      <Image
                        src="/window.svg"
                        alt="Podgląd systemu"
                        fill
                        className={styles.dashboardImage}
                      />
                    </div>
                  </div>
                ) : null} */}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
