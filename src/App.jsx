import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SingleProject from './pages/SingleProject'
import Navbar from './components/Navbar'
import Mouse from './Mouse'

function App() {

  return (
    <Router>
      <Mouse />
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' exact />
        <Route element={<SingleProject />} path='/projects/:slug' exact />
      </Routes>
    </Router>
  )
}

export default App
