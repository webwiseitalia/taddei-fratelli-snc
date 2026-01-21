import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Phone, CheckCircle2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

import imgMagazzino from '../assets/magazzino-ingresso-tegole.webp'
import imgCentroFerro from '../assets/centro-ferro.webp'
import imgColorificio from '../assets/colorificio-ingresso-taddei.webp'
import imgScaffali from '../assets/magazzino-interno-scaffali.webp'
import imgMateriali from '../assets/materiali-edili.webp'
import imgPitture from '../assets/colorificio-vetrina.webp'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  { num: '01', title: 'Centro Ferro', desc: "L'unico certificato in Alta Valle Camonica. Taglio, piegatura e sagomatura su misura.", highlight: true },
  { num: '02', title: 'Solai Prefabbricati', desc: 'Travi, travetti e pignatte per solai di ogni tipologia.' },
  { num: '03', title: 'Materiali Edili', desc: 'Cemento, inerti, laterizi, blocchi, isolanti. Tutto per il cantiere.' },
  { num: '04', title: 'Caminetti e Stufe', desc: 'Caminetti a legna e pellet delle migliori marche.' },
  { num: '05', title: 'Colorificio', desc: 'Pitture e vernici, qualsiasi colore su richiesta con tintometro.' },
]

const brands = ['Velux', 'Kerakoll', 'Isotex', 'Fassa Bortolo', 'Ytong', 'Wierer', 'Eclisse', 'Isolmant', 'Project for Building']

const ferroServices = ['Taglio su misura', 'Piegatura a disegno', 'Sagomatura certificata', 'Consegna in cantiere']

export default function Magazzino() {
  const heroRef = useRef(null)
  const introRef = useRef(null)
  const categoriesRef = useRef(null)
  const galleryRef = useRef(null)
  const brandsRef = useRef(null)

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

      // Intro - parallel reveal
      const introContent = introRef.current?.querySelector('.intro-content')
      const introCard = introRef.current?.querySelector('.intro-card')

      if (introContent) {
        gsap.fromTo(introContent,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: introRef.current,
              start: 'top 70%',
            },
          }
        )
      }

      if (introCard) {
        gsap.fromTo(introCard,
          { x: 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: introRef.current,
              start: 'top 70%',
            },
            delay: 0.2,
          }
        )
      }

      // Categories - cascade
      const catItems = categoriesRef.current?.querySelectorAll('.cat-item')
      catItems?.forEach((item, i) => {
        gsap.fromTo(item,
          { y: 60 + (i * 10), opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: categoriesRef.current,
              start: 'top 70%',
            },
            delay: i * 0.1,
          }
        )
      })

      // Gallery - staggered reveal
      const galleryItems = galleryRef.current?.querySelectorAll('.gallery-item')
      galleryItems?.forEach((item, i) => {
        const image = item.querySelector('img')
        gsap.fromTo(item,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: galleryRef.current,
              start: 'top 75%',
            },
            delay: i * 0.15,
          }
        )

        if (image) {
          gsap.fromTo(image,
            { scale: 1.3 },
            {
              scale: 1,
              duration: 1.5,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: galleryRef.current,
                start: 'top 75%',
              },
              delay: i * 0.15,
            }
          )
        }
      })

      // Brands marquee
      const brandItems = brandsRef.current?.querySelectorAll('.brand-item')
      gsap.fromTo(brandItems,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.05,
          scrollTrigger: {
            trigger: brandsRef.current,
            start: 'top 80%',
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
            alt="Magazzino materiali edili Taddei - Vista esterna"
            title="Magazzino edile Corteno Golgi"
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
              <span className="text-[11px] uppercase tracking-[0.25em] text-blue-500">Magazzino Materiali</span>
            </div>

            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-black leading-[0.9] tracking-tight text-white mb-6">
              <span className="block">Non vendiamo</span>
              <span className="block ml-[5%]">materiali.</span>
              <span className="block text-blue-500 text-[0.65em] mt-2">Risolviamo problemi.</span>
            </h1>

            <p className="text-lg text-neutral-400 max-w-lg ml-[3%]">
              Il più completo punto di riferimento per materiali edili in Alta Valle Camonica.
              Unico centro ferro certificato della zona.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO + CENTRO FERRO */}
      <section ref={introRef} className="py-24 lg:py-40">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="intro-content lg:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-6 block">
                Il nostro approccio
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1] mb-6">
                Più di un magazzino.
                <span className="text-blue-500 block mt-1">Un partner.</span>
              </h2>

              <div className="space-y-4 text-neutral-400 leading-relaxed mb-8">
                <p>
                  Quando entri nel nostro magazzino, non trovi solo scaffali.
                  Trovi <span className="text-white font-semibold">persone che conoscono l'edilizia</span>.
                </p>
                <p>
                  Siamo noi stessi costruttori. Sappiamo cosa funziona in cantiere e cosa no.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contatti"
                  className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all"
                >
                  Richiedi preventivo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:036474313"
                  className="group inline-flex items-center gap-3 border border-neutral-700 hover:border-white text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4" />
                  0364 74313
                </a>
              </div>
            </div>

            {/* Centro Ferro Card */}
            <div className="intro-card lg:col-span-6 lg:col-start-7">
              <div className="bg-blue-600 p-8 lg:p-10 relative overflow-hidden">
                <span className="absolute -top-10 -right-10 text-[200px] font-black text-white/5 leading-none select-none">
                  Fe
                </span>

                <div className="relative z-10">
                  <span className="text-[10px] uppercase tracking-widest text-white/60 block mb-4">Certificato</span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Centro Ferro</h3>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    L'unico in Alta Valle Camonica. Armature per cemento armato su misura, con certificazione.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {ferroServices.map((service) => (
                      <div key={service} className="flex items-center gap-2 text-white">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES - Broken grid */}
      <section ref={categoriesRef} className="py-24 lg:py-40 bg-[#0c0c0c]">
        <div className="container-fluid">
          <div className="max-w-xl mb-16 lg:mb-24">
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-4 block">
              Reparti
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1]">
              Tutto per l'edilizia,<br />
              <span className="text-blue-500">in un solo posto</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat, i) => (
              <div
                key={cat.title}
                className={`cat-item group relative p-8 overflow-hidden transition-all duration-500 ${
                  cat.highlight
                    ? 'bg-blue-600 lg:col-span-2 lg:row-span-2'
                    : 'bg-[#0a0a0a] hover:bg-[#111]'
                }`}
                style={{ marginTop: !cat.highlight && i > 0 ? `${(i % 3) * 1}rem` : 0 }}
              >
                {/* Number background */}
                <span className={`absolute -top-4 -right-2 text-[100px] lg:text-[140px] font-black leading-none select-none ${
                  cat.highlight ? 'text-white/10' : 'text-neutral-900 group-hover:text-blue-500/10'
                } transition-colors duration-500`}>
                  {cat.num}
                </span>

                <div className="relative z-10">
                  <span className={`text-[10px] tracking-widest mb-4 block ${
                    cat.highlight ? 'text-white/60' : 'text-neutral-600'
                  }`}>
                    {cat.num}
                  </span>
                  <h3 className={`text-2xl lg:text-3xl font-bold mb-3 ${
                    cat.highlight ? 'text-white' : 'text-white group-hover:text-blue-500'
                  } transition-colors`}>
                    {cat.title}
                  </h3>
                  <p className={`leading-relaxed ${
                    cat.highlight ? 'text-white/80 text-lg' : 'text-neutral-500 text-sm'
                  }`}>
                    {cat.desc}
                  </p>
                </div>

                {/* Accent line */}
                <div className={`absolute top-0 left-0 h-[2px] ${
                  cat.highlight ? 'w-full bg-white/20' : 'w-1/3 bg-blue-500'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY - Irregular masonry */}
      <section ref={galleryRef} className="py-24 lg:py-40">
        <div className="container-fluid">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-4 block">
                Il magazzino
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1]">
                Alcuni scatti<br />
                <span className="text-blue-500">dalla nostra sede</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="gallery-item col-span-2 row-span-2 overflow-hidden group">
              <img
                src={imgMagazzino}
                alt="Magazzino esterno"
                title="Vista esterna del magazzino materiali"
                width={800}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="gallery-item overflow-hidden group" style={{ marginTop: '2rem' }}>
              <img
                src={imgColorificio}
                alt="Colorificio"
                title="Reparto colorificio - Tintometro e pitture"
                width={400}
                height={400}
                loading="lazy"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="gallery-item overflow-hidden group">
              <img
                src={imgScaffali}
                alt="Scaffali magazzino"
                title="Scaffali con materiali edili"
                width={400}
                height={400}
                loading="lazy"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="gallery-item overflow-hidden group">
              <img
                src={imgCentroFerro}
                alt="Centro ferro certificato"
                title="Centro ferro - Lavorazione armature"
                width={400}
                height={400}
                loading="lazy"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="gallery-item overflow-hidden group" style={{ marginTop: '-1rem' }}>
              <img
                src={imgPitture}
                alt="Reparto pitture"
                title="Reparto pitture e vernici"
                width={400}
                height={400}
                loading="lazy"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section ref={brandsRef} className="py-24 lg:py-40 bg-[#0c0c0c]">
        <div className="container-fluid">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-4 block">
                I nostri marchi
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1]">
                Partner delle<br />
                <span className="text-blue-500">migliori aziende</span>
              </h2>
            </div>
            <Link
              to="/partner"
              className="group inline-flex items-center gap-2 text-blue-500 hover:text-white text-sm font-semibold uppercase tracking-wider transition-colors"
            >
              Scopri tutti i partner
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
            {brands.map((brand, i) => (
              <div
                key={brand}
                className="brand-item group aspect-square bg-[#0a0a0a] flex items-center justify-center p-4 hover:bg-blue-600 transition-all duration-500"
                style={{ marginTop: i % 2 === 1 ? '1rem' : 0 }}
              >
                <span className="text-neutral-500 group-hover:text-white text-xs lg:text-sm font-medium text-center transition-colors">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Preventivo */}
            <div className="bg-blue-600 p-10 lg:p-12 relative overflow-hidden group">
              <span className="absolute -bottom-10 -right-10 text-[200px] font-black text-white/5 leading-none select-none">
                ?
              </span>
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Hai bisogno di un preventivo?
                </h3>
                <p className="text-white/80 mb-8">
                  Mandaci la tua lista materiali. Ti rispondiamo in giornata.
                </p>
                <Link
                  to="/contatti"
                  className="group/btn inline-flex items-center gap-3 bg-white text-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-neutral-100 transition-all"
                >
                  Richiedi preventivo
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Indirizzo */}
            <div className="bg-[#0c0c0c] p-10 lg:p-12 border-l-2 border-blue-500">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Vieni a trovarci
              </h3>
              <div className="space-y-4 text-neutral-400">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-600 block mb-1">Indirizzo</span>
                  <p className="text-white">Via Artigiani, 44 – 25040 Corteno Golgi (BS)</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-600 block mb-1">Orari</span>
                  <p>Lun-Ven 8:00-12:00 / 14:00-18:00</p>
                  <p>Sab 8:00-12:00</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-600 block mb-1">Contatto</span>
                  <p className="text-white">Taddei Gianluca – Magazzino / Ferro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
