import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Cookie, Shield } from 'lucide-react'
import { COOKIE_CONSENT_KEY } from '../constants/siteData'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const location = useLocation()

  // Pagine dove NON mostrare il blur (policy pages)
  const policyPages = ['/privacy-policy', '/cookie-policy']
  const isOnPolicyPage = policyPages.includes(location.pathname)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setShowBanner(false)
  }

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Blur overlay - only when not on policy pages */}
      {!isOnPolicyPage && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9998]" />
      )}

      {/* Cookie Banner */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div className="bg-[#111111] border border-neutral-800 rounded-2xl p-6 lg:p-8 max-w-lg w-full shadow-2xl">
          {/* Icon */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
              <Cookie className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Utilizzo dei Cookie</h2>
              <p className="text-neutral-500 text-sm">Informativa sulla privacy</p>
            </div>
          </div>

          {/* Content */}
          <div className="mb-6">
            <p className="text-neutral-400 mb-4">
              Questo sito utilizza <strong className="text-white">solo cookie tecnici</strong> essenziali per il corretto funzionamento. Non utilizziamo cookie di profilazione o tracciamento.
            </p>

            <div className="flex items-start gap-3 bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-4">
              <Shield className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-green-400 text-sm">
                La tua privacy è protetta. Non tracciamo le tue attività di navigazione.
              </p>
            </div>

            <p className="text-neutral-500 text-sm">
              Per maggiori informazioni consulta la nostra{' '}
              <Link to="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</Link>
              {' '}e la{' '}
              <Link to="/cookie-policy" className="text-blue-500 hover:underline">Cookie Policy</Link>.
            </p>
          </div>

          {/* Buttons - Same size and style */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleReject}
              className="flex-1 px-6 py-3 border border-neutral-700 text-neutral-300 rounded-lg font-semibold text-sm uppercase tracking-wider hover:border-neutral-500 hover:text-white transition-colors"
            >
              Rifiuta
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 px-6 py-3 border border-blue-600 bg-blue-600 text-white rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-blue-700 hover:border-blue-700 transition-colors"
            >
              Accetta
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
