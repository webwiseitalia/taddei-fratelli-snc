import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

import imgMagazzino from '../assets/costruzioni/capannone-struttura-montagna.webp'
import imgMateriali from '../assets/costruzioni/cantiere-ponteggi-edificio-giallo.webp'
import imgFerro from '../assets/costruzioni/fondazioni-ferro-getto.webp'

gsap.registerPlugin(ScrollTrigger)

const timeline = [
  { year: '1983', title: 'La fondazione', desc: 'Nasce Società Taddei come impresa edile a conduzione familiare in Alta Valle Camonica.' },
  { year: '1995', title: 'Il magazzino', desc: 'Apertura del magazzino materiali edili. Inizia il percorso verso la filiera integrata.' },
  { year: '2005', title: 'Centro Ferro', desc: "L'unico centro di trasformazione ferro certificato della zona diventa operativo." },
  { year: '2015', title: 'Immobiliare', desc: 'Nasce Immobiliare Taddei Srl. Il cerchio si chiude: costruiamo e vendiamo.' },
  { year: 'Oggi', title: "Tre anime", desc: 'Un gruppo integrato che copre tutta la filiera edile.' },
]

const values = [
  { num: '01', title: 'Qualità', desc: 'Standard elevati, materiali selezionati, lavorazioni certificate. Non facciamo compromessi.' },
  { num: '02', title: 'Famiglia', desc: 'Gestione familiare significa rapporto diretto. Parliamo con te, non attraverso intermediari.' },
  { num: '03', title: 'Concretezza', desc: 'Risultati misurabili, tempi rispettati, promesse mantenute. Fatti, non parole.' },
  { num: '04', title: 'Territorio', desc: "40 anni in Valle Camonica. Conosciamo ogni sfumatura di questo territorio." },
]

const team = [
  { name: 'Taddei Antonio', role: 'Costruzioni', initial: 'A', desc: 'Esperienza diretta in cantiere dal 1983' },
  { name: 'Taddei Gianluca', role: 'Magazzino / Centro Ferro', initial: 'G', desc: 'La competenza tecnica al servizio del cliente' },
  { name: 'Geom. Taddei Nicola', role: 'Consulenze Tecniche', initial: 'N', desc: 'Progettazione e assistenza personalizzata' },
]

export default function ChiSiamo() {
  const heroRef = useRef(null)
  const introRef = useRef(null)
  const timelineRef = useRef(null)
  const valuesRef = useRef(null)
  const teamRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero headline
      const heroTitle = heroRef.current?.querySelector('h1')
      if (heroTitle) {
        const split = new SplitType(heroTitle, { types: 'lines, words' })
        gsap.fromTo(split.words,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.06,
            delay: 0.2,
          }
        )
      }

      // Intro section
      const introElements = introRef.current?.querySelectorAll('.reveal-item')
      introElements?.forEach((el, i) => {
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            },
            delay: i * 0.15,
          }
        )
      })

      // Timeline animation - each item from different direction
      const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item')
      timelineItems?.forEach((item, i) => {
        const isEven = i % 2 === 0
        gsap.fromTo(item,
          { x: isEven ? -100 : 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
            },
          }
        )
      })

      // Values - staggered reveal
      const valueItems = valuesRef.current?.querySelectorAll('.value-item')
      valueItems?.forEach((item, i) => {
        gsap.fromTo(item,
          { y: 80, opacity: 0, rotateX: -15 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: valuesRef.current,
              start: 'top 70%',
            },
            delay: i * 0.12,
          }
        )
      })

      // Team - cascade reveal
      const teamCards = teamRef.current?.querySelectorAll('.team-card')
      teamCards?.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 60 + (i * 20), opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: teamRef.current,
              start: 'top 75%',
            },
            delay: i * 0.2,
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-[#0a0a0a] overflow-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-end pb-20 lg:pb-32 pt-32">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={imgMagazzino}
            alt="Magazzino Taddei - Vista esterna"
            title="Sede Società Taddei - Corteno Golgi"
            width={1920}
            height={1080}
            loading="eager"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
        </div>

        {/* Decorative */}
        <div className="absolute top-1/3 left-[8%] w-px h-24 bg-gradient-to-b from-blue-500 to-transparent" />
        <div className="absolute top-1/3 left-[8%] w-12 h-px bg-blue-500" />

        <div className="container-fluid relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-blue-500" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-blue-500">Chi Siamo</span>
            </div>

            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-black leading-[0.9] tracking-tight text-white mb-6">
              <span className="block">Un'impresa,</span>
              <span className="block ml-[5%] text-blue-500">tre generazioni</span>
              <span className="block text-neutral-500 text-[0.6em]">di passione.</span>
            </h1>

            <p className="text-lg text-neutral-400 max-w-lg ml-[3%]">
              Dal 1983 costruiamo con competenza, forniamo con qualità, vendiamo con trasparenza.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO - Broken layout */}
      <section ref={introRef} className="py-24 lg:py-40">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Text content */}
            <div className="lg:col-span-5 lg:col-start-1">
              <div className="reveal-item">
                <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-6 block">
                  La nostra storia
                </span>
                <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-white leading-[1.1] mb-6">
                  L'Alta Valle Camonica è la nostra casa.
                  <span className="text-blue-500 block mt-1">L'edilizia è la nostra vita.</span>
                </h2>
              </div>

              <div className="reveal-item space-y-4 text-neutral-400 leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Società Taddei</span> non è nata in un ufficio.
                  È nata nei cantieri, tra il rumore delle betoniere e la polvere del cemento.
                </p>
                <p>
                  Oggi siamo l'unica realtà della zona con un centro di trasformazione ferro certificato,
                  un magazzino materiali completo e una divisione immobiliare.
                </p>
                <p className="text-white">
                  Non siamo intermediari. Controlliamo ogni fase del processo.
                </p>
              </div>
            </div>

            {/* Images - Overlapping */}
            <div className="lg:col-span-6 lg:col-start-7 relative">
              <div className="reveal-item relative aspect-[4/3] overflow-hidden">
                <img
                  src={imgMateriali}
                  alt="Magazzino materiali edili"
                  title="Magazzino materiali Taddei"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="reveal-item absolute -bottom-8 -left-8 lg:-left-16 w-2/3 aspect-square overflow-hidden border-4 border-[#0a0a0a]">
                <img
                  src={imgFerro}
                  alt="Centro ferro certificato"
                  title="Centro ferro - Taglio e piegatura su misura"
                  width={600}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-1/2 h-1/2 border border-blue-500/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE - Irregular */}
      <section ref={timelineRef} className="py-24 lg:py-40 bg-[#0c0c0c]">
        <div className="container-fluid">
          <div className="max-w-xl mb-16 lg:mb-24">
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-4 block">
              La nostra storia
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1]">
              40 anni di<br />
              <span className="text-blue-500">crescita costante</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-neutral-800 -translate-x-1/2" />

            <div className="space-y-16 lg:space-y-24">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`timeline-item relative grid lg:grid-cols-2 gap-8 lg:gap-16 ${
                    i % 2 === 0 ? '' : 'lg:text-right'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 lg:left-1/2 top-0 w-4 h-4 bg-blue-500 -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`pl-16 lg:pl-0 ${i % 2 === 0 ? 'lg:pr-16' : 'lg:order-2 lg:pl-16'}`}>
                    <span className="text-[clamp(3rem,8vw,4rem)] font-black text-blue-500/30 block leading-none mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className={`hidden lg:block ${i % 2 === 0 ? 'lg:order-2' : ''}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES - Asymmetric grid */}
      <section ref={valuesRef} className="py-24 lg:py-40">
        <div className="container-fluid">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
            <div className="lg:max-w-lg">
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-4 block">
                I nostri valori
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1]">
                Cosa ci guida<br />
                <span className="text-blue-500">ogni giorno</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="value-item group relative bg-[#0c0c0c] p-8 lg:p-10 overflow-hidden"
                style={{ marginTop: i % 2 === 1 ? '2rem' : 0 }}
              >
                {/* Number */}
                <span className="text-[100px] lg:text-[140px] font-black text-neutral-900 absolute -top-8 -right-4 leading-none select-none group-hover:text-blue-500/10 transition-colors duration-500">
                  {value.num}
                </span>

                <div className="relative z-10">
                  <span className="text-[10px] text-neutral-600 tracking-widest mb-4 block">{value.num}</span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-blue-500 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed max-w-sm">{value.desc}</p>
                </div>

                {/* Border accent */}
                <div className="absolute top-0 left-0 w-1/3 h-[2px] bg-blue-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM - Cascade layout */}
      <section ref={teamRef} className="py-24 lg:py-40 bg-[#0c0c0c]">
        <div className="container-fluid">
          <div className="max-w-xl mb-16 lg:mb-24">
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-4 block">
              Il team
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1]">
              I volti dietro<br />
              <span className="text-blue-500">l'impresa</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-4">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="team-card group relative bg-[#0a0a0a] overflow-hidden"
                style={{ marginTop: `${i * 3}rem` }}
              >
                {/* Initial */}
                <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
                  <span className="text-[clamp(6rem,20vw,10rem)] font-black text-white/20 group-hover:text-white/30 transition-colors duration-500">
                    {member.initial}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <span className="text-blue-500 text-sm font-medium block mb-3">{member.role}</span>
                  <p className="text-neutral-500 text-sm">{member.desc}</p>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="container-fluid">
          <div className="relative bg-blue-600 p-12 lg:p-20 overflow-hidden">
            {/* Background text */}
            <span className="absolute -top-10 -right-10 text-[200px] lg:text-[300px] font-black text-white/5 leading-none select-none">
              T
            </span>

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.1] mb-6">
                Vuoi conoscerci meglio?
              </h2>
              <p className="text-white/80 text-lg mb-10">
                Vieni a trovarci nel nostro magazzino o contattaci per una consulenza.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contatti"
                  className="group inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-neutral-100 transition-all"
                >
                  Contattaci
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/costruzioni"
                  className="group inline-flex items-center gap-3 border-2 border-white/30 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all"
                >
                  Scopri i servizi
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
