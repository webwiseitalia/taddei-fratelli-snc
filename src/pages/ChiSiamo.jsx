import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Users, Target, Lightbulb, Shield, MapPin, Calendar, Building } from 'lucide-react'

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
    <div className="bg-neutral-950">
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 via-orange-500/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-orange-500" />
              <span className="text-orange-500 text-sm font-semibold tracking-[0.2em] uppercase">Chi Siamo</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Un'impresa, tre generazioni<br />di passione.
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl">
              Dal 1983 costruiamo con competenza, forniamo con qualità, vendiamo con trasparenza.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                L'Alta Valle Camonica è la nostra casa.
                <span className="text-orange-500"> L'edilizia è la nostra vita.</span>
              </h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed">
                <p>
                  <strong className="text-white">Società Taddei</strong> non è nata in un ufficio.
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

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Calendar, value: '1983', label: 'Anno di fondazione' },
                { icon: MapPin, value: 'Lombardia', label: 'Area operativa' },
                { icon: Building, value: '1000+', label: 'Progetti realizzati' },
                { icon: Award, value: 'Unico', label: 'Centro ferro in zona' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-neutral-950 border border-neutral-800 p-6 text-center"
                >
                  <item.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                  <div className="text-sm text-neutral-500">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-500 text-sm font-semibold tracking-[0.2em] uppercase">La nostra storia</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">40 anni di crescita costante</h2>

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
                  <span className="text-orange-500 font-bold text-lg">{item.year}</span>
                </div>
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-neutral-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-500 text-sm font-semibold tracking-[0.2em] uppercase">I nostri valori</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Cosa ci guida ogni giorno</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-950 border border-neutral-800 p-8 text-center hover:border-orange-500/50 transition-colors"
              >
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-neutral-400 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-500 text-sm font-semibold tracking-[0.2em] uppercase">Il team</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">I volti dietro l'impresa</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-orange-500">{member.initial}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-orange-500 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Vuoi conoscerci meglio?</h2>
          <p className="text-xl text-neutral-400 mb-10">
            Vieni a trovarci nel nostro magazzino o contattaci per una consulenza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contatti"
              className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-semibold transition-all group"
            >
              Contattaci
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/costruzioni"
              className="inline-flex items-center justify-center gap-3 border border-neutral-700 hover:border-orange-500 text-white px-8 py-4 font-semibold transition-all"
            >
              Scopri i servizi
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
