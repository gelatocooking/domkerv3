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
  badge: "USŁUGI DLA SIECI FRANCZYZOWYCH",
  titleLines: [
    "Kompleksowe usługi",
    "porządkowe i techniczne",
    "z jednym punktem kontaktu",
  ],
  emphasisIconName: "building2",
  emphasisSuffix: "/",
  description:
    "Jeśli odpowiadasz za rozwój sieci franczyzowej koordynacja wielu podwykonawców na terenie całego kraju kosztuje więcej czasu i wysiłku. Zlecaj sprzątanie cykliczne i przed otwarciem lub prace konserwacyjne jedną wiadomością e-mail. Resztą zajmie się Twój indywidualny Koordynator w Domker.",
  ctaLabel: "Zamów rozmowę z indywidualnym Koordynatorem",
};

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "ZNASZ TE SYTUACJE?",
  titleLines: [
    "Zamiast zajmować się ekspansją sieci",
    "rozwiązujesz problemy operacyjne?",
  ],
  description:
    "Każdy następny punkt zmaga się ze swoimi własnymi problemami operacyjnymi. Koordynacja wielu podwykonawców wymaga rozbudowanej dokumentacji, stałej dyspozycyjności dla pytań, zgłoszeń i gaszenia pożarów. Koszty zaangażowania są niewspółmierne z przychodami nowopowstałego punktu.",
  items: [
    {
      iconName: "workflow",
      label: "ROZPROSZENIE",
      title: "Za dużo ustaleń między stronami, a za mało jednej odpowiedzialnej ścieżki",
      description:
        "Gdy temat jest powielany w kilku różnych punktach na terenie województw i kraju z różnymi podwykonawcami trzeba stale powtarzać te same ustalenia.",
      tone: "processes",
    },
    {
      iconName: "fileText",
      label: "ZAKRES",
      title: "Trudno zaplanować budżety, bo podwykonawcy pracują na różnych stawkach",
      description:
        "Każda firma ten sam zakres prac wycenia w różny sposób. Negocjacje, aby sprowadzić cenę do średniej kosztują czas i stres.",
      tone: "technology",
    },
    {
      iconName: "users",
      label: "KOMUNIKACJA",
      title: "Bez jednego punktu kontaktu temat zaczyna wracać w kilku miejscach naraz",
      description:
        "Zamiast zbierać informacje z różnych stron, lepiej mieć jedną osobę, która prowadzi realizację i zamyka temat od początku do końca.",
      tone: "resources",
    },
    {
      iconName: "truck",
      label: "DYSPOZYCYJNOŚĆ",
      title: "Szukanie wykonawcy „na cito” podnosi znacząco koszty otwarcia i konserwacji lokalu",
      description:
        "Aby dowieźć termin otwarcia lokalu ogłoszony w socialach trzeba płacić jak za zboże za wejście lokalnej firmy na już, lub dojazdy dyspozycyjnej firmy z daleka.",
      tone: "finance",
    },
    {
      iconName: "calendarClock",
      label: "TERMIN",
      title: "Obiekt ma zostać przekazany albo uruchomiony w konkretnym oknie czasowym",
      description:
        "Tylko niedoświadczone, raczkujące firmy zarezerwują tydzień lub dwa tygodnie, aby wykonać usługę w oknie. Jest to zbędne ryzyko w procesie otwarciowym.",
      tone: "risk",
    },
    {
      iconName: "clipboardCheck",
      label: "POTWIERDZENIE",
      title: "Po wykonaniu prac potrzebne są dokumenty, nie tylko informacja o zakończeniu",
      description:
        "Jeśli temat ma przejść dalej w firmie, potrzebne są zdjęcia, status wykonania i czytelne domknięcie etapu po stronie wykonawcy.",
      tone: "data",
    },
  ],
};

const solutionsContent: SolutionsSectionContent = {
  kickerLabel: "NASZE ROZWIĄZANIA",
  titleLines: [
    "Jedna wiadomość e-mail",
    "rozwiąże nawet 80% problemów operacyjnych",
  ],
  description:
    "Twój indywidualny Koordynator w Domker zorganizuje prace sprzątające przed otwarciem na podstawie przesłanego harmonogramu i lokalizacji. Zareaguje natychmiastowo na zgłoszenie w godzinach otwarcia lokalu i wyśle grupę interwencyjną.",
  items: [
    {
      iconName: "users",
      label: "Jeden punkt kontaktu",
      title: "Nie musisz zbierać informacji od wielu osób z kilku firm",
      description:
        "Od początku wiesz, kto prowadzi temat, odpowiada za ustalenia i wraca do Ciebie z kolejnym krokiem, statusem oraz dokumentami.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Jeden punkt kontaktu po stronie Domker",
      mediaSrc: "/tlo.png",
    },
    {
      iconName: "clipboardList",
      label: "Ryczałtowy zakres",
      title: "Przygotowujemy usługę tak, żeby ją w prosty sposób powielać w różnych miejscach",
      description:
        "Na początku współpracy ustalamy ryczałtowy zakres, który jest zawsze i wszędzie, a marginalne, sporadyczne usługi dogadujemy osobno, w prosty i szybki sposób.",
      ctaLabel: "Odbierz ofertę",
      mediaAlt: "Ryczałtowy zakres usług dla sieci franczyzowych",
      mediaSrc: "/tlo.png",
    },
    {
      iconName: "badgeDollarSign",
      label: "Ryczałtowe koszty",
      title: "Zaplanujesz dokładnie budżet kosztowy ekspansji dzięki ryczałtowi",
      description:
        "Stała stawka za określony zakres, bez małego druczku, doliczeń za dojazd i nieprzewidziane zdarzenia.",
      ctaLabel: "Ustal warunki wejścia",
      mediaAlt: "Ryczałtowe koszty dla sieci franczyzowych",
      mediaSrc: "/tlo.png",
    },
  ],
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "UPORZĄDKUJMY TEMAT NA STARCIE",
  title: "Powiedz jakiej sieci franczyzowej dotyczy temat i jakie są najbliższe tematy do załatwienia",
  description:
    "Wystarczy lokalizacje punktów, typy obiektu, terminy i krótka informacja, czy chodzi o nowe otwarcia czy cykliczną obsługę. Jeśli są wymagania organizacyjne, dopisz je od razu.",
  buttonLabel: "Wyślij minimum danych",
  avatars: ["A", "B", "C", "D", "E", "F"],
};

const benefitsContent: BenefitsSectionContent = {
  kickerLabel: "FORMALNOŚCI I ODPOWIEDZIALNOŚĆ",
  titleLines: [
    "To, co zwykle spowalnia temat,",
    "porządkujemy po swojej stronie",
  ],
  description:
    "Przy obsłudze franczyz ważna jest nie tylko realizacja w konkretnym punkcie, ale też model organizacyjny, który da się powielać bez dokładania chaosu przy kolejnych lokalizacjach.",
  items: [
    {
      iconName: "users",
      label: "JEDEN KONTAKT",
      title: "Wiesz, kto prowadzi temat i do kogo wrócić po decyzję albo status",
      description:
        "To skraca ścieżkę ustaleń i ogranicza sytuacje, w których jedna sprawa wraca równolegle przez kilka osób.",
      tone: "resources",
    },
    {
      iconName: "clipboardCheck",
      label: "ODPOWIEDZIALNOŚĆ",
      title: "Zakres i odpowiedzialność są czytelne jeszcze przed realizacją",
      description:
        "To ogranicza późniejsze nieporozumienia i pozwala sprawniej uzgodnić, co było zakresem, a co stanem zastanym.",
      tone: "data",
    },
    {
      iconName: "fileText",
      label: "B2B",
      title: "Umowa i faktura VAT wpisują się w standardowy proces firmowy",
      description:
        "Dokumenty są przygotowane tak, żeby łatwo przejść przez akceptację, księgowość i dalsze procedowanie po stronie firmy.",
      tone: "technology",
    },
    {
      iconName: "database",
      label: "POUFNOŚĆ",
      title: "Umowę o zachowaniu poufności i rejestry wejść dopinamy z wyprzedzeniem",
      description:
        "Jeżeli obiekt albo firma mają własne procedury, wdrażamy je wcześniej, żeby nie blokować realizacji na starcie.",
      tone: "processes",
    },
    {
      iconName: "clipboardCheck",
      label: "POTWIERDZENIE",
      title: "Po zakończeniu dostajesz dokumenty gotowe do dalszego przekazania",
      description:
        "Zdjęcia, protokół i końcowy status porządkują temat po stronie firmy i ułatwiają jego zamknięcie albo rozliczenie.",
      tone: "data",
    },
    {
      iconName: "shieldAlert",
      label: "ZASADY OBIEKTU",
      title: "Uwzględniamy wymagania organizacyjne jeszcze przed wejściem",
      description:
        "Dostępy, strefy, zasady bezpieczeństwa i dodatkowe formalności powinny być ustalone wcześniej, a nie w dniu realizacji.",
      tone: "risk",
    },
  ],
};

const processContent: ProcessSectionContent = {
  kickerLabel: "JAK DZIAŁAMY?",
  titleLines: [
    "Proces od wstępnego zarysu",
    "do sprawnej ogólnokrajowej obsługi",
  ],
  description:
    "Zbieramy minimum danych, doprecyzowujemy wymagania zakresu i przygotowujemy usługę tak, żeby można ją było sprawnie zatwierdzić, uruchomić, skalować i rozliczyć. Po Twojej stronie ma zostać jak najmniej ręcznego spinania całości.",
  steps: [
    {
      index: "01",
      title: "Minimum danych i krótka kwalifikacja",
      description:
        "Ustalamy lokalizacje punktów, typy obiektu, terminy i informacje, czy chodzi o nowe otwarcia czy cykliczną obsługę oraz ewentualne wymagania organizacyjne po stronie obiektu albo firmy.",
    },
    {
      index: "02",
      title: "Zakres i oferta do przekazania dalej",
      description:
        "Przygotowujemy warianty realizacji, wyłączenia, warunki wejścia i materiały, które można przesłać do akceptacji albo dalszych decyzji. Otrzymasz również wstępną wycenę ryczałtową za poszczególne usługi.",
    },
    {
      index: "03",
      title: "Potwierdzenie formalności i organizacji wejścia",
      description:
        "Dopinamy dostęp, procedury, zasady wejścia, osoby kontaktowe i wszystkie elementy potrzebne do spokojnego startu realizacji.",
    },
    {
      index: "04",
      title: "Realizacja, dokumenty i zamknięcie etapu",
      description:
        "Po wykonaniu przekazujemy status, zdjęcia, protokół i informacje potrzebne do końcowego przekazania albo rozliczenia tematu po stronie firmy.",
    },
  ],
  ctaLabel: "Odbierz ofertę do zatwierdzenia (PDF/HTML)",
};

const contactContent: ContactSectionContent = {
  kickerLabel: "SKONTAKTUJ SIĘ",
  title: "Wyślij minimum danych, a przygotujemy właściwy kolejny krok",
  description:
    "Podaj nazwę sieci albo marki, liczbę punktów, miasta i krótki opis tego, czego dotyczy temat. Napisz też, czy chodzi o nowe otwarcia, utrzymanie standardu, obsługę techniczną czy połączenie kilku potrzeb w jednej współpracy.",
  chips: [
    { label: "Jeden punkt kontaktu" },
    { label: "Skala sieci" },
    { label: "Model B2B" },
    { label: "Zasięg ogólnopolski" },
    { label: "Formalności po naszej stronie" },
    { label: "Szybka kwalifikacja", accent: true },
  ],
  form: {
    emailLabel: "Adres e-mail",
    emailPlaceholder: "Twój adres e-mail",
    phoneLabel: "Numer telefonu",
    phonePlaceholder: "Twój numer telefonu",
    topicLabel: "Zakres i założenia",
    topicPlaceholder:
      "Ile punktów, jakie miasta, jaki typ usług i jaki termin albo model współpracy",
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
  titleLines: ["Zobacz, jak prowadzimy", "tematy po stronie organizacyjnej"],
  description:
    "Przykłady realizacji i współpracy przy obiektach komercyjnych oraz sieciach punktów. To szybki wgląd w to, jak wygląda temat od pierwszej wiadomości do sprawnego domknięcia po naszej stronie.",
  cards: [
    {
      title: "Realizacje",
      description:
        "Przykłady tematów prowadzonych dla punktów handlowych, lokali i sieci. Krótkie case’y pokazujące zakres, logistykę i sposób koordynacji.",
      buttonLabel: "Zobacz realizacje",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Realizacje Domker dla franczyz i sieci",
      },
    },
    {
      title: "Sposób prowadzenia współpracy",
      description:
        "Jak wygląda organizacja od strony komunikacji, harmonogramu i przekazywania kolejnych kroków przy większej skali współpracy.",
      buttonLabel: "Zobacz, jak to prowadzimy",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Organizacja współpracy Domker dla franczyz",
      },
    },
  ],
};

const faqContent: FaqSectionContent = {
  kickerLabel: "NAJCZĘŚCIEJ ZADAWANE PYTANIA",
  title: "Pytania, które padają przy obsłudze franczyz i sieci",
  titleLines: ["Pytania, które padają", "przy obsłudze franczyz i sieci"],
  description: "Masz więcej pytań? Po prostu",
  highlightText: "skontaktuj się z nami",
  avatars: ["A", "B", "C", "D", "E", "F", "G", "H"],
  cta: {
    label: "Przejdź do kontaktu",
    href: "/kontakt",
  },
  items: [
    {
      question: "Czy możecie obsługiwać wiele lokalizacji w różnych miastach?",
      answer:
        "Tak. Ustalamy jeden sposób współpracy, jeden punkt kontaktu i jeden model komunikacji, dzięki czemu nie trzeba organizować każdej lokalizacji osobno od zera.",
    },
    {
      question: "Czy po naszej stronie jest jedna osoba do kontaktu?",
      answer:
        "Tak. Po stronie Domker temat prowadzi indywidualny Koordynator, który wraca do Ciebie ze statusem, ustaleniami, dokumentami i kolejnymi krokami.",
    },
    {
      question: "Czy obsługujecie nowe otwarcia i działające już punkty?",
      answer:
        "Tak. Możemy wejść zarówno przy przygotowaniu lokalu przed otwarciem, po remoncie lub reficie, jak i przy późniejszej obsłudze cyklicznej działających punktów.",
    },
    {
      question: "Jak wygląda wycena przy większej liczbie punktów?",
      answer:
        "Nie działamy na prostym cenniku, bo przy sieciach znaczenie mają zakres, typ lokalu, logistyka, częstotliwość i termin. Przygotowujemy model wyceny, który da się łatwo porównać i skalować między lokalizacjami.",
    },
    {
      question: "Jakie minimum informacji trzeba wysłać na start?",
      answer:
        "Wystarczą lokalizacje, liczba punktów lub witryn, typ obiektów, termin oraz informacja, czy chodzi o nowe otwarcia, interwencje czy obsługę cykliczną.",
    },
    {
      question: "Czy mogę dostać ofertę do przekazania dalej w firmie?",
      answer:
        "Tak. Przygotowujemy ofertę z zakresem, warunkami i wyceną w formie, którą można łatwo przesłać do przełożonego, zarządu, działu zakupów albo operacji.",
    },
    {
      question: "Czy działacie w całej Polsce?",
      answer:
        "Tak. Prowadzimy realizacje w skali ogólnopolskiej i układamy współpracę tak, żeby kolejne lokalizacje nie wymagały każdorazowo budowania procesu od początku.",
    },
    {
      question: "Jak pilnujecie standardu przy wielu lokalizacjach?",
      answer:
        "Opieramy realizację na stałym zakresie, koordynacji, kontroli wykonania i czytelnym modelu raportowania. Dzięki temu łatwiej utrzymać powtarzalny standard między punktami.",
    },
  ],
};


const WIDOW_KEYS = new Set(["description", "consentText"]);

const fixWidows = (text: string) => {
  return text.replace(/\b(a|i|o|u|w|z|na|do|od|za|po|we|ze)\s+/gi, "$1\u00A0");
};

const fixContentDeep = <T,>(value: T, key?: string): T => {
  if (typeof value === "string") {
    if (!key || !WIDOW_KEYS.has(key)) {
      return value;
    }

    return fixWidows(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => fixContentDeep(item, key)) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([entryKey, entryValue]) => [
        entryKey,
        fixContentDeep(entryValue, entryKey),
      ])
    ) as T;
  }

  return value;
};

const fixedDefaultContent = fixContentDeep(defaultContent);
const fixedProblemsContent = fixContentDeep(problemsContent);
const fixedSolutionsContent = fixContentDeep(solutionsContent);
const fixedCtaContent = fixContentDeep(ctaContent);
const fixedBenefitsContent = fixContentDeep(benefitsContent);
const fixedProcessContent = fixContentDeep(processContent);
const fixedContactContent = fixContentDeep(contactContent);
const fixedKnowledgeContent = fixContentDeep(knowledgeContent);
const fixedFaqContent = fixContentDeep(faqContent);

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <PagesHero content={fixedDefaultContent} />
        <ProblemsSection content={fixedProblemsContent} />
        <SolutionsSection content={fixedSolutionsContent} />
        <CtaSection content={fixedCtaContent} />
        <BenefitsSection content={fixedBenefitsContent} />
        <ProcessSection content={fixedProcessContent} />
        <ContactSection content={fixedContactContent} />
        <KnowledgeSection content={fixedKnowledgeContent} />
        <FaqSection content={fixedFaqContent} />
      </main>
      <Footer />
    </div>
  );
}
