import Header from "../components/Header/Header";
import Hero, { type HeroContent } from "../components/Hero/Hero";
import SocialProof from "../components/SocialProof/SocialProof";
import ProblemsSection, {
  type ProblemsSectionContent,
} from "../components/ProblemsSection/ProblemsSection";
import SolutionsSection, {
  type SolutionsSectionContent,
} from "../components/SolutionsSection/SolutionsSection";
import ShowcaseSection, {
  type ShowcaseSectionContent,
} from "../components/ShowcaseSection/ShowcaseSection";
import CtaSection, { type CtaSectionContent } from "../components/CtaSection/CtaSection";
import HighlightsSection from "../components/HighlightsSection/HighlightsSection";
import KnowledgeSection, {
  type KnowledgeSectionContent,
} from "../components/KnowledgeSection/KnowledgeSection";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
import ContactSection, {
  type ContactSectionContent,
} from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import styles from "./page.module.css";

const defaultContent: HeroContent = {
  badge: "SPRZĄTANIE DLA FIRM I SIECI",
  titleLines: ["Sprzątanie pod odbiory", "i przekazanie obiektu"],
  emphasisText: "na czas",
  emphasisIconName: "lightbulb",
  emphasisSuffix: "/",
  description:
    "Domker realizuje sprzątanie po budowie i remontach oraz utrzymanie biur i lokali — dopasowujemy się do harmonogramu prac, chronimy nowe wykończenia i zostawiamy obiekt gotowy do odbioru; odpowiedź do 15 min, start nawet w 3 dni*.",
  ctaLabel: "Umów bezpłatną konsultację",
  imageSrc: "/tlo.png",
  imageAlt: "Sprzątanie pod odbiory",
};

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "ZNASZ TE WYZWANIA?",
  titleLines: ["Jeśli celem jest odbiór lub otwarcie,", "„czysto” to dopiero początek"],
  description:
    "W sprzątaniu po budowie rzadko przegrywa jakość — częściej organizacja. Gdy liczy się termin i standard, największe ryzyko jest w chaosie: ekipy, etapy, powierzchnie i odpowiedzialność.",
  items: [
    {
      iconName: "calendarClock",
      label: "TERMINY",
      title: "Odbiór blisko, a smugi i pył wychodzą dopiero w świetle dziennym",
      description:
        "Wieczorem wygląda OK, rano widać smugi na szybach i pył na detalach. Poprawki w ostatniej chwili kosztują czas i nerwy.",
      tone: "processes",
    },
    {
      iconName: "workflow",
      label: "CHAOS",
      title: "Sprzątanie „między robotami”, gdy ekipy wchodzą sobie w drogę",
      description:
        "Prace się przesuwają, ktoś wchodzi z materiałem, ktoś wierci. Bez planu i koordynacji wraca brud, a zakres się rozmywa.",
      tone: "processes",
    },
    {
      iconName: "shieldAlert",
      label: "RYZYKO",
      title: "Świeże powierzchnie łatwo uszkodzić złą chemią lub technologią",
      description:
        "Nowe posadzki, szyby, armatura i okucia nie wybaczają błędów. Zła chemia lub sprzęt = rysy, zmatowienia i reklamacje.",
      tone: "risk",
    },
    {
      iconName: "truck",
      label: "DOSTĘPNOŚĆ",
      title: "Podwykonawca nie odbiera, nie dojeżdża albo przesuwa termin",
      description:
        "Telefon milczy, ekipa nie przyjeżdża, a termin odbioru się nie przesuwa. Odpowiedzialność i tak spada na Ciebie.",
      tone: "resources",
    },
    {
      iconName: "clipboardCheck",
      label: "ODBIÓR",
      title: "Brak przewidywalności: nie wiadomo co jest „gotowe do odbioru”",
      description:
        "Bez jasnego zakresu i standardu każdy widzi „czysto” inaczej. Odbiór zamienia się w rundy uwag i dopisek do protokołu.",
      tone: "data",
    },
    {
      iconName: "route",
      label: "PROCES",
      title: "Brak domknięcia etapu: zakres → termin → realizacja → odbiór",
      description:
        "Gdy nie ma procesu, wszystko dzieje się ad hoc. My porządkujemy etap i dowozimy go do końca: plan, wykonanie i odbiór.",
      tone: "technology",
    },
  ],
};

const solutionsContent: SolutionsSectionContent = {
  kickerLabel: "NASZE USŁUGI",
  titleLines: ["Wybierz usługę — i przejdź", "od problemu do decyzji"],
  description:
    "Realizujemy sprzątanie i czyszczenie w modelu przewidywalnym dla odbiorów: jasny zakres, dopasowane okno prac, koordynacja na miejscu oraz dokumentacja do przekazania dalej.",
  items: [
    {
      iconName: "hardHat",
      label: "Sprzątanie pod odbiór / otwarcie",
      title: "Po budowie, przed otwarciem i po reficie lokalu",
      description:
        "Odbiory, przekazanie, presja terminów. Wchodzimy „między robotami” i po godzinach, chronimy świeże powierzchnie i dowozimy etap do odbioru z protokołami i zdjęciami.",
      ctaLabel: "Dowiedz się więcej",
      mediaAlt: "Sprzątanie po budowie",
      mediaSrc: "/window.svg",
    },
   
    {
      iconName: "sparkles",
      label: "Mycie witryn i okien",
      title: "Witryny dla firm + okna dla klientów prywatnych",
      description:
        "B2B: mycie witryn z szybką wyceną ze zdjęć i logistyką po naszej stronie. Prywatnie: mycie okien w domach i mieszkaniach — sprawnie, bezpiecznie i bez smug.",
      ctaLabel: "Zobacz usługę",
      mediaAlt: "Mycie witryn i okien",
      mediaSrc: "/window.svg",
    },
    {
      iconName: "grid3x3",
      label: "Czyszczenie posadzek ",
      title: "Maszynowe doczyszczanie i specjalistyczne odplamianie",
      description:
        "Doczyszczamy posadzki w obiektach komercyjnych. Dobieramy technologię do typu nawierzchni i zabrudzeń, robimy ekspertyzę plam i domykamy efekt bez ryzyka uszkodzeń.",
      ctaLabel: "Dowiedz się więcej",
      mediaAlt: "Maszynowe czyszczenie posadzek",
      mediaSrc: "/window.svg",
    },
    {
      iconName: "building2",
      label: "Utrzymanie czystości ",
      title: "Stały standard, kontrola wykonania i zastępstwa",
      description:
        "Sprzątanie biur oraz lokali handlowo-usługowych, także w sieciach. Zapewniamy powtarzalny standard, kontrolę jakości, grafiki i zastępstwa — bez przestojów i nerwów.",
      ctaLabel: "Dowiedz się więcej",
      mediaAlt: "Cykliczne utrzymanie czystości",
      mediaSrc: "/window.svg",
    },
    {
      iconName: "mapPin",
      label: "Zasięg i moce przerobowe",
      title: "Cała Polska + duże tempo, gdy warunki są potwierdzone",
      description:
        "Dobieramy zespoły i sprzęt do terminu: do 5000 m² dziennie lub do 300 doczyszczonych okien dziennie* — zależnie od zakresu, warunków wejścia i okna realizacji.",
      ctaLabel: "Sprawdź dostępność",
      mediaAlt: "Zasięg i realizacja",
      mediaSrc: "/window.svg",
    },
  ],
};

const showcaseContent: ShowcaseSectionContent = {
  kickerLabel: "RYZYKA I JAK JE GASIMY",
  title: "Ryzyka i jak je gasimy",
  description:
    "W sprzątaniu pod odbiór liczy się przewidywalność. Poniżej najczęstsze ryzyka na obiekcie i konkretne działania, które wdrażamy, żeby dowieźć termin i standard.",
  items: [
    {
      tag: "ORGANIZACJA",
      title: "Przesunięcia ekip i chaos na obiekcie",
      description:
        "Ustalamy jedno okno realizacji, potwierdzamy ustalenia i koordynujemy prace na miejscu, żeby sprzątanie nie kolidowało z innymi ekipami i etapami.",
      result: "Efekt? Mniej przestojów i mniej „gaszenia pożarów”.",
    },
    {
      tag: "DOSTĘP",
      title: "Ograniczenia dostępu i formalności obiektu",
      description:
        "Przed startem wdrażamy NDA, rejestr wejść i wymagane procedury. Dzięki temu w dniu realizacji nie tracimy czasu na blokady i formalności na bramie.",
      result: "Efekt? Szybsze wejście i płynny start prac.",
    },
    {
      tag: "ODBIÓR",
      title: "Poprawki na końcu i „niespodzianki” przy odbiorze",
      description:
        "Robimy odbiór wewnętrzny checklistą zanim zgłosimy gotowość. Dostarczamy protokoły odbioru i zdjęcia, aby ograniczyć rundy poprawek po stronie Zamawiającego.",
      result: "Efekt? Krótszy odbiór i mniej poprawek.",
    },
    {
      tag: "USTERKI",
      title: "Usterki odkryte w trakcie realizacji",
      description:
        "Jeśli coś wychodzi w trakcie — spisujemy protokół usterek i od razu informujemy Zleceniodawcę. Jest jasna decyzja co dalej i dokumentacja „na papierze”.",
      result: "Efekt? Mniej sporów „kto to zrobił”.",
    },
    {
      tag: "ZASOBY",
      title: "Ryzyko braku ludzi lub sprzętu na termin",
      description:
        "Planujemy backup ludzi i sprzętu do każdego zlecenia, aby dowieźć termin nawet przy nagłych zmianach logistyki lub skróceniu okna realizacji na obiekcie.",
      result: "Efekt? Większa pewność terminu realizacji.",
    },
  ],
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "JESTEŚMY, BY POMÓC CI DOMKNĄĆ ODBIÓR BEZ STRESU!",
  title: "Porozmawiajmy, jak dowieźć odbiór i przekazanie obiektu na czas",
  description:
    "Nie obiecujemy cudów. Dajemy konkrety. W krótkiej rozmowie ustalimy zakres, okno realizacji i standard odbioru, wskażemy ryzyka na obiekcie i przygotujemy ofertę gotową do wysłania dalej (PDF/HTML).",
  buttonLabel: "Umów bezpłatną konsultację",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const knowledgeContent: KnowledgeSectionContent = {
  kickerLabel: "REALIZACJE I REFERENCJE",
  titleLines: ["Zobacz, jak pracujemy", "na obiektach w całej Polsce"],
  description:
    "Zdjęcia z realizacji, zakresy i efekty — plus opinie klientów. Sprawdź, jak dowozimy sprzątanie pod odbiory, przekazanie i otwarcia.",
  cards: [
    {
      title: "Realizacje",
      description:
        "Przykładowe obiekty, zakres prac i efekt końcowy. Krótkie case’y ze zdjęciami — bez lania wody, same konkrety.",
      buttonLabel: "Zobacz realizacje",
    media: {
        type: "image",
        src: "/tlo.png",
        alt: "Referencje klientów",
      },
    },
    {
      title: "Referencje i opinie",
      description:
        "Opinie firm odpowiedzialnych za odbiory. Co doceniają najczęściej: termin, komunikację, protokoły i przewidywalną realizację.",
      buttonLabel: "Zobacz referencje",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Referencje klientów",
      },
    },
  ],
};

const contactContent: ContactSectionContent = {
  kickerLabel: "SKONTAKTUJ SIĘ",
  title: "Porozmawiajmy, jak dowieźć odbiór i przekazanie obiektu",
  description:
    "Zostaw kontakt — wrócimy z krótką listą pytań o termin i zakres. Ustalimy okno prac, standard odbioru i przygotujemy ofertę gotową do wysłania dalej (PDF/HTML).",
  chips: [
    { label: "Odbiór na czas" },
    { label: "Bez chaosu" },
    { label: "Protokół + zdjęcia" },
    { label: "Cała Polska" },
    { label: "SLA dla sieci" },
    { label: "Start w 3 dni*", accent: true },
  ],
  form: {
    emailLabel: "Adres e-mail",
    emailPlaceholder: "Twój adres e-mail",
    phoneLabel: "Numer telefonu",
    phonePlaceholder: "Twój numer telefonu",
    topicLabel: "Temat rozmowy",
    topicPlaceholder: "Jaki obiekt i na kiedy jest odbiór?",
    consentText:
      "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zgłoszenia oraz na kontakt handlowy drogą elektroniczną na podany adres e-mail. Polityka prywatności.",
    submitLabel: "Odbierz ofertę (PDF/HTML)",
  },
  meta: {
    avatars: ["A", "B", "C", "D", "E", "F"],
    text: "Zespół operacyjny gotowy do wejścia na obiekt",
  },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero content={defaultContent} />
        <SocialProof />
        <ProblemsSection content={problemsContent} />
        <SolutionsSection content={solutionsContent} />
        <ShowcaseSection content={showcaseContent} />
        <CtaSection content={ctaContent} />
        <HighlightsSection />
        {/* <HighlightsSection /> */}
        <KnowledgeSection content={knowledgeContent} />
        {/* <TestimonialsSection /> */}
        <ContactSection content={contactContent} />
      </main>
      <Footer />
    </div>
  );
}
