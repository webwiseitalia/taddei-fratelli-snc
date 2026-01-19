import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Costruzioni from './pages/Costruzioni'
import Magazzino from './pages/Magazzino'
import Immobiliare from './pages/Immobiliare'
import Partner from './pages/Partner'
import Contatti from './pages/Contatti'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/costruzioni" element={<Costruzioni />} />
        <Route path="/magazzino" element={<Magazzino />} />
        <Route path="/immobiliare" element={<Immobiliare />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </MainLayout>
  )
}

export default App
