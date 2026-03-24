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
  titleLines: ["Sprzątanie pod obiory","i przekazanie obiektu" ],
  emphasisText: "na czas",
  emphasisTexts: ["na czas", "bez chaosu", "formalnie"],
  emphasisIconNames: ["calendarClock", "workflow", "clipboardCheck"],
  emphasisIconName: "lightbulb",
  emphasisSuffix: "",
  description:
    "Domker to firma sprzątająca dla firm, która myśli procesowo — szczególnie tam, gdzie liczy się termin, standard i sprawna finalizacja etapu. Realizujemy sprzątanie po budowie, utrzymanie czystości biur i lokali handlowo-usługowych, mycie witryn oraz czyszczenie posadzek.  Cała Polska.",
  ctaLabel: "Sprawdź dostępność terminu",
  imageSrc: "/tlo.png",
  imageAlt: "Sprzątanie dla firm",
};

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "ZNASZ TE WYZWANIA?",
  titleLines: ["Przy odbiorze, przekazaniu i otwarciu", "liczy się więcej niż samo „czysto”"],
  description:
    "W realizacjach B2B problemem rzadko jest samo wykonanie prac. Najczęściej o wyniku decydują warunki wejścia, koordynacja między ekipami, bezpieczeństwo wykończeń i standard, który da się zweryfikować po stronie firmy.",
  items: [
    {
      iconName: "calendarClock",
      label: "TERMIN",
      title: "Data odbioru jest stała, a warunki na obiekcie zmieniają się do końca",
      description:
        "Prace się przesuwają, strefy bywają wyłączone, a okno realizacji się skraca. Potrzebujesz wykonawcy, który potrafi działać w realnych warunkach obiektu.",
      tone: "processes",
    },
    {
      iconName: "workflow",
      label: "KOORDYNACJA",
      title: "Wiele ekip i wiele decyzji zwiększa ryzyko chaosu na finiszu",
      description:
        "Gdy każdy odpowiada tylko za swój fragment, łatwo o wtórne zabrudzenia, brak kolejności prac i rozmycie odpowiedzialności za efekt końcowy.",
      tone: "processes",
    },
    {
      iconName: "shieldAlert",
      label: "WYKOŃCZENIA",
      title: "Nowe powierzchnie wymagają technologii dobranej do materiału",
      description:
        "Posadzki, szyby albo okna i armatura nie wybaczają przypadkowych narzędzi ani rozwiązań doraźnych. Na końcu liczy się bezpieczeństwo materiałowe.",
      tone: "risk",
    },
    {
      iconName: "truck",
      label: "ZASOBY",
      title: "Brak ludzi albo sprzętu pojawia się w najgorszym momencie",
      description:
        "Kiedy termin jest blisko, nie ma miejsca na szukanie nowej ekipy. Potrzebna jest organizacja, która ma zasoby i potrafi szybko wejść do pracy.",
      tone: "resources",
    },
    {
      iconName: "clipboardCheck",
      label: "STANDARD",
      title: "Efekt końcowy musi być czytelny dla odbioru, a nie uznaniowy",
      description:
        "Bez ustalonego standardu jedna strona widzi gotowość, a druga listę uwag. To wydłuża finalizację i komplikuje przekazanie obiektu dalej.",
      tone: "data",
    },
    {
      iconName: "route",
      label: "PROCEDOWANIE",
      title: "Po wykonaniu prac inwestycja musi być sprawnie sfinalizowana",
      description:
        "Zakres, status realizacji i dokumenty końcowe powinny ułatwiać rozliczenie usługi, odbiór oraz przekazanie sprawy dalej do przełożonego lub zakupów.",
      tone: "technology",
    },
  ],
};

const solutionsContent: SolutionsSectionContent = {
  kickerLabel: "CO ROBIMY",
  titleLines: ["Usługi dla firm i sieci handlowych,", "trzeba zorganizować przewidywalnie"],
  description:
    "Obsługujemy obiekty komercyjne w modelu, który upraszcza decyzję i porządkuje realizację. Wybierasz właściwą usługę, a my prowadzimy wejście, zakres, standard i finalizację etapu.",
  items: [
    {
      iconName: "hardHat",
      label: "Sprzątanie po budowie i po pracach wykończeniowych",
      title: "Przygotowanie obiektu pod odbiór, przekazanie i otwarcie",
      description:
        "Sprzątanie po budowie, remoncie i reficie prowadzone według stref, kolejności prac oraz technologii dobranej do materiałów i warunków na obiekcie.",
      ctaLabel: "Zobacz jak działamy",
      mediaAlt: "Sprzątanie po budowie",
      mediaSrc: "/window.svg",
      illustrationVariant: "zonedCleaningPlan",
    },
    {
      iconName: "building2",
      label: "Utrzymanie czystości biur i lokali",
      title: "Stały standard w codziennym działaniu obiektu",
      description:
        "Cykliczna obsługa biur, lokali handlowych i usługowych. Harmonogram, kontrola jakości i ciągłość serwisu, które ograniczają potrzebę ciągłego pilnowania wykonawcy.",
      ctaLabel: "Porozmawiaj o stałej obsłudze",
      mediaAlt: "Utrzymanie czystości",
      mediaSrc: "/window.svg",
      illustrationVariant: "operationalServiceBoard",
    },
    {
      iconName: "sparkles",
      label: "Mycie okien i witryn",
      title: "Regularny efekt i logistyka dopasowana do obiektu",
      description:
        "Mycie witryn dla firm i sieci oraz mycie okien w domach i mieszkaniach. Jedna usługa, prosta organizacja, czytelne zasady i szybka wycena ze zdjęć.",
      ctaLabel: "Sprawdź usługę",
      mediaAlt: "Mycie okien i witryn",
      mediaSrc: "/window.svg",
      illustrationVariant: "logisticsServiceBoard",
    },
    {
      iconName: "grid3x3",
      label: "Maszynowe czyszczenie posadzek",
      title: "Technologia dobrana do nawierzchni i zabrudzeń",
      description:
        "Doczyszczanie posadzek w obiektach komercyjnych z doborem metody do typu nawierzchni, skali zabrudzeń i oczekiwanego efektu końcowego.",
      ctaLabel: "Zobacz opcje",
      mediaAlt: "Czyszczenie posadzek",
      mediaSrc: "/window.svg",
      illustrationVariant: "surfaceSelectionBoard",
    },
    {
      iconName: "mapPin",
      label: "Cała Polska i jedna koordynacja",
      title: "Jedna współpraca zamiast wielu lokalnych ustaleń",
      description:
        "Działamy w wielu miastach i dobieramy zespoły do skali, terminu oraz warunków realizacji. To model dla firm, które chcą prowadzić temat spójnie.",
      ctaLabel: "Sprawdź dostępność",
      mediaAlt: "Zasięg realizacji",
      mediaSrc: "/window.svg",
      illustrationVariant: "polandNetworkBoard",
    },
  ],
};

const showcaseContent: ShowcaseSectionContent = {
  kickerLabel: "JAK OGRANICZAMY RYZYKA",
  titleLines: ["Co najczęściej wpływa na termin", "i wynik realizacji inwestycji"],
  description:
    "W usługach dla firm kluczowy jest nie tylko zakres prac, ale sposób prowadzenia całego etapu. Dlatego porządkujemy warunki wejścia, standard i odpowiedzialność jeszcze przed startem.",
  items: [
    {
      tag: "HARMONOGRAM",
      title: "Ciągłe zmiany na obiekcie i prace nachodzące na siebie",
      description:
        "Potwierdzamy okno wejścia i realne warunki pracy przed realizacją. Dzięki temu zespół nie startuje w ciemno i nie traci czasu na improwizację na miejscu.",
      result: "Efekt: mniej przestojów i większa przewidywalność przebiegu prac.",
    },
    {
      tag: "DOSTĘP",
      title: "Procedury obiektu, formalności i ograniczenia wejścia",
      description:
        "Zbieramy zasady dostępu, wymagania obiektu i ograniczenia organizacyjne wcześniej, żeby nie blokować realizacji w dniu wejścia.",
      result: "Efekt: szybszy start i stabilniejsza organizacja pracy.",
    },
    {
      tag: "STANDARD",
      title: "Różne oczekiwania stron wobec efektu końcowego",
      description:
        "Ustalamy, co dokładnie ma zostać przygotowane do odbioru, przekazania albo otwarcia. Dopiero na tej podstawie planujemy zakres i kolejność prac.",
      result: "Efekt: krótsza lista uwag i sprawniejsza finalizacja etapu.",
    },
    {
      tag: "ODPOWIEDZIALNOŚĆ",
      title: "Wątpliwości, co należy do zakresu, a co jest stanem zastanym",
      description:
        "Jeżeli w trakcie ujawniają się usterki albo ograniczenia, od razu je komunikujemy i porządkujemy informacyjnie po stronie Zleceniodawcy.",
      result: "Efekt: mniej nieporozumień i łatwiejsze dalsze procedowanie.",
    },
    {
      tag: "ZASOBY",
      title: "Ryzyko braku ludzi lub sprzętu w kluczowym momencie",
      description:
        "Planujemy realizację z zapleczem organizacyjnym. Gdy warunki się zmieniają albo okno się skraca, zwiększa to szansę dowiezienia terminu.",
      result: "Efekt: większa pewność realizacji w wymagającym harmonogramie.",
    },
  ],
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "POTRZEBUJESZ SPRAWNIE ZORGANIZOWAĆ TEN ETAP?",
  title: "Powiedz, jaki obiekt trzeba przygotować i jaki jest cel realizacji",
  description:
    "W krótkiej rozmowie zbierzemy minimum danych, potwierdzimy dostępność i wskażemy właściwą ścieżkę: przed odbiorem inwestorskim, przed otwarciem, przed przekazaniem albo do stałej obsługi.",
  buttonLabel: "Sprawdź dostępność terminu",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const knowledgeContent: KnowledgeSectionContent = {
  kickerLabel: "DOWODY Z REALIZACJI",
  titleLines: ["Zobacz, jak pracujemy", "na obiektach w całej Polsce"],
  description:
    "Realizacje, zakresy i efekty z różnych scenariuszy B2B. Zobacz, jak wygląda współpraca w praktyce — od pierwszych ustaleń po finalizację etapu.",
  cards: [
    {
      title: "Realizacje",
      description:
        "Przykładowe obiekty, zakresy prac i rezultaty. Krótkie opisy pokazujące warunki realizacji, typ obiektu i to, co było kluczowe dla efektu końcowego.",
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
        "Co klienci B2B doceniają we współpracy. Najczęściej przewidywalność, komunikację, porządek organizacyjny i sposób prowadzenia realizacji.",
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
  title: `Wyślij minimum danych, odpowiemy, czy możemy pomóc Ci w tym zakresie`,
  description:
    "Napisz, jaki to obiekt, jaki jest cel realizacji i na kiedy potrzebujesz wejścia. Jeśli masz zdjęcia, dołącz je. W odpowiedzi potwierdzimy dostępność, doprecyzujemy zakres i przygotujemy ofertę gotową do przekazania w firmie.",
  chips: [
    { label: "Szybka kwalifikacja" },
    { label: "Jasny zakres" },
    { label: "Kontrola jakości" },
    { label: "Czytelna finalizacja" },
    { label: "Obsługa w wielu miastach" },
    { label: "Start nawet w 3 dni*", accent: true },
  ],
  form: {
    emailLabel: "Adres e-mail",
    emailPlaceholder: "Twój adres e-mail",
    phoneLabel: "Numer telefonu",
    phonePlaceholder: "Twój numer telefonu",
    topicLabel: "Temat",
    topicPlaceholder: "Jaki obiekt, jaki cel i na kiedy",
    consentText:
      "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zgłoszenia oraz na kontakt handlowy drogą elektroniczną na podany adres e-mail. Polityka prywatności.",
    submitLabel: "Wyślij zapytanie",
  },
  meta: {
    avatars: ["A", "B", "C", "D", "E", "F"],
    text: "Zespół operacyjny gotowy do wejścia",
  },
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
const fixedShowcaseContent = fixContentDeep(showcaseContent);
const fixedCtaContent = fixContentDeep(ctaContent);
const fixedKnowledgeContent = fixContentDeep(knowledgeContent);
const fixedContactContent = fixContentDeep(contactContent);

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero content={fixedDefaultContent} />
        <SocialProof />
        <ProblemsSection content={fixedProblemsContent} />
        <SolutionsSection content={fixedSolutionsContent} />
        <ShowcaseSection content={fixedShowcaseContent} />
        <CtaSection content={fixedCtaContent} />
        <HighlightsSection />
        {/* <HighlightsSection /> */}
        <KnowledgeSection content={fixedKnowledgeContent} />
        {/* <TestimonialsSection /> */}
        <ContactSection content={fixedContactContent} />
      </main>
      <Footer />
    </div>
  );
}
