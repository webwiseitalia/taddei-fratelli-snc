import { motion } from 'framer-motion'
import {
  Home,
  Building2,
  Leaf,
  Paintbrush,
  Shield,
  CheckCircle2,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Phone,
  ArrowRight,
} from 'lucide-react'
import { PageHero } from '../components/Hero'
import Section, { SectionHeader } from '../components/Section'
import Button from '../components/Button'

const advantages = [
  {
    icon: Building2,
    title: 'Costruttori diretti',
    description: 'Non siamo intermediari. Vendiamo ciò che costruiamo. Conosci ogni dettaglio del tuo futuro immobile.',
  },
  {
    icon: Paintbrush,
    title: 'Personalizzazione totale',
    description: 'Acquistando sulla carta, puoi personalizzare finiture, impianti e distribuzione degli spazi.',
  },
  {
    icon: Leaf,
    title: 'Efficienza energetica',
    description: 'Tutti i nostri immobili sono progettati per massimizzare il comfort e minimizzare i consumi.',
  },
  {
    icon: Shield,
    title: 'Garanzia costruttore',
    description: 'Garanzia decennale sulle strutture. Assistenza post-vendita diretta dal costruttore.',
  },
]

const features = [
  'Classe energetica A o superiore',
  'Riscaldamento a pavimento',
  'Impianto fotovoltaico predisposto',
  'Cappotto termico certificato',
  'Infissi in PVC triplo vetro',
  'Ventilazione meccanica controllata',
  'Domotica predisposta',
  'Box auto incluso',
  'Giardino privato o terrazzo',
  'Materiali di prima scelta',
]

const properties = [
  {
    id: 1,
    title: 'Residenza Valle Verde',
    location: 'Corteno Golgi',
    type: 'Appartamento',
    size: '85 mq',
    rooms: 3,
    baths: 2,
    status: 'In costruzione',
    price: 'Da € 180.000',
  },
  {
    id: 2,
    title: 'Villa Singola Panoramica',
    location: 'Edolo',
    type: 'Villa',
    size: '150 mq',
    rooms: 4,
    baths: 3,
    status: 'Disponibile',
    price: 'Su richiesta',
  },
  {
    id: 3,
    title: 'Bilocale Centro Storico',
    location: 'Ponte di Legno',
    type: 'Appartamento',
    size: '55 mq',
    rooms: 2,
    baths: 1,
    status: 'Venduto',
    price: '-',
  },
]

const process = [
  {
    step: '01',
    title: 'Primo contatto',
    description: 'Raccontaci cosa cerchi: zona, metratura, budget. Ti proponiamo le soluzioni più adatte.',
  },
  {
    step: '02',
    title: 'Visita e proposta',
    description: 'Visitiamo insieme il cantiere o l\'immobile finito. Ti presentiamo la proposta dettagliata.',
  },
  {
    step: '03',
    title: 'Personalizzazione',
    description: 'Se acquisti sulla carta, definiamo insieme le personalizzazioni desiderate.',
  },
  {
    step: '04',
    title: 'Acquisto',
    description: 'Ti accompagniamo in ogni fase burocratica fino al rogito notarile.',
  },
  {
    step: '05',
    title: 'Consegna chiavi',
    description: 'Consegniamo l\'immobile finito, collaudato e pronto per essere abitato.',
  },
]

export default function Immobiliare() {
  return (
    <>
      <PageHero
        tag="Immobiliare"
        title="Compri dal costruttore. Senza intermediari."
        subtitle="Immobiliare Taddei Srl: vendita diretta di immobili residenziali di nuova costruzione. Dalla fondazione alle chiavi, tutto in casa nostra."
      />

      {/* Intro */}
      <Section>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg text-white mb-6">
                Sappiamo cosa vendiamo.{' '}
                <span className="text-gradient">Perché l'abbiamo costruito noi.</span>
              </h2>
              <div className="space-y-4 text-dark-300 leading-relaxed">
                <p>
                  <strong className="text-white">Immobiliare Taddei Srl</strong> nasce per completare
                  la filiera. Costruiamo e vendiamo direttamente, senza passare attraverso agenzie
                  o intermediari.
                </p>
                <p>
                  Questo significa che quando ti raccontiamo di un immobile, conosciamo ogni dettaglio:
                  quali materiali abbiamo usato, come abbiamo risolto ogni problema tecnico, perché
                  abbiamo fatto certe scelte costruttive.
                </p>
                <p>
                  E soprattutto significa che siamo qui, a rispondere delle nostre costruzioni,
                  anche dopo la vendita. Non c'è un'agenzia che sparisce dopo il rogito.
                  C'è il costruttore, pronto a garantire ciò che ha costruito.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-dark-900 border border-dark-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Home className="w-24 h-24 text-primary-500/30 mx-auto mb-4" />
                    <span className="text-dark-500 uppercase tracking-widest text-sm">
                      Immagine progetto
                    </span>
                  </div>
                </div>
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary-500" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Advantages */}
      <Section dark>
        <div className="container-custom">
          <SectionHeader
            tag="Perché sceglierci"
            title="I vantaggi di comprare dal costruttore"
            description="Niente commissioni d'agenzia. Niente sorprese. Solo trasparenza e qualità garantita."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-dark card-hover text-center"
              >
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <advantage.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="heading-sm text-white mb-3">{advantage.title}</h3>
                <p className="text-dark-400 text-sm">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Properties */}
      <Section>
        <div className="container-custom">
          <SectionHeader
            tag="Offerte immobiliari"
            title="I nostri progetti"
            description="Immobili in costruzione e disponibili. Contattaci per informazioni dettagliate e visite."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-dark card-hover group"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/10] bg-dark-800 relative mb-6 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Home className="w-16 h-16 text-dark-700" />
                  </div>
                  {/* Status badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                    property.status === 'Disponibile'
                      ? 'bg-green-500 text-white'
                      : property.status === 'In costruzione'
                      ? 'bg-primary-500 text-white'
                      : 'bg-dark-600 text-dark-300'
                  }`}>
                    {property.status}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-2 text-dark-400 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    {property.location}
                  </div>
                  <h3 className="heading-sm text-white mb-3">{property.title}</h3>

                  {/* Features */}
                  <div className="flex items-center gap-4 text-dark-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Maximize className="w-4 h-4" />
                      {property.size}
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      {property.rooms}
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      {property.baths}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-dark-700">
                    <span className="text-lg font-heading font-bold text-primary-500">
                      {property.price}
                    </span>
                    {property.status !== 'Venduto' && (
                      <span className="text-sm text-dark-400 group-hover:text-primary-500 transition-colors flex items-center">
                        Info <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-dark-400 mb-6">
              Cerchi qualcosa di specifico? Contattaci per conoscere tutti i progetti disponibili.
            </p>
            <Button to="/contatti" variant="primary">
              Richiedi informazioni
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Features */}
      <Section dark>
        <div className="container-custom">
          <SectionHeader
            tag="Standard costruttivi"
            title="Cosa trovi nei nostri immobili"
            description="Qualità costruttiva elevata, materiali selezionati e massima efficienza energetica. Standard, non optional."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-dark"
          >
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-dark-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <div className="container-custom">
          <SectionHeader
            tag="Come funziona"
            title="Il percorso verso casa tua"
            description="Dall'interesse all'acquisto, ti accompagniamo in ogni passo."
          />

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-dark-700 -translate-x-1/2 z-0" />
                )}

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary-500 text-white font-heading font-bold text-sm flex items-center justify-center mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-dark-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative max-w-2xl">
              <h2 className="heading-lg text-white mb-4">
                Cerchi casa in Valle Camonica?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Contatta Immobiliare Taddei per scoprire le opportunità disponibili.
                Nessun impegno, massima trasparenza.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  to="/contatti"
                  className="bg-white text-primary-600 hover:bg-dark-100"
                >
                  Contattaci
                </Button>
                <a
                  href="tel:036474313"
                  className="btn-secondary border-white text-white hover:bg-white/10 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  0364 74313
                </a>
              </div>
              <p className="mt-6 text-white/60 text-sm">
                <strong>Referente:</strong> Geom. Taddei Nicola – immobiliare@societataddei.it
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
