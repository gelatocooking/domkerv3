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

// /sprzatanie-dla-firm

const defaultContent: HeroContent = {
  badge: "SPRZĄTANIE DLA FIRM I SIECI",
  titleLines: ["Sprzątanie dla firm i sieci", "handlowych pod termin"],
  emphasisIconName: "lightbulb",
  emphasisSuffix: "/",
  description:
    "To strona wyboru scenariusza. Wybierasz sytuację, a my pokazujemy jak wygląda wejście, jak prowadzimy realizację i co dostajesz na końcu do rozliczenia i zamknięcia tematu w firmie.",
  ctaLabel: "Wyślij minimum danych",
  imageSrc: "/tlo.png",
  imageAlt: "Sprzątanie dla firm i sieci",
};

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "ZNASZ TE WYZWANIA?",
  titleLines: ["Co firmy realnie chcą mieć", "„załatwione”"],
  description:
    "W B2B najdroższe są niedopowiedzenia. Dlatego ten hub porządkuje temat: scenariusz, warunki wejścia, standard, komunikacja i potwierdzenie wykonania w formie, którą da się przekazać dalej.",
  items: [
    {
      iconName: "calendarClock",
      label: "OKNO",
      title: "Wejście bez blokad",
      description:
        "Jeden termin wejścia, potwierdzone warunki i jasny plan dnia na obiekcie.",
      tone: "processes",
    },
    {
      iconName: "workflow",
      label: "KOORDYNACJA",
      title: "Jedna osoba po stronie wykonawcy",
      description:
        "Stały kontakt, krótkie ustalenia i szybkie decyzje bez ping-ponga między ekipami.",
      tone: "processes",
    },
    {
      iconName: "layoutGrid",
      label: "WIELE PUNKTÓW",
      title: "Powtarzalny standard w sieci",
      description:
        "Ten sam zakres, checklisty i kontrola jakości, niezależnie od miasta i lokalizacji.",
      tone: "data",
    },
    {
      iconName: "truck",
      label: "CIĄGŁOŚĆ",
      title: "Zastępstwa i rezerwa mocy",
      description:
        "Backup ludzi i sprzętu, żeby nie zatrzymać realizacji, gdy coś wypada w ostatniej chwili.",
      tone: "resources",
    },
    {
      iconName: "shieldAlert",
      label: "RYZYKO",
      title: "Bezpieczne wejście po pracach",
      description:
        "Zasady pracy na nowych powierzchniach i ograniczenie ryzyk uszkodzeń przez technologię.",
      tone: "risk",
    },
    {
      iconName: "fileText",
      label: "ROZLICZENIE",
      title: "Temat zamknięty w papierach",
      description:
        "Dokumenty i potwierdzenia w formie, którą łatwo rozliczyć i zamknąć po stronie firmy.",
      tone: "technology",
    },
  ],
};

const solutionsContent: SolutionsSectionContent = {
  kickerLabel: "WYBIERZ SCENARIUSZ",
  titleLines: ["Wybierz scenariusz", "i przejdź od problemu do decyzji"],
  description:
    "Każdy scenariusz ma inny tryb pracy i inne ryzyka. Wybierz sytuację, a przeprowadzimy Cię przez właściwą usługę i najkrótszą ścieżkę do domknięcia tematu.",
  items: [
    {
      iconName: "hardHat",
      label: "Sprzątanie po budowie / przed otwarciem",
      title: "Gdy liczysz dni, nie tygodnie",
      description:
        "Ustalamy okno wejścia, priorytety i kontrolę wewnętrzną. Przechodzisz dalej do usługi i widzisz, jak domykamy etap pod termin.",
      ctaLabel: "Zobacz usługę",
      mediaAlt: "Sprzątanie po budowie",
      mediaSrc: "/sprzatanie-po-budowie",
    },
    {
      iconName: "clipboardList",
      label: "Sieci: wiele lokalizacji",
      title: "Gdy problemem jest rozproszenie",
      description:
        "Koordynacja w wielu miastach, jeden kontakt i jeden standard. Układamy harmonogramy, kontrolę i raportowanie, żeby wynik był porównywalny.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Obsługa sieci",
      mediaSrc: "/kontakt#minimum-danych",
    },
    {
      iconName: "building2",
      label: "Stała obsługa: biura i lokale",
      title: "Gdy chcesz stabilnego standardu",
      description:
        "Stały zakres, grafiki, kontrola jakości i szybkie korekty. Zamiast szukania wykonawcy co miesiąc masz serwis, który działa w tle.",
      ctaLabel: "Zobacz usługę",
      mediaAlt: "Utrzymanie czystości",
      mediaSrc: "/utrzymanie-czystosci",
    },
    {
      iconName: "sparkles",
      label: "Witryny: abonament / ryczałt dla sieci",
      title: "Gdy liczy się powtarzalność i raport",
      description:
        "Stałe okna realizacji, logistyka po naszej stronie i potwierdzenie wykonania po każdej wizycie. Dobre rozwiązanie, gdy chcesz temat zautomatyzować.",
      ctaLabel: "Zobacz usługę",
      mediaAlt: "Mycie witryn i okien",
      mediaSrc: "/mycie-okien-i-witryn",
    },
    {
      iconName: "grid3x3",
      label: "Posadzki: doczyszczanie (B2B)",
      title: "Gdy standard ma być widoczny",
      description:
        "Doczyszczanie i odplamianie pod typ nawierzchni. Przechodzisz do usługi i widzisz, kiedy ma sens technologia zamiast doraźnych prób.",
      ctaLabel: "Zobacz usługę",
      mediaAlt: "Maszynowe czyszczenie posadzek",
      mediaSrc: "/maszynowe-czyszczenie-posadzek",
    },
    {
      iconName: "mapPin",
      label: "Zasięg i moce przerobowe",
      title: "Gdy działasz w więcej niż jednym mieście",
      description:
        "Dobieramy zespoły do terminu i okna wejścia. Zasięg ogólnopolski pozwala prowadzić jedną współpracę zamiast wielu lokalnych ustaleń.",
      ctaLabel: "Sprawdź dostępność",
      mediaAlt: "Zasięg realizacji",
      mediaSrc: "/kontakt",
    },
  ],
};

const benefitsContent: BenefitsSectionContent = {
  kickerLabel: "FORMALNOŚCI I ODPOWIEDZIALNOŚĆ",
  titleLines: ["Formalności i odpowiedzialność", "po naszej stronie"],
  description:
    "W firmach nie chodzi tylko o wykonanie. Chodzi o dopuszczenie do obiektu, zgodność z procedurami i jasną odpowiedzialność. To elementy, które porządkujemy już na starcie współpracy.",
  items: [
    {
      iconName: "users",
      label: "ZESPOŁY",
      title: "Stałe ekipy i jasne przypisanie",
      description:
        "Wiesz, kto wchodzi i kto odpowiada. To skraca ustalenia i przyspiesza realizację na kolejnych punktach.",
      tone: "resources",
    },
    {
      iconName: "shieldAlert",
      label: "BHP",
      title: "Wejście zgodne z zasadami obiektu",
      description:
        "Dopasowujemy się do wymagań i ograniczeń, żeby nie było zatrzymań prac w dniu realizacji.",
      tone: "risk",
    },
    {
      iconName: "database",
      label: "POUFNOŚĆ",
      title: "Procedury i poufność, gdy są wymagane",
      description:
        "Jeśli obiekt tego wymaga, dopinamy formalności wcześniej, a nie w ostatniej chwili przy wejściu.",
      tone: "processes",
    },
    {
      iconName: "clipboardCheck",
      label: "POTWIERDZENIA",
      title: "Kontrola i potwierdzenie wykonania",
      description:
        "Na koniec dostajesz czytelne potwierdzenie, żeby dało się zamknąć temat wewnętrznie i rozliczyć usługę.",
      tone: "data",
    },
    {
      iconName: "clipboardCheck",
      label: "OC",
      title: "OC i odpowiedzialność po stronie wykonawcy",
      description:
        "Masz jasność, jak wygląda odpowiedzialność i zabezpieczenie współpracy na obiektach komercyjnych.",
      tone: "finance",
    },
    {
      iconName: "fileText",
      label: "B2B",
      title: "Umowa i faktura VAT jako standard",
      description:
        "Prosty proces zakupowy, który przechodzi przez księgowość i działy operacyjne bez dodatkowych „dogrywek”.",
      tone: "technology",
    },
  ],
};

const processContent: ProcessSectionContent = {
  kickerLabel: "JAK DZIAŁAMY?",
  titleLines: ["Transparentna współpraca", "krok po kroku"],
  description:
    "Ten proces dotyczy współpracy B2B i sieci. Zamiast wymiany dziesiątek maili ustalamy minimum danych, scenariusz i standard, a potem dowozimy realizację w przewidywalny sposób.",
  steps: [
    {
      index: "01",
      title: "Minimum danych i szybka kwalifikacja",
      description:
        "Zbieramy podstawy: typ obiektu, skala, miasto i termin. Jeśli temat jest pilny, od razu potwierdzamy dostępność i ryzyka wejścia.",
    },
    {
      index: "02",
      title: "Ustalenie scenariusza i standardu",
      description:
        "Doprecyzowujemy zakres i standard do weryfikacji. W sieciach ustalamy powtarzalność, okna realizacji i sposób kontroli.",
    },
    {
      index: "03",
      title: "Realizacja i bieżąca komunikacja",
      description:
        "Wchodzimy zgodnie z oknem, pracujemy według ustaleń i trzymamy komunikację po drodze, żeby decyzje nie czekały do końca dnia.",
    },
    {
      index: "04",
      title: "Potwierdzenie i domknięcie tematu",
      description:
        "Dostarczamy potwierdzenie wykonania w formie gotowej do przekazania dalej. Temat jest zamknięty, a nie „do dopilnowania”.",
    },
  ],
  ctaLabel: "Wyślij minimum danych",
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "DOBIERZMY SCENARIUSZ",
  title: "Powiedz, co chcesz mieć załatwione i w jakim trybie",
  description:
    "Jeśli masz jedną lokalizację, wystarczy miasto, metraż i termin. Jeśli to sieć, podaj liczbę punktów i częstotliwość. Wrócimy z krótką listą pytań i najprostszą ścieżką realizacji.",
  buttonLabel: "Wyślij minimum danych",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const knowledgeContent: KnowledgeSectionContent = {
  kickerLabel: "REALIZACJE I REFERENCJE",
  titleLines: ["Zobacz, jak pracujemy", "w różnych scenariuszach B2B"],
  description:
    "Przykładowe realizacje z różnych typów obiektów. Zobacz, jak wygląda współpraca w praktyce, od pierwszego kontaktu po domknięcie tematu.",
  cards: [
    {
      title: "Realizacje",
      description:
        "Zakresy i efekty z obiektów komercyjnych. Krótkie case’y, które pokazują tryb pracy i rezultat.",
      buttonLabel: "Zobacz realizacje",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Realizacje Domker",
      },
    },
    {
      title: "Referencje i opinie",
      description:
        "Co klienci B2B doceniają w współpracy. Najczęściej przewidywalność, komunikację i łatwe rozliczenie tematu.",
      buttonLabel: "Zobacz referencje",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Referencje Domker",
      },
    },
  ],
};

const contactContent: ContactSectionContent = {
  kickerLabel: "SKONTAKTUJ SIĘ",
  title: "Wyślij minimum danych, a my ułożymy resztę",
  description:
    "Opisz sytuację jednym zdaniem. Jeśli to sieć, dopisz liczbę lokalizacji i miasta. Jeśli to pojedynczy obiekt, wystarczy metraż i termin. Wrócimy z krótką listą pytań i konkretnym następnym krokiem.",
  chips: [
    { label: "Dobór scenariusza" },
    { label: "Jeden kontakt" },
    { label: "Standard w sieci" },
    { label: "Kontrola jakości" },
    { label: "Zasięg ogólnopolski" },
    { label: "Szybka kwalifikacja", accent: true },
  ],
  form: {
    emailLabel: "Adres e-mail",
    emailPlaceholder: "Twój adres e-mail",
    phoneLabel: "Numer telefonu",
    phonePlaceholder: "Twój numer telefonu",
    topicLabel: "Temat rozmowy",
    topicPlaceholder: "Ile lokalizacji lub jaki obiekt i na kiedy",
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
