import type { Metadata } from "next";
import CaseSection, {
  type CaseSectionContent,
} from "@/components/CaseSection/CaseSection";
import GallerySection, {
  type GallerySectionContent,
} from "@/components/GallerySection/GallerySection";
import ContactSection, {
  type ContactSectionContent,
} from "../../components/ContactSection/ContactSection";
import CtaSection, { type CtaSectionContent } from "../../components/CtaSection/CtaSection";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PagesHero, { type PagesHeroContent } from "../../components/PagesHero/PagesHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Realizacje sprzątania dla firm w całej Polsce | Domker",
  description:
    "Zobacz realizacje Domker: sprzątanie po budowie, witryny, posadzki i obsługa obiektów B2B. Konkretne zakresy, typy obiektów i efekty prac.",
};

const defaultContent: PagesHeroContent = {
  badge: "WYBRANE REALIZACJE",
  titleLines: ["Scenariusze współpracy", "z różnych typów obiektów"],
  description:
    "Poniżej pokazujemy przykłady realizacji z różnych typów obiektów i usług. Krótko: jaki był kontekst, co trzeba było zrobić i jaki efekt został dostarczony.",
  ctaLabel: "Omów podobny przypadek",
  ctaHref: "/kontakt",
};

const casesContent: CaseSectionContent = {
  kickerLabel: "WYBRANE REALIZACJE",
  titleLines: ["Wybrane realizacje", "z różnych scenariuszy współpracy"],
  description:
    "Przykłady są ułożone w tym samym rytmie: kontekst, zakres, rezultat i dalszy krok. Dzięki temu łatwiej porównać je do własnej sytuacji.",
  items: [
    {
      typeLabel: "Sprzątanie po budowie",
      title: "Blok mieszkalny Arkadia\n w Lubinie",
      contextLabel: "Kontekst",
      context: [
        "Blok liczący 85 mieszkań, dwie klatki schodowe oraz garaż podziemny.",
        "Prace porządkowe dopasowane do etapów odbiorowych: na początku pierwsza klatka schodowa, dwutygodniowa przerwa, następnie druga klatka i garaż podziemny.",
        "Realizacja usługi równolegle z pracami wykończeniowymi i poprawkowymi.",
        "Niektóre prace wewnątrz budynku należało wykonać w porach popołudniowych i nocnych.",
      ],
      scopeLabel: "Zakres",
      scope: [
        "Doczyszczenie oraz umycie obustronne okien i przeszkleń w całym budynku.",
        "Doczyszczenie oraz umycie obu klatek schodowych i komórek lokatorskich wraz z ciągami komunikacyjnymi.",
        "Odpylenie i umycie betonowej posadzki w garażu podziemnym, doczyszczenie bram garażowych oraz elementów podwieszanych do stropu.",
        "Umycie wszystkich drzwi od mieszkań, wejściowych do budynków i technicznych.",
        "Odkurzenie oraz uprzątnięcie posadzek anhydrytowych w mieszkaniach.",
        "Dopasowanie harmonogramu do prac poprawkowych i wykończeniowych.",
      ],
      resultLabel: "Rezultat",
      resultLead:
        "Etapowa realizacja ułożona pod odbiory i rytm inwestycji.",
      resultText:
        "Wejścia zostały rozpisane tak, żeby kolejne części budynku można było przygotowywać do odbiorów bez dokładania chaosu na końcówce realizacji.",
      ctaLabel: "Mam podobną sytuację",
      ctaHref: "/kontakt",
      media: {
        src: "/tlo.png",
        alt: "Sprzątanie po budowie bloku mieszkalnego w Lubinie",
      },
    },
    {
      typeLabel: "Utrzymanie czystości w punkcie fitness",
      title: "Siłownie FitStyle\n w dwóch województwach",
      contextLabel: "Kontekst",
      context: [
        "Metraże punktów fitness od 1200 do 2000 m².",
        "Bardzo duża liczba klientów korzystających w ciągu dnia z punktów wymaga odpowiedniego dostosowania godzin sprzątania.",
        "Punkty fitness muszą być utrzymane w higienicznym stanie, aby zapewnić bezpieczne warunki dla klientów.",
        "Każdy punkt, w którym realizujemy usługi, ma swój indywidualny układ, ilość maszyn i pomieszczeń, dlatego system sprzątania musi być dostosowany do każdego punktu z osobna.",
      ],
      scopeLabel: "Zakres",
      scope: [
        "Cykliczne utrzymanie porządku w ciągu dnia obejmuje mycie posadzek: PCV, gresu, mat oraz parkietu drewnianego.",
        "Zaplanowane regularne doczyszczanie armatury, fug oraz odpływów liniowych.",
        "Codzienna, kilkukrotna dezynfekcja powierzchni dotykanych przez klientów.",
        "Odkurzanie oraz maszynowe mycie posadzek w całym obiekcie.",
        "Coroczne odkurzanie elementów sufitowych oraz ściennych.",
        "Generalne sprzątanie po budowie i przed oddaniem nowych obiektów.",
      ],
      resultLabel: "Rezultat",
      resultLead:
        "Kompleksowa usługa porządkowa dla sieci z jednym punktem kontaktu.",
      resultText:
        "Cały temat utrzymania czystości został oddany jednemu profesjonalnemu dostawcy usług. Zmiany do systemu, zamówienie usług dodatkowych oraz zgłaszanie uwag następuje globalnie dla całej sieci w jednym miejscu.",
      ctaLabel: "Chcę ustawić stałą obsługę",
      ctaHref: "/kontakt",
      media: {
        src: "/tlo.png",
        alt: "Utrzymanie czystości w punktach fitness",
      },
      reverseOnDesktop: true,
    },
    {
      typeLabel: "Sprzątanie przed otwarciem punktów sieci handlowych",
      title: "Otwarcia sklepów\n Sinsay, Rossmann i CCC",
      contextLabel: "Kontekst",
      context: [
        "Metraże lokali od 600 do 2000 m².",
        "Jednolity system sprzątania i spodziewany efekt niezależnie od lokalizacji.",
        "Realizacja sprzątania w całej Polsce z reakcją na zamówienie usługi nawet do 24 godzin.",
        "Zakres sprzątania wymaga nowoczesnego sprzętu oraz stałego dostępu do ekip sprawdzonych i doświadczonych osób sprzątających.",
      ],
      scopeLabel: "Zakres",
      scope: [
        "Maszynowe czyszczenie posadzek, często kilkukrotne.",
        "Odplamianie powierzchni z zabrudzeń pobudowlanych: klej, tynk, farba i inne pozostałości.",
        "Doczyszczenie ram oraz szyb witryny.",
        "Wysokościowe odpylanie lamp oraz konstrukcji przyczepionych do sufitu.",
        "Mycie zaplecza, przymierzalni oraz regałów magazynowych.",
        "Inne prace zlecone konieczne do uruchomienia nowego punktu sieci.",
      ],
      resultLabel: "Rezultat",
      resultLead:
        "Jednolita jakość usług na terenie całego kraju z jednym punktem kontaktu.",
      resultText:
        "Bez względu na lokalizację, metraż oraz ilość zleceń w jednym terminie klient ma zawsze pewność, że punkt sieci handlowej zostanie otwarty na czas i będzie gotowy na przyjęcie klientów.",
      ctaLabel: "Mam podobny temat",
      ctaHref: "/kontakt",
      media: {
        src: "/tlo.png",
        alt: "Sprzątanie przed otwarciem sklepów sieci handlowych",
      },
    },
  ],
};

const galleryContent: GallerySectionContent = {
  kickerLabel: "GALERIA REALIZACJI",
  titleLines: [
    "Wybrane wejścia, które pokazują",
    "jak pracujemy pod termin i standard",
  ],
  description:
    "To nie jest pełna galeria wszystkich zdjęć, tylko kuratorowany przegląd realizacji z różnych kategorii usług. Filtrujesz po typie prac i od razu widzisz, w jakich warunkach prowadziliśmy wejście, jaki był zakres i co trzeba było dowieźć na końcu.",
  tags: [
    { id: "all", label: "Wszystko", iconName: "layoutGrid" },
    { id: "construction", label: "Po budowie", iconName: "hardHat" },
    { id: "floors", label: "Posadzki", iconName: "grid3x3" },
    { id: "cyclical", label: "Cykliczne", iconName: "building2" },
    { id: "windows", label: "Mycie okien i witryn", iconName: "sparkles" },
  ],
  items: [
    {
      id: "kubiak-okna-odbior",
      slug: "kubiak-mycie-okien-przed-odbiorami",
      title: "Kubiak — mycie okien przed odbiorami mieszkań",
      categoryLabel: "Mycie okien i witryn",
      categoryIconName: "sparkles",
      description:
        "216 skrzydeł okiennych do domknięcia w trzy dni, z pracą od świtu do zmierzchu i wieczornym doczyszczaniem detali.",
      imageSrc: "/realizacje/covers/kubiak.webp",
      imageAlt: "Mycie okien po budowie przed odbiorami mieszkań",
      tags: ["construction", "windows"],
      gallery: [
        { src: "/realizacje/gallery/kubiak/1.webp", alt: "Kubiak — zdjęcie 1" },
        { src: "/realizacje/gallery/kubiak/2.webp", alt: "Kubiak — zdjęcie 2" },
        { src: "/realizacje/gallery/kubiak/3.webp", alt: "Kubiak — zdjęcie 3" },
      ],
      detail: {
        clientLabel: "Usługi Ogólnobudowlane Damian Kubiak",
        dateLabel: "03.2024",
        orderTypeLabel: "Mycie okien po budowie",
        summary:
          "Realizacja pod bardzo krótki, trzydniowy termin odbiorów mieszkań. Pracę zorganizowaliśmy od świtu do zmierzchu, a po zmroku domykaliśmy zadania niewymagające światła dziennego.",
        scopeLabel:
          "Obustronne mycie szyb i ram, usuwanie klejów, tynków, farb i taśm po budowie na 216 skrzydłach okiennych.",
        effectLabel:
          "Klient utrzymał termin przekazywania mieszkań, a realizacja otworzyła dalszą współpracę przy obsłudze jego biura.",
      },
    },
    {
      id: "aquapark-standard-sanitarny",
      slug: "aquapark-wejscie-pod-sanitarny-standard-odbioru",
      title: "Aquapark — wejście pod sanitarny standard odbioru",
      categoryLabel: "Po budowie",
      categoryIconName: "hardHat",
      description:
        "Obiekt basenowy prowadzony równolegle z poprawkami budowlanymi, pod wysokie wymagania higieniczne i presję odbiorów.",
      imageSrc: "/realizacje/covers/aquapark.webp",
      imageAlt: "Sprzątanie po remoncie aquaparku przed odbiorem",
      tags: ["construction", "floors"],
      gallery: [
        { src: "/realizacje/gallery/aquapark/1.webp", alt: "Aquapark — zdjęcie 1" },
        { src: "/realizacje/gallery/aquapark/2.webp", alt: "Aquapark — zdjęcie 2" },
        { src: "/realizacje/gallery/aquapark/3.webp", alt: "Aquapark — zdjęcie 3" },
        { src: "/realizacje/gallery/aquapark/4.webp", alt: "Aquapark — zdjęcie 4" },
        { src: "/realizacje/gallery/aquapark/5.webp", alt: "Aquapark — zdjęcie 5" },
        { src: "/realizacje/gallery/aquapark/6.webp", alt: "Aquapark — zdjęcie 6" },
      ],
      detail: {
        clientLabel: "Warbud S.A.",
        dateLabel: "06–07.2024",
        orderTypeLabel: "Sprzątanie po remoncie aquaparku",
        summary:
          "Prace prowadziliśmy równolegle z poprawkami budowlanymi. Technologię usuwania fugi epoksydowej konsultowaliśmy z producentem, a wejścia organizowaliśmy w zmianach porannych i nocnych.",
        scopeLabel:
          "Doczyszczanie gresu z zabrudzeń pobudowlanych, czyszczenie niecki basenowej oraz mycie lamp na wysokości około 7 metrów.",
        effectLabel:
          "Generalny wykonawca oddał czysty obiekt basenowy przygotowany do odbiorów sanitarnych i obsługi klientów.",
      },
    },
    {
      id: "malomice-trzy-bloki",
      slug: "malomice-etapowe-sprzatanie-trzech-blokow",
      title: "Małomice — etapowe sprzątanie 3 bloków",
      categoryLabel: "Po budowie",
      categoryIconName: "hardHat",
      description:
        "Etapowe wejścia tylko do gotowych mieszkań, stały kontakt z inwestorem i bezpieczny dobór chemii do trudnych zabrudzeń.",
      imageSrc: "/realizacje/covers/malomice.webp",
      imageAlt: "Sprzątanie po budowie osiedla Małomice w Lubinie",
      tags: ["construction", "windows"],
      gallery: [
        { src: "/realizacje/gallery/malomice/1.webp", alt: "Małomice — zdjęcie 1" },
        { src: "/realizacje/gallery/malomice/2.webp", alt: "Małomice — zdjęcie 2" },
        { src: "/realizacje/gallery/malomice/3.webp", alt: "Małomice — zdjęcie 3" },
        { src: "/realizacje/gallery/malomice/4.webp", alt: "Małomice — zdjęcie 4" },
        { src: "/realizacje/gallery/malomice/5.webp", alt: "Małomice — zdjęcie 5" },
        { src: "/realizacje/gallery/malomice/6.webp", alt: "Małomice — zdjęcie 6" },
      ],
      detail: {
        clientLabel: "ZUW Urbex Sp. z o.o.",
        dateLabel: "08.2024",
        orderTypeLabel: "Sprzątanie po budowie — 3 bloki, os. Małomice",
        summary:
          "Prace prowadziliśmy etapami, wchodząc wyłącznie do mieszkań gotowych do realizacji. W tle była bieżąca koordynacja z inwestorem i dobór bezpiecznej chemii do ram, klatek oraz farby lateksowej.",
        scopeLabel:
          "Mycie okien i ram, usuwanie zabrudzeń poremontowych, doczyszczanie klatek, komórek i pomieszczeń technicznych oraz mycie drzwi w 68 mieszkaniach.",
        effectLabel:
          "Deweloper mógł terminowo rozpocząć przekazywanie mieszkań, a realizacja przełożyła się na dalszą współpracę przy kolejnych inwestycjach.",
      },
    },
    {
      id: "sor-legnica-odbior",
      slug: "sor-legnica-przygotowanie-oddzialu-do-odbioru",
      title: "SOR Legnica — przygotowanie oddziału do odbioru",
      categoryLabel: "Po budowie",
      categoryIconName: "hardHat",
      description:
        "Mocna presja czasu, większy zespół w wydłużonych godzinach i technologia dobrana bezpiecznie do wykładziny PCV.",
      imageSrc: "/realizacje/covers/sor-legnica.webp",
      imageAlt: "Przygotowanie SOR w Legnicy do odbioru",
      tags: ["construction", "floors", "windows"],
      gallery: [
        { src: "/realizacje/gallery/sor-legnica/1.webp", alt: "SOR Legnica — zdjęcie 1" },
        { src: "/realizacje/gallery/sor-legnica/2.webp", alt: "SOR Legnica — zdjęcie 2" },
        { src: "/realizacje/gallery/sor-legnica/3.webp", alt: "SOR Legnica — zdjęcie 3" },
        { src: "/realizacje/gallery/sor-legnica/4.webp", alt: "SOR Legnica — zdjęcie 4" },
        { src: "/realizacje/gallery/sor-legnica/5.webp", alt: "SOR Legnica — zdjęcie 5" },
        { src: "/realizacje/gallery/sor-legnica/6.webp", alt: "SOR Legnica — zdjęcie 6" },
      ],
      detail: {
        clientLabel: "ZUW Urbex Sp. z o.o.",
        dateLabel: "08.2025",
        orderTypeLabel: "Przygotowanie SOR w Legnicy do odbioru",
        summary:
          "Pod bardzo mocny termin zaangażowaliśmy większy zespół pracujący w wydłużonych godzinach. Kluczowe było doczyszczenie dużych powierzchni PCV bez ryzyka uszkodzenia materiału.",
        scopeLabel:
          "Mycie okien i ram, doczyszczenie wejścia do SOR, około 2000 m² wykładziny PCV, mycie drzwi, parapetów, grzejników, kontaktów i przygotowanie całego oddziału do odbioru.",
        effectLabel:
          "SOR został terminowo przekazany i oddany do użytkowania, co wsparło pozytywny odbiór inwestycji przez szpital.",
      },
    },
    {
      id: "psp-zary-przeszklenia",
      slug: "psp-zary-doczyszczenie-duzych-przeszklen",
      title: "Komenda PSP — doczyszczenie dużych przeszkleń",
      categoryLabel: "Mycie okien i witryn",
      categoryIconName: "sparkles",
      description:
        "Duże przeszklenia po budowie, praca na wysokości i wejście z wykorzystaniem zwyżki oraz zespołu z uprawnieniami.",
      imageSrc: "/realizacje/covers/psp-zary.webp",
      imageAlt: "Doczyszczanie dużych przeszkleń w komendzie PSP",
      tags: ["construction", "windows"],
      gallery: [
        { src: "/realizacje/gallery/psp-zary/1.webp", alt: "PSP Żary — zdjęcie 1" },
        { src: "/realizacje/gallery/psp-zary/2.webp", alt: "PSP Żary — zdjęcie 2" },
        { src: "/realizacje/gallery/psp-zary/3.webp", alt: "PSP Żary — zdjęcie 3" },
        { src: "/realizacje/gallery/psp-zary/4.webp", alt: "PSP Żary — zdjęcie 4" },
        { src: "/realizacje/gallery/psp-zary/5.webp", alt: "PSP Żary — zdjęcie 5" },
      ],
      detail: {
        clientLabel: "Państwowa Straż Pożarna w Żarach",
        dateLabel: "04.2025",
        orderTypeLabel: "Doczyszczanie okien po budowie komendy PSP",
        summary:
          "Standardowe wejście z drabiny byłoby zbyt wolne i mniej bezpieczne. Zamówiliśmy zwyżkę i skierowaliśmy przeszkolony zespół z badaniami wysokościowymi oraz szkoleniami BHP.",
        scopeLabel:
          "Obustronne mycie okien i ram po budowie oraz usuwanie klejów, tynków, farb i taśm z dużych przeszkleń.",
        effectLabel:
          "Nowy budynek PSP został przekazany z estetycznie doczyszczoną fasadą, co podniosło odbiór całego obiektu.",
      },
    },
    {
      id: "event-ccc-obsluga",
      slug: "event-ccc-obsluga-czystosci-podczas-imprezy-masowej",
      title: "Event CCC — czystość dla 800 uczestników",
      categoryLabel: "Cykliczne",
      categoryIconName: "building2",
      description:
        "Obsługa wydarzenia masowego z zapleczem sanitarnym, logistyką odpadów i zespołem reagującym na bieżąco przez cały event.",
      imageSrc: "/realizacje/covers/event-ccc.webp",
      imageAlt: "Obsługa czystości podczas imprezy masowej",
      tags: ["cyclical"],
      gallery: [
        { src: "/realizacje/gallery/event-ccc/1.webp", alt: "Event CCC — zdjęcie 1" },
        { src: "/realizacje/gallery/event-ccc/2.webp", alt: "Event CCC — zdjęcie 2" },
        { src: "/realizacje/gallery/event-ccc/3.webp", alt: "Event CCC — zdjęcie 3" },
        { src: "/realizacje/gallery/event-ccc/4.webp", alt: "Event CCC — zdjęcie 4" },
      ],
      detail: {
        clientLabel: "Agencja reklamowa Goody dla wydarzenia w CCC",
        dateLabel: "09.2024",
        orderTypeLabel: "Obsługa czystości podczas imprezy masowej",
        summary:
          "Dla wydarzenia na około 800 osób zabezpieczyliśmy zaplecze sanitarne, teren imprezy i logistykę odpadów. Zespół przez cały czas reagował na potrzeby gości i opróżniał pojemniki.",
        scopeLabel:
          "Utrzymanie czystości w strefie wydarzenia, obsługa sanitariatów, pojemników 120 l i kontenera 10 m³ oraz sprzątanie przed i po imprezie.",
        effectLabel:
          "Wydarzenie przebiegło w uporządkowanym otoczeniu bez dokładania chaosu organizatorowi w trakcie trwania imprezy.",
      },
    },
    {
      id: "retail-otwarcia-caly-kraj",
      slug: "sieci-retail-szybkie-wejscia-pod-otwarcia",
      title: "Sieci retail — szybkie wejścia pod otwarcia",
      categoryLabel: "Po budowie",
      categoryIconName: "hardHat",
      description:
        "Model współpracy dla salonów sieciowych: wejścia w krótkich oknach, często w nocy, z powtarzalnym standardem przygotowania sklepu.",
      imageSrc: "/realizacje/covers/retail-ccc.webp",
      imageAlt: "Przygotowanie salonu sieciowego do otwarcia",
      tags: ["construction", "cyclical", "windows"],
      gallery: [
        { src: "/realizacje/gallery/retail-ccc/1.webp", alt: "Retail CCC — zdjęcie 1" },
        { src: "/realizacje/gallery/retail-ccc/2.webp", alt: "Retail CCC — zdjęcie 2" },
        { src: "/realizacje/gallery/retail-ccc/3.webp", alt: "Retail CCC — zdjęcie 3" },
      ],
      detail: {
        clientLabel: "Sieci retail we współpracy z generalnymi wykonawcami",
        dateLabel: "Lata współpracy",
        orderTypeLabel: "Przygotowanie salonów sieciowych do otwarcia",
        summary:
          "Realizujemy wejścia w całej Polsce, często nocą i w krótkich oknach czasowych. Łączymy prace po budowie z przygotowaniem sklepów do otwarcia pod ujednolicony standard.",
        scopeLabel:
          "Trzyetapowe sprzątanie przed otwarciami: posadzki, zaplecza, przymierzalnie, lustra, meble, oświetlenie i witryny.",
        effectLabel:
          "Sieć dostaje powtarzalny model wejścia i jednolity standard przygotowania salonów niezależnie od miasta.",
      },
    },
    {
      id: "retail-witryny-standard",
      slug: "sieci-retail-cykliczne-witryny-i-jednolity-standard",
      title: "Sieci retail — witryny i standard w działających sklepach",
      categoryLabel: "Mycie okien i witryn",
      categoryIconName: "sparkles",
      description:
        "Cykliczne wejścia do działających salonów z powtarzalnym myciem witryn i szybkim reagowaniem na potrzeby wielu lokalizacji.",
      imageSrc: "/realizacje/covers/retail-rossmann.webp",
      imageAlt: "Cykliczne mycie witryn w sieci retail",
      tags: ["cyclical", "windows"],
      gallery: [
        { src: "/realizacje/gallery/retail-rossmann/1.webp", alt: "Retail Rossmann — zdjęcie 1" },
        { src: "/realizacje/gallery/retail-rossmann/2.webp", alt: "Retail Rossmann — zdjęcie 2" },
        { src: "/realizacje/gallery/retail-rossmann/3.webp", alt: "Retail Rossmann — zdjęcie 3" },
        { src: "/realizacje/gallery/retail-rossmann/4.webp", alt: "Retail Rossmann — zdjęcie 4" },
        { src: "/realizacje/gallery/retail-rossmann/5.webp", alt: "Retail Rossmann — zdjęcie 5" },
        { src: "/realizacje/gallery/retail-rossmann/6.webp", alt: "Retail Rossmann — zdjęcie 6" },
      ],
      detail: {
        clientLabel: "Sieci retail: Rossmann, LPP, CCC",
        dateLabel: "Lata współpracy",
        orderTypeLabel: "Cykliczne mycie witryn i bieżąca obsługa",
        summary:
          "Dzięki sieci współpracowników, ujednoliconemu sprzętowi i prostym procedurom zapewniamy powtarzalny efekt witryn i szybkie wejścia nawet w 24 godziny.",
        scopeLabel:
          "Cykliczne mycie witryn, mycie witryn po budowie oraz bieżące wejścia uzupełniające w działających lokalach handlowych.",
        effectLabel:
          "Marka utrzymuje spójny standard ekspozycji i czystości witryn w wielu lokalizacjach bez rozbijania tego na lokalne ustalenia.",
      },
    },
    {
      id: "bateko-posadzka-polimer",
      slug: "bateko-doczyszczanie-posadzki-i-polimeryzacja",
      title: "BatEko — doczyszczanie posadzki i polimeryzacja",
      categoryLabel: "Posadzki",
      categoryIconName: "grid3x3",
      description:
        "Wieloletnie zabrudzenia i pył grafitowy wymagały specjalistycznej chemii, maszynowego doczyszczenia i zabezpieczenia powierzchni.",
      imageSrc: "/realizacje/covers/bateko.webp",
      imageAlt:
        "Maszynowe doczyszczanie posadzki i polimeryzacja w obiekcie przemysłowym",
      tags: ["floors", "cyclical"],
      gallery: [
        { src: "/realizacje/gallery/bateko/1.webp", alt: "BatEko — zdjęcie 1" },
        { src: "/realizacje/gallery/bateko/2.webp", alt: "BatEko — zdjęcie 2" },
        { src: "/realizacje/gallery/bateko/3.webp", alt: "BatEko — zdjęcie 3" },
        { src: "/realizacje/gallery/bateko/4.webp", alt: "BatEko — zdjęcie 4" },
        { src: "/realizacje/gallery/bateko/5.webp", alt: "BatEko — zdjęcie 5" },
        { src: "/realizacje/gallery/bateko/6.webp", alt: "BatEko — zdjęcie 6" },
      ],
      detail: {
        clientLabel: "BatEko Sp. z o.o.",
        dateLabel: "10.2025",
        orderTypeLabel: "Maszynowe czyszczenie posadzki i polimeryzacja",
        summary:
          "W obiekcie z przetwórstwem baterii mierzyliśmy się z mocno osadzonym pyłem grafitowym i wieloletnimi zabrudzeniami. Kluczowy był dobór chemii, procesu i późniejszego zabezpieczenia.",
        scopeLabel:
          "Maszynowe doczyszczanie posadzki oraz nałożenie warstwy polimeru zabezpieczającego pod dalszą eksploatację.",
        effectLabel:
          "Klient zyskał wyraźnie odświeżoną posadzkę i łatwiejsze codzienne utrzymanie obiektu, co rozszerzyło współpracę o stały serwis.",
      },
    },
  ],
};

const ctaContent: CtaSectionContent = {
  eyebrowText: "MASZ PODOBNY PRZYPADEK?",
  title: "Opisz obiekt, termin i kontekst, a dobierzemy właściwy scenariusz",
  description:
    "Nie musisz mieć gotowego briefu. Wystarczy typ obiektu, lokalizacja, termin i kilka zdań o sytuacji. Jeśli masz zdjęcia, dołącz je od razu.",
  buttonLabel: "Napisz do nas",
  buttonHref: "#kontakt",
  avatars: ["A", "B", "C", "D", "E", "F", "G"],
};

const contactContent: ContactSectionContent = {
  kickerLabel: "SKONTAKTUJ SIĘ",
  title: "Napisz, czego dotyczy temat, a poprowadzimy Cię dalej",
  description:
    "Opisz sytuację jednym zdaniem. Jeśli chodzi o jeden obiekt, podaj typ, lokalizację i termin. Jeśli temat dotyczy kilku punktów, dopisz liczbę lokalizacji i miasta.",
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

export default function RealizacjePage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <PagesHero content={defaultContent} />
        <CaseSection content={casesContent} />
        <GallerySection content={galleryContent} />
        <CtaSection content={ctaContent} />
        <ContactSection content={contactContent} />
      </main>
      <Footer />
    </div>
  );
}
