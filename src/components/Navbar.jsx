import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Chi Siamo', href: '/chi-siamo' },
  { name: 'Costruzioni', href: '/costruzioni' },
  { name: 'Magazzino', href: '/magazzino' },
  { name: 'Immobiliare', href: '/immobiliare' },
  { name: 'Partner', href: '/partner' },
  { name: 'Contatti', href: '/contatti' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-neutral-950/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 flex items-center justify-center">
              <span className="font-bold text-white text-xl">T</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-white text-lg tracking-tight">
                SOCIETÀ TADDEI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-orange-500'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:036474313"
              className="hidden md:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">0364 74313</span>
            </a>
            <Link
              to="/contatti"
              className="hidden md:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 transition-colors"
            >
              Preventivo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-orange-500 transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-neutral-950 border-t border-neutral-800"
          >
            <div className="px-6 py-6 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-lg font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-orange-500'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-neutral-800 mt-4">
                <a
                  href="tel:036474313"
                  className="flex items-center gap-2 px-4 py-3 text-orange-500"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">0364 74313</span>
                </a>
                <Link
                  to="/contatti"
                  className="block mx-4 bg-orange-500 hover:bg-orange-600 text-white text-center font-semibold py-3 transition-colors"
                >
                  Richiedi Preventivo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
