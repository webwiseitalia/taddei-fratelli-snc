import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

import imgCostruzione from '../assets/cantiere-costruzione-ponteggi.webp'
import imgResidenze from '../assets/residenze-alpine-legno-pietra.webp'

gsap.registerPlugin(ScrollTrigger)

const mainServices = [
  { num: '01', title: 'Costruzioni civili', desc: 'Edifici residenziali, commerciali e industriali dalla fondazione al tetto. Controllo totale.' },
  { num: '02', title: 'Ristrutturazioni', desc: 'Interventi di ristrutturazione totale o parziale, chiavi in mano. Trasformiamo il vecchio in nuovo.' },
  { num: '03', title: 'Urbanizzazione', desc: 'Strade, parcheggi, fognature e reti di sottoservizi. Infrastrutture che durano.' },
  { num: '04', title: 'Manutenzioni', desc: 'Interventi mirati per il ripristino e miglioramento di edifici esistenti.' },
]

const capabilities = [
  'Cemento armato e murature',
  'Intonaci e finiture',
  'Pavimenti e rivestimenti',
  'Tetti in legno e cemento',
  'Impermeabilizzazioni',
  'Scavi e fognature',
  'Ponteggi e noleggio',
  'Demolizioni controllate',
  'Consolidamenti strutturali',
  'Lavori in quota',
  'Opere in pietra locale',
  'Assistenze impiantistiche',
]

export default function Costruzioni() {
  const heroRef = useRef(null)
  const introRef = useRef(null)
  const servicesRef = useRef(null)
  const capabilitiesRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      const heroTitle = heroRef.current?.querySelector('h1')
      if (heroTitle) {
        const split = new SplitType(heroTitle, { types: 'words' })
        gsap.fromTo(split.words,
          { y: 100, opacity: 0, rotateX: -45 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            ease: 'power4.out',
            stagger: 0.08,
            delay: 0.2,
          }
        )
      }

      // Intro
      const introImage = introRef.current?.querySelector('.intro-image')
      if (introImage) {
        gsap.fromTo(introImage,
          { scale: 1.3, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: introRef.current,
              start: 'top 70%',
            },
          }
        )
      }

      // Services - waterfall reveal
      const serviceItems = servicesRef.current?.querySelectorAll('.service-item')
      serviceItems?.forEach((item, i) => {
        gsap.fromTo(item,
          { x: i % 2 === 0 ? -80 : 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
            },
          }
        )
      })

      // Capabilities - staggered grid
      const capItems = capabilitiesRef.current?.querySelectorAll('.cap-item')
      gsap.fromTo(capItems,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: { each: 0.05, from: 'random' },
          scrollTrigger: {
            trigger: capabilitiesRef.current,
            start: 'top 75%',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-[#0a0a0a] overflow-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-end pb-20 lg:pb-32 pt-32">
        <div className="absolute inset-0">
          <img
            src={imgCostruzione}
            alt="Edificio in legno e pietra - Costruzioni Taddei"
            title="Costruzioni civili e residenziali"
            width={1920}
            height={1080}
            loading="eager"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30" />
        </div>

        <div className="absolute top-1/4 left-[10%] w-px h-32 bg-gradient-to-b from-blue-500 to-transparent" />
        <div className="absolute bottom-1/3 right-[15%] w-20 h-20 border border-neutral-800 rotate-12 hidden lg:block" />

        <div className="container-fluid relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-blue-500" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-blue-500">Costruzioni</span>
            </div>

            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.85] tracking-tight text-white mb-6">
              <span className="block">Costruiamo</span>
              <span className="block ml-[8%]">solido.</span>
              <span className="block text-blue-500 text-[0.65em] mt-2">Per durare.</span>
            </h1>

            <p className="text-lg text-neutral-400 max-w-lg ml-[4%]">
              Dalla fondazione al tetto, dal grezzo alle finiture. Ogni fase del cantiere è nelle nostre mani.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section ref={introRef} className="py-24 lg:py-40">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-6 block">
                Il nostro approccio
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1] mb-6">
                Non appaltiamo.
                <span className="text-blue-500 block mt-1">Costruiamo.</span>
              </h2>

              <div className="space-y-4 text-neutral-400 leading-relaxed mb-8">
                <p>
                  Quando affidi un lavoro a <span className="text-white font-semibold">Società Taddei</span>,
                  non finirai a parlare con un subappaltatore che non hai mai visto.
                </p>
                <p>
                  Le nostre squadre sono nostre. I nostri mezzi sono nostri. La responsabilità è nostra.
                </p>
                <p className="text-white">
                  Questo significa controllo totale sulla qualità, sui tempi e sui costi.
                </p>
              </div>

              <Link
                to="/contatti"
                className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all"
              >
                Richiedi preventivo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 relative">
              <div className="intro-image aspect-video overflow-hidden">
                <img
                  src={imgCostruzione}
                  alt="Cantiere edile Taddei"
                  title="Costruzioni - Controllo totale su ogni fase"
                  width={800}
                  height={450}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-blue-600 p-6 lg:p-8 max-w-xs">
                <span className="text-[40px] lg:text-[60px] font-black text-white/30 block leading-none">40+</span>
                <span className="text-white text-sm font-medium">Anni di cantieri</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES - Alternating layout */}
      <section ref={servicesRef} className="py-24 lg:py-40 bg-[#0c0c0c]">
        <div className="container-fluid">
          <div className="max-w-xl mb-16 lg:mb-24">
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-4 block">
              Servizi principali
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1]">
              Cosa costruiamo
            </h2>
          </div>

          <div className="space-y-6">
            {mainServices.map((service, i) => (
              <div
                key={service.title}
                className={`service-item group relative grid lg:grid-cols-12 gap-6 lg:gap-8 items-center p-6 lg:p-8 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors duration-500 ${
                  i % 2 === 1 ? 'lg:text-right' : ''
                }`}
              >
                {/* Number */}
                <div className={`lg:col-span-2 ${i % 2 === 1 ? 'lg:order-3' : ''}`}>
                  <span className="text-[60px] lg:text-[80px] font-black text-neutral-900 group-hover:text-blue-500/20 transition-colors duration-500 leading-none">
                    {service.num}
                  </span>
                </div>

                {/* Content */}
                <div className={`lg:col-span-8 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed">{service.desc}</p>
                </div>

                {/* Arrow */}
                <div className={`lg:col-span-2 flex ${i % 2 === 1 ? 'lg:order-1 lg:justify-start' : 'lg:justify-end'}`}>
                  <div className="w-12 h-12 border border-neutral-800 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500 transition-all duration-500">
                    <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Border accent */}
                <div className={`absolute top-0 ${i % 2 === 1 ? 'right-0' : 'left-0'} w-[2px] h-0 bg-blue-500 group-hover:h-full transition-all duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES - Scattered grid */}
      <section ref={capabilitiesRef} className="py-24 lg:py-40">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-4 block">
                Lavorazioni
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1] mb-6">
                Come<br />
                <span className="text-blue-500">costruiamo</span>
              </h2>
              <p className="text-neutral-500 leading-relaxed">
                Competenze tecniche complete per ogni fase del cantiere.
                Dalla struttura alle finiture, tutto sotto il nostro controllo.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {capabilities.map((cap, i) => (
                  <div
                    key={cap}
                    className="cap-item flex items-center gap-3 p-4 bg-[#0c0c0c] hover:bg-[#111] transition-colors group"
                    style={{ marginTop: i % 3 === 1 ? '1rem' : i % 3 === 2 ? '2rem' : 0 }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="text-neutral-400 text-sm group-hover:text-white transition-colors">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="relative py-24 lg:py-40 bg-[#0c0c0c]">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] overflow-hidden group">
              <img
                src={imgResidenze}
                alt="Residenze in montagna"
                title="Costruzioni residenziali Taddei"
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-[10px] uppercase tracking-widest text-blue-500 block mb-2">Residenziale</span>
                <h3 className="text-2xl font-bold text-white">Case e appartamenti</h3>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden group lg:mt-16">
              <img
                src={imgCostruzione}
                alt="Edifici commerciali"
                title="Costruzioni commerciali e industriali"
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-[10px] uppercase tracking-widest text-blue-500 block mb-2">Commerciale</span>
                <h3 className="text-2xl font-bold text-white">Edifici e strutture</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] uppercase tracking-[0.25em] text-blue-500 mb-4 block">
                Inizia il tuo progetto
              </span>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-[1] mb-6">
                Hai un progetto<br />
                <span className="text-neutral-500">in mente?</span>
              </h2>
              <p className="text-neutral-400 text-lg mb-10 max-w-lg">
                Raccontacelo. Preventivo dettagliato e senza impegno.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contatti"
                  className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all"
                >
                  Richiedi preventivo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:036474313"
                  className="group inline-flex items-center gap-3 border border-neutral-700 hover:border-white text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4" />
                  0364 74313
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="bg-[#0c0c0c] p-8 lg:p-10 border-l-2 border-blue-500">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-4">Referente</span>
                <h3 className="text-xl font-bold text-white mb-1">Taddei Antonio</h3>
                <p className="text-blue-500 text-sm mb-4">Divisione Costruzioni</p>
                <a href="mailto:costruzioni@societataddei.it" className="text-neutral-400 text-sm hover:text-white transition-colors">
                  costruzioni@societataddei.it
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
