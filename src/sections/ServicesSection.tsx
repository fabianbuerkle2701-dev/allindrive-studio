import FadeIn from '../components/FadeIn'
import { SERVICES } from '../data/content'

/** 1px Haarlinie zwischen den Eintraegen. */
const RULE = '1px solid rgba(12, 12, 12, 0.15)'

/**
 * Heller Block auf dunkler Seite: die fuenf Funktionen als nummerierte Liste.
 * Die obere Kante ist gerundet, damit der Block sich sichtbar auf den
 * dunklen Hintergrund darueber legt.
 */
export default function ServicesSection() {
  return (
    <section
      id="funktionen"
      className="rounded-t-[40px] bg-paper px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn
        as="h2"
        className="mb-16 text-center font-black uppercase leading-none tracking-tight text-ink sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Funktionen
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((item, i) => (
          <FadeIn
            key={item.no}
            delay={i * 0.1}
            className="flex items-start gap-5 py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12"
            style={{
              borderTop: RULE,
              // Nur der letzte Eintrag bekommt eine Unterkante, sonst lägen
              // zwischen den Einträgen doppelte Linien.
              borderBottom: i === SERVICES.length - 1 ? RULE : undefined,
            }}
          >
            <span
              className="flex-none font-black leading-none text-ink"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {item.no}
            </span>

            <div className="min-w-0">
              <h3
                className="font-medium uppercase leading-tight text-ink"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {item.name}
              </h3>
              <p
                className="mt-3 max-w-2xl font-light leading-relaxed text-ink sm:mt-4"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
              >
                {item.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
