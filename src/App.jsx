import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Costruzioni from './pages/Costruzioni'
import Magazzino from './pages/Magazzino'
import Immobiliare from './pages/Immobiliare'
import Partner from './pages/Partner'
import Contatti from './pages/Contatti'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <>
      <CookieBanner />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/costruzioni" element={<Costruzioni />} />
          <Route path="/magazzino" element={<Magazzino />} />
          <Route path="/immobiliare" element={<Immobiliare />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default App
