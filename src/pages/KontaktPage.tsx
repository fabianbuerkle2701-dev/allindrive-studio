import FadeIn from '../components/FadeIn'
import PageNav from '../components/PageNav'
import PageFooter from '../components/PageFooter'
import { ContactButton, LiveProjectButton } from '../components/Buttons'

// TODO Fabian: echte Kontakt-E-Mail eintragen, sobald sie steht.
const CONTACT_EMAIL = 'kontakt@allindrive.de'
const MAILTO =
  'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent('Zugang zu Allindrive')

const STEPS = [
  { no: '01', title: 'Anfragen', text: 'Schreib uns kurz, für welche Fahrschule und wie viele Fahrlehrer du Allindrive testen möchtest.' },
  { no: '02', title: 'Kurz sprechen', text: 'Wir richten deinen Zugang ein und zeigen dir in wenigen Minuten, wie du sofort loslegst.' },
  { no: '03', title: 'Loslegen', text: 'Leg deine Fahrschule an und dokumentiere die nächsten Fahrstunden – danach entscheidest du in Ruhe.' },
]

export default function KontaktPage() {
  return (
    <main className="bg-paper" style={{ overflowX: 'clip' }}>
      <PageNav current="kontakt" />

      <header className="px-6 pb-6 pt-16 md:px-10 md:pb-10 md:pt-24">
        <FadeIn delay={0.1} y={40}>
          <h1
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Kontakt
          </h1>
        </FadeIn>
        <FadeIn delay={0.25} y={20}>
          <p className="mt-6 max-w-2xl font-light leading-relaxed text-ink/85" style={{ fontSize: 'clamp(1.05rem, 2vw, 1.35rem)' }}>
            Allindrive ist im Beta-Betrieb – Zugänge vergeben wir persönlich. Sag
            uns kurz Bescheid, dann richten wir deinen Zugang ein.
          </p>
        </FadeIn>
        <FadeIn delay={0.4} y={20}>
          <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <ContactButton href={MAILTO}>Zugang anfragen</ContactButton>
            <LiveProjectButton>App ansehen</LiveProjectButton>
          </div>
          <p className="mt-5 text-sm text-ink/55">
            Oder direkt per E-Mail:{' '}
            <a href={MAILTO} className="text-ink underline decoration-flame/60 underline-offset-4 transition-opacity hover:opacity-70">
              {CONTACT_EMAIL}
            </a>
          </p>
        </FadeIn>
      </header>

      {/* Ablauf */}
      <section className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {STEPS.map((s, i) => (
            <FadeIn key={s.no} delay={i * 0.1} y={30}>
              <span className="hero-heading font-black leading-none tracking-tight" style={{ fontSize: 'clamp(2.5rem, 7vw, 84px)' }}>
                {s.no}
              </span>
              <h2 className="mt-3 font-medium uppercase tracking-wide text-ink" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}>
                {s.title}
              </h2>
              <p className="mt-2 font-light leading-relaxed text-ink/70">{s.text}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 text-center md:px-10">
        <FadeIn y={30}>
          <p className="mx-auto max-w-[520px] text-xs uppercase tracking-widest text-ink/50 sm:text-sm">
            Im Beta-Betrieb, Zugänge vergeben wir persönlich
          </p>
        </FadeIn>
      </section>

      <PageFooter />
    </main>
  )
}
