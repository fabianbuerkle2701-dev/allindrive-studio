import FadeIn from '../components/FadeIn'
import PageNav from '../components/PageNav'
import PageFooter from '../components/PageFooter'
import { ContactButton, LiveProjectButton } from '../components/Buttons'
import { asset } from '../data/content'

// Alles, was im Fahrlehrer-Zugang enthalten ist – nur real existierende
// Funktionen, keine erfundenen Extras.
const INCLUDED = [
  'Digitale ADK mit automatischer Sonderfahrten-Zählung',
  'Fahrstundenplanung mit Konfliktprüfung',
  'Online-Terminvorschläge der Fahrschüler',
  'Eigene Fahrschüler-App (vier Sprachen)',
  'Rechnungen, Belege und Ausbildungsvertrag als PDF',
  'Prüfungssimulation mit Auswertung',
  'Alle Updates und persönlicher Support',
]

// Ehrliche Verkaufsargumente statt erfundener Zahlen.
const VALUES = [
  { title: 'Kein Risiko', text: 'Erst testen, dann entscheiden. Keine Einrichtungsgebühr, keine Mindestlaufzeit.' },
  { title: 'Fairer Fixpreis', text: 'Ein klarer Preis pro Fahrlehrer und Monat – keine versteckten Kosten, keine Zusatzmodule.' },
  { title: 'DSGVO', text: 'Server in der EU, jede Fahrschule sieht nur ihre eigenen Daten. Keine Weitergabe.' },
]

export default function PreisePage() {
  return (
    <main className="bg-ink" style={{ overflowX: 'clip' }}>
      <PageNav current="preise" />

      <header className="px-6 pb-6 pt-16 text-center md:px-10 md:pb-10 md:pt-24">
        <FadeIn delay={0.1} y={40}>
          <h1
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Preise
          </h1>
        </FadeIn>
        <FadeIn delay={0.25} y={20}>
          <p className="mx-auto mt-6 max-w-2xl font-light leading-relaxed text-chalk/85" style={{ fontSize: 'clamp(1.05rem, 2vw, 1.35rem)' }}>
            Ein Plan, alles drin. Allindrive ist im Beta-Betrieb – Zugänge vergeben
            wir persönlich, den Preis besprechen wir dabei individuell und fair.
          </p>
        </FadeIn>
      </header>

      {/* Ein Plan */}
      <section className="mx-auto max-w-3xl px-6 md:px-10">
        <FadeIn y={40}>
          <div className="rounded-[32px] border-2 border-chalk/20 bg-[#111] p-7 sm:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-flame">Fahrlehrer-Zugang</p>
                <h2 className="mt-2 font-brand text-3xl font-extrabold text-white sm:text-4xl">
                  Allindrive<span className="text-flame">.</span>
                </h2>
              </div>
              {/* TODO Fabian: konkreten Preis einsetzen, sobald festgelegt
                  (z.B. "29 € / Fahrlehrer · Monat"). Bis dahin ehrliche Beta-Angabe. */}
              <div className="text-right">
                <p className="text-2xl font-black leading-none text-white sm:text-3xl">Im Beta individuell</p>
                <p className="mt-1 text-sm text-chalk/60">pro Fahrlehrer · monatlich, fair</p>
              </div>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {INCLUDED.map((item) => (
                <li key={item} className="flex gap-3 text-chalk/85">
                  <span aria-hidden="true" className="mt-[0.15em] flex-none text-flame">✓</span>
                  <span className="font-light leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
              <ContactButton href={asset('/kontakt/')}>Zugang anfragen</ContactButton>
              <LiveProjectButton>App ansehen</LiveProjectButton>
            </div>
            <p className="mt-5 text-xs uppercase tracking-widest text-chalk/45">
              Keine Einrichtungsgebühr · keine Mindestlaufzeit · monatlich kündbar
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Werte */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {VALUES.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.1} y={30}>
              <h3 className="font-medium uppercase tracking-wide text-chalk" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}>
                {v.title}
              </h3>
              <p className="mt-3 font-light leading-relaxed text-chalk/70">{v.text}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Abschluss-CTA */}
      <section className="px-6 pb-16 pt-4 text-center md:px-10">
        <FadeIn y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
          >
            Fahr eine Woche mit
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} y={20}>
          <p className="mx-auto mt-6 max-w-[560px] font-light leading-relaxed text-chalk/85" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}>
            Leg deine Fahrschule an und dokumentiere die nächsten Fahrstunden darin.
            Danach weißt du, ob es zu deinem Alltag passt – und was es dir wert ist.
          </p>
        </FadeIn>
        <FadeIn delay={0.3} y={20}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <ContactButton href={asset('/kontakt/')}>Zugang anfragen</ContactButton>
            <ContactButton href={asset('/faq/')}>Häufige Fragen</ContactButton>
          </div>
        </FadeIn>
      </section>

      <PageFooter />
    </main>
  )
}
