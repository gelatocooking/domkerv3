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
    "Domker wspiera firmy wszędzie tam, gdzie liczy się termin, standard i sprawna finalizacja etapu. Organizujemy realizację, dopasowujemy wejście do warunków na obiekcie i zostawiamy przestrzeń gotową do odbioru, otwarcia albo przekazania dalej. Działamy w całej Polsce.",
  ctaLabel: "Sprawdź dostępność terminu",
  imageSrc: "/tlo.png",
  imageAlt: "Sprzątanie dla firm",
};

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "ZNASZ TE WYZWANIA?",
  titleLines: ["Jeśli celem jest odbiór, przekazanie", "problemem rzadko jest samo sprzątanie"],
  description:
    "Najczęściej decyduje organizacja etapu: właściwe okno wejścia, jasny standard, bezpieczna praca na nowych powierzchniach i potwierdzenie wykonania, które da się przekazać dalej po stronie firmy.",
  items: [
    {
      iconName: "calendarClock",
      label: "TERMIN",
      title: "Odbiór ma stałą datę, a warunki na obiekcie zmieniają się do końca",
      description:
        "Prace się przesuwają, strefy bywają wyłączone, a okno realizacji się skraca. Potrzebujesz wykonawcy, który potrafi pracować w realnych warunkach obiektu.",
      tone: "processes",
    },
    {
      iconName: "workflow",
      label: "KOORDYNACJA",
      title: "Wiele ekip oznacza większe ryzyko chaosu i powrotów",
      description:
        "Gdy każdy odpowiada tylko za swój fragment, łatwo o brud wracający po innych pracach i rozmycie odpowiedzialności za efekt końcowy.",
      tone: "processes",
    },
    {
      iconName: "shieldAlert",
      label: "WYKOŃCZENIA",
      title: "Nowe powierzchnie wymagają ostrożnej technologii",
      description:
        "Posadzki, szyby, armatura i fronty nie wybaczają przypadkowych narzędzi ani źle dobranej chemii. Na finiszu liczy się bezpieczeństwo materiałowe.",
      tone: "risk",
    },
    {
      iconName: "truck",
      label: "ZASOBY",
      title: "Brak ludzi lub sprzętu pojawia się zwykle w najgorszym momencie",
      description:
        "Kiedy termin jest blisko, nie ma miejsca na szukanie ekipy od nowa. Potrzebna jest organizacja, która ma rezerwę i potrafi szybko wejść do pracy.",
      tone: "resources",
    },
    {
      iconName: "clipboardCheck",
      label: "JAKOŚĆ",
      title: "Efekt końcowy musi być weryfikowalny, nie uznaniowy",
      description:
        "Bez ustalonego standardu jedna strona widzi gotowość, a druga listę uwag. To wydłuża odbiór i niepotrzebnie komplikuje finalizację etapu.",
      tone: "data",
    },
    {
      iconName: "route",
      label: "FINALIZACJA",
      title: "Na końcu potrzebne są nie tylko prace, ale też potwierdzenie wykonania",
      description:
        "Zdjęcia, protokół i czytelny status realizacji ułatwiają rozliczenie usługi, przekazanie obiektu i zamknięcie sprawy po stronie firmy.",
      tone: "technology",
    },
  ],
};

const solutionsContent: SolutionsSectionContent = {
  kickerLabel: "CO ROBIMY",
  titleLines: ["Usługi dla firm, które", "mają być sprawnie zorganizowane"],
  description:
    "Obsługujemy obiekty komercyjne w modelu, który upraszcza decyzję i porządkuje realizację. Wybierasz usługę, a my przejmujemy organizację wejścia, standard i potwierdzenie wykonania.",
  items: [
    {
      iconName: "hardHat",
      label: "Sprzątanie po budowie i remontach",
      title: "Finalizacja etapu po pracach",
      description:
        "Sprzątanie po budowie i wykończeniach pod odbiór, przekazanie albo otwarcie. Pracujemy według stref, kolejności i technologii dobranej do materiałów.",
      ctaLabel: "Zobacz jak działamy",
      mediaAlt: "Sprzątanie po budowie",
      mediaSrc: "/window.svg",
    },
    {
      iconName: "building2",
      label: "Utrzymanie czystości biur i lokali",
      title: "Stały standard w codziennej pracy obiektu",
      description:
        "Cykliczna obsługa biur i lokali handlowo-usługowych. Harmonogram, kontrola jakości i szybkie reakcje, które utrzymują przewidywalny poziom serwisu.",
      ctaLabel: "Porozmawiaj o stałej obsłudze",
      mediaAlt: "Utrzymanie czystości",
      mediaSrc: "/window.svg",
    },
    {
      iconName: "sparkles",
      label: "Mycie okien i witryn",
      title: "Regularny efekt i sprawna logistyka",
      description:
        "Mycie witryn dla firm w ustalonych oknach realizacji oraz mycie okien dla klientów prywatnych. Usługa uporządkowana, bezpieczna i łatwa do zaplanowania.",
      ctaLabel: "Sprawdź usługę",
      mediaAlt: "Mycie okien i witryn",
      mediaSrc: "/window.svg",
    },
    {
      iconName: "grid3x3",
      label: "Czyszczenie posadzek",
      title: "Technologia dobrana do nawierzchni",
      description:
        "Maszynowe doczyszczanie i odplamianie posadzek w obiektach komercyjnych. Dobieramy metodę do rodzaju zabrudzeń i oczekiwanego efektu końcowego.",
      ctaLabel: "Zobacz opcje",
      mediaAlt: "Czyszczenie posadzek",
      mediaSrc: "/window.svg",
    },
    {
      iconName: "mapPin",
      label: "Zasięg i moce",
      title: "Cała Polska i organizacja pod termin",
      description:
        "Działamy w wielu miastach i dobieramy zespoły do skali, okna wejścia oraz warunków realizacji. To jedna współpraca zamiast wielu lokalnych ustaleń.",
      ctaLabel: "Sprawdź dostępność",
      mediaAlt: "Zasięg realizacji",
      mediaSrc: "/window.svg",
    },
  ],
};

const showcaseContent: ShowcaseSectionContent = {
  kickerLabel: "RYZYKA I JAK JE OGRANICZAMY",
  titleLines: ["Ryzyka, które najczęściej opóźniają", "odbiór i komplikują realizację"],
  description:
    "W sprzątaniu dla firm problemem zwykle nie jest sam zakres prac, ale brak zasad prowadzenia etapu. Dlatego przed startem porządkujemy warunki wejścia, standard i sposób potwierdzenia efektu.",
  items: [
    {
      tag: "HARMONOGRAM",
      title: "Zmiany na budowie i prace nachodzące na siebie",
      description:
        "Potwierdzamy okno wejścia i realne warunki pracy przed startem. Dzięki temu realizacja nie zaczyna się w ciemno i nie wraca po pierwszej godzinie.",
      result: "Efekt: mniej przestojów i większa przewidywalność przebiegu prac.",
    },
    {
      tag: "DOSTĘP",
      title: "Procedury obiektu i blokady organizacyjne",
      description:
        "Zbieramy wymagania wejścia, zasady dostępu i formalności wcześniej, żeby zespół nie tracił czasu na uzgodnienia w dniu realizacji.",
      result: "Efekt: szybszy start i stabilniejsza organizacja pracy.",
    },
    {
      tag: "STANDARD",
      title: "Różne oczekiwania co do efektu końcowego",
      description:
        "Ustalamy zakres i standard do weryfikacji, a przed zgłoszeniem gotowości prowadzimy kontrolę wewnętrzną według checklisty.",
      result: "Efekt: krótsza lista uwag i sprawniejsza finalizacja realizacji.",
    },
    {
      tag: "ODPOWIEDZIALNOŚĆ",
      title: "Usterki i wątpliwości, po czyjej stronie jest problem",
      description:
        "Jeśli coś ujawnia się w trakcie, od razu to zgłaszamy i dokumentujemy. Jasno rozdzielamy stan zastany od zakresu realizacji.",
      result: "Efekt: mniej nieporozumień i mniej sporów po wykonaniu prac.",
    },
    {
      tag: "ZASOBY",
      title: "Brak ludzi lub sprzętu w kluczowym momencie",
      description:
        "Planujemy realizację z rezerwą. Gdy warunki się zmieniają albo okno się skraca, nie zostajesz bez wykonawcy na ostatniej prostej.",
      result: "Efekt: większa pewność dowiezienia terminu.",
    },
  ],
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "POTRZEBUJESZ SZYBKO SFINALIZOWAĆ TEN ETAP?",
  title: "Powiedz, jaki obiekt trzeba przygotować i na kiedy",
  description:
    "W krótkiej rozmowie zbierzemy minimum danych, potwierdzimy okno wejścia i wskażemy najważniejsze ryzyka organizacyjne. Jeśli sprawa jest pilna, od razu powiemy, czy mamy moce na termin.",
  buttonLabel: "Sprawdź dostępność terminu",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const knowledgeContent: KnowledgeSectionContent = {
  kickerLabel: "DOWODY Z REALIZACJI",
  titleLines: ["Zobacz, jak wyglądają nasze realizacje", "na obiektach w całej Polsce"],
  description:
    "Zdjęcia z realizacji, zakresy i efekty. Zobacz, jak wygląda finalizacja etapu w praktyce — bez ogólników i bez deklaracji bez pokrycia.",
  cards: [
    {
      title: "Realizacje",
      description:
        "Przykładowe obiekty, zakresy prac i konkretne efekty. Krótkie opisy pokazujące, co było do wykonania i jaki rezultat został dowieziony.",
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
        "Co klienci doceniają we współpracy. Najczęściej terminowość, komunikację, porządek organizacyjny i czytelne potwierdzenie wykonania.",
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
  title: `Wyślij minimum danych, a my wrócimy z jasnym kolejnym krokiem`,
  description:
    "Napisz, jaki to obiekt i na kiedy potrzebujesz realizacji. Jeśli masz zdjęcia, dołącz je. Wrócimy z krótką listą pytań, potwierdzimy dostępność i przygotujemy ofertę gotową do przekazania w firmie.",
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
