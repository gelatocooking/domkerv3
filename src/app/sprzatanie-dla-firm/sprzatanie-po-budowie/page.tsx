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
import ShowcaseSection, { ShowcaseSectionContent } from "@/components/ShowcaseSection/ShowcaseSection";

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
  eyebrowText: "MINIMUM DANYCH DO WYCENY",
  title: "Podaj dane, które przyspieszą widełki i termin",
  description:
    "Podaj lokalizację, metraż albo liczbę lokali, cel realizacji, termin i okno wejścia. Jeśli masz zdjęcia oraz informację, które materiały są najbardziej wrażliwe, wycena i decyzja technologii pójdą szybciej.",
  buttonLabel: "Wyślij minimum danych",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const defaultContent: PagesHeroContent = {
  badge: "SPRZĄTANIE PO BUDOWIE (B2B)",
  titleLines: ["Sprzątanie po budowie", "pod odbiory bez ryzyka"],
  emphasisSuffix: "/",
  description:
    "To etap, w którym widać wszystko: pył technologiczny, smugi na szybach albo oknach pod światło, ślady po foliach i klejach oraz niedoczyszczone detale przy listwach, progach i profilach. W Domker prowadzimy sprzątanie po budowie jak zadanie operacyjne: plan stref, kolejność prac dopasowana do obiektu, technologia dobrana do materiałów oraz kontrola wewnętrzna przed zgłoszeniem gotowości do odbioru. Działamy w całej Polsce.",
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
      title: "Pył po szlifach i cięciach wraca po każdej kolejnej robocie",
      description:
        "Kurz osiada na detalach, progach, profilach i w ciągach komunikacyjnych. Jeśli realizacja nie jest prowadzona strefami, efekt znika jeszcze w trakcie dnia.",
      tone: "processes",
    },
    {
      iconName: "clipboardList",
      label: "Folie i kleje",
      title: "Ślady po foliach, taśmach i klejach wychodzą dopiero na finiszu",
      description:
        "Folie, taśmy i kleje po montażu potrafią zostać w świetle dziennym. Na końcu nie ma czasu na eksperymenty i poprawki.",
      tone: "data",
    },
    {
      iconName: "shieldAlert",
      label: "Materiały",
      title: "Wykończenia łatwo uszkodzić złą chemią lub narzędziem",
      description:
        "Nowe posadzki, szkło, armatura, profile i fronty nie wybaczają błędów. Zła technologia oznacza ryzyko rys, zmatowień i reklamacji po odbiorze.",
      tone: "risk",
    },
    {
      iconName: "calendarClock",
      label: "Wejście",
      title: "Obiekt „żyje” i trzeba wejść w realnym oknie prac",
      description:
        "Ekipy wchodzą i wychodzą, strefy bywają wyłączone. Bez potwierdzonych warunków wejścia realizacja potrafi zatrzymać się po pierwszej godzinie.",
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
      title: "Usterki szybko prowadzą do sporu o odpowiedzialność",
      description:
        "Na końcówce budowy łatwo o nieporozumienia. Bez dokumentacji w trakcie realizacji problem wraca po odbiorze jako spór i dodatkowy koszt.",
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


const processContent: ProcessSectionContent = {
  kickerLabel: "JAK DZIAŁAMY?",
  titleLines: ["Etap po etapie: od kwalifikacji ", "do zgłoszenia gotowości"],
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
  title: "Wybierz najkrótszą ścieżkę do odbioru i przekazania obiektu",
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

const showcaseContent: ShowcaseSectionContent = {
  kickerLabel: "FORMALNOŚCI I ODPOWIEDZIALNOŚĆ",
  titleLines: ["Formalności i odpowiedzialność", "po naszej stronie"],
  description:
    "Żeby wejść na obiekt i domknąć odbiór bez blokad, liczą się procedury i dokumenty. Poniżej rzeczy, które zapewniamy i dokumentujemy, żeby odpowiedzialność była jasna.",
  items: [
    {
      tag: "KADRY",
      title: "Legalne zatrudnienie i przeszkolone zespoły",
      description:
        "Pracownicy są legalnie zatrudnieni i przygotowani do pracy na obiekcie. To ogranicza ryzyka kadrowe i ułatwia logistykę realizacji.",
      result: "Efekt: mniej przestojów i pewniejszy termin.",
    },
    {
      tag: "BHP",
      title: "Szkolenia BHP i analiza zagrożeń przed startem",
      description:
        "Dopinamy zasady pracy, strefy wyłączone i ryzyka na finiszu. Dzięki temu realizacja nie zatrzymuje się w trakcie przez procedury.",
      result: "Efekt: płynne wejście i stabilny proces.",
    },
    {
      tag: "DOKUMENTY",
      title: "Protokoły odbioru + zdjęcia jako dokumentacja",
      description:
        "Domykamy etap dokumentami: protokół odbioru i zdjęcia. Jeśli wychodzą usterki zastane, zgłaszamy je od razu i opisujemy w protokole.",
      result: "Efekt: szybszy odbiór i mniej sporów.",
    },
    {
      tag: "OC",
      title: "Ubezpieczenie OC i jasne ramy odpowiedzialności",
      description:
        "Końcówka budowy nie wybacza błędów. Dlatego realizację zabezpieczamy OC i pracujemy w oparciu o ustalenia oraz standard do weryfikacji.",
      result: "Efekt: mniejsze ryzyko po Twojej stronie.",
    },
    {
      tag: "POUFNOŚĆ / DOSTĘP",
      title: "Umowa o zachowaniu poufności i rejestr wejść",
      description:
        "Procedury obiektu dopinamy przed startem. W dniu realizacji nie ma blokad na bramie i nie tracimy okna prac przez formalności.",
      result: "Efekt: szybszy start i mniej problemów.",
    },
    {
      tag: "ROZLICZENIA",
      title: "Umowa i faktura VAT — gotowe do procesu zakupowego",
      description:
        "Dostarczamy jasny zakres do akceptacji oraz dokumenty do rozliczenia. Minimalizujemy dodatkowe doprecyzowania po stronie zakupów i administracji.",
      result: "Efekt: szybsza decyzja i domknięcie tematu.",
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
