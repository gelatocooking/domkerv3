import Header from "../../components/Header/Header";
import ContactSection, {
  type ContactSectionContent,
} from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";
import styles from "./page.module.css";
import PagesHero, {
  type PagesHeroContent,
} from "@/components/PagesHero/PagesHero";
import ProblemsSection, {
  type ProblemsSectionContent,
} from "@/components/ProblemsSection/ProblemsSection";
import BenefitsSection, {
  type BenefitsSectionContent,
} from "@/components/BenefitsSection/BenefitsSection";
import ProcessSection, {
  type ProcessSectionContent,
} from "@/components/ProcessSection/ProcessSection";
import FaqSection, {
  type FaqSectionContent,
} from "@/components/FaqSection/FaqSection";
import CtaSection, {
  type CtaSectionContent,
} from "../../components/CtaSection/CtaSection";
import SolutionsSection, {
  type SolutionsSectionContent,
} from "@/components/SolutionsSection/SolutionsSection";
import KnowledgeSection, {
  type KnowledgeSectionContent,
} from "@/components/KnowledgeSection/KnowledgeSection";

// /sprzatanie-dla-firm

const defaultContent: PagesHeroContent = {
  badge: "SPRZĄTANIE DLA FIRM I SIECI",
  titleLines: ["Sprzątanie dla firm", "od właściwego scenariusza"],
  emphasisIconName: "lightbulb",
  emphasisSuffix: "/",
  description:
    "To hub współpracy B2B. Jeśli temat dotyczy budowy, stałej obsługi, witryn, posadzek albo wielu lokalizacji, tutaj najłatwiej ustalisz, od czego zacząć. Najpierw porządkujemy sytuację, a dopiero potem przechodzimy do właściwej usługi.",
  ctaLabel: "Wyślij minimum danych",
};

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "ZNASZ TE SYTUACJE?",
  titleLines: ["Najwięcej czasu nie znika", "na realizacji, tylko na złym starcie"],
  description:
    "W firmach problem często nie polega na braku wykonawcy, tylko na tym, że temat jest źle nazwany na początku. Jedno zapytanie miesza kilka potrzeb, a później rośnie liczba pytań, korekt i niepotrzebnych ustaleń.",
  items: [
    {
      iconName: "calendarClock",
      label: "NIE TEN TRYB",
      title: "Nie każda potrzeba wymaga tego samego sposobu działania",
      description:
        "Końcówka budowy, wiele lokalizacji, stała obsługa albo witryny działają w innej logice. Jeśli źle dobierzesz start, później rośnie liczba korekt.",
      tone: "processes",
    },
    {
      iconName: "workflow",
      label: "ZA DUŻO WĄTKÓW",
      title: "Jedno zapytanie często miesza kilka różnych tematów",
      description:
        "Na przykład odbiór po remoncie, późniejsze utrzymanie lokalu i witryny w abonamencie. To trzeba rozdzielić, żeby rozmowa była konkretna.",
      tone: "processes",
    },
    {
      iconName: "layoutGrid",
      label: "SKALA",
      title: "Jeden obiekt i sieć punktów nie powinny być prowadzone tak samo",
      description:
        "Przy kilku miastach albo wielu lokalizacjach potrzebna jest inna organizacja, inne pytania wejściowe i inny sposób koordynacji.",
      tone: "data",
    },
    {
      iconName: "truck",
      label: "ZASOBY",
      title: "Sam termin nie wystarczy, żeby dobrze ustalić zakres",
      description:
        "Przy jednym obiekcie pytania będą inne niż przy sieci lokali albo stałej obsłudze. Najpierw trzeba wiedzieć, czego dokładnie dotyczy temat.",
      tone: "resources",
    },
    {
      iconName: "shieldAlert",
      label: "RÓŻNE RYZYKA",
      title: "Nie każdy temat prowadzi się w ten sam sposób",
      description:
        "Inaczej pracuje się przy odbiorze po budowie, inaczej przy stałej obsłudze biura, a inaczej przy posadzkach albo witrynach.",
      tone: "risk",
    },
    {
      iconName: "fileText",
      label: "DECYZJA",
      title: "Łatwiej ruszyć, gdy od początku wiadomo, od czego zacząć",
      description:
        "Zamiast zaczynać od złej usługi albo zbyt ogólnego zapytania, lepiej od razu ustalić właściwy scenariusz i kolejny krok.",
      tone: "technology",
    },
  ],
};

const solutionsContent: SolutionsSectionContent = {
  kickerLabel: "WYBIERZ SCENARIUSZ",
  titleLines: ["Wybierz sytuację, która", "najbardziej przypomina Twój temat"],
  description:
    "Nie zaczynaj od zgadywania nazwy usługi. Zacznij od scenariusza. Dzięki temu szybciej przejdziemy do właściwego zakresu, właściwych pytań i właściwego modelu współpracy.",
  items: [
    {
      iconName: "hardHat",
      label: "Po budowie / po remoncie / przed otwarciem",
      title: "Gdy obiekt trzeba przygotować do odbioru albo startu",
      description:
        "To ścieżka dla tematów końcowych: po budowie, po wykończeniach, przed otwarciem punktu albo przed przekazaniem gotowego obiektu dalej.",
      ctaLabel: "Przejdź do usługi",
      mediaAlt: "Sprzątanie po budowie",
      mediaSrc: "/sprzatanie-po-budowie",
    },
    {
      iconName: "building2",
      label: "Stała obsługa biura lub lokalu",
      title: "Gdy nie chodzi o jeden etap, tylko o stały standard",
      description:
        "To ścieżka dla firm, które potrzebują regularnego serwisu, przewidywalnego harmonogramu i wykonawcy, którego nie trzeba stale pilnować.",
      ctaLabel: "Przejdź do usługi",
      mediaAlt: "Stała obsługa biur i lokali",
      mediaSrc: "/utrzymanie-czystosci",
    },
    {
      iconName: "sparkles",
      label: "Witryny / okna / abonament",
      title: "Gdy liczy się regularny efekt i prosta logistyka",
      description:
        "To ścieżka dla lokali, sieci i klientów, którzy chcą mycia witryn albo okien w modelu jednorazowym, cyklicznym albo ryczałtowym.",
      ctaLabel: "Przejdź do usługi",
      mediaAlt: "Mycie witryn i okien",
      mediaSrc: "/mycie-okien-i-witryn",
    },
    {
      iconName: "grid3x3",
      label: "Posadzki / doczyszczanie / usługa specjalistyczna",
      title: "Gdy zwykłe sprzątanie nie rozwiązuje problemu nawierzchni",
      description:
        "To ścieżka dla obiektów, w których trzeba dobrać technologię do typu posadzki, zabrudzeń i efektu, a nie tylko wykonać standardowe prace.",
      ctaLabel: "Przejdź do usługi",
      mediaAlt: "Maszynowe czyszczenie posadzek",
      mediaSrc: "/maszynowe-czyszczenie-posadzek",
    },
    {
      iconName: "clipboardList",
      label: "Wiele punktów / kilka miast / jedna koordynacja",
      title: "Gdy temat dotyczy sieci albo współpracy w skali",
      description:
        "To ścieżka dla firm, które chcą zachować jeden standard, jedną komunikację i prostsze zarządzanie realizacją między lokalizacjami.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Obsługa wielu lokalizacji",
      mediaSrc: "/kontakt#minimum-danych",
    },
    {
      iconName: "mapPin",
      label: "Temat mieszany / kilka potrzeb naraz",
      title: "Gdy nie wiesz jeszcze, od czego najlepiej zacząć",
      description:
        "Jeśli sytuacja łączy kilka usług albo kilka typów obiektów, zaczynamy od uporządkowania tematu i dopiero potem przechodzimy dalej.",
      ctaLabel: "Sprawdź dostępność",
      mediaAlt: "Dobór scenariusza",
      mediaSrc: "/kontakt",
    },
  ],
};

const benefitsContent: BenefitsSectionContent = {
  kickerLabel: "CO PORZĄDKUJESZ NA TEJ STRONIE",
  titleLines: ["Zanim przejdziesz do usługi,", "ustalasz właściwy punkt startu"],
  description:
    "Hub B2B ma skrócić drogę do dobrej decyzji. Zamiast czytać kilka stron i zgadywać, od czego zacząć, szybciej porządkujesz temat i przechodzisz do właściwej ścieżki.",
  items: [
    {
      iconName: "users",
      label: "TYP POTRZEBY",
      title: "Ustalasz, czy temat jest jednorazowy, cykliczny czy mieszany",
      description:
        "To podstawowa różnica, która wpływa na dalszy sposób rozmowy, wyceny i prowadzenia współpracy.",
      tone: "resources",
    },
    {
      iconName: "shieldAlert",
      label: "SKALA",
      title: "Rozdzielasz jeden obiekt od sieci albo kilku lokalizacji",
      description:
        "Dzięki temu od początku wiadomo, czy mówimy o lokalnym zakresie, czy o współpracy wymagającej innej koordynacji.",
      tone: "risk",
    },
    {
      iconName: "database",
      label: "ZAKRES",
      title: "Od razu wiesz, czy chodzi o stałą obsługę, jednorazowe wejście czy usługę specjalistyczną",
      description:
        "To pozwala szybciej przejść do właściwych pytań, zamiast mieszać kilka różnych tematów w jednym zapytaniu.",
      tone: "processes",
    },
    {
      iconName: "clipboardCheck",
      label: "KOLEJNY KROK",
      title: "Wiesz, jakie minimum danych ma sens dla tej konkretnej sytuacji",
      description:
        "Nie potrzebujesz od razu pełnego briefu. Wystarczy właściwy punkt startu i krótki opis tego, czego temat realnie dotyczy.",
      tone: "data",
    },
    {
      iconName: "clipboardCheck",
      label: "PROCEDOWANIE",
      title: "Łatwiej przekazujesz temat dalej po stronie firmy",
      description:
        "Gdy scenariusz jest dobrze nazwany, łatwiej uzgodnić kolejny krok z przełożonym, operacjami, zakupami albo administracją.",
      tone: "finance",
    },
    {
      iconName: "fileText",
      label: "OSZCZĘDNOŚĆ CZASU",
      title: "Nie zaczynasz rozmowy od niewłaściwej usługi",
      description:
        "To ogranicza liczbę niepotrzebnych pytań, skraca drogę do decyzji i porządkuje współpracę już od pierwszego kontaktu.",
      tone: "technology",
    },
  ],
};

const processContent: ProcessSectionContent = {
  kickerLabel: "JAK TO DZIAŁA?",
  titleLines: ["Od ogólnego tematu", "do właściwej ścieżki współpracy"],
  description:
    "Ta strona nie ma opisywać jednej usługi dla wszystkich. Ma pomóc szybko ustalić, od czego zacząć. Dlatego najpierw kwalifikujemy sytuację, a dopiero później przechodzimy do szczegółów.",
  steps: [
    {
      index: "01",
      title: "Opisujesz sytuację w najprostszy możliwy sposób",
      description:
        "Wystarczy typ obiektu, miasto, termin i krótka informacja, czego temat dotyczy albo co ma zostać uporządkowane.",
    },
    {
      index: "02",
      title: "Rozdzielamy, jaki to typ potrzeby",
      description:
        "Ustalamy, czy chodzi o końcówkę budowy, stałą obsługę, witryny, posadzki, wiele lokalizacji albo temat łączący kilka scenariuszy.",
    },
    {
      index: "03",
      title: "Wskazujemy właściwą usługę albo model działania",
      description:
        "Pokazujemy najkrótszą ścieżkę i kierujemy Cię do strony, która odpowiada tej konkretnej sytuacji operacyjnej.",
    },
    {
      index: "04",
      title: "Dalej przechodzimy już do właściwych ustaleń",
      description:
        "Dopiero na tym etapie doprecyzowujemy zakres, wycenę, warunki wejścia, model współpracy i kolejny krok po stronie firmy.",
    },
  ],
  ctaLabel: "Wyślij minimum danych",
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "NIE MUSISZ ZACZYNAĆ OD NAZWY USŁUGI",
  title: "Opisz sytuację, a pomożemy ustalić właściwy punkt startu",
  description:
    "Jeśli to jeden obiekt, napisz, czego dotyczy temat i na kiedy jest potrzebny. Jeśli chodzi o kilka lokalizacji albo kilka potrzeb naraz, też to uporządkujemy.",
  buttonLabel: "Wyślij minimum danych",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const knowledgeContent: KnowledgeSectionContent = {
  kickerLabel: "REALIZACJE I REFERENCJE",
  titleLines: ["Zobacz, jak różnią się", "scenariusze współpracy w praktyce"],
  description:
    "Przykłady z różnych typów obiektów i modeli działania. Dzięki temu łatwiej zobaczyć, czym różni się końcówka budowy od stałej obsługi, witryn, posadzek albo współpracy sieciowej.",
  cards: [
    {
      title: "Realizacje",
      description:
        "Zakresy, warunki i efekty z obiektów komercyjnych. Krótkie case’y pokazujące, jak wyglądały różne scenariusze i co było najważniejsze operacyjnie.",
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
        "Co klienci doceniają w różnych modelach współpracy. Najczęściej jasność ustaleń, przewidywalność i prostsze przejście od zapytania do działania.",
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
  title: "Wyślij minimum danych, a wskażemy najlepszą ścieżkę",
  description:
    "Nie musisz od razu wiedzieć, jakiej usługi potrzebujesz. Opisz sytuację jednym zdaniem. Jeśli chodzi o sieć, dopisz liczbę lokalizacji i miasta. Jeśli to pojedynczy obiekt, wystarczy typ obiektu, temat i termin.",
  chips: [
    { label: "Dobór scenariusza" },
    { label: "Jeden kontakt" },
    { label: "Jasny punkt startu" },
    { label: "Wsparcie operacyjne" },
    { label: "Zasięg ogólnopolski" },
    { label: "Szybka kwalifikacja", accent: true },
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
        "To hub współpracy B2B. Nie opisuje jednej usługi, tylko pomaga ustalić, od jakiej ścieżki zacząć i która usługa najlepiej pasuje do Twojej sytuacji.",
    },
    {
      question: "Kiedy warto zacząć właśnie od tej strony?",
      answer:
        "Wtedy, gdy wiesz, że temat dotyczy sprzątania dla firmy, ale nie masz jeszcze pewności, czy chodzi o końcówkę budowy, stałą obsługę, witryny, posadzki, kilka lokalizacji albo kilka potrzeb naraz.",
    },
    {
      question: "Czy muszę znać dokładną nazwę usługi, żeby napisać pierwszą wiadomość?",
      answer:
        "Nie. Wystarczy krótki opis sytuacji. Po jego przeczytaniu wskażemy, jaki scenariusz będzie najbardziej logicznym punktem startu.",
    },
    {
      question: "Czy mogę zgłosić temat, który łączy kilka usług?",
      answer:
        "Tak. Jeśli sytuacja obejmuje na przykład odbiór po remoncie, późniejsze utrzymanie lokalu i witryny w abonamencie, rozdzielimy to na właściwe ścieżki.",
    },
    {
      question: "Czy ta strona jest dla pojedynczego obiektu czy dla sieci?",
      answer:
        "Dla obu modeli. To właśnie tutaj ustalamy, czy temat dotyczy jednej lokalizacji, wielu punktów, współpracy stałej albo usługi specjalistycznej.",
    },
    {
      question: "Jak ustalacie, która usługa będzie właściwa?",
      answer:
        "Na podstawie kilku podstawowych informacji: typu obiektu, skali, miasta, terminu i celu realizacji. To wystarcza, żeby wskazać najkrótszą ścieżkę rozmowy.",
    },
    {
      question: "Czy potrzebuję pełnych danych, żeby zacząć?",
      answer:
        "Nie. Na tym etapie wystarczy minimum informacji. Jeśli czegoś będzie brakowało, wrócimy z krótką listą pytań dopasowaną do właściwego scenariusza.",
    },
    {
      question: "Jak wygląda wycena na tym etapie?",
      answer:
        "Na poziomie hubu najpierw kwalifikujemy sytuację. Po wyborze właściwej ścieżki wracamy z odpowiednim zakresem pytań, widełkami albo dalszym sposobem procedowania.",
    },
    {
      question: "Czy działacie w całej Polsce?",
      answer:
        "Tak. Prowadzimy realizacje na terenie całej Polski — zarówno dla pojedynczych obiektów, jak i dla firm działających w wielu miastach.",
    },
    {
      question: "Co dostaję po wyborze właściwej ścieżki?",
      answer:
        "Jasny kolejny krok, właściwą usługę albo model współpracy i przejście do dalszych ustaleń, które mają już sens dla tej konkretnej sytuacji.",
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
        {/* <BenefitsSection content={benefitsContent} /> */}
        <ProcessSection content={processContent} />
        <ContactSection content={contactContent} />
        <KnowledgeSection content={knowledgeContent} />
        <FaqSection content={faqContent} />
      </main>
      <Footer />
    </div>
  );
}