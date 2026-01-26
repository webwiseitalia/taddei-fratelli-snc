import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

import imgMagazzino from '../assets/magazzino/magazzino-interno-scaffali.webp'
import imgLoghiPartner from '../assets/partner/loghi-partner-marchi.webp'

gsap.registerPlugin(ScrollTrigger)

const partners = [
  { name: 'Velux', category: 'Finestre per tetti', desc: 'Leader mondiale nelle finestre per tetti. Luce naturale e ventilazione per ogni ambiente.' },
  { name: 'Kerakoll', category: 'Materiali per edilizia', desc: 'Sistemi per la posa di ceramiche, risanamento e bioedilizia. Qualità made in Italy.' },
  { name: 'Eclisse', category: 'Controtelai', desc: 'Controtelai per porte scorrevoli a scomparsa. Design e funzionalità per ogni ambiente.' },
  { name: 'Wierer', category: 'Coperture', desc: 'Tegole e coppi di qualità superiore. Coperture durature e resistenti nel tempo.' },
  { name: 'Fassa Bortolo', category: 'Malte e intonaci', desc: 'Malte premiscelate e intonaci per ogni applicazione. Tradizione e innovazione.' },
  { name: 'Ytong', category: 'Blocchi calcestruzzo', desc: 'Blocchi in calcestruzzo aerato autoclavato. Isolamento termico eccellente.' },
  { name: 'Isotex', category: 'Blocchi cassero', desc: 'Blocchi cassero in legno cemento. Costruire isolato, naturalmente.' },
  { name: 'Isolmant', category: 'Isolamento acustico', desc: "Soluzioni per l'isolamento acustico. Comfort abitativo garantito." },
  { name: 'Project for Building', category: 'Sistemi costruttivi', desc: "Sistemi costruttivi innovativi per l'edilizia moderna." },
]

const guarantees = [
  'Prodotti originali, mai paralleli',
  'Garanzia valida e riconosciuta',
  'Assistenza post-vendita diretta',
  'Prezzi di listino ufficiali',
]

export default function Partner() {
  const heroRef = useRef(null)
  const introRef = useRef(null)
  const gridRef = useRef(null)
  const benefitsRef = useRef(null)

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

      // Intro text
      const introContent = introRef.current?.querySelectorAll('.intro-reveal')
      introContent?.forEach((el, i) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: introRef.current,
              start: 'top 70%',
            },
            delay: i * 0.1,
          }
        )
      })

      // Partner cards - scattered reveal
      const partnerCards = gridRef.current?.querySelectorAll('.partner-card')
      partnerCards?.forEach((card, i) => {
        const direction = i % 3
        const xStart = direction === 0 ? -30 : direction === 1 ? 0 : 30

        gsap.fromTo(card,
          { x: xStart, y: 20, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
            },
          }
        )
      })

      // Benefits - stagger
      const benefitItems = benefitsRef.current?.querySelectorAll('.benefit-item')
      gsap.fromTo(benefitItems,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: 'top 70%',
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
            src={imgMagazzino}
            alt="Magazzino Taddei - Partner ufficiali"
            title="Rivenditori autorizzati delle migliori marche"
            width={1920}
            height={1080}
            loading="eager"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
        </div>

        <div className="absolute top-1/4 left-[8%] w-px h-24 bg-gradient-to-b from-blue-500 to-transparent" />
        <div className="absolute top-1/4 left-[8%] w-12 h-px bg-blue-500" />

        <div className="container-fluid relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-blue-500" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-blue-500">Partner</span>
            </div>

            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-black leading-[0.9] tracking-tight text-white mb-6">
              <span className="block">Lavoriamo</span>
              <span className="block ml-[5%]">con i migliori.</span>
              <span className="block text-blue-500 text-[0.65em] mt-2">Qualità garantita.</span>
            </h1>

            <p className="text-lg text-neutral-400 max-w-lg ml-[3%]">
              I nostri partner sono i leader di mercato. Prodotti certificati, assistenza garantita.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section ref={introRef} className="py-24 lg:py-40">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <h2 className="intro-reveal text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.1] mb-8">
                Qualità che fa la
                <span className="text-blue-500"> differenza</span>
              </h2>
              <p className="intro-reveal text-neutral-400 text-lg leading-relaxed mb-6">
                In oltre 40 anni di attività abbiamo costruito relazioni solide con i migliori produttori del settore. Non scegliamo i fornitori per il prezzo più basso, ma per la qualità dei prodotti e l'affidabilità del servizio.
              </p>
              <p className="intro-reveal text-neutral-500">
                Siamo rivenditori autorizzati di tutti i marchi presenti in questa pagina. Questo significa garanzia originale, assistenza tecnica e ricambi sempre disponibili.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="intro-reveal relative">
                <img
                  src={imgLoghiPartner}
                  alt="Loghi dei nostri partner - Velux, Kerakoll, Fassa Bortolo, Eclisse, Wierer, Ytong, Montini, Project for Building"
                  title="I marchi che trattiamo - Rivenditori autorizzati"
                  width={600}
                  height={400}
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER GRID - Irregular masonry */}
      <section ref={gridRef} className="py-24 lg:py-40 bg-[#0c0c0c]">
        <div className="container-fluid">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-4 block">
                I nostri partner
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1]">
                Marchi di cui<br />
                <span className="text-blue-500">ci fidiamo</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((partner, i) => (
              <div
                key={partner.name}
                className="partner-card group relative bg-[#0a0a0a] p-8 overflow-hidden hover:bg-[#0f0f0f] transition-all duration-500"
                style={{
                  marginTop: i % 3 === 1 ? '2rem' : i % 3 === 2 ? '4rem' : 0,
                }}
              >
                {/* Logo placeholder */}
                <div className="h-16 flex items-center mb-6">
                  <span className="text-3xl font-black text-white group-hover:text-blue-500 transition-colors duration-500">
                    {partner.name}
                  </span>
                </div>

                {/* Category tag */}
                <span className="inline-block px-3 py-1 bg-blue-500 text-white text-[10px] uppercase tracking-widest font-semibold mb-4">
                  {partner.category}
                </span>

                <p className="text-neutral-500 text-sm leading-relaxed">
                  {partner.desc}
                </p>

                {/* Accent line */}
                <div className="absolute top-0 left-0 w-1/3 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-500" />

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-neutral-900 group-hover:bg-blue-500/10 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section ref={benefitsRef} className="py-24 lg:py-40">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-4 block">
                Perché i partner contano
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1] mb-6">
                Dietro ogni prodotto,<br />
                <span className="text-blue-500">c'è una garanzia</span>
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-8">
                Scegliere un fornitore non significa solo comprare prodotti. Significa affidarsi a un ecosistema di qualità, assistenza e innovazione continua.
              </p>

              <div className="space-y-4">
                {['Garanzia originale del produttore', 'Assistenza tecnica specializzata', 'Ricambi sempre disponibili', 'Formazione continua del personale', 'Aggiornamento sui nuovi prodotti'].map((benefit, i) => (
                  <div
                    key={benefit}
                    className="benefit-item flex items-center gap-3 text-neutral-400"
                    style={{ marginLeft: `${i * 0.5}rem` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Authorized box */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="bg-blue-600 p-10 lg:p-12 relative overflow-hidden">
                <span className="absolute -top-10 -right-10 text-[180px] font-black text-white/5 leading-none select-none">
                  OK
                </span>

                <div className="relative z-10">
                  <span className="text-[10px] uppercase tracking-widest text-white/60 block mb-4">Certificazione</span>
                  <h3 className="text-3xl font-bold text-white mb-6">Rivenditori Autorizzati</h3>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    Siamo rivenditori ufficiali di tutti i marchi presenti in questa pagina. Questo significa che puoi contare su:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {guarantees.map((item, i) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-white text-blue-600 text-sm font-bold flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-white text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#0c0c0c]">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.1] mb-6">
              Cerchi un prodotto specifico?
            </h2>
            <p className="text-neutral-400 text-lg mb-10">
              Se non trovi quello che cerchi nell'elenco, contattaci. Trattiamo molti altri marchi e possiamo ordinare prodotti su richiesta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contatti"
                className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all"
              >
                Contattaci
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/magazzino"
                className="group inline-flex items-center justify-center gap-3 border border-neutral-700 hover:border-white text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all"
              >
                Vai al magazzino
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
