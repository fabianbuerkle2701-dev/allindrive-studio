import { ArrowRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { SERVICES } from '../data/content'

// Base-sicher: lokal '/funktionen/', im Build '/allindrive-studio/funktionen/'.
const FUNKTIONEN_HREF = import.meta.env.BASE_URL + 'funktionen/'

/**
 * Heller Block auf dunkler Seite. Die fuenf Funktionen liegen als "Route" an
 * einer gestrichelten orangen Fahrbahn-Mittellinie - das wiederkehrende
 * Signatur-Motiv der Seite (Fahren). Jede Funktion ist eine Streckenmarke.
 * Die Linie laeuft links (auf allen Groessen gleich), der Inhalt rechts daneben:
 * robust responsiv und trotzdem unverwechselbar statt einer x-beliebigen Liste.
 */
export default function ServicesSection() {
  return (
    <section
      id="funktionen"
      className="rounded-t-[40px] bg-paper px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn
        as="h2"
        className="mb-14 text-center font-black uppercase leading-none tracking-tight text-ink sm:mb-16 md:mb-24"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Funktionen
      </FadeIn>

      <div className="relative mx-auto max-w-4xl">
        {/* Die Fahrbahn: gestrichelte orange Mittellinie, an der die Marken sitzen. */}
        <span
          aria-hidden="true"
          className="absolute bottom-6 top-3 w-[3px]"
          style={{
            left: 'var(--lane-x)',
            transform: 'translateX(-50%)',
            backgroundImage:
              'repeating-linear-gradient(to bottom, #FF9300 0 18px, transparent 18px 34px)',
          }}
        />

        {SERVICES.map((item, i) => (
          <FadeIn
            key={item.no}
            delay={i * 0.08}
            className="group relative pb-12 pl-16 last:pb-0 sm:pb-14 sm:pl-24 md:pb-16 md:pl-28"
          >
            {/* Streckenmarke: die Nummer als gefuellter oranger Punkt auf der Linie. */}
            <span
              aria-hidden="true"
              className="absolute top-1 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-flame font-black text-ink shadow-[0_6px_18px_rgba(255,147,0,0.35)] transition-transform duration-200 ease-out group-hover:scale-110 sm:h-14 sm:w-14"
              style={{ left: 'var(--lane-x)', fontSize: 'clamp(0.95rem, 2vw, 1.35rem)' }}
            >
              {item.no}
            </span>

            <h3
              className="font-black uppercase leading-none tracking-tight text-ink"
              style={{ fontSize: 'clamp(1.5rem, 4.6vw, 3.1rem)' }}
            >
              {item.name}
            </h3>
            <p
              className="mt-3 max-w-2xl font-light leading-relaxed text-ink/60 sm:mt-4"
              style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.2rem)' }}
            >
              {item.text}
            </p>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-4 flex justify-center sm:mt-8">
        <a
          href={FUNKTIONEN_HREF}
          className="group inline-flex items-center gap-2 rounded-full border-2 border-ink/80 px-7 py-3 text-sm font-medium uppercase tracking-widest text-ink transition-colors duration-200 ease-out hover:bg-ink hover:text-paper sm:px-9 sm:py-4 sm:text-base"
        >
          Alle Funktionen im Detail
          <ArrowRight aria-hidden="true" strokeWidth={2} className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 sm:h-5 sm:w-5" />
        </a>
      </FadeIn>

      {/* Position der Fahrbahn-Linie, an Padding-Stufen oben gekoppelt. */}
      <style>{`
        #funktionen { --lane-x: 30px; }
        @media (min-width: 640px) { #funktionen { --lane-x: 46px; } }
        @media (min-width: 768px) { #funktionen { --lane-x: 54px; } }
      `}</style>
    </section>
  )
}
