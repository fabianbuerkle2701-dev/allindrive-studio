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

      {/* pointer-events-none: die Wortmarke liegt ueber dem iPhone, soll aber
          keine Klicks abfangen, damit die eingebettete App bedienbar bleibt. */}
      <div className="pointer-events-none relative z-20 overflow-hidden px-6 md:px-10">
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

      {/* Die untere Zeile liegt ueber der unteren Haelfte des iPhones. Als
          transparenter Container wuerde sie sonst die Taps auf die Bottom-Nav der
          App abfangen -> pointer-events-none, nur Claim und Button bleiben aktiv. */}
      <div className="pointer-events-none relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="pointer-events-auto max-w-[160px] font-light uppercase leading-snug tracking-wide text-chalk sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          {HERO.claim}
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="pointer-events-auto">
          <ContactButton href="#kontakt" />
        </FadeIn>
      </div>

      {/* Das iPhone ist die Buehne. Groesse ueber die BREITE: dann berechnet das
          Seitenverhaeltnis die Hoehe, und die Breiten sind so gewaehlt, dass das
          Geraet immer ganz in den Hero passt. Der aeussere Behaelter haelt die
          Position, weil FadeIn und Magnet die Transform-Eigenschaft fuer ihre
          Bewegung belegen. */}
      <div className="absolute left-1/2 top-1/2 z-10 w-[216px] -translate-x-1/2 -translate-y-1/2 sm:bottom-[2.5vh] sm:top-auto sm:w-[224px] sm:translate-y-0 md:w-[244px] lg:w-[264px]">
        <FadeIn delay={0.6} y={30} className="w-full">
          {/* Bewusst still: kein Magnet-Effekt mehr. Das iPhone soll man
              anschauen und spaeter darin klicken, nicht dem Zeiger nachjagen. */}
          <IphoneFrame
            src={HERO.portrait.src}
            alt={HERO.portrait.alt}
            demoUrl={HERO.demoUrl}
            className="w-full"
          />
        </FadeIn>
      </div>
    </section>
  )
}
