import { NAV_LINKS, asset } from '../data/content'

/** Gemeinsamer Footer aller Unterseiten. */
export default function PageFooter() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-12 md:px-10">
      <div className="flex flex-col gap-4 border-t border-chalk/15 pt-8 text-chalk/50 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs sm:text-sm">© 2026 Allindrive · Im Beta-Betrieb, Zugänge nach Absprache</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm" aria-label="Seiten">
          <a className="transition-opacity duration-200 hover:opacity-70" href={asset('')}>
            Start
          </a>
          {NAV_LINKS.map((l) => (
            <a key={l.key} className="transition-opacity duration-200 hover:opacity-70" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
