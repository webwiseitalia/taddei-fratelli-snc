import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react'

const quickLinks = [
  { name: 'Chi Siamo', href: '/chi-siamo' },
  { name: 'Costruzioni', href: '/costruzioni' },
  { name: 'Magazzino Materiali', href: '/magazzino' },
  { name: 'Immobiliare', href: '/immobiliare' },
  { name: 'Partner', href: '/partner' },
  { name: 'Contatti', href: '/contatti' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-500 flex items-center justify-center">
                <span className="font-bold text-white text-xl">T</span>
              </div>
              <span className="font-bold text-white text-lg">
                SOCIETÀ TADDEI
              </span>
            </Link>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Dal materiale alla costruzione. Senza compromessi.
              In Alta Valle Camonica dal 1983.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">
              Link Rapidi
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-neutral-400 hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">
              Servizi
            </h4>
            <ul className="space-y-3 text-neutral-400">
              <li>Costruzioni civili</li>
              <li>Ristrutturazioni</li>
              <li>Centro ferro certificato</li>
              <li>Vendita materiali edili</li>
              <li>Immobili residenziali</li>
              <li>Consulenza tecnica</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">
              Contatti
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Via+Artigiani+44+Corteno+Golgi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-neutral-400 hover:text-orange-500 transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-orange-500" />
                  <span>Via Artigiani, 44<br />25040 Corteno Golgi (BS)</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:036474313"
                  className="flex items-center gap-3 text-neutral-400 hover:text-orange-500 transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-orange-500" />
                  0364 74313
                </a>
              </li>
              <li>
                <a
                  href="mailto:costruzioni@societataddei.it"
                  className="flex items-center gap-3 text-neutral-400 hover:text-orange-500 transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-orange-500" />
                  costruzioni@societataddei.it
                </a>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-orange-500" />
                <span>Lun - Ven: 8:00 - 12:00 / 14:00 - 18:00<br />Sab: 8:00 - 12:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-neutral-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Società Taddei. Tutti i diritti riservati.
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-neutral-500 hover:text-orange-500 transition-colors group"
            >
              <span className="text-sm">Torna su</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
