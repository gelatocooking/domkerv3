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

// /sprzatanie-cykliczne

const defaultContent: PagesHeroContent = {
  badge: "SPRZĄTANIE CYKLICZNE (B2B)",
  titleLines: ["Sprzątanie cykliczne", "bez ciągłego pilnowania"],
  emphasisSuffix: "/",
  description:
    "To usługa dla biur, lokali i obiektów komercyjnych, w których liczy się stały standard, przewidywalny harmonogram i współpraca, do której nie trzeba wracać co tydzień od zera. W Domker ustawiamy regularny serwis tak, żeby działał w tle i nie angażował Cię bardziej, niż trzeba.",
  ctaLabel: "Ustal stałą obsługę",
};

const knowledgeContent2: KnowledgeSectionContent = {
  kickerLabel: "GDZIE TO MA SENS?",
  titleLines: ["Stała obsługa działa najlepiej tam,", "gdzie liczy się przewidywalny standard"],
  description:
    "Sprzątanie cykliczne nie jest usługą od gaszenia pojedynczego problemu. To model dla obiektów, które mają działać na co dzień bez ciągłego przypominania o podstawach, bez wracania do tych samych ustaleń i bez każdorazowego układania tematu od nowa.",
  cards: [
    {
      title: "Biura i zaplecza firm",
      description:
        "Dla miejsc, w których ważny jest regularny porządek, przewidywalny harmonogram i serwis, który nie wymaga stałej kontroli po stronie firmy.",
      buttonLabel: "Chcę omówić biuro",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Sprzątanie cykliczne biur",
      },
    },
    {
      title: "Lokale i obiekty komercyjne",
      description:
        "Dla lokali usługowych, gabinetów i miejsc, które muszą wyglądać dobrze codziennie, a nie tylko po jednorazowym wejściu ekipy.",
      buttonLabel: "Chcę omówić lokal",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Sprzątanie cykliczne lokali",
      },
    },
  ],
};

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "ZNASZ TE SYTUACJE?",
  titleLines: ["Przy stałej obsłudze problemem", "rzadko jest sam zakres sprzątania"],
  description:
    "Najczęściej psuje się nie sam serwis, tylko jego przewidywalność. Raz jest dobrze, raz słabiej, trzeba przypominać o podstawach, harmonogram się rozjeżdża, a po stronie klienta wracają te same pytania i te same drobne problemy operacyjne.",
  items: [
    {
      iconName: "calendarClock",
      label: "HARMONOGRAM",
      title: "Brakuje stałego rytmu i jasnych okien realizacji",
      description:
        "Jeśli serwis nie działa według przewidywalnego planu, szybko zaczyna wchodzić w kolizję z rytmem pracy biura albo lokalu.",
      tone: "processes",
    },
    {
      iconName: "workflow",
      label: "POWTARZANIE",
      title: "Do tych samych ustaleń trzeba wracać częściej, niż powinno",
      description:
        "Gdy zakres i standard nie są dobrze ustawione, klient zamiast mieć usługę w tle, wraca do tych samych tematów tydzień po tygodniu.",
      tone: "processes",
    },
    {
      iconName: "layoutGrid",
      label: "STANDARD",
      title: "Poziom wykonania jest nierówny i zależy od dnia albo osoby",
      description:
        "Przy stałej obsłudze liczy się powtarzalność. Problem pojawia się wtedy, gdy serwis raz wygląda dobrze, a raz tylko poprawnie.",
      tone: "data",
    },
    {
      iconName: "truck",
      label: "CIĄGŁOŚĆ",
      title: "Przy zmianach lub nieobecnościach serwis nie może się rozsypać",
      description:
        "Stała obsługa ma być odporna na drobne zmiany organizacyjne. Klient nie powinien odczuwać każdej zmiany po stronie wykonawcy.",
      tone: "resources",
    },
    {
      iconName: "shieldAlert",
      label: "REAKCJA",
      title: "Bieżące potrzeby wymagają kontaktu, bez przeciągania",
      description:
        "Przy długiej współpracy liczy się też to, jak szybko wykonawca reaguje na korekty, dodatkowe potrzeby i zmiany po stronie obiektu.",
      tone: "risk",
    },
    {
      iconName: "fileText",
      label: "WSPÓŁPRACA",
      title: "Serwis ma działać stabilnie, a nie angażować klienta w pilnowanie",
      description:
        "Dobra współpraca cykliczna powinna odciążać, a nie tworzyć kolejne mikro-zadania po stronie biura, managera albo właściciela.",
      tone: "technology",
    },
  ],
};

const solutionsContent: SolutionsSectionContent = {
  kickerLabel: "JAK TO PROWADZIMY",
  titleLines: ["Sprzątanie cykliczne jako", "stały serwis z jasnym rytmem pracy"],
  description:
    "Nie ustawiamy tej usługi jako przypadkowych wejść, tylko jako przewidywalny model współpracy. Najpierw doprecyzowujemy zakres, częstotliwość i rytm obiektu, a potem pilnujemy, żeby standard był utrzymywany bez ciągłego wracania do podstaw.",
  items: [
    {
      iconName: "clipboardCheck",
      label: "Zakres i częstotliwość",
      title: "Na początku ustalamy, co ma być robione i jak często",
      description:
        "Codziennie, kilka razy w tygodniu albo według konkretnego rytmu obiektu. Stała obsługa działa dobrze tylko wtedy, gdy harmonogram ma sens operacyjny.",
      ctaLabel: "Ustal zakres",
      mediaAlt: "Zakres i częstotliwość sprzątania cyklicznego",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "layoutGrid",
      label: "Standard serwisu",
      title: "Ustawiamy poziom wykonania, który ma być utrzymywany regularnie",
      description:
        "Przy tej usłudze nie chodzi o jednorazowy efekt, tylko o powtarzalny poziom czystości, który da się utrzymać tydzień po tygodniu.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Standard w sprzątaniu cyklicznym",
      mediaSrc: "/kontakt#minimum-danych",
    },
    {
      iconName: "shieldAlert",
      label: "Rytm obiektu",
      title: "Dopasowujemy serwis do godzin i sposobu działania miejsca",
      description:
        "Biuro, lokal, gabinet czy obiekt komercyjny mają własny rytm. Harmonogram musi wspierać pracę obiektu, a nie ją utrudniać.",
      ctaLabel: "Ustal harmonogram",
      mediaAlt: "Harmonogram sprzątania cyklicznego",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "users",
      label: "Jeden kontakt",
      title: "Po stronie klienta współpraca ma być prosta i czytelna",
      description:
        "Nie trzeba każdej sprawy ustalać od nowa z inną osobą. Stały kontakt porządkuje komunikację i skraca drogę do szybkich decyzji.",
      ctaLabel: "Zapytaj o współpracę",
      mediaAlt: "Jeden kontakt po stronie Domker",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "calendarClock",
      label: "Ciągłość serwisu",
      title: "Stała obsługa ma działać przewidywalnie również przy zmianach",
      description:
        "Klient nie powinien odczuwać każdej nieobecności czy każdej zmiany organizacyjnej po stronie wykonawcy. Liczy się stabilność współpracy.",
      ctaLabel: "Sprawdź dostępność",
      mediaAlt: "Ciągłość sprzątania cyklicznego",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "truck",
      label: "Rozszerzenia zakresu",
      title: "Jeśli potrzeby się zmieniają, współpraca powinna dać się łatwo dopasować",
      description:
        "Stała obsługa nie może być sztywna. Zakres, częstotliwość albo dodatkowe prace da się korygować wraz ze zmianami po stronie obiektu.",
      ctaLabel: "Omów potrzeby",
      mediaAlt: "Rozszerzenie zakresu stałej obsługi",
      mediaSrc: "/kontakt",
    },
  ],
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "USTAWMY SERWIS, KTÓRY DZIAŁA W TLE",
  title: "Powiedz, jaki obiekt chcesz objąć stałą obsługą",
  description:
    "Podaj lokalizację, typ obiektu, orientacyjny metraż i częstotliwość. Jeśli obiekt działa w konkretnych godzinach albo ma własne ograniczenia organizacyjne, dopisz to od razu.",
  buttonLabel: "Wyślij minimum danych",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const showcaseContent: ShowcaseSectionContent = {
  kickerLabel: "CO UTRZYMUJE WSPÓŁPRACĘ W RYTMIE",
  titleLines: ["Przy stałej obsłudze liczy się", "nie tylko zakres, ale też sposób współpracy"],
  description:
    "Sprzątanie cykliczne działa dobrze wtedy, gdy jest przewidywalne i nie wymaga ciągłego pilnowania. Dlatego porządkujemy nie tylko sam zakres, ale też to, co wpływa na stabilność serwisu w dłuższym czasie.",
  items: [
    {
      tag: "HARMONOGRAM",
      title: "Stałe okna realizacji porządkują rytm współpracy",
      description:
        "Jeśli serwis ma działać regularnie, godziny i częstotliwość muszą być dopasowane do obiektu oraz realnie utrzymywane w czasie.",
      result: "To daje przewidywalność po stronie klienta i mniej zmian na ostatnią chwilę.",
    },
    {
      tag: "ZAKRES",
      title: "Czytelny zakres ogranicza wracanie do tych samych ustaleń",
      description:
        "Im lepiej na starcie ustawiony jest model współpracy, tym mniej sytuacji, w których trzeba ponownie tłumaczyć podstawy serwisu.",
      result: "Dzięki temu obsługa jest spokojniejsza i mniej angażuje klienta operacyjnie.",
    },
    {
      tag: "STANDARD",
      title: "Powtarzalna jakość jest ważniejsza niż pojedynczy dobry dzień",
      description:
        "Przy stałej obsłudze nie liczy się jednorazowe wejście, tylko to, czy poziom wykonania utrzymuje się regularnie.",
      result: "To wpływa na zaufanie do serwisu i poczucie, że temat jest naprawdę ustawiony.",
    },
    {
      tag: "REAKCJA",
      title: "Zmiany i bieżące potrzeby nie powinny dezorganizować współpracy",
      description:
        "Przy obiektach komercyjnych potrzeby czasem się zmieniają, dlatego ważna jest szybka i prosta ścieżka reagowania po stronie wykonawcy.",
      result: "To pozwala korygować usługę bez rozbijania całego modelu współpracy.",
    },
    {
      tag: "CIĄGŁOŚĆ",
      title: "Stała obsługa musi działać stabilnie, także przy zmianach organizacyjnych",
      description:
        "Klient nie powinien odczuwać każdej zmiany po stronie serwisu. Liczy się ciągłość, a nie uzależnienie jakości od jednej osoby.",
      result: "Dzięki temu współpraca pozostaje przewidywalna i mniej ryzykowna operacyjnie.",
    },
    {
      tag: "ROZLICZENIA",
      title: "Model współpracy powinien być prosty także po stronie formalnej",
      description:
        "Przy usłudze cyklicznej liczy się też to, żeby zakres, kontakt i rozliczenie były czytelne i nie generowały zbędnych niejasności.",
      result: "To skraca ścieżkę decyzji i ułatwia długofalowe utrzymanie współpracy.",
    },
  ],
};

const processContent: ProcessSectionContent = {
  kickerLabel: "JAK DZIAŁAMY?",
  titleLines: ["Od pierwszej rozmowy", "do regularnego serwisu"],
  description:
    "Ta usługa nie ma działać jednorazowo, tylko w dłuższym rytmie. Dlatego najpierw zbieramy minimum danych, potem doprecyzowujemy zakres i częstotliwość, a następnie ustawiamy serwis tak, żeby działał przewidywalnie.",
  steps: [
    {
      index: "01",
      title: "Minimum danych i szybka kwalifikacja",
      description:
        "Ustalamy typ obiektu, metraż, lokalizację, oczekiwaną częstotliwość i godziny, w których serwis ma być prowadzony.",
    },
    {
      index: "02",
      title: "Zakres, częstotliwość i model współpracy",
      description:
        "Doprecyzowujemy, co ma być objęte serwisem, jak często i w jakim rytmie usługa ma działać w praktyce.",
    },
    {
      index: "03",
      title: "Potwierdzenie harmonogramu i organizacji",
      description:
        "Ustalamy okna realizacji, sposób kontaktu i wszystkie elementy potrzebne do spokojnego startu stałej obsługi.",
    },
    {
      index: "04",
      title: "Start serwisu i utrzymanie standardu",
      description:
        "Uruchamiamy współpracę i prowadzimy usługę tak, żeby poziom wykonania był stabilny, a klient nie musiał wracać do podstawowych ustaleń.",
    },
  ],
  ctaLabel: "Ustal stałą obsługę",
};

const contactContent: ContactSectionContent = {
  kickerLabel: "SKONTAKTUJ SIĘ",
  title: "Powiedz, jaki obiekt chcesz objąć regularnym serwisem",
  description:
    "Zostaw kontakt i opisz obiekt jednym zdaniem. Napisz, czy chodzi o biuro, lokal, gabinet albo inny obiekt komercyjny, jaki jest orientacyjny metraż i jak często usługa ma się odbywać.",
  chips: [
    { label: "Stały standard" },
    { label: "Jeden kontakt" },
    { label: "Kontrola jakości" },
    { label: "Harmonogram" },
    { label: "Ciągłość serwisu" },
    { label: "Szybka kwalifikacja", accent: true },
  ],
  form: {
    emailLabel: "Adres e-mail",
    emailPlaceholder: "Twój adres e-mail",
    phoneLabel: "Numer telefonu",
    phonePlaceholder: "Twój numer telefonu",
    topicLabel: "Temat rozmowy",
    topicPlaceholder: "Jaki obiekt, jaki metraż i jak często",
    consentText:
      "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zgłoszenia oraz na kontakt handlowy drogą elektroniczną na podany adres e-mail. Polityka prywatności.",
    submitLabel: "Wyślij minimum danych",
  },
  meta: {
    avatars: ["A", "B", "C", "D", "E", "F"],
    text: "Zespół operacyjny po stronie B2B",
  },
};

const knowledgeContent: KnowledgeSectionContent = {
  kickerLabel: "REALIZACJE I REFERENCJE",
  titleLines: ["Zobacz, jak wygląda", "stała obsługa w praktyce"],
  description:
    "Przykładowe realizacje dla biur, lokali i obiektów komercyjnych. Zobacz, jak prowadzimy stały serwis i co klienci doceniają przy współpracy długofalowej.",
  cards: [
    {
      title: "Realizacje",
      description:
        "Przykłady obiektów objętych stałą obsługą. Krótkie case’y pokazujące zakres, częstotliwość i sposób prowadzenia serwisu.",
      buttonLabel: "Zobacz realizacje",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Realizacje Domker przy sprzątaniu cyklicznym",
      },
    },
    {
      title: "Referencje i opinie",
      description:
        "Co klienci doceniają przy tej usłudze. Najczęściej przewidywalność, prostą komunikację i serwis, który nie wymaga ciągłego pilnowania.",
      buttonLabel: "Zobacz referencje",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Referencje Domker przy sprzątaniu cyklicznym",
      },
    },
  ],
};

const faqContent: FaqSectionContent = {
  kickerLabel: "NAJCZĘŚCIEJ ZADAWANE PYTANIA",
  title: "Pytania przed ustawieniem stałej obsługi",
  titleLines: ["Pytania przed ustawieniem", "stałej obsługi"],
  description: "Masz więcej pytań? Po prostu",
  highlightText: "skontaktuj się z nami",
  avatars: ["A", "B", "C", "D", "E", "F", "G", "H"],
  items: [
    {
      question: "Jakie obiekty obsługujecie cyklicznie?",
      answer:
        "Najczęściej są to biura, lokale usługowe, gabinety i inne obiekty komercyjne, w których potrzebny jest regularny serwis utrzymujący stały poziom czystości.",
    },
    {
      question: "Czy można ustalić indywidualny harmonogram?",
      answer:
        "Tak. Częstotliwość i godziny realizacji dopasowujemy do rytmu obiektu, tak żeby serwis wspierał jego działanie, a nie wchodził z nim w kolizję.",
    },
    {
      question: "Czy możecie pracować rano, wieczorem albo poza godzinami pracy obiektu?",
      answer:
        "Tak, jeśli taki model najlepiej pasuje do miejsca. Na etapie ustaleń doprecyzowujemy, kiedy serwis będzie najmniej uciążliwy dla obiektu.",
    },
    {
      question: "Co wchodzi w zakres stałej obsługi?",
      answer:
        "To zależy od obiektu i częstotliwości. Zakres ustalamy na początku współpracy tak, żeby był czytelny, realny do utrzymania i dopasowany do potrzeb miejsca.",
    },
    {
      question: "Czy można zmieniać częstotliwość w trakcie współpracy?",
      answer:
        "Tak. Jeśli potrzeby obiektu się zmieniają, można skorygować częstotliwość, rytm realizacji albo dodatkowe elementy zakresu.",
    },
    {
      question: "Jak wygląda ciągłość serwisu przy zmianach albo nieobecnościach?",
      answer:
        "Stała obsługa ma działać przewidywalnie również wtedy, gdy po stronie wykonawcy pojawiają się zmiany organizacyjne. Klient nie powinien odczuwać każdej zmiany personalnej.",
    },
    {
      question: "Jak wygląda kontrola jakości przy stałej współpracy?",
      answer:
        "Przy usłudze cyklicznej ważna jest powtarzalność. Dlatego prowadzimy serwis tak, żeby poziom wykonania był stabilny, a nie zależny od pojedynczego wejścia.",
    },
    {
      question: "Czy można połączyć stałą obsługę z innymi usługami?",
      answer:
        "Tak. Jeśli obiekt tego potrzebuje, można połączyć sprzątanie cykliczne z dodatkowymi pracami, ale podstawą pozostaje dobrze ustawiony regularny serwis.",
    },
    {
      question: "Jak wygląda rozliczenie przy takiej współpracy?",
      answer:
        "Warunki rozliczenia ustalamy po określeniu zakresu, częstotliwości i modelu współpracy. Dzięki temu od początku wiadomo, jak usługa będzie prowadzona i rozliczana.",
    },
    {
      question: "Jak szybko można zacząć?",
      answer:
        "To zależy od lokalizacji, zakresu i oczekiwanej częstotliwości. Po otrzymaniu minimum danych szybko ocenimy możliwy termin startu.",
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
        <KnowledgeSection content={knowledgeContent2} />
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
