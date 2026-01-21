import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import logoTaddei from '../assets/logo-taddei.webp'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Chi Siamo', href: '/chi-siamo' },
  { name: 'Costruzioni', href: '/costruzioni' },
  { name: 'Magazzino', href: '/magazzino' },
  { name: 'Immobiliare', href: '/immobiliare' },
  { name: 'Partner', href: '/partner' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const linksRef = useRef([])
  const ctaRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(logoRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
      )

      gsap.fromTo(linksRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: { each: 0.08, from: 'start' },
          delay: 0.4
        }
      )

      gsap.fromTo(ctaRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 0.8 }
      )
    }, navRef)

    return () => ctx.revert()
  }, [])

  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: 'circle(0% at calc(100% - 40px) 40px)',
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    open: {
      opacity: 1,
      clipPath: 'circle(150% at calc(100% - 40px) 40px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }
    }
  }

  const linkVariants = {
    closed: { opacity: 0, x: 50 },
    open: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    })
  }

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-fluid">
        <div className="flex items-center justify-between">
          {/* Logo - Offset left */}
          <Link
            ref={logoRef}
            to="/"
            className="relative group flex items-center gap-3"
          >
            <img
              src={logoTaddei}
              alt="Taddei"
              title="Taddei Fratelli - Edilizia dal 1983"
              width={120}
              height={40}
              loading="eager"
              className="h-10 w-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 block leading-none">
                Dal 1983
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Asymmetric spacing */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1">
              {navigation.map((item, i) => (
                <Link
                  key={item.name}
                  ref={el => linksRef.current[i] = el}
                  to={item.href}
                  className={`relative px-4 py-2 text-[13px] font-medium uppercase tracking-[0.08em] transition-all duration-300 group ${
                    location.pathname === item.href
                      ? 'text-blue-500'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>

                  {/* Active indicator - Broken line */}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-1/2 h-[2px] bg-blue-500"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  {/* Hover effect */}
                  <span className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>

            {/* CTA - Offset right with accent */}
            <div ref={ctaRef} className="ml-8 flex items-center gap-4">
              <a
                href="tel:036474313"
                className="text-[12px] text-neutral-500 hover:text-white transition-colors tracking-wider"
              >
                0364 74313
              </a>

              <Link
                to="/contatti"
                className="group relative overflow-hidden bg-blue-600 text-white text-[12px] font-semibold uppercase tracking-[0.1em] px-6 py-3 transition-all duration-500 hover:bg-blue-700"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contatti
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>

                {/* Sweep effect */}
                <span className="absolute inset-0 bg-blue-800 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-[110] w-12 h-12 flex items-center justify-center"
            aria-label="Menu"
          >
            <div className="relative w-6 h-4">
              <span className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-300 ease-out ${
                isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
              }`} />
              <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0 translate-x-4' : 'opacity-100'
              }`} />
              <span className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-300 ease-out ${
                isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full screen takeover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[105] bg-[#0a0a0a] lg:hidden"
          >
            <div className="h-full flex flex-col justify-center px-8">
              {/* Decorative elements */}
              <div className="absolute top-20 left-8 w-20 h-[1px] bg-blue-500/30" />
              <div className="absolute bottom-20 right-8 w-32 h-[1px] bg-neutral-800" />
              <div className="absolute top-1/4 right-12 text-[200px] font-black text-neutral-900/30 leading-none select-none">
                T
              </div>

              <nav className="relative z-10 space-y-2">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.name}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      to={item.href}
                      className={`block py-3 text-4xl sm:text-5xl font-bold tracking-tight transition-colors duration-300 ${
                        location.pathname === item.href
                          ? 'text-blue-500'
                          : 'text-neutral-300 hover:text-white'
                      }`}
                      style={{
                        marginLeft: `${(i % 3) * 1.5}rem`,
                      }}
                    >
                      <span className="text-[10px] text-neutral-600 font-normal tracking-widest uppercase mr-4">
                        0{i + 1}
                      </span>
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  custom={navigation.length}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="pt-8"
                >
                  <Link
                    to="/contatti"
                    className="inline-flex items-center gap-3 bg-blue-600 text-white text-lg font-semibold px-8 py-4"
                    style={{ marginLeft: '1.5rem' }}
                  >
                    Richiedi Preventivo
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </nav>

              {/* Contact info */}
              <motion.div
                className="absolute bottom-12 left-8 right-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
                exit={{ opacity: 0 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 border-t border-neutral-800">
                  <a href="tel:036474313" className="text-2xl font-bold text-white">
                    0364 74313
                  </a>
                  <div className="text-[11px] uppercase tracking-widest text-neutral-500">
                    Alta Valle Camonica
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
