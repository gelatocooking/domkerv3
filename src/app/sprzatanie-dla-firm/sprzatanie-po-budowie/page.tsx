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
import BenefitsSection, {
  type BenefitsSectionContent,
} from "@/components/BenefitsSection/BenefitsSection";
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

// /sprzatanie-po-budowie — unikalny content (SEO + konwersja, głębiej, bez kanibalizacji)
const faqContent: FaqSectionContent = {
  kickerLabel: "NAJCZĘŚCIEJ ZADAWANE PYTANIA",
  title: "Masz pytania? Odpowiadamy!",
  description: "Masz więcej pytań? Po prostu",
  highlightText: "skontaktuj się z nami",
  avatars: ["A", "B", "C", "D", "E", "F", "G", "H"],
  items: [
    {
      question: "Czym różni się sprzątanie po budowie od zwykłego sprzątania?",
      answer:
        "Sprzątanie po budowie to usługa „techniczna”: usuwanie pyłu budowlanego, zabrudzeń po montażu oraz śladów po zabezpieczeniach i pracach wykończeniowych. Nie chodzi o „odświeżenie”, tylko o doprowadzenie obiektu do stanu gotowego do odbioru, przekazania lub użytkowania.",
    },
    {
      question: "Kiedy najlepiej zamówić sprzątanie po budowie — na jakim etapie prac?",
      answer:
        "Najlepiej wtedy, gdy zakończone są prace brudne i nie będzie już generowania dużej ilości pyłu (cięcie, szlifowanie, wiercenie na masową skalę). Jeśli prace nadal trwają, często ma sens podział na etapy (np. komunikacja + doczyszczenie końcowe).",
    },
    {
      question: "Jakie problemy po budowie najczęściej wpływają na czas i wycenę?",
      answer:
        "Najczęściej: pył „w powietrzu i na wszystkim”, ślady po foliach i taśmach, zabrudzenia po fugach/silikonie, zacieki i smugi na przeszkleniach, zabrudzenia na listwach, drzwiach i detalach oraz różnice w standardzie wykończenia między pomieszczeniami.",
    },
    {
      question: "Czy usuwacie ślady po foliach, taśmach i klejach ochronnych?",
      answer:
        "Tak — to jeden z typowych tematów po wykończeniach. Zakres zależy od materiału i czasu, przez jaki zabezpieczenia były na powierzchni. Zwykle prosimy o zdjęcia i informację, co było użyte (folia/taśma/klej), bo wpływa to na metodę i czas.",
    },
    {
      question: "Czy sprzątanie po budowie obejmuje mycie okien i przeszkleń?",
      answer:
        "Zwykle tak, ale zakres dopasowujemy do stanu po pracach (zabrudzenia montażowe, pył, smugi). Jeśli na szybach są zabrudzenia trudne (np. po zaprawach/tynkach), kwalifikujemy to po zdjęciach lub na rozpoznaniu i dopiero wtedy ustalamy wariant.",
    },
    {
      question: "Czy w ramach sprzątania po budowie robicie doczyszczanie posadzek?",
      answer:
        "Tak — doczyszczanie posadzek po budowie często jest elementem końcówki. Kluczowe jest: jaki to typ posadzki i na jakim jest etapie (świeża/utwardzona/zabezpieczona). To doprecyzowujemy przed startem, bo wpływa na technologię i czas.",
    },
    {
      question: "Jak wygląda „standard odbiorowy” po sprzątaniu po budowie?",
      answer:
        "To praktycznie: czysto pod światło na kluczowych powierzchniach, brak pyłu w newralgicznych miejscach, doprowadzenie sanitariatów/zapleczy do użytku, usunięcie śladów po pracach i zabezpieczeniach oraz przygotowanie obiektu do przekazania. Standard dopasowujemy do typu obiektu i odbioru.",
    },
    {
      question: "Czy możecie wejść etapowo, gdy ekipy nadal pracują na obiekcie?",
      answer:
        "Tak, ale wtedy ustalamy priorytety: co ma być domknięte teraz, a co zostaje na końcówkę. Sprzątanie końcowe ma sens dopiero, gdy obiekt przestaje „produkować” pył — inaczej efekt szybko się rozjeżdża.",
    },
    {
      question: "Jakie informacje najszybciej przyspieszają wycenę i decyzję?",
      answer:
        "Najbardziej pomagają: metraż/skala, typ obiektu, etap prac (co zakończone, co trwa), termin/okno wejścia oraz zdjęcia 5–15 ujęć (szkło, posadzki, newralgiczne zabrudzenia).",
    },
    {
      question: "Czy sprzątanie robicie w jednym wejściu, czy w etapach?",
      answer:
        "Oba warianty są możliwe. Jeśli obiekt jest gotowy do zamknięcia — robimy jedno wejście „final”. Jeśli prace są rozciągnięte w czasie — sensowniej jest etapować (np. przygotowanie części do odbioru, a potem doczyszczenie końcowe).",
    },
    {
      question: "Skąd biorą się poprawki po sprzątaniu i jak ich uniknąć?",
      answer:
        "Najczęściej: po sprzątaniu wracają prace pylące albo wychodzą zabrudzenia ukryte wcześniej (np. po zdjęciu folii / po doszczelnianiu). Żeby tego uniknąć, ustalamy, czy to jest wejście „final”, czy etap oraz co po naszej realizacji jeszcze będzie robione na obiekcie.",
    },
    {
      question: "Czy potrzebujecie wizji lokalnej przed sprzątaniem po budowie?",
      answer:
        "Nie zawsze. W wielu przypadkach wystarczają zdjęcia i komplet informacji. Wizja jest potrzebna głównie wtedy, gdy stan powierzchni i zabrudzeń wpływa na technologię, czas lub ryzyko (np. dużo klejów/folii, trudne posadzki, wymagający standard).",
    },
    {
      question: "Jak wygląda rozliczenie: stała cena czy „w zależności”?",
      answer:
        "Najpierw podajemy widełki po minimum danych, a finalną cenę ustalamy po doprecyzowaniu stanu obiektu (zdjęcia/rozpoznanie) i zakresu „must have” do odbioru. To ogranicza „niespodzianki” na miejscu bez ustaleń.",
    },
    {
      question: "Czy sprzątanie po budowie obejmuje wyniesienie odpadów pobudowlanych?",
      answer:
        "To zależy od rodzaju odpadów i ustaleń na obiekcie. Jeśli odpady są przygotowane (worki, kartony, folie) i jest miejsce składowania/zasady wynoszenia — możemy to ująć w zakresie. Gruz i odpady wymagające kontenera traktujemy osobno (logistyka i procedury).",
    },
  ],
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "DOBIERZMY SCENARIUSZ",
  title: "Powiedz, co chcesz mieć załatwione i w jakim trybie",
  description:
    "Jeśli masz jedną lokalizację, wystarczy miasto, metraż i termin. Jeśli to sieć, podaj liczbę punktów i częstotliwość. Wrócimy z krótką listą pytań i najprostszą ścieżką realizacji.",
  buttonLabel: "Wyślij minimum danych",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const defaultContent: PagesHeroContent = {
  badge: "SPRZĄTANIE PO BUDOWIE (B2B)",
  titleLines: ["Sprzątanie po budowie", "pod odbiory bez ryzyka"],
  emphasisText: "dla wykończeń",
  emphasisIconName: "shieldAlert",
  emphasisSuffix: "/",
  description:
    "Końcówka budowy to etap, w którym wychodzą detale: pył technologiczny, smugi pod światło, ślady po foliach i klejach, ranty przy listwach i profilach. Dlatego prowadzimy sprzątanie pod odbiór jak proces: standard → strefy → technologia → kontrola.",
  ctaLabel: "Odbierz ofertę do zatwierdzenia (PDF/HTML)",
};

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "KIEDY TO JEST POTRZEBNE?",
  titleLines: ["Odbiór przegrywa na detalach", "nie na „braku sprzątania”"],
  description:
    "Tu nie chodzi o „więcej ludzi”. Chodzi o to, żeby w warunkach budowy dowieźć standard odbiorowy: bez uszkodzeń, bez powrotów i bez rozmytej odpowiedzialności za strefy, które widać na końcu.",
  items: [
    {
      iconName: "sparkles",
      label: "Pył",
      title: "Pył technologiczny wraca po każdej kolejnej robocie",
      description:
        "Po szlifach i docinkach kurz osiada na detalach i w komunikacji. Jeśli nie pracujesz strefami, efekt ucieka jeszcze w trakcie dnia.",
      tone: "processes",
    },
    {
      iconName: "clipboardList",
      label: "Folie i kleje",
      title: "Ślady po zabezpieczeniach wychodzą dopiero na finiszu",
      description:
        "Folie, taśmy i kleje po montażu potrafią zostać w świetle dziennym. Na końcu nie ma czasu na eksperymenty i poprawki.",
      tone: "data",
    },
    {
      iconName: "shieldAlert",
      label: "Materiały",
      title: "Wykończenia łatwo uszkodzić złą chemią lub narzędziem",
      description:
        "Nowe posadzki, szkło, armatura, profile i fronty nie wybaczają błędów. Zła technologia = rysy, mat i reklamacje po odbiorze.",
      tone: "risk",
    },
    {
      iconName: "calendarClock",
      label: "Wejście",
      title: "Obiekt „żyje” i trzeba wejść w realnym oknie prac",
      description:
        "Ekipy wchodzą i wychodzą, strefy bywają wyłączone. Bez potwierdzonych warunków wejścia sprzątanie wraca po godzinie pracy.",
      tone: "processes",
    },
    {
      iconName: "clipboardCheck",
      label: "Kontrola",
      title: "Brak kontroli wewnętrznej kończy się poprawkami na finiszu",
      description:
        "Jeśli nikt nie sprawdzi checklistą przed zgłoszeniem gotowości, uwagi wracają na końcu i odbiór się wydłuża.",
      tone: "technology",
    },
    {
      iconName: "fileText",
      label: "Odpowiedzialność",
      title: "Usterki zastane robią spór „kto to zrobił”",
      description:
        "Na końcówce budowy łatwo o nieporozumienia. Bez dokumentacji w trakcie temat wraca po odbiorze jako konflikt i koszt.",
      tone: "resources",
    },
  ],
};

const solutionsContent: SolutionsSectionContent = {
  kickerLabel: "ROZWIĄZANIE",
  titleLines: [
    "Sprzątanie po budowie jako plan stref",
    "i kolejności — a nie „lista czynności”",
  ],
  description:
    "Najpierw ustawiamy cel i standard odbioru. Potem dzielimy obiekt na strefy, dobieramy technologię do materiałów i domykamy kontrolę, zanim zgłosimy gotowość. To skraca odbiór i ogranicza powroty na poprawki.",
  items: [
    {
      iconName: "clipboardCheck",
      label: "Standard odbioru",
      title: "Ustalamy, pod jaki odbiór pracujemy i co jest „OK”",
      description:
        "Inwestorski, urzędowy, przekazanie lub otwarcie. Standard ma być weryfikowalny, żeby zakres był policzalny, a efekt nie był „na oko”.",
      ctaLabel: "Zobacz usługę",
      mediaAlt: "Sprzątanie po budowie",
      mediaSrc: "/sprzatanie-po-budowie",
    },
    {
      iconName: "layoutGrid",
      label: "Strefy odbiorowe",
      title: "Mapujemy miejsca, które realnie są sprawdzane na odbiorze",
      description:
        "Wejścia, przeszklenia, komunikacja, sanitariaty, zaplecza i progi. Dzięki temu strefy krytyczne nie zostają na ostatnie godziny.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Minimum danych do wyceny",
      mediaSrc: "/kontakt#minimum-danych",
    },
    {
      iconName: "shieldAlert",
      label: "Technologia pod materiał",
      title: "Dobieramy chemię i sprzęt do ryzyk końcówki wykończeń",
      description:
        "Pracujemy tak, żeby nie zrobić szkody na finiszu: posadzki, szkło/okna, armatura, profile i fronty mają różne wymagania technologiczne.",
      ctaLabel: "Standard i bezpieczeństwo",
      mediaAlt: "Technologia i bezpieczeństwo",
      mediaSrc: "/sprzatanie-po-budowie#standard",
    },
    {
      iconName: "users",
      label: "Operacyjne dowiezienie",
      title: "Koordynacja na obiekcie i kontrola przed zgłoszeniem gotowości",
      description:
        "Trzymamy przebieg prac i robimy odbiór wewnętrzny checklistą. Na koniec domykamy temat dokumentami: protokół odbioru i zdjęcia.",
      ctaLabel: "Zapytaj (PDF/HTML)",
      mediaAlt: "Kontakt i oferta",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "calendarClock",
      label: "Okno wejścia",
      title: "Wchodzimy po godzinach i „między robotami”, gdy trzeba",
      description:
        "Dopasowujemy realizację do harmonogramu budowy, żeby nie blokować ekip i nie zbierać wtórnego brudu po kolejnych pracach.",
      ctaLabel: "Ustal okno wejścia",
      mediaAlt: "Kontakt telefoniczny",
      mediaSrc: "tel:+48502992002",
    },
    {
      iconName: "truck",
      label: "Skala i moce",
      title: "Dobieramy zespoły do terminu i potwierdzonych warunków wejścia",
      description:
        "Od lokali po większe obiekty. Organizacyjne maksima zależą od okna i stanu obiektu: do 5000 m² dziennie lub do 300 doczyszczonych okien dziennie*.",
      ctaLabel: "Sprawdź dostępność",
      mediaAlt: "Dostępność i termin",
      mediaSrc: "/kontakt",
    },
  ],
};

const benefitsContent: BenefitsSectionContent = {
  kickerLabel: "FORMALNOŚCI I ODPOWIEDZIALNOŚĆ",
  titleLines: ["Formalności i odpowiedzialność", "po naszej stronie"],
  description:
    "Na budowie liczy się dopuszczenie do prac i jasne zasady odpowiedzialności. Działamy tak, żeby wejście było płynne, a realizacja domknięta w procedurach — bez blokad w dniu odbioru.",
  items: [
    {
      iconName: "users",
      label: "Kadry",
      title: "Legalne zatrudnienie i zespoły przygotowane do pracy na budowie",
      description:
        "Pracujemy zespołowo i w sposób przewidywalny. To ogranicza przestoje i ułatwia logistykę na obiekcie.",
      tone: "resources",
    },
    {
      iconName: "shieldAlert",
      label: "BHP",
      title: "BHP i analiza zagrożeń przed startem prac",
      description:
        "Ustalamy zasady poruszania się po obiekcie, strefy wyłączone i ryzyka na finiszu — żeby nie zatrzymać realizacji w trakcie.",
      tone: "risk",
    },
    {
      iconName: "clipboardCheck",
      label: "Dokumenty",
      title: "Protokół odbioru i zdjęcia jako potwierdzenie standardu",
      description:
        "Dostarczamy materiał do rozliczenia i przekazania dalej. Jeśli wychodzą usterki zastane, dokumentujemy je w trakcie.",
      tone: "data",
    },
    {
      iconName: "badgeDollarSign",
      label: "OC",
      title: "OC i jasne ramy odpowiedzialności wykonawcy",
      description:
        "Końcówka budowy nie wybacza błędów. Dlatego pracujemy w oparciu o ustalenia i zabezpieczenia współpracy.",
      tone: "finance",
    },
    {
      iconName: "database",
      label: "Poufność",
      title: "NDA i rejestr wejść, jeśli obiekt tego wymaga",
      description:
        "Procedury dopinamy przed wejściem. Dzięki temu w dniu realizacji nie ma blokad na bramie i nie tracimy okna prac.",
      tone: "processes",
    },
    {
      iconName: "fileText",
      label: "Rozliczenia",
      title: "Umowa i faktura VAT — gotowe do procesu zakupowego",
      description:
        "Minimalizujemy tarcie po stronie firmy: dokumenty, potwierdzenia i jasny zakres do akceptacji i rozliczenia.",
      tone: "technology",
    },
  ],
};

const processContent: ProcessSectionContent = {
  kickerLabel: "JAK DZIAŁAMY?",
  titleLines: ["Transparentna współpraca", "krok po kroku"],
  description:
    "To proces „pod odbiór”. Zbieramy minimum danych, potwierdzamy warunki wejścia i kolejność prac, a potem dowozimy gotowość do zgłoszenia. Dzięki temu nie ma chaosu i nie ma powrotów po drodze.",
  steps: [
    {
      index: "01",
      title: "Minimum danych i szybka kwalifikacja",
      description:
        "Ustalamy: typ obiektu, metraż, termin, etap prac oraz kluczowe strefy odbiorowe. Jeśli masz zdjęcia, przyspieszają wycenę i decyzję.",
    },
    {
      index: "02",
      title: "Widełki i oferta do zatwierdzenia (PDF/HTML)",
      description:
        "Dajemy widełki i najprostszy wariant realizacji. Dostajesz ofertę gotową do wysłania do przełożonego, zarządu lub zakupów.",
    },
    {
      index: "03",
      title: "Potwierdzenie warunków wejścia i plan stref",
      description:
        "Kto wpuszcza, godziny, BHP, dostęp do wody i prądu, strefy wyłączone, równoległe ekipy oraz ograniczenia narzędzi i chemii.",
    },
    {
      index: "04",
      title: "Realizacja, kontrola i zgłoszenie gotowości",
      description:
        "Pracujemy zgodnie z planem stref i kolejnością. Robimy kontrolę wewnętrzną checklistą, a na koniec przekazujemy protokół i zdjęcia.",
    },
  ],
  ctaLabel: "Odbierz ofertę do zatwierdzenia (PDF/HTML)",
};

const contactContent: ContactSectionContent = {
  kickerLabel: "SKONTAKTUJ SIĘ",
  title: "Porozmawiajmy, jak dowieźć odbiór i przekazanie obiektu",
  description:
    "Zostaw kontakt i napisz, na kiedy jest odbiór. Wrócimy z krótką listą pytań o warunki wejścia i zakres, a potem przygotujemy ofertę do zatwierdzenia w firmie (PDF/HTML).",
  chips: [
    { label: "Standard do odbioru" },
    { label: "Strefy krytyczne" },
    { label: "Technologia pod materiał" },
    { label: "Kontrola checklistą" },
    { label: "Protokół + zdjęcia" },
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