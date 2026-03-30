import type { Metadata } from "next";
import Header from "../../components/Header/Header";
import PagesHero, { type PagesHeroContent } from "../../components/PagesHero/PagesHero";
import ContactSection, {
  type ContactSectionContent,
} from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";
import styles from "./page.module.css";
import ProblemsSection, {
  type ProblemsSectionContent,
} from "@/components/ProblemsSection/ProblemsSection";
import ProcessSection, {
  type ProcessSectionContent,
} from "@/components/ProcessSection/ProcessSection";
import FaqSection, { type FaqSectionContent } from "@/components/FaqSection/FaqSection";
import CtaSection, { type CtaSectionContent } from "../../components/CtaSection/CtaSection";
import SolutionsSection, {
  type SolutionsSectionContent,
} from "@/components/SolutionsSection/SolutionsSection";
import KnowledgeSection, {
  type KnowledgeSectionContent,
} from "@/components/KnowledgeSection/KnowledgeSection";

export const metadata: Metadata = {
  title: "Kontakt i wycena usług sprzątania | Domker",
  description:
    "Wyślij minimum danych i sprawdź dostępność terminu. Domker przygotowuje wycenę oraz ofertę gotową do przekazania dalej w firmie.",
};
import ShowcaseSection, { ShowcaseSectionContent } from "@/components/ShowcaseSection/ShowcaseSection";

// /kontakt

const defaultContent: PagesHeroContent = {
  badge: "KONTAKT I SZYBKA KWALIFIKACJA",
  titleLines: ["Opisz krótko sytuację,", "a wskażemy właściwą ścieżkę"],
  emphasisSuffix: "/",
  description:
    "Nie musisz mieć pełnego briefu, żeby zacząć rozmowę. Wystarczy typ obiektu, lokalizacja i termin. Jeśli sprawa dotyczy kilku usług albo wielu punktów, uporządkujemy to i wrócimy z konkretną odpowiedzią.",
  ctaLabel: "Napisz do nas",
  ctaHref: "#kontakt",
};

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "TO NAJCZĘSTSZY PUNKT BLOKADY",
  titleLines: ["Wiele zgłoszeń nie rusza dalej,", "bo nie wiadomo, od czego zacząć"],
  description:
    "Czasem nie jest jasne, jaka usługa będzie właściwa. Innym razem brakuje części informacji, sprawa dotyczy kilku lokalizacji albo kilku potrzeb naraz. Ta strona ma uprościć pierwszy krok.",
  items: [
    {
      iconName: "workflow",
      label: "START",
      title: "Nie zawsze wiadomo, od jakiej usługi albo scenariusza zacząć",
      description:
        "Jedna sytuacja może dotyczyć sprzątania po budowie, stałej obsługi, witryn albo kilku rzeczy jednocześnie.",
      tone: "processes",
    },
    {
      iconName: "fileText",
      label: "INFORMACJE",
      title: "Na początku rzadko masz pełen komplet danych",
      description:
        "To normalne. Na start wystarczą podstawy, a brakujące informacje doprecyzujemy dopiero wtedy, gdy będą naprawdę potrzebne.",
      tone: "technology",
    },
    {
      iconName: "layoutGrid",
      label: "SKALA",
      title: "Jedna lokalizacja i sieć punktów wymagają innej ścieżki rozmowy",
      description:
        "Już na początku warto rozdzielić, czy chodzi o pojedynczy obiekt, kilka miast czy model współpracy w większej skali.",
      tone: "data",
    },
    {
      iconName: "calendarClock",
      label: "TERMIN",
      title: "Pilność sprawy zmienia sposób, w jaki trzeba ją poprowadzić",
      description:
        "Jeśli liczy się szybkie wejście albo krótki termin, od początku trzeba przyjąć inną logikę działania niż przy spokojniejszym wdrożeniu.",
      tone: "processes",
    },
    {
      iconName: "shieldAlert",
      label: "ZAKRES",
      title: "Bez kilku podstawowych danych trudno uczciwie mówić o widełkach",
      description:
        "Typ obiektu, lokalizacja, skala i zdjęcia często dają więcej niż długi opis bez konkretów.",
      tone: "risk",
    },
    {
      iconName: "users",
      label: "KOMUNIKACJA",
      title: "Nikt nie chce tracić czasu na długą wymianę wiadomości bez postępu",
      description:
        "Dlatego po pierwszym kontakcie porządkujemy zgłoszenie tak, żeby szybko przejść do sensownej decyzji.",
      tone: "resources",
    },
  ],
};

const solutionsContent: SolutionsSectionContent = {
  kickerLabel: "Z CZYM MOŻESZ NAPISAĆ?",
  titleLines: ["Obsługujemy różne sytuacje,", "ale prowadzimy je jedną logiczną ścieżką"],
  description:
    "Nie musisz idealnie nazywać usługi ani wiedzieć, jak dokładnie powinien wyglądać zakres. Wystarczy opisać sytuację. Po naszej stronie jest dopasowanie właściwego scenariusza i dalszej rozmowy.",
  items: [
    {
      iconName: "hardHat",
      label: "Po budowie / przed odbiorem",
      title: "Gdy liczy się odbiór, przekazanie albo otwarcie obiektu",
      description:
        "To ścieżka dla spraw, gdzie znaczenie mają standard końcowy, strefy krytyczne, termin wejścia i sposób prowadzenia realizacji.",
      ctaLabel: "Opisz sytuację",
  ctaHref: "/kontakt",
      mediaAlt: "Sprzątanie po budowie",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "building2",
      label: "Stała obsługa",
      title: "Gdy potrzebujesz regularnego serwisu w biurze, lokalu albo obiekcie",
      description:
        "To ścieżka dla współpracy cyklicznej, gdzie ważne są harmonogram, przewidywalny standard i ciągłość obsługi.",
      ctaLabel: "Opisz obiekt",
  ctaHref: "/kontakt",
      mediaAlt: "Sprzątanie cykliczne",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "sparkles",
      label: "Witryny i okna",
      title: "Gdy chodzi o mycie witryn albo okien jednorazowo lub regularnie",
      description:
        "To ścieżka dla firm i klientów prywatnych, którzy chcą szybko ustalić zakres, model usługi i orientacyjną wycenę.",
      ctaLabel: "Wyślij zdjęcia",
  ctaHref: "/kontakt",
      mediaAlt: "Mycie okien i witryn",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "grid3x3",
      label: "Posadzki i zabrudzenia specjalistyczne",
      title: "Gdy potrzebna jest usługa wymagająca doboru technologii",
      description:
        "To ścieżka dla spraw, w których liczy się rodzaj nawierzchni, typ zabrudzeń i właściwa metoda działania.",
      ctaLabel: "Opisz powierzchnię",
  ctaHref: "/kontakt",
      mediaAlt: "Maszynowe czyszczenie posadzek",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "clipboardList",
      label: "Kilka potrzeb naraz",
      title: "Gdy jedno zgłoszenie obejmuje więcej niż jedną usługę albo etap",
      description:
        "Jeśli sprawa dotyczy kilku rzeczy jednocześnie, najpierw układamy kolejność działań i dopiero potem przechodzimy do szczegółów.",
      ctaLabel: "Opisz całość",
  ctaHref: "/kontakt",
      mediaAlt: "Kilka usług w jednym zgłoszeniu",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "mapPin",
      label: "Jedna lokalizacja albo wiele punktów",
      title: "Gdy trzeba szybko ocenić skalę i model współpracy",
      description:
        "Pojedynczy obiekt i kilka lokalizacji wymagają innej logiki rozmowy, ale oba scenariusze da się sprawnie uporządkować.",
      ctaLabel: "Podaj skalę",
  ctaHref: "/kontakt",
      mediaAlt: "Jedna lokalizacja lub wiele punktów",
      mediaSrc: "/kontakt",
    },
  ],
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "ZACZNIJMY OD KRÓTKIEGO OPISU",
  title: "Wystarczy kilka informacji, żeby ruszyć dalej",
  description:
    "Napisz, czego dotyczy zgłoszenie, jaki to obiekt, w jakiej lokalizacji i na kiedy potrzebujesz działania. Jeśli chodzi o kilka punktów, dopisz miasta i liczbę lokalizacji. Zdjęcia bardzo pomagają.",
  buttonLabel: "Napisz do nas",
  buttonHref: "#kontakt",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const showcaseContent: ShowcaseSectionContent = {
  kickerLabel: "CO DOSTAJESZ PO PIERWSZEJ WIADOMOŚCI?",
  titleLines: ["Pierwszy kontakt ma prowadzić", "do konkretu, a nie do ogólników"],
  description:
    "Nie kończymy rozmowy na potwierdzeniu odbioru wiadomości. Po otrzymaniu podstawowych informacji porządkujemy sprawę tak, żeby dało się szybko przejść do realnej decyzji i właściwego dalszego działania.",
  items: [
    {
      tag: "KWALIFIKACJA",
      title: "Najpierw określamy, jaki scenariusz naprawdę pasuje do sytuacji",
      description:
        "Nie każda sprawa wymaga tej samej ścieżki. Czasem chodzi o odbiór, czasem o serwis stały, a czasem o usługę specjalistyczną.",
      result: "To skraca drogę do właściwej rozmowy i ogranicza zbędne doprecyzowania.",
    },
    {
      tag: "PYTANIA",
      title: "Jeśli brakuje informacji, wracamy tylko z tym, co naprawdę potrzebne",
      description:
        "Nie oczekujemy pełnego briefu od razu. Dopytujemy wyłącznie o dane, które wpływają na zakres, termin albo wycenę.",
      result: "Dzięki temu rozmowa jest krótsza, spokojniejsza i bardziej konkretna.",
    },
    {
      tag: "ŚCIEŻKA",
      title: "Pokazujemy, jaki dalszy krok ma sens przy tej konkretnej sprawie",
      description:
        "Może to być sprawdzenie terminu, orientacyjne widełki, oferta do zatwierdzenia albo przejście do właściwej usługi.",
      result: "Od początku wiadomo, co dzieje się dalej i czego można się spodziewać.",
    },
    {
      tag: "WIDEŁKI",
      title: "Przy dobrze opisanej sytuacji szybciej wracamy z konkretem",
      description:
        "Typ obiektu, skala, lokalizacja i zdjęcia często pozwalają przejść do bardziej praktycznej rozmowy już na początku.",
      result: "To ułatwia podjęcie decyzji i przekazanie sprawy dalej w firmie.",
    },
    {
      tag: "OFERTA",
      title: "Gdy zgłoszenie jest gotowe, przygotowujemy materiał do akceptacji",
      description:
        "W zależności od sytuacji może to być oferta do przełożonego, zakupów, zarządu albo osoby decyzyjnej po stronie klienta.",
      result: "Pierwsza rozmowa szybciej przechodzi w realne procedowanie współpracy.",
    },
    {
      tag: "KOMUNIKACJA",
      title: "Po naszej stronie dostajesz jasny kierunek, nie ogólną odpowiedź",
      description:
        "Naszym celem nie jest tylko odpisać, ale uporządkować sprawę tak, żeby można ją było skutecznie poprowadzić dalej.",
      result: "To obniża próg wejścia i sprawia, że kontakt naprawdę coś uruchamia.",
    },
  ],
};

const processContent: ProcessSectionContent = {
  kickerLabel: "JAK TO DZIAŁA?",
  titleLines: ["Od krótkiego opisu", "do właściwej ścieżki rozmowy"],
  description:
    "Ta strona ma uprościć start współpracy. Najpierw zbieramy podstawy, potem kwalifikujemy sytuację i dopiero wtedy wracamy z pytaniami, widełkami albo właściwym kolejnym krokiem.",
  steps: [
    {
      index: "01",
      title: "Wysyłasz krótki opis",
      description:
        "Wystarczy typ obiektu, lokalizacja, termin i kilka zdań o tym, czego dotyczy zgłoszenie.",
    },
    {
      index: "02",
      title: "Sprawdzamy, jaka ścieżka najlepiej pasuje",
      description:
        "Oceniamy, czy chodzi o jednorazową realizację, stałą obsługę, kilka lokalizacji czy usługę wymagającą doprecyzowania.",
    },
    {
      index: "03",
      title: "Wracamy z pytaniami albo konkretnym kierunkiem",
      description:
        "Jeżeli czegoś brakuje, doprecyzowujemy tylko to, co naprawdę wpływa na zakres, termin albo wycenę.",
    },
    {
      index: "04",
      title: "Przechodzimy do wyceny, terminu albo oferty",
      description:
        "Po uporządkowaniu sprawy kierujemy ją do kolejnego kroku: widełek, ustalenia modelu współpracy albo przygotowania oferty.",
    },
  ],
  ctaLabel: "Napisz do nas", ctaHref: "/kontakt",
};

const contactContent: ContactSectionContent = {
  kickerLabel: "SKONTAKTUJ SIĘ",
  title: "Napisz, czego potrzebujesz, a poprowadzimy Cię dalej",
  description:
    "Opisz sytuację jednym zdaniem. Jeśli chodzi o jedną lokalizację, podaj typ obiektu i termin. Jeśli sprawa dotyczy kilku punktów, dopisz liczbę lokalizacji i miasta. Zdjęcia mile widziane.",
  chips: [
    { label: "Dobór scenariusza" },
    { label: "Jeden kontakt" },
    { label: "Jasna ścieżka" },
    { label: "Szybka kwalifikacja" },
    { label: "Zasięg ogólnopolski" },
    { label: "Konkretna odpowiedź", accent: true },
  ],
  form: {
    emailLabel: "Adres e-mail",
    emailPlaceholder: "Twój adres e-mail",
    phoneLabel: "Numer telefonu",
    phonePlaceholder: "Twój numer telefonu",
    topicLabel: "Temat rozmowy",
    topicPlaceholder: "Jaki obiekt, czego dotyczy zgłoszenie i na kiedy",
    consentText:
      "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zgłoszenia oraz na kontakt handlowy drogą elektroniczną na podany adres e-mail. Polityka prywatności.",
    submitLabel: "Wyślij zgłoszenie",
  },
  meta: {
    avatars: ["A", "B", "C", "D", "E", "F"],
    text: "Zespół operacyjny po stronie Domker",
  },
};

const knowledgeContent: KnowledgeSectionContent = {
  kickerLabel: "REALIZACJE I CENNIK",
  titleLines: ["Zobacz, jak wygląda", "współpraca po pierwszym kontakcie"],
  description:
    "Przykładowe realizacje i orientacyjne widełki, które pokazują, jak pracujemy po uporządkowaniu zgłoszenia: od pierwszej rozmowy do wykonania usługi i wyceny.",
  cards: [
    {
      title: "Realizacje",
      description:
        "Przykłady z różnych scenariuszy: po budowie, w stałej obsłudze, przy witrynach i w usługach specjalistycznych.",
      buttonLabel: "Zobacz realizacje",
  buttonHref: "/realizacje",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Realizacje Domker",
      },
    },
    {
      title: "Cennik i wycena",
      description:
        "Sprawdź, jak liczymy koszt i jakie widełki warto przyjąć na starcie. To najszybsza ścieżka, żeby ocenić skalę tematu przed dalszą rozmową.",
      buttonLabel: "Zobacz cennik",
  buttonHref: "/cennik",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Cennik Domker",
      },
    },
  ],
};

const faqContent: FaqSectionContent = {
  kickerLabel: "NAJCZĘŚCIEJ ZADAWANE PYTANIA",
  title: "Pytania przed pierwszą wiadomością",
  description: "Masz więcej pytań? Po prostu",
  highlightText: "skontaktuj się z nami",
  avatars: ["A", "B", "C", "D", "E", "F", "G", "H"],
  cta: {
    label: "Przejdź do kontaktu",
    href: "/kontakt",
  },
  items: [
    {
      question: "Czy muszę mieć pełne informacje, żeby napisać pierwszą wiadomość?",
      answer:
        "Nie. Na start wystarczą podstawy: typ obiektu, lokalizacja, termin i krótki opis sytuacji. Jeśli czegoś będzie brakowało, wrócimy z krótką listą pytań.",
    },
    {
      question: "Co najbardziej przyspiesza kwalifikację zgłoszenia?",
      answer:
        "Najczęściej są to: lokalizacja, typ obiektu, skala, termin i zdjęcia. Jeśli sprawa dotyczy wielu punktów, warto od razu dopisać liczbę lokalizacji i miasta.",
    },
    {
      question: "Czy mogę zgłosić kilka potrzeb w jednej wiadomości?",
      answer:
        "Tak. Jeśli sprawa dotyczy kilku usług albo kilku etapów, najpierw ją porządkujemy, a potem proponujemy właściwy sposób dalszego działania.",
    },
    {
      question: "Czy działacie w całej Polsce?",
      answer:
        "Tak. Obsługujemy zarówno pojedyncze obiekty, jak i współpracę obejmującą wiele lokalizacji w różnych miastach.",
    },
    {
      question: "Jak szybko odpowiadacie?",
      answer:
        "Po otrzymaniu podstawowych informacji staramy się szybko wrócić z kolejnym krokiem, pytaniami doprecyzowującymi albo orientacyjnymi widełkami, jeśli sytuacja jest dobrze opisana.",
    },
    {
      question: "Czy przygotowujecie ofertę do przekazania dalej w firmie?",
      answer:
        "Tak. Jeśli zgłoszenie jest gotowe do procedowania, przygotowujemy materiał, który można przekazać do przełożonego, zakupów, zarządu albo innej osoby decyzyjnej.",
    },
    {
      question: "Czy mogę zacząć od jednego punktu albo pilotażu?",
      answer:
        "Tak. W wielu przypadkach to dobry sposób, żeby sprawdzić standard współpracy, komunikację i sposób prowadzenia realizacji przed szerszym zakresem.",
    },
    {
      question: "Skąd mam wiedzieć, która usługa będzie właściwa?",
      answer:
        "Nie musisz rozstrzygać tego samodzielnie. Wystarczy opisać sytuację, a my pomożemy dobrać właściwy scenariusz i dalszą ścieżkę rozmowy.",
    },
    {
      question: "Czy zdjęcia są konieczne?",
      answer:
        "Nie zawsze, ale często bardzo przyspieszają rozmowę. Przy sprawach po budowie, posadzkach, witrynach i większych zakresach zdjęcia pomagają szybciej ocenić sytuację.",
    },
    {
      question: "Co dostanę po pierwszym kontakcie?",
      answer:
        "Zależnie od sytuacji: krótką listę pytań, wskazanie właściwego scenariusza, orientacyjne widełki, możliwy termin albo ofertę do zatwierdzenia.",
    },
  ],
};

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <PagesHero content={defaultContent} />
        <ContactSection content={contactContent} />
        <ProblemsSection content={problemsContent} />
        <CtaSection content={ctaContent} />
        <ShowcaseSection content={showcaseContent} />
        <FaqSection content={faqContent} />
      </main>
      <Footer />
    </div>
  );
}
