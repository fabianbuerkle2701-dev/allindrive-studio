import FadeIn from '../components/FadeIn'
import IphoneFrame from '../components/IphoneFrame'
import HeroVideo from '../components/HeroVideo'
import { ContactButton } from '../components/Buttons'
import { HERO, NAV_LINKS } from '../data/content'

/**
 * Der Auftakt muss in drei Sekunden ueberzeugen, nicht nur die Marke zeigen.
 * Reihenfolge der Argumentation von oben nach unten:
 *   1. Wortmarke (wer)          -> die Marke, exakt wie in der App
 *   2. Glaubwuerdigkeit (kicker)-> von einem Fahrlehrer, aus der Praxis
 *   3. Versprechen (headline)   -> die ganze Fahrschule aufs Handy
 *   4. Beweis (das echte iPhone)-> keine Attrappe, sondern die laufende App
 *   5. Aktion (Zugang anfragen)
 * Das Versprechen fuellt bewusst die Flaeche zwischen Wortmarke und Geraet, die
 * vorher leer war (besonders auf dem Handy).
 */
export default function HeroSection() {
  return (
    <section
      id="start"
      className="relative flex h-screen min-h-[640px] flex-col"
      // 'clip' statt 'hidden': schneidet seitlich ab, ohne die Seite zu einem
      // eigenen Scroll-Container zu machen.
      style={{ overflowX: 'clip' }}
    >
      {/* Selbst gerendertes Nacht-Fahrt-Video, scroll-gescrubbt, hinter allem. */}
      <HeroVideo />

      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-20 flex justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-chalk md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-opacity duration-200 ease-out hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="relative z-10 overflow-hidden px-6 md:px-10">
        <FadeIn delay={0.15} y={40}>
          {/* Die Wortmarke exakt wie in der App: Baloo 2 in 800, weiss, mit dem
              Punkt in Markenorange. */}
          <h1 className="mt-4 w-full whitespace-nowrap font-brand font-extrabold leading-none tracking-tight text-white text-[12vw] sm:text-[12.5vw] md:-mt-2 md:text-[13vw] lg:text-[13vw]">
            Allindrive<span className="text-flame">.</span>
            <span className="sr-only">{HERO.keyword}</span>
          </h1>
        </FadeIn>
      </div>

      {/* Versprechen + Beweis (iPhone) teilen sich die verbleibende Hoehe. */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col px-6 md:px-10">
        <FadeIn delay={0.32} y={18} className="mx-auto w-full max-w-4xl text-center">
          <p className="text-[3.3vw] font-medium uppercase leading-tight tracking-[0.14em] text-flame sm:text-[1.05vw] md:text-sm lg:text-[0.95rem]">
            {HERO.kicker}
          </p>
          <h2 className="mx-auto mt-2 max-w-3xl font-semibold leading-[1.04] tracking-tight text-white text-[6.6vw] sm:mt-3 sm:text-[3.1vw] md:text-[2.9rem] lg:text-[3.35rem]">
            {HERO.promiseLead}{' '}
            <span className="text-flame">{HERO.promiseAccent}</span>.
          </h2>
          <p className="mx-auto mt-2.5 max-w-[38ch] text-[3.4vw] font-light leading-snug text-chalk/85 sm:mt-3 sm:text-[1.15vw] md:text-[1.05rem] lg:text-[1.1rem]">
            {HERO.promiseSub}
          </p>
        </FadeIn>

        {/* Das echte, klickbare iPhone. Bewusst still: kein Magnet-Effekt. */}
        <div className="flex min-h-0 flex-1 items-center justify-center pb-16 pt-3 sm:pb-14">
          <FadeIn
            delay={0.6}
            y={30}
            className="inline-flex h-full max-h-[min(760px,100%)] items-center"
          >
            <IphoneFrame
              src={HERO.portrait.src}
              alt={HERO.portrait.alt}
              demoUrl={HERO.demoUrl}
              className="h-full w-auto"
            />
          </FadeIn>
        </div>
      </div>

      {/* Beweis-Zeile und Aktion sitzen in den unteren Ecken, absolut gepinnt.
          Als transparente Ebene wuerde die Zeile Taps auf das Geraet abfangen
          -> pointer-events-none, nur Text und Button bleiben aktiv. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          delay={0.75}
          y={20}
          className="pointer-events-auto hidden max-w-[150px] font-light uppercase leading-snug tracking-wide text-chalk sm:block sm:max-w-[240px] md:max-w-[280px]"
          style={{ fontSize: 'clamp(0.72rem, 1.35vw, 1.4rem)' }}
        >
          {HERO.proof}
        </FadeIn>

        <FadeIn delay={0.85} y={20} className="pointer-events-auto">
          <ContactButton href="#kontakt" />
        </FadeIn>
      </div>
    </section>
  )
}
