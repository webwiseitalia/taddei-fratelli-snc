import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Phone, CheckCircle2, Home, MapPin, Maximize } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

import imgResidenze from '../assets/villette-colorate-montagna.webp'
import imgCostruzione from '../assets/edificio-residenziale-vendita.webp'

gsap.registerPlugin(ScrollTrigger)

const advantages = [
  { num: '01', title: 'Nessun intermediario', desc: 'Compri direttamente da chi costruisce. Zero commissioni aggiuntive.' },
  { num: '02', title: 'Prezzo trasparente', desc: 'Sai esattamente cosa paghi. Capitolato dettagliato, nessuna sorpresa.' },
  { num: '03', title: 'Qualità garantita', desc: 'Costruiamo noi. Conosciamo ogni mattone, ogni tubo, ogni filo.' },
  { num: '04', title: 'Personalizzazione', desc: 'Modifica finiture, materiali e dettagli durante la costruzione.' },
]

const properties = [
  {
    id: 1,
    title: 'Residenza Valle Verde',
    location: 'Corteno Golgi',
    size: '85 mq',
    rooms: '3 locali',
    status: 'In costruzione',
    statusType: 'building',
    image: imgResidenze,
  },
  {
    id: 2,
    title: 'Villa Singola Panoramica',
    location: 'Edolo',
    size: '150 mq',
    rooms: '4 locali',
    status: 'Disponibile',
    statusType: 'available',
    image: imgCostruzione,
  },
  {
    id: 3,
    title: 'Bilocale Centro Storico',
    location: 'Ponte di Legno',
    size: '55 mq',
    rooms: '2 locali',
    status: 'Venduto',
    statusType: 'sold',
    image: imgResidenze,
  },
]

const features = [
  'Classe energetica A+',
  'Riscaldamento a pavimento',
  'Predisposizione fotovoltaico',
  'Serramenti PVC triplo vetro',
  'VMC - Ventilazione meccanica',
  'Predisposizione domotica',
  'Cappotto termico 14cm',
  'Garage o box auto',
  'Cantina/ripostiglio',
  'Giardino privato',
]

const process = [
  { step: '01', title: 'Visita', desc: 'Vieni a vedere l\'immobile o il terreno di persona.' },
  { step: '02', title: 'Proposta', desc: 'Ti prepariamo un preventivo dettagliato senza impegno.' },
  { step: '03', title: 'Personalizzazione', desc: 'Scegli finiture e modifiche prima della costruzione.' },
  { step: '04', title: 'Costruzione', desc: 'Seguiamo insieme ogni fase del cantiere.' },
  { step: '05', title: 'Consegna', desc: 'Le chiavi della tua nuova casa.' },
]

export default function Immobiliare() {
  const heroRef = useRef(null)
  const introRef = useRef(null)
  const advantagesRef = useRef(null)
  const propertiesRef = useRef(null)
  const processRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      const heroTitle = heroRef.current?.querySelector('h1')
      if (heroTitle) {
        const split = new SplitType(heroTitle, { types: 'words' })
        gsap.fromTo(split.words,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power4.out',
            stagger: 0.06,
            delay: 0.2,
          }
        )
      }

      // Advantages - diagonal cascade
      const advItems = advantagesRef.current?.querySelectorAll('.adv-item')
      advItems?.forEach((item, i) => {
        gsap.fromTo(item,
          { x: i % 2 === 0 ? -80 : 80, y: 40, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: advantagesRef.current,
              start: 'top 75%',
            },
            delay: i * 0.15,
          }
        )
      })

      // Properties - scale reveal
      const propItems = propertiesRef.current?.querySelectorAll('.prop-item')
      propItems?.forEach((item, i) => {
        const image = item.querySelector('img')
        gsap.fromTo(item,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: propertiesRef.current,
              start: 'top 70%',
            },
            delay: i * 0.2,
          }
        )

        if (image) {
          gsap.fromTo(image,
            { scale: 1.2 },
            {
              scale: 1,
              duration: 1.5,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: propertiesRef.current,
                start: 'top 70%',
              },
              delay: i * 0.2,
            }
          )
        }
      })

      // Process - timeline animation
      const processItems = processRef.current?.querySelectorAll('.process-item')
      processItems?.forEach((item, i) => {
        gsap.fromTo(item,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  const getStatusStyles = (type) => {
    switch (type) {
      case 'available':
        return 'bg-green-500 text-white'
      case 'building':
        return 'bg-blue-500 text-white'
      case 'sold':
        return 'bg-neutral-700 text-neutral-300'
      default:
        return 'bg-neutral-800 text-neutral-400'
    }
  }

  return (
    <div className="bg-[#0a0a0a] overflow-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-end pb-20 lg:pb-32 pt-32">
        <div className="absolute inset-0">
          <img
            src={imgResidenze}
            alt="Residenze colorate nelle montagne - Immobiliare Taddei"
            title="Immobili in vendita in Alta Valle Camonica"
            width={1920}
            height={1080}
            loading="eager"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30" />
        </div>

        <div className="absolute top-1/4 left-[8%] w-px h-24 bg-gradient-to-b from-blue-500 to-transparent" />
        <div className="absolute top-1/4 left-[8%] w-12 h-px bg-blue-500" />

        <div className="container-fluid relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-blue-500" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-blue-500">Immobiliare</span>
            </div>

            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-black leading-[0.9] tracking-tight text-white mb-6">
              <span className="block">Compri dal</span>
              <span className="block ml-[5%]">costruttore.</span>
              <span className="block text-blue-500 text-[0.65em] mt-2">Senza intermediari.</span>
            </h1>

            <p className="text-lg text-neutral-400 max-w-lg ml-[3%]">
              Immobili di nuova costruzione in Alta Valle Camonica.
              Direttamente da chi li realizza.
            </p>
          </div>
        </div>
      </section>

      {/* ADVANTAGES - Broken 2x2 */}
      <section ref={advantagesRef} className="py-24 lg:py-40">
        <div className="container-fluid">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
            <div className="lg:max-w-xl">
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-4 block">
                Perché sceglierci
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1]">
                Il vantaggio di comprare
                <span className="text-blue-500 block mt-1">da chi costruisce</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {advantages.map((adv, i) => (
              <div
                key={adv.title}
                className="adv-item group relative bg-[#0c0c0c] p-8 lg:p-10 overflow-hidden hover:bg-[#0f0f0f] transition-colors duration-500"
                style={{ marginTop: i % 2 === 1 ? '3rem' : 0 }}
              >
                {/* Number */}
                <span className="text-[100px] lg:text-[140px] font-black text-neutral-900 absolute -top-8 -right-4 leading-none select-none group-hover:text-blue-500/10 transition-colors duration-500">
                  {adv.num}
                </span>

                <div className="relative z-10">
                  <span className="text-[10px] text-neutral-600 tracking-widest mb-4 block">{adv.num}</span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed max-w-md">{adv.desc}</p>
                </div>

                {/* Accent */}
                <div className="absolute top-0 left-0 w-1/3 h-[2px] bg-blue-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTIES - Irregular grid */}
      <section ref={propertiesRef} className="py-24 lg:py-40 bg-[#0c0c0c]">
        <div className="container-fluid">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-4 block">
                Immobili
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1]">
                Le nostre proposte
              </h2>
            </div>
            <Link
              to="/contatti"
              className="group inline-flex items-center gap-2 text-blue-500 hover:text-white text-sm font-semibold uppercase tracking-wider transition-colors"
            >
              Tutte le disponibilità
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            {properties.map((prop, i) => (
              <div
                key={prop.id}
                className="prop-item group relative bg-[#0a0a0a] overflow-hidden"
                style={{ marginTop: `${i * 2}rem` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    title={`${prop.title} - ${prop.location}`}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

                  {/* Status badge */}
                  <span className={`absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-widest font-semibold ${getStatusStyles(prop.statusType)}`}>
                    {prop.status}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">
                    {prop.title}
                  </h3>

                  <div className="flex items-center gap-2 text-neutral-500 text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    {prop.location}
                  </div>

                  <div className="flex gap-4 text-neutral-400 text-sm">
                    <div className="flex items-center gap-2">
                      <Maximize className="w-4 h-4" />
                      {prop.size}
                    </div>
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4" />
                      {prop.rooms}
                    </div>
                  </div>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES - Scattered checklist */}
      <section className="py-24 lg:py-40">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-4 block">
                Standard costruttivo
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1] mb-6">
                Cosa trovi<br />
                <span className="text-blue-500">di serie</span>
              </h2>
              <p className="text-neutral-500 leading-relaxed">
                Ogni nostro immobile rispetta standard elevati di efficienza energetica e comfort abitativo.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, i) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 p-4 bg-[#0c0c0c] hover:bg-[#111] transition-colors group"
                    style={{ marginTop: i % 2 === 1 ? '1rem' : 0 }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="text-neutral-400 text-sm group-hover:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS - Timeline */}
      <section ref={processRef} className="py-24 lg:py-40 bg-[#0c0c0c]">
        <div className="container-fluid">
          <div className="max-w-xl mb-16 lg:mb-24">
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-4 block">
              Come funziona
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1]">
              Il percorso verso<br />
              <span className="text-blue-500">la tua casa</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 lg:left-16 top-0 bottom-0 w-px bg-neutral-800" />

            <div className="space-y-12">
              {process.map((item, i) => (
                <div
                  key={item.step}
                  className="process-item relative flex gap-8 lg:gap-16"
                  style={{ marginLeft: `${i * 1}rem` }}
                >
                  {/* Dot */}
                  <div className="relative z-10 w-16 flex-shrink-0 flex items-start justify-center">
                    <div className="w-4 h-4 bg-blue-500" />
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <span className="text-[40px] lg:text-[60px] font-black text-blue-500/20 block leading-none mb-2">
                      {item.step}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-neutral-500 leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="container-fluid">
          <div className="relative bg-blue-600 p-12 lg:p-20 overflow-hidden">
            <span className="absolute -top-20 -right-20 text-[300px] font-black text-white/5 leading-none select-none">
              ?
            </span>

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.1] mb-6">
                Cerchi la casa giusta?
              </h2>
              <p className="text-white/80 text-lg mb-10">
                Contattaci per conoscere le disponibilità attuali o discutere di nuovi progetti su terreni di tua proprietà.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contatti"
                  className="group inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-neutral-100 transition-all"
                >
                  Contattaci
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:036474313"
                  className="group inline-flex items-center gap-3 border-2 border-white/30 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  0364 74313
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
