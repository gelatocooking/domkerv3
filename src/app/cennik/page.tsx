import SolutionsSection, {
  type SolutionsSectionContent,
} from "@/components/SolutionsSection/SolutionsSection";
import ScenarioBudgetSection, {
  type ScenarioBudgetSectionContent,
} from "@/components/ScenarioBudgetSection/ScenarioBudgetSection";
import ShowcaseSection, {
  type ShowcaseSectionContent,
} from "@/components/ShowcaseSection/ShowcaseSection";
import ContactSection, {
  type ContactSectionContent,
} from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PagesHero, { type PagesHeroContent } from "../../components/PagesHero/PagesHero";
import styles from "./page.module.css";

const defaultContent: PagesHeroContent = {
  badge: "ORIENTACYJNE BUD\u017bETY I SPOS\u00d3B WYCENY",
  titleLines: ["Jak liczymy cen\u0119", "i kiedy wycena ma sens"],
  emphasisSuffix: "/",
  description:
    "Podajemy orientacyjne wide\u0142ki, \u017ceby od razu by\u0142o wiadomo, czy temat mie\u015bci si\u0119 w Twojej skali. Ostateczna wycena zale\u017cy od zakresu, logistyki, standardu ko\u0144cowego i terminu realizacji, nie od przypadkowego cennika od.",
  ctaLabel: "Sprawd\u017a, czy to temat w naszej skali",
};

const solutionsContent: SolutionsSectionContent = {
  kickerLabel: "JAK LICZYMY CEN\u0118",
  titleLines: ["Bez zgadywania i bez", "cennika jak w sklepie"],
  description:
    "Podajemy orientacyjne wide\u0142ki, \u017ceby szybko oceni\u0107, czy temat warto procedowa\u0107 dalej po swojej stronie. Ostateczna wycena zale\u017cy od zakresu, warunk\u00f3w wej\u015bcia, logistyki, standardu ko\u0144cowego i terminu realizacji.",
  items: [
    {
      iconName: "hardHat",
      label: "Sprz\u0105tanie po budowie",
      title: "Liczy si\u0119 zakres prac, typ obiektu i warunki doprowadzenia do odbioru",
      description:
        "Inaczej wycenia si\u0119 lokal przed odbiorem, a inaczej obiekt, na kt\u00f3rym nadal pracuj\u0105 r\u00f3wnoleg\u0142e ekipy. Znaczenie maj\u0105 te\u017c strefy krytyczne, standard ko\u0144cowy i realne okno wej\u015bcia.",
      ctaLabel: "Zobacz realizacje",
      mediaAlt: "Sprz\u0105tanie po budowie wycena",
      mediaSrc: "/tlo.png",
    },
    {
      iconName: "grid3x3",
      label: "Maszynowe czyszczenie posadzek",
      title: "Podstaw\u0105 jest metra\u017c, ale tylko razem z ocen\u0105 nawierzchni",
      description:
        "Typ posadzki, rodzaj zabrudze\u0144 i technologia potrzebna do bezpiecznego doczyszczenia wp\u0142ywaj\u0105 na koszt r\u00f3wnie mocno jak sama powierzchnia.",
      ctaLabel: "Sprawd\u017a przyk\u0142ady",
      mediaAlt: "Czyszczenie posadzek wycena",
      mediaSrc: "/tlo.png",
    },
    {
      iconName: "sparkles",
      label: "Mycie witryn i przeszkle\u0144",
      title: "Znaczenie maj\u0105 liczba szyb, dost\u0119p, wysoko\u015b\u0107 i cz\u0119stotliwo\u015b\u0107",
      description:
        "Przy sta\u0142ej obs\u0142udze mo\u017cliwy jest model abonamentowy albo rycza\u0142t. Przy jednorazowej realizacji wa\u017cne s\u0105 g\u0142\u00f3wnie liczba przeszkle\u0144, warunki pracy i logistyka wej\u015bcia.",
      ctaLabel: "Zobacz zakresy",
      mediaAlt: "Mycie witryn wycena",
      mediaSrc: "/tlo.png",
    },
    {
      iconName: "building2",
      label: "Sta\u0142a obs\u0142uga biur i lokali",
      title: "Koszt zale\u017cy od cz\u0119stotliwo\u015bci, zakresu i modelu wsp\u00f3\u0142pracy",
      description:
        "Im lepiej ustalony harmonogram, organizacja wej\u015b\u0107 i oczekiwany standard, tym \u0142atwiej utrzyma\u0107 przewidywalny koszt miesi\u0119czny i spokojną wsp\u00f3\u0142prac\u0119.",
      ctaLabel: "Sprawd\u017a model",
      mediaAlt: "Sta\u0142a obs\u0142uga wycena",
      mediaSrc: "/tlo.png",
    },
  ],
};

const scenarioBudgetContent: ScenarioBudgetSectionContent = {
  kickerLabel: "ORIENTACYJNE BUDŻETY",
  titleLines: [
    "Scenariusze realizacji",
    "i orientacyjne budżety",
  ],
  description:
    "Zamiast jednej, sztywnej ceny pokazujemy najczęstsze scenariusze realizacji. Dzięki temu łatwiej ocenić, jakiego rzędu kosztów można się spodziewać przy podobnym zakresie prac.",
  items: [
    {
      id: "construction",
      iconName: "hardHat",
      label: "Po budowie i wykończeniu",
      title: "Sprzątanie po budowie i pracach wykończeniowych",
      description:
        "Najczęściej dotyczy lokali usługowych, biur, mieszkań, części wspólnych i obiektów przygotowywanych do odbioru, przekazania lub otwarcia.",
      levels: [
        {
          id: "basic",
          label: "Zakres podstawowy",
          budget: "od X",
          description:
            "Obiekt jest przygotowany do wejścia, a zabrudzenia mają standardowy charakter. Ten wariant najczęściej dotyczy sytuacji, w której potrzebne jest uporządkowanie i doczyszczenie powierzchni bez większych poprawek po ekipach.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "Usunięcie lekkiego pyłu i typowych zabrudzeń.",
            "Doczyszczenie podstawowych powierzchni.",
            "Mycie dostępnych przeszkleń.",
            "Uporządkowanie zaplecza i sanitariatów.",
            "Przygotowanie obiektu do dalszych prac lub odbioru.",
          ],
          fitText:
            "Obiekt jest w dobrym stanie organizacyjnym, a zakres nie wymaga intensywnych poprawek ani dodatkowych wejść.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["Stopień zapylenia", "Szkło", "Powierzchnie", "Dostępność"],
          ctaLabel: "Zapytaj o podobny zakres",
        },
        {
          id: "standard",
          label: "Zakres standardowy",
          budget: "od X do Y",
          description:
            "Najczęstszy scenariusz przy lokalach i obiektach po zakończonych pracach wykończeniowych. Poza podstawowym doczyszczeniem obejmuje też więcej elementów wymagających dopracowania przed odbiorem lub otwarciem.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "Szyby i ramy.",
            "Posadzki i strefy wejścia.",
            "Zaplecze oraz sanitariaty.",
            "Detale wykończeniowe wymagające doczyszczenia.",
            "Usunięcie typowych śladów po ekipach.",
            "Przygotowanie obiektu do bardziej reprezentacyjnego stanu.",
          ],
          fitText:
            "Obiekt wygląda na skończony, ale wymaga jeszcze dopracowania przed przekazaniem dalej.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["Ilość szkła", "Rodzaj posadzki", "Strefy krytyczne", "Standard końcowy"],
          ctaLabel: "Poproś o wstępną wycenę",
        },
        {
          id: "extended",
          label: "Zakres rozszerzony",
          budget: "od Y+",
          description:
            "Scenariusz dla bardziej wymagających realizacji, gdzie poza standardowym zakresem pojawiają się trudniejsze zabrudzenia, poprawki po ekipach lub konieczność działania pod presją terminu.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "Intensywne doczyszczenie po pracach wykończeniowych.",
            "Większą ilość przeszkleń i trudniejszych powierzchni.",
            "Poprawki po wcześniejszych etapach prac.",
            "Dokładne dopracowanie stref reprezentacyjnych.",
            "Działania prowadzone w krótkim oknie czasowym.",
            "Przygotowanie obiektu bezpośrednio pod odbiór lub otwarcie.",
          ],
          fitText:
            "Na obiekcie zostało więcej śladów po pracach, zakres jest szerszy, a realizacja musi zostać domknięta sprawnie i bez opóźnień.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["Trudne zabrudzenia", "Presja terminu", "Poprawki po ekipach", "Elementy specjalne"],
          ctaLabel: "Skonsultuj bardziej wymagający zakres",
        },
      ],
    },
    {
      id: "floors",
      iconName: "grid3x3",
      label: "Posadzki",
      title: "Doczyszczanie posadzek",
      description:
        "Usługa dla obiektów, w których kluczowe jest przywrócenie estetyki i użytkowości powierzchni po pracach ekip, intensywnym użytkowaniu lub przed odbiorem.",
      levels: [
        {
          id: "basic",
          label: "Zakres podstawowy",
          budget: "od X zł / m²",
          description:
            "Dotyczy posadzek ze standardowym poziomem zabrudzenia, bez konieczności intensywnego doczyszczania lub wieloetapowej pracy.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "Ocenę stanu powierzchni.",
            "Maszynowe czyszczenie podstawowe.",
            "Usunięcie typowych zabrudzeń eksploatacyjnych.",
            "Odświeżenie wizualne posadzki.",
            "Przygotowanie powierzchni do dalszego użytkowania.",
          ],
          fitText:
            "Powierzchnia wymaga odświeżenia, ale nie ma trudnych zabrudzeń ani uszkodzeń wymagających osobnego podejścia.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["Rodzaj posadzki", "Metraż", "Stopień zabrudzenia", "Dostępność"],
          ctaLabel: "Zapytaj o posadzkę w podobnym stanie",
        },
        {
          id: "standard",
          label: "Zakres standardowy",
          budget: "od X do Y zł / m²",
          description:
            "Najczęstszy scenariusz przy posadzkach po pracach ekip lub przed oddaniem obiektu do użytkowania. Zakres zwykle wymaga dokładniejszego przejścia i lepszego dopracowania efektu końcowego.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "Dokładniejsze maszynowe doczyszczanie.",
            "Pracę na bardziej newralgicznych strefach.",
            "Usuwanie trudniejszych zabrudzeń typowych dla obiektu.",
            "Dopracowanie powierzchni pod odbiór lub użytkowanie.",
            "Poprawę estetyki w strefach reprezentacyjnych.",
          ],
          fitText:
            "Powierzchnia wygląda poprawnie, ale w praktyce wymaga jeszcze dokładnego przygotowania.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["Typ zabrudzeń", "Strefy krytyczne", "Metraż", "Tryb realizacji"],
          ctaLabel: "Poproś o orientacyjny koszt dla posadzki",
        },
        {
          id: "extended",
          label: "Zakres rozszerzony",
          budget: "od Y+ zł / m²",
          description:
            "Scenariusz dla bardziej wymagających posadzek, gdzie pojawiają się trudniejsze zabrudzenia, większy nacisk na efekt końcowy lub konieczność pracy w ograniczonym czasie.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "Intensywne doczyszczanie maszynowe.",
            "Pracę na bardziej problematycznych powierzchniach.",
            "Usuwanie trudniejszych śladów po pracach ekip.",
            "Przygotowanie posadzki do odbioru lub otwarcia obiektu.",
            "Większą precyzję w strefach widocznych dla klientów.",
          ],
          fitText:
            "Powierzchnia wymaga szerszego zakresu pracy i bardziej wymagającego podejścia operacyjnego.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["Charakter zabrudzeń", "Rodzaj materiału", "Czas realizacji", "Skala dopracowania"],
          ctaLabel: "Skonsultuj bardziej wymagającą powierzchnię",
        },
      ],
    },
    {
      id: "windows",
      iconName: "sparkles",
      label: "Witryny i przeszklenia",
      title: "Mycie witryn i przeszkleń",
      description:
        "Dla lokali, biur i obiektów, w których liczy się estetyka frontu, ekspozycji i stref widocznych dla klientów, najemców lub użytkowników.",
      levels: [
        {
          id: "basic",
          label: "Zakres podstawowy",
          budget: "od X / realizację lub cykl",
          description:
            "Dotyczy standardowego mycia dostępnych przeszkleń i witryn bez większych utrudnień oraz bez konieczności szerszego dopracowania całej strefy wejścia.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "Mycie szyb od strony dostępnej operacyjnie.",
            "Podstawowe doczyszczenie ram.",
            "Poprawę estetyki frontu lokalu.",
            "Przygotowanie obiektu do codziennego funkcjonowania.",
          ],
          fitText:
            "Zależy Ci na odświeżeniu witryny lub poprawie bieżącego wyglądu lokalu.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["Ilość szkła", "Wysokość", "Dostęp", "Częstotliwość"],
          ctaLabel: "Zapytaj o mycie podobnych przeszkleń",
        },
        {
          id: "standard",
          label: "Zakres standardowy",
          budget: "od X do Y / realizację lub cykl",
          description:
            "Najczęstszy scenariusz dla lokali przed otwarciem, po pracach wykończeniowych lub w przypadku większej liczby przeszkleń wymagających dokładniejszego dopracowania.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "Mycie szyb i witryn.",
            "Dokładniejsze doczyszczenie ram.",
            "Dopracowanie stref ekspozycyjnych.",
            "Poprawę estetyki frontu przed otwarciem lub odbiorem.",
            "Szerszy zakres niż standardowe mycie bieżące.",
          ],
          fitText:
            "Witryna ma być przygotowana do odbioru, otwarcia lub bardziej reprezentacyjnej ekspozycji.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["Rozmiar witryn", "Liczba elementów", "Stopień zabrudzenia", "Termin wykonania"],
          ctaLabel: "Poproś o wstępny koszt dla witryn",
        },
        {
          id: "extended",
          label: "Zakres rozszerzony",
          budget: "od Y+",
          description:
            "Scenariusz dla bardziej wymagających przeszkleń, większej skali realizacji lub sytuacji, w których liczy się szybkie przygotowanie obiektu do otwarcia, przekazania lub ważnego terminu.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "Większą liczbę przeszkleń.",
            "Dokładniejsze doczyszczanie wymagających elementów.",
            "Pracę przy bardziej złożonym dostępie.",
            "Dopracowanie ekspozycji i frontu obiektu.",
            "Działanie pod presją terminu lub przy większej liczbie stref.",
          ],
          fitText:
            "Witryny są ważną częścią odbioru wizualnego obiektu, a zakres wymaga większej precyzji lub szybkiej realizacji.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["Skala przeszkleń", "Dostęp techniczny", "Złożoność frontu", "Pilność realizacji"],
          ctaLabel: "Skonsultuj bardziej wymagający zakres przeszkleń",
        },
      ],
    },
    {
      id: "cyclical",
      iconName: "building2",
      label: "Obsługa cykliczna",
      title: "Obsługa cykliczna i serwis",
      description:
        "Dla klientów, którzy chcą utrzymać estetykę obiektu w regularnym rytmie i nie wracać za każdym razem do organizowania usługi od początku.",
      levels: [
        {
          id: "basic",
          label: "Zakres podstawowy",
          budget: "od X / miesiąc lub cykl",
          description:
            "Najprostszy model cyklicznej obsługi dla obiektów, które wymagają regularnego utrzymania wybranych stref bez szerokiego zakresu dodatkowych prac.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "Ustalony rytm wizyt.",
            "Podstawowy zakres prac w stałych punktach obiektu.",
            "Utrzymanie estetyki w standardowym modelu.",
            "Przewidywalny przebieg współpracy.",
          ],
          fitText:
            "Potrzebujesz regularności i prostego modelu działania bez większej zmienności zakresu.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["Częstotliwość", "Liczba stref", "Rodzaj powierzchni", "Dostępność obiektu"],
          ctaLabel: "Zapytaj o regularną obsługę",
        },
        {
          id: "standard",
          label: "Zakres standardowy",
          budget: "od X do Y / miesiąc lub cykl",
          description:
            "Najczęstszy scenariusz dla klientów, którzy chcą utrzymać spójny standard estetyczny obiektu i objąć współpracą większą część istotnych stref.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "Regularne wizyty w ustalonym rytmie.",
            "Szerszy zakres prac niż w wariancie podstawowym.",
            "Lepsze dopracowanie stref widocznych dla klientów i użytkowników.",
            "Bardziej przewidywalny poziom utrzymania obiektu.",
          ],
          fitText:
            "Liczy się stały standard i ograniczenie sytuacji, w których trzeba reagować dopiero wtedy, gdy problem jest już widoczny.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["Częstotliwość wejść", "Skala obiektu", "Liczba powierzchni", "Oczekiwany standard"],
          ctaLabel: "Poproś o model obsługi dla obiektu",
        },
        {
          id: "extended",
          label: "Zakres rozszerzony",
          budget: "od Y+",
          description:
            "Scenariusz dla obiektów, gdzie utrzymanie estetyki ma większe znaczenie operacyjne lub wizerunkowe, a współpraca wymaga większej elastyczności i szerszego zakresu działań.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "Regularny, szerszy zakres prac.",
            "Większą elastyczność organizacyjną.",
            "Obsługę ważniejszych stref obiektu.",
            "Lepsze przygotowanie obiektu na wzmożony ruch lub odbiory.",
            "Bardziej uporządkowany model współpracy.",
          ],
          fitText:
            "Obiekt ma większe znaczenie reprezentacyjne albo wymaga wyższego poziomu przewidywalności i gotowości.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["Częstotliwość", "Skala obiektu", "Poziom oczekiwań", "Strefy krytyczne"],
          ctaLabel: "Skonsultuj szerszy model współpracy",
        },
      ],
    },
  ],
  factorsTitle: "Co wpływa na finalną wycenę",
  factorsDescription:
    "Końcowy koszt zależy między innymi od typu obiektu, metrażu, stopnia zabrudzenia, rodzaju powierzchni, liczby przeszkleń, gotowości obiektu do wejścia oraz terminu realizacji. Pokazane poziomy pomagają oszacować rząd wielkości budżetu, ale nie zastępują dokładnej wyceny.",
  footerTitle: "Nie masz pewności, który scenariusz najlepiej pasuje do Twojego obiektu?",
  footerDescription:
    "Opisz zakres, a wskażemy najbliższy wariant i przygotujemy wstępną wycenę.",
  footerPrimaryCta: "Poproś o wstępną wycenę",
};

const showcaseContent: ShowcaseSectionContent = {
  kickerLabel: "KIEDY TAKA WSP\u00d3\u0141PRACA MA SENS",
  titleLines: ["Najlepiej dzia\u0142amy tam,", "gdzie liczy si\u0119 co\u015b wi\u0119cej ni\u017c sama cena"],
  description:
    "To dobry model dla firm i obiekt\u00f3w, w kt\u00f3rych wa\u017cne s\u0105 termin, przewidywalno\u015b\u0107, odpowiedzialno\u015b\u0107 za efekt i mo\u017cliwo\u015b\u0107 szybkiego procedowania decyzji po stronie klienta.",
  items: [
    {
      tag: "ODBI\u00d3R / OTWARCIE",
      title: "Gdy obiekt trzeba przygotowa\u0107 pod odbi\u00f3r, przekazanie albo start dzia\u0142ania",
      description:
        "To dobry kierunek tam, gdzie liczy si\u0119 nie tylko wykonanie prac, ale te\u017c spos\u00f3b doprowadzenia obiektu do stanu ko\u0144cowego.",
      result:
        "Sprawdza si\u0119, gdy efekt ma by\u0107 gotowy do pokazania dalej, a nie tylko mniej wi\u0119cej zrobiony.",
    },
    {
      tag: "DECYZJA W FIRMIE",
      title: "Gdy potrzebujesz wide\u0142ek i materia\u0142u, kt\u00f3ry mo\u017cna szybko przekaza\u0107 dalej",
      description:
        "Je\u015bli po Twojej stronie sprawa trafia do prze\u0142o\u017conego, dzia\u0142u zakup\u00f3w albo zarz\u0105du, wa\u017cne jest szybkie uporz\u0105dkowanie kosztu i modelu realizacji.",
      result:
        "To u\u0142atwia ocen\u0119, czy temat mie\u015bci si\u0119 w skali i czy warto go dalej procedowa\u0107.",
    },
    {
      tag: "ODPOWIEDZIALNO\u015a\u0106",
      title: "Gdy zale\u017cy Ci na wykonawcy, kt\u00f3ry przejmie organizacj\u0119 po swojej stronie",
      description:
        "W wielu przypadkach klient nie szuka najta\u0144szej ekipy, tylko partnera, kt\u00f3ry ograniczy chaos, pilnowanie i wracanie do podstawowych ustale\u0144.",
      result:
        "Ten model dzia\u0142a najlepiej tam, gdzie wa\u017cna jest przewidywalno\u015b\u0107, a nie tylko sama obecno\u015b\u0107 ekipy.",
    },
    {
      tag: "POWTARZALNO\u015a\u0106",
      title: "Gdy standard ma by\u0107 utrzymany w jednej lokalizacji albo w wi\u0119kszej skali",
      description:
        "To dobry kierunek dla obiekt\u00f3w i sieci, gdzie istotna jest por\u00f3wnywalno\u015b\u0107 efektu, jasna \u015bcie\u017cka kontaktu i powtarzalny model wsp\u00f3\u0142pracy.",
      result:
        "Sprawdza si\u0119 tam, gdzie liczy si\u0119 nie jednorazowy zryw, tylko stabilne dowo\u017cenie ustalonego poziomu.",
    },
    {
      tag: "JAKO\u015a\u0106 NAD CEN\u0104",
      title: "Gdy wa\u017cniejsze od najni\u017cszej stawki s\u0105 termin, bezpiecze\u0144stwo i rezultat",
      description:
        "Je\u015bli por\u00f3wnujesz nie tylko jedn\u0105 liczb\u0119, ale te\u017c logik\u0119 realizacji, odpowiedzialno\u015b\u0107 i ryzyko po stronie obiektu, ta wsp\u00f3\u0142praca ma wi\u0119kszy sens.",
      result: "To model dla klient\u00f3w, kt\u00f3rzy patrz\u0105 szerzej ni\u017c tylko na najta\u0144sz\u0105 wycen\u0119.",
    },
    {
      tag: "NIE TEN MODEL",
      title: "To mo\u017ce nie by\u0107 najlepszy kierunek, je\u015bli liczy si\u0119 wy\u0142\u0105cznie najni\u017csza cena",
      description:
        "Nie jeste\u015bmy dobrym wyborem tam, gdzie zakres ma by\u0107 wyceniony na ju\u017c, bez podstawowych danych, bez uwzgl\u0119dnienia logistyki, terminu i ryzyk na obiekcie.",
      result:
        "Ten model najlepiej dzia\u0142a tam, gdzie cena ma by\u0107 osadzona w realnym zakresie, a nie oderwana od warunk\u00f3w realizacji.",
    },
  ],
};

const contactContent: ContactSectionContent = {
  kickerLabel: "SPRAWD\u0179MY SKAL\u0118 REALIZACJI",
  title: "Wy\u015blij dane do orientacyjnej wyceny",
  description:
    "Podaj typ us\u0142ugi, typ obiektu, lokalizacj\u0119, metra\u017c albo orientacyjny zakres, cel realizacji i termin. Je\u015bli temat mie\u015bci si\u0119 w naszym modelu pracy, wr\u00f3cimy z orientacyjnymi wide\u0142kami i jasnym kolejnym krokiem.",
  chips: [
    { label: "Orientacyjne wide\u0142ki" },
    { label: "Typ us\u0142ugi" },
    { label: "Skala obiektu" },
    { label: "Cel realizacji" },
    { label: "Termin i logistyka" },
    { label: "Szybka kwalifikacja", accent: true },
  ],
  form: {
    emailLabel: "Adres e-mail",
    emailPlaceholder: "Tw\u00f3j adres e-mail",
    phoneLabel: "Numer telefonu",
    phonePlaceholder: "Tw\u00f3j numer telefonu",
    topicLabel: "Zakres i za\u0142o\u017cenia",
    topicPlaceholder:
      "Jaka us\u0142uga, jaki obiekt, jaki metra\u017c lub zakres, jaki cel realizacji i na kiedy",
    consentText:
      "Wyra\u017cam zgod\u0119 na przetwarzanie moich danych osobowych w celu obs\u0142ugi zg\u0142oszenia oraz na kontakt handlowy drog\u0105 elektroniczn\u0105 na podany adres e-mail. Polityka prywatno\u015bci.",
    submitLabel: "Sprawd\u017a orientacyjne wide\u0142ki",
  },
  meta: {
    avatars: ["A", "B", "C", "D", "E", "F"],
    text: "Zesp\u00f3\u0142 operacyjny po stronie B2B",
  },
};

export default function CennikPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <PagesHero content={defaultContent} />
        <ScenarioBudgetSection content={scenarioBudgetContent} />
        <ShowcaseSection content={showcaseContent} />
        <ContactSection content={contactContent} />
      </main>
      <Footer />
    </div>
  );
}
