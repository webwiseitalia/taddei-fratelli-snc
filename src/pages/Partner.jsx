import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Award, CheckCircle2, ArrowRight } from 'lucide-react'

import imgMagazzino from '../assets/magazzino-esterno.webp'

const partners = [
  {
    name: 'Velux',
    category: 'Finestre per tetti',
    description: 'Leader mondiale nelle finestre per tetti. Luce naturale e ventilazione per ogni ambiente.',
    specialization: ['Finestre per tetti', 'Tapparelle e tende', 'Tunnel solari'],
  },
  {
    name: 'Kerakoll',
    category: 'Materiali per edilizia',
    description: 'Sistemi per la posa di ceramiche, risanamento e bioedilizia. Qualità made in Italy.',
    specialization: ['Adesivi per piastrelle', 'Sistemi a cappotto', 'Malte e intonaci'],
  },
  {
    name: 'Eclisse',
    category: 'Controtelai',
    description: 'Controtelai per porte scorrevoli a scomparsa. Design e funzionalità per ogni ambiente.',
    specialization: ['Porte scorrevoli', 'Controtelai speciali', 'Soluzioni vetrate'],
  },
  {
    name: 'Wierer',
    category: 'Coperture',
    description: 'Tegole e coppi di qualità superiore. Coperture durature e resistenti nel tempo.',
    specialization: ['Tegole in cemento', 'Coppi', 'Accessori copertura'],
  },
  {
    name: 'Fassa Bortolo',
    category: 'Malte e intonaci',
    description: 'Malte premiscelate e intonaci per ogni applicazione. Tradizione e innovazione.',
    specialization: ['Malte premiscelate', 'Intonaci', 'Massetti'],
  },
  {
    name: 'Ytong',
    category: 'Blocchi in calcestruzzo aerato',
    description: 'Blocchi in calcestruzzo aerato autoclavato. Isolamento termico eccellente.',
    specialization: ['Blocchi da muro', 'Solai', 'Architravi'],
  },
  {
    name: 'Isotex',
    category: 'Blocchi cassero',
    description: 'Blocchi cassero in legno cemento. Costruire isolato, naturalmente.',
    specialization: ['Blocchi cassero', 'Solai', 'Sistemi costruttivi'],
  },
  {
    name: 'Isolmant',
    category: 'Isolamento acustico',
    description: "Soluzioni per l'isolamento acustico. Comfort abitativo garantito.",
    specialization: ['Isolamento acustico', 'Sottopavimenti', 'Anticalpestio'],
  },
  {
    name: 'Project for Building',
    category: 'Sistemi costruttivi',
    description: "Sistemi costruttivi innovativi per l'edilizia moderna.",
    specialization: ['Sistemi a secco', 'Pareti divisorie', 'Controsoffitti'],
  },
]

export default function Partner() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={imgMagazzino} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/95 to-neutral-900/80" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Partner</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Lavoriamo con i migliori. <span className="text-brand-500">Qualità garantita.</span>
            </h1>
            <p className="text-lg text-neutral-300 max-w-2xl">
              I nostri partner sono i leader di mercato. Prodotti certificati, assistenza garantita e qualità riconosciuta in tutto il mondo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Qualità che fa la <span className="text-brand-500">differenza</span>
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed">
                In oltre 40 anni di attività abbiamo costruito relazioni solide con i migliori produttori del settore. Non scegliamo i fornitori per il prezzo più basso, ma per la qualità dei prodotti e l'affidabilità del servizio.
              </p>
              <p className="text-neutral-500 mt-4">
                Siamo rivenditori autorizzati di tutti i marchi presenti in questa pagina. Questo significa garanzia originale, assistenza tecnica e ricambi sempre disponibili.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">I nostri partner</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3">Marchi di cui ci fidiamo</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, i) => (
              <motion.div key={partner.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white p-6 shadow-sm hover:shadow-md transition-all border-l-4 border-brand-500 group">
                {/* Logo placeholder */}
                <div className="h-20 bg-neutral-100 flex items-center justify-center mb-6 group-hover:bg-brand-500/10 transition-colors">
                  <span className="text-2xl font-bold text-neutral-400 group-hover:text-brand-500 transition-colors">
                    {partner.name}
                  </span>
                </div>

                {/* Category tag */}
                <div className="inline-block px-3 py-1 bg-brand-500 text-white text-xs font-semibold uppercase tracking-wider mb-3">
                  {partner.category}
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-2">{partner.name}</h3>
                <p className="text-neutral-600 text-sm mb-4">{partner.description}</p>

                {/* Specializations */}
                <div className="pt-4 border-t border-neutral-200">
                  <span className="text-xs text-neutral-500 uppercase tracking-wider mb-2 block">Prodotti disponibili:</span>
                  <div className="flex flex-wrap gap-2">
                    {partner.specialization.map((spec) => (
                      <span key={spec} className="text-xs text-neutral-600 bg-neutral-100 px-2 py-1">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Perché i partner contano</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-6">
                Dietro ogni prodotto, c'è una <span className="text-brand-500">garanzia</span>
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>Scegliere un fornitore non significa solo comprare prodotti. Significa affidarsi a un ecosistema di qualità, assistenza e innovazione continua.</p>
                <p>I nostri partner investono in ricerca, offrono formazione ai nostri tecnici e garantiscono supporto costante. Quando compri da noi, stai comprando molto più di un materiale.</p>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  'Garanzia originale del produttore',
                  'Assistenza tecnica specializzata',
                  'Ricambi sempre disponibili',
                  'Formazione continua del personale',
                  'Aggiornamento costante sui nuovi prodotti',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 text-neutral-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-brand-500 p-8">
                <Award className="w-12 h-12 text-white/80 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Rivenditori Autorizzati</h3>
                <p className="text-white/90 mb-6">
                  Siamo rivenditori ufficiali di tutti i marchi presenti in questa pagina. Questo significa che puoi contare su:
                </p>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-white text-brand-500 text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    <span>Prodotti originali, mai paralleli o di seconda mano</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-white text-brand-500 text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    <span>Garanzia valida e riconosciuta dal produttore</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-white text-brand-500 text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    <span>Assistenza post-vendita diretta e competente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-white text-brand-500 text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                    <span>Prezzi di listino ufficiali, mai gonfiati</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Cerchi un prodotto specifico?</h2>
          <p className="text-lg text-neutral-300 mb-10">
            Se non trovi quello che cerchi nell'elenco, contattaci. Trattiamo molti altri marchi e possiamo ordinare prodotti su richiesta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contatti" className="inline-flex items-center justify-center gap-3 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 font-semibold transition-all group">
              Contattaci <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/magazzino" className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 font-semibold transition-all border border-white/20">
              Vai al magazzino
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
