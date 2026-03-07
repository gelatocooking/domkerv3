import Header from "@/components/Header/Header";
import PagesHero, { type PagesHeroContent } from "@/components/PagesHero/PagesHero";
import ProblemsSection, {
  type ProblemsSectionContent,
} from "@/components/ProblemsSection/ProblemsSection";
import SolutionsSection, {
  type SolutionsSectionContent,
} from "@/components/SolutionsSection/SolutionsSection";
import CtaSection, {
  type CtaSectionContent,
} from "@/components/CtaSection/CtaSection";
import BenefitsSection, {
  type BenefitsSectionContent,
} from "@/components/BenefitsSection/BenefitsSection";
import ProcessSection, {
  type ProcessSectionContent,
} from "@/components/ProcessSection/ProcessSection";
import ContactSection, {
  type ContactSectionContent,
} from "@/components/ContactSection/ContactSection";
import KnowledgeSection, {
  type KnowledgeSectionContent,
} from "@/components/KnowledgeSection/KnowledgeSection";
import FaqSection, { type FaqSectionContent } from "@/components/FaqSection/FaqSection";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

const defaultContent: PagesHeroContent = {
  badge: "SPRZĄTANIE PO BUDOWIE DLA KIEROWNIKA BUDOWY",
  titleLines: [
    "Sprzątanie po budowie",
    "pod odbiór bez poprawek",
  ],
  emphasisIconName: "hardHat",
  emphasisSuffix: "/",
  description:
    "Na końcówce nie potrzebujesz sprzątania „ogólnie”. Potrzebujesz obiektu, który przejdzie odbiór w zaplanowanym oknie: bez powrotów, bez ryzyka dla wykończeń i bez rozjazdu harmonogramu.",
  ctaLabel: "Odbierz ofertę do zatwierdzenia (PDF/HTML)",
  imageSrc: "/tlo.png",
  imageAlt: "Sprzątanie po budowie dla kierownika budowy",
};

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "ZNASZ TE WYZWANIA?",
  titleLines: [
    "Co kierownik budowy realnie",
    "musi dowieźć na końcówce?",
  ],
  description:
    "Na odbiorze przegrywa nie brak ludzi, tylko brak przewidywalności. Liczą się strefy, kolejność prac, bezpieczna technologia i gotowość potwierdzona dopiero po kontroli.",
  items: [
    {
      iconName: "calendarClock",
      label: "OKNO",
      title: "Realne wejście między robotami",
      description:
        "Obiekt dalej żyje, więc trzeba wejść w potwierdzonym oknie i bez cofania prac po godzinie.",
      tone: "processes",
    },
    {
      iconName: "workflow",
      label: "KOLEJNOŚĆ",
      title: "Brak chaosu między strefami",
      description:
        "Najpierw strefy krytyczne, potem reszta. Dzięki temu pył i poprawki nie wracają na koniec.",
      tone: "processes",
    },
    {
      iconName: "layoutGrid",
      label: "DETALE",
      title: "To, co wychodzi dopiero przy odbiorze",
      description:
        "Smugi pod światło, kurz na profilach, ślady po foliach i klejach — właśnie to wraca w uwagach.",
      tone: "data",
    },
    {
      iconName: "truck",
      label: "ZASOBY",
      title: "Backup ludzi i sprzętu",
      description:
        "Gdy okno się skraca albo warunki się zmieniają, realizacja nie może stanąć przez braki operacyjne.",
      tone: "resources",
    },
    {
      iconName: "shieldAlert",
      label: "RYZYKO",
      title: "Bezpiecznie dla nowych wykończeń",
      description:
        "Posadzki, szyby, armatura i fronty wymagają technologii dobranej do materiału, nie doraźnych prób.",
      tone: "risk",
    },
    {
      iconName: "fileText",
      label: "ODBIÓR",
      title: "Protokół i zdjęcia po kontroli",
      description:
        "Dostajesz materiał do zgłoszenia gotowości i rozliczenia etapu bez dalszego dopilnowywania po Twojej stronie.",
      tone: "technology",
    },
  ],
};

const solutionsContent: SolutionsSectionContent = {
  kickerLabel: "JAK TO PROWADZIMY",
  titleLines: [
    "Sprzątanie końcówki budowy",
    "w logice kierownika",
  ],
  description:
    "Prowadzimy ten etap jak zadanie z harmonogramu: cel odbioru, strefy krytyczne, kolejność prac, technologia pod materiał i zgłoszenie gotowości dopiero po kontroli.",
  items: [
    {
      iconName: "hardHat",
      label: "Standard odbiorowy",
      title: "Najpierw ustalamy, co ma przejść",
      description:
        "Inwestorski, urzędowy, przekazanie albo otwarcie. Zakres ma być policzalny, a efekt weryfikowalny.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Standard odbiorowy po budowie",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "clipboardList",
      label: "Strefy krytyczne",
      title: "Pracujemy tam, gdzie odbiór patrzy najpierw",
      description:
        "Wejścia, komunikacja, przeszklenia, sanitariaty, detale przy listwach i profilach — to tam najczęściej wracają uwagi.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Strefy krytyczne na budowie",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "building2",
      label: "Technologia pod materiał",
      title: "Bez szkód na finiszu",
      description:
        "Dobieramy chemię i narzędzia do posadzek, szyb albo okien, armatury i frontów, żeby nie tworzyć reklamacji.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Bezpieczna technologia sprzątania po budowie",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "sparkles",
      label: "Okno wejścia i koordynacja",
      title: "Gdy obiekt nadal jest w ruchu",
      description:
        "Potwierdzamy warunki wejścia, strefy wyłączone i kolejność, żeby nie wracać do tych samych miejsc po innych ekipach.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Koordynacja wejścia na obiekt",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "grid3x3",
      label: "Moce przerobowe",
      title: "Zasoby dobierane pod termin",
      description:
        "Od pojedynczych lokali po większe obiekty. Maksymalnie do 5000 m² dziennie lub do 300 okien dziennie zależnie od warunków.",
      ctaLabel: "Sprawdź dostępność",
      mediaAlt: "Moce przerobowe Domker",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "mapPin",
      label: "Cała Polska",
      title: "Jedna współpraca, nie kilka ekip",
      description:
        "Działamy ogólnopolsko i układamy realizację pod termin, dostęp oraz ograniczenia obiektu.",
      ctaLabel: "Sprawdź dostępność",
      mediaAlt: "Sprzątanie po budowie w całej Polsce",
      mediaSrc: "/kontakt",
    },
  ],
};

const benefitsContent: BenefitsSectionContent = {
  kickerLabel: "FORMALNOŚCI I ODPOWIEDZIALNOŚĆ",
  titleLines: ["Formalności i odpowiedzialność", "po naszej stronie"],
  description:
    "Na końcówce liczy się nie tylko efekt, ale też wejście na obiekt, zgodność z procedurami i jasna odpowiedzialność. To porządkujemy przed startem realizacji.",
  items: [
    {
      iconName: "users",
      label: "KADRY",
      title: "Legalne zatrudnienie i przeszkolone zespoły",
      description:
        "Wiesz, kto wchodzi na obiekt i kto odpowiada za realizację. To ogranicza ryzyka kadrowe i skraca ustalenia.",
      tone: "resources",
    },
    {
      iconName: "shieldAlert",
      label: "BHP",
      title: "Szkolenia i analiza zagrożeń przed startem",
      description:
        "Ustalamy zasady pracy, strefy wyłączone i ryzyka, żeby realizacja nie zatrzymała się przez procedury.",
      tone: "risk",
    },
    {
      iconName: "database",
      label: "DOSTĘP",
      title: "Umowa o zachowaniu poufności i rejestr wejść",
      description:
        "Jeśli obiekt tego wymaga, dopinamy formalności wcześniej, a nie przy bramie w dniu realizacji.",
      tone: "processes",
    },
    {
      iconName: "clipboardCheck",
      label: "DOKUMENTY",
      title: "Protokół i zdjęcia po zakończeniu",
      description:
        "Po kontroli przekazujemy dokumenty, które pomagają zgłosić gotowość, rozliczyć etap i zamknąć go po Twojej stronie.",
      tone: "data",
    },
    {
      iconName: "clipboardCheck",
      label: "OC",
      title: "OC i jasne ramy odpowiedzialności",
      description:
        "Masz jasność, jak wygląda zabezpieczenie współpracy przy realizacjach na obiektach komercyjnych.",
      tone: "finance",
    },
    {
      iconName: "fileText",
      label: "B2B",
      title: "Umowa i faktura VAT jako standard współpracy",
      description:
        "Prosty proces zakupowy, który przechodzi przez księgowość, inwestora i administrację bez dodatkowych doprecyzowań.",
      tone: "technology",
    },
  ],
};

const processContent: ProcessSectionContent = {
  kickerLabel: "JAK DZIAŁAMY?",
  titleLines: ["Proces pod odbiór", "krok po kroku"],
  description:
    "Zbieramy minimum danych, potwierdzamy warunki wejścia i prowadzimy realizację tak, żeby zgłosić gotowość dopiero po wewnętrznej kontroli checklistą.",
  steps: [
    {
      index: "01",
      title: "Minimum danych i szybka kwalifikacja",
      description:
        "Ustalamy typ obiektu, metraż, termin odbioru, etap prac i strefy krytyczne. Jeśli temat jest pilny, od razu oceniamy dostępność.",
    },
    {
      index: "02",
      title: "Widełki, termin i oferta do zatwierdzenia",
      description:
        "Wracamy tego samego dnia po skompletowaniu informacji. Dostajesz zakres, wyłączenia i warunki wejścia w formie gotowej do przekazania dalej.",
    },
    {
      index: "03",
      title: "Wejście na obiekt i plan stref",
      description:
        "Potwierdzamy okno wejścia, kolejność prac, ograniczenia technologiczne i zasady poruszania się po obiekcie.",
    },
    {
      index: "04",
      title: "Realizacja, kontrola i protokół",
      description:
        "Pracujemy w ustalonym oknie, robimy kontrolę checklistą i dopiero wtedy przekazujemy protokół oraz zdjęcia do zgłoszenia gotowości.",
    },
  ],
  ctaLabel: "Odbierz ofertę do zatwierdzenia (PDF/HTML)",
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "DOBIERZMY ZAKRES",
  title: "Powiedz, jaki obiekt trzeba domknąć i na kiedy",
  description:
    "Wystarczy miasto lub adres inwestycji, metraż, termin odbioru i numer kontaktowy. Resztę doprecyzujemy po zgłoszeniu krótką listą pytań.",
  buttonLabel: "Wyślij minimum danych",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const knowledgeContent: KnowledgeSectionContent = {
  kickerLabel: "REALIZACJE I REFERENCJE",
  titleLines: ["Zobacz, jak pracujemy", "na końcówkach budów"],
  description:
    "Przykładowe realizacje z obiektów komercyjnych. Zobacz, jak wygląda współpraca od pierwszego kontaktu po finalizację etapu pod odbiór.",
  cards: [
    {
      title: "Realizacje",
      description:
        "Zakresy i efekty z obiektów pod odbiór. Krótkie case’y pokazujące tryb pracy, strefy krytyczne i rezultat.",
      buttonLabel: "Zobacz realizacje",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Realizacje Domker po budowie",
      },
    },
    {
      title: "Referencje i opinie",
      description:
        "Co kierownicy i klienci B2B doceniają we współpracy. Najczęściej przewidywalność, komunikację i łatwe rozliczenie realizacji.",
      buttonLabel: "Zobacz referencje",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Referencje Domker po budowie",
      },
    },
  ],
};

const contactContent: ContactSectionContent = {
  kickerLabel: "SKONTAKTUJ SIĘ",
  title: "Wyślij minimum danych, a my wskażemy kolejny krok",
  description:
    "Podaj nazwę firmy lub inwestycji, adres obiektu, e-mail firmowy i numer telefonu. W odpowiedzi wyślemy krótką listę informacji potrzebnych do widełek i terminu.",
  chips: [
    { label: "Odbiór pod termin" },
    { label: "Jedna osoba kontaktowa" },
    { label: "Strefy krytyczne" },
    { label: "Kontrola checklistą" },
    { label: "Zasięg ogólnopolski" },
    { label: "Szybka kwalifikacja", accent: true },
  ],
  form: {
    emailLabel: "Adres e-mail",
    emailPlaceholder: "Twój adres e-mail",
    phoneLabel: "Numer telefonu",
    phonePlaceholder: "Twój numer telefonu",
    topicLabel: "Temat rozmowy",
    topicPlaceholder: "Jaki obiekt i na kiedy jest odbiór",
    consentText:
      "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zgłoszenia oraz na kontakt handlowy drogą elektroniczną na podany adres e-mail. Polityka prywatności.",
    submitLabel: "Wyślij minimum danych",
  },
  meta: {
    avatars: ["A", "B", "C", "D", "E", "F"],
    text: "Zespół operacyjny po stronie B2B",
  },
};

const faqContent: FaqSectionContent = {
  kickerLabel: "NAJCZĘŚCIEJ ZADAWANE PYTANIA",
  title: "Pytania, które padają u kierowników budów",
  description: "Masz więcej pytań? Po prostu",
  highlightText: "skontaktuj się z nami",
  avatars: ["A", "B", "C", "D", "E", "F", "G", "H"],
  items: [
    {
      question: "Czy wejdziecie na już, jeśli odbiór jest blisko?",
      answer:
        "Tak — jeśli mamy minimum danych i jasne warunki wejścia. W pilnych sprawach najlepiej zadzwonić, bo wtedy szybciej kwalifikujemy temat i termin.",
    },
    {
      question: "Czy pracujecie po godzinach albo między robotami?",
      answer:
        "Tak. Okno realizacji dopasowujemy do harmonogramu na obiekcie, zależnie od dostępu, równoległych ekip i zasad obowiązujących na budowie.",
    },
    {
      question: "Jak wygląda zgłoszenie gotowości po Waszej stronie?",
      answer:
        "Najpierw robimy kontrolę wewnętrzną checklistą. Dopiero po jej przejściu przekazujemy protokół i zdjęcia oraz zgłaszamy gotowość do odbioru.",
    },
    {
      question: "Jakie informacje są potrzebne do szybkiej wyceny?",
      answer:
        "Najczęściej wystarczy lokalizacja, metraż, termin odbioru, realne okno wejścia i krótka informacja o newralgicznych powierzchniach lub śladach po montażu.",
    },
    {
      question: "Czy bezpiecznie pracujecie na nowych wykończeniach?",
      answer:
        "Tak. Dobieramy technologię do materiału i etapu wykończenia, szczególnie przy posadzkach, szybach albo oknach, armaturze i frontach.",
    },
    {
      question: "Czy wystawiacie fakturę VAT?",
      answer:
        "Tak, jesteśmy czynnymi płatnikami VAT. Standardowo działamy w modelu B2B z umową i dokumentami do procesu zakupowego.",
    },
    {
      question: "Jak wygląda ubezpieczenie odpowiedzialności?",
      answer:
        "Mamy ubezpieczenie OC na kwotę pół miliona złotych. Szczegóły współpracy i odpowiedzialności opisujemy w ofercie.",
    },
    {
      question: "Czy działacie w całej Polsce?",
      answer:
        "Tak — realizujemy sprzątanie po budowie na terenie całej Polski, zarówno dla pojedynczych obiektów, jak i większych realizacji.",
    },
    {
      question: "Czy usuwacie folie, kleje i ślady po montażu?",
      answer:
        "Tak, jeśli występują w zakresie i warunki materiałowe na to pozwalają. Dlatego już na etapie wyceny warto zgłosić folie, kleje i powierzchnie wrażliwe.",
    },
    {
      question: "Co najczęściej wydłuża odbiór po sprzątaniu?",
      answer:
        "Najczęściej są to smugi widoczne dopiero pod światło, wtórne pylenie po innych ekipach, brak kontroli wewnętrznej i niepotwierdzone warunki wejścia.",
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
        <BenefitsSection content={benefitsContent} />
        <ProcessSection content={processContent} />
        <ContactSection content={contactContent} />
        <KnowledgeSection content={knowledgeContent} />
        <FaqSection content={faqContent} />
      </main>
      <Footer />
    </div>
  );
}
