import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PaginaPrincipal from './components/PaginaPrincipal'
import CrearAuto from './components/CrearAuto'
function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/crear-auto" element={<CrearAuto />} />
          </Routes>
        </div>
      </Router>
    </div>

  )
}

export default App
