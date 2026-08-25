import FadeIn from '../components/FadeIn'
import PageNav from '../components/PageNav'
import PageFooter from '../components/PageFooter'

/**
 * Impressum nach § 5 DDG (früher TMG). Die personen-/firmenbezogenen Pflicht-
 * angaben kann nur der Betreiber verbindlich eintragen - sie stehen hier als
 * klar markierte Platzhalter. Erfundene Angaben wären rechtlich falsch.
 */
export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-paper" style={{ overflowX: 'clip' }}>
      <PageNav />

      <article className="mx-auto max-w-3xl px-6 pb-20 pt-14 md:px-10 md:pt-20">
        <FadeIn y={30}>
          <h1
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 96px)' }}
          >
            Impressum
          </h1>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <div
            className="mt-8 rounded-2xl border border-flame/40 bg-flame/10 px-5 py-4 text-sm leading-relaxed text-ink"
            role="note"
          >
            <strong>Hinweis:</strong> Entwurf. Vor dem öffentlichen Start müssen die
            mit <code className="rounded bg-ink/10 px-1">[…]</code> markierten Pflicht­angaben
            (Name, Anschrift, Kontakt) durch die echten Daten des Betreibers ersetzt werden.
          </div>
        </FadeIn>

        <div className="mt-10 space-y-8 text-ink/85" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.1rem)', lineHeight: 1.7 }}>
          <section>
            <h2 className="mb-2 text-xl font-bold text-ink">Angaben gemäß § 5 DDG</h2>
            <p>
              [Vor- und Nachname]<br />
              [ggf. Firmenname / Rechtsform]<br />
              [Straße und Hausnummer]<br />
              [PLZ und Ort]<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-ink">Kontakt</h2>
            <p>
              E-Mail: [kontakt@allindrive.de – funktionierende Adresse eintragen]<br />
              Telefon: [optional]
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-ink">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              [Vor- und Nachname]<br />
              [Anschrift wie oben]
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-ink">Umsatzsteuer</h2>
            <p>
              [Umsatzsteuer-Identifikationsnummer nach § 27a UStG, falls vorhanden –
              sonst diesen Abschnitt entfernen.]
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-ink">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streit­beilegung (OS)
              bereit:{' '}
              <a
                className="text-flame underline underline-offset-2"
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Wir sind nicht verpflichtet und nicht bereit, an einem Streit­beilegungs­verfahren
              vor einer Verbraucher­schlichtungs­stelle teilzunehmen.
            </p>
          </section>
        </div>
      </article>

      <PageFooter />
    </main>
  )
}
