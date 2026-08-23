import FadeIn from '../components/FadeIn'
import PageNav from '../components/PageNav'
import PageFooter from '../components/PageFooter'
import { ContactButton, LiveProjectButton } from '../components/Buttons'
import { asset } from '../data/content'

type Feature = {
  no: string
  name: string
  lead: string
  points: string[]
  img?: { src: string; alt: string }
}

// Nur real existierende App-Funktionen; Aufnahmen nur dort, wo es sie wirklich
// gibt. Zwei Funktionen laufen bewusst ohne Screenshot statt mit einem fremden.
const FEATURES: Feature[] = [
  {
    no: '01',
    name: 'Digitale ADK',
    lead:
      'Dieselben Abschnitte und Übungen wie auf der gedruckten Ausbildungsdiagrammkarte – nur dass sie nicht im Handschuhfach liegen bleibt.',
    points: [
      'Abhaken direkt nach der Fahrstunde auf dem Handy, nicht abends am Schreibtisch.',
      'Ausbildungsstand als Prozentwert je Abschnitt, sofort sichtbar.',
      'Sonderfahrten zählen sich automatisch gegen das gesetzliche Soll mit.',
    ],
    img: {
      src: asset('/app/allindrive-adk.webp'),
      alt: 'Digitale Ausbildungsdiagrammkarte in Allindrive mit allen Abschnitten und dem Fortschritt je Bereich',
    },
  },
  {
    no: '02',
    name: 'Fahrstundenplanung',
    lead:
      'Der Wochenkalender prüft Fahrlehrer, Fahrschüler und Fahrzeug gegeneinander, bevor ein Termin überhaupt steht.',
    points: [
      'Warnt vor Doppelbuchungen, bevor der Termin gespeichert wird.',
      'Fahrschüler schlagen freie Zeiten selbst vor – du bestätigst, lehnst ab oder machst einen Gegenvorschlag.',
      'Alle Termine der Woche auf einen Blick, auch unterwegs.',
    ],
    img: {
      src: asset('/app/allindrive-kalender.webp'),
      alt: 'Wochenkalender in Allindrive mit Fahrstunden von Montag bis Samstag',
    },
  },
  {
    no: '03',
    name: 'Fahrschüler-App',
    lead:
      'Fortschritt, Termine, Sonderfahrten und Begleitfahrten stehen dort, wo der Fahrschüler sie sucht – in seiner eigenen App.',
    points: [
      'Anmeldung mit PIN, ohne Installation aus dem App Store.',
      'Auf Deutsch, Englisch, Türkisch und Russisch.',
      'Das Telefon bleibt während der Fahrstunde stumm – nachgesehen wird davor oder danach.',
    ],
    img: {
      src: asset('/app/allindrive-schueler-mobil.webp'),
      alt: 'Fahrschüler-Ansicht in Allindrive mit Fortschritt und den nächsten Terminen',
    },
  },
  {
    no: '04',
    name: 'Rechnung und Vertrag',
    lead:
      'Offene Fahrstunden auswählen, fertig: Die Rechnungsnummer läuft fortlaufend weiter, das PDF ist druckfertig.',
    points: [
      'Fortlaufende Nummern für Rechnung, Beleg und Vertrag – prüfsicher.',
      'Der Ausbildungsvertrag entsteht aus den Daten, die schon da sind.',
      'Unterschrift direkt auf dem Gerät.',
    ],
  },
  {
    no: '05',
    name: 'Prüfungssimulation',
    lead:
      'Die praktische Prüfung als Durchlauf – mit Fahraufgaben und Kompetenzbereichen wie in der echten Prüfung.',
    points: [
      'Fahraufgaben und Kompetenzbereiche nach amtlichem Vorbild.',
      'Am Ende steht, welche Aufgabe wiederholt gehakt hat – statt eines Bauchgefühls.',
      'Prüfungsreife wird sichtbar, nicht geschätzt.',
    ],
  },
]

function FeatureBlock({ feature, index }: { feature: Feature; index: number }) {
  const flip = index % 2 === 1
  return (
    <FadeIn
      as="article"
      y={40}
      className="grid grid-cols-1 items-center gap-8 border-t border-chalk/12 py-14 md:grid-cols-2 md:gap-14 md:py-20"
    >
      <div className={flip ? 'md:order-2' : ''}>
        <div className="flex items-baseline gap-4">
          <span
            className="hero-heading font-black leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 96px)' }}
          >
            {feature.no}
          </span>
          <h2
            className="font-medium uppercase leading-tight tracking-tight text-chalk"
            style={{ fontSize: 'clamp(1.5rem, 3.4vw, 2.6rem)' }}
          >
            {feature.name}
          </h2>
        </div>
        <p className="mt-5 max-w-xl font-light leading-relaxed text-chalk/85" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}>
          {feature.lead}
        </p>
        <ul className="mt-6 flex flex-col gap-3">
          {feature.points.map((p) => (
            <li key={p} className="flex gap-3 text-chalk/75">
              <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 flex-none rounded-full bg-flame" />
              <span className="font-light leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      </div>

      {feature.img ? (
        <div className={flip ? 'md:order-1' : ''}>
          <img
            src={feature.img.src}
            alt={feature.img.alt}
            loading="lazy"
            decoding="async"
            className="w-full rounded-[28px] border border-chalk/12 object-cover shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
          />
        </div>
      ) : (
        <div
          className={`flex aspect-[16/11] items-center justify-center overflow-hidden rounded-[28px] border border-chalk/12 px-8 ${flip ? 'md:order-1' : ''}`}
          style={{ background: 'radial-gradient(120% 120% at 30% 20%, #201a12 0%, #0c0c0c 60%)' }}
        >
          <span
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)' }}
          >
            {feature.name}
          </span>
        </div>
      )}
    </FadeIn>
  )
}

/**
 * Unterseite „Funktionen": der eine Hauptort fuer die Funktionsdetails. Die
 * Startseite gibt nur den Ueberblick und verlinkt hierher.
 */
export default function FunktionenPage() {
  return (
    <main className="bg-ink" style={{ overflowX: 'clip' }}>
      <PageNav current="funktionen" />

      <header className="px-6 pb-6 pt-16 md:px-10 md:pb-10 md:pt-24">
        <FadeIn delay={0.1} y={40}>
          <h1
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Funktionen
          </h1>
        </FadeIn>
        <FadeIn delay={0.25} y={20}>
          <p className="mt-6 max-w-2xl font-light leading-relaxed text-chalk/85" style={{ fontSize: 'clamp(1.05rem, 2vw, 1.4rem)' }}>
            Alles, was eine Fahrschule täglich braucht – gebaut für Fahrlehrer, die
            unterwegs vom Handy arbeiten. Jede Funktion existiert in der laufenden
            App; du kannst sie auf der Startseite direkt ausprobieren.
          </p>
        </FadeIn>
      </header>

      <div className="mx-auto max-w-6xl px-6 pb-8 md:px-10">
        {FEATURES.map((feature, index) => (
          <FeatureBlock key={feature.no} feature={feature} index={index} />
        ))}
      </div>

      <section className="px-6 pb-16 pt-16 text-center md:px-10 md:pt-24">
        <FadeIn y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
          >
            Selbst ansehen
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} y={20}>
          <p className="mx-auto mt-6 max-w-[560px] font-light leading-relaxed text-chalk/85" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}>
            Auf der Startseite läuft die echte App als klickbare Vorschau. Leg
            danach deine eigene Fahrschule an und dokumentiere die nächsten
            Fahrstunden darin.
          </p>
        </FadeIn>
        <FadeIn delay={0.3} y={20}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <LiveProjectButton>App ansehen</LiveProjectButton>
            <ContactButton href={asset('/kontakt/')}>Kontakt</ContactButton>
          </div>
        </FadeIn>
      </section>

      <PageFooter />
    </main>
  )
}
