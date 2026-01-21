import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Mail, Phone, MapPin } from 'lucide-react'
import { SITE_INFO, CONTACT_INFO } from '../constants/siteData'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const lastUpdated = '19/01/2025'

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Header */}
      <div className="bg-[#111111] border-b border-neutral-800">
        <div className="container-fluid py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-blue-500 transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alla Home
          </Link>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white">Privacy Policy</h1>
              <p className="text-neutral-500 text-sm">Informativa sul trattamento dei dati personali</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-fluid py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111111] rounded-2xl p-8 lg:p-12 border border-neutral-800">
            <p className="text-neutral-500 text-sm mb-8">Ultimo aggiornamento: {lastUpdated}</p>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">1. Titolare del Trattamento</h2>
              <p className="text-neutral-400 mb-4">Il Titolare del trattamento dei dati personali è:</p>

              <div className="bg-[#0a0a0a] rounded-lg p-6 border border-neutral-800">
                <p className="text-white font-semibold mb-2">{SITE_INFO.legalName}</p>
                <div className="space-y-2 text-neutral-400 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    {CONTACT_INFO.address.full}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-500" />
                    {CONTACT_INFO.phone.display}
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-500" />
                    {CONTACT_INFO.email.main}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">2. Dati Raccolti e Finalità del Trattamento</h2>

              <h3 className="text-lg font-semibold text-white mb-3">2.1 Dati forniti volontariamente dall'utente</h3>
              <p className="text-neutral-400 mb-4">
                Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:
              </p>
              <ul className="list-disc list-inside text-neutral-400 mb-6 space-y-1">
                <li><strong className="text-white">Nome e Cognome</strong> - per identificare l'interessato</li>
                <li><strong className="text-white">Indirizzo Email</strong> - per rispondere alle richieste</li>
                <li><strong className="text-white">Numero di Telefono</strong> (facoltativo) - per contatti telefonici</li>
                <li><strong className="text-white">Messaggio/Descrizione del Progetto</strong> - per comprendere le esigenze</li>
              </ul>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
                <p className="text-blue-400 font-semibold mb-2">Finalità:</p>
                <ul className="text-neutral-300 text-sm space-y-1">
                  <li>• Rispondere alle richieste di preventivo</li>
                  <li>• Fornire informazioni sui nostri servizi</li>
                  <li>• Organizzare sopralluoghi e consulazioni</li>
                  <li>• Gestire la relazione commerciale</li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">2.2 Base giuridica del trattamento</h3>
              <p className="text-neutral-400">
                Il trattamento è basato sul <strong className="text-white">consenso esplicito</strong> dell'interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso l'invio del modulo di contatto, e sulla <strong className="text-white">esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">3. Modalità di Trattamento</h2>
              <p className="text-neutral-400 mb-4">
                I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
              </p>
              <p className="text-neutral-400">
                Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita, distruzione o divulgazione.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">4. Conservazione dei Dati</h2>
              <p className="text-neutral-400 mb-4">
                I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le relazioni commerciali conseguenti:
              </p>
              <ul className="list-disc list-inside text-neutral-400 space-y-2">
                <li><strong className="text-white">Richieste di preventivo:</strong> i dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale</li>
                <li><strong className="text-white">Rapporti contrattuali:</strong> i dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
                <li><strong className="text-white">Richieste di informazioni:</strong> i dati vengono conservati per 12 mesi dalla risposta</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">5. Comunicazione e Diffusione dei Dati</h2>
              <p className="text-neutral-400 mb-4">
                I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:
              </p>
              <ul className="list-disc list-inside text-neutral-400 mb-6 space-y-1">
                <li>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
                <li>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
                <li>Autorità competenti in caso di richieste legittime previste per legge</li>
              </ul>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-400 font-semibold mb-2">I tuoi dati NON verranno MAI:</p>
                <ul className="text-neutral-300 text-sm space-y-1">
                  <li>• Venduti a terze parti</li>
                  <li>• Condivisi con scopi di marketing</li>
                  <li>• Utilizzati per invio di newsletter non richieste</li>
                  <li>• Trasferiti fuori dall'Unione Europea</li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">6. Diritti dell'Interessato</h2>
              <p className="text-neutral-400 mb-4">In qualità di interessato, hai il diritto di:</p>
              <ul className="list-disc list-inside text-neutral-400 space-y-2">
                <li><strong className="text-white">Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
                <li><strong className="text-white">Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti</li>
                <li><strong className="text-white">Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati ("diritto all'oblio")</li>
                <li><strong className="text-white">Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento</li>
                <li><strong className="text-white">Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
                <li><strong className="text-white">Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali</li>
                <li><strong className="text-white">Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento</li>
              </ul>

              <div className="bg-[#0a0a0a] rounded-lg p-4 mt-6 border border-neutral-800">
                <p className="text-white font-semibold mb-2">Come esercitare i tuoi diritti:</p>
                <p className="text-neutral-400 text-sm mb-2">
                  Puoi esercitare i tuoi diritti inviando una richiesta via email a{' '}
                  <a href={`mailto:${CONTACT_INFO.email.main}`} className="text-blue-500 hover:underline">
                    {CONTACT_INFO.email.main}
                  </a>
                  {' '}o tramite raccomandata A/R all'indirizzo: {CONTACT_INFO.address.full}.
                </p>
                <p className="text-neutral-500 text-sm">
                  Risponderemo entro <strong className="text-white">30 giorni</strong> dalla ricezione della richiesta.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">7. Diritto di Reclamo</h2>
              <p className="text-neutral-400 mb-4">
                Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali se ritieni che il trattamento dei tuoi dati violi il GDPR.
              </p>
              <div className="bg-[#0a0a0a] rounded-lg p-4 border border-neutral-800">
                <p className="text-white font-semibold mb-2">Garante per la protezione dei dati personali:</p>
                <p className="text-neutral-400 text-sm">
                  Sito web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">www.garanteprivacy.it</a><br />
                  Email: garante@gpdp.it<br />
                  PEC: protocollo@pec.gpdp.it
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">8. Cookie e Tecnologie di Tracciamento</h2>
              <p className="text-neutral-400">
                Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni, consulta la nostra{' '}
                <Link to="/cookie-policy" className="text-blue-500 hover:underline">Cookie Policy</Link>.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">9. Modifiche alla Privacy Policy</h2>
              <p className="text-neutral-400">
                Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">10. Contatti</h2>
              <p className="text-neutral-400 mb-4">
                Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:${CONTACT_INFO.email.main}`}
                  className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-500 px-4 py-3 rounded-lg hover:bg-blue-500/20 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  {CONTACT_INFO.email.main}
                </a>
                <a
                  href={CONTACT_INFO.phone.href}
                  className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-500 px-4 py-3 rounded-lg hover:bg-blue-500/20 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {CONTACT_INFO.phone.display}
                </a>
              </div>
            </section>

            {/* Footer note */}
            <div className="border-t border-neutral-800 pt-6 mt-10">
              <p className="text-neutral-500 text-sm text-center">
                Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 border border-neutral-700 text-neutral-300 px-6 py-3 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
              Torna alla Home
            </Link>
            <Link
              to="/cookie-policy"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Leggi la Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
