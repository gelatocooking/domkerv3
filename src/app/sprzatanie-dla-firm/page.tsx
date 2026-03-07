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
    "To hub współpracy B2B. Wybierasz scenariusz, a my pokazujemy, jak wygląda wejście, sposób prowadzenia realizacji i która usługa będzie właściwa dla Twojej sytuacji.",
  ctaLabel: "Wyślij minimum danych",
  imageSrc: "/tlo.png",
  imageAlt: "Sprzątanie dla firm i sieci",
};

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "ZNASZ TE WYZWANIA?",
  titleLines: ["Co firmy realnie", "chcą mieć poukładane operacyjnie?"],
  description:
    "W B2B najwięcej czasu tracą niedoprecyzowane założenia. Dlatego ten hub porządkuje tryb współpracy, warunki wejścia, standard i sposób rozliczenia przed wyborem właściwej usługi.",
  items: [
    {
      iconName: "calendarClock",
      label: "OKNO",
      title: "Wejście ma być możliwe w realnym terminie",
      description:
        "Niezależnie od scenariusza liczy się potwierdzone okno realizacji i jasne warunki pracy na obiekcie.",
      tone: "processes",
    },
    {
      iconName: "workflow",
      label: "KOORDYNACJA",
      title: "Po stronie wykonawcy ma być jeden czytelny kontakt",
      description:
        "Krótka ścieżka ustaleń, szybkie decyzje i brak rozproszenia odpowiedzialności między wieloma osobami.",
      tone: "processes",
    },
    {
      iconName: "layoutGrid",
      label: "WIELE PUNKTÓW",
      title: "Przy sieciach potrzebny jest ten sam standard",
      description:
        "Powtarzalny zakres, checklisty i kontrola wykonania niezależnie od miasta, punktu czy częstotliwości prac.",
      tone: "data",
    },
    {
      iconName: "truck",
      label: "CIĄGŁOŚĆ",
      title: "Realizacja nie może zależeć od jednej ekipy",
      description:
        "Rezerwa ludzi i sprzętu zwiększa stabilność współpracy, gdy warunki się zmieniają albo harmonogram się skraca.",
      tone: "resources",
    },
    {
      iconName: "shieldAlert",
      label: "RYZYKO",
      title: "Każdy scenariusz wymaga innego sposobu prowadzenia prac",
      description:
        "Inaczej prowadzi się końcówkę budowy, inaczej sieć lokali, a inaczej stałe utrzymanie. Dlatego najpierw trzeba dobrać właściwą ścieżkę.",
      tone: "risk",
    },
    {
      iconName: "fileText",
      label: "ROZLICZENIE",
      title: "Potwierdzenie wykonania ma pasować do procesu po stronie firmy",
      description:
        "Dokumenty, status realizacji i forma rozliczenia powinny być dopasowane do tego, jak dana organizacja pracuje operacyjnie.",
      tone: "technology",
    },
  ],
};

const solutionsContent: SolutionsSectionContent = {
  kickerLabel: "WYBIERZ SCENARIUSZ",
  titleLines: ["Wybierz scenariusz", "i przejdź do właściwej usługi"],
  description:
    "To najważniejsza część tej strony. Każdy scenariusz ma inny cel, inną organizację i inne ryzyka. Wybierz właściwą ścieżkę i przejdź dalej do szczegółów.",
  items: [
    {
      iconName: "hardHat",
      label: "Sprzątanie po budowie / przed otwarciem",
      title: "Gdy liczy się odbiór, przekazanie albo start punktu",
      description:
        "Scenariusz dla prac po budowie, remoncie i wykończeniu. Liczy się standard odbiorowy, kolejność prac, bezpieczeństwo materiałów i termin wejścia.",
      ctaLabel: "Przejdź do usługi",
      mediaAlt: "Sprzątanie po budowie",
      mediaSrc: "/sprzatanie-po-budowie",
    },
    {
      iconName: "clipboardList",
      label: "Sieci: wiele lokalizacji",
      title: "Gdy najważniejsza jest powtarzalność między punktami",
      description:
        "Scenariusz dla firm rozwijających sieć lub zarządzających wieloma lokalizacjami. Jeden standard, jedna koordynacja i jedno podejście do realizacji.",
      ctaLabel: "Przejdź do usługi",
      mediaAlt: "Obsługa sieci",
      mediaSrc: "/kontakt#minimum-danych",
    },
    {
      iconName: "building2",
      label: "Stała obsługa: biura i lokale",
      title: "Gdy potrzebujesz stabilnego serwisu w tle",
      description:
        "Scenariusz dla obiektów, które wymagają cyklicznej obsługi. Najważniejsze są harmonogram, ciągłość, kontrola jakości i przewidywalny standard.",
      ctaLabel: "Przejdź do usługi",
      mediaAlt: "Utrzymanie czystości",
      mediaSrc: "/utrzymanie-czystosci",
    },
    {
      iconName: "sparkles",
      label: "Witryny: abonament / ryczałt dla sieci",
      title: "Gdy liczy się stały efekt i prosta logistyka",
      description:
        "Scenariusz dla lokali i sieci, które potrzebują regularnego mycia witryn w ustalonych oknach realizacji i z czytelnym potwierdzeniem wykonania.",
      ctaLabel: "Przejdź do usługi",
      mediaAlt: "Mycie witryn i okien",
      mediaSrc: "/mycie-okien-i-witryn",
    },
    {
      iconName: "grid3x3",
      label: "Posadzki: doczyszczanie (B2B)",
      title: "Gdy problem dotyczy konkretnej nawierzchni i zabrudzeń",
      description:
        "Scenariusz dla obiektów, w których potrzebna jest technologia dobrana do typu posadzki, stopnia zabrudzenia i oczekiwanego efektu.",
      ctaLabel: "Przejdź do usługi",
      mediaAlt: "Maszynowe czyszczenie posadzek",
      mediaSrc: "/maszynowe-czyszczenie-posadzek",
    },
    {
      iconName: "mapPin",
      label: "Zasięg i moce przerobowe",
      title: "Gdy działasz w więcej niż jednym mieście",
      description:
        "Scenariusz dla firm, które chcą prowadzić jedną współpracę w skali ogólnopolskiej zamiast układać osobne ustalenia lokalnie.",
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
    "Niezależnie od wybranego scenariusza porządkujemy podstawy współpracy już na starcie. Dzięki temu wejście na obiekt, przebieg realizacji i rozliczenie nie wymagają dodatkowego doprecyzowywania w trakcie.",
  items: [
    {
      iconName: "users",
      label: "ZESPOŁY",
      title: "Jasne przypisanie ludzi do realizacji",
      description:
        "Wiesz, kto odpowiada za prowadzenie prac i kto jest punktem kontaktu po stronie wykonawcy.",
      tone: "resources",
    },
    {
      iconName: "shieldAlert",
      label: "BHP",
      title: "Wejście zgodne z zasadami obiektu",
      description:
        "Dopasowujemy organizację realizacji do wymagań obiektu, żeby uniknąć zatrzymań i nieporozumień w dniu wejścia.",
      tone: "risk",
    },
    {
      iconName: "database",
      label: "POUFNOŚĆ",
      title: "Procedury i umowa o zachowaniu poufności, gdy są wymagane",
      description:
        "Jeśli obiekt wymaga dodatkowych formalności, wdrażamy je przed startem, a nie w ostatniej chwili.",
      tone: "processes",
    },
    {
      iconName: "clipboardCheck",
      label: "POTWIERDZENIA",
      title: "Kontrola i potwierdzenie wykonania",
      description:
        "Na końcu dostajesz czytelny status realizacji i dokumenty, które można dalej przekazać po stronie firmy.",
      tone: "data",
    },
    {
      iconName: "clipboardCheck",
      label: "OC",
      title: "OC i odpowiedzialność po stronie wykonawcy",
      description:
        "Masz jasność, jak wygląda zabezpieczenie współpracy i odpowiedzialność przy realizacjach na obiektach komercyjnych.",
      tone: "finance",
    },
    {
      iconName: "fileText",
      label: "B2B",
      title: "Umowa i faktura VAT jako standard współpracy",
      description:
        "Proces zakupowy pozostaje prosty i czytelny dla księgowości, operacji oraz osób zatwierdzających usługę.",
      tone: "technology",
    },
  ],
};

const processContent: ProcessSectionContent = {
  kickerLabel: "JAK DZIAŁAMY?",
  titleLines: ["Jak wybierasz właściwą", "ścieżkę współpracy"],
  description:
    "Ta strona nie opisuje jednej usługi, tylko pomaga przejść do właściwego scenariusza. Najpierw porządkujemy podstawy, potem wskazujemy odpowiednią ścieżkę i dopiero dalej przechodzimy do szczegółów realizacji.",
  steps: [
    {
      index: "01",
      title: "Minimum danych i szybka kwalifikacja",
      description:
        "Zbieramy podstawy: typ obiektu, skala, miasto, termin i ogólny cel realizacji.",
    },
    {
      index: "02",
      title: "Dobór scenariusza",
      description:
        "Określamy, czy chodzi o końcówkę budowy, sieć lokalizacji, stałą obsługę, witryny czy posadzki.",
    },
    {
      index: "03",
      title: "Przekierowanie do właściwej usługi",
      description:
        "Pokazujemy Ci właściwą ścieżkę i sposób prowadzenia realizacji dopasowany do tej konkretnej sytuacji.",
    },
    {
      index: "04",
      title: "Dalsze ustalenia i finalizacja",
      description:
        "Po wyborze scenariusza doprecyzowujemy zakres, standard, warunki wejścia i sposób potwierdzenia wykonania.",
    },
  ],
  ctaLabel: "Wyślij minimum danych",
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "DOBIERZMY SCENARIUSZ",
  title: "Powiedz, jakiego typu realizacji dotyczy temat",
  description:
    "Jeśli to jedna lokalizacja, wystarczy miasto, typ obiektu i termin. Jeśli chodzi o sieć, podaj liczbę punktów i model współpracy. Wrócimy z krótką listą pytań i wskażemy właściwą ścieżkę.",
  buttonLabel: "Wyślij minimum danych",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const knowledgeContent: KnowledgeSectionContent = {
  kickerLabel: "REALIZACJE I REFERENCJE",
  titleLines: ["Zobacz, jak pracujemy", "w różnych scenariuszach B2B"],
  description:
    "Przykładowe realizacje z różnych typów obiektów. Zobacz, jak wygląda współpraca w praktyce po wyborze właściwej ścieżki i jak finalizujemy etapy w różnych modelach.",
  cards: [
    {
      title: "Realizacje",
      description:
        "Zakresy i efekty z obiektów komercyjnych. Krótkie case’y pokazujące różne scenariusze współpracy i ich rezultat.",
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
        "Co klienci B2B doceniają we współpracy. Najczęściej przewidywalność, komunikację i czytelne prowadzenie realizacji.",
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
  title: "Wyślij minimum danych, a my wskażemy właściwy scenariusz",
  description:
    "Opisz sytuację jednym zdaniem. Jeśli chodzi o sieć, dopisz liczbę lokalizacji i miasta. Jeśli to pojedynczy obiekt, wystarczy typ obiektu i termin. Wrócimy z krótką listą pytań i właściwym kolejnym krokiem.",
  chips: [
    { label: "Dobór scenariusza" },
    { label: "Jeden kontakt" },
    { label: "Jasna ścieżka" },
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
    topicPlaceholder: "Jaki obiekt lub ile lokalizacji i na kiedy",
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
  title: "Pytania przed wyborem scenariusza",
  description: "Masz więcej pytań? Po prostu",
  highlightText: "skontaktuj się z nami",
  avatars: ["A", "B", "C", "D", "E", "F", "G", "H"],
  items: [
    {
      question: "Czym ta strona różni się od stron poszczególnych usług?",
      answer:
        "To hub współpracy B2B. Pomaga wybrać właściwy scenariusz i przejść do usługi, która najlepiej odpowiada Twojej sytuacji operacyjnej.",
    },
    {
      question: "Jakie scenariusze współpracy obejmuje Domker?",
      answer:
        "Najczęściej są to: sprzątanie po budowie i przed otwarciem, obsługa sieci w wielu lokalizacjach, stałe utrzymanie czystości, mycie witryn oraz doczyszczanie posadzek.",
    },
    {
      question: "Czy działacie w całej Polsce?",
      answer:
        "Tak — prowadzimy realizacje na terenie całej Polski, zarówno dla pojedynczych obiektów, jak i dla firm działających w wielu miastach.",
    },
    {
      question: "Jak ustalić, która usługa będzie właściwa?",
      answer:
        "Wystarczy opisać sytuację: typ obiektu, skalę i termin. Na tej podstawie wskażemy właściwy scenariusz i kolejną ścieżkę rozmowy.",
    },
    {
      question: "Czy mogę zgłosić kilka potrzeb w jednym zapytaniu?",
      answer:
        "Tak. Jeśli temat obejmuje kilka usług, porządkujemy go na scenariusze i proponujemy sposób prowadzenia realizacji w odpowiedniej kolejności.",
    },
    {
      question: "Czy ta strona jest dla pojedynczego obiektu czy dla sieci?",
      answer:
        "Dla obu modeli. To właśnie tutaj rozdzielamy, czy temat dotyczy jednej lokalizacji, wielu punktów, stałej obsługi czy konkretnej usługi specjalistycznej.",
    },
    {
      question: "Jak wygląda wycena na tym etapie?",
      answer:
        "Na tym poziomie najpierw kwalifikujemy scenariusz. Po jego wyborze wracamy z właściwym zakresem pytań, widełkami i dalszym sposobem procedowania.",
    },
    {
      question: "Czy potrzebuję pełnych danych, żeby napisać pierwszą wiadomość?",
      answer:
        "Nie. Wystarczy podstawowy opis sytuacji. Jeśli informacji jest za mało, wrócimy z krótką listą pytań, która pomoże przejść dalej bez zbędnej wymiany wiadomości.",
    },
    {
      question: "Czy mogę zacząć od jednego punktu albo pilotażu?",
      answer:
        "Tak. W wielu przypadkach to dobry sposób na sprawdzenie standardu, sposobu komunikacji i organizacji realizacji przed szerszą współpracą.",
    },
    {
      question: "Co dostaję po wyborze właściwej ścieżki?",
      answer:
        "Doprecyzowany scenariusz, jasny kolejny krok i przejście do usługi, która odpowiada Twojej sytuacji operacyjnej oraz celowi realizacji.",
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
