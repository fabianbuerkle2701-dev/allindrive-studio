import FadeIn from '../components/FadeIn'
import { ContactButton, LiveProjectButton } from '../components/Buttons'

// Base-sicher: lokal '/', im Build '/allindrive-studio/'.
const BASE = import.meta.env.BASE_URL

/**
 * Der Abschluss. Jeder Knopf auf der Seite zeigt hierher, deshalb steht hier
 * genau eine Handlung und daneben der ehrliche Hinweis auf den Beta-Betrieb.
 */
export default function ContactSection() {
  return (
    <section
      id="kontakt"
      // z-20 hebt den Abschluss ueber den Sticky-Stapel der Einblick-Sektion
      // (z-10): dessen letzte Karte ragt sonst ueber den Abschluss und verdeckt
      // ihn. Das opake bg deckt den Ueberstand sauber ab.
      className="relative z-20 bg-paper px-5 pb-16 pt-24 sm:px-8 sm:pt-28 md:px-10 md:pt-32"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center sm:gap-10">
        <FadeIn as="h2" y={40}>
          <span
            className="hero-heading block font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Mitfahren
          </span>
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <p
            className="mx-auto max-w-[560px] font-normal leading-relaxed text-ink/80"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          >
            Leg deine Fahrschule an, trag deine Fahrzeuge ein und dokumentiere die
            nächsten Fahrstunden darin. Danach weißt du, ob es zu deinem Alltag passt.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} y={20}>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* TODO Fabian: echte Adresse eintragen, sobald die Firmendaten stehen. */}
            <ContactButton href="mailto:kontakt@allindrive.de?subject=Zugang%20zu%20Allindrive" />
            <LiveProjectButton>App ansehen</LiveProjectButton>
          </div>
        </FadeIn>

        <FadeIn delay={0.45} y={16}>
          <p className="text-xs uppercase tracking-widest text-ink/55 sm:text-sm">
            Im Beta-Betrieb, Zugänge vergeben wir persönlich
          </p>
        </FadeIn>
      </div>

      <div className="mx-auto mt-20 flex max-w-6xl flex-col gap-4 border-t border-ink/12 pt-8 text-ink/55 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs sm:text-sm">© 2026 Allindrive</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm" aria-label="Rechtliches">
          <a className="transition-opacity duration-200 hover:opacity-70" href={BASE + 'impressum/'}>
            Impressum
          </a>
          <a className="transition-opacity duration-200 hover:opacity-70" href={BASE + 'datenschutz/'}>
            Datenschutz
          </a>
        </nav>
      </div>
    </section>
  )
}
