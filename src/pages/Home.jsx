import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Award, Shield, Users, MapPin, ChevronDown } from 'lucide-react'

import imgCostruzioni from '../assets/edificio-legno-pietra.webp'
import imgMagazzino from '../assets/magazzino-esterno.webp'
import imgImmobiliare from '../assets/residenze-montagna-colorate.webp'
import imgHero from '../assets/residenze-montagna-colorate.webp'

export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO - Split layout with image */}
      <section className="min-h-screen grid lg:grid-cols-2">
        {/* Left content */}
        <div className="flex flex-col justify-center bg-neutral-900 px-6 lg:px-16 py-32 lg:py-20 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-3 mb-8 bg-brand-500 px-4 py-2">
              <span className="text-white text-sm font-semibold tracking-wider uppercase">
                Dal 1983 in Alta Valle Camonica
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Dal materiale alla costruzione.
              <span className="block text-brand-500 mt-2">Senza compromessi.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-neutral-400 max-w-xl mb-10 leading-relaxed">
              Costruzioni, magazzino materiali edili e immobiliare.
              Un unico interlocutore per ogni fase del tuo progetto.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contatti"
                className="inline-flex items-center justify-center gap-3 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 text-lg font-semibold transition-all group"
              >
                Richiedi preventivo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:036474313"
                className="inline-flex items-center justify-center gap-3 border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white px-8 py-4 text-lg font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                0364 74313
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-neutral-800">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-500" />
                <span className="text-sm text-neutral-400">Centro ferro certificato</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-500" />
                <span className="text-sm text-neutral-400">40+ anni di esperienza</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-brand-500" />
                <span className="text-sm text-neutral-400">Gestione familiare</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right image */}
        <div className="relative h-[50vh] lg:h-auto order-1 lg:order-2">
          <img
            src={imgHero}
            alt="Residenze Taddei in montagna"
            className="w-full h-full object-cover"
          />
          {/* Accent overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-brand-500" />
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-500 hidden lg:block" />
        </div>
      </section>

      {/* I 3 PILASTRI */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">
              I nostri servizi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3">
              Tre divisioni. Un'unica visione.
            </h2>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
              Un gruppo integrato che copre l'intera filiera dell'edilizia: dalla fornitura dei materiali alla costruzione, fino alla vendita.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: imgCostruzioni,
                title: 'Costruzioni',
                desc: 'Costruzioni civili, ristrutturazioni complete e opere di urbanizzazione. Dalla fondazione al tetto.',
                link: '/costruzioni',
              },
              {
                image: imgMagazzino,
                title: 'Magazzino Materiali',
                desc: 'Centro trasformazione ferro certificato, materiali edili e consulenza tecnica gratuita.',
                link: '/magazzino',
              },
              {
                image: imgImmobiliare,
                title: 'Immobiliare',
                desc: 'Vendita diretta di immobili residenziali. Compri dal costruttore, senza intermediari.',
                link: '/immobiliare',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.link}
                  className="block bg-white h-full shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                      {item.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-brand-500 font-semibold group-hover:gap-3 transition-all">
                      Scopri di più
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMERI */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: '40+', label: 'Anni di esperienza' },
              { value: '3', label: 'Divisioni aziendali' },
              { value: '1000+', label: 'Progetti realizzati' },
              { value: '1°', label: 'Centro ferro in zona' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-brand-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PERCHÉ SCEGLIERCI */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">
                Perché sceglierci
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-6">
                Non siamo il solito magazzino edile.
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Siamo costruttori che vendono materiali. Sappiamo cosa serve in cantiere
                perché ci lavoriamo ogni giorno. Questo fa tutta la differenza.
              </p>
              <Link
                to="/chi-siamo"
                className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:gap-3 transition-all"
              >
                Scopri la nostra storia
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Award,
                  title: 'Centro ferro certificato',
                  desc: "L'unico in Alta Valle Camonica. Taglio, piegatura e sagomatura su misura.",
                },
                {
                  icon: Shield,
                  title: 'Controllo totale',
                  desc: 'Dal materiale alla costruzione alla vendita. Un unico interlocutore.',
                },
                {
                  icon: Users,
                  title: 'Gestione familiare',
                  desc: 'Tre generazioni di esperienza. Rapporto diretto e personale.',
                },
                {
                  icon: MapPin,
                  title: 'Radicati nel territorio',
                  desc: 'Operiamo in Valle Camonica da 40 anni. Conosciamo ogni esigenza.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-neutral-50 p-6 border-l-4 border-brand-500"
                >
                  <item.icon className="w-8 h-8 text-brand-500 mb-4" />
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-24 bg-gradient-to-br from-neutral-900 to-neutral-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img src={imgMagazzino} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">
                Inizia il tuo progetto
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
                Hai un progetto in mente? Parliamone.
              </h2>
              <p className="text-lg text-neutral-300 mb-8">
                Preventivo gratuito e senza impegno. Siamo a tua disposizione
                per ogni esigenza edile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contatti"
                  className="inline-flex items-center justify-center gap-3 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 text-lg font-semibold transition-all group"
                >
                  Contattaci ora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:036474313"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 text-lg font-semibold transition-all border border-white/20"
                >
                  <Phone className="w-5 h-5" />
                  0364 74313
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
