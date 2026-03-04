import Header from "../../components/Header/Header";
import Hero, { type HeroContent } from "../../components/Hero/Hero";

import ContactSection, {
  type ContactSectionContent,
} from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";
import styles from "./page.module.css";
import PagesHero from "@/components/PagesHero/PagesHero";
import ProblemsSection, { ProblemsSectionContent } from "@/components/ProblemsSection/ProblemsSection";
import BenefitsSection, {
  type BenefitsSectionContent,
} from "@/components/BenefitsSection/BenefitsSection";
import ProcessSection, {
  type ProcessSectionContent,
} from "@/components/ProcessSection/ProcessSection";
import FaqSection, { type FaqSectionContent } from "@/components/FaqSection/FaqSection";
import CtaSection, { type CtaSectionContent } from "../../components/CtaSection/CtaSection";
import SolutionsSection, { SolutionsSectionContent } from "@/components/SolutionsSection/SolutionsSection";
import KnowledgeSection, { KnowledgeSectionContent } from "@/components/KnowledgeSection/KnowledgeSection";

const defaultContent: HeroContent = {
  badge: "SPRZĄTANIE DLA FIRM I SIECI",
  titleLines: ["Sprzątanie dla firm i sieci", "handlowych pod termin"],
  emphasisIconName: "lightbulb",
  emphasisSuffix: "/",
  description:
    "To hub współpracy B2B: wybierasz scenariusz, widzisz jak prowadzimy temat operacyjnie i przechodzisz do właściwej usługi. „Zamknięcie tematu” = oferta do zatwierdzenia + protokoły odbioru + zdjęcia.",
  ctaLabel: "Odbierz ofertę do zatwierdzenia (PDF/HTML)",
  imageSrc: "/tlo.png",
  imageAlt: "Sprzątanie dla firm i sieci",
};
const solutionsContent: SolutionsSectionContent = {
  kickerLabel: "WYBIERZ SCENARIUSZ",
  titleLines: ["Wybierz scenariusz", "i przejdź od problemu do decyzji"],
  description:
    "To hub współpracy B2B. Wybierz sytuację — pokażemy, kiedy ma sens, jak dowozimy temat operacyjnie i gdzie przejść do właściwej usługi.",
  items: [
    {
      iconName: "hardHat",
      label: "Sprzątanie po budowie / przed otwarciem",
      title: "Kiedy liczy się czas: odbiór, przekazanie, otwarcie",
      description:
        "Ustawiamy priorytety i okno wejścia, żeby zamknąć temat w terminie: kolejność prac, wejścia „między robotami”, odbiór wewnętrzny checklistą + zdjęcia.",
      ctaLabel: "Zobacz usługę",
      mediaAlt: "Sprzątanie po budowie",
      mediaSrc: "/sprzatanie-po-budowie",},
    {
      iconName: "clipboardList",
      label: "Sieci: wiele lokalizacji",
      title: "Gdy problemem jest powtarzalność i losowość ekip",
      description:
        "Dowozimy standard w wielu miastach: koordynacja i jeden kontakt, checklisty i kontrola wykonania, backup ludzi i sprzętu dla ciągłości terminu.",
      ctaLabel: "Zapytaj / wyślij minimum danych",
      mediaAlt: "Obsługa sieci",
      mediaSrc: "/kontakt#minimum-danych",
    },
    {
      iconName: "building2",
      label: "Stała obsługa: biura i lokale",
      title: "Gdy chcesz stały standard bez przerw i zastępstwa",
      description:
        "Utrzymanie działa, gdy jest poukładane: harmonogram i zakres, kontrola jakości, szybkie korekty oraz ciągłość serwisu (zastępstwa ludzi i sprzętu).",
      ctaLabel: "Zobacz usługę",
      mediaAlt: "Utrzymanie czystości",
      mediaSrc: "/utrzymanie-czystosci",
    },
    {
      iconName: "sparkles",
      label: "Witryny: abonament / ryczałt dla sieci",
      title: "Gdy chcesz mieć temat „z głowy” i przewidywalne terminy",
      description:
        "Abonament i szybka wycena ze zdjęć. Dla sieci możliwy ryczałt: stałe okna realizacji, logistyka po naszej stronie i raport po wykonaniu.",
      ctaLabel: "Zobacz usługę",
      mediaAlt: "Mycie witryn i okien",
      mediaSrc: "/mycie-okien-i-witryn",
    },
    {
      iconName: "grid3x3",
      label: "Posadzki: doczyszczanie (B2B)",
      title: "Gdy zabrudzenia wymagają technologii i pewnego efektu",
      description:
        "Maszynowe czyszczenie dopasowane do typu posadzki i zabrudzeń: ekspertyza plam, bezpieczna chemia i odplamianie, efekt do odbioru bez ryzyka uszkodzeń.",
      ctaLabel: "Zobacz usługę",
      mediaAlt: "Maszynowe czyszczenie posadzek",
      mediaSrc: "/maszynowe-czyszczenie-posadzek",
    },
    {
      iconName: "mapPin",
      label: "Zasięg i moce przerobowe",
      title: "Cała Polska + tempo, gdy warunki wejścia są potwierdzone",
      description:
        "Dobieramy zespoły i sprzęt do terminu: do 5000 m² dziennie lub do 300 doczyszczonych okien dziennie* — zależnie od zakresu i okna realizacji na obiekcie.",
      ctaLabel: "Sprawdź dostępność",
      mediaAlt: "Zasięg realizacji",
      mediaSrc: "/kontakt",
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

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "ZNASZ TE WYZWANIA?",
  titleLines: ["Co firmy realnie chcą mieć", "„załatwione”"],
  description:
    "W B2B nie wygrywa najładniejszy opis. Wygrywa przewidywalność: wejście, bezpieczeństwo wykończeń, standard w wielu lokalizacjach i domknięcie tematu dokumentami.",
  items: [
    {
      iconName: "calendarClock",
      label: "OKNO",
      title: "Wejście w oknie",
      description:
        "Także po godzinach i „między robotami” — dopasowane do harmonogramu na obiekcie.",
      tone: "processes",
    },
    {
      iconName: "sparkles",
      label: "WYKOŃCZENIA",
      title: "Bezpieczne dla wykończeń",
      description:
        "Podłogi, szkło i armatura — technologia dobrana tak, by nie zostawić rys i matu.",
      tone: "risk",
    },
    {
      iconName: "fileText",
      label: "OFERTA",
      title: "Oferta gotowa do przekazania",
      description:
        "PDF/HTML do zatwierdzenia — bez 5 rund doprecyzowań i dopytywania o podstawy.",
      tone: "data",
    },
    {
      iconName: "layoutGrid",
      label: "SIEĆ",
      title: "Powtarzalny standard w sieci",
      description:
        "Stały zakres, checklisty i kontrola jakości — ten sam efekt w wielu lokalizacjach.",
      tone: "processes",
    },
    {
      iconName: "truck",
      label: "CIĄGŁOŚĆ",
      title: "Ciągłość serwisu",
      description:
        "Zastępstwa ludzi i sprzętu — żeby dowieźć termin, nawet gdy coś „się wysypie”.",
      tone: "resources",
    },
    {
      iconName: "clipboardCheck",
      label: "DOKUMENTY",
      title: "Domknięcie tematu",
      description:
        "Protokoły odbioru + zdjęcia — gotowe do przekazania dalej i do zamknięcia etapu.",
      tone: "technology",
    },
  ],
};

const benefitsContent: BenefitsSectionContent = {
  kickerLabel: "FORMALNOŚCI I ODPOWIEDZIALNOŚĆ",
  titleLines: ["Formalności i odpowiedzialność", "po naszej stronie"],
  description:
    "To elementy, które Domker zapewnia i dokumentuje, żeby dało się wejść na obiekt i przejść odbiór zgodnie z procedurami — bez blokad, niedomówień i „braków w papierach”.",
  items: [
    {
      iconName: "users",
      label: "KADRY",
      title: "Legalne zatrudnienie i przeszkolone zespoły",
      description:
        "Pracownicy są legalnie zatrudnieni i przeszkoleni. Dzięki temu wchodzisz w realizację bez ryzyk kadrowych i przestojów.",
      tone: "resources",
    },
    {
      iconName: "shieldAlert",
      label: "BHP",
      title: "Szkolenia BHP i analiza zagrożeń przed startem",
      description:
        "Przygotowujemy wejście zgodnie z BHP i analizą ryzyk na obiekcie. To ogranicza incydenty i ułatwia dopuszczenie do prac.",
      tone: "risk",
    },
    {
      iconName: "clipboardCheck",
      label: "DOKUMENTY",
      title: "Protokoły odbioru + zdjęcia (i protokół usterek, gdy dotyczy)",
      description:
        "Domykamy temat dokumentami: protokół odbioru i zdjęcia. Jeśli wyjdą usterki — dostajesz protokół do decyzji co dalej.",
      tone: "data",
    },
    {
      iconName: "clipboardCheck",
      label: "OC",
      title: "Ubezpieczenie OC na jasno określonych poziomach",
      description:
        "OC: do końca marca 2026 — 500 000 zł. Od kwietnia 2026 — 2 000 000 zł. Masz jasność odpowiedzialności po naszej stronie.",
      tone: "finance",
    },
    {
      iconName: "database",
      label: "POUFNOŚĆ",
      title: "Umowa o zachowaniu poufności i rejestr wejść, jeśli obiekt tego wymaga",
      description:
        "Wdrażamy formalności przed startem: NDA, rejestr wejść i procedury obiektu. Dzięki temu nie ma blokad w dniu realizacji.",
      tone: "processes",
    },
    {
      iconName: "fileText",
      label: "ROZLICZENIA",
      title: "Umowa i faktura VAT — standard B2B",
      description:
        "Pracujemy na umowie i wystawiamy fakturę VAT. Prosty, akceptowalny proces zakupowy i komplet dokumentów do przekazania dalej.",
      tone: "technology",
    },
  ],
};

const processContent: ProcessSectionContent = {
  kickerLabel: "JAK DZIAŁAMY?",
  titleLines: ["Transparentna współpraca", "krok po kroku"],
  description:
    "Skuteczne wdrożenie to efekt jasnego planu i bliskiej współpracy. Dlatego prowadzimy Cię sprawdzonym procesem, który daje przewidywalność i dopasowanie do realnych potrzeb Twojego biznesu.",
  steps: [
    {
      index: "01",
      title: "Bezpłatne warsztaty i koncepcja",
      description:
        "Zaczynamy od warsztatów, podczas których poznajemy Twoje potrzeby i wyzwania. Tworzymy wstępną koncepcję aplikacji, klikany prototyp i widełki cenowe — bez zobowiązań.",
    },
    {
      index: "02",
      title: "Plan działania i analiza biznesowa",
      description:
        "Organizujemy warsztat zerowy, na którym precyzujemy zakres prac, doprecyzowujemy funkcjonalności i harmonogram. Równolegle nasi analitycy i projektanci mapują procesy i tworzą specyfikację oraz intuicyjny interfejs.",
    },
    {
      index: "03",
      title: "Development i testy",
      description:
        "Do pracy przystępują doświadczeni deweloperzy. System powstaje moduł po module. Testy odbywają się równolegle z developmentem — dzięki temu błędy są eliminowane na bieżąco.",
    },
    {
      index: "04",
      title: "Wdrożenie i płynny start",
      description:
        "Dbamy, by uruchomienie systemu było bezproblemowe. Pomagamy w migracji danych, szkolimy zespół i zapewniamy wsparcie, by system działał od pierwszego dnia.",
    },
  ],
  ctaLabel: "Umów bezpłatne warsztaty",
};

const faqContent: FaqSectionContent = {
  kickerLabel: "NAJCZĘŚCIEJ ZADAWANE PYTANIA",
  title: "Masz pytania? Odpowiadamy!",
  description: "Masz więcej pytań? Po prostu",
  highlightText: "skontaktuj się z nami",
  avatars: ["A", "B", "C", "D", "E", "F", "G", "H"],
  items: [
    {
      question: "Jakie usługi obejmuje „sprzątanie dla firm” w Domker?",
      answer:
        "To hub usług B2B dla obiektów komercyjnych: sprzątanie po budowie i wykończeniówce, cykliczne utrzymanie czystości biur i lokali oraz mycie okien i witryn. Dokładny zakres zależy od scenariusza i jest opisany na podstronach usług.",
    },
    {
      question: "Czy Domker realizuje sprzątanie dla firm w całej Polsce?",
      answer:
        "Tak — działamy w całej Polsce. Obsługujemy zarówno pojedyncze zlecenia „pod odbiór”, jak i współpracę w wielu miastach dla sieci i firm z wieloma lokalizacjami.",
    },
    {
      question: "Jak wygląda wycena sprzątania B2B i od czego zależy cena?",
      answer:
        "Cena zależy głównie od skali (m² / liczby punktów), typu obiektu, poziomu zabrudzeń i terminu. Zbieramy minimum danych, wracamy z widełkami i proponujemy najprostszy wariant realizacji pod odbiór lub utrzymanie.",
    },
    {
      question: "Jakie informacje są potrzebne do szybkiej wyceny?",
      answer:
        "Zwykle wystarczy: miasto, typ obiektu, skala (m² / liczba lokali / liczba witryn), preferowany termin i zdjęcia poglądowe. To pozwala przejść od zapytania do konkretów bez długiej wymiany wiadomości.",
    },
    {
      question: "Czy mogę zlecić sprzątanie jednorazowe, czy tylko stałą obsługę?",
      answer:
        "Możesz zlecić zarówno jednorazowe sprzątanie „pod odbiór” (po pracach / przed otwarciem), jak i stałe utrzymanie czystości w modelu cyklicznym. Dobór zależy od celu i rytmu obiektu.",
    },
    {
      question: "Czy sprzątanie biur i lokali usługowych to osobne usługi?",
      answer:
        "Tak. Biura i lokale handlowo-usługowe to różne scenariusze: inna częstotliwość, organizacja i rozliczenia. Dlatego są rozpisane na osobnych podstronach w HUB-ie usług.",
    },
    {
      question: "Czy można zacząć od pilotażu przed dłuższą współpracą?",
      answer:
        "Tak. Pilotaż pozwala szybko ustalić zakres, standard i sposób rozliczeń na jednej lokalizacji, a dopiero potem rozszerzyć współpracę na kolejne punkty lub miasta.",
    },
    {
      question: "Jak rozliczane są usługi: jednorazowo, abonamentowo czy ryczałtem?",
      answer:
        "Zależnie od scenariusza: jednorazowo (zlecenie/etap), abonamentowo (cykliczne utrzymanie) lub ryczałtowo, jeśli zakres jest powtarzalny — szczególnie w sieciach.",
    },
    {
      question: "Co jeśli mam kilka tematów naraz: sprzątanie + witryny + utrzymanie?",
      answer:
        "Możesz wysłać jedno zapytanie. Porządkujemy je na scenariusze i wracamy z propozycją podziału na etapy lub harmonogram — tak, żeby decyzja po Twojej stronie była prosta.",
    },
    {
      question: "Czy odpowiecie, jeśli mam niepełne informacje?",
      answer:
        "Tak. Jeśli masz tylko podstawy (np. miasto i termin), wrócimy z krótką listą pytań, żeby domknąć minimum danych. Dopiero wtedy podamy sensowne widełki i kolejny krok.",
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

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <PagesHero content={defaultContent} />
        <ProblemsSection content={problemsContent} />
                <SolutionsSection content={solutionsContent} />
        
        <CtaSection content={ctaContent}/>
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
