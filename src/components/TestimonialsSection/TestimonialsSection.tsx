import SectionKicker from "../SectionKicker/SectionKicker";
import Icon from "../Icon/Icon";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    text:
      "Let's automate wzięło pełną odpowiedzialność za projekt i dowiozło go do końca. To właśnie podejście do współpracy i zaangażowanie sprawiły, że zdecydowaliśmy się powierzyć im również kolejny, znacznie większy projekt (...).",
    name: "Jakub Ciołkowski",
    role: "Członek Zarządu w NARS Polska",
  },
  {
    text:
      "Z Let's Automate z sukcesem zrealizowaliśmy pierwszą automatyzację w naszej firmie, z której jesteśmy bardzo zadowoleni. Kompleksowo wdrożyli automatyzacje zgodnie z naszymi potrzebami.",
    name: "Maciej Olszowy",
    role: "Partner Zarządzający w GRANTS.CAPITAL",
  },
  {
    text:
      "Let's automate wzięło pełną odpowiedzialność za projekt i dowiozło go do końca. To właśnie podejście do współpracy i zaangażowanie sprawiły, że zdecydowaliśmy się powierzyć im również kolejny, znacznie większy projekt (...).",
    name: "Arkadiusz Andrzejewski",
    role: "Prezes Zarządu w Plastiwell",
  },
  {
    text:
      "Let'si trafili w niszę i robią dobrą robotę w obszarze automatyzacji procesów. Realizowali dla mnie integracje wokół CRM, z których działania jestem bardzo zadowolony. Szczegółowo zmapowali potrzeby i je wdrożyli.",
    name: "Rafał Kieszkowski",
    role: "Business Development Manager w PayPo",
  },
] as const;

const stars = Array.from({ length: 5 });

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headingGroup}>
          <SectionKicker label="OPINIE KLIENTÓW" />
          <h2 className={styles.title}>Co mówią inni o Let's Automate?</h2>
          <p className={styles.subtitle}>
            Nasi klienci doceniają konkretne efekty wdrażanych rozwiązań. Zobacz,
            jak automatyzacja procesów wpłynęła na rozwój ich firm.
          </p>
        </div>

        <div className={styles.controls}>
          <button type="button" className={styles.controlButton} aria-label="Wstecz">
            <Icon name="arrowRight" size="sm" className={styles.controlIconLeft} />
          </button>
          <button type="button" className={styles.controlButton} aria-label="Dalej">
            <Icon name="arrowRight" size="sm" />
          </button>
        </div>

        <div className={styles.cards}>
          {testimonials.map((item) => (
            <article key={item.name} className={styles.card}>
              <div className={styles.stars}>
                {stars.map((_, index) => (
                  <span key={index} className={styles.star}>
                    <Icon name="star" size="sm" />
                  </span>
                ))}
              </div>
              <p className={styles.text}>{item.text}</p>
              <div className={styles.author}>
                <span className={styles.name}>{item.name}</span>
                <span className={styles.role}>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
