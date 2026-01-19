import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export function ServiceCard({ icon: Icon, title, description, href, index = 0 }) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-dark card-hover h-full group"
    >
      <div className="w-14 h-14 bg-primary-500/10 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
        <Icon className="w-7 h-7 text-primary-500" />
      </div>
      <h3 className="heading-sm text-white mb-3">{title}</h3>
      <p className="text-dark-400 leading-relaxed mb-4">{description}</p>
      {href && (
        <span className="inline-flex items-center text-primary-500 font-medium group-hover:translate-x-2 transition-transform">
          Scopri di più
          <ChevronRight className="w-4 h-4 ml-1" />
        </span>
      )}
    </motion.div>
  )

  if (href) {
    return <Link to={href} className="block h-full">{content}</Link>
  }

  return content
}

export function PillarCard({ icon: Icon, title, description, features, href, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative card-dark h-full border-t-2 border-t-primary-500/50 group-hover:border-t-primary-500 transition-colors">
        <div className="w-16 h-16 bg-primary-500 flex items-center justify-center mb-6 -mt-8 shadow-lg shadow-primary-500/20">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="heading-md text-white mb-4">{title}</h3>
        <p className="text-dark-400 leading-relaxed mb-6">{description}</p>
        {features && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start text-dark-300">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        {href && (
          <Link
            to={href}
            className="inline-flex items-center text-primary-500 font-semibold group-hover:translate-x-2 transition-transform"
          >
            Scopri di più
            <ChevronRight className="w-5 h-5 ml-1" />
          </Link>
        )}
      </div>
    </motion.div>
  )
}

export function StatCard({ value, label, suffix = '', index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-6"
    >
      <div className="heading-xl text-gradient mb-2">
        {value}
        <span className="text-primary-500">{suffix}</span>
      </div>
      <div className="text-dark-400 font-medium uppercase tracking-wider text-sm">
        {label}
      </div>
    </motion.div>
  )
}
