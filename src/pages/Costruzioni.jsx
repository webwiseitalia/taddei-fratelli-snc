import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Building2, Hammer, HardHat, Wrench, Layers, Mountain, Droplets, LayoutGrid, Home, Truck, CheckCircle2 } from 'lucide-react'

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
    <div className="bg-neutral-950">
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 via-orange-500/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-orange-500" />
              <span className="text-orange-500 text-sm font-semibold tracking-[0.2em] uppercase">Costruzioni</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Costruiamo solido.<br /><span className="text-orange-500">Costruiamo per durare.</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl">
              Dalla fondazione al tetto, dal grezzo alle finiture. Ogni fase del cantiere è nelle nostre mani.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Non appaltiamo.<span className="text-orange-500"> Costruiamo.</span>
              </h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed">
                <p>Quando affidi un lavoro a <strong className="text-white">Società Taddei</strong>, non finirai a parlare con un subappaltatore che non hai mai visto.</p>
                <p>Le nostre squadre sono nostre. I nostri mezzi sono nostri. La responsabilità è nostra.</p>
                <p>Questo significa controllo totale sulla qualità, sui tempi e sui costi.</p>
              </div>
              <div className="mt-8">
                <Link to="/contatti" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-semibold transition-all">
                  Richiedi preventivo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <div className="bg-neutral-950 border border-neutral-800 aspect-video flex items-center justify-center relative">
              <Building2 className="w-24 h-24 text-neutral-800" />
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-orange-500" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-orange-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-500 text-sm font-semibold tracking-[0.2em] uppercase">Servizi principali</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Cosa costruiamo</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mainServices.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-6 bg-neutral-900 border border-neutral-800 p-8 hover:border-orange-500/50 transition-colors">
                <div className="w-14 h-14 bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-7 h-7 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-neutral-400">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Services */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-500 text-sm font-semibold tracking-[0.2em] uppercase">Lavorazioni</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Come costruiamo</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technicalServices.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-neutral-950 border border-neutral-800 p-6 text-center hover:border-orange-500/50 transition-colors">
                <service.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <p className="text-sm text-neutral-300">{service.title}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 bg-neutral-950 border border-neutral-800 p-8">
            <h3 className="text-xl font-bold text-white mb-6">Altri servizi</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {additionalServices.map((service) => (
                <div key={service} className="flex items-center gap-3 text-neutral-400">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-orange-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Hai un progetto in mente?</h2>
          <p className="text-xl text-white/80 mb-10">Raccontacelo. Preventivo dettagliato e senza impegno.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contatti" className="inline-flex items-center justify-center gap-3 bg-neutral-950 hover:bg-neutral-900 text-white px-8 py-4 font-semibold transition-all">
              Richiedi preventivo <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:036474313" className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 font-semibold transition-all">
              <Phone className="w-5 h-5" /> 0364 74313
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
