/**
 * Alle Texte und Bildpfade der Seite an einer Stelle.
 *
 * Grundregel aus dem Produkt: Hier steht nur, was die App wirklich kann.
 * Keine Nutzerzahlen, keine Kundenstimmen, keine Zeitersparnis in Prozent.
 * Die Namen in den Bildschirmfotos sind erfunden, die Oberflaeche nicht.
 */

// Macht absolute Asset-Pfade base-sicher: lokal (base '/') unveraendert, auf
// GitHub Pages (base '/allindrive-studio/') korrekt praefixiert.
export const asset = (p: string): string => import.meta.env.BASE_URL + p.replace(/^\/+/, '')

// Zentrale Sales-Navigation, ueberall gleich (Startseite + Unterseiten). Jede
// Information hat genau EINEN Hauptort; die Startseite ist der Ueberblick.
export const NAV_LINKS = [
  { label: 'Funktionen', href: asset('/funktionen/'), key: 'funktionen' },
  { label: 'Preise', href: asset('/preise/'), key: 'preise' },
  { label: 'FAQ', href: asset('/faq/'), key: 'faq' },
  { label: 'Kontakt', href: asset('/kontakt/'), key: 'kontakt' },
]

/** Kanonische Basis-URL (fuer Canonical/OG in den Unterseiten). */
export const SITE_URL = 'https://fabianbuerkle2701-dev.github.io/allindrive-studio/'

export const HERO = {
  wordmark: 'Allindrive.',
  /** Steht nur fuer Suchmaschinen und Screenreader in der Ueberschrift. */
  keyword: 'Fahrschulsoftware für Fahrlehrer',
  claim: 'fahrschulsoftware für fahrlehrer, die den arbeitstag nicht am schreibtisch verbringen',
  /** Die echte, klickbare App als schreibgeschützter Demo-Account. Wird erst
   *  beim Antippen geladen; bis dahin liegt das Poster darüber. */
  demoUrl: 'https://allindrive.netlify.app/?demo=1',
  portrait: {
    src: asset('/app/allindrive-startbildschirm-hell.webp'),
    alt: 'Allindrive auf dem iPhone: der Startbildschirm des Fahrlehrers mit Begrüßung, Kennzahlen und den heutigen Fahrstunden',
    width: 390,
    height: 844,
  },
}

/** Zwei Reihen, die beim Scrollen gegeneinander laufen. */
export const MARQUEE_ROW_1 = [
  { src: asset('/app/allindrive-kalender.webp'), alt: 'Wochenkalender mit Fahrstunden von Montag bis Samstag' },
  { src: asset('/app/allindrive-adk.webp'), alt: 'Digitale Ausbildungsdiagrammkarte mit allen Abschnitten' },
  { src: asset('/app/allindrive-schueler.webp'), alt: 'Übersicht aller Fahrschüler mit Ausbildungsstand' },
  { src: asset('/app/allindrive-startseite.webp'), alt: 'Startseite mit den heutigen Terminen und offenen Vorschlägen' },
  { src: asset('/app/allindrive-adk-karte.webp'), alt: 'Abschnitt der Ausbildungsdiagrammkarte mit abgehakten Übungen' },
]

export const MARQUEE_ROW_2 = [
  { src: asset('/app/allindrive-schueler-mobil.webp'), alt: 'Fahrschülerliste mit Fortschrittsringen' },
  { src: asset('/app/allindrive-kalender-mobil.webp'), alt: 'Wochenkalender auf dem Handy' },
  { src: asset('/app/allindrive-startseite-mobil.webp'), alt: 'Startseite mit Tages-Briefing und Kennzahlen' },
  { src: asset('/app/allindrive-adk-mobil.webp'), alt: 'Ausbildungsdiagrammkarte auf dem Handy' },
  { src: asset('/app/allindrive-schuelerliste-iphone.webp'), alt: 'Schülerliste auf dem iPhone' },
]

export const ABOUT = {
  heading: 'Im Auto gebaut',
  text: 'Allindrive entsteht in einer laufenden Fahrschule, nicht am Reißbrett. Digitale Ausbildungsdiagrammkarte, Fahrstundenplanung mit Konfliktprüfung, Rechnungen und eine eigene App für deine Fahrschüler. Erfasst wird nach der Fahrstunde auf dem Handy, nicht abends am Schreibtisch.',
  /** Vier kleine Aufnahmen, die den Text einrahmen. */
  corners: {
    topLeft: { src: asset('/app/allindrive-adk-mobil.webp'), alt: 'Ausbildungsdiagrammkarte auf dem Handy' },
    bottomLeft: { src: asset('/app/allindrive-startseite-mobil.webp'), alt: 'Tages-Briefing auf der Startseite' },
    topRight: { src: asset('/app/allindrive-kalender-mobil.webp'), alt: 'Wochenkalender auf dem Handy' },
    bottomRight: { src: asset('/app/allindrive-schueler-mobil.webp'), alt: 'Fahrschülerliste mit Fortschrittsringen' },
  },
}

export const SERVICES = [
  {
    no: '01',
    name: 'Digitale ADK',
    text: 'Dieselben Abschnitte und Übungen wie auf der gedruckten Karte, nur dass sie nicht im Handschuhfach liegen bleiben. Abhaken nach der Fahrstunde, Stand als Prozentwert je Abschnitt, Sonderfahrten zählen sich gegen dein Soll mit.',
  },
  {
    no: '02',
    name: 'Fahrstundenplanung',
    text: 'Der Kalender prüft Fahrlehrer, Fahrschüler und Fahrzeug gegeneinander, bevor ein Termin steht. Fahrschüler schlagen freie Zeiten selbst vor, du bestätigst, lehnst ab oder machst einen Gegenvorschlag.',
  },
  {
    no: '03',
    name: 'Fahrschüler-App',
    text: 'Fortschritt, Termine, Sonderfahrten und Begleitfahrten stehen dort, wo der Fahrschüler sie sucht. Anmeldung mit PIN, ohne Installation, auf Deutsch, Englisch, Türkisch und Russisch.',
  },
  {
    no: '04',
    name: 'Rechnung und Vertrag',
    text: 'Offene Fahrstunden auswählen, die Nummer läuft fortlaufend weiter, das PDF ist druckfertig. Der Ausbildungsvertrag entsteht aus den Daten, die schon da sind, und wird auf dem Gerät unterschrieben.',
  },
  {
    no: '05',
    name: 'Prüfungssimulation',
    text: 'Die praktische Prüfung als Durchlauf, mit Fahraufgaben und Kompetenzbereichen. Am Ende steht, welche Aufgabe wiederholt gehakt hat, statt eines Bauchgefühls.',
  },
]

export const PROJECTS = [
  {
    no: '01',
    label: 'Fahrlehrer',
    name: 'Ausbildung',
    col1: [
      { src: asset('/app/allindrive-adk-karte.webp'), alt: 'Abschnitt der Ausbildungsdiagrammkarte mit abgehakten Übungen' },
      { src: asset('/app/allindrive-adk-mobil.webp'), alt: 'Ausbildungsdiagrammkarte auf dem Handy' },
    ],
    col2: { src: asset('/app/allindrive-adk.webp'), alt: 'Die vollständige digitale Ausbildungsdiagrammkarte mit allen Abschnitten' },
  },
  {
    no: '02',
    label: 'Fahrlehrer',
    name: 'Kalender',
    col1: [
      { src: asset('/app/allindrive-kalender-mobil.webp'), alt: 'Wochenkalender auf dem Handy' },
      { src: asset('/app/allindrive-startseite-mobil.webp'), alt: 'Startseite mit Tages-Briefing' },
    ],
    col2: { src: asset('/app/allindrive-kalender.webp'), alt: 'Wochenkalender mit Fahrstunden von Montag bis Samstag' },
  },
  {
    no: '03',
    label: 'Fahrschüler',
    name: 'Ausbildungsstand',
    col1: [
      { src: asset('/app/allindrive-schueler-mobil.webp'), alt: 'Fahrschülerliste mit Fortschrittsringen' },
      { src: asset('/app/allindrive-startseite.webp'), alt: 'Startseite mit heutigen Terminen und offenen Terminvorschlägen' },
    ],
    col2: { src: asset('/app/allindrive-schuelerliste-iphone.webp'), alt: 'Schülerliste auf dem iPhone mit Fortschrittsringen' },
  },
]

export const FOOTNOTE =
  'Aufnahmen aus der laufenden App. Die Namen darin sind erfunden, die Oberfläche ist es nicht. Allindrive ist im Beta-Betrieb, Zugänge vergeben wir persönlich.'
