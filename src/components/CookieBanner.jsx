import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Cookie } from 'lucide-react'
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
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]" />
      )}

      <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 lg:p-6">
      <div className="bg-[#111111] border border-neutral-800 p-4 lg:p-6 max-w-6xl mx-auto shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
          {/* Icon + Content */}
          <div className="flex items-start gap-4 flex-1">
            <div className="w-10 h-10 bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <p className="text-neutral-300 text-sm lg:text-base">
                Questo sito utilizza <strong className="text-white">solo cookie tecnici</strong> essenziali per il corretto funzionamento. Non utilizziamo cookie di profilazione.{' '}
                <Link to="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</Link>
                {' · '}
                <Link to="/cookie-policy" className="text-blue-500 hover:underline">Cookie Policy</Link>
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handleReject}
              className="px-5 py-2.5 border border-neutral-700 text-neutral-300 font-semibold text-xs uppercase tracking-wider hover:border-neutral-500 hover:text-white transition-colors"
            >
              Rifiuta
            </button>
            <button
              onClick={handleAccept}
              className="px-5 py-2.5 bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-700 transition-colors"
            >
              Accetta
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
