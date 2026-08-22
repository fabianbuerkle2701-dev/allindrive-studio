import FadeIn from '../components/FadeIn'
import IphoneFrame from '../components/IphoneFrame'
import { ContactButton } from '../components/Buttons'
import { HERO, NAV_LINKS } from '../data/content'

/**
 * Der Auftakt: Navigation, Wortmarke ueber die volle Breite, darunter der
 * Anspruch und die Hauptaktion. Das Bildschirmfoto steht mittig davor und
 * folgt dem Zeiger ein Stueck weit.
 */
export default function HeroSection() {
  return (
    <section
      id="start"
      className="relative flex h-screen flex-col"
      // 'clip' statt 'hidden': schneidet seitlich ab, ohne die Seite zu einem
      // eigenen Scroll-Container zu machen.
      style={{ overflowX: 'clip' }}
    >
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

      <div className="relative overflow-hidden px-6 md:px-10">
        <FadeIn delay={0.15} y={40}>
          {/* Die Wortmarke exakt wie in der App: Baloo 2 in 800, weiss, mit dem
              Punkt in Markenorange. Bewusst gemischte Schreibweise und keine
              Versalien, damit es dieselbe Marke ist und nicht nur derselbe Name. */}
          <h1 className="mt-6 w-full whitespace-nowrap font-brand font-extrabold leading-none tracking-tight text-white text-[12.5vw] sm:mt-4 sm:text-[13.5vw] md:-mt-5 md:text-[15vw] lg:text-[15.5vw]">
            Allindrive<span className="text-flame">.</span>
            {/* Sichtbar ist nur die Wortmarke. Wonach gesucht wird, steht
                trotzdem in der Ueberschrift, nur eben unsichtbar. */}
            <span className="sr-only">{HERO.keyword}</span>
          </h1>
        </FadeIn>
      </div>

      {/* Das iPhone sitzt mittig in der Flaeche zwischen Wortmarke und der unteren
          Zeile – kein Ueberlappen mehr. Groesse ueber die HOEHE begrenzt, damit es
          auf jedem Viewport ganz hineinpasst; die Breite folgt aus dem Format. */}
      <div className="flex min-h-0 flex-1 items-center justify-center px-6 py-3">
        <FadeIn
          delay={0.6}
          y={30}
          // max-h min(px, 100%): begrenzt das Geraet auf die freie Flaeche, damit
          // es auf kurzen Viewports nie in die Wortmarke ragt.
          className="inline-flex h-[46vh] max-h-[min(580px,100%)] items-center sm:h-[54vh]"
        >
          {/* Bewusst still: kein Magnet-Effekt. Das iPhone soll man anschauen und
              darin klicken, nicht dem Zeiger nachjagen. */}
          <IphoneFrame
            src={HERO.portrait.src}
            alt={HERO.portrait.alt}
            demoUrl={HERO.demoUrl}
            className="h-full w-auto"
          />
        </FadeIn>
      </div>

      <div className="flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-chalk sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          {HERO.claim}
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton href="#kontakt" />
        </FadeIn>
      </div>
    </section>
  )
}
