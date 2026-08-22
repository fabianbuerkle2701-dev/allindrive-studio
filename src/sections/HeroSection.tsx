import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
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

      <div className="relative z-20 overflow-hidden px-6 md:px-10">
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

      <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
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

      {/* Der aeussere Behaelter haelt die Position, weil FadeIn die
          Transform-Eigenschaft fuer die eigene Bewegung belegt. */}
      <div className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            {/* Hochformat 780x1706: ohne Hoehenbegrenzung waere das Bild
                hoeher als der Bildschirm, deshalb oben beschnitten. */}
            <img
              src={HERO.portrait.src}
              alt={HERO.portrait.alt}
              width={HERO.portrait.width}
              height={HERO.portrait.height}
              fetchPriority="high"
              decoding="async"
              className="h-auto w-full max-h-[58vh] rounded-[28px] object-cover object-top sm:max-h-[62vh]"
              style={{
                border: '1px solid rgba(237, 228, 214, 0.14)',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.55)',
              }}
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  )
}
