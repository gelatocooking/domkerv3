"use client"
import Header from "../components/Header/Header";
import Hero, { type HeroContent } from "../components/Hero/Hero";
import SocialProof from "../components/SocialProof/SocialProof";
import ProblemsSection, {
  type ProblemsSectionContent,
} from "../components/ProblemsSection/ProblemsSection";
import SolutionsSection, {
  type SolutionsSectionContent,
} from "../components/SolutionsSection/SolutionsSection";
import ShowcaseSection, {
  type ShowcaseSectionContent,
} from "../components/ShowcaseSection/ShowcaseSection";
import CtaSection, { type CtaSectionContent } from "../components/CtaSection/CtaSection";
import HighlightsSection from "../components/HighlightsSection/HighlightsSection";
import KnowledgeSection, {
  type KnowledgeSectionContent,
} from "../components/KnowledgeSection/KnowledgeSection";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
import ContactSection, {
  type ContactSectionContent,
} from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import styles from "./page.module.css";

// STRONA GŁÓWNA

const defaultContent: HeroContent = {
  badge: "SPRZĄTANIE DLA FIRM I SIECI",
  titleLines: ["Sprzątanie pod odbiory", "i przekazanie obiektu"],
  emphasisText: "na czas",
  emphasisIconName: "lightbulb",
  emphasisSuffix: "",
  description:
    "Domker wchodzi w tematy, które muszą zostać domknięte. Organizujemy realizację, pilnujemy standardu i zostawiamy obiekt gotowy do przekazania. Działamy w całej Polsce, reagujemy szybko i dopasowujemy się do okna prac na obiekcie.",
  ctaLabel: "Sprawdź dostępność terminu",
  imageSrc: "/tlo.png",
  imageAlt: "Sprzątanie dla firm",
};

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "ZNASZ TE WYZWANIA?",
  titleLines: ["Gdy w grę wchodzi termin,", "problemem rzadko jest samo sprzątanie"],
  description:
    "Najczęściej przegrywa logistyka. Kto wchodzi kiedy, co jest już gotowe, czego nie wolno ruszać i jak domknąć temat bez serii poprawek oraz sporów na końcu.",
  items: [
    {
      iconName: "calendarClock",
      label: "TERMIN",
      title: "Deadline jest stały, a zakres żyje własnym życiem",
      description:
        "Prace się przesuwają, ktoś dopina poprawki, a Ty musisz mieć pewność, że obiekt przejdzie weryfikację bez nerwowego dopinania nocy.",
      tone: "processes",
    },
    {
      iconName: "workflow",
      label: "KOORDYNACJA",
      title: "Za dużo wykonawców, za mało jednego planu",
      description:
        "Gdy każdy działa osobno, brud wraca, a odpowiedzialność się rozmywa. Potrzebujesz kogoś, kto przejmie etap i dowiezie go do końca.",
      tone: "processes",
    },
    {
      iconName: "shieldAlert",
      label: "WYKOŃCZENIA",
      title: "Nowe powierzchnie nie wybaczają błędów",
      description:
        "Rysy, mat i uszkodzenia oznaczają reklamacje. Na tym etapie liczy się ostrożna praca i jasne zasady, co robimy, a czego nie ruszamy.",
      tone: "risk",
    },
    {
      iconName: "truck",
      label: "ZASOBY",
      title: "Podwykonawcy znikają wtedy, gdy są najbardziej potrzebni",
      description:
        "Brak ludzi lub sprzętu w kluczowym momencie potrafi wywrócić harmonogram. Tu potrzebujesz wykonawcy z rezerwą i pewnym wejściem.",
      tone: "resources",
    },
    {
      iconName: "clipboardCheck",
      label: "JAKOŚĆ",
      title: "Czystość bywa subiektywna, odbiór już nie",
      description:
        "Bez ustalonego standardu każdy ma inne oczekiwania. Efekt to poprawki, rundy uwag i przeciąganie tematu w czasie.",
      tone: "data",
    },
    {
      iconName: "route",
      label: "DOMKNIĘCIE",
      title: "Brakuje jasnego końca etapu i potwierdzenia wykonania",
      description:
        "Gdy nie ma dowodów i protokołu, temat wraca. Domykamy realizację tak, żeby dało się ją przekazać dalej i zamknąć w firmie.",
      tone: "technology",
    },
  ],
};

const solutionsContent: SolutionsSectionContent = {
  kickerLabel: "CO ROBIMY",
  titleLines: ["Usługi dla firm,", "które mają być po prostu załatwione"],
  description:
    "Obsługujemy obiekty komercyjne w modelu, który daje spokój operacyjny. Jasny zakres, ustalone okno wejścia, komunikacja po drodze i finalne potwierdzenie wykonania.",
  items: [
    {
      iconName: "hardHat",
      label: "Sprzątanie po budowie i remontach",
      title: "Domknięcie etapu po pracach",
      description:
        "Wchodzimy wtedy, gdy liczy się efekt końcowy. Porządkujemy realizację i dowozimy standard potrzebny do przekazania lub weryfikacji obiektu.",
      ctaLabel: "Zobacz jak działamy",
      mediaAlt: "Sprzątanie po budowie",
      mediaSrc: "/window.svg",
    },
    {
      iconName: "building2",
      label: "Utrzymanie czystości biur i lokali",
      title: "Stały standard bez przerw",
      description:
        "Cykliczna obsługa biur i lokali handlowo usługowych. Harmonogram, kontrola jakości i szybkie korekty, żeby temat był stabilny miesiąc w miesiąc.",
      ctaLabel: "Porozmawiaj o stałej obsłudze",
      mediaAlt: "Utrzymanie czystości",
      mediaSrc: "/window.svg",
    },
    {
      iconName: "sparkles",
      label: "Mycie okien i witryn",
      title: "Szybka logistyka i czytelny efekt",
      description:
        "Dla firm mycie witryn w stałych oknach realizacji. Dla klientów prywatnych mycie okien w domach i mieszkaniach, sprawnie i bezpiecznie.",
      ctaLabel: "Sprawdź usługę",
      mediaAlt: "Mycie okien i witryn",
      mediaSrc: "/window.svg",
    },
    {
      iconName: "grid3x3",
      label: "Czyszczenie posadzek",
      title: "Doczyszczanie, które ma sens",
      description:
        "Maszynowe doczyszczanie i odplamianie w obiektach komercyjnych. Dobór metody do nawierzchni i zabrudzeń oraz kontrola efektu.",
      ctaLabel: "Zobacz opcje",
      mediaAlt: "Czyszczenie posadzek",
      mediaSrc: "/window.svg",
    },
    {
      iconName: "mapPin",
      label: "Zasięg i moce",
      title: "Cała Polska i szybkie wejścia",
      description:
        "Działamy w wielu miastach. Dobieramy zespoły i sprzęt do terminu oraz warunków wejścia, żeby dowieźć temat bez przeciągania realizacji.",
      ctaLabel: "Sprawdź dostępność",
      mediaAlt: "Zasięg realizacji",
      mediaSrc: "/window.svg",
    },
  ],
};

const showcaseContent: ShowcaseSectionContent = {
  kickerLabel: "RYZYKA I JAK JE OGARNIAMY",
  title: "Ryzyka, które najczęściej wywracają realizację",
  description:
    "W sprzątaniu dla firm problemem rzadko jest wysiłek, częściej brak zasad. Poniżej najczęstsze blokady na obiekcie i konkretne działania, które wdrażamy przed i w trakcie realizacji.",
  items: [
    {
      tag: "HARMONOGRAM",
      title: "Zmiany na budowie i prace nachodzące na siebie",
      description:
        "Ustalamy okno wejścia i warunki pracy przed startem. Dzięki temu nie wchodzimy w ciemno i nie robimy realizacji, która wraca po godzinie.",
      result: "Efekt: mniej przestojów i mniej poprawek na końcu.",
    },
    {
      tag: "DOSTĘP",
      title: "Procedury obiektu i blokady na bramie",
      description:
        "Zbieramy wymagania wejścia i dopinamy formalności wcześniej. W dniu realizacji zespół nie traci czasu na uzgodnienia w ostatniej chwili.",
      result: "Efekt: szybszy start i stabilniejszy przebieg prac.",
    },
    {
      tag: "STANDARD",
      title: "Różne definicje czystości po stronach",
      description:
        "Ustalamy zakres i standard do weryfikacji. Na koniec robimy kontrolę wewnętrzną przed zgłoszeniem gotowości.",
      result: "Efekt: krótsza lista uwag i szybsze domknięcie tematu.",
    },
    {
      tag: "ODPOWIEDZIALNOŚĆ",
      title: "Usterki i spory kto to zrobił",
      description:
        "Jeśli coś wychodzi w trakcie, od razu zgłaszamy i dokumentujemy. Jest jasna informacja, co jest zastane i co wymaga decyzji po Twojej stronie.",
      result: "Efekt: mniej nieporozumień i mniej sporów po realizacji.",
    },
    {
      tag: "ZASOBY",
      title: "Brak ludzi lub sprzętu w kluczowym momencie",
      description:
        "Planujemy realizację z rezerwą. Jeśli okno się skraca lub warunki się zmieniają, nie zostajesz bez wykonawcy w ostatniej chwili.",
      result: "Efekt: większa pewność dowiezienia terminu.",
    },
  ],
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "CHCESZ MIEĆ TEMAT Z GŁOWY?",
  title: "Powiedz, co trzeba domknąć i na kiedy",
  description:
    "W krótkiej rozmowie zbierzemy minimum danych, doprecyzujemy okno wejścia i standard oraz wskażemy ryzyka, które mogą wywrócić realizację. Jeśli temat jest pilny, od razu powiemy, czy mamy moce na termin.",
  buttonLabel: "Sprawdź dostępność terminu",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const knowledgeContent: KnowledgeSectionContent = {
  kickerLabel: "DOWODY Z REALIZACJI",
  titleLines: ["Zobacz, jak pracujemy", "na obiektach w całej Polsce"],
  description:
    "Zdjęcia z realizacji, zakresy i efekty. Zobacz, jak wygląda domknięcie tematu w praktyce, bez marketingu i bez ogólników.",
  cards: [
    {
      title: "Realizacje",
      description:
        "Przykładowe obiekty, co było do zrobienia i co zostało dowiezione. Krótkie opisy, zdjęcia i konkretne zakresy.",
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
        "Co klienci doceniają w współpracy. Termin, komunikacja, porządek w procesie i czytelne potwierdzenie wykonania.",
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
  kickerLabel: "KONTAKT",
  title: "Wyślij minimum danych, a my wrócimy z konkretem",
  description:
    "Napisz, jaki obiekt i jaki termin. Jeśli masz zdjęcia, dołącz je. Wrócimy z krótką listą pytań, potwierdzimy dostępność i przygotujemy ofertę gotową do przekazania w firmie.",
  chips: [
    { label: "Szybka odpowiedź" },
    { label: "Jasny zakres" },
    { label: "Kontrola jakości" },
    { label: "Potwierdzenie wykonania" },
    { label: "Obsługa w wielu miastach" },
    { label: "Wejście nawet w 3 dni", accent: true },
  ],
  form: {
    emailLabel: "Adres e-mail",
    emailPlaceholder: "Twój adres e-mail",
    phoneLabel: "Numer telefonu",
    phonePlaceholder: "Twój numer telefonu",
    topicLabel: "Temat",
    topicPlaceholder: "Jaki obiekt i na kiedy jest termin",
    consentText:
      "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zgłoszenia oraz na kontakt handlowy drogą elektroniczną na podany adres e-mail. Polityka prywatności.",
    submitLabel: "Wyślij zapytanie",
  },
  meta: {
    avatars: ["A", "B", "C", "D", "E", "F"],
    text: "Zespół operacyjny gotowy do wejścia",
  },
};
export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero content={defaultContent} />
        <SocialProof />
        <ProblemsSection content={problemsContent} />
        <SolutionsSection content={solutionsContent} />
        <ShowcaseSection content={showcaseContent} />
        <CtaSection content={ctaContent} />
        <HighlightsSection />
        {/* <HighlightsSection /> */}
        <KnowledgeSection content={knowledgeContent} />
        {/* <TestimonialsSection /> */}
        <ContactSection content={contactContent} />
      </main>
      <Footer />
    </div>
  );
}
