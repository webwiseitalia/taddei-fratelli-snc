import { useState } from 'react'
import { motion } from 'framer-motion'
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
} from 'lucide-react'

import imgMagazzino from '../assets/magazzino-esterno.webp'

const contacts = [
  {
    icon: MapPin,
    title: 'Indirizzo',
    content: 'Via Artigiani, 44\n25040 Corteno Golgi (BS)',
    link: 'https://maps.google.com/?q=Via+Artigiani+44+Corteno+Golgi+BS',
    linkText: 'Apri in Google Maps',
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setStatus({
      type: 'success',
      message: 'Messaggio inviato con successo! Ti ricontatteremo presto.',
    })
    setFormData({ name: '', email: '', phone: '', department: '', message: '' })
    setIsSubmitting(false)

    // Clear status after 5 seconds
    setTimeout(() => setStatus({ type: '', message: '' }), 5000)
  }

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
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Contatti</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Parliamo del tuo progetto.
            </h1>
            <p className="text-lg text-neutral-300 max-w-2xl">
              Che tu abbia bisogno di un preventivo, una consulenza o semplicemente di informazioni, siamo qui per te.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contacts.map((contact, i) => (
              <motion.div key={contact.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-neutral-50 p-8 text-center border-l-4 border-brand-500">
                <div className="w-14 h-14 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-7 h-7 text-brand-500" />
                </div>
                <h3 className="font-bold text-neutral-900 text-lg mb-2">{contact.title}</h3>
                <p className="text-neutral-600 whitespace-pre-line mb-4">{contact.content}</p>
                {contact.link && (
                  <a
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : undefined}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-brand-500 hover:text-brand-600 font-medium transition-colors"
                  >
                    {contact.linkText} →
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Direct Contacts */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-neutral-50 p-8 border-l-4 border-brand-500">
            <h3 className="text-xl font-bold text-neutral-900 mb-6">Contatti diretti per reparto</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {emails.map((item) => (
                <div key={item.email} className="p-4 bg-white shadow-sm">
                  <div className="text-brand-500 font-semibold mb-1">{item.department}</div>
                  <div className="text-neutral-900 mb-2">{item.contact}</div>
                  <a href={`mailto:${item.email}`} className="text-neutral-600 hover:text-brand-500 transition-colors text-sm break-all">
                    {item.email}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Modulo contatto</span>
              <h2 className="text-3xl font-bold text-neutral-900 mt-3 mb-4">Scrivici un messaggio</h2>
              <p className="text-neutral-600 mb-8">Compila il form e ti ricontatteremo entro 24 ore lavorative.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Nome e Cognome *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-neutral-300 text-neutral-900 pl-12 pr-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                      placeholder="Mario Rossi"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white border border-neutral-300 text-neutral-900 pl-12 pr-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                        placeholder="mario@esempio.it"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Telefono
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white border border-neutral-300 text-neutral-900 pl-12 pr-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                        placeholder="333 1234567"
                      />
                    </div>
                  </div>
                </div>

                {/* Department */}
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-neutral-700 mb-2">
                    Reparto di interesse
                  </label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full bg-white border border-neutral-300 text-neutral-900 pl-12 pr-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors appearance-none cursor-pointer"
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
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Messaggio *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-neutral-400" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white border border-neutral-300 text-neutral-900 pl-12 pr-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none"
                      placeholder="Descrivi il tuo progetto o la tua richiesta..."
                    />
                  </div>
                </div>

                {/* Status Message */}
                {status.message && (
                  <div className={`flex items-center gap-3 p-4 ${
                    status.type === 'success'
                      ? 'bg-green-50 border border-green-200 text-green-700'
                      : 'bg-red-50 border border-red-200 text-red-700'
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
                  className="w-full bg-brand-500 hover:bg-brand-600 text-white px-6 py-4 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Invio in corso...'
                  ) : (
                    <>
                      Invia messaggio
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-neutral-500 text-sm text-center">
                  * Campi obbligatori. I tuoi dati saranno trattati secondo la normativa sulla privacy.
                </p>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Dove siamo</span>
              <h2 className="text-3xl font-bold text-neutral-900 mt-3 mb-4">Vieni a trovarci</h2>
              <p className="text-neutral-600 mb-8">Il nostro magazzino e uffici si trovano a Corteno Golgi, nel cuore dell'Alta Valle Camonica.</p>

              {/* Map */}
              <div className="aspect-square bg-neutral-200 relative overflow-hidden mb-6 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.5!2d10.2456!3d46.1642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDA5JzUxLjEiTiAxMMKwMTQnNDQuMiJF!5e0!3m2!1sit!2sit!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Società Taddei"
                />
              </div>

              {/* Address card */}
              <div className="bg-white p-6 shadow-sm border-l-4 border-brand-500">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Società Taddei</h4>
                    <p className="text-neutral-600 mb-3">
                      Via Artigiani, 44<br />
                      25040 Corteno Golgi (BS)
                    </p>
                    <a
                      href="https://maps.google.com/?q=Via+Artigiani+44+Corteno+Golgi+BS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-500 hover:text-brand-600 font-medium transition-colors"
                    >
                      Ottieni indicazioni stradali →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-wider uppercase">Domande frequenti</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4">Risposte rapide</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">Alcune delle domande più comuni che ci vengono poste.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-neutral-50 p-6 border-l-4 border-brand-500">
                <h4 className="font-bold text-neutral-900 mb-2">{faq.q}</h4>
                <p className="text-neutral-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
