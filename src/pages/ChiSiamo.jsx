import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Users, Target, Lightbulb, Shield, MapPin, Calendar, Building } from 'lucide-react'

import imgMagazzino from '../assets/magazzino-esterno.webp'

const timeline = [
  { year: '1983', title: 'La fondazione', desc: 'Nasce Società Taddei come impresa edile a conduzione familiare.' },
  { year: '1995', title: 'Il magazzino', desc: 'Apertura del magazzino materiali edili.' },
  { year: '2005', title: 'Centro Ferro', desc: "L'unico centro di trasformazione ferro certificato della zona." },
  { year: '2015', title: 'Divisione Immobiliare', desc: 'Nasce Immobiliare Taddei Srl.' },
  { year: 'Oggi', title: "Tre anime, un'impresa", desc: 'Un gruppo integrato che copre tutta la filiera.' },
]

const values = [
  { icon: Shield, title: 'Qualità', desc: 'Standard elevati, materiali selezionati, lavorazioni certificate.' },
  { icon: Users, title: 'Famiglia', desc: 'Gestione familiare, rapporto diretto con ogni cliente.' },
  { icon: Target, title: 'Concretezza', desc: 'Risultati misurabili, tempi rispettati, promesse mantenute.' },
  { icon: Lightbulb, title: 'Innovazione', desc: 'Attenzione alle nuove tecnologie e materiali.' },
]

const team = [
  { name: 'Taddei Antonio', role: 'Costruzioni', initial: 'A' },
  { name: 'Taddei Gianluca', role: 'Magazzino / Centro Ferro', initial: 'G' },
  { name: 'Geom. Taddei Nicola', role: 'Consulenze Tecniche', initial: 'N' },
]

export default function ChiSiamo() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={imgMagazzino} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/95 to-neutral-900/80" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Chi Siamo</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Un'impresa, tre generazioni di passione.
            </h1>
            <p className="text-lg text-neutral-300 max-w-2xl">
              Dal 1983 costruiamo con competenza, forniamo con qualità, vendiamo con trasparenza.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">La nostra storia</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-6">
                L'Alta Valle Camonica è la nostra casa.
                <span className="text-brand-500"> L'edilizia è la nostra vita.</span>
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  <strong className="text-neutral-900">Società Taddei</strong> non è nata in un ufficio.
                  È nata nei cantieri, tra il rumore delle betoniere e la polvere del cemento.
                </p>
                <p>
                  Oggi siamo l'unica realtà della zona con un centro di trasformazione ferro certificato,
                  un magazzino materiali completo e una divisione immobiliare.
                </p>
                <p>
                  Non siamo intermediari. Controlliamo ogni fase del processo.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img src={imgMagazzino} alt="Magazzino Taddei" className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">La nostra storia</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3">40 anni di crescita costante</h2>
          </div>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-20 flex-shrink-0 text-right">
                  <span className="text-brand-500 font-bold text-lg">{item.year}</span>
                </div>
                <div className="w-3 h-3 bg-brand-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-neutral-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">I nostri valori</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3">Cosa ci guida ogni giorno</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-50 p-8 text-center hover:shadow-md transition-all border-l-4 border-brand-500"
              >
                <div className="w-16 h-16 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-brand-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{value.title}</h3>
                <p className="text-neutral-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Il team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3">I volti dietro l'impresa</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-white p-8 rounded-lg shadow-sm"
              >
                <div className="w-20 h-20 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">{member.initial}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-1">{member.name}</h3>
                <p className="text-brand-500 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Vuoi conoscerci meglio?</h2>
          <p className="text-lg text-neutral-300 mb-10">
            Vieni a trovarci nel nostro magazzino o contattaci per una consulenza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contatti"
              className="inline-flex items-center justify-center gap-3 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 font-semibold transition-all group"
            >
              Contattaci
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/costruzioni"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 font-semibold transition-all"
            >
              Scopri i servizi
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
