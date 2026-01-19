import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Award, Shield, Layers, Package, Flame, Palette, Truck, HeadphonesIcon, CheckCircle2 } from 'lucide-react'

import imgMagazzino from '../assets/magazzino-esterno.webp'
import imgCentroFerro from '../assets/centro-ferro.webp'
import imgColorificio from '../assets/colorificio-ingresso.webp'
import imgScaffali from '../assets/scaffali-magazzino.webp'

const categories = [
  { icon: Shield, title: 'Centro Trasformazione Ferro', desc: "L'unico certificato in Alta Valle Camonica. Taglio, piegatura e sagomatura su misura.", highlight: true },
  { icon: Layers, title: 'Solai Prefabbricati', desc: 'Travi, travetti e pignatte per solai.' },
  { icon: Package, title: 'Materiali Edili', desc: 'Cemento, inerti, laterizi, blocchi, isolanti.' },
  { icon: Flame, title: 'Caminetti e Stufe', desc: 'Caminetti a legna e pellet delle migliori marche.' },
  { icon: Palette, title: 'Colorificio Tintometrico', desc: 'Pitture e vernici, qualsiasi colore su richiesta.' },
]

const brands = ['Velux', 'Isotex', 'Kerakoll', 'Fassa Bortolo', 'Ytong', 'Wierer', 'Eclisse', 'Isolmant', 'Project for Building']

const services = [
  { icon: HeadphonesIcon, title: 'Consulenza tecnica gratuita', desc: 'Ti aiutiamo a scegliere i materiali giusti.' },
  { icon: Truck, title: 'Consegna in cantiere', desc: 'Portiamo i materiali dove ti servono.' },
  { icon: Package, title: 'Fornitura + Posa', desc: 'Materiali e posa con le nostre squadre.' },
]

export default function Magazzino() {
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
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Magazzino Materiali</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Non vendiamo materiali. <span className="text-brand-500">Risolviamo problemi.</span>
            </h1>
            <p className="text-lg text-neutral-300 max-w-2xl">
              Il più completo punto di riferimento per materiali edili in Alta Valle Camonica. Unico centro ferro certificato della zona.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro + Centro Ferro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Il nostro approccio</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-6">
                Più di un magazzino. <span className="text-brand-500">Un partner.</span>
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>Quando entri nel nostro magazzino, non trovi solo scaffali. Trovi persone che conoscono l'edilizia.</p>
                <p>Siamo noi stessi costruttori. Sappiamo cosa funziona in cantiere e cosa no.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contatti" className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 font-semibold transition-all">
                  Richiedi preventivo <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:036474313" className="inline-flex items-center gap-2 border border-neutral-300 hover:border-brand-500 text-neutral-700 px-6 py-3 font-semibold transition-all">
                  <Phone className="w-4 h-4" /> 0364 74313
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-brand-500 p-8">
              <Award className="w-12 h-12 text-white/80 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Centro Ferro Certificato</h3>
              <p className="text-white/90 mb-6">L'unico in Alta Valle Camonica. Armature per cemento armato su misura.</p>
              <ul className="space-y-3">
                {['Taglio su misura', 'Piegatura a disegno', 'Sagomatura certificata', 'Consegna in cantiere'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white">
                    <CheckCircle2 className="w-5 h-5" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Reparti</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3">Tutto per l'edilizia, in un solo posto</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`p-8 transition-all ${cat.highlight ? 'bg-brand-500 text-white shadow-lg' : 'bg-white shadow-sm hover:shadow-md border-l-4 border-brand-500'}`}>
                <div className={`w-14 h-14 flex items-center justify-center mb-4 rounded-lg ${cat.highlight ? 'bg-white/20' : 'bg-brand-500/10'}`}>
                  <cat.icon className={`w-7 h-7 ${cat.highlight ? 'text-white' : 'text-brand-500'}`} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${cat.highlight ? 'text-white' : 'text-neutral-900'}`}>{cat.title}</h3>
                <p className={cat.highlight ? 'text-white/90' : 'text-neutral-600'}>{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Il magazzino</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3">Alcuni scatti dalla nostra sede</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2 lg:row-span-2">
              <img src={imgMagazzino} alt="Esterno magazzino Taddei" className="w-full h-full object-cover rounded-lg" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <img src={imgColorificio} alt="Colorificio" className="w-full aspect-square object-cover rounded-lg" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <img src={imgScaffali} alt="Scaffali magazzino" className="w-full aspect-square object-cover rounded-lg" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <img src={imgCentroFerro} alt="Centro ferro" className="w-full aspect-square object-cover rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">I nostri marchi</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3">Partner delle migliori aziende</h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {brands.map((brand, i) => (
              <motion.div key={brand} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="aspect-square bg-white border border-neutral-200 flex items-center justify-center p-4 hover:border-brand-500 hover:shadow-sm transition-all">
                <span className="text-neutral-600 text-sm font-medium text-center">{brand}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/partner" className="inline-flex items-center gap-2 text-brand-500 hover:gap-3 font-semibold transition-all">
              Scopri tutti i partner <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Servizi</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3">Non solo prodotti</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-neutral-50 rounded-lg">
                <div className="w-16 h-16 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-brand-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-brand-500 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Hai bisogno di un preventivo?</h3>
              <p className="text-white/90 mb-6">Mandaci la tua lista materiali. Ti rispondiamo in giornata.</p>
              <Link to="/contatti" className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-brand-500 px-6 py-3 font-semibold transition-all">
                Richiedi preventivo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-neutral-800 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Vieni a trovarci</h3>
              <div className="space-y-3 text-neutral-300">
                <p><strong className="text-white">Indirizzo:</strong> Via Artigiani, 44 – 25040 Corteno Golgi (BS)</p>
                <p><strong className="text-white">Orari:</strong> Lun-Ven 8:00-12:00 / 14:00-18:00 | Sab 8:00-12:00</p>
                <p><strong className="text-white">Contatto:</strong> Taddei Gianluca – Magazzino / Ferro</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
