import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SingleProject from './pages/SingleProject'
import Navbar from './components/Navbar'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' exact />
        <Route element={<SingleProject />} path='/projects/:slug' exact />
      </Routes>
    </Router>
  )
}

export default App
