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

// /sprzatanie-po-budowie

const defaultContent: PagesHeroContent = {
  badge: "SPRZĄTANIE PO BUDOWIE (B2B)",
  titleLines: ["Sprzątanie po budowie", "pod odbiór bez domyślania się efektu"],
  emphasisSuffix: "/",
  description:
    "To etap, na którym widać wszystko: pył technologiczny, ślady po foliach i klejach, smugi pod światło i niedoczyszczone detale przy listwach, progach i profilach. W Domker prowadzimy sprzątanie po budowie jak zadanie odbiorowe: plan stref, kolejność prac, technologia pod materiał i kontrola przed zgłoszeniem gotowości.",
  ctaLabel: "Odbierz ofertę do zatwierdzenia (PDF/HTML)",
};

const knowledgeContent2: KnowledgeSectionContent = {
  kickerLabel: "WYBIERZ ŚCIEŻKĘ PO ROLI",
  titleLines: ["Domker dopasowuje sposób działania", "do Twojej roli po stronie obiektu"],
  description:
    "Jeśli odpowiadasz za odbiór, harmonogram i końcówkę budowy, będziesz patrzeć na ten etap inaczej niż osoba odpowiadająca za przekazanie obiektu, procedury i komunikację po stronie firmy. Dlatego rozdzielamy dalszą ścieżkę według roli.",
  cards: [
    {
      title: "Kierownik budowy / wykonawca",
      description:
        "Dla osób, które chcą domknąć etap pod odbiór bez dodatkowych wejść, powrotów i rozjechania harmonogramu. Tu liczą się strefy odbiorowe, kolejność prac, kontrola checklistą i gotowość do zgłoszenia.",
      buttonLabel: "Jestem kierownikiem budowy",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Ścieżka dla kierownika budowy",
      },
    },
    {
      title: "Zarządca obiektu / office / koordynacja",
      description:
        "Dla osób, które odpowiadają za procedury, przekazanie, kontakt między stronami i dopięcie tematu organizacyjnie. Tu liczą się formalności, jeden punkt kontaktu, dokumentacja i usługa gotowa do procedowania dalej.",
      buttonLabel: "Odpowiadam za koordynację",
      media: {
        type: "image",
        src: "/tlo.png",
        alt: "Ścieżka dla zarządcy obiektu",
      },
    },
  ],
};

const problemsContent: ProblemsSectionContent = {
  kickerLabel: "KIEDY TO JEST POTRZEBNE?",
  titleLines: ["Sprzątanie po budowie ma sens wtedy,", "gdy liczy się wynik odbioru"],
  description:
    "To nie jest usługa od odświeżenia obiektu. To etap, który ma przygotować przestrzeń do odbioru, przekazania albo otwarcia — w warunkach, gdzie zła kolejność prac, pył i błędy technologiczne wracają jako poprawki.",
  items: [
    {
      iconName: "sparkles",
      label: "PYŁ",
      title: "Pył po pracach technicznych wraca tam, gdzie będzie oceniany obiekt",
      description:
        "Po szlifach, docinkach i wierceniach osiada na detalach, profilach, parapetach i ciągach komunikacyjnych. Bez pracy strefami efekt szybko znika.",
      tone: "processes",
    },
    {
      iconName: "clipboardList",
      label: "FOLIE I KLEJE",
      title: "Ślady po zabezpieczeniach wychodzą przy końcowym oglądzie",
      description:
        "Folie, taśmy i kleje po montażu często stają się widoczne dopiero pod światło, z bliska albo po zdjęciu ostatnich zabezpieczeń.",
      tone: "data",
    },
    {
      iconName: "shieldAlert",
      label: "MATERIAŁY",
      title: "Nowe wykończenia nie wybaczają przypadkowej technologii",
      description:
        "Świeże posadzki, szkło, armatura, profile i fronty wymagają narzędzi oraz chemii dobranych do materiału, nie improwizacji na miejscu.",
      tone: "risk",
    },
    {
      iconName: "calendarClock",
      label: "WEJŚCIE",
      title: "Obiekt nadal żyje i nie zawsze jest gotowy na jedno końcowe wejście",
      description:
        "Równoległe ekipy, strefy wyłączone i przesuwający się harmonogram potrafią zatrzymać realizację, jeśli warunki wejścia nie są potwierdzone wcześniej.",
      tone: "processes",
    },
    {
      iconName: "clipboardCheck",
      label: "KONTROLA",
      title: "Brak wewnętrznej weryfikacji wraca jako lista uwag na finiszu",
      description:
        "Jeżeli efekt nie jest sprawdzony przed zgłoszeniem gotowości, poprawki wracają dokładnie wtedy, gdy czasu na nie jest najmniej.",
      tone: "technology",
    },
    {
      iconName: "fileText",
      label: "ODPOWIEDZIALNOŚĆ",
      title: "Bez dokumentacji trudno oddzielić stan zastany od zakresu prac",
      description:
        "Na końcówce łatwo o spór, co było zabrudzeniem, co usterką, a co efektem innych ekip. Dokumentowanie sytuacji porządkuje temat.",
      tone: "resources",
    },
  ],
};

const solutionsContent: SolutionsSectionContent = {
  kickerLabel: "JAK TO PROWADZIMY",
  titleLines: ["Sprzątanie po budowie jako proces", "stref, kolejności i decyzji technologicznych"],
  description:
    "Najpierw ustalamy, do jakiego odbioru przygotowujemy obiekt. Potem porządkujemy strefy, dobieramy technologię do materiałów i zgłaszamy gotowość dopiero po kontroli wewnętrznej. Dzięki temu efekt jest sprawdzalny, a nie uznaniowy.",
  items: [
    {
      iconName: "clipboardCheck",
      label: "Standard odbiorowy",
      title: "Najpierw ustalamy, jaki efekt ma przejść na końcu",
      description:
        "Inwestorski, urzędowy, przekazanie albo otwarcie. Standard końcowy musi być czytelny, żeby zakres i kolejność prac miały sens.",
      ctaLabel: "Zobacz usługę",
      mediaAlt: "Sprzątanie po budowie",
      mediaSrc: "/sprzatanie-po-budowie",
    },
    {
      iconName: "layoutGrid",
      label: "Strefy krytyczne",
      title: "Dzielimy obiekt na miejsca, które realnie będą oceniane",
      description:
        "Wejścia, komunikacja, przeszklenia, sanitariaty, zaplecza i detale wykończeniowe prowadzimy jako strefy wymagające osobnego podejścia.",
      ctaLabel: "Wyślij minimum danych",
      mediaAlt: "Minimum danych do wyceny",
      mediaSrc: "/kontakt#minimum-danych",
    },
    {
      iconName: "shieldAlert",
      label: "Technologia pod materiał",
      title: "Dobór metod wynika z powierzchni i ryzyka, nie z przyzwyczajeń",
      description:
        "Posadzki, szkło, armatura, profile i fronty mają różne ograniczenia. Dlatego decyzja technologiczna zapada przed wejściem.",
      ctaLabel: "Standard i bezpieczeństwo",
      mediaAlt: "Technologia i bezpieczeństwo",
      mediaSrc: "/sprzatanie-po-budowie#standard",
    },
    {
      iconName: "users",
      label: "Kontrola wykonania",
      title: "Gotowość zgłaszamy dopiero po własnej weryfikacji",
      description:
        "Realizacja jest sprawdzana checklistą przed przekazaniem. Na końcu przekazujemy protokół i zdjęcia jako materiał do dalszej procedury.",
      ctaLabel: "Zapytaj (PDF/HTML)",
      mediaAlt: "Kontakt i oferta",
      mediaSrc: "/kontakt",
    },
    {
      iconName: "calendarClock",
      label: "Okno wejścia",
      title: "Dopasowujemy realizację do realnego rytmu obiektu",
      description:
        "Jeśli sytuacja tego wymaga, pracujemy po godzinach albo między innymi robotami, żeby ograniczyć wtórne zabrudzenia i kolizje.",
      ctaLabel: "Ustal okno wejścia",
      mediaAlt: "Kontakt telefoniczny",
      mediaSrc: "tel:+48502992002",
    },
    {
      iconName: "truck",
      label: "Skala i moce",
      title: "Zespoły dobieramy do terminu, stanu obiektu i zakresu",
      description:
        "Od pojedynczych lokali po większe obiekty. Maksima organizacyjne zależą od warunków wejścia: do 5000 m² dziennie lub do 300 okien dziennie.",
      ctaLabel: "Sprawdź dostępność",
      mediaAlt: "Dostępność i termin",
      mediaSrc: "/kontakt",
    },
  ],
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "MINIMUM DANYCH DO WIDEŁEK I TERMINU",
  title: "Podaj dane, które przyspieszą wycenę i decyzję o wejściu",
  description:
    "Podaj lokalizację, metraż albo skalę obiektu, etap prac, termin i okno wejścia. Jeśli masz zdjęcia oraz informacje o materiałach wrażliwych, szybciej określimy zakres i sposób prowadzenia realizacji.",
  buttonLabel: "Wyślij minimum danych",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const showcaseContent: ShowcaseSectionContent = {
  kickerLabel: "FORMALNOŚCI I ODPOWIEDZIALNOŚĆ",
  titleLines: ["Formalności i odpowiedzialność", "po naszej stronie"],
  description:
    "Żeby wejść na obiekt i przeprowadzić realizację bez blokad, liczą się nie tylko ludzie i sprzęt, ale też procedury, dokumenty i jasne rozdzielenie odpowiedzialności.",
  items: [
    {
      tag: "KADRY",
      title: "Legalne zatrudnienie i przygotowane zespoły",
      description:
        "Pracownicy są legalnie zatrudnieni i przygotowani do pracy na obiekcie, co porządkuje logistykę i ogranicza ryzyka organizacyjne.",
      result: "Efekt: większa przewidywalność wejścia i przebiegu realizacji.",
    },
    {
      tag: "BHP",
      title: "Szkolenia BHP i analiza zagrożeń przed startem",
      description:
        "Przed wejściem ustalamy strefy wyłączone, zasady pracy i ryzyka, żeby realizacja nie zatrzymała się przez procedury w trakcie.",
      result: "Efekt: płynniejsze wejście i stabilniejsza organizacja prac.",
    },
    {
      tag: "DOKUMENTY",
      title: "Protokół i zdjęcia jako materiał do dalszego procedowania",
      description:
        "Po zakończeniu przekazujemy dokumentację wykonania. Jeżeli w trakcie ujawniają się usterki zastane, od razu je opisujemy i zgłaszamy.",
      result: "Efekt: krótsza ścieżka odbioru i mniej sporów po realizacji.",
    },
    {
      tag: "OC",
      title: "Ubezpieczenie OC i jasne ramy odpowiedzialności",
      description:
        "Przy końcówce budowy liczy się nie tylko efekt, ale też zabezpieczenie współpracy i czytelne ustalenia dotyczące odpowiedzialności.",
      result: "Efekt: mniejsze ryzyko organizacyjne po stronie zamawiającego.",
    },
    {
      tag: "POUFNOŚĆ / DOSTĘP",
      title: "NDA i rejestr wejść, jeśli obiekt tego wymaga",
      description:
        "Jeśli obiekt ma dodatkowe formalności, wdrażamy je przed startem, żeby nie tracić okna realizacji przez blokady administracyjne.",
      result: "Efekt: szybszy start i mniej problemów przy wejściu.",
    },
    {
      tag: "ROZLICZENIA",
      title: "Umowa i faktura VAT gotowe do akceptacji w firmie",
      description:
        "Przekazujemy czytelny zakres i dokumenty do zatwierdzenia oraz rozliczenia, tak aby procedowanie po stronie firmy było prostsze.",
      result: "Efekt: sprawniejsza decyzja i łatwiejsza finalizacja etapu.",
    },
  ],
};

const processContent: ProcessSectionContent = {
  kickerLabel: "JAK DZIAŁAMY?",
  titleLines: ["Etap po etapie: od kwalifikacji", "do zgłoszenia gotowości"],
  description:
    "Ta usługa ma prowadzić do odbioru, a nie tylko do wykonania prac. Dlatego najpierw zbieramy minimum danych, potem potwierdzamy warunki wejścia i kolejność, a gotowość zgłaszamy dopiero po kontroli wewnętrznej.",
  steps: [
    {
      index: "01",
      title: "Minimum danych i szybka kwalifikacja",
      description:
        "Ustalamy typ obiektu, metraż, etap prac, termin, okno wejścia i strefy, które mają największe znaczenie odbiorowe.",
    },
    {
      index: "02",
      title: "Widełki i oferta do zatwierdzenia (PDF/HTML)",
      description:
        "Przygotowujemy najprostszy wariant realizacji i przekazujemy ofertę, którą można dalej wysłać do przełożonego, zarządu albo zakupów.",
    },
    {
      index: "03",
      title: "Potwierdzenie warunków wejścia i plan stref",
      description:
        "Doprecyzowujemy godziny, dostęp, BHP, strefy wyłączone, równoległe ekipy, ograniczenia materiałowe i kolejność prac.",
    },
    {
      index: "04",
      title: "Realizacja, kontrola i zgłoszenie gotowości",
      description:
        "Pracujemy według planu stref i wybranej technologii. Po kontroli wewnętrznej przekazujemy protokół oraz zdjęcia i dopiero wtedy zgłaszamy gotowość.",
    },
  ],
  ctaLabel: "Odbierz ofertę do zatwierdzenia (PDF/HTML)",
};

const contactContent: ContactSectionContent = {
  kickerLabel: "SKONTAKTUJ SIĘ",
  title: "Wybierz najkrótszą ścieżkę do przygotowania obiektu pod odbiór",
  description:
    "Zostaw kontakt i napisz, na kiedy potrzebujesz realizacji. Wrócimy z krótką listą pytań o warunki wejścia, zakres i strefy krytyczne, a następnie przygotujemy ofertę do zatwierdzenia w firmie.",
  chips: [
    { label: "Standard odbiorowy" },
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
  titleLines: ["Zobacz, jak pracujemy", "przy realizacjach po budowie"],
  description:
    "Przykładowe realizacje z obiektów komercyjnych. Zobacz, jak wygląda usługa w praktyce: od kwalifikacji zakresu po finalizację etapu i przekazanie dokumentacji.",
  cards: [
    {
      title: "Realizacje",
      description:
        "Zakresy, strefy i efekty na obiektach po budowie i wykończeniu. Krótkie case’y pokazujące sposób prowadzenia prac.",
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
        "Co klienci doceniają przy tej usłudze. Najczęściej przewidywalność realizacji, bezpieczeństwo materiałowe i czytelne potwierdzenie wykonania.",
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
  title: "Pytania przed zleceniem sprzątania po budowie",
  description: "Masz więcej pytań? Po prostu",
  highlightText: "skontaktuj się z nami",
  avatars: ["A", "B", "C", "D", "E", "F", "G", "H"],
  items: [
    {
      question: "Czym sprzątanie po budowie różni się od zwykłego sprzątania?",
      answer:
        "To usługa techniczna, a nie standardowe sprzątanie utrzymaniowe. Obejmuje usuwanie pyłu budowlanego, zabrudzeń po montażu, śladów po zabezpieczeniach oraz przygotowanie obiektu do odbioru, przekazania albo uruchomienia.",
    },
    {
      question: "Kiedy najlepiej zlecić sprzątanie po budowie?",
      answer:
        "Najlepiej wtedy, gdy zakończone są prace najbardziej pylące i można określić realne okno wejścia. Jeżeli obiekt nadal jest w ruchu, często sensowniejszy jest podział na etapy niż jedno wejście końcowe.",
    },
    {
      question: "Co najczęściej wpływa na czas realizacji i wycenę?",
      answer:
        "Największy wpływ mają: poziom zapylenia, ślady po foliach i klejach, stan przeszkleń, rodzaj posadzek, liczba stref krytycznych oraz to, czy na obiekcie nadal pracują inne ekipy.",
    },
    {
      question: "Czy usuwacie ślady po foliach, taśmach i klejach ochronnych?",
      answer:
        "Tak, to jeden z częstszych elementów zakresu po wykończeniach. Metoda i czas zależą od materiału, rodzaju zabrudzenia i tego, jak długo zabezpieczenia pozostawały na powierzchni.",
    },
    {
      question: "Czy sprzątanie po budowie obejmuje mycie okien i przeszkleń?",
      answer:
        "Tak, jeśli wynika to z zakresu realizacji. Kwalifikujemy stan szyb, ram i zabrudzeń montażowych przed startem, ponieważ przeszklenia po budowie często wymagają osobnej decyzji technologicznej.",
    },
    {
      question: "Czy w ramach usługi wykonujecie doczyszczanie posadzek?",
      answer:
        "Tak, jeżeli rodzaj posadzki i etap jej przygotowania pozwalają na bezpieczną pracę. Przed startem doprecyzowujemy typ nawierzchni, charakter zabrudzeń i ograniczenia materiałowe.",
    },
    {
      question: "Co oznacza standard odbiorowy po sprzątaniu po budowie?",
      answer:
        "To efekt, który można zweryfikować na odbiorze: ograniczenie pyłu w strefach krytycznych, czyste pod światło przeszklenia i detale, przygotowane sanitariaty i komunikacja oraz usunięcie typowych śladów po pracach i zabezpieczeniach.",
    },
    {
      question: "Czy możecie wejść etapowo, jeśli obiekt nie jest jeszcze całkowicie gotowy?",
      answer:
        "Tak. W takich sytuacjach ustalamy priorytety: które strefy mają być przygotowane teraz, a które zostają na etap końcowy. To pozwala uniknąć sytuacji, w której efekt znika po kolejnych pracach.",
    },
    {
      question: "Jakie informacje najszybciej przyspieszają wycenę?",
      answer:
        "Najbardziej pomagają: lokalizacja, metraż albo skala obiektu, etap prac, termin, okno wejścia oraz zdjęcia pokazujące szkło, posadzki i główne zabrudzenia po budowie.",
    },
    {
      question: "Czy realizacja odbywa się w jednym wejściu czy w etapach?",
      answer:
        "Oba warianty są możliwe. Jeżeli obiekt jest gotowy do finalizacji, najczęściej pracujemy w jednym wejściu. Jeżeli nadal trwają prace, bezpieczniej jest rozłożyć usługę na etapy.",
    },
    {
      question: "Skąd biorą się poprawki po sprzątaniu po budowie?",
      answer:
        "Najczęściej z wtórnego pylenia po innych ekipach, zabrudzeń ujawniających się po zdjęciu folii, niepotwierdzonego standardu albo z wejścia w niewłaściwym momencie harmonogramu.",
    },
    {
      question: "Czy przed realizacją potrzebna jest wizja lokalna?",
      answer:
        "Nie zawsze. W wielu przypadkach wystarczą zdjęcia i komplet informacji. Wizja ma największy sens wtedy, gdy stan materiałów, rodzaj zabrudzeń albo ryzyko technologiczne mogą istotnie zmienić zakres i czas prac.",
    },
    {
      question: "Jak wygląda rozliczenie usługi?",
      answer:
        "Najpierw podajemy widełki po minimum danych. Finalne warunki ustalamy po doprecyzowaniu zakresu, stanu obiektu oraz tego, co musi zostać przygotowane do odbioru w pierwszej kolejności.",
    },
    {
      question: "Czy sprzątanie po budowie obejmuje wyniesienie odpadów pobudowlanych?",
      answer:
        "To zależy od rodzaju odpadów i ustaleń na obiekcie. Lekkie odpady przygotowane do wyniesienia możemy uwzględnić w zakresie, natomiast gruz i logistyka kontenerowa są traktowane osobno.",
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