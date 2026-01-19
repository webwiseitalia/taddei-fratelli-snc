import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ArrowUp, ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import logoTaddei from '../assets/logo-taddei.webp'

gsap.registerPlugin(ScrollTrigger)

const quickLinks = [
  { name: 'Chi Siamo', href: '/chi-siamo' },
  { name: 'Costruzioni', href: '/costruzioni' },
  { name: 'Magazzino Materiali', href: '/magazzino' },
  { name: 'Immobiliare', href: '/immobiliare' },
  { name: 'Partner', href: '/partner' },
  { name: 'Contatti', href: '/contatti' },
]

const services = [
  { name: 'Costruzioni civili', href: '/costruzioni' },
  { name: 'Ristrutturazioni', href: '/costruzioni' },
  { name: 'Centro ferro certificato', href: '/magazzino' },
  { name: 'Vendita materiali edili', href: '/magazzino' },
  { name: 'Immobili residenziali', href: '/immobiliare' },
  { name: 'Consulenza tecnica', href: '/contatti' },
]

export default function Footer() {
  const footerRef = useRef(null)
  const brandRef = useRef(null)
  const linksRef = useRef(null)
  const servicesRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Brand column
      gsap.fromTo(brandRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
          },
        }
      )

      // Links - staggered
      const linkItems = linksRef.current?.querySelectorAll('li')
      gsap.fromTo(linkItems,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
          },
          delay: 0.2,
        }
      )

      // Services - staggered
      const serviceItems = servicesRef.current?.querySelectorAll('li')
      gsap.fromTo(serviceItems,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
          },
          delay: 0.4,
        }
      )

      // Contact
      gsap.fromTo(contactRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
          },
          delay: 0.5,
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="bg-[#0a0a0a] relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* Main Footer */}
      <div className="container-fluid py-20 lg:py-28">
        {/* Top row - Brand + CTA */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-16 lg:mb-24">
          <div ref={brandRef} className="lg:col-span-5">
            <Link to="/" className="inline-block mb-8">
              <img
                src={logoTaddei}
                alt="Taddei Fratelli"
                title="Taddei Fratelli - Edilizia, Materiali e Immobiliare"
                width={168}
                height={56}
                loading="lazy"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-sm">
              Dal materiale alla costruzione.<br />
              <span className="text-white font-medium">Senza compromessi.</span>
            </p>
            <div className="inline-flex items-center gap-3">
              <span className="w-12 h-px bg-blue-500" />
              <span className="text-neutral-500 text-sm">In Alta Valle Camonica dal 1983</span>
            </div>
          </div>

          {/* CTA Box */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 lg:p-10 relative overflow-hidden group rounded-lg">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_70%)]" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">Hai un progetto in mente?</h3>
                <p className="text-white/80 mb-6">Parliamone. Consulenza gratuita e senza impegno.</p>

                <Link
                  to="/contatti"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-neutral-100 transition-colors rounded"
                >
                  Contattaci
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row - Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Quick Links */}
          <div ref={linksRef} className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-6">
              Link Rapidi
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-neutral-400 hover:text-blue-500 transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-blue-500 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div ref={servicesRef} className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-6">
              Servizi
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-neutral-400 hover:text-blue-500 transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-blue-500 group-hover:w-4 transition-all duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div ref={contactRef} className="lg:col-span-5 lg:col-start-8">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-6">
              Contatti
            </h4>
            <div className="space-y-5">
              <a
                href="https://maps.google.com/?q=Via+Artigiani+44+Corteno+Golgi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-neutral-400 hover:text-blue-500 transition-colors group"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-500" />
                <span className="text-sm leading-relaxed">
                  Via Artigiani, 44<br />
                  25040 Corteno Golgi (BS)
                </span>
              </a>

              <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
                <a
                  href="tel:036474313"
                  className="flex items-center gap-3 text-neutral-400 hover:text-blue-500 transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-blue-500" />
                  0364 74313
                </a>

                <a
                  href="mailto:costruzioni@societataddei.it"
                  className="flex items-center gap-3 text-neutral-400 hover:text-blue-500 transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-blue-500" />
                  costruzioni@societataddei.it
                </a>
              </div>

              <div className="flex items-start gap-4 text-neutral-500 text-sm">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-500/60" />
                <span>
                  Lun - Ven: 8:00 - 12:00 / 14:00 - 18:00<br />
                  Sab: 8:00 - 12:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800/50">
        <div className="container-fluid py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-neutral-600 text-sm">
                © {new Date().getFullYear()} Società Taddei
              </span>
              <span className="w-px h-4 bg-neutral-800 hidden md:block" />
              <span className="text-neutral-700 text-xs hidden md:block">
                Tutti i diritti riservati
              </span>
              <span className="w-px h-4 bg-neutral-800 hidden md:block" />
              <div className="flex items-center gap-4">
                <Link
                  to="/privacy-policy"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-neutral-600 hover:text-blue-500 text-xs transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/cookie-policy"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-neutral-600 hover:text-blue-500 text-xs transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-neutral-500 hover:text-blue-500 transition-colors text-sm"
            >
              <span className="hidden sm:inline">Torna su</span>
              <div className="w-10 h-10 border border-neutral-800 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500 transition-all">
                <ArrowUp className="w-4 h-4 group-hover:text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-1/3 right-[5%] w-px h-24 bg-gradient-to-b from-blue-500/30 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-[3%] w-16 h-16 border border-neutral-800/50 pointer-events-none" />
    </footer>
  )
}
