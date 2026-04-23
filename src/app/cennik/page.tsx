import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Cennik usług sprzątania dla firm i witryn | Domker",
  description:
    "Orientacyjne widełki cenowe i zasady wyceny usług Domker. Sprawdź, jak liczymy koszt sprzątania po budowie, witryn, posadzek i obsługi cyklicznej.",
};

const defaultContent: PagesHeroContent = {
  badge: "ORIENTACYJNE BUD\u017bETY I SPOS\u00d3B WYCENY",
  titleLines: ["Jak liczymy cen\u0119", "i kiedy wycena ma sens"],
  emphasisSuffix: "/",
  description:
    "Podajemy orientacyjne wide\u0142ki, \u017ceby od razu by\u0142o wiadomo, czy temat mie\u015bci si\u0119 w Twojej skali. Ostateczna wycena zale\u017cy od zakresu, logistyki, standardu ko\u0144cowego i terminu realizacji, nie od przypadkowego cennika.",
  ctaLabel: "Sprawd\u017a, czy to temat w naszej skali",
      ctaHref: "/realizacje",
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
      ctaHref: "/realizacje",
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
  ctaHref: "/kontakt",
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
  ctaHref: "/kontakt",
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
  ctaHref: "/kontakt",
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
      label: "Sprzątanie po budowie i wykończeniu",
      title: "Sprzątanie po budowie i wykończeniu",
      description:
        "Najczęściej dotyczy bloków mieszkalnych, budynków użyteczności publicznej, domów jednorodzinnych i w zabudowie szeregowej oraz punktów sieciowych takich jak drogerie, sklepy, punkty fitness, żłobki i restauracje.",
      levels: [
        {
          id: "basic",
          label: "Blok mieszkalny",
          budget: "od 390 zł mieszkanie (netto)",
          description:
            "Usługa kompleksowo przygotowuje obiekt do odbioru (urzędowego lub inwestorskiego) i dostosowana jest do bieżących warunków podczas budowy oraz sesji poprawkowych i wykończeniowych. Kierownik budowy ma stały dostęp do osoby decyzyjnej i rozdzielającej pracę, aby mieć wpływ na końcowy termin realizacji oraz organizację wszystkich prac prowadzonych przez wykonawców.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "obustronne mycie okien, ram i parapetów w mieszkaniach",
            "obustronne mycie przeszkleń na klatkach schodowych i wejściach do budynków",
            "mycie drzwi od mieszkań, skrytek lokatorskich, technicznych i bram garażowych",
            "doczyszczanie posadzek na klatkach schodowych, w garażach oraz pomieszczeniach technicznych",
            "usuwanie śladów pobudowlanych, czyli kleju, tynku, farby, taśm elewacyjnych itp.",
            "odkurzanie i odpylanie posadzek, usuwanie większych pozostałości po gruzie, resztek technicznych i komunalnych",
          ],
          fitText:
            "Odpowiadają za pełną realizację inwestycji — generalni wykonawcy oraz deweloperzy, którzy chcą oddać do użytku blok mieszkalny inwestorom w świeżym, „salonowym” stanie.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["termin wejścia", "stopień zabrudzenia", "dodatkowe pomieszczenia"],
          ctaLabel: "Zapytaj o podobny zakres",
  ctaHref: "/kontakt",
        },
        {
          id: "standard",
          label: "Inne budynki",
          budget: "od 15 zł/m2 (netto)",
          description:
            "Usługa kompleksowo przygotowuje obiekt do odbioru (urzędowego lub inwestorskiego) i dostosowana jest do bieżących warunków podczas budowy oraz sesji poprawkowych i wykończeniowych. Zamawiający ma stały dostęp do osoby decyzyjnej i rozdzielającej pracę, aby mieć wpływ na końcowy termin realizacji oraz organizację wszystkich prac prowadzonych przez wykonawców.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "obustronne mycie przeszkleń, ram i parapetów",
            "czyszczenie posadzek (gresowych, PCV, winylowych, betonowych)",
            "odpylanie i mycie elementów budynku (ruchomych oraz nieruchomych)",
            "usuwanie śladów pobudowlanych, czyli kleju, tynku, farby, taśm elewacyjnych itp.",
            "usuwanie większych odpadów pobudowlanych oraz komunalnych",
          ],
          fitText:
            "Są odpowiedzialni za oddanie do użytku budynków użyteczności publicznej, domów jednorodzinnych i w zabudowie szeregowej — najczęściej deweloperzy oraz generalni wykonawcy.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["termin wejścia", "stopień zabrudzenia", "wielkość przeszkleń"],
          ctaLabel: "Poproś o wstępną wycenę",
  ctaHref: "/kontakt",
        },
        {
          id: "extended",
          label: "Punkty sieciowe",
          budget: "do ustalenia indywidualnie",
          description:
            "Sprzątanie przed otwarciem nowego punktu sieciowego wykonywane jest w stałym, określonym zakresie na podstawie przedstawionego harmonogramu. Zlecane jest poprzez e-mail startowy, a zamawiający ma pewność jednolitej, powtarzalnej usługi na terenie całego kraju bez względu na metraż i lokalizację.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "maszynowe czyszczenie posadzki",
            "obustronne mycie witryny",
            "odpylanie lamp i elementów ściennych i sufitowych",
            "mycie zaplecza, regałów magazynowych oraz toalet",
            "odpylanie mebli, półek oraz innych powierzchni poziomych",
            "usuwanie śladów pobudowlanych, czyli kleju, tynku, farby, taśm elewacyjnych itp.",
          ],
          fitText:
            "Zarządzają sieciami handlowymi oraz usługowymi i odpowiadają za jakościową ekspansję na terenie całego kraju.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["ilość punktów w harmonogramie", "metraż", "zakres i ilość etapów"],
          ctaLabel: "Skonsultuj bardziej wymagający zakres",
  ctaHref: "/kontakt",
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
          label: "Maszynowe doczyszczanie",
          budget: "od 9 zł/m2 (netto)",
          description:
            "Regularna konserwacja posadzki zapewnia jej świeży wygląd i wydłuża jej przydatność do użytkowania. Odpowiednio dobrana technologia czyszczenia eliminuje ryzyko zniszczeń.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "odkurzanie posadzki na całym zamówionym metrażu",
            "usuwanie większych odpadów pobudowlanych oraz komunalnych",
            "dobór odpowiedniej chemii oraz maszyn do wykonania czyszczenia",
            "naniesienie chemii na czyszczoną powierzchnię",
            "maszynowe czyszczenie posadzki oraz w razie potrzeby ręczne doczyszczanie uporczywych plam",
            "odciągnięcie chemii oraz neutralizacja",
            "końcowe mycie posadzki na czysto",
          ],
          fitText:
            "Odpowiadają za utrzymanie czystości i/lub zarządzanie nieruchomością komercyjną albo prywatną i chcą zapewnić kompleksową czystość oraz świeżość.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["termin wejścia", "stopień zabrudzenia", "stopień złożoności"],
          ctaLabel: "Zapytaj o posadzkę w podobnym stanie",
  ctaHref: "/kontakt",
        },
        {
          id: "standard",
          label: "Maszynowe mycie",
          budget: "od 1,5 zł/m2 (netto)",
          description:
            "Maszynowe mycie posadzki jest bardziej wydajne oraz dokładne od mycia ręcznego mopem. Zastosowany pad zapewnia odpowiednie ścieranie bieżących zabrudzeń, a jednoczesne odkurzanie zabrudzeń i chemii sprawia, że proces jest szybki i nie wymaga wstrzymywania ruchu w obiekcie.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "dobór odpowiedniej chemii oraz wyposażenia do zamówionego zakresu",
            "przygotowanie maszyny",
            "wydzielenie mytej powierzchni",
            "maszynowe umycie posadzki",
            "ocena stanu posadzki i w razie konieczności powtórzenie procesu",
          ],
          fitText:
            "Chcą cyklicznie utrzymać czystość w obiekcie poprzez regularne mycie bieżących zabrudzeń.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["termin wejścia", "stopień złożoności", "rodzaj powierzchni"],
          ctaLabel: "Poproś o orientacyjny koszt dla posadzki",
  ctaHref: "/kontakt",
        },
        {
          id: "extended",
          label: "Polimeryzacja",
          budget: "od 12 zł/m2 (netto)",
          description:
            "Zabezpieczenie posadzki powłoką ochronną umożliwia łatwiejsze utrzymanie czystości na co dzień. Zabrudzenia nie przywierają tak bardzo do powłoki ochronnej jak do oryginalnej powierzchni. Powłoka chroni również przed odbarwieniami i mechanicznymi zniszczeniami.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "realizacja zakresu „Maszynowe doczyszczanie”",
            "naniesienie powłoki ochronnej (2–3 warstwy) w odpowiednich odstępach czasowych",
            "wykonanie polerowania (na życzenie klienta)",
          ],
          fitText:
            "Odpowiadają za czystość posadzek PCV w szpitalach, przychodniach, punktach fitness i podobnych obiektach.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["usunięcie starej powłoki", "stopień złożoności", "pora wykonywania prac"],
          ctaLabel: "Skonsultuj bardziej wymagającą powierzchnię",
  ctaHref: "/kontakt",
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
          label: "Mycie witryny sklepowej",
          budget: "od 10 zł/m2 (netto)",
          description:
            "Witryna to pierwsze, co widzi klient jeszcze przed wejściem do lokalu. Jest wizytówką sklepu i zapowiada doświadczenie, które klient zastanie wewnątrz.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "ustalenie częstotliwości oraz zakresu mycia",
            "usunięcie pajęczyn oraz „kotów” z kurzu wokół witryny",
            "umycie szyb oraz ram witryny",
            "osuszenie powierzchni pod witryną",
          ],
          fitText:
            "Posiadają lokal usługowy lub sprzedażowy.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["częstotliwość", "dostęp do szyby", "stopień złożoności"],
          ctaLabel: "Zapytaj o mycie podobnych przeszkleń",
  ctaHref: "/kontakt",
        },
        {
          id: "standard",
          label: "Mycie przeszkleń wodą demineralizowaną",
          budget: "od 4,5 zł/m2 (netto)",
          description:
            "Wielkopowierzchniowe przeszklenia wymagają odpowiedniej techniki mycia, która zapewni sprawną realizację bez smug, rusztowań i przedłużających się prac psujących wygląd budynku, będącego wizytówką klienta.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "wizję lokalną przed realizacją i oznaczenie punktów dostępu do wody, kolejności wykonania oraz badanie twardości wody",
            "realizację mycia przy użyciu nowoczesnego sprzętu do mycia wodą demineralizowaną",
            "przekazanie umytych przeszkleń i potwierdzenie realizacji protokołem odbioru",
          ],
          fitText:
            "Zarządzają budynkami komercyjnymi oraz firmowymi i chcą zapewnić przejrzystość przeszkleń.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["termin wejścia", "zakres usługi", "metraż"],
          ctaLabel: "Poproś o wstępny koszt dla witryn",
  ctaHref: "/kontakt",
        },
        {
          id: "extended",
          label: "Mycie po budowie oraz usuwanie wyklejki",
          budget: "od 18 zł/m2 (netto)",
          description:
            "Wyklejka reklamowa zabezpiecza witrynę przez cały okres wykończenia lokalu i stanowi świetną powierzchnię reklamową. Jednak gdy przychodzi czas otwarcia, należy ją zdjąć, co często jest problematyczne, czasochłonne i grozi uszkodzeniem powierzchni szklanych. Odpowiednie usunięcie oraz umycie witryny gwarantuje udane otwarcie nowego punktu sieciowego.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "usunięcie wyklejki przy użyciu specjalistycznych narzędzi",
            "odpylenie szyby",
            "kilkukrotne obustronne umycie szyb oraz ram",
            "usunięcie specjalistycznym wyposażeniem śladów po klejach, farbach i tynku",
          ],
          fitText:
            "Odpowiadają za ekspansję sieci handlowych i otwieranie nowych punktów sieciowych.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["termin wejścia", "zakres usługi", "metraż"],
          ctaLabel: "Skonsultuj bardziej wymagający zakres przeszkleń",
  ctaHref: "/kontakt",
        },
      ],
      // TODO: Rozważyć osobny scenariusz po rozszerzeniu komponentu o większą liczbę poziomów:
      // label: "Mycie witryn dla sieci"
      // budget: "ustalany indywidualnie (netto)"
      // factors: ["częstotliwość", "ilość punktów", "partnerstwo"]
      // description:
      //   "Usługa mycia witryn dla sieci często obejmuje cykliczne mycie kilkuset punktów na terenie całego kraju w jednym czasie. Wymaga skoordynowania wielu ekip i zapewnienia wykonania mycia w terminie."
      // scopeItems: [
      //   "przyjęcie zlecenia i rozplanowanie tras wykonania",
      //   "wysłanie awizacji i dopasowanie godziny wykonania do obecności pracowników w sklepie",
      //   "obustronne umycie witryn i ram",
      //   "osuszenie posadzki pod witryną",
      //   "zbiorcze przesłanie wszystkich protokołów odbioru w terminie",
      // ]
      // fitText:
      //   "Zarządzają nieruchomościami sieci handlowych i odpowiadają za wykonywanie cyklicznych usług w terminie.",
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
          label: "Punkty fitness",
          budget: "od 46 zł/roboczogodzina (netto)",
          description:
            "Punkty fitness z racji swojego przeznaczenia należy utrzymywać w idealnie czystych i higienicznych warunkach. Wymusza to stosowanie planu higieny oraz częstych audytów czystości, aby zapewnić najwyższy poziom czystości.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "cykliczne sprzątanie całego obiektu",
            "regularną dezynfekcję powierzchni",
            "przygotowanie do otwarcia nowych punktów",
            "reagowanie na zgłoszenia i uwagi zamawiającego",
            "zapewnienie ciągłości usług",
          ],
          fitText:
            "Chcą zlecić kompleksowe utrzymanie czystości jednej firmie i móc zarządzać usługą poprzez jeden sposób kontaktu.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["ilość roboczogodzin", "zakres obsługi", "metraż"],
          ctaLabel: "Zapytaj o regularną obsługę",
  ctaHref: "/kontakt",
        },
        {
          id: "standard",
          label: "Biura i firmy",
          budget: "od 299 zł za wejście (netto)",
          description:
            "Codzienne użytkowanie powierzchni biurowych przez pracowników wymaga utrzymania stałej czystości. Regularne sprzątanie pozwala pracować w czystych i komfortowych warunkach.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [
            "cykliczne sprzątanie całego obiektu",
            "regularną dezynfekcję powierzchni",
            "organizację i wykonanie specyficznych usług sprzątania, takich jak odkurzanie wysokościowe, mycie przeszkleń wodą demineralizowaną czy pranie wykładzin",
            "utrzymanie ciągłości wykonywanych usług",
            "zapewnienie stałej kadry sprzątającej",
          ],
          fitText:
            "Chcą zlecić kompleksowe utrzymanie czystości jednej firmie i móc zarządzać usługą poprzez jeden sposób kontaktu.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["częstotliwość", "zakres usługi", "metraż"],
          ctaLabel: "Poproś o model obsługi dla obiektu",
  ctaHref: "/kontakt",
        },
        {
          id: "extended",
          label: "Inne obiekty",
          budget: "ustalane indywidualnie",
          description:
            "Specyficzne obiekty wymagają indywidualnego podejścia, dlatego usługa obejmuje zaprojektowanie indywidualnego systemu sprzątania i planu higieny.",
          scopeTitle: "Najczęściej obejmuje",
          scopeItems: [],
          fitText:
            "Chcą utrzymywać czystość w obiekcie, ale niekoniecznie wiedzą, jak się za to zabrać.",
          budgetLabel: "Orientacyjny budżet",
          factors: ["termin wejścia", "zakres usługi", "metraż"],
          ctaLabel: "Skonsultuj szerszy model współpracy",
  ctaHref: "/kontakt",
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
