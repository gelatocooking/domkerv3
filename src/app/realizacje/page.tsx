import CaseSection, {
  type CaseSectionContent,
} from "@/components/CaseSection/CaseSection";
import ContactSection, {
  type ContactSectionContent,
} from "../../components/ContactSection/ContactSection";
import CtaSection, { type CtaSectionContent } from "../../components/CtaSection/CtaSection";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PagesHero, { type PagesHeroContent } from "../../components/PagesHero/PagesHero";
import styles from "./page.module.css";

const defaultContent: PagesHeroContent = {
  badge: "WYBRANE REALIZACJE",
  titleLines: [
    "Scenariusze wsp\u00f3\u0142pracy",
    "z r\u00f3\u017cnych typ\u00f3w obiekt\u00f3w",
  ],
  description:
    "Poni\u017cej pokazujemy przyk\u0142ady realizacji z r\u00f3\u017cnych typ\u00f3w obiekt\u00f3w i us\u0142ug. Kr\u00f3tko: jaki by\u0142 kontekst, co trzeba by\u0142o zrobi\u0107 i jaki efekt zosta\u0142 dowieziony.",
  ctaLabel: "Om\u00f3w podobny przypadek",
};

const casesContent: CaseSectionContent = {
  kickerLabel: "WYBRANE REALIZACJE",
  titleLines: [
    "Wybrane realizacje",
    "z r\u00f3\u017cnych scenariuszy wsp\u00f3\u0142pracy",
  ],
  description:
    "Przyk\u0142ady s\u0105 u\u0142o\u017cone w tym samym rytmie: kontekst, zakres, rezultat i dalszy krok. Dzi\u0119ki temu \u0142atwiej por\u00f3wna\u0107 je do w\u0142asnej sytuacji.",
  items: [
    {
      typeLabel: "Sprz\u0105tanie po budowie",
      title: "Lokal us\u0142ugowy przygotowany\n do odbioru i otwarcia",
      context: [
        "Obiekt po pracach wyko\u0144czeniowych i monta\u017cowych.",
        "Kr\u00f3tkie okno wej\u015bcia przed odbiorem.",
        "Widoczny py\u0142, \u015blady po zabezpieczeniach i zabrudzenia na detalach.",
        "Do dopi\u0119cia przeszklenia, komunikacja i strefy oceniane na ko\u0144cu.",
      ],
      scope: [
        "Usuni\u0119cie py\u0142u technologicznego.",
        "Doczyszczenie detali wyko\u0144czeniowych.",
        "Mycie przeszkle\u0144 i element\u00f3w pod \u015bwiat\u0142o.",
        "Usuni\u0119cie \u015blad\u00f3w po foliach i zabezpieczeniach.",
        "Przygotowanie obiektu pod finalny obch\u00f3d.",
      ],
      resultLead:
        "Obiekt przygotowany do odbioru bez dok\u0142adania chaosu na ko\u0144c\u00f3wce.",
      resultText:
        "Klient dosta\u0142 przestrze\u0144 uporz\u0105dkowan\u0105 pod finalne sprawdzenie, z domkni\u0119tymi strefami krytycznymi i efektem gotowym do dalszego procedowania.",
      ctaLabel: "Mam podobn\u0105 sytuacj\u0119",
      media: {
        src: "/tlo.png",
        alt: "Realizacja sprz\u0105tania po budowie",
      },
    },
    {
      typeLabel: "Sprz\u0105tanie cykliczne",
      title: "Sta\u0142a obs\u0142uga biura ustawiona\n w przewidywalnym rytmie",
      context: [
        "Biuro wymagaj\u0105ce regularnego serwisu bez anga\u017cowania zespo\u0142u w codzienne pilnowanie.",
        "Potrzeba utrzymania sta\u0142ego standardu w cz\u0119\u015bciach wsp\u00f3lnych i strefach pracy.",
        "Wa\u017cny przewidywalny harmonogram i prosty kontakt po stronie wykonawcy.",
        "Wsp\u00f3\u0142praca mia\u0142a dzia\u0142a\u0107 w tle, bez ci\u0105g\u0142ego wracania do ustale\u0144.",
      ],
      scope: [
        "Regularne sprz\u0105tanie stref biurowych.",
        "Utrzymanie cz\u0119\u015bci wsp\u00f3lnych i zaplecza.",
        "Harmonogram dopasowany do rytmu pracy obiektu.",
        "Sta\u0142y model wsp\u00f3\u0142pracy i komunikacji.",
        "Bie\u017c\u0105ce reagowanie na potrzeby po stronie klienta.",
      ],
      resultLead:
        "Serwis, kt\u00f3ry dzia\u0142a regularnie i nie wymaga ci\u0105g\u0142ego przypominania o podstawach.",
      resultText:
        "Klient zyska\u0142 przewidywaln\u0105 obs\u0142ug\u0119, stabilny poziom wykonania i prostsze zarz\u0105dzanie czysto\u015bci\u0105 w obiekcie.",
      ctaLabel: "Chc\u0119 ustawi\u0107 sta\u0142\u0105 obs\u0142ug\u0119",
      media: {
        src: "/tlo.png",
        alt: "Realizacja sta\u0142ej obs\u0142ugi biura",
      },
      reverseOnDesktop: true,
    },
    {
      typeLabel: "Maszynowe czyszczenie posadzek",
      title: "Doczyszczenie nawierzchni dobrane \n do typu posadzki i zabrudze\u0144",
      context: [
        "Obiekt komercyjny z posadzk\u0105 wymagaj\u0105c\u0105 wi\u0119cej ni\u017c standardowego mycia.",
        "Widoczne osady, zabrudzenia eksploatacyjne albo pozosta\u0142o\u015bci po pracach.",
        "Potrzeba poprawy efektu bez ryzyka dla nawierzchni.",
        "Kluczowe by\u0142o w\u0142a\u015bciwe rozpoznanie materia\u0142u i dob\u00f3r procesu.",
      ],
      scope: [
        "Kwalifikacja typu posadzki.",
        "Ocena rodzaju i skali zabrudze\u0144.",
        "Dob\u00f3r technologii do nawierzchni.",
        "Maszynowe doczyszczanie powierzchni.",
        "Przeprowadzenie us\u0142ugi w warunkach dopasowanych do obiektu.",
      ],
      resultLead:
        "Posadzka wyra\u017anie poprawiona bez przypadkowego dzia\u0142ania na materiale.",
      resultText:
        "Klient dosta\u0142 us\u0142ug\u0119 opart\u0105 na w\u0142a\u015bciwej metodzie, z efektem dopasowanym do stanu nawierzchni i realnych mo\u017cliwo\u015bci jej od\u015bwie\u017cenia.",
      ctaLabel: "Mam podobn\u0105 posadzk\u0119",
      media: {
        src: "/tlo.png",
        alt: "Realizacja maszynowego czyszczenia posadzek",
      },
    },
  ],
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "MASZ PODOBNY PRZYPADEK?",
  title: "Opisz obiekt, termin i kontekst, a dobierzemy w\u0142a\u015bciwy scenariusz",
  description:
    "Nie musisz mie\u0107 gotowego briefu. Wystarczy typ obiektu, lokalizacja, termin i kilka zda\u0144 o sytuacji. Je\u015bli masz zdj\u0119cia, do\u0142\u0105cz je od razu.",
  buttonLabel: "Napisz do nas",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const contactContent: ContactSectionContent = {
  kickerLabel: "SKONTAKTUJ SI\u0118",
  title: "Napisz, czego dotyczy temat, a poprowadzimy Ci\u0119 dalej",
  description:
    "Opisz sytuacj\u0119 jednym zdaniem. Je\u015bli chodzi o jeden obiekt, podaj typ, lokalizacj\u0119 i termin. Je\u015bli temat dotyczy kilku punkt\u00f3w, dopisz liczb\u0119 lokalizacji i miasta.",
  chips: [
    { label: "Dob\u00f3r scenariusza" },
    { label: "Jeden kontakt" },
    { label: "Jasna \u015bcie\u017cka" },
    { label: "Szybka kwalifikacja" },
    { label: "Zasi\u0119g og\u00f3lnopolski" },
    { label: "Konkretna odpowied\u017a", accent: true },
  ],
  form: {
    emailLabel: "Adres e-mail",
    emailPlaceholder: "Tw\u00f3j adres e-mail",
    phoneLabel: "Numer telefonu",
    phonePlaceholder: "Tw\u00f3j numer telefonu",
    topicLabel: "Temat rozmowy",
    topicPlaceholder: "Jaki obiekt, czego dotyczy zg\u0142oszenie i na kiedy",
    consentText:
      "Wyra\u017cam zgod\u0119 na przetwarzanie moich danych osobowych w celu obs\u0142ugi zg\u0142oszenia oraz na kontakt handlowy drog\u0105 elektroniczn\u0105 na podany adres e-mail. Polityka prywatno\u015bci.",
    submitLabel: "Wy\u015blij zg\u0142oszenie",
  },
  meta: {
    avatars: ["A", "B", "C", "D", "E", "F"],
    text: "Zesp\u00f3\u0142 operacyjny po stronie Domker",
  },
};

export default function RealizacjePage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <PagesHero content={defaultContent} />
        <CaseSection content={casesContent} />
        <CtaSection content={ctaContent} />
        <ContactSection content={contactContent} />
      </main>
      <Footer />
    </div>
  );
}
