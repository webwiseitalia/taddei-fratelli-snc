import { Link } from 'react-router-dom'
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

import imgResidenze from '../assets/residenze-montagna-colorate.webp'
import imgEdificio from '../assets/edificio-legno-pietra.webp'
import imgResidenzeLegno from '../assets/residenze-legno-montagna.webp'

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
    image: 'residenze',
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
    image: 'edificio',
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
    image: 'legno',
  },
]

const propertyImages = {
  residenze: imgResidenze,
  edificio: imgEdificio,
  legno: imgResidenzeLegno,
}

const process = [
  {
    step: '01',
    title: 'Primo contatto',
    description: 'Raccontaci cosa cerchi: zona, metratura, budget. Ti proponiamo le soluzioni più adatte.',
  },
  {
    step: '02',
    title: 'Visita e proposta',
    description: "Visitiamo insieme il cantiere o l'immobile finito. Ti presentiamo la proposta dettagliata.",
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
    description: "Consegniamo l'immobile finito, collaudato e pronto per essere abitato.",
  },
]

export default function Immobiliare() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={imgResidenze} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/95 to-neutral-900/80" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Immobiliare</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Compri dal costruttore. <span className="text-brand-500">Senza intermediari.</span>
            </h1>
            <p className="text-lg text-neutral-300 max-w-2xl">
              Immobiliare Taddei Srl: vendita diretta di immobili residenziali di nuova costruzione. Dalla fondazione alle chiavi, tutto in casa nostra.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Il nostro approccio</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-6">
                Sappiamo cosa vendiamo. <span className="text-brand-500">Perché l'abbiamo costruito noi.</span>
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p><strong className="text-neutral-900">Immobiliare Taddei Srl</strong> nasce per completare la filiera. Costruiamo e vendiamo direttamente, senza passare attraverso agenzie o intermediari.</p>
                <p>Questo significa che quando ti raccontiamo di un immobile, conosciamo ogni dettaglio: quali materiali abbiamo usato, come abbiamo risolto ogni problema tecnico, perché abbiamo fatto certe scelte costruttive.</p>
                <p>E soprattutto significa che siamo qui, a rispondere delle nostre costruzioni, anche dopo la vendita.</p>
              </div>
              <div className="mt-8">
                <Link to="/contatti" className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 font-semibold transition-all">
                  Richiedi informazioni <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={imgResidenze} alt="Residenze in montagna" className="w-full aspect-[4/3] object-cover shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Perché sceglierci</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3">I vantaggi di comprare dal costruttore</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, i) => (
              <motion.div key={adv.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white p-8 text-center shadow-sm hover:shadow-md transition-all border-l-4 border-brand-500">
                <div className="w-16 h-16 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <adv.icon className="w-8 h-8 text-brand-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{adv.title}</h3>
                <p className="text-neutral-600 text-sm">{adv.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Offerte immobiliari</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3">I nostri progetti</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, i) => (
              <motion.div key={property.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-neutral-50 overflow-hidden shadow-sm hover:shadow-md transition-all group">
                {/* Image */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img src={propertyImages[property.image]} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                    property.status === 'Disponibile' ? 'bg-green-500 text-white' :
                    property.status === 'In costruzione' ? 'bg-brand-500 text-white' :
                    'bg-neutral-500 text-white'
                  }`}>
                    {property.status}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-neutral-500 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    {property.location}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{property.title}</h3>

                  <div className="flex items-center gap-4 text-neutral-500 text-sm mb-4">
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

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                    <span className="text-lg font-bold text-brand-500">{property.price}</span>
                    {property.status !== 'Venduto' && (
                      <span className="text-sm text-neutral-500 group-hover:text-brand-500 transition-colors flex items-center">
                        Info <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-600 mb-6">Cerchi qualcosa di specifico? Contattaci per conoscere tutti i progetti disponibili.</p>
            <Link to="/contatti" className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 font-semibold transition-all">
              Richiedi informazioni <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Standard costruttivi</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3">Cosa trovi nei nostri immobili</h2>
          </div>

          <div className="bg-white p-8 shadow-sm border-l-4 border-brand-500">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Come funziona</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3">Il percorso verso casa tua</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-neutral-200 -translate-x-1/2 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-brand-500 text-white font-bold text-sm flex items-center justify-center mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Cerchi casa in Valle Camonica?</h2>
          <p className="text-xl text-white/90 mb-10">Contatta Immobiliare Taddei per scoprire le opportunità disponibili. Nessun impegno, massima trasparenza.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contatti" className="inline-flex items-center justify-center gap-3 bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 font-semibold transition-all">
              Contattaci <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:036474313" className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 font-semibold transition-all border border-white/30">
              <Phone className="w-5 h-5" /> 0364 74313
            </a>
          </div>
          <p className="mt-8 text-white/70 text-sm">
            <strong>Referente:</strong> Geom. Taddei Nicola – immobiliare@societataddei.it
          </p>
        </div>
      </section>
    </div>
  )
}
