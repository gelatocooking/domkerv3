import Header from "@/components/Header/Header";
import PagesHero, { type PagesHeroContent } from "@/components/PagesHero/PagesHero";
import ProblemsSection, {
  type ProblemsSectionContent,
} from "@/components/ProblemsSection/ProblemsSection";
import SolutionsSection, {
  type SolutionsSectionContent,
} from "@/components/SolutionsSection/SolutionsSection";
import CtaSection, {
  type CtaSectionContent,
} from "@/components/CtaSection/CtaSection";
import BenefitsSection, {
  type BenefitsSectionContent,
} from "@/components/BenefitsSection/BenefitsSection";
import ProcessSection, {
  type ProcessSectionContent,
} from "@/components/ProcessSection/ProcessSection";
import ContactSection, {
  type ContactSectionContent,
} from "@/components/ContactSection/ContactSection";
import KnowledgeSection, {
  type KnowledgeSectionContent,
} from "@/components/KnowledgeSection/KnowledgeSection";
import FaqSection, { type FaqSectionContent } from "@/components/FaqSection/FaqSection";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

// /mycie-okien-i-witryn

const defaultContent: PagesHeroContent = {
  badge: "MYCIE OKIEN I WITRYN (B2B + B2C)",
  titleLines: ["Mycie okien i witryn", "z prostą organizacją usługi"],
  emphasisIconName: "sparkles",
  emphasisSuffix: "/",
  description:
    "To usługa dla firm i klientów prywatnych, którą da się łatwo zaplanować. Dla lokali i sieci liczy się regularny efekt, termin i prosta logistyka. Dla domów i mieszkań wygoda, szybka wycena i sprawne ustalenie terminu. W Domker obsługujemy oba scenariusze w jednym, czytelnym modelu.",
  ctaLabel: "Wyślij zdjęcia i minimum danych",
};

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "ZNASZ TE SYTUACJE?",
  titleLines: ["Najczęściej problemem nie jest", "samo mycie, tylko brak prostego modelu"],
  description:
    "Witryny i okna szybko tracą efekt, ale nie każdy chce za każdym razem układać usługę od nowa. W firmach liczy się regularność i powtarzalność. W domach i mieszkaniach wygoda, szybki kontakt i jasna wycena.",
  items: [
    {
      iconName: "calendarClock",
      label: "REGULARNOŚĆ",
      title: "Efekt znika szybciej, niż jest czas znowu o tym myśleć",
      description:
        "W lokalach i witrynach widać to od razu. W domach i mieszkaniach temat odkłada się zwykle do momentu, gdy okna są już wyraźnie zabrudzone.",
      tone: "processes",
    },
    {
      iconName: "workflow",
      label: "ORGANIZACJA",
      title: "Nie każdy chce za każdym razem zaczynać od nowa ustalanie zakresu",
      description:
        "Przy jednej usłudze liczy się prosty kontakt. Przy kilku punktach albo modelu cyklicznym jeszcze ważniejsza jest powtarzalna organizacja.",
      tone: "processes",
    },
    {
      iconName: "layoutGrid",
      label: "SKALA",
      title: "Jedno mieszkanie, lokal i kilka punktów to trzy różne sposoby korzystania z usługi",
      description:
        "Dlatego inaczej podchodzi się do domu, inaczej do pojedynczego lokalu, a inaczej do witryn w kilku lokalizacjach.",
      tone: "data",
    },
    {
      iconName: "truck",
      label: "LOGISTYKA",
      title: "Przy firmach liczy się prosty harmonogram, a przy prywatnych wygodny termin",
      description:
        "Usługa ma być łatwa do umówienia i przewidywalna, niezależnie od tego, czy chodzi o jednorazowe mycie, czy cykliczne wejścia.",
      tone: "resources",
    },
    {
      iconName: "shieldAlert",
      label: "DOSTĘP",
      title: "Nie każda witryna i nie każde okno mają ten sam poziom trudności",
      description:
        "Liczba szyb, wysokość, sposób dostępu i stopień zabrudzenia wpływają na zakres, czas pracy i sposób wyceny.",
      tone: "risk",
    },
    {
      iconName: "fileText",
      label: "WYCENA",
      title: "Bez zdjęć albo podstawowych danych trudno szybko podać sensowną cenę",
      description:
        "Przy tej usłudze zdjęcia, liczba szyb i lokalizacja bardzo przyspieszają wycenę oraz ustalenie najlepszego modelu realizacji.",
      tone: "technology",
    },
  ],
};

const solutionsContent: SolutionsSectionContent = {
  kickerLabel: "JAK TO PROWADZIMY",
  titleLines: ["Jedna usługa,", "kilka prostych scenariuszy"],
  description:
    "Nie każdy korzysta z mycia okien i witryn w ten sam sposób. Dlatego porządkujemy usługę według sytuacji: lokal, sieć, dom, mieszkanie, jednorazowo albo cyklicznie. Dzięki temu łatwiej szybko przejść do właściwego zakresu i terminu.",
  items: [
    {
      iconName: "building2",
      label: "Lokale i firmy",
      title: "Gdy liczy się regularny efekt i prosty model współpracy",
      description:
        "To ścieżka dla lokali usługowych, punktów handlowych i firm, które chcą mycia witryn albo okien w przewidywalnych oknach realizacji.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Mycie witryn dla firm",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "clipboardList",
      label: "Sieci i wiele punktów",
      title: "Gdy temat dotyczy więcej niż jednej lokalizacji",
      description:
        "To ścieżka dla firm, które chcą jednego standardu, jednej organizacji i prostszego zarządzania usługą między punktami.",
      ctaLabel: "Sprawdź model współpracy",
      mediaAlt: "Mycie witryn dla sieci",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "sparkles",
      label: "Domy i mieszkania",
      title: "Gdy chcesz po prostu sprawnie umówić mycie okien",
      description:
        "To ścieżka dla klientów prywatnych, którym zależy na wygodzie, szybkiej wycenie ze zdjęć i prostym ustaleniu terminu.",
      ctaLabel: "Wyślij zdjęcia",
      mediaAlt: "Mycie okien w domu i mieszkaniu",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "grid3x3",
      label: "Jednorazowo albo cyklicznie",
      title: "Gdy chcesz jednorazowego wejścia albo regularnego harmonogramu",
      description:
        "Usługę można ustawić jako pojedynczą realizację albo model cykliczny, jeśli zależy Ci na stałym efekcie bez wracania do tematu co chwilę.",
      ctaLabel: "Ustal częstotliwość",
      mediaAlt: "Jednorazowe i cykliczne mycie okien",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "shieldAlert",
      label: "Dostęp i warunki",
      title: "Gdy przeszklenia wymagają doprecyzowania sposobu wejścia",
      description:
        "Liczba szyb, układ okien, witryny narożne albo niestandardowy dostęp wpływają na organizację i sposób wyceny tej usługi.",
      ctaLabel: "Zapytaj o możliwości",
      mediaAlt: "Dostęp do witryn i okien",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "mapPin",
      label: "Szybka kwalifikacja",
      title: "Gdy chcesz po prostu wiedzieć, ile to mniej więcej będzie kosztować",
      description:
        "Przy tej usłudze zdjęcia i kilka podstawowych informacji zwykle wystarczają, żeby szybko wrócić z widełkami albo terminem.",
      ctaLabel: "Wyślij zdjęcia",
      mediaAlt: "Szybka wycena mycia okien i witryn",
      mediaSrc: "/kontakt",
    },
  ],
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "WYŚLIJ ZDJĘCIA I OPISZ TEMAT",
  title: "Podaj liczbę szyb albo witryn, lokalizację i tryb usługi",
  description:
    "Napisz, czy chodzi o lokal, sieć, dom czy mieszkanie. Dopisz, czy interesuje Cię jednorazowe mycie czy model cykliczny. Jeśli masz zdjęcia, dołącz je od razu.",
  buttonLabel: "Wyślij minimum danych",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const benefitsContent: BenefitsSectionContent = {
  kickerLabel: "CO UŁATWIA TĘ USŁUGĘ",
  titleLines: ["Mycie okien i witryn", "ma być łatwe do zaplanowania"],
  description:
    "Przy tej usłudze najważniejsze jest to, żeby nie komplikować prostych rzeczy. Dlatego organizujemy ją tak, żeby szybko przejść od pierwszej wiadomości do terminu, wyceny albo modelu cyklicznego.",
  items: [
    {
      iconName: "users",
      label: "PROSTY KONTAKT",
      title: "Szybko wiesz, jaki jest kolejny krok",
      description:
        "Nie trzeba rozbudowanego briefu. Przy tej usłudze najczęściej wystarczą podstawowe dane, zdjęcia i informacja o częstotliwości.",
      tone: "resources",
    },
    {
      iconName: "shieldAlert",
      label: "DOPASOWANIE",
      title: "Inaczej dla lokalu, inaczej dla sieci, inaczej dla domu",
      description:
        "To jedna usługa, ale różne sposoby korzystania z niej. Dzięki temu nie mieszamy jednorazowego zlecenia z modelem abonamentowym.",
      tone: "risk",
    },
    {
      iconName: "database",
      label: "ZDJĘCIA",
      title: "Zdjęcia bardzo przyspieszają wycenę i kwalifikację",
      description:
        "Przy tej usłudze to najszybszy sposób, żeby określić liczbę szyb, poziom zabrudzeń i sensowny wariant realizacji.",
      tone: "processes",
    },
    {
      iconName: "clipboardCheck",
      label: "REGULARNOŚĆ",
      title: "Jeśli chcesz, ustawiamy model cykliczny",
      description:
        "To dobre rozwiązanie dla lokali, witryn i miejsc, gdzie efekt ma być utrzymywany stale, bez każdorazowego wracania do ustaleń.",
      tone: "data",
    },
    {
      iconName: "clipboardCheck",
      label: "LOGISTYKA",
      title: "Przy wielu punktach porządkujemy częstotliwość i organizację",
      description:
        "W sieciach i kilku lokalizacjach najważniejsze są prosty harmonogram, jedna ścieżka kontaktu i powtarzalny standard.",
      tone: "finance",
    },
    {
      iconName: "fileText",
      label: "WYCENA",
      title: "Widełki są czytelne już na początku rozmowy",
      description:
        "Liczba szyb, witryn, lokalizacja i zdjęcia zwykle wystarczają, żeby szybko wrócić z orientacyjną wyceną albo dalszym krokiem.",
      tone: "technology",
    },
  ],
};

const processContent: ProcessSectionContent = {
  kickerLabel: "JAK DZIAŁAMY?",
  titleLines: ["Od zdjęć i krótkiego opisu", "do terminu albo modelu cyklicznego"],
  description:
    "Ta usługa ma być prosta do zamówienia. Dlatego najpierw zbieramy minimum danych, potem określamy zakres i wracamy z widełkami, terminem albo propozycją regularnej współpracy.",
  steps: [
    {
      index: "01",
      title: "Wysyłasz zdjęcia albo krótko opisujesz temat",
      description:
        "Wystarczy informacja, czy chodzi o lokal, sieć, dom czy mieszkanie, oraz liczba szyb albo witryn i lokalizacja.",
    },
    {
      index: "02",
      title: "Określamy zakres i sposób realizacji",
      description:
        "Ustalamy, czy to usługa jednorazowa, czy cykliczna, ile jest przeszkleń i czy są jakieś warunki wpływające na organizację.",
    },
    {
      index: "03",
      title: "Wracamy z widełkami albo terminem",
      description:
        "Po zebraniu podstawowych danych podajemy orientacyjną wycenę, możliwy termin albo propozycję modelu współpracy.",
    },
    {
      index: "04",
      title: "Realizujemy usługę i ustawiamy dalszy rytm, jeśli trzeba",
      description:
        "W zależności od ustaleń wykonujemy jednorazowe mycie albo ustawiamy regularne wejścia w przewidywalnych oknach realizacji.",
    },
  ],
  ctaLabel: "Wyślij minimum danych",
};

const knowledgeContent: KnowledgeSectionContent = {
  kickerLabel: "REALIZACJE I REFERENCJE",
  titleLines: ["Zobacz, jak wygląda ta usługa", "w lokalach, sieciach, domach i mieszkaniach"],
  description:
    "Przykłady realizacji dla firm i klientów prywatnych. Zobacz, jak wygląda mycie witryn, okien w punktach handlowych oraz okien w domach i mieszkaniach.",
  cards: [
    {
      title: "Realizacje",
      description:
        "Przykłady witryn, lokali, domów i mieszkań. Krótkie case’y pokazujące zakres, typ obiektu i sposób organizacji usługi.",
      buttonLabel: "Zobacz realizacje",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Realizacje Domker przy myciu okien i witryn",
      },
    },
    {
      title: "Referencje i opinie",
      description:
        "Co klienci doceniają przy tej usłudze. Najczęściej prosty kontakt, szybkie ustalenia, regularny efekt i łatwą organizację.",
      buttonLabel: "Zobacz referencje",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Referencje Domker przy myciu okien i witryn",
      },
    },
  ],
};

const contactContent: ContactSectionContent = {
  kickerLabel: "SKONTAKTUJ SIĘ",
  title: "Wyślij minimum danych, a szybko wrócimy z odpowiedzią",
  description:
    "Napisz, czy chodzi o lokal, sieć, dom czy mieszkanie. Podaj liczbę szyb albo witryn, lokalizację i dopisz, czy usługa ma być jednorazowa czy cykliczna. Zdjęcia mile widziane.",
  chips: [
    { label: "Szybka wycena" },
    { label: "Zdjęcia mile widziane" },
    { label: "Jednorazowo lub cyklicznie" },
    { label: "Lokale i domy" },
    { label: "Wiele punktów" },
    { label: "Prosty kontakt", accent: true },
  ],
  form: {
    emailLabel: "Adres e-mail",
    emailPlaceholder: "Twój adres e-mail",
    phoneLabel: "Numer telefonu",
    phonePlaceholder: "Twój numer telefonu",
    topicLabel: "Temat rozmowy",
    topicPlaceholder: "Lokal, sieć, dom czy mieszkanie i ile szyb",
    consentText:
      "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zgłoszenia oraz na kontakt handlowy drogą elektroniczną na podany adres e-mail. Polityka prywatności.",
    submitLabel: "Wyślij minimum danych",
  },
  meta: {
    avatars: ["A", "B", "C", "D", "E", "F"],
    text: "Zespół operacyjny po stronie Domker",
  },
};

const faqContent: FaqSectionContent = {
  kickerLabel: "NAJCZĘŚCIEJ ZADAWANE PYTANIA",
  title: "Pytania przed zleceniem mycia okien i witryn",
  titleLines:["Pytania przed zleceniem", "mycia okien i witryn"],
  description: "Masz więcej pytań? Po prostu",
  highlightText: "skontaktuj się z nami",
  avatars: ["A", "B", "C", "D", "E", "F", "G", "H"],
  items: [
    {
      question: "Czy obsługujecie firmy i klientów prywatnych?",
      answer:
        "Tak. Ta usługa jest wspólna dla obu grup. Obsługujemy lokale, firmy i sieci, ale też domy i mieszkania.",
    },
    {
      question: "Czy można zlecić usługę jednorazowo?",
      answer:
        "Tak. Mycie okien i witryn może być jednorazowe albo cykliczne, zależnie od tego, jak chcesz z niej korzystać.",
    },
    {
      question: "Czy można ustawić regularne mycie witryn albo okien?",
      answer:
        "Tak. W przypadku lokali, punktów handlowych i części klientów prywatnych możemy ustalić model cykliczny w stałych oknach realizacji.",
    },
    {
      question: "Jak wygląda wycena tej usługi?",
      answer:
        "Najczęściej wystarczą zdjęcia, liczba szyb albo witryn, lokalizacja i informacja, czy chodzi o usługę jednorazową czy cykliczną.",
    },
    {
      question: "Czy wystarczą zdjęcia do pierwszej wyceny?",
      answer:
        "Bardzo często tak. Zdjęcia przyspieszają ocenę zakresu, liczbę przeszkleń i pozwalają szybciej wrócić z widełkami albo terminem.",
    },
    {
      question: "Czy obsługujecie wiele lokalizacji?",
      answer:
        "Tak. Jeśli temat dotyczy kilku punktów albo sieci, porządkujemy usługę tak, żeby miała jeden standard i prostszy model organizacji.",
    },
    {
      question: "Czy myjecie same witryny czy również okna wewnątrz?",
      answer:
        "To zależy od ustalonego zakresu. Przy wycenie doprecyzowujemy, czy chodzi o same witryny, okna z zewnątrz, czy również wewnętrzne przeszklenia.",
    },
    {
      question: "Czy możecie pracować przed otwarciem lokalu albo poza godzinami?",
      answer:
        "Tak, w wielu przypadkach da się ustalić wygodne okno realizacji, tak żeby nie przeszkadzać w działaniu punktu albo domowników.",
    },
    {
      question: "Co wpływa na cenę?",
      answer:
        "Najczęściej liczba szyb, wielkość przeszkleń, stopień zabrudzeń, lokalizacja, dostęp oraz to, czy usługa ma być jednorazowa czy cykliczna.",
    },
    {
      question: "Jak szybko możecie wejść?",
      answer:
        "To zależy od lokalizacji, zakresu i aktualnego obłożenia. Po otrzymaniu minimum danych szybko ocenimy możliwy termin.",
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