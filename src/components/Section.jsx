import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Section({
  children,
  className = '',
  dark = false,
  id,
  noPadding = false,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id={id}
      ref={ref}
      className={`
        ${noPadding ? '' : 'section-padding'}
        ${dark ? 'bg-dark-900' : 'bg-dark-950'}
        ${className}
      `}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export function SectionHeader({
  tag,
  title,
  description,
  centered = true,
  light = false,
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {tag && (
        <span className="inline-block px-4 py-1 bg-primary-500/10 text-primary-500 text-sm font-semibold tracking-wider uppercase mb-4">
          {tag}
        </span>
      )}
      <h2 className={`heading-lg ${light ? 'text-dark-900' : 'text-white'} mb-4`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg max-w-3xl ${centered ? 'mx-auto' : ''} ${light ? 'text-dark-600' : 'text-dark-400'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
