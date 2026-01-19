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
import { PageHero } from '../components/Hero'
import Section, { SectionHeader } from '../components/Section'

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
    <>
      <PageHero
        tag="Contatti"
        title="Parliamo del tuo progetto"
        subtitle="Che tu abbia bisogno di un preventivo, una consulenza o semplicemente di informazioni, siamo qui per te."
      />

      {/* Contact Info */}
      <Section>
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-dark card-hover text-center"
              >
                <div className="w-14 h-14 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">
                  {contact.title}
                </h3>
                <p className="text-dark-400 whitespace-pre-line mb-4">{contact.content}</p>
                {contact.link && (
                  <a
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : undefined}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-primary-500 hover:text-primary-400 font-medium transition-colors"
                  >
                    {contact.linkText} →
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Direct Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-dark"
          >
            <h3 className="heading-sm text-white mb-6">Contatti diretti per reparto</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {emails.map((item) => (
                <div key={item.email} className="p-4 bg-dark-800/50 border border-dark-700">
                  <div className="text-primary-500 font-semibold mb-1">{item.department}</div>
                  <div className="text-white mb-2">{item.contact}</div>
                  <a
                    href={`mailto:${item.email}`}
                    className="text-dark-400 hover:text-primary-500 transition-colors text-sm break-all"
                  >
                    {item.email}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Form + Map */}
      <Section dark>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                tag="Modulo contatto"
                title="Scrivici un messaggio"
                description="Compila il form e ti ricontatteremo entro 24 ore lavorative."
                centered={false}
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
                    Nome e Cognome *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-dark-800 border border-dark-700 text-white pl-12 pr-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="Mario Rossi"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-dark-800 border border-dark-700 text-white pl-12 pr-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="mario@esempio.it"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark-300 mb-2">
                      Telefono
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-dark-800 border border-dark-700 text-white pl-12 pr-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="333 1234567"
                      />
                    </div>
                  </div>
                </div>

                {/* Department */}
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-dark-300 mb-2">
                    Reparto di interesse
                  </label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full bg-dark-800 border border-dark-700 text-white pl-12 pr-4 py-3 focus:outline-none focus:border-primary-500 transition-colors appearance-none cursor-pointer"
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
                  <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
                    Messaggio *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-dark-500" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-dark-800 border border-dark-700 text-white pl-12 pr-4 py-3 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                      placeholder="Descrivi il tuo progetto o la tua richiesta..."
                    />
                  </div>
                </div>

                {/* Status Message */}
                {status.message && (
                  <div
                    className={`flex items-center gap-3 p-4 ${
                      status.type === 'success'
                        ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                        : 'bg-red-500/10 border border-red-500/30 text-red-400'
                    }`}
                  >
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
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Invio in corso...'
                  ) : (
                    <>
                      Invia messaggio
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>

                <p className="text-dark-500 text-sm text-center">
                  * Campi obbligatori. I tuoi dati saranno trattati secondo la normativa sulla privacy.
                </p>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SectionHeader
                tag="Dove siamo"
                title="Vieni a trovarci"
                description="Il nostro magazzino e uffici si trovano a Corteno Golgi, nel cuore dell'Alta Valle Camonica."
                centered={false}
              />

              {/* Map placeholder */}
              <div className="aspect-square bg-dark-800 border border-dark-700 relative overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.5!2d10.2456!3d46.1642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDA5JzUxLjEiTiAxMMKwMTQnNDQuMiJF!5e0!3m2!1sit!2sit!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Società Taddei"
                  className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>

              {/* Address card */}
              <div className="card-dark">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-white mb-1">Società Taddei</h4>
                    <p className="text-dark-400 mb-3">
                      Via Artigiani, 44<br />
                      25040 Corteno Golgi (BS)
                    </p>
                    <a
                      href="https://maps.google.com/?q=Via+Artigiani+44+Corteno+Golgi+BS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-400 font-medium transition-colors"
                    >
                      Ottieni indicazioni stradali →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="container-custom">
          <SectionHeader
            tag="Domande frequenti"
            title="Risposte rapide"
            description="Alcune delle domande più comuni che ci vengono poste."
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
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
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-dark"
              >
                <h4 className="font-heading font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-dark-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
