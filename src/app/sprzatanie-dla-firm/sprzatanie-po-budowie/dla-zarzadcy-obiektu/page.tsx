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

// /sprzatanie-po-budowie/zarzadca-obiektu

const defaultContent: PagesHeroContent = {
  badge: "SPRZĄTANIE PO BUDOWIE DLA ZARZĄDCY OBIEKTU",
  titleLines: ["Sprzątanie po budowie", "dopasowane do Twojej odpowiedzialności"],
  emphasisIconName: "building2",
  emphasisSuffix: "/",
  description:
    "Jeśli odpowiadasz za przekazanie obiektu, formalności i komunikację po stronie firmy, potrzebujesz usługi prowadzonej tak, żeby temat dało się sprawnie uruchomić, dopiąć i zamknąć. W Domker porządkujemy zakres, warunki wejścia, dokumenty i końcowe potwierdzenie wykonania.",
  ctaLabel: "Odbierz ofertę do zatwierdzenia (PDF/HTML)",
};

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "ZNASZ TE SYTUACJE?",
  titleLines: ["Co zarządcę obiektu realnie", "spowalnia przy końcówce prac?"],
  description:
    "Przy sprzątaniu po budowie problemem często nie jest sama usługa, tylko liczba rozproszonych ustaleń. Jeśli nie ma jednego kontaktu, jasnego zakresu i dokumentów do przekazania dalej, temat zaczyna angażować więcej osób, niż powinien.",
  items: [
    {
      iconName: "workflow",
      label: "ROZPROSZENIE",
      title: "Za dużo ustaleń między stronami, a za mało jednej odpowiedzialnej ścieżki",
      description:
        "Gdy temat przechodzi przez kilka osób, łatwo zgubić ustalenia, kolejność działań albo najważniejsze informacje potrzebne do startu.",
      tone: "processes",
    },
    {
      iconName: "fileText",
      label: "ZAKRES",
      title: "Trudno ruszyć dalej, jeśli nie wiadomo dokładnie, co obejmuje usługa",
      description:
        "Bez czytelnego zakresu trudno przekazać temat do akceptacji, rozliczenia albo dalszej koordynacji po stronie firmy.",
      tone: "technology",
    },
    {
      iconName: "database",
      label: "KOMUNIKACJA",
      title: "Bez jednego punktu kontaktu temat zaczyna wracać w kilku miejscach naraz",
      description:
        "Zamiast zbierać informacje z różnych stron, lepiej mieć jedną osobę, która prowadzi realizację i zamyka temat od początku do końca.",
      tone: "resources",
    },
    {
      iconName: "shieldAlert",
      label: "FORMALNOŚCI",
      title: "Dostępy, procedury i wymagania obiektu potrafią zatrzymać start prac",
      description:
        "Jeśli formalności nie są dopięte wcześniej, realizacja potrafi stanąć jeszcze przed rozpoczęciem prac albo generować niepotrzebne opóźnienia.",
      tone: "risk",
    },
    {
      iconName: "calendarClock",
      label: "TERMIN",
      title: "Obiekt ma zostać przekazany albo uruchomiony w konkretnym oknie czasowym",
      description:
        "Przy końcówce liczy się nie tylko sam termin, ale też to, czy temat został przygotowany organizacyjnie i czy da się go sprawnie przeprowadzić.",
      tone: "processes",
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
  kickerLabel: "JAK TO PROWADZIMY",
  titleLines: ["Sprzątanie po budowie", "w logice zarządcy obiektu"],
  description:
    "Prowadzimy ten temat tak, żeby ograniczyć liczbę ustaleń po Twojej stronie. Zbieramy minimum danych, dopinamy warunki wejścia, porządkujemy formalności i przekazujemy końcowe potwierdzenie wykonania w formie gotowej do dalszego procedowania.",
  items: [
    {
      iconName: "building2",
      label: "Jeden punkt kontaktu",
      title: "Nie musisz zbierać informacji od kilku osób po stronie wykonawcy",
      description:
        "Od początku wiesz, kto prowadzi temat, odpowiada za ustalenia i wraca do Ciebie z kolejnym krokiem, statusem oraz dokumentami.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Jeden punkt kontaktu po stronie Domker",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "clipboardList",
      label: "Zakres do zatwierdzenia",
      title: "Przygotowujemy usługę tak, żeby łatwo przekazać ją dalej w firmie",
      description:
        "Opisujemy zakres, wyłączenia, warunki wejścia i sposób wykonania w formie, którą można przesłać do przełożonego, zakupów albo administracji.",
      ctaLabel: "Odbierz ofertę",
      mediaAlt: "Zakres do zatwierdzenia",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "shieldAlert",
      label: "Formalności wejścia",
      title: "Uwzględniamy zasady obiektu jeszcze przed startem realizacji",
      description:
        "Jeśli potrzebne są dostępy, NDA, rejestr wejść albo inne procedury, dopinamy je wcześniej, żeby nie zatrzymać tematu w dniu wejścia.",
      ctaLabel: "Ustal warunki wejścia",
      mediaAlt: "Formalności wejścia na obiekt",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "sparkles",
      label: "Realizacja i status",
      title: "Prowadzimy usługę tak, żebyś nie musiał ręcznie spinać każdego etapu",
      description:
        "Po Twojej stronie zostaje decyzja i akceptacja kluczowych ustaleń. Po naszej stronie prowadzenie realizacji, komunikacja i końcowe domknięcie tematu.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Status i prowadzenie realizacji",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "clipboardCheck",
      label: "Dokumenty końcowe",
      title: "Po wykonaniu dostajesz materiał do dalszego przekazania",
      description:
        "Zdjęcia, protokół i potwierdzenie wykonania porządkują temat po stronie firmy i ułatwiają rozliczenie albo formalne zamknięcie etapu.",
      ctaLabel: "Zapytaj o dokumenty",
      mediaAlt: "Dokumenty końcowe po realizacji",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "mapPin",
      label: "Jedna logika działania",
      title: "Tak samo przy jednym obiekcie i przy większej skali współpracy",
      description:
        "Jeśli temat dotyczy więcej niż jednej lokalizacji albo kilku etapów, porządkujemy go tak, żeby nie trzeba było układać wszystkiego od nowa.",
      ctaLabel: "Sprawdź dostępność",
      mediaAlt: "Jedna logika współpracy",
      mediaSrc: "/kontakt",
    },
  ],
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "UPORZĄDKUJMY TEMAT NA STARCIE",
  title: "Powiedz, jakiego obiektu dotyczy temat i co trzeba dopiąć",
  description:
    "Wystarczy lokalizacja, typ obiektu, termin i krótka informacja, czy chodzi o przekazanie, uruchomienie albo końcowe domknięcie etapu. Jeśli są wymagania organizacyjne, dopisz je od razu.",
  buttonLabel: "Wyślij minimum danych",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const benefitsContent: BenefitsSectionContent = {
  kickerLabel: "FORMALNOŚCI I ODPOWIEDZIALNOŚĆ",
  titleLines: ["To, co zwykle spowalnia temat,", "porządkujemy po swojej stronie"],
  description:
  "Przy tej usłudze liczy się nie tylko rezultat na obiekcie, ale też to, czy temat da się sprawnie uruchomić, przekazać dalej i zamknąć bez dodatkowego zbierania informacji z kilku miejsc.",
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
      tone: "finance",
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
      title: "Umowe o zachowaniu poufności\n i rejestry wejść dopinamy z wyprzedzeniem",
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
  titleLines: ["Proces od zgłoszenia", "do zamknięcia tematu"],
  description:
  "Zbieramy minimum danych, doprecyzowujemy wymagania obiektu i przygotowujemy usługę tak, żeby można ją było sprawnie zatwierdzić, uruchomić i rozliczyć. Po Twojej stronie ma zostać jak najmniej ręcznego spinania całości.",
  steps: [
    {
      index: "01",
      title: "Minimum danych i krótka kwalifikacja",
      description:
        "Ustalamy typ obiektu, lokalizację, termin, zakres tematu i ewentualne wymagania organizacyjne po stronie obiektu albo firmy.",
    },
    {
      index: "02",
      title: "Zakres i oferta do przekazania dalej",
      description:
        "Przygotowujemy wariant realizacji, wyłączenia, warunki wejścia i materiały, które można przesłać do akceptacji albo dalszej decyzji.",
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

const knowledgeContent: KnowledgeSectionContent = {
  kickerLabel: "REALIZACJE I REFERENCJE",
  titleLines: ["Zobacz, jak prowadzimy", "tematy po stronie organizacyjnej"],
  description:
    "Przykłady realizacji i współpracy przy obiektach komercyjnych. Zobacz, jak wygląda temat od pierwszego kontaktu przez ustalenia i formalności aż po końcowe przekazanie dokumentacji.",
  cards: [
    {
      title: "Realizacje",
      description:
        "Zakresy, warunki i efekty z obiektów po budowie i remoncie. Krótkie case’y pokazujące, jak przebiegało przygotowanie i domknięcie tematu.",
      buttonLabel: "Zobacz realizacje",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Realizacje Domker dla zarządcy obiektu",
      },
    },
    {
      title: "Referencje i opinie",
      description:
        "Co klienci doceniają przy tej ścieżce współpracy. Najczęściej jeden kontakt, sprawną komunikację, dokumenty końcowe i prostsze procedowanie.",
      buttonLabel: "Zobacz referencje",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Referencje Domker dla zarządcy obiektu",
      },
    },
  ],
};

const contactContent: ContactSectionContent = {
  kickerLabel: "SKONTAKTUJ SIĘ",
  title: "Wyślij minimum danych, a przygotujemy właściwy kolejny krok",
  description:
    "Podaj nazwę obiektu albo firmy, adres, e-mail firmowy i numer telefonu. Napisz też, czy temat dotyczy jednego obiektu, kilku lokalizacji albo dodatkowych wymagań organizacyjnych.",
  chips: [
    { label: "Jeden kontakt" },
    { label: "Formalności po naszej stronie" },
    { label: "Dokumenty końcowe" },
    { label: "Prostsze procedowanie" },
    { label: "Zasięg ogólnopolski" },
    { label: "Szybka kwalifikacja", accent: true },
  ],
  form: {
    emailLabel: "Adres e-mail",
    emailPlaceholder: "Twój adres e-mail",
    phoneLabel: "Numer telefonu",
    phonePlaceholder: "Twój numer telefonu",
    topicLabel: "Temat rozmowy",
    topicPlaceholder: "Jaki obiekt, czego dotyczy temat i na kiedy",
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
  title: "Pytania, które padają u zarządców obiektów",
  description: "Masz więcej pytań? Po prostu",
  highlightText: "skontaktuj się z nami",
  avatars: ["A", "B", "C", "D", "E", "F", "G", "H"],
  items: [
    {
      question: "Czy mogę zacząć bez pełnego briefu?",
      answer:
        "Tak. Na tym etapie wystarczy krótki opis sytuacji, typ obiektu, lokalizacja i termin. Jeśli czegoś będzie brakowało, wrócimy z krótką listą pytań.",
    },
    {
      question: "Jakie informacje są potrzebne do pierwszej wyceny?",
      answer:
        "Najczęściej wystarczy lokalizacja, skala obiektu, etap prac, termin oraz informacja, czy są dodatkowe wymagania organizacyjne albo formalności wejścia.",
    },
    {
      question: "Czy przygotowujecie ofertę do przekazania dalej w firmie?",
      answer:
        "Tak. Przygotowujemy zakres, warunki wejścia, wyłączenia i podstawowe ustalenia w formie, którą można przekazać do przełożonego, zakupów albo administracji.",
    },
    {
      question: "Jak wygląda komunikacja po stronie wykonawcy?",
      answer:
        "Masz jeden punkt kontaktu po naszej stronie. To ta osoba prowadzi ustalenia, wraca ze statusem i przekazuje kolejny krok potrzebny do startu lub zamknięcia tematu.",
    },
    {
      question: "Czy uwzględniacie zasady i procedury obowiązujące na obiekcie?",
      answer:
        "Tak. Jeśli obiekt ma własne zasady wejścia, NDA, rejestry, ograniczenia godzinowe albo inne procedury, uwzględniamy je jeszcze przed realizacją.",
    },
    {
      question: "Czy po wykonaniu dostaję dokumenty końcowe?",
      answer:
        "Tak. Po zakończeniu przekazujemy dokumenty potwierdzające wykonanie, w tym zdjęcia i protokół, żeby temat można było sprawnie przekazać dalej albo rozliczyć.",
    },
    {
      question: "Czy możecie obsłużyć kilka lokalizacji albo kilka etapów?",
      answer:
        "Tak. Jeśli temat dotyczy więcej niż jednego obiektu albo wymaga etapowania, porządkujemy go tak, żeby nie trzeba było każdej rzeczy ustalać od nowa.",
    },
    {
      question: "Czy mogę połączyć kilka potrzeb w jednym zapytaniu?",
      answer:
        "Tak. Jeśli temat obejmuje na przykład sprzątanie po budowie, późniejsze utrzymanie lokalu albo witryny, rozdzielimy to na właściwe kroki.",
    },
    {
      question: "Jak wygląda rozliczenie usługi?",
      answer:
        "Na początku podajemy widełki po minimum danych. Finalne warunki ustalamy po doprecyzowaniu zakresu, formalności i tego, co ma zostać przygotowane w pierwszej kolejności.",
    },
    {
      question: "Czy działacie w całej Polsce?",
      answer:
        "Tak. Prowadzimy realizacje na terenie całej Polski — zarówno dla pojedynczych obiektów, jak i dla współpracy prowadzonej w większej skali.",
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