import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Building2, Hammer, HardHat, Wrench, Layers, Mountain, Droplets, LayoutGrid, Home, Truck, CheckCircle2 } from 'lucide-react'

import imgCostruzione from '../assets/edificio-legno-pietra.webp'
import imgResidenze from '../assets/residenze-legno-montagna.webp'

const mainServices = [
  { icon: Building2, title: 'Costruzioni civili e residenziali', desc: 'Edifici residenziali, commerciali e industriali dalla fondazione al tetto.' },
  { icon: Hammer, title: 'Ristrutturazioni complete', desc: 'Interventi di ristrutturazione totale o parziale, chiavi in mano.' },
  { icon: HardHat, title: 'Opere di urbanizzazione', desc: 'Strade, parcheggi, fognature e reti di sottoservizi.' },
  { icon: Wrench, title: 'Manutenzioni straordinarie', desc: 'Interventi mirati per il ripristino e miglioramento di edifici.' },
]

const technicalServices = [
  { icon: Layers, title: 'Cemento armato e murature' },
  { icon: LayoutGrid, title: 'Intonaci e finiture' },
  { icon: Home, title: 'Pavimenti e rivestimenti' },
  { icon: Mountain, title: 'Tetti in legno e cemento' },
  { icon: Droplets, title: 'Impermeabilizzazioni' },
  { icon: Truck, title: 'Scavi e fognature' },
]

const additionalServices = ['Ponteggi e noleggio attrezzature', 'Assistenze impiantistiche', 'Demolizioni controllate', 'Consolidamenti strutturali', 'Lavori in quota', 'Opere in pietra locale']

export default function Costruzioni() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={imgCostruzione} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/95 to-neutral-900/80" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Costruzioni</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Costruiamo solido. <span className="text-brand-500">Per durare.</span>
            </h1>
            <p className="text-lg text-neutral-300 max-w-2xl">
              Dalla fondazione al tetto, dal grezzo alle finiture. Ogni fase del cantiere è nelle nostre mani.
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
                Non appaltiamo. <span className="text-brand-500">Costruiamo.</span>
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>Quando affidi un lavoro a <strong className="text-neutral-900">Società Taddei</strong>, non finirai a parlare con un subappaltatore che non hai mai visto.</p>
                <p>Le nostre squadre sono nostre. I nostri mezzi sono nostri. La responsabilità è nostra.</p>
                <p>Questo significa controllo totale sulla qualità, sui tempi e sui costi.</p>
              </div>
              <div className="mt-8">
                <Link to="/contatti" className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 font-semibold transition-all">
                  Richiedi preventivo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <div className="relative">
              <img src={imgCostruzione} alt="Costruzione in legno e pietra" className="w-full aspect-video object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Servizi principali</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3">Cosa costruiamo</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {mainServices.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-6 bg-white p-8 shadow-sm hover:shadow-md transition-shadow border-l-4 border-brand-500">
                <div className="w-14 h-14 bg-brand-500/10 flex items-center justify-center flex-shrink-0 rounded-lg">
                  <service.icon className="w-7 h-7 text-brand-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{service.title}</h3>
                  <p className="text-neutral-600">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Lavorazioni</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3">Come costruiamo</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technicalServices.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-neutral-50 p-6 text-center hover:bg-brand-500/5 transition-colors">
                <service.icon className="w-8 h-8 text-brand-500 mx-auto mb-3" />
                <p className="text-sm text-neutral-700 font-medium">{service.title}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 bg-neutral-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-6">Altri servizi</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {additionalServices.map((service) => (
                <div key={service} className="flex items-center gap-3 text-neutral-600">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0" />
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Hai un progetto in mente?</h2>
          <p className="text-lg text-neutral-300 mb-10">Raccontacelo. Preventivo dettagliato e senza impegno.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contatti" className="inline-flex items-center justify-center gap-3 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 font-semibold transition-all">
              Richiedi preventivo <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:036474313" className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 font-semibold transition-all border border-white/20">
              <Phone className="w-5 h-5" /> 0364 74313
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
