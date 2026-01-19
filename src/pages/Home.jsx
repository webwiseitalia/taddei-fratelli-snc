import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Building2, Warehouse, Home as HomeIcon, Award, Shield, Users, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-neutral-950">
      {/* HERO - Full screen, dramatic */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />

        {/* Orange accent line */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 via-orange-500/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tag */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-orange-500" />
              <span className="text-orange-500 text-sm font-semibold tracking-[0.2em] uppercase">
                Dal 1983
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-6">
              Dal materiale
              <br />
              alla costruzione.
              <br />
              <span className="text-orange-500">Senza compromessi.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mb-12 leading-relaxed">
              Edilizia, magazzino materiali e immobiliare in Alta Valle Camonica.
              Un unico partner per ogni fase del tuo progetto.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contatti"
                className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold transition-all group"
              >
                Richiedi preventivo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:036474313"
                className="inline-flex items-center justify-center gap-3 border border-neutral-700 hover:border-orange-500 text-white px-8 py-4 text-lg font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                0364 74313
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-neutral-700 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-orange-500 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* I 3 PILASTRI */}
      <section className="py-32 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-orange-500" />
              <span className="text-orange-500 text-sm font-semibold tracking-[0.2em] uppercase">
                I nostri servizi
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Tre divisioni.<br />Un'unica visione.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-1">
            {[
              {
                icon: Building2,
                title: 'Costruzioni',
                desc: 'Costruzioni civili, ristrutturazioni complete e opere di urbanizzazione. Dalla fondazione al tetto.',
                link: '/costruzioni',
              },
              {
                icon: Warehouse,
                title: 'Magazzino Materiali',
                desc: 'Centro trasformazione ferro certificato, materiali edili e consulenza tecnica gratuita.',
                link: '/magazzino',
              },
              {
                icon: HomeIcon,
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
                  className="block bg-neutral-950 p-10 h-full border-t-2 border-orange-500/0 hover:border-orange-500 transition-all group"
                >
                  <item.icon className="w-12 h-12 text-orange-500 mb-6" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-orange-500 font-semibold">
                    Scopri di più
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMERI */}
      <section className="py-32 bg-neutral-950 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
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
                <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-400 uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PERCHÉ SCEGLIERCI */}
      <section className="py-32 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-orange-500" />
                <span className="text-orange-500 text-sm font-semibold tracking-[0.2em] uppercase">
                  Perché noi
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Non siamo il solito<br />magazzino edile.
              </h2>
              <p className="text-xl text-neutral-400 leading-relaxed">
                Siamo costruttori che vendono materiali. Sappiamo cosa serve in cantiere
                perché ci lavoriamo ogni giorno. Questo fa tutta la differenza.
              </p>
            </motion.div>

            <div className="space-y-8">
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
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-14 h-14 bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-neutral-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-32 bg-orange-500 relative overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hai un progetto?<br />Parliamone.
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Preventivo gratuito e senza impegno. Siamo a tua disposizione
              per ogni esigenza edile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contatti"
                className="inline-flex items-center justify-center gap-3 bg-neutral-950 hover:bg-neutral-900 text-white px-8 py-4 text-lg font-semibold transition-all group"
              >
                Contattaci ora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:036474313"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 text-lg font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                0364 74313
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
