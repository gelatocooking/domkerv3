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
    "Na końcówce nie potrzebujesz kolejnej ekipy „od sprzątania”. Potrzebujesz obiektu gotowego do odbioru w zaplanowanym oknie: bez chaosu między brygadami, bez ryzyka dla wykończeń i bez kolejnej rundy poprawek.",
  ctaLabel: "Odbierz ofertę do zatwierdzenia (PDF/HTML)",
};

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "ZNASZ TE WYZWANIA?",
  titleLines: [
    "Co kierownika budowy realnie",
    "blokuje przed odbiorem?",
  ],
  description:
    "Na końcówce przegrywa nie brak ludzi, tylko brak przewidywalności. Wracający pył, poprawki po innych ekipach, brak jednego odpowiedzialnego i uwagi na odbiorze zabierają czas, którego już nie ma.",
  items: [
    {
      iconName: "calendarClock",
      label: "OKNO",
      title: "Roboty się przeciągają, a termin odbioru stoi",
      description:
        "Na sprzątanie zostaje mało czasu, więc wejście musi być realne, potwierdzone i skoordynowane z tym, co jeszcze dzieje się na obiekcie.",
      tone: "processes",
    },
    {
      iconName: "workflow",
      label: "KOORDYNACJA",
      title: "Brak jednego odpowiedzialnego za czystość",
      description:
        "Kierownik nie powinien gasić pożarów między ekipami. Potrzebny jest jeden kontakt, który przejmie temat i dowiezie go do końca.",
      tone: "processes",
    },
    {
      iconName: "layoutGrid",
      label: "DETALE",
      title: "Uwagi wracają na końcu, nie w trakcie",
      description:
        "Smugi na szybach, pył na parapetach, klej na profilach i brud w strefach odbiorowych wychodzą dopiero przy finalnej kontroli.",
      tone: "data",
    },
    {
      iconName: "truck",
      label: "ZASOBY",
      title: "Brak sprzętu i ludzi pod szybkie wejście",
      description:
        "Chłopaki z miotłami nie dowiozą odbioru. Tu potrzebna jest ekipa ze sprzętem i rezerwą mocy, gotowa wejść w krótkim czasie.",
      tone: "resources",
    },
    {
      iconName: "shieldAlert",
      label: "RYZYKO",
      title: "Nowe wykończenia łatwo uszkodzić",
      description:
        "Posadzki, szyby, armatura i fronty wymagają technologii dobranej do materiału, bo szkoda na finiszu kosztuje więcej niż samo sprzątanie.",
      tone: "risk",
    },
    {
      iconName: "fileText",
      label: "ODBIÓR",
      title: "Brak dokumentów i kontroli jakości",
      description:
        "Bez checklisty, zdjęć i protokołu kierownik wraca do tych samych tematów przy odbiorze, reklamacjach i rozliczeniu etapu.",
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
    "Prowadzimy ten etap jak zadanie z harmonogramu: ustalamy cel odbioru, strefy krytyczne, kolejność prac, technologię pod materiał i zgłaszamy gotowość dopiero po kontroli wewnętrznej.",
  items: [
    {
      iconName: "hardHat",
      label: "Standard odbiorowy",
      title: "Wiemy, czego szuka odbiór",
      description:
        "Ustalamy standard pod odbiór inwestorski, urzędowy, przekazanie albo odbiory mieszkań, żeby zakres był policzalny i sprawdzalny.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Standard odbiorowy po budowie",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "clipboardList",
      label: "Strefy krytyczne",
      title: "Najpierw to, co oceniają jako pierwsze",
      description:
        "Klatki, garaże, komunikacja, przeszklenia, sanitariaty, wejścia i detale przy listwach czy profilach traktujemy jako priorytet odbiorowy.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Strefy krytyczne na budowie",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "building2",
      label: "Technologia pod materiał",
      title: "Bez reklamacji od szkód i smug",
      description:
        "Dobieramy chemię i narzędzia do posadzek, szyb albo okien, armatury i frontów, żeby nie zostawiać rys, zmatowień ani zacieków.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Bezpieczna technologia sprzątania po budowie",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "sparkles",
      label: "Kontrola wewnętrzna",
      title: "Najpierw poprawki wewnętrzne, potem odbiór",
      description:
        "Zanim zgłosimy gotowość, robimy wewnętrzny odbiór checklistą. To ogranicza wytykanie poprawek przez kierownika do minimum.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Kontrola wewnętrzna przed odbiorem",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "grid3x3",
      label: "Moce przerobowe",
      title: "Skala dopasowana do etapu i terminu",
      description:
        "Od pojedynczych lokali po większe obiekty. Maksymalnie do 5000 m² dziennie lub do 300 okien dziennie zależnie od warunków.",
      ctaLabel: "Sprawdź dostępność",
      mediaAlt: "Moce przerobowe Domker",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "mapPin",
      label: "Cała Polska",
      title: "Jedna współpraca zamiast szukania ekipy na już",
      description:
        "Działamy ogólnopolsko i układamy wejście pod termin, dostęp, procedury i ograniczenia obiektu.",
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
    "Na końcówce liczy się nie tylko efekt. Liczy się też wejście na obiekt, zgodność z BHP, jasna odpowiedzialność i dokumenty, które przechodzą przez inwestora, zakupy i rozliczenie.",
  items: [
    {
      iconName: "users",
      label: "KADRY",
      title: "Legalne zatrudnienie i przeszkolone zespoły",
      description:
        "Wiesz, kto wchodzi na obiekt i kto odpowiada za realizację. To ogranicza ryzyka kadrowe i przyspiesza współpracę na budowie.",
      tone: "resources",
    },
    {
      iconName: "shieldAlert",
      label: "BHP",
      title: "Szkolenia i analiza zagrożeń przed startem",
      description:
        "Ustalamy strefy wyłączone, zasady pracy i ciągi komunikacyjne, żeby realizacja nie zatrzymała się przez procedury albo ryzyka na obiekcie.",
      tone: "risk",
    },
    {
      iconName: "database",
      label: "DOSTĘP",
      title: "Umowa o zachowaniu poufności i rejestr wejść",
      description:
        "Jeśli obiekt tego wymaga, dopinamy formalności wcześniej, a nie w dniu realizacji przy bramie lub ochronie.",
      tone: "processes",
    },
    {
      iconName: "clipboardCheck",
      label: "DOKUMENTY",
      title: "Checklista, protokół i zdjęcia po zakończeniu",
      description:
        "Po kontroli przekazujemy dokumenty, które pomagają zgłosić gotowość, rozliczyć etap i ograniczyć wracanie do tych samych uwag.",
      tone: "data",
    },
    {
      iconName: "clipboardCheck",
      label: "OC",
      title: "OC i jasne ramy odpowiedzialności",
      description:
        "Masz jasność, jak wygląda zabezpieczenie współpracy przy realizacjach na obiektach komercyjnych i kto odpowiada za ewentualne szkody.",
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
        "Ustalamy typ obiektu, metraż, termin odbioru, etap prac, strefy krytyczne i to, co najbardziej boli na końcówce.",
    },
    {
      index: "02",
      title: "Widełki, termin i oferta do zatwierdzenia",
      description:
        "Wracamy tego samego dnia po skompletowaniu informacji. Dostajesz zakres, wyłączenia, warunki wejścia i wariant realizacji do przekazania dalej.",
    },
    {
      index: "03",
      title: "Wejście na obiekt i plan stref",
      description:
        "Potwierdzamy okno wejścia, kolejność prac, ograniczenia technologiczne, równoległe ekipy i zasady poruszania się po budowie.",
    },
    {
      index: "04",
      title: "Realizacja, kontrola i protokół",
      description:
        "Pracujemy w ustalonym oknie, robimy odbiór wewnętrzny checklistą i dopiero wtedy przekazujemy protokół oraz zdjęcia do zgłoszenia gotowości.",
    },
  ],
  ctaLabel: "Odbierz ofertę do zatwierdzenia (PDF/HTML)",
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "DOBIERZMY ZAKRES",
  title: "Powiedz, jaki obiekt trzeba przygotować do odbioru",
  description:
    "Wystarczy miasto lub adres inwestycji, metraż, termin odbioru i numer kontaktowy. Resztę doprecyzujemy po zgłoszeniu krótką listą pytań.",
  buttonLabel: "Wyślij minimum danych",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const knowledgeContent: KnowledgeSectionContent = {
  kickerLabel: "REALIZACJE I REFERENCJE",
  titleLines: ["Zobacz, jak pracujemy", "na końcówkach budów"],
  description:
    "Przykładowe realizacje z obiektów komercyjnych. Zobacz, jak wygląda współpraca od pierwszego kontaktu po finalizację realizacji pod odbiór.",
  cards: [
    {
      title: "Realizacje",
      description:
        "Zakresy i efekty z obiektów pod odbiór. Krótkie case’y pokazujące strefy krytyczne, tryb pracy i rezultat.",
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
    { label: "Jeden kontakt" },
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
      question: "Jak ograniczacie poprawki przy końcowym odbiorze?",
      answer:
        "Robimy odbiór wewnętrzny checklistą przed zgłoszeniem gotowości. Najpierw poprawki realizujemy po swojej stronie, a dopiero potem przekazujemy obiekt do dalszej weryfikacji.",
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
      question: "Czy macie własny sprzęt do sprzątania po budowie?",
      answer:
        "Tak. Pracujemy na własnym wyposażeniu, dobieranym do zakresu i typu zabrudzeń, dzięki czemu nie trzeba organizować sprzętu po stronie budowy.",
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
};export default function Home() {
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
