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
import ShowcaseSection, { ShowcaseSectionContent } from "@/components/ShowcaseSection/ShowcaseSection";

// /kontakt

const defaultContent: PagesHeroContent = {
  badge: "KONTAKT I SZYBKA KWALIFIKACJA",
  titleLines: ["Wyślij minimum danych", "a wskażemy właściwy kolejny krok"],
  emphasisSuffix: "/",
  description:
    "Nie musisz mieć pełnego briefu, żeby zacząć rozmowę. Wystarczy krótki opis sytuacji, typ obiektu, termin i lokalizacja. Jeśli temat dotyczy kilku usług albo wielu punktów, też to uporządkujemy. Wracamy z właściwą ścieżką, krótką listą pytań albo ofertą do zatwierdzenia.",
  ctaLabel: "Wyślij minimum danych",
};

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "ZNASZ TO?",
  titleLines: ["Najczęściej problemem nie jest", "brak potrzeby, tylko punkt startu"],
  description:
    "Wiele firm i osób odkłada pierwszy kontakt, bo nie wiedzą, od czego zacząć, jaka usługa będzie właściwa albo jakie dane są potrzebne do wyceny. Ta strona ma to uprościć.",
  items: [
    {
      iconName: "workflow",
      label: "START",
      title: "Nie wiadomo, od której usługi albo scenariusza zacząć",
      description:
        "Czasem temat dotyczy jednej usługi, a czasem kilku rzeczy naraz. Najpierw trzeba go dobrze zakwalifikować.",
      tone: "processes",
    },
    {
      iconName: "fileText",
      label: "DANE",
      title: "Nie zawsze masz komplet informacji już przy pierwszej wiadomości",
      description:
        "To normalne. Na start wystarczą podstawy, a brakujące elementy doprecyzujemy krótką listą pytań.",
      tone: "technology",
    },
    {
      iconName: "layoutGrid",
      label: "SKALA",
      title: "Temat może dotyczyć jednego obiektu albo wielu lokalizacji",
      description:
        "Jedna lokalizacja i sieć punktów wymagają innego sposobu kwalifikacji, ale oba warianty możemy szybko uporządkować.",
      tone: "data",
    },
    {
      iconName: "calendarClock",
      label: "TERMIN",
      title: "Trudno ocenić możliwości, jeśli nie wiadomo, na kiedy temat jest potrzebny",
      description:
        "Termin, okno wejścia i pilność sprawy często decydują o tym, jaką ścieżkę rozmowy trzeba przyjąć od początku.",
      tone: "processes",
    },
    {
      iconName: "shieldAlert",
      label: "ZAKRES",
      title: "Bez kilku podstawowych danych nie da się uczciwie mówić o widełkach",
      description:
        "Typ obiektu, lokalizacja, skala i zdjęcia często bardziej przyspieszają rozmowę niż długi opis bez konkretów.",
      tone: "risk",
    },
    {
      iconName: "users",
      label: "KOMUNIKACJA",
      title: "Nikt nie chce tracić czasu na długą wymianę wiadomości bez postępu",
      description:
        "Dlatego po pierwszym kontakcie porządkujemy temat tak, żeby szybko przejść do właściwego kolejnego kroku.",
      tone: "resources",
    },
  ],
};

const solutionsContent: SolutionsSectionContent = {
  kickerLabel: "Z CZYM MOŻESZ NAPISAĆ?",
  titleLines: ["Kwalifikujemy tematy", "z różnych scenariuszy współpracy"],
  description:
    "Nie musisz idealnie nazywać usługi ani wiedzieć, jak dokładnie powinien wyglądać zakres. Wystarczy opisać sytuację. My dopasujemy właściwy scenariusz i dalszą ścieżkę rozmowy.",
  items: [
    {
      iconName: "hardHat",
      label: "Po budowie / przed odbiorem",
      title: "Gdy temat dotyczy końcówki prac, przekazania albo otwarcia",
      description:
        "To ścieżka dla tematów, w których liczy się odbiór, standard końcowy, strefy krytyczne i termin wejścia.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Sprzątanie po budowie",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "building2",
      label: "Stała obsługa obiektu",
      title: "Gdy potrzebujesz regularnego serwisu w biurze albo lokalu",
      description:
        "To ścieżka dla współpracy cyklicznej, gdzie najważniejsze są harmonogram, powtarzalny standard i ciągłość serwisu.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Sprzątanie cykliczne",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "sparkles",
      label: "Witryny i okna",
      title: "Gdy chodzi o mycie okien albo witryn jednorazowo lub cyklicznie",
      description:
        "To ścieżka dla lokali, sieci, domów i mieszkań, gdzie liczy się prosty model usługi i szybka wycena.",
      ctaLabel: "Wyślij zdjęcia",
      mediaAlt: "Mycie okien i witryn",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "grid3x3",
      label: "Posadzki i trudne zabrudzenia",
      title: "Gdy potrzebna jest usługa specjalistyczna, a nie zwykłe sprzątanie",
      description:
        "To ścieżka dla tematów, gdzie znaczenie ma typ nawierzchni, rodzaj zabrudzeń i dobór właściwej technologii.",
      ctaLabel: "Opisz temat",
      mediaAlt: "Maszynowe czyszczenie posadzek",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "clipboardList",
      label: "Temat mieszany",
      title: "Gdy jedna wiadomość dotyczy kilku potrzeb albo kilku etapów",
      description:
        "Jeśli temat obejmuje więcej niż jedną usługę, najpierw go porządkujemy i dopiero potem układamy właściwą kolejność działań.",
      ctaLabel: "Opisz sytuację",
      mediaAlt: "Temat mieszany",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "mapPin",
      label: "Jedna lokalizacja albo wiele punktów",
      title: "Gdy trzeba sprawnie ocenić skalę i model współpracy",
      description:
        "Jedno miejsce i sieć lokalizacji wymagają innego podejścia, ale obie ścieżki możemy szybko zakwalifikować już po minimum danych.",
      ctaLabel: "Podaj skalę",
      mediaAlt: "Jedna lokalizacja lub wiele punktów",
      mediaSrc: "/kontakt",
    },
  ],
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "NIE MUSISZ MIEĆ PEŁNEGO BRIEFU",
  title: "Wystarczy krótki opis sytuacji i kilka podstawowych danych",
  description:
    "Napisz, czego dotyczy temat, jaki to obiekt, w jakiej lokalizacji i na kiedy potrzebujesz działania. Jeśli chodzi o sieć, dopisz liczbę punktów. Jeśli masz zdjęcia, dołącz je od razu.",
  buttonLabel: "Wyślij minimum danych",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const showcaseContent: ShowcaseSectionContent = {
  kickerLabel: "CO DOSTAJESZ PO PIERWSZYM KONTAKCIE?",
  titleLines: ["Pierwsza wiadomość ma prowadzić", "do właściwego kolejnego kroku"],
  description:
    "Kontakt z Domker nie kończy się na „dziękujemy za wiadomość”. Po otrzymaniu minimum danych porządkujemy temat tak, żeby szybko przejść do realnej decyzji, a nie krążyć wokół ogólników.",
  items: [
    {
      tag: "KWALIFIKACJA",
      title: "Najpierw określamy, jaki scenariusz naprawdę pasuje do sytuacji",
      description:
        "Nie każda sprawa wymaga tej samej ścieżki. Czasem chodzi o odbiór, czasem o stałą obsługę, a czasem o usługę specjalistyczną.",
      result: "To skraca drogę do właściwej rozmowy i ogranicza zbędne doprecyzowania.",
    },
    {
      tag: "PYTANIA",
      title: "Jeśli danych jest za mało, wracamy z krótką listą pytań",
      description:
        "Nie oczekujemy pełnego briefu na starcie. Doprecyzowujemy tylko to, co rzeczywiście wpływa na zakres, termin albo widełki.",
      result: "Dzięki temu temat rusza szybko, bez długiej i chaotycznej wymiany wiadomości.",
    },
    {
      tag: "ŚCIEŻKA",
      title: "Pokazujemy, jaki kolejny krok ma sens przy tej konkretnej sprawie",
      description:
        "Może to być wycena, sprawdzenie terminu, oferta do zatwierdzenia albo przekierowanie do właściwej usługi.",
      result: "Klient od początku wie, co dzieje się dalej i czego może się spodziewać.",
    },
    {
      tag: "WIDEŁKI",
      title: "Jeśli temat jest dobrze opisany, szybciej wracamy z orientacyjną wyceną",
      description:
        "Lokalizacja, typ obiektu, skala i zdjęcia zwykle pozwalają przejść do bardziej konkretnej rozmowy już na początku.",
      result: "To ułatwia podjęcie decyzji i przekazanie tematu dalej w firmie.",
    },
    {
      tag: "OFERTA",
      title: "Gdy temat jest gotowy, przygotowujemy materiał do zatwierdzenia",
      description:
        "W zależności od scenariusza może to być oferta do przełożonego, zakupów, zarządu albo osoby decyzyjnej po stronie klienta.",
      result: "Dzięki temu pierwsza rozmowa szybciej przechodzi w realne procedowanie tematu.",
    },
    {
      tag: "KONTAKT",
      title: "Po naszej stronie dostajesz czytelny kolejny krok, nie ogólną odpowiedź",
      description:
        "Naszym celem nie jest tylko odpowiedzieć, ale uporządkować sprawę tak, żeby dało się ją sensownie poprowadzić dalej.",
      result: "To obniża próg wejścia i sprawia, że kontakt naprawdę coś uruchamia.",
    },
  ],
};

const processContent: ProcessSectionContent = {
  kickerLabel: "JAK TO DZIAŁA?",
  titleLines: ["Od minimum danych", "do właściwej ścieżki rozmowy"],
  description:
    "Ta strona ma uprościć start współpracy. Najpierw zbieramy podstawy, potem kwalifikujemy temat i dopiero wtedy wracamy z pytaniami, widełkami albo właściwym kolejnym krokiem.",
  steps: [
    {
      index: "01",
      title: "Wysyłasz minimum danych",
      description:
        "Wystarczy typ obiektu, lokalizacja, termin i krótki opis sytuacji. Jeśli temat dotyczy wielu punktów albo kilku usług, też to napisz.",
    },
    {
      index: "02",
      title: "Kwalifikujemy temat",
      description:
        "Sprawdzamy, jaki scenariusz współpracy najlepiej pasuje do tej sytuacji i czego jeszcze potrzeba, żeby ruszyć dalej.",
    },
    {
      index: "03",
      title: "Wracamy z krótką listą pytań albo właściwą ścieżką",
      description:
        "Jeżeli danych jest za mało, doprecyzowujemy tylko to, co naprawdę wpływa na zakres, termin albo wycenę.",
    },
    {
      index: "04",
      title: "Przechodzimy do widełek, terminu albo oferty",
      description:
        "Po uporządkowaniu sprawy kierujemy temat do kolejnego kroku: wyceny, ustalenia modelu współpracy albo przygotowania oferty.",
    },
  ],
  ctaLabel: "Wyślij minimum danych",
};

const contactContent: ContactSectionContent = {
  kickerLabel: "SKONTAKTUJ SIĘ",
  title: "Wyślij minimum danych, a my uporządkujemy temat",
  description:
    "Opisz sytuację jednym zdaniem. Jeśli temat dotyczy jednej lokalizacji, podaj typ obiektu i termin. Jeśli chodzi o sieć, dopisz liczbę punktów i miasta. Zdjęcia mile widziane.",
  chips: [
    { label: "Dobór scenariusza" },
    { label: "Jeden kontakt" },
    { label: "Jasna ścieżka" },
    { label: "Szybka kwalifikacja" },
    { label: "Zasięg ogólnopolski" },
    { label: "Kolejny krok bez chaosu", accent: true },
  ],
  form: {
    emailLabel: "Adres e-mail",
    emailPlaceholder: "Twój adres e-mail",
    phoneLabel: "Numer telefonu",
    phonePlaceholder: "Twój numer telefonu",
    topicLabel: "Temat rozmowy",
    topicPlaceholder: "Jaki obiekt, czego dotyczy temat i na kiedy",
    consentText:
      "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zgłoszenia oraz na kontakt handlowy drogą elektroniczną na podany adres e-mail. Polityka prywatności.",
    submitLabel: "Wyślij minimum danych",
  },
  meta: {
    avatars: ["A", "B", "C", "D", "E", "F"],
    text: "Zespół operacyjny po stronie Domker",
  },
};

const knowledgeContent: KnowledgeSectionContent = {
  kickerLabel: "REALIZACJE I REFERENCJE",
  titleLines: ["Zobacz, jak wygląda", "współpraca po zakwalifikowaniu tematu"],
  description:
    "Przykładowe realizacje i opinie klientów, które pokazują, jak pracujemy po pierwszym kontakcie: od uporządkowania sprawy po doprowadzenie jej do wykonania.",
  cards: [
    {
      title: "Realizacje",
      description:
        "Przykłady tematów z różnych scenariuszy: po budowie, w stałej obsłudze, przy witrynach i usługach specjalistycznych.",
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
        "Co klienci doceniają po pierwszym kontakcie i w dalszej współpracy. Najczęściej szybkość reakcji, uporządkowanie tematu i jasny kolejny krok.",
      buttonLabel: "Zobacz referencje",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Referencje Domker",
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
  items: [
    {
      question: "Czy muszę mieć pełne dane, żeby napisać pierwszą wiadomość?",
      answer:
        "Nie. Na start wystarczą podstawy: typ obiektu, lokalizacja, termin i krótki opis sytuacji. Jeśli czegoś będzie brakowało, wrócimy z krótką listą pytań.",
    },
    {
      question: "Jakie informacje najbardziej przyspieszają kwalifikację tematu?",
      answer:
        "Najczęściej są to: lokalizacja, typ obiektu, skala, termin i zdjęcia. Jeśli temat dotyczy wielu punktów, warto od razu dopisać liczbę lokalizacji i miasta.",
    },
    {
      question: "Czy mogę zgłosić kilka potrzeb w jednym zapytaniu?",
      answer:
        "Tak. Jeśli temat dotyczy kilku usług albo kilku etapów, najpierw go porządkujemy, a potem proponujemy właściwy sposób prowadzenia rozmowy i realizacji.",
    },
    {
      question: "Czy działacie w całej Polsce?",
      answer:
        "Tak. Obsługujemy zarówno pojedyncze obiekty, jak i współpracę obejmującą wiele lokalizacji w różnych miastach.",
    },
    {
      question: "Jak szybko odpowiadacie?",
      answer:
        "Po otrzymaniu minimum danych staramy się szybko wrócić z kolejnym krokiem, pytaniami doprecyzowującymi albo orientacyjnymi widełkami, jeśli temat jest dobrze opisany.",
    },
    {
      question: "Czy przygotowujecie ofertę do przekazania dalej w firmie?",
      answer:
        "Tak. Jeśli temat jest gotowy do procedowania, przygotowujemy materiał, który można przekazać do przełożonego, zakupów, zarządu albo innej osoby decyzyjnej.",
    },
    {
      question: "Czy mogę zacząć od jednego punktu albo pilotażu?",
      answer:
        "Tak. W wielu przypadkach to dobry sposób, żeby sprawdzić standard współpracy, komunikację i sposób prowadzenia realizacji przed szerszym zakresem.",
    },
    {
      question: "Skąd mam wiedzieć, która usługa będzie właściwa?",
      answer:
        "Nie musisz tego rozstrzygać samodzielnie. Wystarczy opisać sytuację, a my pomożemy dobrać właściwy scenariusz i dalszą ścieżkę rozmowy.",
    },
    {
      question: "Czy zdjęcia są konieczne?",
      answer:
        "Nie zawsze, ale często bardzo przyspieszają rozmowę. Przy tematach po budowie, posadzkach, witrynach i większych zakresach zdjęcia pomagają szybciej ocenić sytuację.",
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
        {/* <SolutionsSection content={solutionsContent} /> */}
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