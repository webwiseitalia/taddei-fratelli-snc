import { motion } from 'framer-motion'
import { ExternalLink, Award, CheckCircle2 } from 'lucide-react'
import { PageHero } from '../components/Hero'
import Section, { SectionHeader } from '../components/Section'
import Button from '../components/Button'

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
    description: 'Soluzioni per l\'isolamento acustico. Comfort abitativo garantito.',
    specialization: ['Isolamento acustico', 'Sottopavimenti', 'Anticalpestio'],
  },
  {
    name: 'Project for Building',
    category: 'Sistemi costruttivi',
    description: 'Sistemi costruttivi innovativi per l\'edilizia moderna.',
    specialization: ['Sistemi a secco', 'Pareti divisorie', 'Controsoffitti'],
  },
]

const categories = [
  { name: 'Tutti', count: partners.length },
  { name: 'Coperture', count: 2 },
  { name: 'Isolamento', count: 3 },
  { name: 'Serramenti', count: 2 },
  { name: 'Malte e intonaci', count: 2 },
]

export default function Partner() {
  return (
    <>
      <PageHero
        tag="Partner"
        title="Lavoriamo con i migliori"
        subtitle="I nostri partner sono i leader di mercato. Prodotti certificati, assistenza garantita e qualità riconosciuta in tutto il mondo."
      />

      {/* Intro */}
      <Section>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg text-white mb-6">
                Qualità che fa la{' '}
                <span className="text-gradient">differenza</span>
              </h2>
              <p className="text-dark-300 text-lg leading-relaxed">
                In oltre 40 anni di attività abbiamo costruito relazioni solide con i migliori
                produttori del settore. Non scegliamo i fornitori per il prezzo più basso,
                ma per la qualità dei prodotti e l'affidabilità del servizio.
              </p>
              <p className="text-dark-400 mt-4">
                Siamo rivenditori autorizzati di tutti i marchi presenti in questa pagina.
                Questo significa garanzia originale, assistenza tecnica e ricambi sempre disponibili.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Partners Grid */}
      <Section dark>
        <div className="container-custom">
          <SectionHeader
            tag="I nostri partner"
            title="Marchi di cui ci fidiamo"
            description="Una selezione dei principali brand che trattiamo. Per l'elenco completo, contattaci o vieni a trovarci in magazzino."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card-dark card-hover group"
              >
                {/* Logo placeholder */}
                <div className="h-20 bg-dark-800/50 flex items-center justify-center mb-6 group-hover:bg-dark-800 transition-colors">
                  <span className="text-2xl font-heading font-bold text-dark-500 group-hover:text-primary-500 transition-colors">
                    {partner.name}
                  </span>
                </div>

                {/* Category tag */}
                <div className="inline-block px-3 py-1 bg-primary-500/10 text-primary-500 text-xs font-semibold uppercase tracking-wider mb-3">
                  {partner.category}
                </div>

                {/* Content */}
                <h3 className="heading-sm text-white mb-2">{partner.name}</h3>
                <p className="text-dark-400 text-sm mb-4">{partner.description}</p>

                {/* Specializations */}
                <div className="pt-4 border-t border-dark-700">
                  <span className="text-xs text-dark-500 uppercase tracking-wider mb-2 block">
                    Prodotti disponibili:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {partner.specialization.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs text-dark-400 bg-dark-800 px-2 py-1"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 bg-primary-500/10 text-primary-500 text-sm font-semibold tracking-wider uppercase mb-4">
                Perché i partner contano
              </span>
              <h2 className="heading-lg text-white mb-6">
                Dietro ogni prodotto, c'è una{' '}
                <span className="text-gradient">garanzia</span>
              </h2>
              <div className="space-y-4 text-dark-300 leading-relaxed">
                <p>
                  Scegliere un fornitore non significa solo comprare prodotti. Significa affidarsi
                  a un ecosistema di qualità, assistenza e innovazione continua.
                </p>
                <p>
                  I nostri partner investono in ricerca, offrono formazione ai nostri tecnici e
                  garantiscono supporto costante. Quando compri da noi, stai comprando molto più
                  di un materiale.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  'Garanzia originale del produttore',
                  'Assistenza tecnica specializzata',
                  'Ricambi sempre disponibili',
                  'Formazione continua del personale',
                  'Aggiornamento costante sui nuovi prodotti',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 text-dark-300">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card-dark border-primary-500/30 bg-primary-500/5">
                <Award className="w-12 h-12 text-primary-500 mb-6" />
                <h3 className="heading-md text-white mb-4">
                  Rivenditori Autorizzati
                </h3>
                <p className="text-dark-400 mb-6">
                  Siamo rivenditori ufficiali di tutti i marchi presenti in questa pagina.
                  Questo significa che puoi contare su:
                </p>
                <ul className="space-y-3 text-dark-300">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary-500 text-white text-sm flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    <span>Prodotti originali, mai paralleli o di seconda mano</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary-500 text-white text-sm flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    <span>Garanzia valida e riconosciuta dal produttore</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary-500 text-white text-sm flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    <span>Assistenza post-vendita diretta e competente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary-500 text-white text-sm flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                    <span>Prezzi di listino ufficiali, mai gonfiati</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="container-custom">
          <div className="card-dark text-center py-12 md:py-16">
            <h2 className="heading-md text-white mb-4">
              Cerchi un prodotto specifico?
            </h2>
            <p className="text-dark-400 text-lg mb-8 max-w-2xl mx-auto">
              Se non trovi quello che cerchi nell'elenco, contattaci.
              Trattiamo molti altri marchi e possiamo ordinare prodotti su richiesta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contatti" variant="primary">
                Contattaci
              </Button>
              <Button to="/magazzino" variant="secondary">
                Vai al magazzino
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
