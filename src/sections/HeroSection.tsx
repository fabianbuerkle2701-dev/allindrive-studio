import FadeIn from '../components/FadeIn'
import IphoneFrame from '../components/IphoneFrame'
import HeroVideo from '../components/HeroVideo'
import { ContactButton } from '../components/Buttons'
import { HERO, NAV_LINKS } from '../data/content'

/**
 * Der Auftakt muss in drei Sekunden ueberzeugen. Aufbau:
 *   - Wortmarke ueber die volle Breite (die Marke, exakt wie in der App).
 *   - Darunter ein Split: links das Versprechen + Beweis + Aktion, rechts das
 *     GROSSE, echte iPhone. So bleibt das Geraet praesent (nicht geschrumpft),
 *     und die vorher leere Seitenflaeche traegt jetzt die Argumentation.
 *   - Auf dem Handy stapelt alles: Wortmarke, kompaktes Versprechen, grosses
 *     Geraet, Aktion.
 */
export default function HeroSection() {
  return (
    <section
      id="start"
      className="relative flex h-screen min-h-[660px] flex-col"
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
          {/* Wortmarke exakt wie in der App: Baloo 2 800, weiss, Punkt in Orange. */}
          <h1 className="mt-3 w-full whitespace-nowrap font-brand font-extrabold leading-none tracking-tight text-white text-[12vw] md:-mt-2 md:text-[12.5vw] lg:text-[12.5vw]">
            Allindrive<span className="text-flame">.</span>
            <span className="sr-only">{HERO.keyword}</span>
          </h1>
        </FadeIn>
      </div>

      {/* Split: Versprechen (links) + grosses iPhone (rechts). Auf dem Handy
          gestapelt. */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col px-6 pb-4 md:flex-row md:items-center md:gap-8 md:px-10 lg:gap-12">
        {/* Versprechen */}
        <FadeIn
          delay={0.3}
          y={18}
          className="shrink-0 pt-2 text-center md:w-[42%] md:pt-0 md:text-left lg:w-[44%]"
        >
          <p className="text-[3.2vw] font-semibold uppercase leading-tight tracking-[0.14em] text-flame sm:text-sm md:text-[0.9rem] lg:text-base">
            {HERO.kicker}
          </p>
          {/* Bewusst gross und dicht gesetzt - das Versprechen ist die Ansage. */}
          <h2 className="mx-auto mt-2 max-w-[16ch] font-semibold leading-[0.98] tracking-tight text-white text-[8.5vw] sm:text-[6vw] md:mx-0 md:mt-3 md:max-w-none md:text-[3.4rem] lg:text-[4.4rem]">
            {HERO.promiseLead}{' '}
            <span className="text-flame">{HERO.promiseAccent}</span>.
          </h2>
          <p className="mx-auto mt-3 max-w-[40ch] text-[3.4vw] font-light leading-snug text-chalk/85 sm:text-base md:mx-0 md:mt-4 md:max-w-[34ch] md:text-[1.05rem] lg:text-[1.15rem]">
            {HERO.promiseSub}
          </p>
          {/* Beweis + Aktion stehen auf dem Desktop direkt beim Versprechen. */}
          <div className="mt-5 hidden items-center gap-5 md:flex">
            <ContactButton href="#kontakt" />
            <span className="max-w-[15ch] text-xs font-light uppercase leading-snug tracking-wide text-chalk/80 lg:text-sm">
              {HERO.proof}
            </span>
          </div>
        </FadeIn>

        {/* Das echte, klickbare iPhone - gross und praesent. Explizite Viewport-
            Hoehen, damit es im flex-row (items-center streckt nicht) sicher gross
            bleibt und nicht auf 0 kollabiert. */}
        <div className="flex min-h-0 flex-1 items-center justify-center pb-14 pt-3 md:pb-0 md:pt-0">
          <FadeIn
            delay={0.55}
            y={30}
            className="inline-flex h-[50vh] max-h-[min(860px,100%)] items-center sm:h-[56vh] md:h-[64vh] lg:h-[70vh]"
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

      {/* Auf dem Handy sitzt die Aktion unten in der Ecke (auf dem Desktop steht
          sie oben beim Versprechen, daher hier md:hidden). */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-end px-6 pb-7 sm:pb-8 md:hidden">
        <FadeIn delay={0.7} y={20} className="pointer-events-auto">
          <ContactButton href="#kontakt" />
        </FadeIn>
      </div>
    </section>
  )
}
