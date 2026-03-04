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
      question: "Ile kosztuje stworzenie dedykowanego systemu?",
      answer:
        "Koszt realizacji zależy od złożoności projektu — wielkości systemu, liczby funkcji i integracji. Stosunkowo proste aplikacje budujemy już od 30 000 złotych. Najczęściej koszty zamykają się w przedziale od 80 000 do 160 000 złotych, ale bardzo złożone systemy, obejmujące większość operacji, mogą kosztować więcej.\n\nW ramach bezpłatnej konsultacji otrzymasz widełki kosztów bazujące na Twoich potrzebach.",
    },
    {
      question: "Jak długo trwa zaprojektowanie i wdrożenie takiego rozwiązania?",
      answer:
        "Harmonogram zależy od zakresu, złożoności i dostępności zespołu. Najczęściej pierwszy etap zajmuje od kilku do kilkunastu tygodni.",
    },
    {
      question: "Czym różni się wasz system od gotowego narzędzia SaaS?",
      answer:
        "Dedykowany system jest szyty pod Twoje procesy i daje pełną kontrolę nad rozwojem, integracjami oraz bezpieczeństwem danych.",
    },
    {
      question: "Czy system można rozwijać i modyfikować w przyszłości?",
      answer:
        "Tak. System projektujemy modułowo, dzięki czemu możesz go rozwijać wraz z potrzebami zespołu i biznesu.",
    },
    {
      question: "Czy wasze systemy są bezpieczne?",
      answer:
        "Stosujemy sprawdzone praktyki bezpieczeństwa, kontrole dostępu i szyfrowanie. Dodatkowo dopasowujemy polityki do wymogów klienta.",
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
export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <PagesHero content={defaultContent} />
        <ProblemsSection content={problemsContent} />
        <CtaSection content={ctaContent}/>
        <BenefitsSection content={benefitsContent} />
        <ProcessSection content={processContent} />        
        <ContactSection content={contactContent} />
        <FaqSection content={faqContent} />
      </main>
      <Footer />
    </div>
  );
}
