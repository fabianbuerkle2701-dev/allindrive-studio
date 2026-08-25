import FadeIn from '../components/FadeIn'
import PageNav from '../components/PageNav'
import PageFooter from '../components/PageFooter'
import { asset } from '../data/content'

/**
 * Datenschutzerklärung. Der Inhalt beschreibt das TATSÄCHLICHE Verhalten dieser
 * Seite (statisches Hosting auf GitHub Pages, selbst gehostete Schrift, keine
 * Cookies/kein Tracking, klickbare App-Vorschau erst nach Tippen). Nur die
 * Angaben zum Verantwortlichen muss der Betreiber ergänzen (siehe Impressum).
 */
export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-paper" style={{ overflowX: 'clip' }}>
      <PageNav />

      <article className="mx-auto max-w-3xl px-6 pb-20 pt-14 md:px-10 md:pt-20">
        <FadeIn y={30}>
          <h1
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 9vw, 84px)' }}
          >
            Datenschutz
          </h1>
        </FadeIn>

        <div className="mt-10 space-y-8 text-ink/85" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.1rem)', lineHeight: 1.7 }}>
          <p>
            Der Schutz deiner Daten ist uns wichtig. Diese Seite ist bewusst sparsam
            gebaut: Sie setzt keine Cookies, bindet keine Analyse- oder Werbedienste ein
            und lädt keine Schriften oder Skripte von fremden Servern.
          </p>

          <section>
            <h2 className="mb-2 text-xl font-bold text-ink">1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist der im{' '}
              <a className="text-flame underline underline-offset-2" href={asset('/impressum/')}>
                Impressum
              </a>{' '}
              genannte Betreiber.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-ink">2. Hosting &amp; Server-Logdateien</h2>
            <p>
              Diese Website wird als statische Seite über <strong>GitHub Pages</strong> (GitHub, Inc.,
              88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA) ausgeliefert. Beim Aufruf
              verarbeitet der Hoster technisch notwendige Zugriffsdaten (u. a. IP-Adresse, Datum und
              Uhrzeit, aufgerufene Datei, übertragene Datenmenge, Browsertyp). Rechtsgrundlage ist
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren, funktionsfähigen
              Bereitstellung). Für die Übermittlung in die USA stützt sich GitHub auf Standard­vertrags­klauseln.
              Details:{' '}
              <a
                className="text-flame underline underline-offset-2"
                href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub Privacy Statement
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-ink">3. Schriften</h2>
            <p>
              Die verwendete Schrift (Baloo&nbsp;2) wird <strong>lokal vom eigenen Server</strong> geladen.
              Es besteht keine Verbindung zu Google Fonts oder anderen Dritt-Servern; deine IP-Adresse
              wird dafür nicht an Dritte übertragen.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-ink">4. Keine Cookies, kein Tracking</h2>
            <p>
              Diese Website verwendet keine Cookies, kein Web-Analyse-Tool, keine Reichweiten­messung
              und keine Werbe-Netzwerke. Es werden keine Profile über dein Verhalten erstellt.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-ink">5. Klickbare App-Vorschau</h2>
            <p>
              Auf der Startseite kannst du eine klickbare Vorschau der App starten. Erst wenn du sie
              antippst, wird die eigentliche Anwendung von <strong>allindrive.netlify.app</strong> in
              einem eingebetteten Rahmen geladen. Dabei werden – wie bei jedem Seitenaufruf – technische
              Verbindungsdaten (u. a. IP-Adresse) an den App-Anbieter bzw. dessen Dienstleister
              (Netlify, Supabase) übertragen. Die Vorschau nutzt einen schreibgeschützten Demo-Zugang;
              es werden keine von dir eingegebenen Daten gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1
              lit. f DSGVO (Interesse an einer aussagekräftigen Produkt­vorschau). Solange du die Vorschau
              nicht startest, findet keine dieser Verbindungen statt.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-ink">6. Kontaktaufnahme</h2>
            <p>
              Wenn du uns per E-Mail kontaktierst, verarbeiten wir die von dir übermittelten Daten
              (z. B. Name, E-Mail-Adresse, Nachricht) ausschließlich zur Bearbeitung deiner Anfrage.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. f DSGVO. Die Daten werden gelöscht, sobald
              sie nicht mehr benötigt werden und keine gesetzlichen Aufbewahrungs­pflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-ink">7. Deine Rechte</h2>
            <p>
              Du hast das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17),
              Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie ein
              Widerspruchsrecht (Art. 21 DSGVO). Wende dich dazu an den im Impressum genannten
              Verantwortlichen. Außerdem steht dir ein Beschwerderecht bei einer Datenschutz-Aufsichts­behörde zu.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-ink">8. Verschlüsselung</h2>
            <p>
              Diese Seite wird ausschließlich verschlüsselt über HTTPS ausgeliefert, um die Übertragung
              zu schützen.
            </p>
          </section>

          <p className="text-sm text-ink/60">Stand: August 2026.</p>
        </div>
      </article>

      <PageFooter />
    </main>
  )
}
