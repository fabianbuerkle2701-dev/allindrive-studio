import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import { ContactButton } from '../components/Buttons'
import { ABOUT } from '../data/content'

type Corner = {
  image: { src: string; alt: string }
  /** Position und Breite der Ecke, von klein nach gross. */
  box: string
  delay: number
  /** Negativ heisst: kommt von links herein. */
  x: number
}

const CORNERS: Corner[] = [
  {
    image: ABOUT.corners.topLeft,
    box: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    delay: 0.1,
    x: -80,
  },
  {
    image: ABOUT.corners.bottomLeft,
    box: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]',
    delay: 0.25,
    x: -80,
  },
  {
    image: ABOUT.corners.topRight,
    box: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    delay: 0.15,
    x: 80,
  },
  {
    image: ABOUT.corners.bottomRight,
    box: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]',
    delay: 0.3,
    x: 80,
  },
]

/**
 * Der Text steht in der Mitte, vier Aufnahmen aus der App rahmen ihn ein.
 * Unter sm sind die Ecken ausgeblendet: Dort waere kein Platz neben dem
 * Satz, die Bilder laegen darunter.
 */
export default function AboutSection() {
  return (
    <section
      id="ueber"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10"
    >
      {CORNERS.map((corner) => (
        <FadeIn
          key={corner.image.src}
          delay={corner.delay}
          duration={0.9}
          x={corner.x}
          y={0}
          className={`pointer-events-none absolute hidden select-none sm:block ${corner.box}`}
        >
          <img
            src={corner.image.src}
            alt={corner.image.alt}
            loading="lazy"
            // opacity gehoert auf das Bild, nicht auf den Rahmen: FadeIn
            // schreibt dort selbst eine opacity und wuerde sie ueberschreiben.
            className="h-auto w-full select-none rounded-2xl object-cover opacity-70"
            style={{
              border: '1px solid rgba(237, 228, 214, 0.12)',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.45)',
            }}
          />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn
            as="h2"
            y={40}
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            {ABOUT.heading}
          </FadeIn>

          <AnimatedText
            text={ABOUT.text}
            className="mx-auto max-w-[560px] text-center font-medium leading-relaxed text-chalk"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <ContactButton />
      </div>
    </section>
  )
}
