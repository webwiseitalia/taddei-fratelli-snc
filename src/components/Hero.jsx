import { motion } from 'framer-motion'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero({
  tag,
  title,
  titleHighlight,
  subtitle,
  primaryCta,
  secondaryCta,
  showScroll = true,
  overlay = true,
  minHeight = 'min-h-screen',
}) {
  return (
    <section className={`relative ${minHeight} flex items-center`}>
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/50" />
        {/* Accent glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative container-custom py-32 md:py-40">
        <div className="max-w-4xl">
          {tag && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-500 text-sm font-semibold tracking-wider uppercase mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse" />
                {tag}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-xl text-white mb-6"
          >
            {title}
            {titleHighlight && (
              <>
                <br />
                <span className="text-gradient">{titleHighlight}</span>
              </>
            )}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-dark-300 mb-10 max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {primaryCta && (
              <Link to={primaryCta.href} className="btn-primary group">
                {primaryCta.text}
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
            {secondaryCta && (
              <Link to={secondaryCta.href} className="btn-secondary group">
                {secondaryCta.text}
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {showScroll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-dark-500"
          >
            <span className="text-xs uppercase tracking-widest mb-2">Scopri</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export function PageHero({ title, subtitle, tag }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      </div>

      <div className="relative container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {tag && (
            <span className="inline-block px-4 py-1 bg-primary-500/10 text-primary-500 text-sm font-semibold tracking-wider uppercase mb-4">
              {tag}
            </span>
          )}
          <h1 className="heading-xl text-white mb-4">{title}</h1>
          {subtitle && (
            <p className="text-xl text-dark-400 leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
