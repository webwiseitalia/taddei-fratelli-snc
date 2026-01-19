import { useState, useEffect, useRef } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  Building,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

import imgMagazzino from '../assets/colorificio-ingresso-taddei.webp'

gsap.registerPlugin(ScrollTrigger)

const contacts = [
  {
    icon: MapPin,
    title: 'Indirizzo',
    content: 'Via Artigiani, 44\n25040 Corteno Golgi (BS)',
    link: 'https://maps.google.com/?q=Via+Artigiani+44+Corteno+Golgi+BS',
    linkText: 'Apri in Maps',
  },
  {
    icon: Phone,
    title: 'Telefono',
    content: '0364 74313',
    link: 'tel:036474313',
    linkText: 'Chiama ora',
  },
  {
    icon: Clock,
    title: 'Orari',
    content: 'Lun - Ven: 8:00 - 12:00 / 14:00 - 18:00\nSab: 8:00 - 12:00',
  },
]

const emails = [
  {
    department: 'Costruzioni',
    email: 'costruzioni@societataddei.it',
    contact: 'Taddei Antonio',
  },
  {
    department: 'Magazzino / Ferro',
    email: 'magazzino@societataddei.it',
    contact: 'Taddei Gianluca',
  },
  {
    department: 'Consulenze Tecniche',
    email: 'immobiliare@societataddei.it',
    contact: 'Geom. Taddei Nicola',
  },
]

const departments = [
  { value: '', label: 'Seleziona reparto' },
  { value: 'costruzioni', label: 'Costruzioni' },
  { value: 'magazzino', label: 'Magazzino Materiali' },
  { value: 'ferro', label: 'Centro Ferro' },
  { value: 'immobiliare', label: 'Immobiliare' },
  { value: 'altro', label: 'Altro' },
]

const faqs = [
  {
    q: 'Quanto tempo ci vuole per un preventivo?',
    a: "Per preventivi di materiali, rispondiamo generalmente in giornata. Per preventivi di costruzioni, servono 3-5 giorni lavorativi per un'analisi accurata.",
  },
  {
    q: 'Effettuate consegne in tutta la Valle Camonica?',
    a: "Sì, consegniamo in tutta l'Alta Valle Camonica e zone limitrofe. Per destinazioni più lontane, contattateci per verificare disponibilità e costi.",
  },
  {
    q: 'Posso visitare il magazzino senza appuntamento?',
    a: 'Certamente! Il magazzino è aperto al pubblico negli orari indicati. Per consulenze tecniche specifiche, è preferibile prendere appuntamento.',
  },
  {
    q: 'Offrite consulenze gratuite?',
    a: 'Sì, la consulenza tecnica è gratuita e senza impegno. Siamo a disposizione per aiutarti a scegliere i materiali giusti per il tuo progetto.',
  },
]

export default function Contatti() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const heroRef = useRef(null)
  const cardsRef = useRef(null)
  const directRef = useRef(null)
  const formRef = useRef(null)
  const mapRef = useRef(null)
  const faqRef = useRef(null)

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
      message: 'Messaggio inviato con successo! Ti ricontatteremo presto.',
    })
    setFormData({ name: '', email: '', phone: '', department: '', message: '' })
    setIsSubmitting(false)

    setTimeout(() => setStatus({ type: '', message: '' }), 5000)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title
      const heroTitle = heroRef.current?.querySelector('h1')
      if (heroTitle) {
        const split = new SplitType(heroTitle, { types: 'words' })
        gsap.fromTo(split.words,
          { y: 80, opacity: 0, rotateX: -45 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            ease: 'power4.out',
            stagger: 0.05,
            delay: 0.2,
          }
        )
      }

      // Contact cards - staggered cascade
      const cards = cardsRef.current?.querySelectorAll('.contact-card')
      cards?.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 60, opacity: 0, x: i % 2 === 0 ? -30 : 30 },
          {
            y: 0,
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        )
      })

      // Direct contacts
      const directItems = directRef.current?.querySelectorAll('.direct-item')
      gsap.fromTo(directItems,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: directRef.current,
            start: 'top 75%',
          },
        }
      )

      // Form
      gsap.fromTo(formRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 75%',
          },
        }
      )

      // Map section
      gsap.fromTo(mapRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 75%',
          },
        }
      )

      // FAQ items - scattered
      const faqItems = faqRef.current?.querySelectorAll('.faq-item')
      faqItems?.forEach((item, i) => {
        const direction = i % 2 === 0 ? -1 : 1
        gsap.fromTo(item,
          { x: 50 * direction, y: 30, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.9,
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

  return (
    <div className="bg-[#0a0a0a] overflow-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-end pb-20 lg:pb-28 pt-32">
        <div className="absolute inset-0">
          <img
            src={imgMagazzino}
            alt="Sede Taddei - Corteno Golgi"
            title="Contattaci - Società Taddei"
            width={1920}
            height={1080}
            loading="eager"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/40" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/3 right-[12%] w-px h-32 bg-gradient-to-b from-blue-500 to-transparent" />
        <div className="absolute top-1/3 right-[12%] w-16 h-px bg-blue-500" />
        <div className="absolute bottom-1/4 left-[5%] w-24 h-24 border border-blue-500/20" />

        <div className="container-fluid relative z-10">
          <div className="max-w-4xl ml-[3%]">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-16 h-px bg-blue-500" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-blue-500 font-medium">Contatti</span>
            </div>

            <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[0.9] tracking-tight text-white mb-6">
              <span className="block">Parliamo</span>
              <span className="block ml-[8%]">del tuo progetto.</span>
            </h1>

            <p className="text-lg text-neutral-400 max-w-lg ml-[5%]">
              Preventivo, consulenza o informazioni. <span className="text-white">Siamo qui per te.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section ref={cardsRef} className="py-24 lg:py-32">
        <div className="container-fluid">
          <div className="grid md:grid-cols-3 gap-6">
            {contacts.map((contact, i) => (
              <div
                key={contact.title}
                className="contact-card group relative bg-[#0c0c0c] p-8 lg:p-10 overflow-hidden hover:bg-[#0f0f0f] transition-all duration-500"
                style={{ marginTop: `${i * 2}rem` }}
              >
                {/* Accent */}
                <div className="absolute top-0 left-0 w-1/4 h-[3px] bg-blue-500 group-hover:w-full transition-all duration-700" />

                <div className="w-14 h-14 bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <contact.icon className="w-6 h-6 text-blue-500" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{contact.title}</h3>
                <p className="text-neutral-400 whitespace-pre-line mb-6 leading-relaxed">{contact.content}</p>

                {contact.link && (
                  <a
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : undefined}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium transition-colors text-sm uppercase tracking-wider"
                  >
                    {contact.linkText}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-neutral-900 group-hover:bg-blue-500/5 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECT CONTACTS */}
      <section ref={directRef} className="py-24 lg:py-32 bg-[#0c0c0c]">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 block mb-4">Per reparto</span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1]">
                Contatti<br />
                <span className="text-blue-500">diretti</span>
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-4">
                {emails.map((item, i) => (
                  <div
                    key={item.email}
                    className="direct-item group relative bg-[#0a0a0a] p-6 lg:p-8 hover:bg-[#0f0f0f] transition-all duration-500"
                    style={{ marginLeft: `${i * 1.5}rem` }}
                  >
                    <div className="absolute left-0 top-0 w-[3px] h-full bg-blue-500/30 group-hover:bg-blue-500 transition-colors" />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider">{item.department}</span>
                        <div className="text-white font-medium mt-1">{item.contact}</div>
                      </div>
                      <a
                        href={`mailto:${item.email}`}
                        className="text-neutral-400 hover:text-blue-500 transition-colors text-sm sm:text-base"
                      >
                        {item.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + MAP - Asymmetric */}
      <section className="py-24 lg:py-40">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Form */}
            <div ref={formRef} className="lg:col-span-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 block mb-4">Modulo contatto</span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1] mb-4">
                Scrivici un<br />
                <span className="text-blue-500">messaggio</span>
              </h2>
              <p className="text-neutral-500 mb-10">Risposta garantita entro 24 ore lavorative.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">
                    Nome e Cognome *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-600" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#0c0c0c] border border-neutral-800 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-neutral-600"
                      placeholder="Mario Rossi"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-600" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#0c0c0c] border border-neutral-800 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-neutral-600"
                        placeholder="mario@esempio.it"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">
                      Telefono
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-600" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#0c0c0c] border border-neutral-800 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-neutral-600"
                        placeholder="333 1234567"
                      />
                    </div>
                  </div>
                </div>

                {/* Department */}
                <div>
                  <label htmlFor="department" className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">
                    Reparto di interesse
                  </label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-600" />
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full bg-[#0c0c0c] border border-neutral-800 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                    >
                      {departments.map((dept) => (
                        <option key={dept.value} value={dept.value}>
                          {dept.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">
                    Messaggio *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-neutral-600" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#0c0c0c] border border-neutral-800 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder:text-neutral-600"
                      placeholder="Descrivi il tuo progetto o la tua richiesta..."
                    />
                  </div>
                </div>

                {/* Status Message */}
                {status.message && (
                  <div className={`flex items-center gap-3 p-4 ${
                    status.type === 'success'
                      ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                      : 'bg-red-500/10 border border-red-500/30 text-red-400'
                  }`}>
                    {status.type === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    {status.message}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 font-semibold text-sm uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    'Invio in corso...'
                  ) : (
                    <>
                      Invia messaggio
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-neutral-600 text-xs text-center">
                  * Campi obbligatori. Dati trattati secondo normativa privacy.
                </p>
              </form>
            </div>

            {/* Map */}
            <div ref={mapRef} className="lg:col-span-5 lg:col-start-8 mt-8 lg:mt-16">
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 block mb-4">Dove siamo</span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1] mb-4">
                Vieni a<br />
                <span className="text-blue-500">trovarci</span>
              </h2>
              <p className="text-neutral-500 mb-8">Corteno Golgi, cuore dell'Alta Valle Camonica.</p>

              {/* Map */}
              <div className="aspect-[4/3] bg-neutral-900 relative overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.5!2d10.2456!3d46.1642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDA5JzUxLjEiTiAxMMKwMTQnNDQuMiJF!5e0!3m2!1sit!2sit!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Società Taddei"
                  className="grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-blue-500/10 pointer-events-none" />
              </div>

              {/* Address card */}
              <div className="relative bg-blue-600 p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-2">Società Taddei</h4>
                    <p className="text-white/80 mb-4">
                      Via Artigiani, 44<br />
                      25040 Corteno Golgi (BS)
                    </p>
                    <a
                      href="https://maps.google.com/?q=Via+Artigiani+44+Corteno+Golgi+BS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white font-medium hover:underline text-sm"
                    >
                      Indicazioni stradali
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Scattered */}
      <section ref={faqRef} className="py-24 lg:py-40 bg-[#0c0c0c]">
        <div className="container-fluid">
          <div className="max-w-4xl mb-16">
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 block mb-4">FAQ</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1]">
              Domande<br />
              <span className="text-blue-500">frequenti</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="faq-item relative bg-[#0a0a0a] p-8 group hover:bg-[#0f0f0f] transition-colors duration-500"
                style={{
                  marginLeft: i % 2 === 1 ? '2rem' : 0,
                  marginTop: i > 1 ? '-1rem' : 0,
                }}
              >
                {/* Number */}
                <span className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 flex items-center justify-center text-white text-sm font-bold">
                  {i + 1}
                </span>

                {/* Accent line */}
                <div className="absolute top-0 right-0 w-1/3 h-[2px] bg-blue-500/30 group-hover:bg-blue-500 transition-colors duration-500" />

                <h4 className="font-bold text-white mb-3 pr-8">{faq.q}</h4>
                <p className="text-neutral-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
