import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Sprzątanie po budowie dla kierownika budowy | Domker",
  description:
    "Dla kierowników budowy: sprzątanie końcówki pod odbiór bez zbędnych powrotów. Strefy krytyczne, kontrola checklistą i szybka oferta do zatwierdzenia.",
};

// /sprzatanie-po-budowie/kierownik-budowy

const defaultContent: PagesHeroContent = {
  badge: "SPRZĄTANIE PO BUDOWIE DLA KIEROWNIKA BUDOWY",
  titleLines: ["Sprzątanie po budowie", "pod odbiór bez chaosu"],
  emphasisIconName: "hardHat",
  emphasisSuffix: "/",
  description:
    "Na końcówce budowy nie potrzebujesz kolejnej ekipy do pilnowania. Potrzebujesz partnera, który przejmie finalizację czystości pod odbiór: w realnym oknie wejścia, bez szkód na wykończeniach, bez rozjechania harmonogramu i bez wracania do tych samych uwag.",
  ctaLabel: "Odbierz ofertę do zatwierdzenia (PDF/HTML)",
  ctaHref: "/kontakt",
};

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "ZNASZ TE WYZWANIA?",
  titleLines: ["Co kierownika budowy realnie", "blokuje przed odbiorem?"],
  description:
    "Na końcówce przegrywa zwykle nie sam zakres, tylko brak przewidywalności. Odbiór ma termin, budowa nadal żyje, ekipy wracają, pył wraca, a lista uwag pojawia się wtedy, gdy czasu na kolejne wejście już prawie nie ma.",
  items: [
    {
      iconName: "calendarClock",
      label: "OKNO",
      title: "Termin odbioru jest stały, a warunki na budowie zmieniają się do końca",
      description:
        "Na sprzątanie zostaje krótki przedział, który trzeba zsynchronizować z poprawkami, dostępem do stref i ruchem innych ekip.",
      tone: "processes",
    },
    {
      iconName: "workflow",
      label: "KOORDYNACJA",
      title: "Za dużo osób, a za mało czasu na kontrolę ich pracy",
      description:
        "Kierownik nie powinien jednocześnie pilnować brygad, odbioru i czystości. Potrzebny jest jeden odpowiedzialny po stronie wykonawcy.",
      tone: "processes",
    },
    {
      iconName: "layoutGrid",
      label: "DETALE",
      title: "Uwagi wychodzą dopiero przy końcowym obchodzie",
      description:
        "Smugi na szybach, pył na parapetach, zabrudzenia przy listwach, progach i armaturze ujawniają się zwykle wtedy, gdy odbiór jest już bardzo blisko.",
      tone: "data",
    },
    {
      iconName: "truck",
      label: "ZASOBY",
      title: "Szybkie wejście wymaga ludzi, sprzętu i gotowości organizacyjnej",
      description:
        "Na końcówce nie ma miejsca na szukanie odkurzaczy, maszyn i ekipy z kilku źródeł. To musi być gotowe po potwierdzeniu terminu.",
      tone: "resources",
    },
    {
      iconName: "shieldAlert",
      label: "RYZYKO",
      title: "Szkoda na wykończeniu potrafi obniżyć zyski i wydłużyć odbiór",
      description:
        "Posadzki, przeszklenia, profile i armatura wymagają pracy pod materiał. Błąd technologiczny wraca jako koszt, reklamacja i opóźnienie.",
      tone: "risk",
    },
    {
      iconName: "fileText",
      label: "ODBIÓR",
      title: "Bez dokumentów i kontroli temat wraca po raz kolejny",
      description:
        "Checklista, zdjęcia i protokół porządkują odbiór, rozliczenie oraz odpowiedzialność. Bez nich kierownik wraca do tych samych wyjaśnień po realizacji.",
      tone: "technology",
    },
  ],
};

const solutionsContent: SolutionsSectionContent = {
  kickerLabel: "JAK TO PROWADZIMY",
  titleLines: ["Sprzątanie końcówki budowy", "w logice kierownika"],
  description:
    "Prowadzimy ten etap jak zadanie z harmonogramu: ustalamy cel odbioru, priorytety stref, kolejność prac, technologię pod materiał i zgłaszamy gotowość dopiero po własnej kontroli. Dzięki temu kierownik dostaje etap gotowy do dalszego procedowania, a nie kolejną listę rzeczy do dopilnowania.",
  items: [
    {
      iconName: "hardHat",
      label: "Standard odbiorowy",
      title: "Najpierw ustalamy, co dokładnie ma przejść na odbiorze",
      description:
        "Inwestorski, urzędowy, przekazanie, odbiory mieszkań albo części wspólnych. Standard musi być konkretny, żeby zakres był policzalny i sprawdzalny.",
      ctaLabel: "Wyślij minimum danych",
  ctaHref: "/kontakt",
      mediaAlt: "Standard odbiorowy po budowie",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "clipboardList",
      label: "Strefy krytyczne",
      title: "Zaczynamy od miejsc, które będą oceniane jako pierwsze",
      description:
        "Klatki schodowe, garaże, wejścia, komunikacja, przeszklenia, sanitariaty, części wspólne i detale wykończeniowe traktujemy jako priorytet odbiorowy.",
      ctaLabel: "Wyślij minimum danych",
  ctaHref: "/kontakt",
      mediaAlt: "Strefy krytyczne na budowie",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "building2",
      label: "Technologia pod materiał",
      title: "Czyścimy tak, żeby nie tworzyć kolejnych problemów",
      description:
        "Dobieramy chemię i narzędzia do posadzek, szyb albo okien, armatury i profili, żeby nie zostawiać rys, zmatowień ani zacieków.",
      ctaLabel: "Wyślij minimum danych",
  ctaHref: "/kontakt",
      mediaAlt: "Bezpieczna technologia sprzątania po budowie",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "sparkles",
      label: "Odbiór wewnętrzny",
      title: "Najpierw weryfikacja po naszej stronie, potem zgłoszenie gotowości",
      description:
        "Zanim powiemy, że etap jest gotowy, robimy kontrolę checklistą i usuwamy własne uwagi wewnętrznie. To ogranicza liczbę powrotów po odbiorze.",
      ctaLabel: "Wyślij minimum danych",
  ctaHref: "/kontakt",
      mediaAlt: "Kontrola wewnętrzna przed odbiorem",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "grid3x3",
      label: "Moce przerobowe",
      title: "Skala dopasowana do etapu, terminu i typu obiektu",
      description:
        "Od pojedynczych lokali po większe obiekty i etapy mieszkaniowe. Maksymalnie do 5000 m² dziennie lub do 300 doczyszczonych okien dziennie zależnie od warunków.",
      ctaLabel: "Sprawdź dostępność",
  ctaHref: "/kontakt",
      mediaAlt: "Moce przerobowe Domker",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "mapPin",
      label: "Cała Polska",
      title: "Jedna współpraca zamiast szukania ekipy na ostatniej prostej",
      description:
        "Działamy ogólnopolsko i układamy wejście pod termin odbioru, dostęp do obiektu, procedury oraz ograniczenia technologiczne.",
      ctaLabel: "Sprawdź dostępność",
  ctaHref: "/kontakt",
      mediaAlt: "Sprzątanie po budowie w całej Polsce",
      mediaSrc: "/kontakt",
    },
  ],
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "DOBIERZMY ZAKRES POD ODBIÓR",
  title: "Powiedz, jaki obiekt trzeba przygotować i na kiedy jest odbiór",
  description:
    "Wystarczy miasto lub adres inwestycji, metraż, termin odbioru i numer kontaktowy. Jeśli wiesz, które strefy są krytyczne albo gdzie najczęściej wracają uwagi, dopisz to w wiadomości.",
  buttonLabel: "Wyślij minimum danych",
  buttonHref: "#kontakt",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const benefitsContent: BenefitsSectionContent = {
  kickerLabel: "FORMALNOŚCI I ODPOWIEDZIALNOŚĆ",
  titleLines: ["Formalności i odpowiedzialność", "po naszej stronie"],
  description:
    "Na końcówce liczy się nie tylko efekt wizualny. Liczy się też wejście na obiekt, zgodność z BHP, dokumentacja do odbioru i jasna odpowiedzialność, jeśli w trakcie ujawnią się szkody albo usterki zastane.",
  items: [
    {
      iconName: "users",
      label: "KADRY",
      title: "Legalne zatrudnienie\ni przygotowane zespoły",
      description:
        "Wiesz, kto wchodzi na obiekt i kto odpowiada za realizację. To ogranicza ryzyka kadrowe i skraca czas wdrażania ekipy na miejscu.",
      tone: "resources",
    },
    {
      iconName: "shieldAlert",
      label: "BHP",
      title: "Szkolenia, analiza zagrożeń i praca zgodna z zasadami obiektu",
      description:
        "Ustalamy strefy wyłączone, ciągi komunikacyjne i zasady pracy przed wejściem, żeby nie blokować realizacji przez procedury w trakcie dnia.",
      tone: "risk",
    },
    {
      iconName: "database",
      label: "DOSTĘP",
      title: "Umowa o zachowaniu poufności i rejestr wejść, jeśli są wymagane",
      description:
        "Jeżeli inwestycja ma własne procedury wejścia, ustalamy je wcześniej, a nie w dniu realizacji przy ochronie albo na bramie.",
      tone: "processes",
    },
    {
      iconName: "clipboardCheck",
      label: "DOKUMENTY",
      title: "Checklista, protokół i zdjęcia po zakończeniu",
      description:
        "Po kontroli przekazujemy dokumenty, które pomagają zgłosić gotowość, rozliczyć etap i ograniczyć wracanie do tych samych uwag po odbiorze.",
      tone: "data",
    },
    {
      iconName: "clipboardCheck",
      label: "OC",
      title: "Ubezpieczenie OC i jasne ramy odpowiedzialności",
      description:
        "Masz jasność, jak wygląda zabezpieczenie współpracy przy realizacjach na obiektach komercyjnych i jak rozdzielamy odpowiedzialność za szkody.",
      tone: "finance",
    },
    {
      iconName: "fileText",
      label: "B2B",
      title: "Umowa i faktura VAT jako standard współpracy",
      description:
        "Proces zakupowy pozostaje czytelny dla inwestora, księgowości, administracji i osób zatwierdzających usługę po stronie wykonawcy.",
      tone: "technology",
    },
  ],
};

const processContent: ProcessSectionContent = {
  kickerLabel: "JAK DZIAŁAMY?",
  titleLines: ["Proces pod odbiór", "krok po kroku"],
  description:
    "Zbieramy minimum danych, potwierdzamy warunki wejścia i prowadzimy realizację tak, żeby zgłosić gotowość dopiero po odbiorze wewnętrznym. Dla kierownika oznacza to mniej niepewności, mniej powrotów i prostszą ścieżkę do finalizacji etapu.",
  steps: [
    {
      index: "01",
      title: "Minimum danych i szybka kwalifikacja",
      description:
        "Ustalamy typ obiektu, metraż, termin odbioru, etap prac, strefy krytyczne, obecność innych ekip oraz to, co na końcówce jest dziś największym ryzykiem.",
    },
    {
      index: "02",
      title: "Widełki, termin i oferta do zatwierdzenia",
      description:
        "Wracamy po skompletowaniu informacji. Dostajesz zakres, wyłączenia, warunki wejścia i wariant realizacji do przekazania dalej.",
    },
    {
      index: "03",
      title: "Wejście na obiekt i plan stref",
      description:
        "Potwierdzamy okno wejścia, kolejność prac, ograniczenia technologiczne, strefy wyłączone, równoległe ekipy i zasady poruszania się po budowie.",
    },
    {
      index: "04",
      title: "Realizacja, kontrola i protokół",
      description:
        "Pracujemy w ustalonym oknie, robimy odbiór wewnętrzny checklistą i dopiero wtedy przekazujemy protokół oraz zdjęcia do zgłoszenia gotowości.",
    },
  ],
  ctaLabel: "Odbierz ofertę do zatwierdzenia (PDF/HTML)",
  ctaHref: "/kontakt",
};

const knowledgeContent: KnowledgeSectionContent = {
  kickerLabel: "REALIZACJE I CENNIK",
  titleLines: ["Zobacz, jak pracujemy", "na końcówkach budów"],
  description:
    "Przykładowe realizacje z obiektów komercyjnych i etapów odbiorowych. Zobacz, jak wygląda współpraca od pierwszego kontaktu po finalizację realizacji pod odbiór.",
  cards: [
    {
      title: "Realizacje",
      description:
        "Zakresy i efekty z obiektów pod odbiór. Krótkie case’y pokazujące strefy krytyczne, tryb pracy, ograniczenia i rezultat końcowy.",
      buttonLabel: "Zobacz realizacje",
  buttonHref: "/realizacje",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Realizacje Domker po budowie",
      },
    },
    {
      title: "Cennik i wycena",
      description:
        "Sprawdź, jak liczymy koszt końcówki budowy pod odbiór i które elementy zakresu najmocniej wpływają na wycenę.",
      buttonLabel: "Zobacz cennik",
  buttonHref: "/cennik",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Cennik Domker po budowie",
      },
    },
  ],
};

const contactContent: ContactSectionContent = {
  kickerLabel: "SKONTAKTUJ SIĘ",
  title: "Wyślij minimum danych, a wskażemy kolejny krok",
  description:
    "Podaj nazwę inwestycji albo firmy, adres obiektu, e-mail firmowy i numer telefonu. W odpowiedzi wyślemy krótką listę informacji potrzebnych do widełek, terminu i decyzji o wejściu.",
  chips: [
    { label: "Odbiór pod termin" },
    { label: "Jeden odpowiedzialny" },
    { label: "Strefy krytyczne" },
    { label: "Kontrola checklistą" },
    { label: "Zasięg ogólnopolski" },
    { label: "Szybka kwalifikacja", accent: true },
  ],
  form: {
    emailLabel: "Adres e-mail",
    emailPlaceholder: "Twój adres e-mail",
    phoneLabel: "Numer telefonu",
    phonePlaceholder: "Twój numer telefonu",
    topicLabel: "Temat rozmowy",
    topicPlaceholder: "Jaki obiekt i na kiedy jest odbiór",
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
  title: "Pytania, które padają u kierowników budów",
  titleLines: ["Pytania, które padają", "u kierowników budów"],
  description: "Masz więcej pytań? Po prostu",
  highlightText: "skontaktuj się z nami",
  avatars: ["A", "B", "C", "D", "E", "F", "G", "H"],
  cta: {
    label: "Przejdź do kontaktu",
    href: "/kontakt",
  },
  items: [
    {
      question: "Czy wejdziecie na już, jeśli odbiór jest blisko?",
      answer:
        "Tak — jeśli mamy minimum danych i jasne warunki wejścia. W pilnych sprawach najlepiej zadzwonić, bo wtedy szybciej kwalifikujemy temat i możliwy termin wejścia.",
    },
    {
      question: "Czy pracujecie po godzinach albo między robotami?",
      answer:
        "Tak. Okno realizacji dopasowujemy do harmonogramu na obiekcie, zależnie od dostępu, obecności innych ekip i zasad obowiązujących na budowie.",
    },
    {
      question: "Jak ograniczacie poprawki przy końcowym odbiorze?",
      answer:
        "Robimy odbiór wewnętrzny checklistą przed zgłoszeniem gotowości. Najpierw poprawki realizujemy po swojej stronie, a dopiero potem przekazujemy etap do dalszej weryfikacji.",
    },
    {
      question: "Czy możecie przejąć tylko wybrane strefy, a nie cały obiekt?",
      answer:
        "Tak. Jeżeli odbiór dotyczy konkretnych części obiektu, możemy prowadzić realizację strefami: na przykład klatki, garaże, części wspólne, lokale pokazowe albo wybrane kondygnacje.",
    },
    {
      question: "Jakie informacje są potrzebne do szybkiej wyceny?",
      answer:
        "Najczęściej wystarczy lokalizacja, metraż, termin odbioru, realne okno wejścia i krótka informacja o newralgicznych powierzchniach, śladach po montażu albo strefach krytycznych.",
    },
    {
      question: "Czy bezpiecznie pracujecie na nowych wykończeniach?",
      answer:
        "Tak. Dobieramy technologię do materiału i etapu wykończenia, szczególnie przy posadzkach, szybach albo oknach, armaturze, frontach i profilach.",
    },
    {
      question: "Czy macie własny sprzęt do sprzątania po budowie?",
      answer:
        "Tak. Pracujemy na własnym wyposażeniu, dobieranym do zakresu i typu zabrudzeń, dzięki czemu nie trzeba organizować sprzętu po stronie budowy.",
    },
    {
      question: "Jak wygląda ubezpieczenie odpowiedzialności?",
      answer:
        "Mamy ubezpieczenie OC na kwotę pół miliona złotych. Szczegóły współpracy i odpowiedzialności opisujemy w ofercie oraz dokumentach realizacyjnych.",
    },
    {
      question: "Czy działacie w całej Polsce?",
      answer:
        "Tak — realizujemy sprzątanie po budowie na terenie całej Polski, zarówno dla pojedynczych obiektów, jak i większych etapów odbiorowych.",
    },
    {
      question: "Czy usuwacie folie, kleje i ślady po montażu?",
      answer:
        "Tak, jeśli występują w zakresie i warunki materiałowe na to pozwalają. Dlatego już na etapie wyceny warto zgłosić folie, kleje oraz powierzchnie szczególnie wrażliwe.",
    },
    {
      question: "Czy możecie utrzymać gotowość odbiorową przez kilka dni lub tygodni?",
      answer:
        "Tak, w wybranych przypadkach możemy zaplanować realizację etapową albo utrzymanie gotowości odbiorowej, jeśli na obiekcie nadal pracują ekipy usterkowe lub odbiory są rozciągnięte w czasie.",
    },
    {
      question: "Co najczęściej wydłuża odbiór po sprzątaniu?",
      answer:
        "Najczęściej są to smugi widoczne dopiero pod światło, wtórne pylenie po innych ekipach, niepotwierdzone warunki wejścia, brak odbioru wewnętrznego i zabrudzenia ujawniające się po zdjęciu zabezpieczeń.",
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
