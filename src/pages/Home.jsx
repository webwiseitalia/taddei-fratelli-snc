import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Phone, User, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

import imgCostruzioni from '../assets/cantiere-costruzione-ponteggi.webp'
import imgMagazzino from '../assets/edificio-residenziale-vendita.webp'
import imgImmobiliare from '../assets/villette-colorate-montagna.webp'
import imgHero from '../assets/residenze-alpine-legno-pietra.webp'
import imgStats from '../assets/residenze-alpine-legno-pietra.webp'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    num: '01',
    title: 'Costruzioni',
    desc: 'Dalla fondazione al tetto. Costruzioni civili e residenziali con controllo totale su ogni fase.',
    image: imgCostruzioni,
    link: '/costruzioni',
  },
  {
    num: '02',
    title: 'Magazzino',
    desc: "Centro ferro certificato. L'unico in Alta Valle Camonica. Materiali edili selezionati.",
    image: imgMagazzino,
    link: '/magazzino',
  },
  {
    num: '03',
    title: 'Immobiliare',
    desc: 'Compri direttamente dal costruttore. Senza intermediari, senza sorprese.',
    image: imgImmobiliare,
    link: '/immobiliare',
  },
]

const stats = [
  { value: '40+', label: 'Anni', sublabel: 'di esperienza' },
  { value: '3', label: 'Divisioni', sublabel: 'integrate' },
  { value: '1°', label: 'Centro ferro', sublabel: 'certificato in zona' },
]

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const heroRef = useRef(null)
  const headlineRef = useRef(null)
  const sublineRef = useRef(null)
  const servicesRef = useRef(null)
  const statsRef = useRef(null)
  const marqueeRef = useRef(null)
  const ctaRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setStatus({
      type: 'success',
      message: 'Messaggio inviato! Ti ricontatteremo presto.',
    })
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)

    setTimeout(() => setStatus({ type: '', message: '' }), 5000)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero headline animation
      const headline = new SplitType(headlineRef.current, { types: 'lines, words' })
      gsap.set(headline.words, { y: 100, opacity: 0 })
      gsap.to(headline.words, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        stagger: { each: 0.08, from: 'start' },
        delay: 0.3,
      })

      // Subline animation
      gsap.fromTo(sublineRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 1 }
      )

      // Hero image parallax
      const heroImage = heroRef.current?.querySelector('.hero-image')
      if (heroImage) {
        gsap.to(heroImage, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        })
      }

      // Services stagger reveal - faster animation
      const serviceCards = servicesRef.current?.querySelectorAll('.service-card')
      serviceCards?.forEach((card, i) => {
        const image = card.querySelector('.service-image')

        gsap.fromTo(card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
            },
            delay: i * 0.1,
          }
        )

        if (image) {
          gsap.fromTo(image,
            { scale: 1.1 },
            {
              scale: 1,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
              },
            }
          )
        }
      })

      // Stats counter animation
      const statItems = statsRef.current?.querySelectorAll('.stat-item')
      statItems?.forEach((item, i) => {
        gsap.fromTo(item,
          { y: 60, opacity: 0, rotateY: -15 },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 75%',
            },
            delay: i * 0.15,
          }
        )
      })

      // Marquee speed based on scroll
      const marquee = marqueeRef.current
      if (marquee) {
        gsap.to(marquee.querySelector('.marquee-inner'), {
          xPercent: -50,
          ease: 'none',
          duration: 20,
          repeat: -1,
        })

        ScrollTrigger.create({
          trigger: marquee,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self) => {
            gsap.to(marquee.querySelector('.marquee-inner'), {
              timeScale: 1 + self.getVelocity() / 1000,
              overwrite: true,
            })
          },
        })
      }

      // CTA section
      if (ctaRef.current) {
        const ctaText = new SplitType(ctaRef.current.querySelector('h2'), { types: 'words' })
        gsap.fromTo(ctaText.words,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.04,
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 70%',
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-[#0a0a0a] overflow-hidden">
      {/* HERO - Broken grid, asymmetric */}
      <section ref={heroRef} className="relative min-h-[100svh] lg:min-h-screen flex items-start lg:items-end pt-20 pb-8 lg:pt-0 lg:pb-32">
        {/* Background image - offset */}
        <div className="absolute top-0 right-0 w-full lg:w-[70%] h-full overflow-hidden">
          <img
            src={imgHero}
            alt="Residenze alpine in legno e pietra - Costruzioni Taddei"
            title="Costruzioni residenziali in Alta Valle Camonica"
            width={1920}
            height={1080}
            loading="eager"
            className="hero-image w-full h-[120%] object-cover opacity-50 lg:opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-[20%] left-[5%] w-px h-32 bg-gradient-to-b from-blue-500 to-transparent hidden lg:block" />
        <div className="absolute top-[15%] left-[5%] w-16 h-px bg-blue-500 hidden lg:block" />
        <div className="absolute bottom-[30%] right-[10%] w-24 h-24 border border-neutral-800 rotate-45 hidden lg:block" />

        {/* Content */}
        <div className="container-fluid relative z-10 pt-16 lg:pt-32">
          <div className="max-w-4xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-3 lg:gap-4 mb-4 lg:mb-8">
              <span className="w-8 lg:w-12 h-px bg-blue-500" />
              <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.2em] lg:tracking-[0.25em] text-blue-500 font-medium">
                Dal 1983 in Alta Valle Camonica
              </span>
            </div>

            {/* Headline - Irregular line breaks */}
            <h1
              ref={headlineRef}
              className="text-[clamp(2rem,10vw,6rem)] font-black leading-[0.95] tracking-tight text-white mb-4 lg:mb-8"
            >
              <span className="block">Dal materiale</span>
              <span className="block ml-0 lg:ml-[10%]">alla costruzione.</span>
              <span className="block text-blue-500 text-[0.5em] mt-2 lg:mt-4">Il vostro punto di riferimento.</span>
            </h1>

            {/* Subline */}
            <p
              ref={sublineRef}
              className="text-sm lg:text-xl text-neutral-400 max-w-xl leading-relaxed"
            >
              Commercio Materiali Edili · Legna e Pellet · Ceramiche · Lavorazione Ferro · Colorificio
            </p>

            {/* CTAs - Offset */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-8 lg:mt-12">
              <Link
                to="/contatti"
                className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-500"
              >
                Richiedi preventivo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:036474313"
                className="group inline-flex items-center gap-3 border border-neutral-700 hover:border-white text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-500"
              >
                <Phone className="w-4 h-4" />
                0364 74313
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-neutral-600 rotate-90 origin-center translate-x-4">
              Scroll
            </span>
            <div className="w-px h-16 bg-gradient-to-b from-neutral-600 to-transparent" />
          </div>
        </div>
      </section>

      {/* SERVICES - Broken grid, staggered cards */}
      <section ref={servicesRef} className="relative py-16 lg:py-32">
        {/* Section header - Off-center */}
        <div className="container-fluid mb-20 lg:mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="lg:max-w-xl">
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-4 block">
                I nostri servizi
              </span>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[0.95] text-white">
                Tre divisioni.
                <span className="block text-blue-500 ml-[8%]">Un'unica visione.</span>
              </h2>
            </div>
            <p className="text-neutral-500 max-w-sm lg:text-right text-sm leading-relaxed">
              Un gruppo integrato che copre l'intera filiera dell'edilizia: dalla fornitura alla costruzione, fino alla vendita.
            </p>
          </div>
        </div>

        {/* Service cards - Clean grid layout */}
        <div className="container-fluid">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="service-card group relative bg-neutral-900/50 rounded-xl overflow-hidden hover:bg-neutral-900 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    title={`${service.title} - Società Taddei`}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="service-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />

                  {/* Number badge */}
                  <span className="absolute top-4 left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {service.num}
                  </span>

                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="service-content p-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Link indicator */}
                  <div className="mt-5 flex items-center gap-2 text-blue-500 text-sm font-medium">
                    <span>Scopri di più</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS - Asymmetric layout with image */}
      <section ref={statsRef} className="relative py-24 lg:py-40 bg-[#0c0c0c]">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Image - Offset */}
            <div className="lg:col-span-5 lg:col-start-1 relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={imgStats}
                  alt="Residenze alpine costruite da Taddei"
                  title="40+ anni di esperienza nelle costruzioni"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-blue-500/20 -z-10" />
            </div>

            {/* Stats */}
            <div className="lg:col-span-6 lg:col-start-7">
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-8 block">
                I numeri che contano
              </span>

              <div className="space-y-10">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="stat-item flex items-baseline gap-6 pb-8 border-b border-neutral-800"
                  >
                    <span className="text-[clamp(3rem,8vw,5rem)] font-black text-blue-500 leading-none">
                      {stat.value}
                    </span>
                    <div>
                      <span className="text-white font-semibold block">{stat.label}</span>
                      <span className="text-neutral-500 text-sm">{stat.sublabel}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-neutral-400 mt-12 max-w-md leading-relaxed">
                Siamo costruttori che vendono materiali. Sappiamo cosa serve in cantiere
                perché ci lavoriamo ogni giorno. <span className="text-white">Questo fa tutta la differenza.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE - Horizontal scroll */}
      <section ref={marqueeRef} className="py-8 bg-blue-600 overflow-hidden">
        <div className="marquee-inner flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8">
              <span className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-white/90">Costruzioni</span>
              <span className="w-3 h-3 bg-white/40 rotate-45" />
              <span className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-white/90">Magazzino</span>
              <span className="w-3 h-3 bg-white/40 rotate-45" />
              <span className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-white/90">Centro Ferro</span>
              <span className="w-3 h-3 bg-white/40 rotate-45" />
              <span className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-white/90">Immobiliare</span>
              <span className="w-3 h-3 bg-white/40 rotate-45" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA - Final section with Contact Form */}
      <section ref={ctaRef} className="relative py-32 lg:py-48 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={imgMagazzino}
            alt="Edificio residenziale in costruzione - Taddei"
            title="Costruzioni e vendita immobili - Società Taddei"
            width={1920}
            height={1080}
            loading="lazy"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/70" />
        </div>

        <div className="container-fluid relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Text content */}
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-blue-500 mb-6 block">
                Inizia il tuo progetto
              </span>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1] text-white mb-8">
                Hai un progetto in mente?
                <span className="block text-neutral-500 text-[0.7em] mt-2">Parliamone.</span>
              </h2>
              <p className="text-neutral-400 text-lg mb-8 max-w-lg">
                Preventivo gratuito e senza impegno. Siamo a tua disposizione
                per ogni esigenza edile.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:036474313"
                  className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-500 backdrop-blur-sm rounded-lg"
                >
                  <Phone className="w-4 h-4" />
                  0364 74313
                </a>
                <Link
                  to="/contatti"
                  className="group inline-flex items-center gap-3 text-neutral-400 hover:text-white px-6 py-4 text-sm font-medium transition-all duration-300"
                >
                  Vai alla pagina contatti
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-[#0c0c0c]/80 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-neutral-800">
              <h3 className="text-xl font-bold text-white mb-6">Richiedi un preventivo</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="home-name" className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">
                    Nome e Cognome *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-600" />
                    <input
                      type="text"
                      id="home-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-neutral-800 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-neutral-600 rounded-lg"
                      placeholder="Mario Rossi"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="home-email" className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-600" />
                    <input
                      type="email"
                      id="home-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-neutral-800 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-neutral-600 rounded-lg"
                      placeholder="mario@esempio.it"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="home-message" className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">
                    Il tuo progetto *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-neutral-600" />
                    <textarea
                      id="home-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-neutral-800 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder:text-neutral-600 rounded-lg"
                      placeholder="Descrivi brevemente cosa hai in mente..."
                    />
                  </div>
                </div>

                {/* Status Message */}
                {status.message && (
                  <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    {status.message}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 rounded-lg"
                >
                  {isSubmitting ? (
                    'Invio in corso...'
                  ) : (
                    <>
                      Invia richiesta
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-neutral-600 text-xs text-center">
                  * Campi obbligatori. Risposta garantita entro 24 ore.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Decorative */}
        <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-blue-500 to-transparent" />
      </section>
    </div>
  )
}
