import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PaginaPrincipal from './components/PaginaPrincipal'
import CrearAuto from './components/CrearAuto'
import CrearReparacion from './components/CrearReparacion'
import CrearReporteA from './components/CrearReporteA'
function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/crear-auto" element={<CrearAuto />} />
            <Route path="/crear-reparacion" element={<CrearReparacion />} />
            <Route path="/crear-reporte-a" element={<CrearReporteA />} />
          
          </Routes>
        </div>
      </Router>
    </div>

  )
}

export default App
