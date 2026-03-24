import Header from "../../../components/Header/Header";
import PagesHero, { type PagesHeroContent } from "../../../components/PagesHero/PagesHero";
import ContactSection, {
  type ContactSectionContent,
} from "../../../components/ContactSection/ContactSection";
import Footer from "../../../components/Footer/Footer";
import styles from "./page.module.css";
import ProblemsSection, {
  type ProblemsSectionContent,
} from "@/components/ProblemsSection/ProblemsSection";
import ProcessSection, {
  type ProcessSectionContent,
} from "@/components/ProcessSection/ProcessSection";
import FaqSection, { type FaqSectionContent } from "@/components/FaqSection/FaqSection";
import CtaSection, { type CtaSectionContent } from "../../../components/CtaSection/CtaSection";
import SolutionsSection, {
  type SolutionsSectionContent,
} from "@/components/SolutionsSection/SolutionsSection";
import KnowledgeSection, {
  type KnowledgeSectionContent,
} from "@/components/KnowledgeSection/KnowledgeSection";
import ShowcaseSection, { ShowcaseSectionContent } from "@/components/ShowcaseSection/ShowcaseSection";

// /maszynowe-czyszczenie-posadzek

const defaultContent: PagesHeroContent = {
  badge: "MASZYNOWE CZYSZCZENIE POSADZEK (B2B)",
  titleLines: ["Maszynowe czyszczenie", "posadzek"],
  emphasisSuffix: "/",
  description:
    "To nie jest zwykłe mycie podłogi. To usługa technologiczna dla obiektów komercyjnych, w których efekt zależy od rodzaju posadzki, stopnia zabrudzeń i bezpiecznego doboru metody. W Domker kwalifikujemy nawierzchnię, oceniamy ryzyko i dobieramy proces tak, żeby poprawić stan posadzki bez pogarszania jej wykończenia.",
  ctaLabel: "Wyślij zdjęcia i minimum danych",
};

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "KIEDY TO MA SENS?",
  titleLines: ["Maszynowe czyszczenie posadzek,", "gdy zwykłe mycie nie wystarcza"],
  description:
    "W wielu obiektach problemem nie jest brak sprzątania, tylko źle dobrana metoda. Osady po budowie, zabrudzenia po eksploatacji, strefy ruchu i trudne nawierzchnie wymagają procesu dopasowanego do materiału, a nie jednej uniwersalnej chemii.",
  items: [
    {
      iconName: "grid3x3",
      label: "NAWIERZCHNIA",
      title: "Nie każda posadzka toleruje ten sam proces czyszczenia i tę samą chemię",
      description:
        "Inaczej pracuje się na gresie, inaczej na PCV, a inaczej na powierzchniach zabezpieczonych lub wrażliwych. Dobór metody zaczyna się od rozpoznania materiału.",
      tone: "risk",
    },
    {
      iconName: "sparkles",
      label: "ZABRUDZENIA",
      title: "Osady i ślady po budowie albo eksploatacji nie schodzą zwykłym myciem",
      description:
        "Pył, zabrudzenia technologiczne, ślady po klejach, zabrudzenia w strefach ruchu i osady wymagają mocniejszego, ale kontrolowanego procesu.",
      tone: "processes",
    },
    {
      iconName: "calendarClock",
      label: "WARUNKI",
      title: "Na czynnych obiektach liczy się nie tylko efekt, ale też sposób prowadzenia prac",
      description:
        "Godziny pracy, ruch ludzi i dostępność stref wpływają na to, jak bezpiecznie i skutecznie przeprowadzić czyszczenie.",
      tone: "processes",
    },
    {
      iconName: "shieldAlert",
      label: "RYZYKO",
      title: "Zbyt agresywna metoda potrafi pogorszyć stan posadzki",
      description:
        "Źle dobrana chemia, pad albo intensywność pracy mogą zostawić zmatowienia, smugi albo uszkodzić wykończenie nawierzchni.",
      tone: "risk",
    },
    {
      iconName: "clipboardList",
      label: "EFEKT",
      title: "Bez kwalifikacji trudno uczciwie ocenić, jaki rezultat prac jest realny",
      description:
        "Nie każda plama schodzi tak samo i nie każda posadzka pozwala na ten sam poziom ingerencji. Dlatego najpierw trzeba ocenić stan powierzchni.",
      tone: "data",
    },
    {
      iconName: "fileText",
      label: "WYCENA",
      title: "Sam metraż nie wystarczy, żeby sensownie policzyć usługę",
      description:
        "Na cenę wpływa też typ posadzki, rodzaj zabrudzeń, stopień zużycia, dostępność stref i oczekiwany efekt końcowy.",
      tone: "technology",
    },
  ],
};

const solutionsContent: SolutionsSectionContent = {
  kickerLabel: "JAK TO PROWADZIMY",
  titleLines: ["Maszynowe czyszczenie posadzek", "jako dobór procesu do nawierzchni"],
  description:
    "Nie zaczynamy od maszyny, tylko od oceny posadzki. Najpierw rozpoznajemy materiał i zabrudzenia, potem dobieramy technologię, intensywność procesu i warunki pracy. Dzięki temu efekt jest lepszy, a ryzyko dla nawierzchni mniejsze.",
  items: [
    {
      iconName: "clipboardCheck",
      label: "Kwalifikacja nawierzchni",
      title: "Najpierw ustalamy, z jaką posadzką i stanem pracujemy",
      description:
        "Typ materiału, jego wykończenie, wiek zabrudzeń i ślady po wcześniejszym użytkowaniu wpływają na dobór metody już od pierwszej decyzji.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Kwalifikacja posadzki",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "sparkles",
      label: "Rodzaj zabrudzeń",
      title: "Rozdzielamy osady, ślady technologiczne i zabrudzenia eksploatacyjne",
      description:
        "Inaczej pracuje się z pyłem po budowie, inaczej z osadami codziennymi, a inaczej z zabrudzeniami punktowymi i śladami ruchu.",
      ctaLabel: "Wyślij zdjęcia",
      mediaAlt: "Rodzaj zabrudzeń na posadzce",
      mediaSrc: "/kontakt#minimum-danych",
    },
    {
      iconName: "shieldAlert",
      label: "Technologia pod materiał",
      title: "Dobieramy chemię, pady i intensywność pracy do ograniczeń posadzki",
      description:
        "Proces ma poprawić stan nawierzchni, a nie stworzyć nowy problem. Dlatego bezpieczeństwo materiału jest częścią decyzji, nie dodatkiem.",
      ctaLabel: "Zapytaj o metodę",
      mediaAlt: "Technologia czyszczenia posadzek",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "building2",
      label: "Czynny obiekt",
      title: "Uwzględniamy warunki pracy, dostępność stref i rytm obiektu",
      description:
        "Jeśli posadzka znajduje się w działającym lokalu, biurze albo obiekcie komercyjnym, układamy realizację tak, żeby ograniczyć kolizje z użytkowaniem.",
      ctaLabel: "Ustal warunki wejścia",
      mediaAlt: "Czyszczenie posadzek na czynnym obiekcie",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "clipboardList",
      label: "Efekt i ograniczenia",
      title: "Uczciwie określamy, jaki rezultat jest realny przy danej nawierzchni",
      description:
        "Nie obiecujemy tego samego dla każdej powierzchni. Zakres efektu zależy od materiału, stopnia zabrudzeń i historii użytkowania posadzki.",
      ctaLabel: "Sprawdź możliwości",
      mediaAlt: "Efekt po czyszczeniu posadzki",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "mapPin",
      label: "Wycena i skala",
      title: "Liczymy usługę według metrażu, ale nie ignorujemy technicznych różnic",
      description:
        "Metraż jest punktem wyjścia, ale ostateczny koszt zależy też od stanu posadzki, zabrudzeń, dostępności stref i zakresu oczekiwanego efektu.",
      ctaLabel: "Poproś o widełki",
      mediaAlt: "Wycena czyszczenia posadzek",
      mediaSrc: "/kontakt",
    },
  ],
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "MINIMUM DANYCH DO WIDEŁEK I DOBORU METODY",
  title: "Podaj typ posadzki, metraż i rodzaj zabrudzeń",
  description:
    "Jeśli masz zdjęcia, dołącz je od razu. Najszybciej kwalifikujemy usługę, gdy widzimy rodzaj nawierzchni, skalę zabrudzeń i wiemy, czy obiekt działa w trakcie realizacji.",
  buttonLabel: "Wyślij minimum danych",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const showcaseContent: ShowcaseSectionContent = {
  kickerLabel: "BEZPIECZEŃSTWO I DECYZJA TECHNOLOGICZNA",
  titleLines: ["Tu liczy się nie tylko efekt,", "ale też sposób jego osiągnięcia"],
  description:
    "Maszynowe czyszczenie posadzek wymaga rozpoznania materiału, zabrudzeń i ograniczeń nawierzchni. Dlatego przed startem porządkujemy to, co wpływa na dobór metody, bezpieczeństwo procesu i realny rezultat końcowy.",
  items: [
    {
      tag: "MATERIAŁ",
      title: "Typ posadzki i jej wykończenie wpływają na dobór procesu",
      description:
        "Nie każda nawierzchnia toleruje ten sam poziom agresywności, ten sam pad ani tę samą chemię.",
      result: "Dlatego decyzja technologiczna zaczyna się od materiału, nie od samej maszyny.",
    },
    {
      tag: "ZABRUDZENIA",
      title: "Rodzaj zabrudzeń decyduje o technologii i czasie pracy",
      description:
        "Osady po budowie, zabrudzenia eksploatacyjne i ślady punktowe wymagają innego podejścia niż zwykłe mycie bieżące.",
      result: "Od tego zależy zarówno dobór procesu, jak i realna wycena usługi.",
    },
    {
      tag: "REALNY EFEKT",
      title: "Nie każda powierzchnia pozwala na ten sam poziom odświeżenia",
      description:
        "Stan nawierzchni, historia użytkowania i wcześniejsze uszkodzenia wpływają na to, jaki efekt można bezpiecznie osiągnąć.",
      result: "Dlatego zakres możliwego rezultatu trzeba ocenić przed startem, a nie po wykonaniu prac.",
    },
    {
      tag: "CZYNNY OBIEKT",
      title: "Warunki pracy wpływają na tempo i sposób prowadzenia realizacji",
      description:
        "Godziny pracy obiektu, ruch ludzi i dostępność stref decydują o tym, jak zaplanować usługę bez zbędnych kolizji.",
      result: "To wpływa nie tylko na organizację, ale też na sposób prowadzenia samego procesu.",
    },
    {
      tag: "SPRZĘT",
      title: "Specjalistyczny sprzęt ma sens tylko wtedy, gdy jest dobrze dobrany",
      description:
        "Sama maszyna nie rozwiązuje problemu. Liczy się połączenie właściwego osprzętu, chemii i doświadczenia w pracy na konkretnej posadzce.",
      result: "Dlatego skuteczność wynika z dopasowania narzędzi do nawierzchni, a nie z samego sprzętu.",
    },
    {
      tag: "WYCENA",
      title: "Cena za m² musi uwzględniać stan powierzchni i zakres zabrudzeń",
      description:
        "Sam metraż to za mało, jeśli posadzka ma trudne osady, wymaga pracy etapami albo znajduje się na czynnym obiekcie.",
      result: "Widełki mają sens dopiero wtedy, gdy wiadomo, z jaką nawierzchnią i zakresem pracujemy.",
    },
  ],
};

const processContent: ProcessSectionContent = {
  kickerLabel: "JAK DZIAŁAMY?",
  titleLines: ["Od zdjęć i metrażu", "do dobrze dobranego procesu"],
  description:
    "Ta usługa zaczyna się od rozpoznania nawierzchni, nie od samego terminu. Dlatego najpierw zbieramy minimum danych, potem dobieramy metodę i dopiero wtedy potwierdzamy realizację.",
  steps: [
    {
      index: "01",
      title: "Zdjęcia, metraż i krótki opis posadzki",
      description:
        "Ustalamy typ nawierzchni, skalę, rodzaj zabrudzeń i to, czy obiekt działa w trakcie prac.",
    },
    {
      index: "02",
      title: "Kwalifikacja technologiczna i widełki",
      description:
        "Oceniamy, jaki proces ma sens, czy potrzebna jest wizja i jakie widełki można przyjąć dla tej powierzchni.",
    },
    {
      index: "03",
      title: "Potwierdzenie warunków pracy i zakresu",
      description:
        "Doprecyzowujemy dostępność stref, godziny pracy, ograniczenia obiektu i oczekiwany efekt końcowy.",
    },
    {
      index: "04",
      title: "Realizacja i przekazanie efektu",
      description:
        "Prowadzimy czyszczenie według dobranej metody i przekazujemy usługę w zakresie, który został wcześniej jasno ustalony.",
    },
  ],
  ctaLabel: "Wyślij minimum danych",
};

const contactContent: ContactSectionContent = {
  kickerLabel: "SKONTAKTUJ SIĘ",
  title: "Wyślij minimum danych, a szybko ocenimy temat",
  description:
    "Podaj typ posadzki, metraż, lokalizację i krótki opis zabrudzeń. Jeśli obiekt działa, dopisz to w wiadomości. Zdjęcia bardzo przyspieszają kwalifikację i widełki.",
  chips: [
    { label: "Technologia pod nawierzchnię" },
    { label: "Wycena za m²" },
    { label: "Zdjęcia mile widziane" },
    { label: "Obiekty komercyjne" },
    { label: "Bezpieczny dobór metody" },
    { label: "Szybka kwalifikacja", accent: true },
  ],
  form: {
    emailLabel: "Adres e-mail",
    emailPlaceholder: "Twój adres e-mail",
    phoneLabel: "Numer telefonu",
    phonePlaceholder: "Twój numer telefonu",
    topicLabel: "Temat rozmowy",
    topicPlaceholder: "Jaka posadzka, jaki metraż i jakie zabrudzenia",
    consentText:
      "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zgłoszenia oraz na kontakt handlowy drogą elektroniczną na podany adres e-mail. Polityka prywatności.",
    submitLabel: "Wyślij minimum danych",
  },
  meta: {
    avatars: ["A", "B", "C", "D", "E", "F"],
    text: "Zespół operacyjny po stronie B2B",
  },
};

const knowledgeContent: KnowledgeSectionContent = {
  kickerLabel: "REALIZACJE I REFERENCJE",
  titleLines: ["Zobacz, jak pracujemy", "z różnymi typami posadzek"],
  description:
    "Przykłady realizacji w obiektach komercyjnych. Zobacz, jak wygląda usługa przy różnych nawierzchniach, typach zabrudzeń i oczekiwanym efekcie końcowym.",
  cards: [
    {
      title: "Realizacje",
      description:
        "Przykłady posadzek po budowie i po eksploatacji. Krótkie case’y pokazujące zakres zabrudzeń, warunki pracy i rezultat procesu.",
      buttonLabel: "Zobacz realizacje",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Realizacje Domker przy czyszczeniu posadzek",
      },
    },
    {
      title: "Referencje i opinie",
      description:
        "Co klienci doceniają przy tej usłudze. Najczęściej trafny dobór metody, czytelną wycenę i bezpieczne podejście do nawierzchni.",
      buttonLabel: "Zobacz referencje",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Referencje Domker przy czyszczeniu posadzek",
      },
    },
  ],
};

const faqContent: FaqSectionContent = {
  kickerLabel: "NAJCZĘŚCIEJ ZADAWANE PYTANIA",
  title: "Pytania przed zleceniem czyszczenia posadzek",
  titleLines: ["Pytania przed zleceniem", "czyszczenia posadzek"],
  description: "Masz więcej pytań? Po prostu",
  highlightText: "skontaktuj się z nami",
  avatars: ["A", "B", "C", "D", "E", "F", "G", "H"],
  items: [
    {
      question: "Czym maszynowe czyszczenie posadzek różni się od zwykłego mycia?",
      answer:
        "To usługa technologiczna, a nie bieżące utrzymanie czystości. Obejmuje dobór procesu do typu nawierzchni, rodzaju zabrudzeń i oczekiwanego efektu.",
    },
    {
      question: "Jakie posadzki możecie czyścić?",
      answer:
        "Pracujemy na różnych nawierzchniach spotykanych w obiektach komercyjnych, ale każdą usługę kwalifikujemy osobno. Typ materiału wpływa na metodę, chemię i bezpieczeństwo procesu.",
    },
    {
      question: "Czy czyścicie posadzki po budowie i po eksploatacji?",
      answer:
        "Tak. Obsługujemy zarówno zabrudzenia po budowie, remoncie i wykończeniu, jak i powierzchnie używane na co dzień, z osadami i śladami ruchu.",
    },
    {
      question: "Co wpływa na cenę za m²?",
      answer:
        "Na cenę wpływa nie tylko metraż, ale też typ posadzki, rodzaj zabrudzeń, stopień zużycia, dostępność stref i oczekiwany efekt końcowy.",
    },
    {
      question: "Czy potrzebna jest wizja lokalna?",
      answer:
        "Nie zawsze. W wielu przypadkach wystarczą zdjęcia i podstawowe informacje. Wizja ma sens wtedy, gdy stan nawierzchni albo warunki pracy mogą mocno zmienić zakres usługi.",
    },
    {
      question: "Czy wystarczą zdjęcia do pierwszej wyceny?",
      answer:
        "Bardzo często tak. Zdjęcia posadzki i zabrudzeń przyspieszają kwalifikację, dobór metody i podanie wstępnych widełek.",
    },
    {
      question: "Czy każdą plamę albo ślad da się usunąć?",
      answer:
        "Nie zawsze. To zależy od rodzaju zabrudzenia, czasu jego zalegania i stanu nawierzchni. Dlatego uczciwie oceniamy realny efekt przed startem.",
    },
    {
      question: "Czy proces jest bezpieczny dla posadzki?",
      answer:
        "Tak, jeśli metoda jest dobrze dobrana do materiału. Właśnie dlatego najpierw kwalifikujemy nawierzchnię i ograniczenia, a dopiero potem dobieramy proces.",
    },
    {
      question: "Czy możecie pracować na czynnym obiekcie?",
      answer:
        "Tak. Jeśli obiekt działa, uwzględniamy godziny pracy, ruch ludzi i dostępność stref przy planowaniu realizacji.",
    },
    {
      question: "Jak szybko możecie wejść?",
      answer:
        "To zależy od metrażu, typu posadzki, zakresu zabrudzeń i warunków obiektu. Po otrzymaniu minimum danych szybko ocenimy możliwości.",
    },
    {
      question: "Czy można połączyć czyszczenie posadzek z inną usługą?",
      answer:
        "Tak. Jeśli sytuacja tego wymaga, możemy połączyć usługę z innymi pracami, ale posadzki zawsze kwalifikujemy osobno pod względem technologii.",
    },
  ],
};

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <PagesHero content={defaultContent} />
        <ProblemsSection content={problemsContent} />
        <SolutionsSection content={solutionsContent} />
        <CtaSection content={ctaContent} />
        <ShowcaseSection content={showcaseContent} />
        <ProcessSection content={processContent} />
        <ContactSection content={contactContent} />
        <KnowledgeSection content={knowledgeContent} />
        <FaqSection content={faqContent} />
      </main>
      <Footer />
    </div>
  );
}