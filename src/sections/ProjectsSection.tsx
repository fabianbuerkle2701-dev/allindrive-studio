import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import { LiveProjectButton } from '../components/Buttons'
import { PROJECTS } from '../data/content'

type Project = (typeof PROJECTS)[number]

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]'

type KarteProps = {
  project: Project
  index: number
  total: number
}

/**
 * Eine Karte im Sticky-Stapel. Der aeussere Behaelter ist hoch genug, dass die
 * Karte in ihm kleben bleibt, waehrend die naechste heranfaehrt; der Massstab
 * folgt dem Fortschritt genau dieses Behaelters, damit jede Karte einzeln
 * schrumpft statt alle gemeinsam.
 */
function Karte({ project, index, total }: KarteProps) {
  const behaelterRef = useRef<HTMLDivElement>(null)
  const reduziert = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: behaelterRef,
    offset: ['start end', 'start start'],
  })

  // Die unterste Karte bleibt bei 1, jede darueber liegende wird um 3 Prozent kleiner.
  const zielMassstab = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduziert ? 1 : zielMassstab])

  return (
    // Der BEHAELTER klebt, nicht die Karte. Mit sticky auf der Karte loest sich
    // jede Karte, sobald ihr eigener Behaelter durchgescrollt ist, und die
    // naechste nimmt ihren Platz ein: Es waeren nie zwei Karten gleichzeitig zu
    // sehen und der Versatz von 28 Pixeln je Karte wuerde nie sichtbar. Der
    // Stapel entsteht erst dadurch, dass jeder Behaelter oben stehen bleibt und
    // der naechste sich darueber schiebt.
    <div
      ref={behaelterRef}
      className="sticky top-0 flex h-[100svh] items-start justify-center"
    >
      <motion.div
        // Der Versatz je Karte haengt die Karten treppenfoermig untereinander,
        // sodass von jeder verdeckten Karte die Oberkante stehen bleibt. Der
        // Grundabstand faellt auf niedrigen Bildschirmen mit, sonst schiebt die
        // Karte unten aus dem Bild.
        style={{
          scale,
          transformOrigin: 'top center',
          top: `calc(clamp(1.5rem, 8vh, 6rem) + ${index * 28}px)`,
        }}
        className={`relative mx-auto w-full max-w-6xl border-2 border-chalk bg-ink p-4 sm:p-6 md:p-8 ${RADIUS}`}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4 sm:gap-6">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              {project.no}
            </span>
            <span className="flex flex-col gap-1 pt-1">
              <span className="text-xs uppercase tracking-widest text-chalk/60 sm:text-sm">
                {project.label}
              </span>
              <span
                className="font-medium uppercase leading-tight text-chalk"
                style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2rem)' }}
              >
                {project.name}
              </span>
            </span>
          </div>

          <LiveProjectButton />
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-[40%_1fr] sm:gap-4 md:mt-8">
          <div className="flex flex-col gap-3 sm:gap-4">
            <img
              src={project.col1[0].src}
              alt={project.col1[0].alt}
              loading="lazy"
              decoding="async"
              className={`w-full object-cover object-top ${RADIUS}`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1[1].src}
              alt={project.col1[1].alt}
              loading="lazy"
              decoding="async"
              className={`w-full object-cover object-top ${RADIUS}`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>

          {/* Ab sm zieht sich das hohe Bild auf die Hoehe der linken Spalte,
              statt einer eigenen Rechnung zu folgen: Die beiden Spalten waren
              sonst je nach Fensterbreite um bis zu acht Pixel versetzt. */}
          <img
            src={project.col2.src}
            alt={project.col2.alt}
            loading="lazy"
            decoding="async"
            className={`h-[clamp(302px,38vw,578px)] w-full object-cover object-top sm:h-full ${RADIUS}`}
          />
        </div>
      </motion.div>
    </div>
  )
}

/**
 * Dunkler Block mit den drei Einblicken. Wichtig: In dieser Section darf kein
 * Vorfahre overflow-hidden setzen, sonst faellt der Sticky-Stapel aus.
 */
export default function ProjectsSection() {
  return (
    <section
      id="einblick"
      className="relative z-10 -mt-10 bg-ink px-5 pb-24 pt-20 sm:-mt-12 sm:px-8 sm:pt-24 md:-mt-14 md:px-10 md:pt-28 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
    >
      <FadeIn
        as="h2"
        className="hero-heading mb-14 text-center font-black uppercase leading-none tracking-tight sm:mb-16 md:mb-20"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Einblick
      </FadeIn>

      {PROJECTS.map((project, index) => (
        <Karte
          key={project.no}
          project={project}
          index={index}
          total={PROJECTS.length}
        />
      ))}
    </section>
  )
}
