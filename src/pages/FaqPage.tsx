import FadeIn from '../components/FadeIn'
import PageNav from '../components/PageNav'
import PageFooter from '../components/PageFooter'
import { ContactButton, LiveProjectButton } from '../components/Buttons'
import { asset } from '../data/content'

// Ehrliche Antworten – nur nachprüfbare Aussagen. Gleiche Fragen/Antworten
// stehen als FAQPage-JSON-LD im <head> von faq/index.html (für SEO).
export const FAQS: { q: string; a: string }[] = [
  {
    q: 'Für wen ist Allindrive gedacht?',
    a: 'Für Fahrlehrer und Fahrschulen, die viel unterwegs sind und lieber vom Handy arbeiten als abends am Schreibtisch. Erfasst wird direkt nach der Fahrstunde.',
  },
  {
    q: 'Ist die digitale ADK rechtssicher?',
    a: 'Die digitale Ausbildungsdiagrammkarte bildet dieselben Abschnitte und Übungen ab wie die gedruckte Karte, orientiert an FahrlG und FahrschAusbO. Sie unterstützt die Dokumentation – die pädagogische Verantwortung bleibt beim Fahrlehrer.',
  },
  {
    q: 'Wie steht es um den Datenschutz (DSGVO)?',
    a: 'Die Daten liegen auf Servern in der EU. Jede Fahrschule sieht ausschließlich ihre eigenen Daten, es gibt keine Weitergabe an Dritte. Fahrschüler melden sich mit PIN an.',
  },
  {
    q: 'Was kostet Allindrive?',
    a: 'Allindrive ist im Beta-Betrieb. Den Preis besprechen wir beim Zugang persönlich – fair, pro Fahrlehrer und Monat, ohne versteckte Kosten. Mehr dazu auf der Preise-Seite.',
  },
  {
    q: 'Muss ich etwas installieren?',
    a: 'Nein. Allindrive läuft als Web-App im Browser – auf Handy, Tablet und Rechner. Deine Fahrschüler nutzen die Fahrschüler-App ebenfalls ohne Installation aus dem App Store.',
  },
  {
    q: 'Kann ich von einem anderen System wechseln?',
    a: 'Ja. Beim Einrichten helfen dir KI-gestützte Importe (Belege, ADK-Stände, Schülerdaten), damit du nicht alles von Hand neu eintippen musst.',
  },
  {
    q: 'Funktioniert es auch unterwegs?',
    a: 'Ja, dafür ist es gebaut. Du erfasst direkt nach der Fahrstunde; kurze Verbindungsabbrüche im Auto fängt die App ab, sodass keine Eingabe verloren geht.',
  },
  {
    q: 'Ist Allindrive schon fertig?',
    a: 'Allindrive ist im Beta-Betrieb und wird laufend weiterentwickelt – gebaut von einem Fahrlehrer, der die App selbst täglich im Auto benutzt. Zugänge vergeben wir persönlich.',
  },
]

export default function FaqPage() {
  return (
    <main className="bg-paper" style={{ overflowX: 'clip' }}>
      <PageNav current="faq" />

      <header className="px-6 pb-6 pt-16 md:px-10 md:pb-10 md:pt-24">
        <FadeIn delay={0.1} y={40}>
          <h1
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            FAQ
          </h1>
        </FadeIn>
        <FadeIn delay={0.25} y={20}>
          <p className="mt-6 max-w-2xl font-light leading-relaxed text-ink/85" style={{ fontSize: 'clamp(1.05rem, 2vw, 1.35rem)' }}>
            Die häufigsten Fragen – ehrlich beantwortet. Was hier nicht steht,
            klären wir gern persönlich.
          </p>
        </FadeIn>
      </header>

      <section className="mx-auto max-w-3xl px-6 pb-8 md:px-10">
        {FAQS.map((item, i) => (
          <FadeIn key={item.q} delay={Math.min(i * 0.06, 0.4)}>
            <details className="group border-t border-ink/12 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-ink">
                <span className="font-medium leading-snug" style={{ fontSize: 'clamp(1.05rem, 2vw, 1.35rem)' }}>
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className="flex-none text-flame transition-transform duration-200 ease-out group-open:rotate-45"
                  style={{ fontSize: '1.6rem', lineHeight: 1 }}
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl font-light leading-relaxed text-ink/70" style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)' }}>
                {item.a}
              </p>
            </details>
          </FadeIn>
        ))}
        <div className="border-t border-ink/12" />
      </section>

      <section className="px-6 pb-16 pt-12 text-center md:px-10 md:pt-20">
        <FadeIn y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
          >
            Noch Fragen?
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} y={20}>
          <p className="mx-auto mt-6 max-w-[520px] font-light leading-relaxed text-ink/85" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}>
            Schreib uns – oder probier die App direkt auf der Startseite als
            klickbare Vorschau aus.
          </p>
        </FadeIn>
        <FadeIn delay={0.3} y={20}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <ContactButton href={asset('/kontakt/')}>Kontakt</ContactButton>
            <LiveProjectButton>App ansehen</LiveProjectButton>
          </div>
        </FadeIn>
      </section>

      <PageFooter />
    </main>
  )
}
