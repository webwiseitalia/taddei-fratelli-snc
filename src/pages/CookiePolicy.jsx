import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Cookie, Mail, Phone, MapPin, CheckCircle, XCircle } from 'lucide-react'
import { SITE_INFO, CONTACT_INFO } from '../constants/siteData'

export default function CookiePolicy() {
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
              <Cookie className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white">Cookie Policy</h1>
              <p className="text-neutral-500 text-sm">Informativa sull'utilizzo dei cookie</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-fluid py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111111] rounded-2xl p-8 lg:p-12 border border-neutral-800">
            <p className="text-neutral-500 text-sm mb-8">Ultimo aggiornamento: {lastUpdated}</p>

            {/* Privacy friendly notice */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-10">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-green-400 font-semibold mb-2">Sito Privacy-Friendly</p>
                  <p className="text-neutral-300 text-sm">
                    Questo sito web utilizza <strong>solo cookie tecnici</strong> necessari al funzionamento. <strong>Non utilizziamo cookie di profilazione, tracciamento o analisi</strong>. La tua privacy è protetta e non serve il tuo consenso per la navigazione.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">1. Cosa sono i Cookie</h2>
              <p className="text-neutral-400">
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone) quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune informazioni sulle tue preferenze o azioni passate.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">2. Tipologie di Cookie</h2>

              <h3 className="text-lg font-semibold text-white mb-3">2.1 Cookie Tecnici</h3>
              <p className="text-neutral-400 mb-4">
                Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base. Senza questi cookie, il sito potrebbe non funzionare correttamente.
              </p>
              <div className="bg-[#0a0a0a] rounded-lg p-4 border border-neutral-800 mb-6">
                <p className="text-blue-400 font-semibold mb-2">Cookie tecnici utilizzati su questo sito:</p>
                <ul className="text-neutral-300 text-sm space-y-1">
                  <li>• Cookie di navigazione e di sessione</li>
                  <li>• Cookie per memorizzare le preferenze dell'interfaccia</li>
                </ul>
                <p className="text-neutral-500 text-xs mt-3">
                  Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell'utente.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">2.2 Cookie Analitici</h3>
              <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-400 font-semibold">NON UTILIZZATI</p>
                  <p className="text-neutral-400 text-sm">
                    Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">2.3 Cookie di Profilazione</h3>
              <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-400 font-semibold">NON UTILIZZATI</p>
                  <p className="text-neutral-400 text-sm">
                    Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">2.4 Cookie di Terze Parti</h3>
              <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-400 font-semibold">NON UTILIZZATI</p>
                  <p className="text-neutral-400 text-sm">
                    Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">3. Cookie Utilizzati su Questo Sito</h2>
              <p className="text-neutral-400 mb-4">Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:</p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-700">
                      <th className="text-left py-3 px-4 text-white font-semibold">Nome Cookie</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Tipologia</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Finalità</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Durata</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-800">
                      <td className="py-3 px-4 text-neutral-300">taddei-fratelli-snc-cookie-consent</td>
                      <td className="py-3 px-4"><span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Tecnico</span></td>
                      <td className="py-3 px-4 text-neutral-400">Memorizza lo stato di accettazione/chiusura della barra laterale per migliorare l'esperienza di navigazione</td>
                      <td className="py-3 px-4 text-neutral-400">1 anno</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
                <p className="text-blue-400 font-semibold mb-2">Nota importante:</p>
                <p className="text-neutral-300 text-sm">
                  I cookie tecnici come quello indicato sopra sono essenziali per il funzionamento del sito e non richiedono il consenso dell'utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">4. Come Gestire i Cookie</h2>
              <p className="text-neutral-400 mb-4">
                Anche se i cookie tecnici non richiedono consenso, puoi comunque gestirli o eliminarli attraverso le impostazioni del tuo browser:
              </p>
              <p className="text-white font-semibold mb-3">Disabilitare i cookie tramite il browser:</p>
              <ul className="text-neutral-400 space-y-2 mb-6">
                <li>• <strong className="text-white">Google Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
                <li>• <strong className="text-white">Mozilla Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti web</li>
                <li>• <strong className="text-white">Safari:</strong> Preferenze → Privacy → Cookie e dati dei siti web</li>
                <li>• <strong className="text-white">Microsoft Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito → Gestisci e elimina cookie</li>
              </ul>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-400 font-semibold mb-2">Attenzione:</p>
                <p className="text-neutral-300 text-sm">
                  La disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la qualità dell'esperienza di navigazione.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">5. Link a Siti Esterni</h2>
              <p className="text-neutral-400">
                Il nostro sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">6. Aggiornamenti della Cookie Policy</h2>
              <p className="text-neutral-400 mb-4">
                Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate attraverso un avviso pubblicato su questa pagina.
              </p>
              <p className="text-neutral-400">
                Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato sull'utilizzo dei cookie sul nostro sito.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">7. Base Normativa</h2>
              <p className="text-neutral-400 mb-4">Questa Cookie Policy è redatta in conformità a:</p>
              <ul className="list-disc list-inside text-neutral-400 space-y-1">
                <li>Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</li>
                <li>Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</li>
                <li>Provvedimento del Garante per la protezione dei dati personali dell'8 maggio 2014, n. 229</li>
                <li>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">8. Contatti</h2>
              <p className="text-neutral-400 mb-4">
                Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:
              </p>
              <div className="bg-[#0a0a0a] rounded-lg p-6 border border-neutral-800">
                <p className="text-white font-semibold mb-3">{SITE_INFO.legalName}</p>
                <div className="space-y-2 text-neutral-400 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    {CONTACT_INFO.address.full}
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <a href={`mailto:${CONTACT_INFO.email.main}`} className="text-blue-500 hover:underline">
                      {CONTACT_INFO.email.main}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-500" />
                    {CONTACT_INFO.phone.display}
                  </div>
                </div>
              </div>
            </section>

            {/* Zero tracking badge */}
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Zero Tracciamento</h3>
              <p className="text-neutral-400">
                Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online
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
              to="/privacy-policy"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Leggi la Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
