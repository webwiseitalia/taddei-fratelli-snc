import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Button({
  children,
  href,
  to,
  variant = 'primary',
  size = 'default',
  icon = true,
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 group'

  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white hover:translate-x-1',
    secondary: 'border-2 border-white hover:bg-white hover:text-dark-950 text-white',
    dark: 'bg-dark-800 hover:bg-dark-700 text-white',
    ghost: 'text-primary-500 hover:text-primary-400 bg-transparent',
  }

  const sizes = {
    small: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 md:px-8 md:py-4 text-base',
    large: 'px-8 py-4 md:px-10 md:py-5 text-lg',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {children}
      {icon && <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
