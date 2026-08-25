import FadeIn from './FadeIn'
import { NAV_LINKS, asset } from '../data/content'

/**
 * Gemeinsame Kopfzeile aller Unterseiten: Wortmarke (zur Startseite) + die
 * Sales-Navigation. `current` hebt den aktiven Punkt hervor.
 */
export default function PageNav({ current }: { current?: string }) {
  return (
    <FadeIn
      as="nav"
      delay={0}
      y={-20}
      className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8"
    >
      <a
        href={asset('')}
        className="font-brand text-2xl font-extrabold leading-none text-ink md:text-3xl"
        aria-label="Zur Startseite"
      >
        Allindrive<span className="text-flame">.</span>
      </a>

      <div className="hidden items-center gap-5 text-sm font-medium uppercase tracking-wider text-ink sm:flex md:gap-8 md:text-base">
        {NAV_LINKS.map((link) => (
          <a
            key={link.key}
            href={link.href}
            aria-current={current === link.key ? 'page' : undefined}
            className={
              'transition-opacity duration-200 ease-out hover:opacity-70 ' +
              (current === link.key ? 'text-flame' : '')
            }
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobil kompakt: nur Kontakt, damit nichts ueberlaeuft. */}
      <a
        href={asset('/kontakt/')}
        className="text-sm font-medium uppercase tracking-wider text-ink transition-opacity duration-200 hover:opacity-70 sm:hidden"
      >
        Kontakt
      </a>
    </FadeIn>
  )
}
